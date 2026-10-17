/**
 * profileData.js
 * Centralized data schema for Mônica Damaceno da Silva's Interactive Platform.
 * Focused on: Mapeamento de Processos, Legislação Tributária, Savings Tributários e Prevenção de Contingências.
 */

export const profileData = {
  personal: {
    name: "Mônica Damaceno da Silva",
    role: "Especialista em Legislação Tributária & Mapeamento de Processos",
    tagline: "Mapeamento e otimização de processos fiscais, sólido domínio da legislação tributária e geração contínua de savings com foco em conformidade e mitigação de contingências.",
    location: "São Paulo, SP - Brasil",
    linkedinUrl: "https://br.linkedin.com/in/m%C3%B4nica-damaceno-da-silva-b6628037",
    email: "monica.damaceno@email.com",
    phone: "+55 (11) 98765-4321",
    summary: "Especialista técnica com sólida vivência na legislação tributária brasileira (tributos diretos e indiretos) e em mapeamento de processos fiscais e contábeis de ponta a ponta. Atuação com foco analítico rigoroso na identificação e captura de savings tributários, saneamento cadastral, revisão de apurações e implementação de controles internos preventivos para blindagem contra contingências fiscais e autuações fazendárias.",
    stats: [
      { label: "Atuação em Rotinas Fiscais", value: "10+ Anos" },
      { label: "Mapeamento de Rotinas", value: "Processos" },
      { label: "Oportunidades Fiscais", value: "Savings" },
      { label: "Mitigação de Contingências", value: "Conformidade" }
    ]
  },

  // Interactive Presentation Deck Slides
  slides: [
    {
      id: "intro",
      number: "01",
      badge: "Apresentação Técnica",
      title: "Inteligência Tributária & Mapeamento de Processos",
      subtitle: "Maximização da eficiência fiscal e segurança jurídica por meio de processos claros, conformidade e captura de savings.",
      content: [
        "Sólido domínio da legislação tributária brasileira aplicada às rotinas operacionais e aos fluxos de negócios.",
        "Mapeamento detalhado e redesenho de processos fiscais, do recebimento de notas até a escrituração e fechamento.",
        "Atuação focada na identificação sistemática de savings tributários lícitos e recuperação de créditos legítimos."
      ],
      highlights: [
        { title: "Mapeamento de Processos", desc: "Eliminação de retrabalhos e gargalos nos fechamentos fiscais." },
        { title: "Domínio da Legislação", desc: "Interpretação técnica precisa das normas tributárias federais, estaduais e municipais." },
        { title: "Mitigação de Contingências", desc: "Auditoria preventiva para evitar glosas, autos de infração e multas." }
      ],
      colorAccent: "#6366f1"
    },
    {
      id: "process-mapping",
      number: "02",
      badge: "Processos & Fluxos",
      title: "Mapeamento & Otimização de Processos Fiscais",
      subtitle: "Diagnósticos aprofundados para construir fluxos de trabalho ágeis, auditáveis e seguros.",
      content: [
        "Mapeamento minucioso dos fluxos de compras, faturamento, retenções, créditos e apuração de tributos.",
        "Identificação de vulnerabilidades operacionais que geram riscos de autuação ou pagamentos indevidos.",
        "Estruturação de Procedimentos Operacionais Padrão (POPs) e esteiras de validação prévia de arquivos fiscais."
      ],
      highlights: [
        { title: "Validação Prévia do SPED", desc: "Cruzamento prévio de EFD ICMS/IPI, EFD Contribuições, DCTF e ECF." },
        { title: "Integração Operacional", desc: "Alinhamento entre compras, almoxarifado, vendas e o departamento fiscal." },
        { title: "Redução de Prazos", desc: "Ganhos substanciais de tempo no ciclo de fechamento fiscal mensal." }
      ],
      colorAccent: "#8b5cf6"
    },
    {
      id: "tax-savings",
      number: "03",
      badge: "Eficiência & Savings",
      title: "Busca de Savings Tributários",
      subtitle: "Análise técnica criteriosa para redução legal da carga tributária e aproveitamento de oportunidades.",
      content: [
        "Identificação de créditos tributários legítimos não apropriados (PIS, COFINS, ICMS e IPI).",
        "Revisão técnica e saneamento da parametrização de produtos (NCM, CST, CFOP, alíquotas e benefícios).",
        "Diagnóstico de enquadramentos fiscais mais vantajosos e desonerações setoriais permitidas por lei."
      ],
      highlights: [
        { title: "Geração de Caixa", desc: "Maximização de savings e fluxo financeiro com total embasamento legal." },
        { title: "Saneamento Cadastral", desc: "Correção de regras fiscais no ERP para estancar pagamentos tributários a maior." },
        { title: "Dossiês de Créditos", desc: "Documentação probatória sólida e estruturada para suporte a auditorias." }
      ],
      colorAccent: "#06b6d4"
    },
    {
      id: "compliance",
      number: "04",
      badge: "Prevenção & Compliance",
      title: "Prevenção & Mitigação de Contingências",
      subtitle: "Proteção patrimonial e segurança jurídica irrestrita perante o Fisco.",
      content: [
        "Auditoria preventiva de obrigações principais e acessórias antes do envio oficial aos órgãos fazendários.",
        "Acompanhamento constante de alterações normativas, Soluções de Consulta da RFB e decisões do CARF e STJ/STF.",
        "Elaboração de defesas administrativas e respostas a notificações fiscais com fundamentação jurídica e documental."
      ],
      highlights: [
        { title: "Zero Multas", desc: "Rigor absoluto em prazos de apuração e conformidade de declarações." },
        { title: "Matriz de Riscos Fiscais", desc: "Monitoramento proativo de inconsistências entre faturamento e estoques." },
        { title: "Reforma Tributária", desc: "Preparação e estudo contínuo da transição para a CBS e IBS (EC 132/2023)." }
      ],
      colorAccent: "#10b981"
    },
    {
      id: "contact",
      number: "05",
      badge: "Conexão & Oportunidades",
      title: "Conexão & Oportunidades Fiscais",
      subtitle: "Disponível para projetos de diagnóstico tributário, mapeamento de processos e consultoria.",
      content: [
        "Aberta a novas oportunidades profissionais nas áreas fiscal, tributária e de governança de processos.",
        "Disponível para reuniões técnicas, consultorias pontuais ou atuações estratégicas corporativas.",
        "Acesse o perfil completo no LinkedIn ou entre em contato diretamente pelos canais abaixo."
      ],
      highlights: [
        { title: "São Paulo, SP", desc: "Disponibilidade presencial, híbrida ou remota." },
        { title: "Foco Técnico Especializado", desc: "Compromisso com precisão analítica e geração de savings." },
        { title: "Comunicação Direta", desc: "Retorno ágil para oportunidades e conexões profissionais." }
      ],
      colorAccent: "#f43f5e"
    }
  ],

  // Career Experience focusing on Tax & Process Mapping
  experiences: [
    {
      id: "exp-1",
      role: "Especialista em Legislação Tributária e Mapeamento de Processos",
      company: "Atuação Corporativa & Consultoria Tributária",
      period: "Consolidado",
      location: "São Paulo, SP",
      description: "Condução de diagnósticos fiscais e mapeamento de rotinas operacionais, com foco na apuração de créditos extemporâneos, revisão de bases de cálculo e identificação de oportunidades lícitas de savings tributários.",
      achievements: [
        "Mapeamento integral do fluxo de escrituração e apuração fiscal, eliminando gargalos operacionais e erros de cálculo.",
        "Identificação e documentação de créditos tributários não aproveitados, gerando savings financeiros expressivos com respaldo legal.",
        "Implantação de rotina de auditoria interna preventiva de arquivos SPED (EFD ICMS/IPI e Contribuições), prevenindo autuações e contingências."
      ],
      tags: ["Mapeamento de Processos", "Legislação Tributária", "Savings Tributários", "Mitigação de Contingências"]
    },
    {
      id: "exp-2",
      role: "Analista Fiscal Sênior / Tributário",
      company: "Organização Empresarial",
      period: "Trajetória Consolidada",
      location: "São Paulo, SP",
      description: "Apuração e revisão técnica de tributos diretos e indiretos (ICMS, IPI, PIS, COFINS, ISS), análise da legislação vigente e garantia do correto cumprimento das obrigações acessórias federais, estaduais e municipais.",
      achievements: [
        "Revisão cadastral de regras tributárias (NCM, CST, CFOP e alíquotas) no ERP, cessando pagamentos a maior e corrigindo distorções fiscais.",
        "Elaboração de Procedimentos Operacionais Padrão (POPs) para a área fiscal e faturamento, aumentando a acurácia dos lançamentos.",
        "Atendimento e suporte técnico a fiscalizações e auditorias, fornecendo conciliações detalhadas e dossiês de defesa técnica."
      ],
      tags: ["Tributos Diretos e Indiretos", "Parametrização ERP", "Prevenção de Riscos", "SPED Fiscal"]
    },
    {
      id: "exp-3",
      role: "Analista de Processos e Conformidade Fiscal",
      company: "Consultoria e Gestão Corporativa",
      period: "Experiência Prévia",
      location: "São Paulo, SP",
      description: "Mapeamento e documentação de processos contábeis e fiscais, conciliação de tributos a recolher e a compensar, e acompanhamento analítico de normas e decretos regulatórios.",
      achievements: [
        "Estruturação de matriz de risco fiscal para cruzamento de dados de faturamento, entradas e estoques.",
        "Aceleração do fechamento fiscal mensal por meio da padronização e automação de planilhas e rotinas de conferência."
      ],
      tags: ["Mapeamento de Rotinas", "Matriz de Riscos", "Conciliação Fiscal", "Normas Fiscais"]
    }
  ],

  // Skills organized by category
  skills: [
    {
      category: "Legislação & Inteligência Tributária",
      items: [
        { name: "Tributos Indiretos (ICMS, IPI, ISS, ICMS-ST)", level: 96 },
        { name: "PIS & COFINS (Cumulativo e Não Cumulativo)", level: 94 },
        { name: "Tributação Direta (IRPJ / CSLL - Lucro Real e Presumido)", level: 90 },
        { name: "Reforma Tributária e Transição (CBS, IBS e IS)", level: 92 }
      ]
    },
    {
      category: "Mapeamento & Otimização de Processos",
      items: [
        { name: "Mapeamento de Fluxos Fiscais de Ponta a Ponta", level: 96 },
        { name: "Elaboração de Procedimentos Operacionais Padrão (POPs)", level: 94 },
        { name: "Parametrização Fiscal de Cadastros e ERP (NCM/CST)", level: 93 },
        { name: "Automação e Otimização do Fechamento Fiscal", level: 90 }
      ]
    },
    {
      category: "Savings Tributários & Mitigação de Riscos",
      items: [
        { name: "Identificação e Levantamento de Savings Tributários", level: 95 },
        { name: "Auditoria Preventiva de SPED (Fiscal, Contribuições, ECF)", level: 94 },
        { name: "Prevenção de Contingências e Passivos Fiscais", level: 96 },
        { name: "Elaboração de Dossiês e Defesas Técnicas Fiscais", level: 90 }
      ]
    }
  ],

  // Featured Deliverables / Projects
  projects: [
    {
      id: "proj-1",
      title: "Mapeamento de Processos e Eliminação de Vulnerabilidades Fiscais",
      category: "Mapeamento & Governança",
      summary: "Diagnóstico e mapeamento abrangente dos fluxos de compras, faturamento e escrituração fiscal, instituindo esteiras de validação prévia que blindaram a empresa contra inconsistências regulatórias.",
      impact: "100% de conformidade nas entregas de SPED e erradicação de autuações",
      metrics: ["Mapeamento completo dos fluxos fiscais", "Zero autuações ou multas por inconsistência", "Otimização no tempo de fechamento fiscal"]
    },
    {
      id: "proj-2",
      title: "Diagnóstico Fiscal e Levantamento de Savings Tributários",
      category: "Savings & Planejamento",
      summary: "Revisão detalhada das apurações de tributos federais e estaduais, identificando créditos legítimos não apropriados sobre despesas e insumos, com saneamento cadastral completo no ERP.",
      impact: "Geração de savings tributários com respaldo legal e recomposição de caixa",
      metrics: ["Créditos tributários identificados com suporte documental", "Saneamento e parametrização cadastral no ERP", "Adoção de regras tributárias mais vantajosas"]
    },
    {
      id: "proj-3",
      title: "Estruturação de Matriz Preventiva contra Contingências Fiscais",
      category: "Mitigação de Riscos",
      summary: "Desenvolvimento de rotinas sistemáticas de cruzamento prévio de dados fiscais (EFD ICMS/IPI vs EFD Contribuições vs DCTF vs Contabilidade), antecipando qualquer apontamento fiscal.",
      impact: "Mitigação proativa de contingências fiscais e segurança jurídica perante o Fisco",
      metrics: ["Redução de 90% na necessidade de retificações", "Dossiês de suporte fiscal 100% organizados e auditáveis", "Auditoria prévia contínua"]
    }
  ],

  education: [
    {
      degree: "Especialização em Direito Tributário / Gestão Tributária e Compliance Fiscal",
      institution: "Instituição de Ensino de Referência",
      period: "Concluído"
    },
    {
      degree: "Graduação Superior em Ciências Contábeis / Direito / Administração",
      institution: "Universidade de Referência em São Paulo",
      period: "Concluído"
    }
  ]
};
