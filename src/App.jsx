import { useEffect, useState } from 'react'
import './App.css'
import CareersPage from './Careers.jsx'
import AdminPage from './Admin.jsx'
import RAndDLabPage from './RAndDLab.jsx'
import EmergingTechnologiesPage from './EmergingTechnologies.jsx'
import AIAgentsPage from './AIAgents.jsx'
import VoiceAIPage from './VoiceAI.jsx'
import IntelligentSystemPage from './IntelligentSystem.jsx'
import LLMsPage from './LLMs.jsx'
import RAGSystemsPage from './RAGSystems.jsx'
import AIAutomationPage from './AIAutomation.jsx'
import ComputerVisionPage from './ComputerVision.jsx'
import DataIntelligencePage from './DataIntelligence.jsx'
import AIInfrastructurePage from './AIInfrastructure.jsx'
import BusinessAutomationPage from './BusinessAutomation.jsx'
import AICustomerSystemsPage from './AICustomerSystems.jsx'
import AIVoiceSolutionsPage from './AIVoiceSolutions.jsx'
import IntelligentDataSystemsPage from './IntelligentDataSystems.jsx'
import CustomAISystemsPage from './CustomAISystems.jsx'
import EnterpriseSolutionsPage from './EnterpriseSolutions.jsx'
import WorkflowIntelligencePage from './WorkflowIntelligence.jsx'
import AIIntegrationPage from './AIIntegration.jsx'
import SoftwareSystemsPage from './SoftwareSystems.jsx'
import DigitalTransformationPage from './DigitalTransformation.jsx'
import AISystemsPage from './AISystems.jsx'
import SoftwareDevelopmentPage from './SoftwareDevelopment.jsx'
import PlatformDevelopmentPage from './PlatformDevelopment.jsx'
import APIEngineeringPage from './APIEngineering.jsx'
import SystemArchitecturePage from './SystemArchitecture.jsx'
import CloudInfrastructurePage from './CloudInfrastructure.jsx'
import KnowledgeSystemsPage from './KnowledgeSystems.jsx'
import AnalyticsPage from './Analytics.jsx'
import AutomationPage from './Automation.jsx'
import ResearchPage from './Research.jsx'
import TechnologyPage from './Technology.jsx'
import CaseStudiesPage from './CaseStudies.jsx'
import RealEstatePage from './RealEstate.jsx'
import HealthcarePage from './Healthcare.jsx'
import FinancePage from './Finance.jsx'
import SaaSPage from './SaaS.jsx'
import ProfessionalServicesPage from './ProfessionalServices.jsx'
import LogisticsPage from './Logistics.jsx'
import EducationPage from './Education.jsx'
import ContactPage from './Contact.jsx'
import AboutPage from './About.jsx'
import OurApproachPage from './OurApproach.jsx'
import RDPage from './RD.jsx'
import InsightsPage from './Insights.jsx'

const capabilities = [
  ['01', 'AI Research & Development', 'Research, experimentation, prototyping, model evaluation, AI architecture, and applied AI development.'],
  ['02', 'Custom AI Systems', 'AI systems shaped around your workflows, data, requirements, and operational goals.'],
  ['03', 'AI Agents & Voice Systems', 'Conversational agents, voice systems, customer support, sales, and workflow agents.'],
  ['04', 'Business Automation', 'Automate repetitive processes, operations, reporting, and internal workflows.'],
  ['05', 'Software & Platforms', 'Custom web applications, enterprise platforms, dashboards, APIs, and internal tools.'],
  ['06', 'Data & Intelligence', 'Data pipelines, analytics, intelligent search, knowledge systems, and decision support.'],
  ['07', 'AI Integration', 'Connect AI to CRM, ERP, websites, communication platforms, and existing software.'],
  ['08', 'Deployment & Infrastructure', 'Production cloud infrastructure, APIs, databases, monitoring, security, and scale.'],
  ['09', 'Continuous R&D', 'Keep researching and improving deployed systems as technology and requirements evolve.'],
]
const capabilityVisuals = [
  ['MODEL', 'DATA', 'EVALUATION', 'EXPERIMENT', 'RESEARCH', 'ARCHITECTURE', 'SYSTEM'],
  ['USER', 'AI', 'LOGIC', 'DATA', 'SYSTEM', 'DEPLOYMENT'],
  ['VOICE', 'AGENT', 'TOOLS', 'MEMORY', 'ACTION', 'SYSTEM'],
  ['TRIGGER', 'WORKFLOW', 'AI', 'DECISION', 'ACTION', 'MONITOR'],
  ['UI', 'API', 'BACKEND', 'DATABASE', 'INFRASTRUCTURE', 'PLATFORM'],
  ['DATA', 'PIPELINE', 'KNOWLEDGE', 'SEARCH', 'INSIGHT', 'INTELLIGENCE'],
  ['CRM', 'ERP', 'API', 'AI', 'WORKFLOW', 'SYSTEM'],
  ['BUILD', 'TEST', 'DEPLOY', 'MONITOR', 'SCALE', 'PRODUCTION'],
  ['RESEARCH', 'EVALUATE', 'IMPROVE', 'RELEASE', 'RESEARCH', 'EVOLVE'],
]
const problems = [['Manual process', 'Intelligent automation'], ['High support load', 'AI customer interaction'], ['Repetitive calls', 'AI voice agents'], ['Scattered business data', 'Knowledge systems'], ['Legacy software', 'Modernization & integration'], ['Complex workflow', 'Custom AI system'], ['New technology needed', 'Research to production'], ['AI for existing software', 'AI integration']]
const steps = [['01', 'Discover', 'Understand the business, workflow, users, data, and constraints.'], ['02', 'Research', 'Study technologies, architectures, models, APIs, datasets, and approaches.'], ['03', 'Architect', 'Design the technical architecture and solution strategy.'], ['04', 'Build', 'Develop the models, agents, applications, automation, APIs, and infrastructure.'], ['05', 'Integrate', 'Connect the solution with existing software, databases, and business workflows.'], ['06', 'Deploy', 'Move the solution into a production environment.'], ['07', 'Improve', 'Monitor performance, analyze feedback, optimize, and continue R&D.']]

const problemSolutionData = [
  {
    id: '01',
    problem: 'MANUAL PROCESS',
    solution: 'INTELLIGENT AUTOMATION',
    icon: 'automation',
    subtitle: '01 / AUTOMATION',
    cardTitle: 'MANUAL PROCESS',
    desc: 'Transform repetitive manual tasks into high-speed automated workflows, eliminating human error and accelerating output.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We map out existing workflow bottlenecks and repetitive manual steps.' },
      { num: '02', title: 'RESEARCH', desc: 'We identify suitable automation engines, APIs, and AI agent frameworks.' },
      { num: '03', title: 'DESIGN', desc: 'We architect autonomous workflow pipelines and validation loops.' },
      { num: '04', title: 'DEVELOP', desc: 'We build and test custom automation scripts and seamless integrations.' },
      { num: '05', title: 'DEPLOY', desc: 'We deploy with real-time monitoring and fallback mechanisms.' }
    ]
  },
  {
    id: '02',
    problem: 'HIGH SUPPORT LOAD',
    solution: 'AI CUSTOMER INTERACTION',
    icon: 'headset',
    subtitle: '02 / RESEARCH',
    cardTitle: 'HIGH SUPPORT LOAD',
    desc: 'Handle high customer support volume with AI-powered interactions, reducing response time and improving customer satisfaction.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We analyze support data, identify common issues and customer pain points.' },
      { num: '02', title: 'RESEARCH', desc: 'We explore the best AI models, tools, and strategies for automation.' },
      { num: '03', title: 'DESIGN', desc: 'We design conversation flows and system architecture.' },
      { num: '04', title: 'DEVELOP', desc: 'We build and integrate the AI solution with your systems.' },
      { num: '05', title: 'DEPLOY', desc: 'We launch, monitor, and continuously improve performance.' }
    ]
  },
  {
    id: '03',
    problem: 'REPETITIVE CALLS',
    solution: 'AI VOICE AGENTS',
    icon: 'mic',
    subtitle: '03 / VOICE',
    cardTitle: 'REPETITIVE CALLS',
    desc: 'Deploy voice AI agents that handle inbound and outbound calls naturally with sub-second response latency.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We record call patterns, intent scripts, and frequent inquiry types.' },
      { num: '02', title: 'RESEARCH', desc: 'We select low-latency speech synthesis, STT, and voice LLM pipelines.' },
      { num: '03', title: 'DESIGN', desc: 'We design conversational state machines and interruption handling.' },
      { num: '04', title: 'DEVELOP', desc: 'We build custom voice tools connected with telephony infrastructure.' },
      { num: '05', title: 'DEPLOY', desc: 'We deploy live voice agents with call sentiment & quality analytics.' }
    ]
  },
  {
    id: '04',
    problem: 'SCATTERED BUSINESS DATA',
    solution: 'KNOWLEDGE SYSTEMS',
    icon: 'database',
    subtitle: '04 / DATA',
    cardTitle: 'SCATTERED BUSINESS DATA',
    desc: 'Consolidate fragmented documents, databases, and silos into a unified vector retrieval knowledge system.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We audit data sources, access permissions, and document formats.' },
      { num: '02', title: 'RESEARCH', desc: 'We select optimal embedding models, vector DBs, and chunking strategies.' },
      { num: '03', title: 'DESIGN', desc: 'We architect context retrieval pipelines and hybrid search indexing.' },
      { num: '04', title: 'DEVELOP', desc: 'We build document parsing pipelines and secure RAG backends.' },
      { num: '05', title: 'DEPLOY', desc: 'We roll out company-wide semantic search and intelligent dynamic QA.' }
    ]
  },
  {
    id: '05',
    problem: 'LEGACY SOFTWARE',
    solution: 'MODERNIZATION & INTEGRATION',
    icon: 'legacy',
    subtitle: '05 / SYSTEM',
    cardTitle: 'LEGACY SOFTWARE',
    desc: 'Connect modern AI capabilities into legacy databases and ERP platforms without rewriting core enterprise infrastructure.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We evaluate legacy APIs, database protocols, and data schemas.' },
      { num: '02', title: 'RESEARCH', desc: 'We design secure wrapper middleware and asynchronous queue layers.' },
      { num: '03', title: 'DESIGN', desc: 'We blueprint API adapters and real-time synchronization pipelines.' },
      { num: '04', title: 'DEVELOP', desc: 'We write robust API bridges and data normalization services.' },
      { num: '05', title: 'DEPLOY', desc: 'We integrate with zero downtime and live telemetry logging.' }
    ]
  },
  {
    id: '06',
    problem: 'COMPLEX WORKFLOW',
    solution: 'CUSTOM AI SYSTEM',
    icon: 'workflow',
    subtitle: '06 / ARCHITECTURE',
    cardTitle: 'COMPLEX WORKFLOW',
    desc: 'Streamline complex multi-departmental operations into orchestrated multi-agent AI ecosystems.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We detail end-to-end handoffs, edge cases, and human decision checkpoints.' },
      { num: '02', title: 'RESEARCH', desc: 'We evaluate agentic orchestration tools, state management, and memory.' },
      { num: '03', title: 'DESIGN', desc: 'We design supervisor-agent architectures and execution DAGs.' },
      { num: '04', title: 'DEVELOP', desc: 'We develop multi-agent networks with explicit guardrails.' },
      { num: '05', title: 'DEPLOY', desc: 'We launch human-in-the-loop workflows with granular audit trails.' }
    ]
  },
  {
    id: '07',
    problem: 'NEW TECHNOLOGY NEEDED',
    solution: 'RESEARCH TO PRODUCTION',
    icon: 'tech',
    subtitle: '07 / INNOVATION',
    cardTitle: 'NEW TECHNOLOGY NEEDED',
    desc: 'Evaluate cutting-edge AI breakthroughs and rapidly transition theoretical concepts into production-grade systems.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We benchmark emerging papers, models, and industry breakthroughs.' },
      { num: '02', title: 'RESEARCH', desc: 'We run feasibility spikes and proof-of-concept benchmarks.' },
      { num: '03', title: 'DESIGN', desc: 'We specify production architecture, latency targets, and scalability.' },
      { num: '04', title: 'DEVELOP', desc: 'We fine-tune models, optimize latency, and harden security.' },
      { num: '05', title: 'DEPLOY', desc: 'We deploy resilient cloud infrastructure with continuous evaluation.' }
    ]
  },
  {
    id: '08',
    problem: 'AI FOR EXISTING SOFTWARE',
    solution: 'AI INTEGRATION',
    icon: 'integration',
    subtitle: '08 / EXPANSION',
    cardTitle: 'AI FOR EXISTING SOFTWARE',
    desc: 'Supercharge your existing SaaS or custom software with smart AI features, dynamic chat, and predictive intelligence.',
    steps: [
      { num: '01', title: 'ANALYZE', desc: 'We analyze existing software architecture and user flow touchpoints.' },
      { num: '02', title: 'RESEARCH', desc: 'We research seamless UX embed patterns and light LLM endpoints.' },
      { num: '03', title: 'DESIGN', desc: 'We design interactive AI UI components matching your existing system.' },
      { num: '04', title: 'DEVELOP', desc: 'We build micro-APIs and frontend components for zero-friction integration.' },
      { num: '05', title: 'DEPLOY', desc: 'We roll out features seamlessly with performance monitoring.' }
    ]
  }
]

