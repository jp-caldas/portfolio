## **Projeto 1: Automatização de Ingestão de Notas Fiscais e Envio de Relatórios Financeiros (IFC Roofing & Construction)**

### **Cenário e Desafio**

A IFC enfrentava gargalos operacionais significativos no processamento e conciliação de notas fiscais de fornecedores (como pintores, carpinteiros, prestadores de serviços e locadoras de equipamentos). Esse fluxo era executado manualmente por até duas pessoas do setor financeiro ao longo da semana. O objetivo final era gerar um relatório consolidado todas as sextas-feiras, às 8h da manhã, para os 28 representantes de vendas da empresa (com forte concentração no Texas). Como as comissões desses representantes dependiam diretamente dos custos atrelados a cada projeto de reconstrução (comuns após tempestades de granizo na região), qualquer atraso no envio gerava atrito imediato e sobrecarregava o suporte do escritório principal. O processo manual exigia entre 12 e 16 horas semanais da equipe interna.

### **Solução Desenvolvida**

Para solucionar o problema, desenvolvi e implementei uma arquitetura de automação ponta a ponta hospedada em uma VPS (Virtual Private Server) própria, utilizando o **n8n** como orquestrador central e integrando APIs do Google Drive, Gmail, Google Sheets e OpenAI.

1. **Ingestão e Extração de Dados com IA:** Configurei um gatilho (*trigger*) automático para identificar a entrada de novas notas fiscais. O fluxo realiza o download do documento e utiliza Large Language Models (LLMs) via API da OpenAI para extrair, tratar e padronizar os campos financeiros mais críticos, populando automaticamente uma base de dados centralizada no Google Sheets. A equipe financeira passou a atuar apenas na auditoria e monitoramento do processo, eliminando o trabalho manual de digitação.  
2. **Distribuição Automatizada e Segura de Relatórios:** Utilizando o Google Apps Script, criei uma automação responsável por ler os dados consolidados, calcular as comissões de forma dinâmica e estruturar relatórios personalizados em formato HTML. O script envia os e-mails individualmente para cada um dos 28 representantes, garantindo a governança, o sigilo comercial e o isolamento de dados entre os profissionais.

### **Impacto e Resultados**

* **Eficiência Operacional:** Redução drástica do tempo de processamento e envio, mitigando o esforço de 12 a 16 horas semanais do time financeiro para praticamente **zero**.  
* **Garantia de SLA:** Eliminação total de atrasos na entrega dos relatórios, assegurando a pontualidade (sextas-feiras às 8h) e reduzindo o volume de chamados de suporte interno.

## **Projeto 2: Modelagem e Implementação de Ledger Financeiro e de Insumos (Polen)**

### **Cenário e Desafio**

A Polen enfrentava sérios desafios na visibilidade do fluxo de caixa e no acompanhamento do progresso físico-financeiro (de 0% a 100%) de seus contratos de reciclagem. Havia uma descentralização crítica de dados: o volume e as regras de negócio dos contratos (*deals*) residiam no CRM (HubSpot); o percentual de recebimento e faturamento estava no ERP (Omie); e o histórico de alocação de insumos encontrava-se em um sistema legado.

O portfólio contava com cerca de 300 contratos ativos. Como cada contrato podia abranger até 4 tipos de materiais recicláveis (papel, plástico, metal e vidro) distribuídos pelos 27 estados do Brasil, a granularidade chegava a até 108 linhas por contrato, variando de 500 kg a 15.000 toneladas. O controle era mantido em planilhas manuais massivas e desconexas, gerando erros de digitação, desalinhamento de saldos, quebra de fluxo de caixa junto a fornecedores e atrito com clientes que já haviam pago, mas não tinham seus insumos alocados eficientemente.

### **Solução Desenvolvida**

Liderei a construção de uma infraestrutura moderna de dados (Modern Data Stack) centralizada no **BigQuery** e orquestrada via **Dataform (GCP)** para criar uma "Single Source of Truth" (*Fonte Única da Verdade*).

1. **Ingestão e Unificação de Dados (ETL):** Conectei e extraí dados via API do HubSpot, Omie e banco de dados legado para o BigQuery.  
2. **Resolução de Entidades e Chave Primária:** Diante da falta de padronização entre os sistemas, implementei uma estratégia de unificação de dados. Utilizei o CNPJ como ponto de partida para associar contratos e empresas com apenas um vínculo ativo. Para cenários complexos de múltiplos contratos vigentes (onde divergências de centavos impediam a automação determinística), realizei uma conciliação manual criteriosa para garantir a integridade da chave primária que conectaria o CRM, ERP e sistema interno.  
3. **Analytics Engineering e Modelagem:** No Dataform, construí pipelines estruturados em camadas (tabelas intermediárias e de staging) utilizando boas práticas de engenharia de software, como versionamento via Git. Realizei um tratamento rigoroso para alinhar granularidades distintas, remover duplicatas e tratar valores nulos.  
4. **Arquitetura do Ledger:** O modelo final foi estruturado sob a lógica contábil de **Entradas, Saídas e Diferido**, permitindo rastrear saldos históricos e em tempo real por material, estado, fornecedor e cliente. A estrutura permitiu não apenas auditar o passado, mas projetar custos futuros e margens com base nas variações logísticas regionais.

### **Impacto e Resultados**

* **Redução de Custos (ROI Tangível):** Com o Ledger, a empresa pôde comprovar de forma analítica o *Lifetime Value* (LTV) e o volume de receita gerado para os seus principais fornecedores. Munido desses dados, o time de suprimentos ganhou poder de barganha, resultando em uma **redução de até 20% nos custos de aquisição de mercadorias**.  
* **Otimização da Cadeia de Suprimentos:** O modelo permitiu identificar tendências de preços e gargalos logísticos por estado, possibilitando a substituição de fornecedores ineficientes ou com preços fora da média de mercado.  
* **Evolução de Métricas de Retenção:** Conduzi uma **Análise de Cohort** que validou um aumento consistente na retenção e no LTV dos clientes finais, impulsionado por repasses de preços mais competitivos e cumprimento rigoroso dos prazos de entrega acordados.  
* **Governança de Dados:** O projeto foi consolidado com a documentação do primeiro Dicionário de Dados técnico da companhia, assegurando 100% de rastreabilidade das métricas organizacionais.

