export interface Education {
  degree: { pt: string; en: string }
  institution: string
  period: { pt: string; en: string }
}

export const education: Education[] = [
  {
    degree: { pt: "Bacharelado em Desenvolvimento de Software", en: "Bachelor's in Software Development" },
    institution: "BYU-Idaho",
    period: { pt: "2025 – Presente", en: "2025 – Present" },
  },
  {
    degree: { pt: "MBA em Gestão de Investimentos", en: "MBA in Investment Management" },
    institution: "Universidade Estácio de Sá",
    period: { pt: "2020 – 2021", en: "2020 – 2021" },
  },
  {
    degree: { pt: "Bacharelado em Economia", en: "Bachelor's in Economics" },
    institution: "UFRPE",
    period: { pt: "2014 – 2019", en: "2014 – 2019" },
  },
]

export const certifications = [
  {
    title: { pt: "Databricks", en: "Databricks" },
    items: {
      pt: "AI Agent Fundamentals, DevOps Essentials, Build Data Pipelines with Lakeflow, Data Ingestion with Lakeflow Connect (2025/2026)",
      en: "AI Agent Fundamentals, DevOps Essentials, Build Data Pipelines with Lakeflow, Data Ingestion with Lakeflow Connect (2025/2026)",
    },
  },
  {
    title: { pt: "Outros", en: "Others" },
    items: {
      pt: "Análise de Dados com Google Sheets, Google BigQuery e Looker Studio",
      en: "Data Analysis with Google Sheets, Google BigQuery, and Looker Studio",
    },
  },
]

export const skillTags = [
  "SQL", "Python", "BigQuery", "Dataform", "Apache Airflow",
  "n8n", "RAG", "Pinecone", "LangChain", "LangGraph",
  "OpenAI API", "Apps Script", "MCP", "Looker Studio", "Power BI",
  "Git", "ETL/ELT", "HubSpot", "Docker", "GCP",
]