const renderProblemIcon = (icon) => {
  if (icon === 'headset') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    )
  }
  if (icon === 'automation') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    )
  }
  if (icon === 'mic') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    )
  }
  if (icon === 'database') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  }
  if (icon === 'legacy') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  }
  if (icon === 'workflow') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <path d="M10 6h4" />
        <path d="M7 10v7h7" />
      </svg>
    )
  }
  if (icon === 'tech') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


const processStepsData = [
  { num: '01', title: 'Discover', desc: 'Understand the business, users, data, and constraints.', points: ['Business goals', 'User needs', 'Current challenges'], icon: 'discover' },
  { num: '02', title: 'Research', desc: 'Study technologies, architectures, models, APIs, datasets, and approaches.', points: ['Market & competitor study', 'Technology evaluation', 'Feasibility analysis'], icon: 'research' },
  { num: '03', title: 'Architect', desc: 'Design the technical architecture and solution strategy.', points: ['System design', 'Scalability planning', 'Security & compliance'], icon: 'architect' },
  { num: '04', title: 'Build', desc: 'Develop the models, agents, applications, automation, APIs, and infrastructure.', points: ['Development', 'Testing & validation', 'Iterative improvements'], icon: 'build' },
  { num: '05', title: 'Integrate', desc: 'Connect the solution with existing software, databases, and business workflows.', points: ['Third-party integrations', 'Data migration', 'Workflow automation'], icon: 'integrate' },
  { num: '06', title: 'Deploy', desc: 'Move the solution into a production environment.', points: ['Cloud deployment', 'Monitoring setup', 'User enablement'], icon: 'deploy' },
  { num: '07', title: 'Improve', desc: 'Monitor performance, analyze feedback, optimize, and continue R&D.', points: ['Performance monitoring', 'User feedback', 'Continuous innovation'], icon: 'improve', active: true },
]

const renderProcessIcon = (icon) => {
  if (icon === 'discover') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="11.5" cy="14.5" r="2.5" />
        <path d="M13.25 16.25L15 18" />
      </svg>
    )
  }
  if (icon === 'research') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  }
  if (icon === 'architect') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  }
  if (icon === 'build') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  if (icon === 'integrate') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  }
  if (icon === 'deploy') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m16 16-4-4-4 4" />
      </svg>
    )
  }
  if (icon === 'improve') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  }
  return null
}

const buildCardsData = [
  { id: '01', title: 'AI RESEARCH & DEVELOPMENT', desc: 'Experiments, prototypes, evaluation, and applied AI architecture.', icon: 'database' },
  { id: '02', title: 'CUSTOM AI SYSTEMS', desc: 'Intelligent systems designed around your workflows and data.', icon: 'cube' },
  { id: '03', title: 'AI AGENTS', desc: 'Conversational, workflow, sales, and support agents.', icon: 'sparkles' },
  { id: '04', title: 'VOICE AI', desc: 'Voice systems for customer interaction and operations.', icon: 'mic' },
  { id: '05', title: 'BUSINESS AUTOMATION', desc: 'Automation for repetitive processes, reporting, and operations.', icon: 'gear' },
  { id: '06', title: 'SOFTWARE ENGINEERING', desc: 'Web apps, platforms, APIs, dashboards, and internal tools.', icon: 'code' },
  { id: '07', title: 'DATA INTELLIGENCE', desc: 'Pipelines, search, knowledge systems, and decision support.', icon: 'chart' },
  { id: '08', title: 'AI INTEGRATION', desc: 'AI connected to CRM, ERP, communication, and existing software.', icon: 'link' },
  { id: '09', title: 'DEPLOYMENT & INFRASTRUCTURE', desc: 'Cloud, APIs, databases, monitoring, security, and scale.', icon: 'cloud' }
]

const renderBuildIcon = (icon) => {
  if (icon === 'database') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  }
  if (icon === 'cube') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  }
  if (icon === 'sparkles') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    )
  }
  if (icon === 'mic') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    )
  }
  if (icon === 'gear') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  if (icon === 'code') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  if (icon === 'chart') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  }
  if (icon === 'link') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  }
  if (icon === 'cloud') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  }
  return null
}

const challengesData = [
  { id: '01', title: 'Manual Operations', desc: 'Repetitive processes consume time and resources.', points: ['Time-consuming workflows', 'Higher operational costs', 'Increased human errors'], visual: 'documents' },
  { id: '02', title: 'Fragmented Data', desc: 'Important information exists across disconnected systems.', points: ['Data scattered across tools', 'Lack of real-time visibility', 'Difficult reporting and insights'], visual: 'data' },
  { id: '03', title: 'Customer Operations', desc: 'Sales and support require constant manual interaction.', points: ['High response times', 'Inconsistent customer experience', 'Limited scalability'], visual: 'customer' },
  { id: '04', title: 'Legacy Systems', desc: 'Existing technology limits new capabilities.', points: ['Outdated infrastructure', 'Hard to integrate', 'Slower innovation'], visual: 'legacy' },
  { id: '05', title: 'Complex Workflows', desc: 'Business processes are difficult to automate.', points: ['Multiple tools and approvals', 'Lack of standardization', 'Hard to track and manage'], visual: 'workflow' },
  { id: '06', title: 'AI Adoption', desc: 'Businesses want AI but need to know what to build.', points: ['Unclear use cases', 'Lack of technical guidance', 'Difficulty in implementation'], visual: 'ai' }
]

