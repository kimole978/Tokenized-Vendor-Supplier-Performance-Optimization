# Tokenized Vendor Supplier Performance Optimization

A comprehensive blockchain-based system for managing and optimizing supplier relationships through performance measurement, scorecard generation, improvement planning, and relationship optimization.

## Overview

This system provides a decentralized approach to supplier management using Clarity smart contracts on the Stacks blockchain. It enables procurement managers to track supplier performance, generate scorecards, create improvement plans, and optimize supplier relationships through tokenized incentives.

## Features

### 🔐 Procurement Manager Verification
- Secure verification system for procurement managers
- Role-based access control
- Manager profile management with department tracking

### 📊 Performance Measurement
- Multi-dimensional performance tracking (Quality, Delivery, Cost, Service)
- Historical performance data storage
- Automated overall score calculation
- Performance trend analysis

### 📋 Scorecard Generation
- Automated scorecard creation based on performance data
- Letter grade system (A-F)
- Strength and weakness identification
- Scheduled review cycles

### 🎯 Improvement Planning
- Customizable improvement plans for underperforming suppliers
- Milestone tracking and progress monitoring
- Target score setting and timeline management
- Plan status updates and completion tracking

### 🤝 Relationship Optimization
- Tiered supplier relationship management
- Partnership level optimization based on performance
- Dynamic contract terms and incentive structures
- Strategic alignment assessment

## Smart Contracts

### 1. Procurement Manager Contract (\`procurement-manager.clar\`)
Manages the verification and authorization of procurement managers who can interact with the system.

**Key Functions:**
- \`verify-manager\`: Add new verified procurement managers
- \`revoke-manager\`: Remove manager verification
- \`is-verified-manager\`: Check manager verification status

### 2. Performance Measurement Contract (\`performance-measurement.clar\`)
Tracks and measures supplier performance across multiple dimensions.

**Key Functions:**
- \`record-performance\`: Record supplier performance metrics
- \`get-supplier-performance\`: Retrieve current performance data
- \`calculate-overall-score\`: Calculate weighted performance score

### 3. Scorecard Generation Contract (\`scorecard-generation.clar\`)
Generates comprehensive supplier scorecards based on performance data.

**Key Functions:**
- \`generate-scorecard\`: Create supplier scorecard
- \`get-supplier-scorecard\`: Retrieve scorecard data
- \`get-rating-text\`: Convert scores to readable ratings

### 4. Improvement Planning Contract (\`improvement-planning.clar\`)
Creates and manages supplier improvement plans with milestone tracking.

**Key Functions:**
- \`create-improvement-plan\`: Create new improvement plan
- \`update-plan-status\`: Update plan status
- \`record-milestone-progress\`: Track milestone completion

### 5. Relationship Optimization Contract (\`relationship-optimization.clar\`)
Optimizes supplier relationships based on performance and strategic value.

**Key Functions:**
- \`optimize-relationship\`: Set supplier relationship tier
- \`update-relationship-metrics\`: Update relationship metrics
- \`recommend-optimization\`: Get optimization recommendations

## Getting Started

### Prerequisites
- Stacks blockchain development environment
- Clarity CLI tools
- Node.js and npm for testing

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd tokenized-vendor-supplier-optimization
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run tests:
   \`\`\`bash
   npm test
   \`\`\`

### Deployment

Deploy contracts to Stacks blockchain:

\`\`\`bash
# Deploy procurement manager contract first
clarinet deploy procurement-manager.clar

# Deploy other contracts in order
clarinet deploy performance-measurement.clar
clarinet deploy scorecard-generation.clar
clarinet deploy improvement-planning.clar
clarinet deploy relationship-optimization.clar
\`\`\`

## Usage Examples

### 1. Verify a Procurement Manager
\`\`\`clarity
(contract-call? .procurement-manager verify-manager 'SP1234... "John Doe" "Procurement")
\`\`\`

### 2. Record Supplier Performance
\`\`\`clarity
(contract-call? .performance-measurement record-performance 'SP5678... u85 u90 u80 u88)
\`\`\`

### 3. Generate Supplier Scorecard
\`\`\`clarity
(contract-call? .scorecard-generation generate-scorecard 'SP5678...)
\`\`\`

### 4. Create Improvement Plan
\`\`\`clarity
(contract-call? .improvement-planning create-improvement-plan
'SP5678...
"Focus on delivery and cost optimization"
u90 u95 u85 u90
u2160
"Q1: Process review, Q2: Implementation, Q3: Evaluation")
\`\`\`

### 5. Optimize Supplier Relationship
\`\`\`clarity
(contract-call? .relationship-optimization optimize-relationship
'SP5678...
"Preferred"
u3
u4)
\`\`\`

## Performance Metrics

The system tracks four key performance dimensions:

- **Quality Score** (0-100): Product/service quality metrics
- **Delivery Score** (0-100): On-time delivery performance
- **Cost Score** (0-100): Cost competitiveness and value
- **Service Score** (0-100): Customer service and support quality

## Relationship Tiers

1. **Strategic Partner** (Level 4-5): Long-term strategic relationships
2. **Preferred Supplier** (Level 3): Preferred status with enhanced terms
3. **Standard Plus** (Level 2): Above-average suppliers with some benefits
4. **Standard** (Level 1): Basic supplier relationship

## Security Features

- Role-based access control through procurement manager verification
- Immutable performance history on blockchain
- Transparent scoring and evaluation processes
- Audit trail for all supplier interactions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

## Roadmap

- [ ] Integration with external performance data sources
- [ ] Advanced analytics and reporting dashboard
- [ ] Mobile application for procurement managers
- [ ] AI-powered supplier recommendations
- [ ] Multi-chain deployment support

