import { describe, it, expect, beforeEach } from 'vitest'

describe('Procurement Manager Contract', () => {
  let contractState
  let mockTxSender
  
  beforeEach(() => {
    contractState = {
      verifiedManagers: new Map(),
      managerDetails: new Map(),
      contractOwner: 'SP1234567890ABCDEF'
    }
    mockTxSender = 'SP1234567890ABCDEF'
  })
  
  // Mock contract functions
  const verifyManager = (manager, name, department, txSender = mockTxSender) => {
    if (txSender !== contractState.contractOwner) {
      return { error: 'ERR_UNAUTHORIZED' }
    }
    
    if (contractState.verifiedManagers.has(manager)) {
      return { error: 'ERR_ALREADY_VERIFIED' }
    }
    
    contractState.verifiedManagers.set(manager, true)
    contractState.managerDetails.set(manager, {
      name,
      department,
      verificationDate: Date.now()
    })
    
    return { success: true }
  }
  
  const revokeManager = (manager, txSender = mockTxSender) => {
    if (txSender !== contractState.contractOwner) {
      return { error: 'ERR_UNAUTHORIZED' }
    }
    
    if (!contractState.verifiedManagers.has(manager)) {
      return { error: 'ERR_NOT_VERIFIED' }
    }
    
    contractState.verifiedManagers.delete(manager)
    contractState.managerDetails.delete(manager)
    
    return { success: true }
  }
  
  const isVerifiedManager = (manager) => {
    return contractState.verifiedManagers.get(manager) || false
  }
  
  const getManagerDetails = (manager) => {
    return contractState.managerDetails.get(manager) || null
  }
  
  describe('Manager Verification', () => {
    it('should verify a new manager successfully', () => {
      const result = verifyManager('SP9876543210FEDCBA', 'John Doe', 'Procurement')
      
      expect(result.success).toBe(true)
      expect(isVerifiedManager('SP9876543210FEDCBA')).toBe(true)
      
      const details = getManagerDetails('SP9876543210FEDCBA')
      expect(details.name).toBe('John Doe')
      expect(details.department).toBe('Procurement')
    })
    
    it('should reject verification from unauthorized user', () => {
      const result = verifyManager('SP9876543210FEDCBA', 'John Doe', 'Procurement', 'SP_UNAUTHORIZED')
      
      expect(result.error).toBe('ERR_UNAUTHORIZED')
      expect(isVerifiedManager('SP9876543210FEDCBA')).toBe(false)
    })
    
    it('should reject duplicate verification', () => {
      verifyManager('SP9876543210FEDCBA', 'John Doe', 'Procurement')
      const result = verifyManager('SP9876543210FEDCBA', 'Jane Smith', 'Finance')
      
      expect(result.error).toBe('ERR_ALREADY_VERIFIED')
    })
    
    it('should revoke manager successfully', () => {
      verifyManager('SP9876543210FEDCBA', 'John Doe', 'Procurement')
      const result = revokeManager('SP9876543210FEDCBA')
      
      expect(result.success).toBe(true)
      expect(isVerifiedManager('SP9876543210FEDCBA')).toBe(false)
      expect(getManagerDetails('SP9876543210FEDCBA')).toBe(null)
    })
    
    it('should reject revocation of non-verified manager', () => {
      const result = revokeManager('SP_NONEXISTENT')
      
      expect(result.error).toBe('ERR_NOT_VERIFIED')
    })
  })
  
  describe('Manager Details', () => {
    it('should store and retrieve manager details correctly', () => {
      verifyManager('SP9876543210FEDCBA', 'Alice Johnson', 'Supply Chain')
      
      const details = getManagerDetails('SP9876543210FEDCBA')
      expect(details.name).toBe('Alice Johnson')
      expect(details.department).toBe('Supply Chain')
      expect(details.verificationDate).toBeDefined()
    })
    
    it('should return null for non-existent manager', () => {
      const details = getManagerDetails('SP_NONEXISTENT')
      expect(details).toBe(null)
    })
  })
})
