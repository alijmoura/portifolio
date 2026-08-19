import type { Dictionary } from './types'

export const pt: Dictionary = {
  meta: {
    title: 'Alisson Moura — Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack e estudante de Ciência da Computação em Curitiba. TypeScript, React, Next.js, Node e Postgres. Sistemas em produção com usuários reais, APIs de IA e aplicações completas.',
  },

  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    skills: 'Competências',
    experience: 'Trajetória',
    contact: 'Contato',
  },

  hero: {
    eyebrow: 'Desenvolvedor Full Stack Júnior · Ciência da Computação',
    name: 'Alisson Moura',
    headline: 'Construo soluções de software que resolvem problemas reais e vão para produção.',
    summary:
      'Estudante de Ciência da Computação em transição para tecnologia, com experiência prática no desenvolvimento de sistemas web corporativos e +10 anos de vivência em rotinas operacionais e crédito bancário. Uno maturidade profissional, organização e atenção a detalhes ao desenvolvimento de soluções simples e úteis.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Falar comigo',
    ctaCv: 'Baixar Currículo',
    location: 'Curitiba, PR · Presencial, híbrido ou remoto',
  },

  stats: [
    { value: '15-20', label: 'usuários diários no sistema em produção' },
    { value: '1.000+', label: 'análises mensais geridas via software' },
    { value: '10+', label: 'anos de maturidade operacional' },
    { value: 'BSc', label: 'Ciência da Computação em andamento' },
  ],

  about: {
    title: 'Sobre mim',
    lead: 'A paixão por tecnologia sempre existiu. Mais de 10 anos no mercado me ensinaram a enxergar gargalos e construir soluções simples que facilitam a rotina de quem usa.',
    body: [
      'Desde jovem, sempre tive fascínio por entender como os computadores e softwares funcionavam por trás da tela. Porém, pela necessidade de trabalhar e garantir estabilidade inicial, trilhei por mais de uma década uma carreira no setor administrativo, financeiro e de correspondentes bancários.',
      'Essa vivência me forjou como um profissional extremamente responsável, disciplinado e atento aos detalhes — aprendendo na prática a lidar com regras de negócio rígidas, sigilo de dados, compliance e prazos críticos. Mais do que executar tarefas, meu foco sempre foi encontrar formas de otimizar processos e eliminar retrabalhos.',
      'Decidi retomar o sonho de trabalhar na área de tecnologia e ingressei na faculdade de Ciência da Computação. Para colocar a teoria em prática imediatamente, projetei e construí o Gestor de Processos e o Agente de IA para a operação onde eu atuava. O software saiu do VS Code direto para a produção e é utilizado diariamente por 15 a 20 pessoas, gerenciando cerca de 1.000 análises de crédito por mês e aproximadamente 100 contratos emitidos por mês.',
      'Meu fluxo de trabalho é pautado por pesquisa, arquitetura e especificações claras: gosto de entender a fundo a necessidade antes de codar, projetando do schema de dados ao deploy. Fora do ambiente de desenvolvimento, curto jogos eletrônicos, construir projetos pessoais, assistir a filmes e vídeos de tecnologia no YouTube, e alimento o sonho de viajar explorando as culturas do Brasil e dos EUA.',
    ],
  },

  projects: {
    title: 'Projetos',
    subtitle:
      'Sistemas reais e funcionais. Dois estão no ar com usuários ativos e um segue em construção ativa — repositórios privados podem ser demonstrados em entrevista.',
    problemLabel: 'O problema',
    solutionLabel: 'A solução',
    stackLabel: 'Stack',
    credsLabel: 'Acesso de demonstração',
    items: [
      {
        id: 'gestor-processos',
        name: 'Gestor de Processos',
        status: 'Em produção',
        statusTone: 'production',
        tagline:
          'Sistema para gestão de contratos e financiamentos, usado diariamente por 15 a 20 operadores reais.',
        problem:
          'A operação controlava centenas de contratos de financiamento imobiliário em planilhas e conferências manuais. Isso causava perda de prazos, falta de rastreabilidade de dados e nenhuma visibilidade gerencial sobre a produtividade da equipe.',
        solution:
          'Desenvolvi a aplicação inteira de ponta a ponta — front-end, Cloud Functions, modelagem Firestore e regras de segurança. Substituí o controle manual por um fluxo estruturado com controle exato de prazos, histórico de auditoria e relatórios que fornecem à gestão uma visão completa da equipe e dos processos.',
        highlights: [
          'Em produção ativa com 15 a 20 usuários diários, gerenciando ~100 novos contratos/mês e base de 10.000 clientes',
          'Aproximadamente 1.000 análises e conferências de crédito processadas mensalmente com fluxo de status auditável',
          'Dashboards e relatórios gerenciais que dão visibilidade total da produtividade e atribuições de cada operador',
          'Integração com WhatsApp Business API e suporte de IA (Vertex AI) para leitura e apoio em documentos',
        ],
        stack: [
          'JavaScript ES6+',
          'Firebase',
          'Cloud Functions',
          'Firestore',
          'Vertex AI',
          'WhatsApp Business API',
          'LGPD',
        ],
        links: [
          { label: 'Abrir demonstração', href: 'https://teste-gestor.ajsmtech.com/', kind: 'demo' },
        ],
        note: 'Sistema proprietário em produção. Repositório privado; o ambiente de demonstração abaixo contém apenas dados fictícios de teste.',
        credentials: {
          label: 'Ambiente de testes',
          user: 'demo@ajsmtech.com',
          pass: 'paodealho@',
        },
      },
      {
        id: 'agente-de-IA',
        name: 'Agente de IA - Analista de Crédito',
        status: 'Ativo',
        statusTone: 'active',
        tagline:
          'API de agentes de IA com filas assíncronas que recebe documentos por WhatsApp e gera pareceres para validação humana.',
        problem:
          'Validar renda e documentos enviados por clientes via mensagens era um processo manual, lento e sujeito a erros. Fazer a leitura síncrona dentro da requisição travava o sistema e não escalava.',
        solution:
          'Construí uma API desacoplada em Node.js com filas BullMQ e Redis. O webhook valida a assinatura da Meta e responde instantaneamente, enquanto workers em segundo plano extraem dados, acionam a OpenAI API e gravam o parecer para aprovação humana.',
        highlights: [
          'Webhook da Meta Cloud API com validação de assinatura HMAC (X-Hub-Signature-256) e resposta síncrona imediata',
          'Processamento assíncrono com BullMQ + Redis, workers desacoplados da API e painel de controle de filas',
          'Ciclo de feedback humano persistido: correções dos analistas alimentam exemplos few-shot para as próximas chamadas',
          'Geração automática de pareceres e planilhas de fechamento com revisão humana obrigatória antes da gravação',
          'Logs estruturados com Pino e isolamento estrito da base de dados de produção',
        ],
        stack: [
          'Node.js',
          'Express 5',
          'OpenAI API',
          'BullMQ',
          'Redis',
          'Firebase Admin',
          'Zod',
          'Docker',
        ],
        links: [],
        note: 'Repositório privado integrado à operação real. Arquitetura e código-fonte podem ser apresentados durante a entrevista.',
      },
      {
        id: 'ethos-tribo',
        name: 'Ethos Tribo',
        status: 'Em construção',
        statusTone: 'wip',
        tagline:
          'Plataforma web + mobile para reconectar pessoas a atividades presenciais e a um grupo fixo.',
        problem:
          'Muitas pessoas querem sair de casa mas não têm companhia. Apps convencionais tratam eventos de forma isolada sem criar vínculo nem continuidade comunitária.',
        solution:
          'Modelei o produto em torno da entidade de presença confirmada, integrando descoberta, agenda curada e grupos fixos num único monorepo TypeScript com contratos compartilhados entre web (Next.js) e mobile (React Native/Expo).',
        highlights: [
          'Monorepo com 2 aplicações (Next.js e React Native) e 5 pacotes compartilhados: contratos, domínio, dados, design e storage',
          '520+ testes automatizados, 12 migrations versionadas e 9 jobs agendados',
          'API tipada de ponta a ponta com tRPC + Zod — garantindo integridade rigorosa entre front e mobile',
          'Busca por proximidade com PostGIS cobrindo Curitiba e região metropolitana',
          '8 ADRs registrando alternativas arquiteturais e 46 regras de negócio documentadas',
        ],
        stack: [
          'TypeScript',
          'Next.js 16',
          'React Native / Expo',
          'tRPC',
          'Zod',
          'PostgreSQL',
          'PostGIS',
          'Supabase',
          'Vitest',
          'Docker',
        ],
        links: [
          { label: 'Ver prévia', href: 'https://ethos-tribo-web.vercel.app', kind: 'demo' },
        ],
        note: 'Em desenvolvimento ativo — prévia reflete o estado atual das fases implementadas.',
      },
      {
        id: 'craftwebtools',
        name: 'CraftWebTools',
        status: 'No ar',
        statusTone: 'live',
        tagline:
          'Suíte de manipulação de PDF que processa arquivos 100% no navegador, garantindo privacidade total.',
        problem:
          'Ferramentas online exigem upload de documentos confidenciais (contratos, holerites) para servidores de terceiros.',
        solution:
          'Reescrevi a arquitetura com zero upload: todo o processamento com WebAssembly e bibliotecas JS acontece na sandbox client-side do navegador.',
        highlights: [
          '12+ ferramentas: juntar, dividir, comprimir, desbloquear e rotacionar PDF, além de conversões de arquivos',
          '100% client-side com pdf-lib, pdfjs-dist e jsPDF — nenhum dado do usuário trafega pela rede',
          'Build com pré-renderização SSR, sitemap automático e acessibilidade WCAG (mínimo 4.5:1)',
          'Publicado em domínio próprio com suporte a tema claro e escuro',
        ],
        stack: [
          'React 19',
          'TypeScript',
          'Vite',
          'pdf-lib',
          'pdfjs-dist',
          'WebAssembly',
          'Netlify',
        ],
        links: [{ label: 'Acessar site', href: 'https://craftwebtools.com', kind: 'site' }],
      },
    ],
  },

  skills: {
    title: 'Competências',
    subtitle: 'Fundamentos de Ciência da Computação aplicados ao desenvolvimento moderno e à resolução de problemas reais.',
    groups: [
      {
        label: 'Linguagens',
        items: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
      },
      {
        label: 'Front-end',
        items: [
          'React 19',
          'Next.js (App Router)',
          'React Native / Expo',
          'Vite',
          'Tailwind CSS',
          'Design tokens',
          'Acessibilidade (WCAG)',
          'Responsividade',
        ],
      },
      {
        label: 'Back-end',
        items: [
          'Node.js',
          'Express',
          'tRPC',
          'APIs REST',
          'Zod',
          'BullMQ / Redis',
          'Cloud Functions',
          'Webhooks e HMAC',
        ],
      },
      {
        label: 'Dados',
        items: [
          'PostgreSQL',
          'PostGIS',
          'Prisma',
          'Supabase',
          'Firestore',
          'Migrations',
          'Modelagem e indexação',
        ],
      },
      {
        label: 'IA aplicada',
        items: [
          'OpenAI API',
          'Vertex AI',
          'Agentes com ferramentas',
          'Processamento assíncrono',
          'Few-shot com feedback humano',
        ],
      },
      {
        label: 'Engenharia',
        items: [
          'Git / GitHub',
          'Docker',
          'Vitest',
          'Testes automatizados',
          'ADRs',
          'Desenvolvimento orientado a spec',
          'Vercel / Netlify / Firebase Hosting',
          'LGPD',
        ],
      },
    ],
  },

  experience: {
    title: 'Trajetória',
    subtitle: 'Mais de 10 anos de dedicação e visão de processos, potencializados pela engenharia de software.',
    items: [
      {
        role: 'Analista de Crédito',
        company: 'Apoio Administrativo',
        period: 'Dez 2021 — Jun 2026',
        bullets: [
          'Atuação no setor de registro de contratos, com responsabilidade sobre controle, conferência, acompanhamento de prazos e conformidade legal de documentos.',
          'Identifiquei que os controles manuais eram o principal gargalo da operação e projetei o Gestor de Processos que os substituiu — hoje em produção diária com 15 a 20 operadores, gerenciando ~1.000 análises de crédito e ~100 contratos/mês.',
          'Desenvolvi a aplicação de ponta a ponta: levantamento de requisitos com os usuários finais, modelagem de dados no Firestore, Cloud Functions, automações e dashboards gerenciais.',
          'Construí uma API de Agente de IA com filas assíncronas (BullMQ/Redis) para acelerar a leitura e validação documental com supervisão humana.',
          'Combinei rigor em compliance bancário, proteção de dados (LGPD) e prazos rígidos com desenvolvimento ágil focado na experiência dos usuários.',
        ],
      },
      {
        role: 'Assistente Administrativo',
        company: 'Premiere Serviços Administrativos',
        period: 'Mar 2014 — Dez 2021',
        bullets: [
          'Atendimento ao cliente, montagem, conferência e acompanhamento de processos de financiamento imobiliário.',
          'Interface direta com bancos, cartórios e órgãos públicos, garantindo rigor no controle de documentos, prazos e status dos processos.',
          'Organização de dados, resolução de inconsistências operacionais e apoio às rotinas administrativas — a base da disciplina e atenção aos detalhes aplicadas na engenharia de software.',
        ],
      },
    ],
    educationTitle: 'Formação',
    education: [
      {
        course: 'Bacharelado em Ciência da Computação',
        school: 'Faculdade Descomplica',
        period: 'Desde Mar 2025 · Em andamento',
      },
    ],
  },

  contact: {
    title: 'Vamos conversar',
    lead: 'Aberto a oportunidades como Desenvolvedor Full Stack, Back-end ou Front-end (Estágio ou Júnior). Se o seu time busca um profissional maduro, responsável, com mentalidade de dono e foco em entregar código limpo e útil para produção, me chame!',
    email: 'alijrsm@gmail.com',
    phone: '(41) 99829-0795',
    linkedin: 'linkedin.com/in/alisson-moura95',
    github: 'github.com/alijmoura',
    availability: 'Disponível para Curitiba (presencial ou híbrido) e remoto',
  },

  footer: {
    built: 'Feito com React, TypeScript e Vite',
    rights: 'Alisson Moura',
  },

  a11y: {
    toggleTheme: 'Alternar tema claro e escuro',
    toggleLang: 'Switch to English',
    menu: 'Abrir menu de navegação',
  },
}