const renderChallengeVisual = (type) => {
  if (type === 'documents') {
    return (
      <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none">
        <defs>
          <linearGradient id="docGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c4075" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#251e40" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="docGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5b4d8c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#322856" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="docGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c6aa6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#453870" stopOpacity="0.98" />
          </linearGradient>
          <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <circle cx="80" cy="80" r="52" fill="#8b5cf6" opacity="0.18" filter="url(#purpleGlow)" />
        {/* Document 3 */}
        <g transform="translate(46, 20) rotate(14)">
          <rect x="0" y="0" width="56" height="76" rx="6" fill="url(#docGrad1)" stroke="#8b5cf6" strokeOpacity="0.4" strokeWidth="1.2" />
        </g>
        {/* Document 2 */}
        <g transform="translate(36, 26) rotate(7)">
          <rect x="0" y="0" width="58" height="78" rx="6" fill="url(#docGrad2)" stroke="#a78bfa" strokeOpacity="0.5" strokeWidth="1.2" />
          <line x1="10" y1="16" x2="38" y2="16" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1="10" y1="26" x2="46" y2="26" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </g>
        {/* Document 1 */}
        <g transform="translate(24, 32)">
          <rect x="0" y="0" width="62" height="82" rx="6" fill="url(#docGrad3)" stroke="#ddd6fe" strokeWidth="1.2" />
          <line x1="10" y1="18" x2="50" y2="18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <line x1="10" y1="28" x2="52" y2="28" stroke="#ddd6fe" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="10" y1="37" x2="48" y2="37" stroke="#ddd6fe" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="10" y1="46" x2="52" y2="46" stroke="#ddd6fe" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="10" y1="55" x2="36" y2="55" stroke="#ddd6fe" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
        </g>
        {/* Circle badge with 'L' */}
        <g transform="translate(94, 94)">
          <circle cx="18" cy="18" r="18" fill="#0c0d14" stroke="#c4b5fd" strokeWidth="2" />
          <circle cx="18" cy="18" r="15" fill="#2d224b" opacity="0.95" />
          <text x="18" y="23" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">L</text>
        </g>
      </svg>
    )
  }
  if (type === 'data') {
    return (
      <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none">
        <defs>
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5b4d8c" />
            <stop offset="100%" stopColor="#322856" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#251e40" />
            <stop offset="100%" stopColor="#141024" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b3063" />
            <stop offset="100%" stopColor="#1e1838" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="48" fill="#8b5cf6" opacity="0.16" filter="blur(12px)" />
        {/* Layer 3 (Bottom) */}
        <g transform="translate(80, 96)">
          <path d="M 0 -16 L 28 0 L 0 16 L -28 0 Z" fill="url(#cubeTop)" stroke="#7c3aed" strokeWidth="1" />
          <path d="M -28 0 L 0 16 L 0 34 L -28 18 Z" fill="url(#cubeLeft)" stroke="#7c3aed" strokeWidth="0.8" />
          <path d="M 0 16 L 28 0 L 28 18 L 0 34 Z" fill="url(#cubeRight)" stroke="#7c3aed" strokeWidth="0.8" />
        </g>
        {/* Layer 2 (Middle) */}
        <g transform="translate(80, 72)">
          <path d="M 0 -16 L 28 0 L 0 16 L -28 0 Z" fill="url(#cubeTop)" stroke="#a78bfa" strokeWidth="1" />
          <path d="M -28 0 L 0 16 L 0 22 L -28 6 Z" fill="url(#cubeLeft)" stroke="#a78bfa" strokeWidth="0.8" />
          <path d="M 0 16 L 28 0 L 28 6 L 0 22 Z" fill="url(#cubeRight)" stroke="#a78bfa" strokeWidth="0.8" />
        </g>
        {/* Layer 1 (Top) */}
        <g transform="translate(80, 48)">
          <path d="M 0 -16 L 28 0 L 0 16 L -28 0 Z" fill="url(#cubeTop)" stroke="#c4b5fd" strokeWidth="1.2" />
          <path d="M -28 0 L 0 16 L 0 22 L -28 6 Z" fill="url(#cubeLeft)" stroke="#c4b5fd" strokeWidth="0.8" />
          <path d="M 0 16 L 28 0 L 28 6 L 0 22 Z" fill="url(#cubeRight)" stroke="#c4b5fd" strokeWidth="0.8" />
        </g>

        {/* Top-Left Badge: Green X */}
        <g transform="translate(18, 28)">
          <rect x="0" y="0" width="22" height="22" rx="5" fill="#15803d" stroke="#4ade80" strokeWidth="1.2" />
          <path d="M 6 6 L 16 16 M 16 6 L 6 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Top-Right Badge: Purple list lines */}
        <g transform="translate(122, 24)">
          <rect x="0" y="0" width="22" height="22" rx="5" fill="#5b21b6" stroke="#a78bfa" strokeWidth="1.2" />
          <line x1="5" y1="7" x2="17" y2="7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="11" x2="17" y2="11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="15" x2="13" y2="15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Bottom-Left Badge: Purple 4 dots */}
        <g transform="translate(14, 94)">
          <rect x="0" y="0" width="22" height="22" rx="5" fill="#701a75" stroke="#f43f5e" strokeWidth="1.2" />
          <circle cx="7" cy="7" r="2.2" fill="#eab308" />
          <circle cx="15" cy="7" r="2.2" fill="#22c55e" />
          <circle cx="7" cy="15" r="2.2" fill="#ec4899" />
          <circle cx="15" cy="15" r="2.2" fill="#38bdf8" />
        </g>

        {/* Bottom-Right Badge: Orange User */}
        <g transform="translate(120, 100)">
          <rect x="0" y="0" width="22" height="22" rx="5" fill="#c2410c" stroke="#fb923c" strokeWidth="1.2" />
          <circle cx="11" cy="8" r="3" fill="#ffffff" />
          <path d="M 5 18 C 5 13 8 13 11 13 C 14 13 17 13 17 18 Z" fill="#ffffff" />
        </g>
      </svg>
    )
  }
  if (type === 'customer') {
    return (
      <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none">
        <defs>
          <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
        </defs>
        <circle cx="75" cy="75" r="46" fill="#8b5cf6" opacity="0.18" filter="blur(14px)" />

        {/* Top small dark badge */}
        <g transform="translate(48, 20)">
          <rect x="0" y="0" width="46" height="20" rx="5" fill="#131120" stroke="#6d28d9" strokeWidth="1.2" />
          <rect x="6" y="6" width="16" height="4" rx="2" fill="#a78bfa" />
          <line x1="26" y1="8" x2="38" y2="8" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Main chat bubble */}
        <g transform="translate(20, 46)">
          <rect x="0" y="0" width="94" height="60" rx="12" fill="url(#chatGrad)" stroke="#c4b5fd" strokeWidth="1.5" />
          <rect x="14" y="16" width="66" height="8" rx="4" fill="#ffffff" />
          <rect x="14" y="32" width="44" height="7" rx="3.5" fill="#ddd6fe" opacity="0.85" />
        </g>

        {/* Attached User circle badge on bottom right */}
        <g transform="translate(98, 88)">
          <circle cx="18" cy="18" r="18" fill="#0d0e15" stroke="#c4b5fd" strokeWidth="2" />
          <circle cx="18" cy="18" r="15" fill="#6d28d9" />
          <circle cx="18" cy="13" r="4.5" fill="#ffffff" />
          <path d="M 9 27 C 9 21 13 20 18 20 C 23 20 27 21 27 27 Z" fill="#ffffff" />
        </g>
      </svg>
    )
  }
  if (type === 'legacy') {
    return (
      <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none">
        <defs>
          <linearGradient id="servTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5b4d8c" />
            <stop offset="100%" stopColor="#322856" />
          </linearGradient>
          <linearGradient id="servSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#251e40" />
            <stop offset="100%" stopColor="#141024" />
          </linearGradient>
        </defs>
        <circle cx="75" cy="80" r="48" fill="#8b5cf6" opacity="0.18" filter="blur(14px)" />

        {/* Server 3 (Bottom) */}
        <g transform="translate(75, 96)">
          <path d="M 0 -14 L 38 0 L 0 14 L -38 0 Z" fill="url(#servTop)" stroke="#7c3aed" strokeWidth="1" />
          <path d="M -38 0 L 0 14 L 0 24 L -38 10 Z" fill="url(#servSide)" stroke="#7c3aed" strokeWidth="0.8" />
          <path d="M 0 14 L 38 0 L 38 10 L 0 24 Z" fill="url(#servSide)" stroke="#7c3aed" strokeWidth="0.8" />
          <line x1="-24" y1="7" x2="-8" y2="13" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Server 2 (Middle) */}
        <g transform="translate(75, 70)">
          <path d="M 0 -14 L 38 0 L 0 14 L -38 0 Z" fill="url(#servTop)" stroke="#a78bfa" strokeWidth="1" />
          <path d="M -38 0 L 0 14 L 0 24 L -38 10 Z" fill="url(#servSide)" stroke="#a78bfa" strokeWidth="0.8" />
          <path d="M 0 14 L 38 0 L 38 10 L 0 24 Z" fill="url(#servSide)" stroke="#a78bfa" strokeWidth="0.8" />
          <line x1="-24" y1="7" x2="-8" y2="13" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Server 1 (Top) */}
        <g transform="translate(75, 44)">
          <path d="M 0 -14 L 38 0 L 0 14 L -38 0 Z" fill="url(#servTop)" stroke="#ddd6fe" strokeWidth="1.2" />
          <path d="M -38 0 L 0 14 L 0 24 L -38 10 Z" fill="url(#servSide)" stroke="#ddd6fe" strokeWidth="0.8" />
          <path d="M 0 14 L 38 0 L 38 10 L 0 24 Z" fill="url(#servSide)" stroke="#ddd6fe" strokeWidth="0.8" />
          <line x1="-24" y1="7" x2="-8" y2="13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Circle Link Badge on Bottom Right */}
        <g transform="translate(102, 92)">
          <circle cx="18" cy="18" r="18" fill="#0d0e15" stroke="#c4b5fd" strokeWidth="2" />
          <circle cx="18" cy="18" r="15" fill="#7c3aed" />
          <path d="M 12 18 C 12 15 15 15 18 18 C 21 21 24 21 24 18 C 24 15 21 15 18 18 C 15 21 12 21 12 18 Z" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    )
  }
  if (type === 'workflow') {
    return (
      <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none">
        <circle cx="80" cy="80" r="48" fill="#8b5cf6" opacity="0.16" filter="blur(14px)" />

        {/* Curved dotted line connecting node 1 to node 2 to node 3 */}
        <path d="M 52 46 C 114 46 114 85 96 85 M 96 85 C 75 85 45 100 52 120" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="3 3" fill="none" />

        {/* Top Node Card */}
        <g transform="translate(28, 24)">
          <rect x="0" y="0" width="46" height="34" rx="7" fill="#1d1733" stroke="#a78bfa" strokeWidth="1.2" />
          <rect x="6" y="6" width="18" height="6" rx="3" fill="#a78bfa" />
          <line x1="6" y1="20" x2="34" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Middle Node Card */}
        <g transform="translate(86, 68)">
          <rect x="0" y="0" width="48" height="34" rx="7" fill="#1d1733" stroke="#a78bfa" strokeWidth="1.2" />
          <line x1="8" y1="17" x2="30" y2="17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="38" cy="17" r="3.5" fill="#a78bfa" />
        </g>

        {/* Bottom Gear Node Card */}
        <g transform="translate(32, 104)">
          <rect x="0" y="0" width="46" height="34" rx="7" fill="#1d1733" stroke="#c4b5fd" strokeWidth="1.2" />
          <g transform="translate(23, 17)">
            <circle cx="0" cy="0" r="6" fill="none" stroke="#ffffff" strokeWidth="2" />
            <path d="M 0 -8 L 0 -6 M 0 6 L 0 8 M -8 0 L -6 0 M 6 0 L 8 0 M -5.5 -5.5 L -4 -4 M 4 4 L 5.5 5.5 M -5.5 5.5 L -4 4 M 4 -4 L 5.5 -5.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    )
  }
  if (type === 'ai') {
    return (
      <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none">
        <defs>
          <linearGradient id="aiChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#453870" />
            <stop offset="100%" stopColor="#1e1838" />
          </linearGradient>
          <filter id="aiGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <circle cx="56" cy="80" r="44" fill="#8b5cf6" opacity="0.3" filter="url(#aiGlow)" />

        {/* Processor Pins */}
        <g stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round">
          <line x1="42" y1="48" x2="42" y2="55" />
          <line x1="50" y1="48" x2="50" y2="55" />
          <line x1="58" y1="48" x2="58" y2="55" />
          <line x1="66" y1="48" x2="66" y2="55" />
          <line x1="42" y1="105" x2="42" y2="112" />
          <line x1="50" y1="105" x2="50" y2="112" />
          <line x1="58" y1="105" x2="58" y2="112" />
          <line x1="66" y1="105" x2="66" y2="112" />
          <line x1="25" y1="66" x2="32" y2="66" />
          <line x1="25" y1="74" x2="32" y2="74" />
          <line x1="25" y1="82" x2="32" y2="82" />
          <line x1="25" y1="90" x2="32" y2="90" />
          <line x1="80" y1="66" x2="87" y2="66" />
          <line x1="80" y1="74" x2="87" y2="74" />
          <line x1="80" y1="82" x2="87" y2="82" />
          <line x1="80" y1="90" x2="87" y2="90" />
        </g>

        {/* AI Chip */}
        <rect x="32" y="55" width="48" height="50" rx="8" fill="url(#aiChipGrad)" stroke="#c4b5fd" strokeWidth="1.5" />
        <text x="56" y="86" textAnchor="middle" fill="#ffffff" fontSize="17" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.5">AI</text>

        {/* Dotted lines to pills */}
        <path d="M 80 66 Q 98 48 106 38" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="2.5 2.5" fill="none" />
        <path d="M 80 80 Q 98 80 106 80" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="2.5 2.5" fill="none" />
        <path d="M 80 94 Q 98 112 106 122" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="2.5 2.5" fill="none" />

        {/* Strategy Pill */}
        <g transform="translate(102, 26)">
          <rect x="0" y="0" width="52" height="18" rx="9" fill="#0d0e15" stroke="#a78bfa" strokeWidth="1" />
          <circle cx="8" cy="9" r="2.5" fill="#a78bfa" />
          <text x="28" y="12" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">Strategy</text>
        </g>

        {/* Integration Pill */}
        <g transform="translate(102, 71)">
          <rect x="0" y="0" width="54" height="18" rx="9" fill="#0d0e15" stroke="#a78bfa" strokeWidth="1" />
          <circle cx="8" cy="9" r="2.5" fill="#a78bfa" />
          <text x="29" y="12" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">Integration</text>
        </g>

        {/* Results Pill */}
        <g transform="translate(102, 113)">
          <rect x="0" y="0" width="50" height="18" rx="9" fill="#0d0e15" stroke="#a78bfa" strokeWidth="1" />
          <circle cx="8" cy="9" r="2.5" fill="#a78bfa" />
          <text x="27" y="12" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">Results</text>
        </g>
      </svg>
    )
  }
  return null
}
const buildItems = [['AI Research & Development', 'Experiments, prototypes, evaluation, and applied AI architecture.'], ['Custom AI Systems', 'Intelligent systems designed around your workflows and data.'], ['AI Agents', 'Conversational, workflow, sales, and support agents.'], ['Voice AI', 'Voice systems for customer interaction and operations.'], ['Business Automation', 'Automation for repetitive processes, reporting, and operations.'], ['Software Engineering', 'Web apps, platforms, APIs, dashboards, and internal tools.'], ['Data Intelligence', 'Pipelines, search, knowledge systems, and decision support.'], ['AI Integration', 'AI connected to CRM, ERP, communication, and existing software.'], ['Deployment & Infrastructure', 'Cloud, APIs, databases, monitoring, security, and scale.']]
const reasons = [['Research first', 'We investigate before selecting technology.'], ['Business specific', 'Solutions are designed around real workflows.'], ['Engineering driven', 'Research becomes working technology.'], ['Production focused', 'Systems are built for deployment.'], ['Integration ready', 'Technology works with existing systems.'], ['Long-term R&D', 'We continuously improve deployed systems.']]
const engagements = [['R&D Partnership', 'Continuous technology research and development.', 'Build with Mentneo'], ['Custom Solution', 'A specific business problem requiring a custom AI or software system.', 'Discuss your problem'], ['Implementation & Deployment', 'Engineering, integration, and production deployment.', 'Start implementation']]
const labTopics = [['LLMs', 'Language models, evaluation, and practical reasoning systems.'], ['AI Agents', 'Autonomous workflows, tool use, orchestration, and task execution.'], ['Voice AI', 'Natural voice interfaces for customer and operational systems.'], ['RAG', 'Grounded knowledge systems built around trusted business data.'], ['Computer Vision', 'Systems that interpret images, documents, and physical environments.'], ['Automation', 'Reliable intelligent workflows that reduce repetitive work.'], ['Data Intelligence', 'Search, analytics, and decision support across connected data.'], ['Infrastructure', 'The production foundations that keep intelligent systems useful.']]
const menuData = {
  Research: { label: 'Explore research', primary: ['AI Research', 'R&D Lab', 'Emerging Technologies', 'AI Agents', 'Voice AI', 'Intelligent Systems'], secondary: ['LLMs', 'RAG Systems', 'AI Automation', 'Computer Vision', 'Data Intelligence', 'AI Infrastructure'], cta: 'Explore Mentneo R&D' },
  Solutions: { label: 'Solutions', primary: ['Business Automation', 'AI Customer Systems', 'AI Voice Solutions', 'Intelligent Data Systems', 'Custom AI Systems'], secondary: ['Enterprise Solutions', 'Workflow Intelligence', 'AI Integration', 'Software Systems', 'Digital Transformation'], cta: 'Tell us your business problem' },
  Capabilities: { label: 'Capabilities', columns: [['AI', 'AI Research', 'Research', 'AI Systems', 'AI Agents', 'Voice AI', 'Computer Vision'], ['Engineering', 'Software Development', 'Platform Development', 'API Engineering', 'System Architecture', 'Cloud Infrastructure'], ['Intelligence', 'Data Intelligence', 'Knowledge Systems', 'Analytics', 'Automation', 'AI Integration']], cta: 'Explore all capabilities' },
  Industries: { label: 'Industries', primary: ['Real Estate', 'Healthcare', 'Finance', 'Retail', 'Manufacturing'], secondary: ['Technology', 'SaaS', 'Professional Services', 'Logistics', 'Education'], cta: 'Explore industries' },
  Company: { label: 'Explore Mentneo', primary: ['About', 'Our Approach', 'R&D', 'Projects', 'Insights', 'Careers'], secondary: ['Research', 'Technology', 'Case Studies', 'Contact'], cta: 'Start an R&D conversation' },
}

