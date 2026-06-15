export interface Project {
  id: number
  title: { pt: string; en: string }
  company: string
  description: { pt: string; en: string }
  tags: string[]
  details?: { pt: string[]; en: string[] }
  results?: { pt: string[]; en: string[] }
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: "Pipeline Inteligente de OCR e Extração de Dados de Notas Fiscais",
      en: "Intelligent OCR Pipeline for Invoice Data Extraction",
    },
    company: "n8n + OpenAI",
    description: {
      pt: "Ecossistema automatizado para ingestão, leitura e processamento de Notas Fiscais usando abordagem híbrida de extração de texto nativa combinada com OCR externo e LLMs.",
      en: "Automated ecosystem for invoice ingestion, reading and processing using hybrid native text extraction with external OCR and LLMs.",
    },
    tags: ["n8n", "OCR", "OpenAI GPT-4o", "Data Parsing", "REST APIs", "JSON"],
    details: {
      pt: [
        "Gatilho e ingestão dinâmica via Google Drive",
        "Fallback de processamento híbrido (Read PDF + OCR API)",
        "Extração e estruturação com LLM via engenharia de prompt avançada",
        "Consolidação em Google Sheets com chaves de metadados para auditoria",
      ],
      en: [
        "Dynamic trigger and ingestion via Google Drive",
        "Hybrid processing fallback (Read PDF + OCR API)",
        "LLM extraction with advanced prompt engineering",
        "Consolidation in Google Sheets with metadata keys for auditing",
      ],
    },
    results: {
      pt: ["Eliminação de gargalos manuais e erros humanos", "Taxa de resiliência elevada com fallback inteligente"],
      en: ["Elimination of manual bottlenecks and human errors", "High resilience rate with intelligent fallback"],
    },
  },
  {
    id: 2,
    title: {
      pt: "Sistema Dinâmico de Cache e Redução de Custos para IA Generativa",
      en: "Dynamic Caching System for Generative AI Cost Reduction",
    },
    company: "n8n + Pinecone",
    description: {
      pt: "Camada de Semantic Caching utilizando banco vetorial Pinecone para evitar chamadas redundantes a LLMs quando perguntas similares já foram respondidas.",
      en: "Semantic Caching layer using Pinecone vector database to avoid redundant LLM calls when similar questions have already been answered.",
    },
    tags: ["n8n", "Pinecone", "Embeddings", "OpenAI", "LLMOps", "FinOps"],
    details: {
      pt: [
        "Interface conversacional integrada via Telegram Trigger",
        "Vetorização de consultas com text-embedding-3-small",
        "Busca por similaridade vetorial (K-NN) no Pinecone",
        "Roteamento baseado em limiar: ≥95% usa cache, <95% invoca LLM",
        "Auto-alimentação de cache (upsert loop) para aprendizado contínuo",
      ],
      en: [
        "Integrated conversational interface via Telegram Trigger",
        "Query vectorization with text-embedding-3-small",
        "Vector similarity search (K-NN) on Pinecone",
        "Threshold-based routing: ≥95% uses cache, <95% invokes LLM",
        "Self-feeding cache (upsert loop) for continuous learning",
      ],
    },
    results: {
      pt: ["Redução drástica de latência em perguntas frequentes", "Arquitetura escalável que diminui custos de API com crescimento"],
      en: ["Drastic latency reduction for frequent questions", "Scalable architecture that decreases API costs with growth"],
    },
  },
  {
    id: 3,
    title: {
      pt: "Analytics AI Agent (Linguagem Natural para BigQuery)",
      en: "Analytics AI Agent (Natural Language to BigQuery)",
    },
    company: "Python + LangGraph + GCP",
    description: {
      pt: "Agente Text-to-SQL que converte perguntas em linguagem natural em consultas SQL, executa no BigQuery e retorna respostas analíticas humanizadas.",
      en: "Text-to-SQL agent that converts natural language questions into SQL queries, executes on BigQuery, and returns humanized analytical answers.",
    },
    tags: ["LangChain", "LangGraph", "Python", "FastAPI", "BigQuery", "Cloud Run", "Docker"],
    details: {
      pt: [
        "Orquestração com LangGraph (generate_sql → execute_sql → should_retry)",
        "Pipeline Text-to-SQL com autorrecuperação (até 3 tentativas)",
        "Dry-run no BigQuery para validação de queries",
        "Containerização com Docker e deploy serverless no Cloud Run",
        "Camada de formatação conversacional via n8n com GPT-4o-mini",
      ],
      en: [
        "LangGraph orchestration (generate_sql → execute_sql → should_retry)",
        "Self-healing Text-to-SQL pipeline (up to 3 retries)",
        "Dry-run on BigQuery for query validation",
        "Docker containerization and serverless deploy on Cloud Run",
        "Conversational formatting layer via n8n with GPT-4o-mini",
      ],
    },
    results: {
      pt: ["Interface inteligente capaz de ler esquemas complexos do GA4", "Autonomia na geração de relatórios sem dependência de analistas de BI"],
      en: ["Intelligent interface capable of reading complex GA4 schemas", "Autonomous report generation without BI analyst dependency"],
    },
  },
  {
    id: 4,
    title: {
      pt: "Automatização de Ingestão de NF e Relatórios Financeiros",
      en: "Invoice Ingestion Automation and Financial Reporting",
    },
    company: "IFC Roofing & Construction",
    description: {
      pt: "Arquitetura de automação ponta a ponta para processamento de notas fiscais e distribuição de relatórios financeiros para 28 representantes de vendas.",
      en: "End-to-end automation architecture for invoice processing and financial report distribution to 28 sales representatives.",
    },
    tags: ["n8n", "Apps Script", "Google Sheets", "OpenAI", "VPS", "Gmail API"],
    details: {
      pt: [
        "Ingestão e extração de dados com IA via n8n + OpenAI",
        "Download automático de NFs e extração de campos financeiros críticos",
        "Distribuição automatizada e segura de relatórios via Google Apps Script",
        "Cálculo dinâmico de comissões e relatórios HTML personalizados",
        "Envio individual para 28 representantes garantindo sigilo comercial",
      ],
      en: [
        "AI-powered data ingestion and extraction via n8n + OpenAI",
        "Automatic invoice download and critical financial field extraction",
        "Automated secure report distribution via Google Apps Script",
        "Dynamic commission calculation and personalized HTML reports",
        "Individual sending to 28 reps ensuring trade secrecy",
      ],
    },
    results: {
      pt: [
        "Redução de 12-16h semanais de trabalho manual para praticamente zero",
        "Eliminação total de atrasos nos relatórios de sexta-feira às 8h",
      ],
      en: [
        "Reduction of 12-16h weekly manual work to practically zero",
        "Complete elimination of Friday 8 AM report delays",
      ],
    },
  },
  {
    id: 5,
    title: {
      pt: "Modelagem de Ledger Financeiro e de Insumos",
      en: "Financial and Supply Ledger Modeling",
    },
    company: "POLEN",
    description: {
      pt: "Infraestrutura moderna de dados centralizada no BigQuery para criar uma Single Source of Truth, integrando CRM (HubSpot), ERP (Omie) e sistema legado.",
      en: "Modern data infrastructure centralized on BigQuery to create a Single Source of Truth, integrating CRM (HubSpot), ERP (Omie), and legacy systems.",
    },
    tags: ["BigQuery", "Dataform", "GCP", "HubSpot", "ETL", "Git", "Data Dictionary"],
    details: {
      pt: [
        "Ingestão e unificação de dados via API do HubSpot, Omie e banco legado",
        "Resolução de entidades usando CNPJ como chave primária",
        "Pipelines em camadas no Dataform com versionamento Git",
        "Arquitetura contábil: Entradas, Saídas e Diferido",
        "Documentação do primeiro Dicionário de Dados da companhia",
      ],
      en: [
        "Data ingestion and unification via HubSpot, Omie, and legacy DB APIs",
        "Entity resolution using CNPJ as primary key",
        "Layered Dataform pipelines with Git versioning",
        "Accounting architecture: Inputs, Outputs, and Deferred",
        "Documentation of the company's first Data Dictionary",
      ],
    },
    results: {
      pt: [
        "Redução de até 20% nos custos de aquisição de mercadorias",
        "Otimização da cadeia de suprimentos com identificação de gargalos",
        "Análise de Cohort validou aumento consistente na retenção e LTV",
        "100% de rastreabilidade das métricas organizacionais",
      ],
      en: [
        "Up to 20% reduction in merchandise acquisition costs",
        "Supply chain optimization by identifying bottlenecks",
        "Cohort analysis validated consistent retention and LTV increase",
        "100% traceability of organizational metrics",
      ],
    },
  },
]