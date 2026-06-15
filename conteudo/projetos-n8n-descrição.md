## **Projeto 1: Pipeline Inteligente de OCR e Extração de Dados de Notas Fiscais (IA \+ Visão Computacional)**

**Sobre o Projeto**

Desenvolvimento de um ecossistema automatizado e resiliente para ingestão, leitura e processamento de Notas Fiscais estruturadas e não estruturadas (imagens e PDFs digitalizados). O fluxo utiliza uma abordagem híbrida de extração de texto nativa combinada com visão computacional (OCR) externa e modelos de linguagem de grande porte (LLMs) para garantir máxima acurácia na captura de metadados críticos.

**Atribuições e Arquitetura**

* **Gatilho e Ingestão Dinâmica:** Integração com o Google Drive para monitoramento e captura automatizada de arquivos em tempo real assim que novos documentos são inseridos no diretório.  
* **Fallback de Processamento Híbrido (Read PDF \+ OCR API):** Arquitetura lógica que valida se o texto do arquivo PDF é legível de forma nativa. Em caso de PDFs escaneados ou sem camada de texto (text empty), o fluxo executa um desvio inteligente para uma API externa de OCR (OCR.Space) via requisições multipart/form-data.  
* **Extração e Estruturação com LLM (Data Parsing):** Engenharia de prompt avançada utilizando o modelo gpt-4o da OpenAI para higienizar, contextualizar e transformar o texto desorganizado em um JSON estruturado com tipagem rigorosa (Campos: CNPJ, Razão Social, Valor, Descrição e Data de Emissão).  
* **Consolidação de Dados:** Ingestão estruturada dos dados validados em repositórios corporativos (Google Sheets) vinculando chaves únicas de metadados (file ID e createdTime) para fins de auditoria.

**Resultados Técnicos Destacados**

* Eliminação de gargalos manuais e erros humanos na digitação de dados fiscais através de automação fim-a-fim.  
* Taxa de resiliência elevada no processamento de arquivos PDF devido ao sistema inteligente de fallback de leitura.

**Palavras-chave do Projeto:** *Workflow Automation, n8n, OCR (Optical Character Recognition), OpenAI API, GPT-4o, Data Parsing, Ingestão de Dados, JSON, Extração de Dados, Fallback Logics, APIs REST, Multipart/Form-Data.*

## **Projeto 2: Sistema Dinâmico de Cache e Redução de Custos para IA Generativa (Semantic Caching com Pinecone)**

**Sobre o Projeto**

Arquitetura inovadora de otimização de custos e latência para sistemas de atendimento baseados em IA (Telegram Bot). O projeto implementa uma camada de *Semantic Caching* (Cache Semântico) utilizando banco de dados vetorial, evitando chamadas redundantes e caras a modelos LLM de texto quando perguntas parecidas já foram respondidas anteriormente.

**Atribuições e Arquitetura**

* **Interface Conversacional Integrada:** Orquestração de webhooks em tempo real com o Telegram Trigger para recepção de mensagens do usuário.  
* **Vetorização da Consulta (Embeddings):** Conversão de strings de texto textuais em vetores densos de alta dimensionalidade via API da OpenAI (text-embedding-3-small).  
* **Busca por Similaridade Vetorial (K-NN):** Consulta de baixa latência em base vetorial hospedada no Pinecone (topK: 1) avaliando a distância de cosseno entre a nova dúvida e o histórico armazenado.  
* **Roteamento Baseado em Limiar (Score Thresholding):** Implementação de lógica condicional rígida no n8n. Se a similaridade do vetor for $\\ge$ 95%, o sistema ignora a chamada ao LLM principal e consome instantaneamente a resposta guardada nos metadados do Pinecone (economia de tempo e *tokens*).  
* **Auto-Alimentação de Cache (Upsert Loop):** Se o score for menor que 95%, o fluxo invoca o modelo gpt-4mini para computar a nova resposta, realiza o disparo ao usuário e faz o *upsert* imediato do par pergunta/resposta \+ vetor correspondente na base do Pinecone para aprendizados futuros.

**Resultados Técnicos Destacados**

* Redução drástica na latência de respostas para perguntas frequentes (respostas instantâneas via cache).  
* Arquitetura altamente escalável que diminui os custos de consumo de API da OpenAI à medida que a base de usuários e o cache se expandem.

**Palavras-chave do Projeto:** *Semantic Caching, Vector Database, Pinecone, Embeddings, OpenAI API, LLMOps, Otimização de Custos (FinOps), Redução de Latência, Redes Neurais (Vetores), Webhooks, Telegram Bot Integration, n8n Conditional Logic.*

## **Projeto 3: Analytics AI Agent (Interface de Linguagem Natural para BigQuery)**

**Sobre o Projeto**

Desenvolvimento de um agente analítico experimental avançado (Text-to-SQL) capaz de democratizar o acesso a dados de negócios. O sistema converte perguntas complexas em linguagem natural feitas por usuários em consultas SQL válidas, executa-as diretamente no Data Warehouse e sintetiza uma resposta analítica humanizada.

**Atribuições e Arquitetura**

* **Orquestração de Agente com LangGraph:** Desenvolvimento do core da aplicação em Python (FastAPI), utilizando LangChain e LangGraph para criar uma máquina de estados robusta (generate\_sql $\\rightarrow$ execute\_sql $\\rightarrow$ should\_retry).  
* **Pipeline Text-to-SQL Resiliente:** Utilização do modelo gpt-4o munido de prompts de contexto detalhados do esquema do Google Analytics 4 (GA4). O agente possui lógica de autorrecuperação (*self-healing*), testando a query via *dry-run* no BigQuery e corrigindo o próprio código SQL em até 3 tentativas caso identifique erros de sintaxe ou de esquema.  
* **Integração de Infraestrutura e API:** Conteinerização do agente com Docker e implantação serverless no Google Cloud Run, garantindo escalabilidade automática sob demanda.  
* **Camada de Formatação Conversacional (n8n Workflow):** Conexão do fluxo de chat do n8n com o endpoint do Cloud Run. Os dados brutos gerados pelo BigQuery são repassados a uma cadeia LLM (gpt-4o-mini) encarregada de traduzir as linhas e colunas em insights claros em português, anexando a query SQL original para auditoria do usuário.

**Resultados Técnicos Destacados**

* Criação bem-sucedida de uma interface inteligente capaz de ler esquemas complexos e aninhados (como o dataset público do GA4 no BigQuery).  
* Autonomia na geração de relatórios de dados sem dependência técnica de analistas de BI para a escrita de queries rotineiras.

**Palavras-chave do Projeto:** *AI Agents, Text-to-SQL, LangChain, LangGraph, Python (FastAPI), Google BigQuery, Google Cloud Run, Docker, CI/CD Serverless, Google Analytics 4 (GA4), Data Analytics, Data Driven Insights, Self-Healing Code.*

