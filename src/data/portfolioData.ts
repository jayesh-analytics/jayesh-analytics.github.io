import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Jayesh Suthar',
  roles: ['Data Analyst', 'Business Analyst', 'MIS Executive'],
  heading: 'Bridging the gap between raw data and commercial clarity.',
  subheading:
    "I'm Jayesh Suthar-a data analyst specializing in SQL, Python, Power BI, Advanced Excel & AI I build reliable pipelines and clear dashboards that help businesses optimize revenue, eliminate operational waste, and understand customer behavior.",
  aboutMe:
    'I am Jayesh Suthar, a Data Analyst who combines strong relational database skills with dimensional BI modeling and Python analysis. With deep practical experience in exploratory data analysis and reporting, I have analyzed retail transaction patterns, built fintech dashboards, and evaluated customer retention dynamics. I am currently looking for full-time Data Analyst opportunities where I can help teams make faster, data-backed decisions.',
  experience: [
    {
      id: 'tata-forage',
      role: 'VIRTUAL INTERNSHIP - TATA AI-Powered Delinquency & Credit Risk Collections Strategy',
      organization: 'FORAGE - REMOTE',
      tools: ['Python', 'GenAI', 'Risk Scoring', 'Financial EDA'],
      githubLink:
        'https://github.com/jayesh-analytics/tata-data-analytics-job-simulations',
      points: [
        'Conducted rigorous exploratory data analysis (EDA) across multi-variable consumer credit datasets using Python (Pandas, NumPy), isolating critical borrower behavioral patterns and demographic factors correlated with credit delinquency.',
        'Engineered a proactive credit delinquency assessment strategy for consumer finance operations (Geldium Finance), evaluating trade-offs between predictive accuracy and explainability to ensure strict adherence to regulatory compliance (ECOA, Fair Lending).',
        'Delivered an executive-ready slide deck and strategic intervention framework for business leadership, utilizing Generative AI prompt workflows to synthesize analytical outputs into clear, data-driven operational recommendations.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      number: 1,
      title: 'Customer Shopping Behavior & Revenue Analysis',
      tools: ['Python (Pandas, NumPy)', 'MySQL', 'Power BI', 'DAX'],
      githubLink:
        'https://github.com/jayesh-analytics/customer_behavior_analysis',
      category: 'BI',
      description:
        'I performed end-to-end exploratory analysis on 3,900 retail transactions using Python and complex MySQL queries to evaluate discounting impacts and repeat purchase trends. I then engineered an interactive Power BI dashboard to deliver actionable commercial insights to leadership.',
      metrics: [
        { label: 'Transactions Analyzed', value: '3,900' },
        { label: 'Core Tech', value: 'Python + MySQL' },
        { label: 'Reporting Layer', value: 'Interactive Power BI' },
      ],
    },
    {
      id: 'proj-2',
      number: 2,
      title: 'Retail & Inventory Optimization SQL',
      tools: ['Advanced MySQL', 'CTEs', 'Window Functions', 'Data Auditing'],
      githubLink: 'https://github.com/jayesh-analytics/Retail_Analytic_SQL',
      category: 'SQL',
      description:
        'I audited and normalized 5,000+ transaction records, catching a critical pricing catalog error that eliminated a $184,000 revenue distortion. Utilizing advanced SQL CTEs and window functions, I modeled stock-to-sales ratios to actively identify overstock and stockout risks.',
      metrics: [
        { label: 'Records Audited', value: '5,000+' },
        { label: 'Revenue Distortion Resolved', value: '$184,000' },
        { label: 'Technique', value: 'CTEs & Window Functions' },
      ],
    },
    {
      id: 'proj-3',
      number: 3,
      title: 'PhonePe Digital Payments Intelligence Dashboard',
      tools: [
        'Power BI',
        'DAX Time Intelligence',
        'Star Schema Modeling',
        'Power Query',
      ],
      githubLink: 'https://github.com/jayesh-analytics/Phone-pe-power-BI',
      category: 'Fintech',
      description:
        'I architected an enterprise-grade Power BI dashboard using a robust Star Schema model and 15+ custom DAX measures to track transaction volumes and MoM growth. I also integrated intuitive drill-through pages to pinpoint root causes behind payment gateway drop-offs.',
      metrics: [
        { label: 'Data Architecture', value: 'Star Schema' },
        { label: 'Custom DAX Measures', value: '15+' },
        { label: 'Feature', value: 'Drill-through RCA' },
      ],
    },
    {
      id: 'proj-4',
      number: 4,
      title: 'Customer Churn Intelligence & Lifetime Value Platform',
      tools: ['Python', 'SQLite', 'Pandas', 'Seaborn', 'CLTV Modeling'],
      githubLink:
        'https://github.com/jayesh-analytics/customer-churn-analysis',
      category: 'Python',
      description:
        'I built an end-to-end churn intelligence pipeline using SQLite and Python to analyze customer lifetime value (CLTV) and identify key attrition drivers. Through statistical cohort visualizations, I demonstrated how customer service escalations directly impact retention drop-offs.',
      metrics: [
        { label: 'Modeling Focus', value: 'CLTV & Attrition' },
        { label: 'Pipeline', value: 'SQLite + Python' },
        { label: 'Analytics Output', value: 'Cohort Visualizations' },
      ],
    },
  ],
  education: [
    {
      university: 'MohanLal Shukhadiya University [ MLSU ]',
      degree: "Bachelor's of Science in Chemistry",
      years: '2021 - 2024',
    },
  ],
  certificates: [
    {
      id: 'cert-1',
      title: 'Google Prompt Essentials',
      issuer: 'Coursera',
      issuerType: 'google',
      link: 'https://coursera.org/share/bb35a0f11ea07c873b1d1a09f07516fc',
    },
    {
      id: 'cert-2',
      title: 'Tata Data Analytic',
      issuer: 'Forage',
      issuerType: 'tata',
      link: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a26a63fe318cd4d47cef1b3_1786786263330_completion_certificate.pdf',
    },
    {
      id: 'cert-3',
      title: 'Excel & Analytics',
      issuer: 'Coding Ninjas',
      issuerType: 'coding-ninjas',
      link: 'https://certificate.codingninjas.com/view/2482efc29ad47100',
    },
    {
      id: 'cert-4',
      title: 'Data Visualization With Power BI',
      issuer: 'Coding Ninjas',
      issuerType: 'coding-ninjas',
      link: 'https://certificate.codingninjas.com/view/40a39d49dcf6fed2',
    },
  ],
  skills: [
    {
      id: 'excel',
      title: 'Advanced Excel',
      skills: [
        'Advanced Formulas',
        'VLOOKUP / HLOOKUP',
        'Pivot Table',
        'Data Cleaning',
        'Data Validation',
        'Charts',
      ],
      tagline: 'Spreadsheet engineering, audit-proof formulas & MIS reporting',
      iconName: 'excel',
    },
    {
      id: 'powerbi',
      title: 'Power BI',
      skills: [
        'Dashboard Creation',
        'Power Query',
        'Power Pivot',
        'DAX',
        'Data Visualization',
        'MIS Reporting',
        'Automation',
      ],
      tagline: 'Enterprise star-schema modeling, time intelligence & drill-through',
      iconName: 'powerbi',
    },
    {
      id: 'sql-python',
      title: 'SQL & Python',
      skills: [
        'Basic Queries',
        'Joins',
        'Aggregations',
        'Subqueries',
        'Pandas',
        'Numpy',
        'Data Transformation',
      ],
      tagline: 'High-performance querying, CTEs, window functions & statistical EDA',
      iconName: 'sql-python',
    },
    {
      id: 'tableau',
      title: 'Tableau',
      skills: ['interactive Reports', 'Calculated Fields', 'Storytelling'],
      tagline: 'Visual discovery dashboards and executive storytelling',
      iconName: 'tableau',
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      skills: [
        'Prompt Engineering',
        'GenAI for Analytics',
        'AI Automation',
      ],
      tagline: 'LLM workflow integration, prompt pipelines & automated synthesis',
      iconName: 'ai',
    },
  ],
  cta: {
    headline:
      "Looking to Add an Analytic Problem Solver to Your Team? Let's Connect and Discuss How We Can Help You Grow Your Business.",
    github: 'https://github.com/jayesh-analytics',
    email: 'sutharjayesh607@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jayesh-suthar-dev/',
    contact: '8302763167',
    specialties: [
      'SQL',
      'Python',
      'Power BI',
      'DAX',
      'EDA',
      'Advanced Excel',
      'AI',
    ],
  },
};