const aiResearchItems = [
  { category: 'AI Research', date: 'Aug 26, 2026', title: 'Next-Generation Artificial Intelligence Research', description: 'Exploring advanced AI models, intelligent systems, reasoning, learning, automation, autonomous intelligence, and emerging artificial intelligence technologies.' },
  { category: 'AI Research', date: 'Aug 20, 2026', title: 'Advanced AI Reasoning', description: 'Researching reasoning, planning, problem solving, inference, decision-making, and complex intelligence capabilities in modern AI systems.' },
  { category: 'AI Research', date: 'Aug 15, 2026', title: 'Autonomous Intelligence', description: 'Exploring AI systems capable of understanding objectives, planning actions, using tools, learning from feedback, and completing complex tasks.' },
  { category: 'AI Research', date: 'Aug 10, 2026', title: 'Multimodal Artificial Intelligence', description: 'Researching AI systems that understand and generate text, images, audio, video, documents, and other forms of information.' },
  { category: 'AI Research', date: 'Aug 5, 2026', title: 'Future of Artificial Intelligence', description: 'Exploring emerging AI architectures, intelligent agents, advanced reasoning, AI safety, automation, and next-generation intelligent systems.' },
]
const slugifyResearch = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const routeContent = {
  '/research': ['01 / RESEARCH', 'We research', 'what’s next.', 'Mentneo explores emerging AI technologies and translates useful research into practical systems.', ['LLMs', 'RAG', 'AI Agents', 'Voice AI', 'Computer Vision', 'Multimodal AI', 'AI Automation', 'Data Intelligence', 'AI Infrastructure']],
  '/ai-research': ['01 / RESEARCH', 'We research', 'what’s next.', 'Mentneo explores emerging AI technologies and translates useful research into practical systems.', ['LLMs', 'RAG', 'AI Agents', 'Voice AI', 'Computer Vision', 'Multimodal AI', 'AI Automation', 'Data Intelligence', 'AI Infrastructure']],
  '/solutions': ['02 / SOLUTIONS', 'Technology built', 'around your problem.', 'We investigate the business context first, then design the technology approach that belongs inside it.', ['AI Systems', 'Automation', 'AI Agents', 'Voice AI', 'Business Intelligence', 'Software Platforms', 'Data Systems', 'Integrations']],
  '/capabilities': ['03 / CAPABILITIES', 'What we', 'can build.', 'A research-led capability system for complex business and technology problems.', capabilities.map(([, title]) => title)],
  '/industries': ['04 / INDUSTRIES', 'Technology for', 'real business.', 'Different industries require different systems, workflows, data, and deployment strategies.', ['Real Estate', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Logistics', 'Education', 'Technology', 'SaaS', 'Enterprise']],
  '/company': ['05 / COMPANY', 'We build', 'technology for the real world.', 'Mentneo is an AI research and development company focused on turning complex business problems into intelligent, production-ready technology.', ['Research first', 'Build with purpose', 'Engineer for real use', 'Deploy properly', 'Keep improving']],
  '/research/lab': ['MENTNEO R&D LAB / ACTIVE', 'Researching', 'what comes next.', 'A living index of the technologies we are exploring and the systems they can make possible.', labTopics.map(([topic]) => topic)],
  '/projects': ['08 / SELECTED WORK', 'Research into', 'deployment.', 'We measure our work by what gets implemented and deployed, not just what gets demonstrated.', ['Verified project archive', 'Problem', 'Research', 'Build', 'Implementation', 'Deployment']],
  '/contact': ['09 / CONTACT', 'Have a problem', 'worth solving?', 'Tell us what you are trying to solve and our R&D team will evaluate the right technology approach.', []],
  '/careers': ['10 / CAREERS', 'Build what', 'comes next.', 'Join a research and engineering culture focused on useful technology for the real world.', []],
}

export function InternalNavigation() {
  const [menu, setMenu] = useState(null)
  const [search, setSearch] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isLabRoute = window.location.pathname === '/r-and-d-lab'
    const isResearchRoute = isLabRoute || window.location.pathname.startsWith('/research') || window.location.pathname.startsWith('/ai-research') || window.location.pathname.startsWith('/emerging-technologies') || window.location.pathname.startsWith('/ai-agents') || window.location.pathname.startsWith('/voice-ai') || window.location.pathname.startsWith('/intelligent-system') || window.location.pathname.startsWith('/llms') || window.location.pathname.startsWith('/rag-systems') || window.location.pathname.startsWith('/ai-automation') || window.location.pathname.startsWith('/computer-vision') || window.location.pathname.startsWith('/data-intelligence') || window.location.pathname.startsWith('/ai-infrastructure')
  useEffect(() => {
    const handleResearchResourceNavigation = (event) => {
      const link = event.target.closest('a')
      const route = { LLMs: '/llms', 'RAG Systems': '/rag-systems', 'AI Automation': '/ai-automation', 'Computer Vision': '/computer-vision', 'Data Intelligence': '/data-intelligence', 'AI Infrastructure': '/ai-infrastructure', 'Enterprise Solutions': '/enterprise-solutions', 'Workflow Intelligence': '/workflow-intelligence', 'AI Integration': '/ai-integration', 'Software Systems': '/software-systems', 'Digital Transformation': '/digital-transformation', 'AI Systems': '/ai-systems', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Software Development': '/software-development', 'Platform Development': '/platform-development', 'API Engineering': '/api-engineering', 'System Architecture': '/system-architecture', 'Cloud Infrastructure': '/cloud-infrastructure', 'Knowledge Systems': '/knowledge-systems', Analytics: '/analytics', Automation: '/automation', Research: '/research', Technology: '/technology', 'Case Studies': '/case-studies', Contact: '/contact', 'Real Estate': '/real-estate', Healthcare: '/healthcare', Finance: '/finance', SaaS: '/saas', 'Professional Services': '/professional-services', Logistics: '/logistics', Education: '/education' }[link?.textContent.trim()]
      if (!route) return
      event.preventDefault()
      window.history.pushState({}, '', route)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
    document.addEventListener('click', handleResearchResourceNavigation)
    return () => document.removeEventListener('click', handleResearchResourceNavigation)
  }, [])
  const researchRoutes = { 'AI Research': '/ai-research', 'R&D Lab': '/r-and-d-lab', 'Emerging Technologies': '/emerging-technologies', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Intelligent Systems': '/intelligent-system', 'Intelligent System': '/intelligent-system', LLMs: '/llms', 'RAG Systems': '/rag-systems', 'AI Automation': '/ai-automation', 'Computer Vision': '/computer-vision', 'Data Intelligence': '/data-intelligence', 'AI Infrastructure': '/ai-infrastructure' }
  const menuHref = (item) => menu === 'Company' ? companyRoutes[item] : menu === 'Research' ? researchRoutes[item] || '#content' : menu === 'Solutions' ? solutionRoutes[item] || '#content' : menu === 'Capabilities' ? capabilityRoutes[item] || '#content' : '#content'
  return <><header className={menu || search || mobileOpen ? 'site-header header-active' : 'site-header'}><a className="brand" href="/"><span className="brand-mark">M</span><span>MENTNEO</span><small>AI R&D</small></a><nav className={mobileOpen ? 'nav-open' : ''}>{Object.keys(menuData).map(item => <button className={menu === item || (item === 'Research' && isResearchRoute) || (item === 'Solutions' && window.location.pathname.startsWith('/business-automation')) ? 'nav-item active' : 'nav-item'} onClick={() => { setMenu(menu === item ? null : item); setMobileOpen(false) }} key={item}>{item}<span>⌄</span></button>)}</nav><div className="header-actions"><button className="search-button" onClick={() => { setSearch(true); setMenu(null) }} aria-label="Search Mentneo">⌕</button><a className="header-cta" href="/contact">Talk to R&D <span>↗</span></a></div><button className="menu-toggle" onClick={() => { setMobileOpen(!mobileOpen); setMenu(null) }} aria-label="Toggle mobile menu" aria-expanded={mobileOpen}><span /><span /></button></header>{menu && <div className="mega-menu"><div className="mega-inner"><div className="mega-primary"><span className="mega-label">{menuData[menu].label}</span>{(menuData[menu].primary || menuData[menu].columns?.flatMap(([, ...items]) => items) || []).map(item => <a href={menuHref(item)} onClick={() => { setMenu(null); setMobileOpen(false) }} key={item}>{item}</a>)}</div><div className="mega-secondary"><span className="mega-label">Resources</span>{(menuData[menu].secondary || ['Research', 'Technology', 'Case Studies', 'Contact']).map(item => <a href="#content" onClick={() => { setMenu(null); setMobileOpen(false) }} key={item}>{item}</a>)}</div></div></div>}{search && <div className="search-overlay"><button className="search-close" onClick={() => setSearch(false)} aria-label="Close search">×</button><div><span className="mega-label">Mentneo / Search</span><h2>Search Mentneo</h2><input autoFocus placeholder="Search research, capabilities, solutions…" /></div></div>}</>
}

function AIResearchPage() {
  return (
    <main className="ai-research-page">
      <InternalNavigation />
      <section className="ai-research-shell">
        <div className="ai-research-intro">
          <span className="section-label">AI RESEARCH</span>
          <h1>Researching what comes next.</h1>
        </div>
        <div className="ai-research-list" aria-live="polite">
          {aiResearchItems.map((article) => (
            <article className="ai-research-item" key={`${article.title}-${article.date}`}>
              <div className="ai-research-meta">
                <span>{article.category}</span>
                <time>{article.date}</time>
              </div>
              <div className="ai-research-copy"><a href={`/ai-research/${slugifyResearch(article.title)}`}><h3>{article.title}</h3><p>{article.description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function InternalPage({ path }) {
  const content = routeContent[path]
  const detailPath = path.startsWith('/capabilities/')
  const title = detailPath ? path.split('/').pop().replaceAll('-', ' ') : content?.[1] || 'Research into deployment.'
  const subtitle = detailPath ? 'before we build.' : content?.[2] || 'Production-ready systems.'
  const items = detailPath ? ['What we research', 'What we experiment with', 'What we build', 'How we deploy', 'Continuous R&D'] : content?.[4] || []
  return <main className="internal-page"><InternalNavigation /><section className="internal-hero"><span className="section-label">{content?.[0] || 'MENTNEO / CAPABILITY'}</span><h1>{title}<br /><em>{subtitle}</em></h1><p>{content?.[3] || 'Research, engineering, implementation, deployment, and continuous improvement for real business systems.'}</p><a className="button button-primary" href="/contact">Discuss your problem <span>↗</span></a></section>{items.length > 0 && <section className="internal-content" id="content"><div className="section-label">{detailPath ? 'CAPABILITY SYSTEM' : 'RESEARCH INDEX'}</div><div className="internal-list">{items.map((item, index) => <article key={item}><span>0{index + 1}</span><div><h2>{item}</h2><p>{detailPath ? 'Research, engineering, implementation, deployment, and continuous R&D aligned to the problem.' : `Explore the specific challenges, systems, and technology approaches within ${item.toLowerCase()}.`}</p></div><b>↗</b></article>)}</div></section>}{path === '/contact' ? <ContactPanel /> : path === '/careers' ? <CareersPanel /> : <section className="internal-callout"><span className="section-label">NEXT STEP</span><h2>Have a problem<br /><em>worth solving?</em></h2><a className="button button-primary" href="/contact">Start a conversation <span>↗</span></a></section>}<InternalFooter /></main>
}

function ContactPanel() { const [sent, setSent] = useState(false); return <section className="contact-panel"><span className="section-label">TALK TO R&D</span><h2>Tell us what<br /><em>you’re solving.</em></h2>{sent ? <div className="form-success"><strong>Your problem has been received.</strong><p>Our team will review the requirements and get back to you.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><input required placeholder="Name" /><input required placeholder="Company" /><input required type="email" placeholder="Work email" /><textarea required placeholder="What are you trying to solve?" rows="4" /><button className="button button-primary" type="submit">Send to R&D <span>↗</span></button></form>}</section> }
function CareersPanel() { return <section className="internal-content careers-panel"><span className="section-label">OPEN ROLES</span><div className="project-placeholder"><strong>No open positions currently.</strong><p>Mentneo is building a research and engineering culture for the problems ahead.</p></div></section> }
function InternalFooter() { return <footer><a className="brand" href="/"><span className="brand-mark">M</span><span>MENTNEO</span></a><span>RESEARCH. BUILD. IMPLEMENT. DEPLOY.</span><nav><a href="/research">Research</a><a href="/capabilities">Capabilities</a><a href="/projects">Projects</a><a href="/contact">Contact</a></nav><small>© 2026 MENTNEO</small></footer> }
const companyRoutes = { About: '/about', 'Our Approach': '/our-approach', 'R&D': '/r-and-d', Projects: '/projects', Insights: '/insights', Careers: '/careers' }
const researchRoutes = { 'AI Research': '/ai-research', 'R&D Lab': '/r-and-d-lab', 'Emerging Technologies': '/emerging-technologies', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Intelligent Systems': '/intelligent-system', 'Intelligent System': '/intelligent-system', LLMs: '/llms', 'RAG Systems': '/rag-systems', 'AI Automation': '/ai-automation', 'Computer Vision': '/computer-vision', 'Data Intelligence': '/data-intelligence', 'AI Infrastructure': '/ai-infrastructure' }
const solutionRoutes = { 'Business Automation': '/business-automation', 'AI Customer Systems': '/ai-customer-systems', 'AI Voice Solutions': '/ai-voice-solutions', 'Intelligent Data Systems': '/intelligent-data-systems', 'Custom AI Systems': '/custom-ai-systems', 'Enterprise Solutions': '/enterprise-solutions', 'Workflow Intelligence': '/workflow-intelligence', 'AI Integration': '/ai-integration', 'Software Systems': '/software-systems', 'Digital Transformation': '/digital-transformation' }
const capabilityRoutes = { 'AI Research': '/research', Research: '/research', 'AI Systems': '/ai-systems', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Computer Vision': '/computer-vision', 'Software Development': '/software-development', 'Platform Development': '/platform-development', 'API Engineering': '/api-engineering', 'System Architecture': '/system-architecture', 'Cloud Infrastructure': '/cloud-infrastructure', 'Data Intelligence': '/data-intelligence', 'Knowledge Systems': '/knowledge-systems', Analytics: '/analytics', Automation: '/automation' }

function App() {
  const [activeCapability, setActiveCapability] = useState(0)
  const [activeProblem, setActiveProblem] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeStage, setActiveStage] = useState(1)
  const [activeLab, setActiveLab] = useState(1)
  const [capabilityPaused, setCapabilityPaused] = useState(false)
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname.replace(/\/$/, '') || '/')

  useEffect(() => {
    if (capabilityPaused) return undefined
    const timer = window.setInterval(() => setActiveCapability((index) => (index + 1) % capabilities.length), 4500)
    return () => window.clearInterval(timer)
  }, [capabilityPaused])

  useEffect(() => {
    const handleLocationChange = () => {
      const nextPath = window.location.pathname.replace(/\/$/, '') || '/'
      setCurrentPath(nextPath)
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setSearchOpen(false)
        setMenuOpen(false)
      }
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [currentPath])

  const navigateTo = (path) => {
    const nextPath = path.startsWith('/') ? path : `/${path}`
    window.history.pushState({}, '', nextPath)
    setCurrentPath(nextPath)
    setActiveMenu(null)
    setSearchOpen(false)
    setMenuOpen(false)
  }

  if (currentPath === '/careers' || currentPath.startsWith('/careers/')) return <CareersPage path={currentPath} />
  if (currentPath === '/admin' || currentPath.startsWith('/admin/')) return <AdminPage path={currentPath} />
  if (currentPath === '/ai-research' || currentPath.startsWith('/ai-research/')) return <AIResearchPage />
  if (currentPath === '/research' || currentPath.startsWith('/research/')) return <ResearchPage path={currentPath} />
  if (currentPath === '/technology' || currentPath.startsWith('/technology/')) return <TechnologyPage path={currentPath} />
  if (currentPath === '/case-studies' || currentPath.startsWith('/case-studies/')) return <CaseStudiesPage path={currentPath} />
  if (currentPath === '/real-estate' || currentPath.startsWith('/real-estate/')) return <RealEstatePage path={currentPath} />
  if (currentPath === '/healthcare' || currentPath.startsWith('/healthcare/')) return <HealthcarePage path={currentPath} />
  if (currentPath === '/finance' || currentPath.startsWith('/finance/')) return <FinancePage path={currentPath} />
  if (currentPath === '/saas' || currentPath.startsWith('/saas/')) return <SaaSPage path={currentPath} />
  if (currentPath === '/professional-services' || currentPath.startsWith('/professional-services/')) return <ProfessionalServicesPage path={currentPath} />
  if (currentPath === '/logistics' || currentPath.startsWith('/logistics/')) return <LogisticsPage path={currentPath} />
  if (currentPath === '/education' || currentPath.startsWith('/education/')) return <EducationPage path={currentPath} />
  if (currentPath === '/contact') return <ContactPage />
  if (currentPath === '/about' || currentPath.startsWith('/about/')) return <AboutPage path={currentPath} />
  if (currentPath === '/our-approach' || currentPath.startsWith('/our-approach/')) return <OurApproachPage path={currentPath} />
  if (currentPath === '/r-and-d' || currentPath.startsWith('/r-and-d/')) return <RDPage path={currentPath} />
  if (currentPath === '/insights' || currentPath.startsWith('/insights/')) return <InsightsPage path={currentPath} />
  if (currentPath === '/r-and-d-lab') return <RAndDLabPage />
  if (currentPath === '/emerging-technologies' || currentPath.startsWith('/emerging-technologies/')) return <EmergingTechnologiesPage />
  if (currentPath === '/ai-agents' || currentPath.startsWith('/ai-agents/')) return <AIAgentsPage path={currentPath} />
  if (currentPath === '/voice-ai' || currentPath.startsWith('/voice-ai/')) return <VoiceAIPage path={currentPath} />
  if (currentPath === '/intelligent-system' || currentPath.startsWith('/intelligent-system/')) return <IntelligentSystemPage />
  if (currentPath === '/llms' || currentPath.startsWith('/llms/')) return <LLMsPage />
  if (currentPath === '/rag-systems' || currentPath.startsWith('/rag-systems/')) return <RAGSystemsPage />
  if (currentPath === '/ai-automation' || currentPath.startsWith('/ai-automation/')) return <AIAutomationPage />
  if (currentPath === '/computer-vision' || currentPath.startsWith('/computer-vision/')) return <ComputerVisionPage />
  if (currentPath === '/data-intelligence' || currentPath.startsWith('/data-intelligence/')) return <DataIntelligencePage />
  if (currentPath === '/ai-infrastructure' || currentPath.startsWith('/ai-infrastructure/')) return <AIInfrastructurePage />
  if (currentPath === '/business-automation' || currentPath.startsWith('/business-automation/')) return <BusinessAutomationPage />
  if (currentPath === '/ai-customer-systems' || currentPath.startsWith('/ai-customer-systems/')) return <AICustomerSystemsPage />
  if (currentPath === '/ai-voice-solutions' || currentPath.startsWith('/ai-voice-solutions/')) return <AIVoiceSolutionsPage />
  if (currentPath === '/intelligent-data-systems' || currentPath.startsWith('/intelligent-data-systems/')) return <IntelligentDataSystemsPage />
  if (currentPath === '/custom-ai-systems' || currentPath.startsWith('/custom-ai-systems/')) return <CustomAISystemsPage />
  if (currentPath === '/enterprise-solutions' || currentPath.startsWith('/enterprise-solutions/')) return <EnterpriseSolutionsPage />
  if (currentPath === '/workflow-intelligence' || currentPath.startsWith('/workflow-intelligence/')) return <WorkflowIntelligencePage />
  if (currentPath === '/ai-integration' || currentPath.startsWith('/ai-integration/')) return <AIIntegrationPage />
  if (currentPath === '/software-systems' || currentPath.startsWith('/software-systems/')) return <SoftwareSystemsPage />
  if (currentPath === '/digital-transformation' || currentPath.startsWith('/digital-transformation/')) return <DigitalTransformationPage />
  if (currentPath === '/ai-systems' || currentPath.startsWith('/ai-systems/')) return <AISystemsPage />
  if (currentPath === '/software-development' || currentPath.startsWith('/software-development/')) return <SoftwareDevelopmentPage path={currentPath} />
  if (currentPath === '/platform-development' || currentPath.startsWith('/platform-development/')) return <PlatformDevelopmentPage path={currentPath} />
  if (currentPath === '/api-engineering' || currentPath.startsWith('/api-engineering/')) return <APIEngineeringPage path={currentPath} />
  if (currentPath === '/system-architecture' || currentPath.startsWith('/system-architecture/')) return <SystemArchitecturePage path={currentPath} />
  if (currentPath === '/cloud-infrastructure' || currentPath.startsWith('/cloud-infrastructure/')) return <CloudInfrastructurePage path={currentPath} />
  if (currentPath === '/knowledge-systems' || currentPath.startsWith('/knowledge-systems/')) return <KnowledgeSystemsPage path={currentPath} />
  if (currentPath === '/analytics' || currentPath.startsWith('/analytics/')) return <AnalyticsPage path={currentPath} />
  if (currentPath === '/automation' || currentPath.startsWith('/automation/')) return <AutomationPage path={currentPath} />
  if (currentPath !== '/') return <InternalPage path={currentPath} />

  return (
    <main>
      <header className={activeMenu || searchOpen ? 'site-header header-active' : 'site-header'}><a className="brand" href="#top"><span className="brand-mark">M</span><span>MENTNEO</span><small>AI R&D</small></a><nav className={menuOpen ? 'nav-open' : ''}>{Object.keys(menuData).map(item => {
        const label = item === 'Research' ? 'AI RESEARCH' : item
        const isResearchItem = item === 'Research'
        const isActive = isResearchItem && (currentPath === '/research' || currentPath === '/ai-research')
        return <button className={activeMenu === item || isActive ? 'nav-item active' : 'nav-item'} onClick={() => {
          if (isResearchItem) {
            navigateTo('/ai-research')
            return
          }
          setActiveMenu(activeMenu === item ? null : item)
          setSearchOpen(false)
        }} key={item}>{label}<span>⌄</span></button>
      })}</nav><div className="header-actions"><button className="search-button" onClick={() => { setSearchOpen(true); setActiveMenu(null) }} aria-label="Search Mentneo">⌕</button><a className="header-cta" href="#contact">Talk to R&D <span>↗</span></a></div><button className="menu-toggle" onClick={() => { setMenuOpen(!menuOpen); setActiveMenu(null) }} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /></button></header>
      {activeMenu && <div className="mega-menu"><div className="mega-inner">{activeMenu === 'Capabilities' ? <div className="mega-columns">{menuData[activeMenu].columns.map(([heading, ...items]) => <div key={heading}><span className="mega-label">{heading}</span>{items.map(item => <a href="#capabilities" key={item}>{item}</a>)}</div>)}</div> : <><div className="mega-primary"><span className="mega-label">{menuData[activeMenu].label}</span>{menuData[activeMenu].primary.map(item => <a href={activeMenu === 'Company' ? companyRoutes[item] : activeMenu === 'Research' ? researchRoutes[item] || '#capabilities' : activeMenu === 'Solutions' ? solutionRoutes[item] || '#capabilities' : '#capabilities'} key={item}>{item}</a>)}</div><div className="mega-secondary"><span className="mega-label">{activeMenu === 'Industries' ? 'Technology & services' : activeMenu === 'Company' ? 'Resources' : activeMenu === 'Solutions' ? 'Enterprise' : 'Research areas'}</span>{menuData[activeMenu].secondary.map(item => <a href="#capabilities" key={item}>{item}</a>)}</div></>}<a className="mega-cta" href="#contact">{menuData[activeMenu].cta} <span>→</span></a></div></div>}
      {searchOpen && <div className="search-overlay"><button className="search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">×</button><div><span className="mega-label">Mentneo / Search</span><h2>Search Mentneo</h2><input autoFocus placeholder="Search research, capabilities, solutions…" /><div className="suggestions"><span>Suggested</span>{['AI Research', 'AI Agents', 'Automation', 'Industries', 'Projects', 'Technology'].map(item => <button key={item}>{item}</button>)}</div></div></div>}
      <div className="hero-container" id="top">
  <section className="hero">
    <div className="hero-content">
      <div className="hero-copy">
        <h1 className="hero-heading">
          <span className="text-mentneo-gradient hero-anim-mentneo">MENTNEO</span>{' '}
          <span className="hero-anim-devday">DevDay</span>{' '}
          <span className="text-purple hero-anim-year">[2026]</span>
        </h1>
        <p className="hero-intro">
          <span className="tagline-phrase phrase-1">WE RESEARCH.</span>{' '}
          <span className="tagline-phrase phrase-2" style={{color: '#3b82f6'}}>WE BUILD.</span>{' '}
          <span className="tagline-phrase phrase-3">WE DEPLOY.</span>
        </p>
        <div className="hero-actions hero-anim-btn" style={{justifyContent: 'center', marginTop: '24px'}}>
          <a className="button button-watch" href="#live">Coming soon</a>
        </div>
      </div>
    </div>
  </section>
  <section className="hero-cards">
    <article className="hero-card" onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`); }}>
      <span className="card-label">01 / Research</span>
      <h3>AI Research</h3>
      <p>Exploring advanced models and intelligent architectures.</p>
      <i className="card-arrow">→</i>
    </article>
    <article className="hero-card" onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`); }}>
      <span className="card-label">02 / Engineering</span>
      <h3>Product Engineering</h3>
      <p>Building production-ready software and platforms.</p>
      <i className="card-arrow">→</i>
    </article>
    <article className="hero-card" onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`); }}>
      <span className="card-label">03 / Implementation</span>
      <h3>AI Deployment</h3>
      <p>Integrating intelligence into real business workflows.</p>
      <i className="card-arrow">→</i>
    </article>
  </section>
</div>
      <section className="trust-strip"><strong>Research-led. Engineering-driven. Business-focused. Production-ready.</strong><div>{['AI Research', 'Custom AI Systems', 'Automation', 'AI Agents', 'Software Engineering', 'Data Intelligence', 'Integration', 'Deployment'].map(item => <span key={item}>{item}</span>)}</div></section>
      <section className="statement section-pad scroll-reveal" id="about">
        <div className="section-label">02 / THE PROBLEM</div>
        <div className="statement-content">
          <h2 className="scroll-words-heading">
            <span className="scroll-word" style={{ '--w-idx': 0 }}>Your</span>{' '}
            <span className="scroll-word" style={{ '--w-idx': 1 }}>business</span>{' '}
            <span className="scroll-word" style={{ '--w-idx': 2 }}>has</span>{' '}
            <span className="scroll-word" style={{ '--w-idx': 3 }}>a</span>{' '}
            <span className="scroll-word" style={{ '--w-idx': 4 }}>problem.</span>
            <br />
            <span className="scroll-word" style={{ '--w-idx': 5 }}>Technology</span>{' '}
            <span className="scroll-word" style={{ '--w-idx': 6 }}>should</span>{' '}
            <span className="scroll-word" style={{ '--w-idx': 7 }}>solve</span>{' '}
            <span className="scroll-word" style={{ '--w-idx': 8 }}>it.</span>
          </h2>
          <div>
            <p className="statement-desc-text">Most businesses don’t need another AI tool. They need technology designed around the way their business actually works.</p>
            <p className="accent-copy">We don’t start with a product.<br /><strong>We start with the problem.</strong></p>
          </div>
        </div>
        <div className="challenge-grid">{challengesData.map(item => <article className="challenge-card" key={item.id} onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`); }}><div className="challenge-card-body"><div className="challenge-card-header"><span className="challenge-card-num">{item.id} —</span></div><h3 className="challenge-card-title">{item.title}</h3><p className="challenge-card-desc">{item.desc}</p><ul className="challenge-card-points">{item.points.map(point => <li key={point}><span className="check-icon">✓</span><span>{point}</span></li>)}</ul><a className="challenge-card-btn" href="#contact">Learn more <span className="btn-arrow">→</span></a></div><div className="challenge-card-visual">{renderChallengeVisual(item.visual)}</div></article>)}</div>
      </section>
      <section className="approach section-pad" id="approach">
        <div className="process-header">
          <div className="process-header-left">
            <div className="section-label">OUR PROCESS <span className="label-line" /></div>
            <h2 className="process-main-heading">From Idea to Impact</h2>
          </div>
          <div className="process-header-right">
            <p className="process-header-subtitle">A structured approach to turn complex problems into scalable, real-world solutions.</p>
          </div>
        </div>

        <div className="process-timeline-container">
          <div className="process-timeline-track" />
          <div className="process-cards-grid">
            {processStepsData.map((step) => (
              <div className={`process-card-wrapper ${step.active ? 'active' : ''}`} key={step.num}>
                <div className="process-step-node">
                  <span>{step.num}</span>
                </div>
                <article className="process-card">
                  <div className="process-card-icon">
                    {renderProcessIcon(step.icon)}
                  </div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.desc}</p>
                  <ul className="process-card-points">
                    {step.points.map((pt) => (
                      <li key={pt}>
                        <span className="bullet-dot" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="process-card-footer">
                    <button className="process-arrow-btn" aria-label={`Learn more about ${step.title}`}>
                      <span>→</span>
                    </button>
                    <span className="footer-line" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="capabilities capability-index section-pad" id="capabilities" onMouseLeave={() => setCapabilityPaused(false)}><div className="section-label">04 / CAPABILITIES</div><div className="capability-layout"><div className="capability-directory"><h2>Technology <span>with a reason.</span></h2><p className="section-lede">Deep technical capability is only useful when it changes something meaningful for the business.</p><div className="capability-list">{capabilities.map(([number, title, description], index) => <div className={activeCapability === index ? 'capability-row active' : 'capability-row'} onMouseEnter={() => { setActiveCapability(index); setCapabilityPaused(true) }} onClick={() => { setActiveCapability(index); setCapabilityPaused(true) }} key={number}><span className="capability-number">{number}</span><strong>{title}</strong><p>{description}</p><i>↗</i></div>)}</div><div className="capability-footer"><span>09 CAPABILITIES</span><span>RESEARCH → ENGINEERING → IMPLEMENTATION</span><span>EXPLORE ALL ↗</span></div></div></div></section>
      <section className="problem-solver section-pad" id="problem-solution">
        <div className="problem-header-wrapper">
          <div className="section-label">— 05 / PROBLEM TO SOLUTION</div>
          <h2 className="problem-main-heading">
            Tell us the problem.<br />
            We’ll <span className="highlight-blue-text">research</span> the solution.
          </h2>
        </div>

        <div className="problem-layout-v2">
          {/* Left Column: 8 Interactive Pill Buttons */}
          <div className="problem-pill-list">
            {problemSolutionData.map((item, index) => {
              const isActive = activeProblem === index;
              return (
                <button
                  key={item.id}
                  className={`problem-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveProblem(index)}
                >
                  <span className="pill-num">{item.id}</span>
                  <span className="pill-problem">{item.problem}</span>
                  <span className="pill-arrow">→</span>
                  <span className="pill-solution">{item.solution}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Glass Card */}
          <div className="solution-detail-card">
            <div className="solution-card-top">
              <span className="solution-step-eyebrow">{problemSolutionData[activeProblem].subtitle}</span>
              <div className="solution-icon-box">
                {renderProblemIcon(problemSolutionData[activeProblem].icon)}
              </div>
            </div>

            <h3 className="solution-card-title">{problemSolutionData[activeProblem].cardTitle}</h3>
            <p className="solution-card-desc">{problemSolutionData[activeProblem].desc}</p>

            {/* Vertical Stepper Timeline */}
            <div className="solution-stepper-list">
              {problemSolutionData[activeProblem].steps.map((step, sIdx) => (
                <div key={step.num} className={`stepper-item ${sIdx === 0 ? 'active' : ''}`}>
                  <div className="stepper-left">
                    <div className={`stepper-node ${sIdx === 0 ? 'glowing-dot' : 'ring-dot'}`} />
                    {sIdx < problemSolutionData[activeProblem].steps.length - 1 && <div className="stepper-line" />}
                  </div>
                  <div className="stepper-content">
                    <div className="stepper-head">
                      <span className="stepper-num">{step.num}</span>
                      <span className="stepper-title">{step.title}</span>
                    </div>
                    <p className="stepper-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom-right glowing orb gradient */}
            <div className="solution-card-orb" />
          </div>
        </div>
      </section>
      <section className="build section-pad">
        <div className="section-label">06 / WHAT WE BUILD</div>
        <div className="section-heading">
          <h2>Technology built<br /><span>around your business.</span></h2>
          <p>We don’t sell one-size-fits-all AI. We research and build systems around the problem that needs to be solved.</p>
        </div>
        <div className="build-grid">
          {buildCardsData.map((item) => (
            <article className="build-card" key={item.id}>
              <div className="build-card-header">
                <div className="build-card-icon-box">
                  {renderBuildIcon(item.icon)}
                </div>
                <span className="build-card-num">{item.id}</span>
              </div>
              <h3 className="build-card-title">{item.title}</h3>
              <p className="build-card-desc">{item.desc}</p>
              <i className="build-card-arrow">↗</i>
            </article>
          ))}
        </div>
      </section>
      <section className="architecture section-pad"><div className="section-label">/ SYSTEM ARCHITECTURE</div><div className="architecture-head"><h2>Complete systems.<br /><span>Not isolated tools.</span></h2><span className="architecture-status">SYSTEM / ACTIVE<br />R&D / 001</span></div><div className="architecture-canvas"><div className="architecture-flow">{['Business', 'Application', 'AI Layer', 'Data', 'Integrations', 'Infrastructure'].map((layer, index) => <div className="architecture-layer" key={layer}><span>0{index + 1}</span><strong>{layer}</strong><i>{['API', 'WORKFLOW', 'LLM', 'RAG', 'AGENT', 'MONITORING'][index]}</i></div>)}</div><div className="architecture-pulse" /></div></section>
      <section className="transformation section-pad" id="systems">
        <div className="transformation-container">
          <div className="transformation-head-grid">
            <div className="transformation-side left-side">
              <div className="section-label">— / SYSTEMS</div>
              <h2 className="transformation-title">
                You bring<br />
                the <span className="highlight-blue-text">problem.</span>
              </h2>
              <p className="transformation-desc">
                Real business challenges, complex workflows, and unique needs.
              </p>
            </div>

            <div className="transformation-divider" />

            <div className="transformation-side right-side">
              <div className="section-label">— / MENTNEO</div>
              <h2 className="transformation-title">
                We build<br />
                the <span className="highlight-blue-text">system.</span>
              </h2>
              <p className="transformation-desc">
                Scalable solutions, built with the right technology to create real impact.
              </p>
            </div>
          </div>

          <div className="transformation-table">
            <div className="transformation-col left-col">
              <div className="trans-row">
                <span className="trans-from">MANUAL CALLS</span>
                <span className="trans-arrow">→</span>
                <strong className="trans-to">VOICE AI</strong>
              </div>
              <div className="trans-row">
                <span className="trans-from">REPETITIVE WORKFLOW</span>
                <span className="trans-arrow">→</span>
                <strong className="trans-to">AUTOMATION</strong>
              </div>
              <div className="trans-row">
                <span className="trans-from">COMPLEX OPERATIONS</span>
                <span className="trans-arrow">→</span>
                <strong className="trans-to">AI WORKFLOW</strong>
              </div>
            </div>

            <div className="transformation-col right-col">
              <div className="trans-row">
                <span className="trans-from">SCATTERED DATA</span>
                <span className="trans-arrow">→</span>
                <strong className="trans-to">KNOWLEDGE SYSTEM</strong>
              </div>
              <div className="trans-row">
                <span className="trans-from">LEGACY SOFTWARE</span>
                <span className="trans-arrow">→</span>
                <strong className="trans-to">INTELLIGENT PLATFORM</strong>
              </div>
              <div className="trans-row">
                <span className="trans-from">NEW TECHNOLOGY NEEDED</span>
                <span className="trans-arrow">→</span>
                <strong className="trans-to">CUSTOM AI SYSTEM</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="industries section-pad" id="industries"><div className="section-label">09 / INDUSTRIES</div><div className="section-heading"><h2>Built for real<br /><span>business problems.</span></h2><p>We research the operational reality of each environment before we design what belongs inside it.</p></div><div className="industry-grid">{['Real Estate', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Logistics', 'Technology', 'SaaS', 'Professional Services', 'Enterprise'].map((industry, index) => <article key={industry}><span>0{index + 1}</span><h3>{industry}</h3><p>Research-led systems for the specific challenges of {industry.toLowerCase()}.</p></article>)}</div></section>
      <section className="lab section-pad" id="lab"><div className="lab-header"><div className="section-label">07 / R&D LAB</div><h2>Where research<br /><span>becomes technology.</span></h2><p>Mentneo continuously researches emerging technologies and turns valuable research into practical systems for real-world businesses.</p></div><div className="lab-board"><div className="board-top"><span>MENTNEO / RESEARCH INDEX</span><span>STATUS: ACTIVE <i className="pulse" /></span></div><div className="lab-grid">{['Generative AI', 'AI Agents', 'Voice AI', 'LLMs', 'RAG', 'AI Automation', 'Computer Vision', 'Intelligent Data', 'Model Evaluation', 'AI Infrastructure', 'Prototype', 'Production System'].map((item, i) => <div className="lab-cell" key={item}><span>0{i + 1}</span><strong>{item}</strong><i>↗</i></div>)}</div></div></section>

      <section className="projects section-pad" id="projects"><div className="section-label">10 / PROJECTS</div><div className="section-heading"><h2>Research that becomes<br /><span>real systems.</span></h2><p>We measure our work by what gets implemented and deployed, not just what gets demonstrated.</p></div><div className="project-placeholder"><span>VERIFIED PROJECT ARCHIVE</span><strong>Selected systems are available for a focused R&D conversation.</strong><p>Project details, outcomes, and metrics are shared only when verified and appropriate to the work.</p><a className="button button-primary" href="#contact">Discuss a project <span>↗</span></a></div></section>
      <section className="why section-pad"><div className="section-label">11 / WHY MENTNEO</div><div className="section-heading"><h2>Built to stay<br /><span>useful.</span></h2></div><div className="why-grid">{reasons.map(([title, text], index) => <article key={title} onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`); }}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="technology section-pad" id="technology"><div className="section-label">14 / TECHNOLOGY</div><div className="section-heading"><h2>A considered<br /><span>technology ecosystem.</span></h2><p>The tools change. The principles stay: useful systems, clear architecture, and production-minded engineering.</p></div><div className="tech-grid">{[['AI & ML', 'LLMs, AI agents, RAG, model evaluation, computer vision, NLP'], ['Application Engineering', 'Web applications, APIs, dashboards, and enterprise platforms'], ['Data', 'Databases, data pipelines, analytics, and knowledge systems'], ['Infrastructure', 'Cloud, deployment, APIs, monitoring, and scalability'], ['Integrations', 'CRM, ERP, communication systems, business software, and APIs']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="engagement section-pad"><div className="section-label">12 / ENGAGEMENT MODEL</div><div className="section-heading"><h2>How we can<br /><span>work together.</span></h2></div><div className="engagement-grid">{engagements.map(([title, text, cta], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contact">{cta} <b>↗</b></a></article>)}</div></section>
      <section className="proof section-pad"><div className="section-label">13 / TRUST</div><div className="proof-content"><h2>Technology built<br /><span>for the real world.</span></h2><p>From research and experimentation to implementation and deployment, Mentneo focuses on building technology that solves measurable business problems.</p></div><div className="timeline">{['Research', 'Prototype', 'Engineering', 'Integration', 'Deployment', 'Optimization'].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></section>
      <section className="contact section-pad" id="contact"><div className="section-label">LET’S WORK ON THE RIGHT THING</div><h2>Have a problem<br /><em>worth solving?</em></h2><p>Tell us what your business is trying to solve. Our R&D team will evaluate the problem, identify the right technology approach, and help turn it into a production-ready solution.</p><a className="button button-primary" href="mailto:hello@mentneo.com">Start a conversation <span>↗</span></a></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">M</span><span>MENTNEO</span></a><span>AI RESEARCH & DEVELOPMENT</span><nav><a href="#approach">Approach</a><a href="#capabilities">Capabilities</a><a href="#lab">R&D Lab</a><a href="#contact">Contact</a></nav><small>© 2026 Mentneo. Researching what’s next.</small></footer>
    </main>
  )
}

export default App
