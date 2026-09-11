const LOGO = '<img class="logo-inline" src="assets/logo-confrapag.png" alt="confrapag">';

const ECOSYSTEM = {
  products: {
    pix: {
      name: "Confra PIX",
      tag: "Recebimento e envio instantâneo",
      title: `Confra PIX no arranjo ${LOGO}`,
      summary:
        "Soluções completas para recebimentos e pagamentos instantâneos com segurança, agilidade e alta disponibilidade.",
      detail:
        "Toda transação Confra PIX é capturada em tempo real e encaminhada à Central de apuração, comissionamento e conciliação, que transforma cada transação em receita, com controle, conciliação, apuração e comissionamento, e liquida na conta concentradora do MT.",
      checks: [
        "QR Code, chave PIX, API e PDV",
        "Liquidação na conta concentradora",
        "Rastreio por cliente, canal e estabelecimento",
        "Receita: tarifa sobre envio e recebimento",
      ],
      flow: [
        "Cliente inicia Confra PIX de recebimento ou envio",
        "Transação autorizada e liquidada",
        "Evento chega à captura da central",
        "Receita creditada na conta MT",
      ],
      revenue: "Tarifa sobre envio e recebimento.",
      feeRate: 0.0099,
      partnerShare: 0.3,
    },
    tef: {
      name: "Confra TEF",
      tag: "Ponto de venda físico e digital",
      title: "Confra TEF integrado ao PDV",
      summary:
        "Soluções de pagamento integrado para o ponto de venda físico e digital com confiabilidade e eficiência.",
      detail:
        "A venda no PDV ou pinpad é autorizada, entra na apuração Confra TEF e a receita correspondente é liquidada na conta MT, com retenção de 0,15% por transação.",
      checks: [
        "PDV físico, pinpad e canais digitais",
        "Multiadquirência e conciliação por estabelecimento",
        "Captura automática de cada venda",
        "Receita: tarifa sobre transações no PDV e retenção de 0,15% por transação",
      ],
      flow: [
        "Venda no PDV ou pinpad",
        "Autorização da bandeira/adquirente",
        "Transação entra na apuração Confra TEF",
        "Receita liquidada na conta MT",
      ],
      revenue: "Tarifa sobre transações no PDV e retenção de 0,15% por transação.",
      feeRate: 0.018,
      partnerShare: 0.3,
    },
    system: {
      name: "Confra SYSTEM",
      tag: "Plataforma, APIs e gestão",
      title: "Confra SYSTEM",
      summary:
        "Plataforma tecnológica e APIs robustas para integração, automação e gestão completa das operações.",
      detail:
        "O Confra SYSTEM tem CNPJ próprio e contrato por adesão ao Confra SYSTEM. Portal, APIs e backoffice registram o uso; cada módulo tem subconta na conta concentradora, com espaço para novos contratos.",
      checks: [
        "Subcontas: Confra PDV, Confra Cobrança e Confra GerenPix",
        "CNPJ próprio e contrato por adesão ao Confra SYSTEM",
        "Mensalidades, taxas e valor fixo por produto",
        "API do conciliador confronta custos com a central de custos",
      ],
      flow: [
        "Operação usa portal, API ou PDV",
        "Serviços e eventos são registrados",
        "Uso entra na apuração Confra SYSTEM",
        "Mensalidades e taxas na conta MT",
      ],
      revenue: "Mensalidades e serviços dos módulos Confra PDV, Confra Cobrança e Confra GerenPix.",
      feeRate: 0.05,
      partnerShare: 0.3,
    },
    hub: {
      name: "Confra HUB",
      tag: "Soluções para o Estabelecimento Comercial (EC)",
      title: "Confra HUB de serviços financeiros",
      summary:
        "Soluções inteligentes",
      detail:
        "Cada serviço do Confra HUB tem subconta própria, que gera comissionamento, considerando o preço de venda, preço de compra e o custo.",
      checks: [
        "Seis famílias de solução no mesmo Hub",
        "Foco em economia, regularização e sustentabilidade",
        "Comissionamento por serviço e parceiro",
        "Receita: taxa sobre serviços ao Estabelecimento Comercial (EC)",
      ],
      flow: [
        "Estabelecimento Comercial (EC) contrata o serviço do Confra HUB",
        "Serviço entra na subconta própria",
        "Comissionamento considera preço de venda, preço de compra e custo",
        "Valor liquidado na conta MT",
      ],
      revenue: "Taxa pelos serviços e soluções para Estabelecimento Comercial (EC).",
      feeRate: 0.08,
      partnerShare: 0.3,
    },
    wiki: {
      name: "Weki e BaaS",
      tag: "Processamento de transações",
      title: "Weki e BaaS",
      summary: "Processamento de transações.",
      detail:
        "Weki e BaaS consolidam a receita de processamento. A cobrança é por volume de transações, com liquidação na conta concentradora.",
      checks: [
        "Processamento de transações",
        "Cobrança por volume processado",
        "Liquidação na conta concentradora",
        "Subconta própria na conta MT",
      ],
      flow: [
        "Transação é processada na ponta",
        "Volume entra na apuração Weki e BaaS",
        "Receita de processamento é calculada",
        "Valor liquidado na conta MT",
      ],
      revenue: "Processamento de transações.",
      feeRate: 0.008,
      partnerShare: 0.3,
    },
    shopping: {
      name: "Confra Shopping",
      tag: "Marketplace da base",
      title: "Confra Shopping",
      summary: "Venda de produtos e serviços para nossa base de clientes.",
      detail:
        "O Confra Shopping opera como marketplace com retenção percentual sobre as vendas entre clientes da base, liquidada na conta concentradora.",
      checks: [
        "Venda de produtos e serviços para a nossa base de clientes",
        "Retenção percentual nas vendas da base",
        "Liquidação na conta concentradora",
        "Subconta própria na conta MT",
      ],
      flow: [
        "Cliente da base realiza a compra",
        "Venda é registrada no Confra Shopping",
        "Percentual é apurado",
        "Receita liquidada na conta MT",
      ],
      revenue: "Venda de produtos e serviços para nossa base de clientes.",
      feeRate: 0.06,
      partnerShare: 0.3,
    },
    universidade: {
      name: "Universidade Confrapag",
      tag: "Treinamento contínuo",
      title: "Universidade Confrapag",
      summary: "Catálogo próprio de cursos para a base de clientes e os colaboradores.",
      detail:
        "A Universidade Confrapag tem autonomia para gerir os cursos vendidos: catálogo, matrículas, preço e custo entram na subconta própria, sem depender de percentual sobre o TPV dos outros produtos.",
      checks: [
        "Catálogo próprio de cursos e treinamentos",
        "Matrículas de clientes da base e colaboradores",
        "Subconta própria para a receita dos cursos",
        "Apuração venda − compra − custo, sem split 70/30",
      ],
      flow: [
        "Cliente ou colaborador se inscreve no curso do catálogo",
        "A Universidade classifica a matrícula no curso vendido",
        "Receita e custo entram na subconta da Universidade",
        "Valor liquidado na conta MT",
      ],
      revenue: "Receita dos cursos vendidos no catálogo da Universidade.",
      feeRate: 0,
      partnerShare: 0,
    },
    eventos: {
      name: "Confra Eventos",
      tag: "Convenções e encontros",
      title: "Confra Eventos",
      summary: "Catálogo próprio de Convenção Nacional, Regionais e Paulo Por Aí.",
      detail:
        "O Confra Eventos tem autonomia para gerir os eventos vendidos: catálogo, ingressos, preço e custo entram na subconta própria, sem split 70/30 e sem percentual sobre o TPV dos outros produtos.",
      checks: [
        "Catálogo próprio: Convenção Nacional, Regionais e Paulo Por Aí",
        "Gestão de ingressos vendidos por evento",
        "Subconta própria para a receita dos eventos",
        "Apuração venda − compra − custo, sem split 70/30",
      ],
      flow: [
        "Participante adquire ingresso no catálogo do Confra Eventos",
        "O evento classifica a venda no catálogo e na subconta",
        "Receita e custo entram na subconta do Confra Eventos",
        "Valor liquidado na conta MT",
      ],
      revenue: "Receita dos eventos vendidos no catálogo do Confra Eventos.",
      feeRate: 0,
      partnerShare: 0,
    },
  },
  hubServices: {
    cred: {
      name: "Confra Cred",
      text: "Subconta Confrac: comissões da Credit César. O custo da operação, a tarifa e o split 70/30 (rede × operação) entram na mesma apuração.",
    },
    veicular: {
      name: "Débitos veiculares",
      text: "Convênio Parcele na Hora. Regularização de IPVA, licenciamento e débitos do veículo, com tarifa e comissão apuradas no Confra HUB.",
    },
    tributos: {
      name: "Parcelamento de tributos",
      text: "Parcelamento de tributos e boletos diversos, com classificação da transação por cliente, canal e estabelecimento.",
    },
    fgts: {
      name: "Adiantamento de FGTS Aniversário",
      text: "Antecipação da modalidade aniversário, gerando receita de serviço e split automático para a rede.",
    },
    certificado: {
      name: "Certificado digital",
      text: "Emissão via Cert Sign. A taxa contratada é conciliada com a produção via API até a liquidação na conta concentradora.",
    },
    energia: {
      name: "Confra Energia",
      text: "Subconta Confraenergia. Portabilidade de energia com economia e sustentabilidade; o fechamento concilia a receita recebida com o custo acordado.",
    },
  },
  pipeline: [
    {
      n: 1,
      name: "Captura",
      text: "Todas as transações dos produtos (Confra PIX, Confra TEF, Confra SYSTEM, Confra HUB, Weki e BaaS, Confra Shopping, Universidade Confrapag e Confra Eventos) são capturadas em tempo real.",
      icon: '<svg viewBox="0 0 48 48"><rect x="10" y="8" width="22" height="28" rx="2"/><circle cx="32" cy="30" r="8"/><path d="m36 34 6 6"/></svg>',
    },
    {
      n: 2,
      name: "Apuração",
      text: "Validação, conciliação e classificação das transações por produto, cliente, canal e estabelecimento.",
      icon: '<svg viewBox="0 0 48 48"><path d="M10 34V22h6v12H10Zm11 0V14h6v20h-6Zm11 0V18h6v16h-6Z"/><path d="m12 16 10-8 16 10"/></svg>',
    },
    {
      n: 3,
      name: "Cálculo de comissões",
      text: "Aplicação automática das regras por produto, cliente, parceiro, faixa de volume e contrato.",
      icon: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><path d="M20 18c.8-1.4 2.2-2 3.8-2 2.6 0 4.2 1.5 4.2 3.6 0 4.4-8 2.6-8 7 0 2 1.7 3.6 4.2 3.6 1.8 0 3.3-.8 4-2.1M24 12v4M24 32v4"/></svg>',
    },
    {
      n: 4,
      name: "Distribuição",
      text: "Repasses das comissões para parceiros, conforme contratos e regras vigentes.",
      icon: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><path d="M24 14v20M18 19c1-1.6 2.6-2.4 4.4-2.4 2.8 0 4.6 1.5 4.6 3.8 0 4.6-9 2.8-9 7.4 0 2.2 1.9 3.8 4.6 3.8 2 0 3.6-.9 4.5-2.3"/></svg>',
    },
    {
      n: 5,
      name: "Relatórios",
      text: "Dashboards gerenciais com transações, receitas, comissões e performance de cada operação.",
      icon: '<svg viewBox="0 0 48 48"><path d="M8 36V12h6v24H8Zm10 0V20h6v16h-6Zm10 0V16h6v20h-6Zm10 0V8h6v28h-6Z"/></svg>',
    },
  ],
  rules: [
    {
      title: "Dimensões da apuração",
      text: "Cada transação é classificada em múltiplos eixos para garantir rastreabilidade e conferência.",
      items: [
        "Produto de origem (Confra PIX, Confra TEF, Confra SYSTEM, Confra HUB, Weki e BaaS, Confra Shopping, Universidade Confrapag e Confra Eventos)",
        "CNPJ e subconta da unidade de negócio, na conta concentradora",
        "Operação, licenciado e estabelecimento",
        "Data de captura, liquidação e competência",
      ],
    },
    {
      title: "Regras de comissionamento",
      text: "O motor aplica a tabela contratual sem intervenção manual, com trilha de auditoria.",
      items: [
        "Custo só entra se estiver em contrato ou aditivo",
        "Split de lucro 70% rede e 30% operação",
        "Pulse cobra tarifas na subconta; Confra TEF retém 0,15% por transação",
        "Log de cada alteração para o fechamento auditável",
      ],
    },
    {
      title: "Governança da conta MT",
      text: "A conta concentradora no MT Pagamentos é o ponto único de liquidez, com subcontas por produto.",
      items: [
        "Receita do fornecedor entra, é apurada e repassada às operações",
        "Central de custos concilia contrato × produção via API",
        "Controladoria identifica divergência e aciona o jurídico",
        "Fechamentos conciliam receita recebida e custo acordado",
      ],
    },
  ],
  layers: [
    { n: "Camada 1", title: "Origem", text: "Estabelecimentos Comerciais (EC) e usuários finais geram transações nos canais Confra PIX, Confra TEF, Confra SYSTEM e Confra HUB." },
    { n: "Camada 2", title: "Produtos", text: "Cada produto processa, autoriza e registra o evento, mantendo a especialização da ponta." },
    { n: "Camada 3", title: `Central ${LOGO}`, text: "Conciliação, classificação, regras de comissão e visão única das 20 operações." },
    { n: "Camada 4", title: "Conta MT", text: "Liquidação na conta concentradora, com CNPJ e subconta por produto. Único ponto de entrada de receita do ecossistema." },
    { n: "Camada 5", title: "Distribuição", text: "Repasses a parceiros, extratos, dashboards e trilha de auditoria para gestão e compliance." },
  ],
  benefits: [
    { title: "Concentração total", text: "Concentração 100% das receitas em uma única conta no MT, com segurança e controle.", icon: '<svg viewBox="0 0 48 48"><path d="M24 6 10 12v12c0 8.5 6 16 14 18.8C32 40 38 32.5 38 24V12L24 6Z"/><path d="m18 24 4 4 8-9"/></svg>' },
    { title: "Apuração automática", text: "Comissionamento automático, preciso e auditável, sem planilha paralela.", icon: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="8"/><path d="M24 8v4M24 36v4M8 24h4M36 24h4M12.5 12.5l2.8 2.8M32.7 32.7l2.8 2.8M12.5 35.5l2.8-2.8M32.7 15.3l2.8-2.8"/></svg>' },
    { title: "Visão completa", text: "Desempenho por produto, cliente e canal, com gestão consolidada do negócio.", icon: '<svg viewBox="0 0 48 48"><path d="M8 36V20h8v16H8Zm12 0V12h8v24h-8Zm12 0V24h8v12h-8Z"/></svg>' },
    { title: "Transparência", text: "Mais confiança para clientes e parceiros, com regras e extratos rastreáveis.", icon: '<svg viewBox="0 0 48 48"><circle cx="18" cy="16" r="6"/><circle cx="30" cy="16" r="6"/><path d="M8 36c1-6 5-10 10-10s9 4 10 10M22 36c1-6 5-10 10-10s9 4 10 10"/></svg>' },
    { title: "Competitividade", text: "Soluções que geram economia, sustentabilidade e diferencial para o Estabelecimento Comercial (EC).", icon: '<svg viewBox="0 0 48 48"><path d="M10 36c10-2 16-10 20-24 5 8 7 15 6 24-8-2-16 0-26 0Z"/></svg>' },
  ],
  tech: [
    {
      kicker: "1ª etapa",
      title: "Central de custos auditável",
      text: "A central de custos concilia os valores de contrato (ex.: taxa de certificado digital) com a produção via API. Só entra custo documentado em contrato ou aditivo. A controladoria aponta divergência e aciona o jurídico.",
      items: [
        "Contrato com os fornecedores F3, F4, F5, F6 e F7",
        "Controladoria e jurídico na trava da negociação",
        "Central de custos com informações auditáveis",
        "Conciliador por API: contrato × custos no fechamento mensal",
      ],
    },
    {
      kicker: "2ª etapa",
      title: "Conta MT, CNPJs e subcontas",
      text: "Na conta MT Pagamentos, cada produto se vincula a um CNPJ e a subcontas. A receita do fornecedor entra, é apurada e o repasse segue para as operações de forma clara e conciliada.",
      items: [
        "Uma conta concentradora + CNPJ e subcontas por produto",
        "Receita do fornecedor → apuração → repasse às operações",
        "Pulse: cobrança de tarifa (10% na central de tarifa)",
        "Smart: tarifa na central de cobrança",
      ],
    },
    {
      kicker: "Confra HUB",
      title: "Subcontas por unidade",
      text: "Cada linha do HUB tem subconta para conciliar o recebido com a comissão paga à rede licenciada.",
      items: [
        "Confra Cred",
        "Débitos veiculares",
        "Parcelamento de tributos",
        "Adiantamento de FGTS Aniversário",
        "Certificado digital",
        "Confra Energia",
      ],
    },
    {
      kicker: "Confra SYSTEM",
      title: "CNPJ próprio e módulos",
      text: "O Confra SYSTEM opera com CNPJ próprio e contrato por adesão ao Confra SYSTEM. Cada produto tem subconta, com espaço para novos contratos.",
      items: [
        "Confra PDV",
        "Confra Cobrança",
        "Confra GerenPix",
      ],
    },
    {
      kicker: "Confra TEF",
      title: "Retenção 0,15% e conciliação",
      text: "A retenção de 0,15% por transação TEF vem embutida nos acertos de Fornecedores. O valor precisa ir para a conta do Confra TEF, senão o licenciado recebe em duplicidade.",
      items: [
        "Retenção de 0,15% por transação TEF",
        "Origem: Acertos Fornecedores",
        "Repasse obrigatório para a conta Confra TEF",
        "Conciliação para evitar pagamento duplicado",
      ],
    },
    {
      kicker: "Confra PIX",
      title: "Confra PIX no arranjo",
      text: "Toda transação Confra PIX é capturada em tempo real e encaminhada à Central de apuração, comissionamento e conciliação, que transforma cada transação em receita, com controle, conciliação, apuração e comissionamento, e liquida na conta concentradora do MT.",
      items: [
        "QR Code, chave PIX, API e PDV",
        "Liquidação na conta concentradora",
        "Rastreio por cliente, canal e estabelecimento",
        "Receita: tarifa sobre envio e recebimento",
      ],
    },
    {
      kicker: "Confrapag",
      title: "Shopping, universidade e eventos",
      text: "O Shopping usa percentual sobre vendas da base. Universidade e Eventos gerem o próprio catálogo, com preço e custo na subconta, sem split 70/30.",
      items: [
        "Confra Shopping: marketplace com retenção percentual nas vendas entre clientes da base",
        "Universidade Confrapag: catálogo próprio, sem split 70/30",
        "Confra Eventos: catálogo próprio de Convenção, Regionais e Paulo Por Aí, sem split 70/30",
      ],
    },
    {
      kicker: "Repasses",
      title: "Rede × Operação",
      text: "O lucro apurado (venda − compra − custo) é distribuído automaticamente após a conciliação na conta MT, exceto na Universidade e no Confra Eventos.",
      items: [
        "70% rede licenciada",
        "30% operação",
        "Universidade e Eventos: lucro 100% na subconta, sem split",
      ],
    },
  ],
};

const stage = document.querySelector(".eco-stage");
const productCards = document.querySelectorAll(".product-card[data-product]");
const toggle = document.querySelector(".nav-toggle");
const inspector = document.querySelector("#inspector");
const inspectorContent = document.querySelector("#inspector-content");
const simProduct = document.querySelector("#sim-product");
const simAmount = document.querySelector("#sim-amount");
const simRevenue = document.querySelector("#sim-revenue");
const simCommission = document.querySelector("#sim-commission");
const simOperation = document.querySelector("#sim-operation");
const simMonth = document.querySelector("#sim-month");
const simYear = document.querySelector("#sim-year");
const simTrack = document.querySelector("#sim-track");
const simReceipt = document.querySelector("#sim-receipt");
let pipelineTimer = 0;

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderProducts() {
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelector("#product-panels");
  if (!tabs || !panels) return;

  tabs.innerHTML = Object.entries(ECOSYSTEM.products)
    .map(
      ([id, product], index) =>
        `<button class="tab${index === 0 ? " is-active" : ""}" role="tab" aria-selected="${index === 0}" data-tab="${id}">${product.name}</button>`
    )
    .join("");

  panels.innerHTML = Object.entries(ECOSYSTEM.products)
    .map(
      ([id, product], index) => `
        <article class="tab-panel${index === 0 ? " is-active" : ""}" data-panel="${id}" ${index === 0 ? "" : "hidden"}>
          <div class="panel-grid">
            <div>
              <p class="tag ${id}">${product.tag}</p>
              <h3>${product.title}</h3>
              <p>${product.detail}</p>
              ${product.checks.length ? `<ul class="checks">${product.checks.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
            </div>
            <ol class="mini-flow">
              ${product.flow.map((item, i) => `<li><span>0${i + 1}</span> ${item}</li>`).join("")}
            </ol>
          </div>
        </article>`
    )
    .join("");

  tabs.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => openTab(tab.dataset.tab));
  });
}

function renderStaticBlocks() {
  const pipeline = document.querySelector("#pipeline");
  const rules = document.querySelector("#rules");
  const layers = document.querySelector("#layers");
  const benefits = document.querySelector("#benefits");
  const revenueBody = document.querySelector("#revenue-body");

  if (pipeline) {
    pipeline.innerHTML = ECOSYSTEM.pipeline
      .map(
        (step) => `
        <li class="pipe-step" data-step="${step.n}">
          <div class="pipe-icon">${step.icon}</div>
          <span class="n">${step.n}</span>
          <h3>${step.name}</h3>
          <p>${step.text}</p>
        </li>`
      )
      .join("");
  }

  if (rules) {
    rules.innerHTML = ECOSYSTEM.rules
      .map(
        (rule) => `
        <article>
          <h3>${rule.title}</h3>
          <p>${rule.text}</p>
          <ul>${rule.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>`
      )
      .join("");
  }

  if (layers) {
    layers.innerHTML = ECOSYSTEM.layers
      .map(
        (layer) => `
        <article>
          <span>${layer.n}</span>
          <h3>${layer.title}</h3>
          <p>${layer.text}</p>
        </article>`
      )
      .join("");
  }

  if (benefits) {
    benefits.innerHTML = ECOSYSTEM.benefits
      .map(
        (item) => `
        <article>
          <div class="b-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>`
      )
      .join("");
  }

  const techGrid = document.querySelector("#tech-grid");
  if (techGrid) {
    techGrid.innerHTML = ECOSYSTEM.tech
      .map(
        (block) => `
        <article class="tech-card">
          <span>${block.kicker}</span>
          <h3>${block.title}</h3>
          <p>${block.text}</p>
          <ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>`
      )
      .join("");
  }

  if (revenueBody) {
    const productRows = Object.entries(ECOSYSTEM.products).map(
      ([id, product]) =>
        `<tr><td><span class="pill ${id}">${product.name}</span></td><td>${product.revenue}</td></tr>`
    );
    const extraRows = (ECOSYSTEM.extraRevenue || []).map(
      (item) =>
        `<tr><td><span class="pill ${item.id}">${item.name}</span></td><td>${item.revenue}</td></tr>`
    );
    revenueBody.innerHTML = [...productRows, ...extraRows].join("");
  }

  if (simTrack) {
    simTrack.innerHTML = ECOSYSTEM.pipeline
      .map(
        (step) => `<li data-step="${step.n}">
          <span class="sim-step-n">${step.n}</span>
          <strong>${step.name}</strong>
          <p>${step.text}</p>
        </li>`
      )
      .join("");
  }
}

function productEntries(productId) {
  if (productId === "all") return Object.entries(ECOSYSTEM.products);
  const product = ECOSYSTEM.products[productId];
  return product ? [[productId, product]] : [];
}

function field(id) {
  return document.querySelector(`#${id}`);
}

function isEngineProduct(id) {
  return Boolean(window.ConfraEngine && ConfraEngine.ENGINE_PRODUCTS.includes(id));
}

function serviceOptions(services, selected) {
  if (!services) return "";
  return Object.entries(services)
    .map(([id, service]) => `<option value="${id}"${id === selected ? " selected" : ""}>${service.name}</option>`)
    .join("");
}

function onEngineInput() {
  syncTefBands();
  const settlement = getEngineSettlement();
  if (settlement && simRevenue && simCommission) {
    simRevenue.value = settlement.revenue.toFixed(2);
    simCommission.value = settlement.split.operation30.toFixed(2);
    if (simAmount) simAmount.value = settlement.amount.toFixed(2);
  }
  renderLiveReceipt();
}

function applyCatalogDefaults(kind) {
  const services = kind === "system" ? window.ConfraEngine?.SYSTEM_SERVICES : window.ConfraEngine?.HUB_SERVICES;
  const id = field(`sim-${kind}-service`)?.value;
  const service = services?.[id];
  if (!service) return;
  if (field(`sim-${kind}-sale`)) field(`sim-${kind}-sale`).value = service.salePrice.toFixed(2);
  if (field(`sim-${kind}-buy`)) field(`sim-${kind}-buy`).value = service.purchasePrice.toFixed(2);
  if (field(`sim-${kind}-cost`)) field(`sim-${kind}-cost`).value = service.unitCost.toFixed(2);
  onEngineInput();
}

function supplierSelectHtml(selected) {
  const suppliers = window.ConfraEngine?.PIX_SUPPLIERS || ["F3", "F4", "F5", "F6", "F7"];
  const current = selected || "F3";
  const options = [`<option value="ALL"${current === "ALL" ? " selected" : ""}>Todos os fornecedores</option>`]
    .concat(suppliers.map((id) => `<option value="${id}"${id === current ? " selected" : ""}>${id}</option>`));
  return `<label>Fornecedor
    <select id="sim-supplier">${options.join("")}</select>
  </label>`;
}

function selectedSupplier() {
  return field("sim-supplier")?.value || field("sim-pix-supplier")?.value || "F3";
}

const TEF_TPV_DEFAULT = { F3: 100000, F4: 20000, F5: 0, F6: 30000, F7: 0 };

function tefBandInputs(contract) {
  const bands = window.ConfraEngine?.TEF_BANDS || window.ConfraEngine?.PIX_SUPPLIERS || ["F3", "F4", "F5", "F6", "F7"];
  const tpv = bands
    .map(
      (id) =>
        `<label data-tef-band="${id}">TPV ${id} (R$)<input id="sim-tpv-${id.toLowerCase()}" type="number" min="0" step="0.01" value="${TEF_TPV_DEFAULT[id] ?? 0}" /></label>`
    )
    .join("");
  const take = bands
    .map((id) => {
      const rate = contract[`take${id}`] ?? 0.015;
      return `<label data-tef-band="${id}">Take ${id} (%)<input id="sim-take-${id.toLowerCase()}" type="number" min="0" step="0.01" value="${(rate * 100).toFixed(2)}" /></label>`;
    })
    .join("");
  return `${tpv}${take}`;
}

function syncTefBands() {
  const supplier = selectedSupplier();
  document.querySelectorAll("[data-tef-band]").forEach((el) => {
    const band = el.getAttribute("data-tef-band");
    el.classList.toggle("is-hidden", supplier !== "ALL" && supplier !== band);
  });
}

function tefBandValue(band, kind) {
  const supplier = selectedSupplier();
  if (supplier !== "ALL" && supplier !== band) return 0;
  const id = `sim-${kind}-${band.toLowerCase()}`;
  const raw = Number(field(id)?.value) || 0;
  return kind === "take" ? raw / 100 : raw;
}

function universidadeCourseOptions(selected) {
  const catalog = window.ConfraEngine?.UNIVERSIDADE_COURSES || {};
  return Object.entries(catalog)
    .map(([id, course]) => `<option value="${id}"${id === selected ? " selected" : ""}>${course.name}</option>`)
    .join("");
}

function universidadeRowHtml(courseId, qty) {
  const catalog = window.ConfraEngine?.UNIVERSIDADE_COURSES || {};
  const ids = Object.keys(catalog);
  const id = catalog[courseId] ? courseId : ids[0] || "onboarding";
  const course = catalog[id] || { name: "Curso", audience: "cliente", salePrice: 0, purchasePrice: 0, unitCost: 0 };
  return `<article class="sim-course-row">
    <label>Curso<select class="sim-uni-course">${universidadeCourseOptions(id)}</select></label>
    <label>Público<select class="sim-uni-audience">
      <option value="cliente"${course.audience === "cliente" ? " selected" : ""}>Rede de Licenciados</option>
      <option value="colaborador"${course.audience === "colaborador" ? " selected" : ""}>Colaborador</option>
    </select></label>
    <label>Matrículas<input class="sim-uni-qty" type="number" min="0" step="1" value="${qty}" /></label>
    <label>Venda (R$)<input class="sim-uni-sale" type="number" min="0" step="0.01" value="${Number(course.salePrice).toFixed(2)}" /></label>
    <label>Compra (R$)<input class="sim-uni-buy" type="number" min="0" step="0.01" value="${Number(course.purchasePrice).toFixed(2)}" /></label>
    <label>Custo (R$)<input class="sim-uni-cost" type="number" min="0" step="0.01" value="${Number(course.unitCost).toFixed(2)}" /></label>
    <button type="button" class="sim-uni-remove">Remover</button>
  </article>`;
}

function applyUniversidadeCourse(row) {
  const catalog = window.ConfraEngine?.UNIVERSIDADE_COURSES || {};
  const course = catalog[row.querySelector(".sim-uni-course")?.value];
  if (!course) return;
  const audience = row.querySelector(".sim-uni-audience");
  const sale = row.querySelector(".sim-uni-sale");
  const buy = row.querySelector(".sim-uni-buy");
  const cost = row.querySelector(".sim-uni-cost");
  if (audience) audience.value = course.audience;
  if (sale) sale.value = Number(course.salePrice).toFixed(2);
  if (buy) buy.value = Number(course.purchasePrice).toFixed(2);
  if (cost) cost.value = Number(course.unitCost).toFixed(2);
  onEngineInput();
}

function bindUniversidadeRow(row) {
  row.querySelector(".sim-uni-course")?.addEventListener("change", () => applyUniversidadeCourse(row));
  row.querySelector(".sim-uni-remove")?.addEventListener("click", () => {
    const list = row.parentElement;
    if (list?.querySelectorAll(".sim-course-row").length <= 1) return;
    row.remove();
    onEngineInput();
  });
  row.querySelectorAll("input, select").forEach((el) => {
    el.addEventListener("input", onEngineInput);
    el.addEventListener("change", onEngineInput);
  });
}

function nextUniversidadeCourseId(list) {
  const catalog = window.ConfraEngine?.UNIVERSIDADE_COURSES || {};
  const ids = Object.keys(catalog);
  const used = [...list.querySelectorAll(".sim-uni-course")].map((select) => select.value);
  return ids.find((id) => !used.includes(id)) || "hub";
}

function collectUniversidadeCourses() {
  const catalog = window.ConfraEngine?.UNIVERSIDADE_COURSES || {};
  return [...document.querySelectorAll("#sim-uni-courses .sim-course-row")].map((row) => {
    const courseId = row.querySelector(".sim-uni-course")?.value || "onboarding";
    return {
      courseId,
      name: catalog[courseId]?.name,
      audience: row.querySelector(".sim-uni-audience")?.value || "cliente",
      quantity: Number(row.querySelector(".sim-uni-qty")?.value) || 0,
      salePrice: Number(row.querySelector(".sim-uni-sale")?.value) || 0,
      purchasePrice: Number(row.querySelector(".sim-uni-buy")?.value) || 0,
      unitCost: Number(row.querySelector(".sim-uni-cost")?.value) || 0,
    };
  });
}

function eventosOptions(selected) {
  const catalog = window.ConfraEngine?.EVENTOS_CATALOG || {};
  return Object.entries(catalog)
    .map(([id, event]) => `<option value="${id}"${id === selected ? " selected" : ""}>${event.name}</option>`)
    .join("");
}

function eventosRowHtml(eventId, qty) {
  const catalog = window.ConfraEngine?.EVENTOS_CATALOG || {};
  const ids = Object.keys(catalog);
  const id = catalog[eventId] ? eventId : ids[0] || "nacional";
  const event = catalog[id] || { name: "Evento", salePrice: 0, purchasePrice: 0, unitCost: 0 };
  return `<article class="sim-course-row evt">
    <label>Evento<select class="sim-evt-event">${eventosOptions(id)}</select></label>
    <label>Ingressos<input class="sim-evt-qty" type="number" min="0" step="1" value="${qty}" /></label>
    <label>Venda (R$)<input class="sim-evt-sale" type="number" min="0" step="0.01" value="${Number(event.salePrice).toFixed(2)}" /></label>
    <label>Compra (R$)<input class="sim-evt-buy" type="number" min="0" step="0.01" value="${Number(event.purchasePrice).toFixed(2)}" /></label>
    <label>Custo (R$)<input class="sim-evt-cost" type="number" min="0" step="0.01" value="${Number(event.unitCost).toFixed(2)}" /></label>
    <button type="button" class="sim-uni-remove">Remover</button>
  </article>`;
}

function applyEventosEvent(row) {
  const catalog = window.ConfraEngine?.EVENTOS_CATALOG || {};
  const event = catalog[row.querySelector(".sim-evt-event")?.value];
  if (!event) return;
  const sale = row.querySelector(".sim-evt-sale");
  const buy = row.querySelector(".sim-evt-buy");
  const cost = row.querySelector(".sim-evt-cost");
  if (sale) sale.value = Number(event.salePrice).toFixed(2);
  if (buy) buy.value = Number(event.purchasePrice).toFixed(2);
  if (cost) cost.value = Number(event.unitCost).toFixed(2);
  onEngineInput();
}

function bindEventosRow(row) {
  row.querySelector(".sim-evt-event")?.addEventListener("change", () => applyEventosEvent(row));
  row.querySelector(".sim-uni-remove")?.addEventListener("click", () => {
    const list = row.parentElement;
    if (list?.querySelectorAll(".sim-course-row").length <= 1) return;
    row.remove();
    onEngineInput();
  });
  row.querySelectorAll("input, select").forEach((el) => {
    el.addEventListener("input", onEngineInput);
    el.addEventListener("change", onEngineInput);
  });
}

function nextEventosId(list) {
  const catalog = window.ConfraEngine?.EVENTOS_CATALOG || {};
  const ids = Object.keys(catalog);
  const used = [...list.querySelectorAll(".sim-evt-event")].map((select) => select.value);
  return ids.find((id) => !used.includes(id)) || "livre";
}

function collectEventosEvents() {
  const catalog = window.ConfraEngine?.EVENTOS_CATALOG || {};
  return [...document.querySelectorAll("#sim-evt-events .sim-course-row")].map((row) => {
    const eventId = row.querySelector(".sim-evt-event")?.value || "nacional";
    return {
      eventId,
      name: catalog[eventId]?.name,
      quantity: Number(row.querySelector(".sim-evt-qty")?.value) || 0,
      salePrice: Number(row.querySelector(".sim-evt-sale")?.value) || 0,
      purchasePrice: Number(row.querySelector(".sim-evt-buy")?.value) || 0,
      unitCost: Number(row.querySelector(".sim-evt-cost")?.value) || 0,
    };
  });
}

function renderEngineFields() {
  const form = document.querySelector("#sim-form");
  const mount = document.querySelector("#sim-engine-fields");
  const productId = simProduct?.value || "pix";
  const engine = isEngineProduct(productId);
  form?.classList.toggle("is-engine", engine);
  if (!mount) return;
  if (!engine) {
    mount.innerHTML = "";
    return;
  }

  if (productId === "pix") {
    const contract = ConfraEngine.PIX_CONTRACT;
    mount.innerHTML = `
      ${supplierSelectHtml()}
      <label>Quantidade de PIX<input id="sim-pix-qty" type="number" min="0" step="1" value="1000" /></label>
      <label>Ticket médio (R$)<input id="sim-pix-ticket" type="number" min="0" step="0.01" value="50" /></label>
      <label>Venda às operações (R$)<input id="sim-pix-sell" type="number" min="0" step="0.01" value="${contract.sellPrice.toFixed(2)}" /></label>
      <label>Custo do fornecedor (R$)<input id="sim-pix-buy" type="number" min="0" step="0.01" value="${contract.buyPrice.toFixed(2)}" /></label>
      <label>Pulse (%)<input id="sim-pix-pulse" type="number" min="0" step="0.01" value="${(contract.pulseRate * 100).toFixed(0)}" /></label>
      <label class="sim-check"><input id="sim-documented" type="checkbox" checked /> Custo em contrato/aditivo</label>
    `;
  } else if (productId === "tef") {
    const contract = ConfraEngine.TEF_CONTRACT;
    mount.innerHTML = `
      ${supplierSelectHtml("ALL")}
      ${tefBandInputs(contract)}
      <label>Retenção TEF (%)<input id="sim-tef-ret" type="number" min="0" step="0.01" value="${(contract.retentionRate * 100).toFixed(2)}" /></label>
      <label>Custo documentado (R$)<input id="sim-tef-cost" type="number" min="0" step="0.01" value="0" /></label>
      <label class="sim-check"><input id="sim-documented" type="checkbox" checked /> Custo em contrato/aditivo</label>
    `;
  } else if (productId === "hub" || productId === "system") {
    const catalog = productId === "system" ? ConfraEngine.SYSTEM_SERVICES : ConfraEngine.HUB_SERVICES;
    const first = Object.keys(catalog)[0];
    const service = catalog[first];
    const label = productId === "system" ? "Serviço do SYSTEM" : "Serviço do HUB";
    mount.innerHTML = `
      ${supplierSelectHtml()}
      <label>${label}<select id="sim-${productId}-service">${serviceOptions(catalog, first)}</select></label>
      <label>Quantidade<input id="sim-${productId}-qty" type="number" min="0" step="1" value="10" /></label>
      <label>Preço de venda (R$)<input id="sim-${productId}-sale" type="number" min="0" step="0.01" value="${service.salePrice.toFixed(2)}" /></label>
      <label>Preço de compra (R$)<input id="sim-${productId}-buy" type="number" min="0" step="0.01" value="${service.purchasePrice.toFixed(2)}" /></label>
      <label>Custo (R$)<input id="sim-${productId}-cost" type="number" min="0" step="0.01" value="${service.unitCost.toFixed(2)}" /></label>
      <label class="sim-check"><input id="sim-documented" type="checkbox" checked /> Custo em contrato/aditivo</label>
    `;
    field(`sim-${productId}-service`)?.addEventListener("change", () => applyCatalogDefaults(productId));
  } else if (productId === "universidade") {
    mount.innerHTML = `
      <div class="sim-course-board">
        <div id="sim-uni-courses">
          ${universidadeRowHtml("onboarding", 12)}
          ${universidadeRowHtml("inicial", 8)}
        </div>
        <button type="button" class="sim-course-add" id="sim-uni-add">Adicionar curso vendido</button>
      </div>
      <label class="sim-check"><input id="sim-documented" type="checkbox" checked /> Custo em contrato/aditivo</label>
    `;
    mount.querySelectorAll(".sim-course-row").forEach((row) => bindUniversidadeRow(row));
    mount.querySelector("#sim-uni-add")?.addEventListener("click", () => {
      const list = mount.querySelector("#sim-uni-courses");
      if (!list) return;
      list.insertAdjacentHTML("beforeend", universidadeRowHtml(nextUniversidadeCourseId(list), 6));
      bindUniversidadeRow(list.lastElementChild);
      onEngineInput();
    });
  } else if (productId === "eventos") {
    mount.innerHTML = `
      <div class="sim-course-board">
        <div id="sim-evt-events">
          ${eventosRowHtml("nacional", 80)}
          ${eventosRowHtml("regional", 40)}
        </div>
        <button type="button" class="sim-course-add" id="sim-evt-add">Adicionar evento vendido</button>
      </div>
      <label class="sim-check"><input id="sim-documented" type="checkbox" checked /> Custo em contrato/aditivo</label>
    `;
    mount.querySelectorAll(".sim-course-row").forEach((row) => bindEventosRow(row));
    mount.querySelector("#sim-evt-add")?.addEventListener("click", () => {
      const list = mount.querySelector("#sim-evt-events");
      if (!list) return;
      list.insertAdjacentHTML("beforeend", eventosRowHtml(nextEventosId(list), 25));
      bindEventosRow(list.lastElementChild);
      onEngineInput();
    });
  } else if (productId === "shopping") {
    const meta = ConfraEngine.PERCENT_PRODUCTS[productId];
    mount.innerHTML = `
      <label>Vendas (R$)<input id="sim-pct-sales" type="number" min="0" step="0.01" value="10000" /></label>
      <label>Percentual sobre as vendas (%)<input id="sim-pct-rate" type="number" min="0" step="0.01" value="${(meta.rate * 100).toFixed(2)}" /></label>
    `;
  }

  mount.querySelectorAll("input, select").forEach((el) => {
    el.addEventListener("input", onEngineInput);
    el.addEventListener("change", onEngineInput);
  });
  syncTefBands();
}

function selectedOperation() {
  const value = simOperation?.value;
  const text = simOperation?.selectedOptions[0]?.text;
  if (!value || value === "ALL" || value === "all") {
    return window.ConfraEngine?.ALL_OPERATIONS_LABEL || "Todas as operações";
  }
  return text || "Confrapag";
}

function atOperationPhrase(operation) {
  if (window.ConfraEngine?.atOperation) return ConfraEngine.atOperation(operation);
  return operation === "Todas as operações" || operation === "ALL"
    ? "em todas as operações (consolidado)"
    : `na ${operation}`;
}

function collectEngineInput() {
  const productId = simProduct?.value;
  const operation = selectedOperation();
  const year = Number(simYear?.value) || 2026;
  const month = simMonth?.value || "Set";
  const costDocumented = field("sim-documented")?.checked !== false;
  if (productId === "pix") {
    return {
      productId: "pix",
      operation,
      year,
      month,
      costDocumented,
      supplier: selectedSupplier(),
      quantity: Number(field("sim-pix-qty")?.value) || 0,
      ticket: Number(field("sim-pix-ticket")?.value) || 0,
      sellPrice: Number(field("sim-pix-sell")?.value) || 0,
      buyPrice: Number(field("sim-pix-buy")?.value) || 0,
      pulseRate: (Number(field("sim-pix-pulse")?.value) || 0) / 100,
    };
  }
  if (productId === "tef") {
    return {
      productId: "tef",
      operation,
      year,
      month,
      costDocumented,
      supplier: selectedSupplier(),
      tpvF3: tefBandValue("F3", "tpv"),
      tpvF4: tefBandValue("F4", "tpv"),
      tpvF5: tefBandValue("F5", "tpv"),
      tpvF6: tefBandValue("F6", "tpv"),
      tpvF7: tefBandValue("F7", "tpv"),
      takeF3: (Number(field("sim-take-f3")?.value) || 0) / 100,
      takeF4: (Number(field("sim-take-f4")?.value) || 0) / 100,
      takeF5: (Number(field("sim-take-f5")?.value) || 0) / 100,
      takeF6: (Number(field("sim-take-f6")?.value) || 0) / 100,
      takeF7: (Number(field("sim-take-f7")?.value) || 0) / 100,
      retentionRate: (Number(field("sim-tef-ret")?.value) || 0) / 100,
      documentedCost: Number(field("sim-tef-cost")?.value) || 0,
    };
  }
  if (productId === "hub" || productId === "system") {
    return {
      productId,
      operation,
      year,
      month,
      costDocumented,
      supplier: selectedSupplier(),
      serviceId: field(`sim-${productId}-service`)?.value || (productId === "system" ? "pdv" : "cred"),
      quantity: Number(field(`sim-${productId}-qty`)?.value) || 0,
      salePrice: Number(field(`sim-${productId}-sale`)?.value) || 0,
      purchasePrice: Number(field(`sim-${productId}-buy`)?.value) || 0,
      unitCost: Number(field(`sim-${productId}-cost`)?.value) || 0,
    };
  }
  if (productId === "universidade") {
    return {
      productId: "universidade",
      operation,
      year,
      month,
      costDocumented,
      courses: collectUniversidadeCourses(),
    };
  }
  if (productId === "eventos") {
    return {
      productId: "eventos",
      operation,
      year,
      month,
      costDocumented,
      events: collectEventosEvents(),
    };
  }
  if (productId === "shopping") {
    return {
      productId,
      operation,
      year,
      month,
      costDocumented: true,
      sales: Number(field("sim-pct-sales")?.value) || 0,
      rate: (Number(field("sim-pct-rate")?.value) || 0) / 100,
    };
  }
  return null;
}

function getEngineSettlement() {
  const input = collectEngineInput();
  if (!input || !window.ConfraEngine) return null;
  try {
    return ConfraEngine.simulateProduct(input);
  } catch (_err) {
    return null;
  }
}

function getSimValues() {
  const settlement = getEngineSettlement();
  if (settlement) {
    return {
      productId: settlement.productId,
      product: ECOSYSTEM.products[settlement.productId],
      amount: settlement.amount,
      revenue: settlement.revenue,
      commission: settlement.split.operation30,
      operation: settlement.operation,
      net: settlement.split.network70,
      breakdown: [
        {
          id: settlement.productId,
          name: settlement.productName,
          amount: settlement.amount,
          revenue: settlement.revenue,
          commission: settlement.split.operation30,
          net: settlement.split.network70,
        },
      ],
      settlement,
    };
  }

  const productId = simProduct?.value || "pix";
  const entries = productEntries(productId);
  const product =
    productId === "all"
      ? { name: "Todos os produtos" }
      : ECOSYSTEM.products[productId];
  const amount = Number(simAmount?.value) || 0;
  const revenue = Number(simRevenue?.value) || 0;
  const commission = Number(simCommission?.value) || 0;
  const operation = selectedOperation();
  const net = Math.max(revenue - commission, 0);
  const breakdown = entries.map(([id, item]) => {
    const itemRevenue = amount * item.feeRate;
    const itemCommission = itemRevenue * item.partnerShare;
    return {
      id,
      name: item.name,
      amount,
      revenue: itemRevenue,
      commission: itemCommission,
      net: Math.max(itemRevenue - itemCommission, 0),
    };
  });
  return { productId, product, amount, revenue, commission, operation, net, breakdown, settlement: null };
}

function applySuggestedRates() {
  const settlement = getEngineSettlement();
  if (settlement && simRevenue && simCommission) {
    simRevenue.value = settlement.revenue.toFixed(2);
    simCommission.value = settlement.split.operation30.toFixed(2);
    if (simAmount) simAmount.value = settlement.amount.toFixed(2);
    return;
  }
  const amount = Number(simAmount?.value) || 0;
  const entries = productEntries(simProduct?.value || "pix");
  if (!entries.length || !simRevenue || !simCommission) return;
  const totals = entries.reduce(
    (acc, [, item]) => {
      const revenue = amount * item.feeRate;
      acc.revenue += revenue;
      acc.commission += revenue * item.partnerShare;
      return acc;
    },
    { revenue: 0, commission: 0 }
  );
  simRevenue.value = totals.revenue.toFixed(2);
  simCommission.value = totals.commission.toFixed(2);
}

const PRODUCT_COLORS = {
  pix: "#00a651",
  tef: "#e87722",
  system: "#1e4d8c",
  hub: "#7a2d91",
  wiki: "#00a651",
  shopping: "#7a2d91",
  universidade: "#1e4d8c",
  eventos: "#e87722",
};

function pct(part, total) {
  if (!total) return "0,0%";
  return `${((part / total) * 100).toFixed(1).replace(".", ",")}%`;
}

function donutSvg(slices) {
  const total = slices.reduce((sum, slice) => sum + slice.value, 0) || 1;
  const radius = 52;
  const circ = 2 * Math.PI * radius;
  let offset = 0;
  const rings = slices
    .map((slice) => {
      const frac = slice.value / total;
      const dash = Math.max(frac * circ, 0);
      const circle = `<circle cx="70" cy="70" r="${radius}" fill="none" stroke="${slice.color}" stroke-width="16" stroke-dasharray="${dash} ${circ - dash}" stroke-dashoffset="${-offset}" transform="rotate(-90 70 70)"></circle>`;
      offset += dash;
      return circle;
    })
    .join("");
  return `<svg class="dash-donut" viewBox="0 0 140 140" aria-hidden="true">
    <circle cx="70" cy="70" r="52" fill="none" stroke="#e8eef4" stroke-width="16"></circle>
    ${rings}
    <text x="70" y="66" text-anchor="middle" font-size="11" fill="#5b6b7c">Líquido</text>
    <text x="70" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#0b1f4d">${pct(slices.length > 1 ? slices[1]?.value || 0 : slices[0]?.value || 0, total)}</text>
  </svg>`;
}

function renderEngineTrack(settlement) {
  if (!simTrack || !settlement?.pipeline) return;
  const signature = settlement.pipeline.map((step) => step.text).join("|");
  if (simTrack.dataset.signature === signature) return;
  simTrack.dataset.signature = signature;
  simTrack.innerHTML = settlement.pipeline
    .map(
      (step) => `<li data-step="${step.n}">
        <span class="sim-step-n">${step.n}</span>
        <strong>${step.name}</strong>
        <p>${step.text}</p>
      </li>`
    )
    .join("");
}

function renderEngineReceipt(status, values) {
  const { product, operation, amount, revenue, settlement } = values;
  const maxLine = Math.max(...settlement.lines.map((line) => Math.abs(line.amount)), 1);
  const supplierText =
    settlement.supplier && window.ConfraEngine?.PIX_SUPPLIER_LABELS
      ? ConfraEngine.PIX_SUPPLIER_LABELS[settlement.supplier] || settlement.supplier
      : settlement.supplier;
  const extra = [settlement.serviceName, supplierText].filter(Boolean).join(" · ") || settlement.month;
  const noSplit = settlement.productId === "universidade" || settlement.productId === "eventos";
  const isEventos = settlement.productId === "eventos";
  renderEngineTrack(settlement);
  const kpis = noSplit
    ? `<article class="dash-kpi tx"><span>${isEventos ? "Receita dos eventos" : "Receita dos cursos"}</span><strong>${money(amount)}</strong><small>${isEventos ? "Ingressos do período" : "Matrículas do período"}</small></article>
      <article class="dash-kpi rev"><span>Venda apurada</span><strong>${money(revenue)}</strong><small>${isEventos ? "Catálogo do Confra Eventos" : "Catálogo da Universidade"}</small></article>
      <article class="dash-kpi cost"><span>Custo documentado</span><strong>${money(settlement.cost)}</strong><small>${isEventos ? "Produção, estrutura e operação" : "Conteúdo, plataforma e operação"}</small></article>
      <article class="dash-kpi profit"><span>${isEventos ? "Lucro do Confra Eventos" : "Lucro da Universidade"}</span><strong>${money(settlement.profit)}</strong><small>100% na subconta, sem split 70/30</small></article>`
    : `<article class="dash-kpi tx"><span>Volume / TPV</span><strong>${money(amount)}</strong><small>Base da apuração</small></article>
      <article class="dash-kpi rev"><span>Receita (venda)</span><strong>${money(revenue)}</strong><small>Take ${pct(settlement.dashboardRow.comissao, settlement.dashboardRow.tpv)}</small></article>
      <article class="dash-kpi cost"><span>Custo documentado</span><strong>${money(settlement.cost)}</strong><small>Pulse ${money(settlement.pulse)} · retenção ${money(settlement.retention)}</small></article>
      <article class="dash-kpi profit"><span>Lucro</span><strong>${money(settlement.profit)}</strong><small>Venda − compra − custo</small></article>
      <article class="dash-kpi com"><span>Repasse operação 30%</span><strong>${money(values.commission)}</strong><small>${pct(values.commission, settlement.profit)} do lucro</small></article>
      <article class="dash-kpi net"><span>Repasse rede 70%</span><strong>${money(values.net)}</strong><small>${pct(values.net, settlement.profit)} do lucro</small></article>`;
  const donut = noSplit
    ? `<h4>Destino do lucro</h4>
        <div class="dash-donut-wrap">
          ${donutSvg([{ value: settlement.profit, color: "#1e4d8c" }])}
          <ul class="dash-donut-list">
            <li><span><b style="background:var(--system)"></b>${isEventos ? "Eventos" : "Universidade"} 100%</span><span>${money(settlement.profit)}</span></li>
            <li><span><b style="background:var(--tef)"></b>Custo</span><span>${money(settlement.cost)}</span></li>
            <li><span><b style="background:var(--pix)"></b>Receita</span><span>${money(settlement.revenue)}</span></li>
          </ul>
        </div>`
    : `<h4>Split do lucro</h4>
        <div class="dash-donut-wrap">
          ${donutSvg([
            { value: values.commission, color: "#e87722" },
            { value: values.net, color: "#1e4d8c" },
          ])}
          <ul class="dash-donut-list">
            <li><span><b style="background:var(--tef)"></b>Operação 30%</span><span>${money(values.commission)}</span></li>
            <li><span><b style="background:var(--system)"></b>Rede 70%</span><span>${money(values.net)}</span></li>
            <li><span><b style="background:var(--pix)"></b>Lucro</span><span>${money(settlement.profit)}</span></li>
          </ul>
        </div>`;
  simReceipt.innerHTML = `
    <div class="dash-head">
      <div>
        <h3>${status || "Apuração pelo motor de regras"}</h3>
        <p>Subconta ${settlement.subaccount}. Destino: conta concentradora no MT Pagamentos.</p>
      </div>
      <div class="dash-badges">
        <span class="dash-badge">${product.name}</span>
        <span class="dash-badge">${operation}</span>
        <span class="dash-badge">${settlement.month}/${settlement.year}${extra && extra !== settlement.month ? ` · ${extra}` : ""}</span>
      </div>
    </div>
    <div class="dash-kpis engine${noSplit ? " uni" : ""}">
      ${kpis}
    </div>
    <div class="dash-charts">
      <article class="dash-card">
        <h4>Razão da apuração</h4>
        <div class="dash-bar-chart">
          ${settlement.lines
            .map((line) => {
              const width = (Math.abs(line.amount) / maxLine) * 100;
              const color = line.role === "cost" || line.role === "fee" ? "var(--tef)" : line.role === "split" ? "var(--system)" : "var(--pix)";
              return `<div class="dash-bar-row">
                <strong>${line.label}</strong>
                <div>
                  <div class="dash-bar-track" title="${money(line.amount)}"><span style="width:${width}%;background:${color}"></span></div>
                </div>
              </div>`;
            })
            .join("")}
        </div>
      </article>
      <article class="dash-card">
        ${donut}
      </article>
    </div>
    <table class="sim-breakdown">
      <thead>
        <tr><th>Conta</th><th>Descrição</th><th>Valor</th></tr>
      </thead>
      <tbody>
        ${settlement.lines
          .map((line) => `<tr><td>${line.code}</td><td>${line.label}</td><td>${money(line.amount)}</td></tr>`)
          .join("")}
      </tbody>
    </table>
    <ul class="checks">${settlement.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
  `;
}

function renderLiveReceipt(status) {
  if (!simReceipt) return;
  const values = getSimValues();
  if (values.settlement) {
    renderEngineReceipt(status, values);
    return;
  }
  const { productId, product, amount, revenue, commission, operation, net, breakdown } = values;
  const rows = breakdown.length ? breakdown : [
    { id: productId, name: product.name, amount, revenue, commission, net },
  ];
  const maxRev = Math.max(...rows.map((row) => row.revenue), 1);
  const takeRate = pct(revenue, amount);
  const comRate = pct(commission, revenue);

  simReceipt.innerHTML = `
    <div class="dash-head">
      <div>
        <h3>${status || "Apuração em tempo real"}</h3>
        <p>Clique em um produto no gráfico ou na tabela para filtrar. Destino: conta concentradora no MT Pagamentos.</p>
      </div>
      <div class="dash-badges">
        <span class="dash-badge">${product.name}</span>
        <span class="dash-badge">${operation}</span>
      </div>
    </div>
    <div class="dash-kpis">
      <article class="dash-kpi tx"><span>Valor da transação</span><strong>${money(amount)}</strong><small>Base da apuração</small></article>
      <article class="dash-kpi rev"><span>Valor da receita</span><strong>${money(revenue)}</strong><small>Take rate ${takeRate}</small></article>
      <article class="dash-kpi com"><span>Repasse operação 30%</span><strong>${money(commission)}</strong><small>${comRate} da receita (lucro da operação)</small></article>
      <article class="dash-kpi net"><span>Repasse rede 70%</span><strong>${money(net)}</strong><small>Após venda − compra − custo</small></article>
    </div>
    <div class="dash-charts">
      <article class="dash-card">
        <h4>Receita × comissão × líquido por produto</h4>
        <div class="dash-legend">
          <span><i style="background:var(--pix)"></i>Receita</span>
          <span><i style="background:var(--tef)"></i>Comissão</span>
          <span><i style="background:var(--system)"></i>Líquido</span>
        </div>
        <div class="dash-bar-chart">
          ${rows
            .map((row) => {
              const wRev = (row.revenue / maxRev) * 100;
              const wCom = (row.commission / maxRev) * 100;
              const wNet = (row.net / maxRev) * 100;
              return `<div class="dash-bar-row" data-filter-product="${row.id}">
                <strong><i style="background:${PRODUCT_COLORS[row.id] || "#5b7c99"}"></i>${row.name}</strong>
                <div>
                  <div class="dash-bar-track" title="Receita ${money(row.revenue)}"><span style="width:${wRev}%;background:var(--pix)"></span></div>
                  <div class="dash-bar-track" title="Comissão ${money(row.commission)}"><span style="width:${wCom}%;background:var(--tef)"></span></div>
                  <div class="dash-bar-track" title="Líquido ${money(row.net)}"><span style="width:${wNet}%;background:var(--system)"></span></div>
                </div>
              </div>`;
            })
            .join("")}
        </div>
      </article>
      <article class="dash-card">
        <h4>Composição da receita</h4>
        <div class="dash-donut-wrap">
          ${donutSvg([
            { value: commission, color: "#e87722" },
            { value: net, color: "#1e4d8c" },
          ])}
          <ul class="dash-donut-list">
            <li><span><b style="background:var(--tef)"></b>Comissão</span><span>${money(commission)}</span></li>
            <li><span><b style="background:var(--system)"></b>Líquido MT</span><span>${money(net)}</span></li>
            <li><span><b style="background:var(--pix)"></b>Receita total</span><span>${money(revenue)}</span></li>
          </ul>
        </div>
      </article>
    </div>
    <table class="sim-breakdown">
      <thead>
        <tr><th>Produto</th><th>Transação</th><th>Receita</th><th>Comissão</th><th>Líquido</th></tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) =>
              `<tr data-filter-product="${row.id}" class="${row.id === productId ? "is-on" : ""}">
                <td>${row.name}</td>
                <td>${money(row.amount)}</td>
                <td>${money(row.revenue)}</td>
                <td>${money(row.commission)}</td>
                <td>${money(row.net)}</td>
              </tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  simReceipt.querySelectorAll("[data-filter-product]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-filter-product");
      if (!id || !simProduct || !ECOSYSTEM.products[id]) return;
      simProduct.value = id;
      renderEngineFields();
      applySuggestedRates();
      renderLiveReceipt();
      setActiveProduct(id);
      openTab(id);
    });
  });
}

function csvCell(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function exportSimFile() {
  const { productId, product, amount, revenue, commission, operation, net, breakdown, settlement } = getSimValues();
  const when = new Date().toLocaleString("pt-BR");
  const brl = (value) => Number(value || 0).toFixed(2).replace(".", ",");
  const rows = settlement
    ? [
        ["Campo", "Valor"],
        ["Produto", settlement.productName],
        ["Operação", operation],
        ["Competência", `${settlement.month}/${settlement.year}`],
        ["Subconta", settlement.subaccount],
        ...settlement.lines.map((line) => [line.label, brl(line.amount)]),
        ["Destino da liquidação", "Conta concentradora no MT Pagamentos"],
        ["Data e hora", when],
      ]
    : productId === "all"
      ? [
          ["Produto", "Operação", "Valor da transação (R$)", "Valor da receita (R$)", "Valor da comissão (R$)", "Receita líquida (R$)", "Data e hora"],
          ...breakdown.map((row) => [
            row.name,
            operation,
            brl(row.amount),
            brl(row.revenue),
            brl(row.commission),
            brl(row.net),
            when,
          ]),
          ["Total — Todos os produtos", operation, brl(amount), brl(revenue), brl(commission), brl(net), when],
        ]
      : [
          ["Campo", "Valor"],
          ["Produto", product.name],
          ["Operação", operation],
          ["Valor da transação (R$)", brl(amount)],
          ["Valor da receita (R$)", brl(revenue)],
          ["Valor da comissão (R$)", brl(commission)],
          ["Receita líquida na conta MT (R$)", brl(net)],
          ["Destino da liquidação", "Conta concentradora no MT Pagamentos"],
          ["Data e hora", when],
        ];
  const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(";")).join("\r\n")}`;
  downloadBlob(csv, `simulacao-${slug(operation)}-${stamp()}.csv`, "text/csv;charset=utf-8;");
}

function exportDashboardJson() {
  const { settlement } = getSimValues();
  if (!settlement || !window.ConfraEngine) return;
  const payload = ConfraEngine.toDashboardPayload(settlement);
  downloadBlob(
    JSON.stringify(payload, null, 2),
    `simulacao-${settlement.productId}-${slug(settlement.operation)}-${stamp()}.json`,
    "application/json"
  );
}

function stamp() {
  return new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
}

function slug(value) {
  return String(value || "operacao")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function renderSimulatorOptions() {
  if (!simProduct || !simOperation) return;
  simProduct.innerHTML =
    `<option value="all">Todos os produtos</option>` +
    Object.entries(ECOSYSTEM.products)
      .map(([id, product]) => `<option value="${id}">${product.name}</option>`)
      .join("");
  const operations = window.ConfraEngine?.OPERATIONS;
  const allOpsLabel = window.ConfraEngine?.ALL_OPERATIONS_LABEL || "Todas as operações";
  const allOpsOption = `<option value="ALL">${allOpsLabel}</option>`;
  simOperation.innerHTML = operations?.length
    ? allOpsOption + operations.map((name) => `<option value="${name}">${name}</option>`).join("")
    : allOpsOption +
      Array.from({ length: 20 }, (_, index) => {
        const n = String(index + 1).padStart(2, "0");
        return `<option value="${index + 1}">Operação ${n}</option>`;
      }).join("");
  simOperation.value = "ALL";
  if (simMonth) {
    const months = window.ConfraEngine?.MONTHS || ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    simMonth.innerHTML = months
      .map((month) => `<option value="${month}"${month === "Set" ? " selected" : ""}>${month}</option>`)
      .join("");
  }
  simProduct.value = "pix";
  renderEngineFields();
  applySuggestedRates();
  renderLiveReceipt();
}

function openTab(name) {
  document.querySelectorAll(".tab").forEach((tab) => {
    const on = tab.dataset.tab === name;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", String(on));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const on = panel.dataset.panel === name;
    panel.classList.toggle("is-active", on);
    panel.hidden = !on;
  });
  setActiveProduct(name);
}

function setActiveProduct(name) {
  if (!stage) return;
  stage.dataset.active = name || "all";
  productCards.forEach((card) => {
    const on = name === "all" || card.dataset.product === name;
    card.classList.toggle("is-active", Boolean(name) && on);
  });
}

function drawSpokes() {
  const svg = document.querySelector(".eco-lines");
  const hubEl = document.querySelector(".hub-ring") || document.querySelector(".hub-inner");
  const spokes = {
    pix: document.querySelector(".spoke-pix"),
    tef: document.querySelector(".spoke-tef"),
    system: document.querySelector(".spoke-system"),
    hub: document.querySelector(".spoke-hub"),
    wiki: document.querySelector(".spoke-wiki"),
    shopping: document.querySelector(".spoke-shopping"),
    universidade: document.querySelector(".spoke-universidade"),
    eventos: document.querySelector(".spoke-eventos"),
  };
  if (!svg || !stage || !hubEl || window.innerWidth <= 1080) return;

  const stageRect = stage.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${stageRect.width} ${stageRect.height}`);
  const hubRect = hubEl.getBoundingClientRect();
  const hubX = hubRect.left - stageRect.left + hubRect.width / 2;
  const hubY = hubRect.top - stageRect.top + hubRect.height / 2;
  const hubR = Math.min(hubRect.width, hubRect.height) / 2;

  productCards.forEach((card) => {
    const line = spokes[card.dataset.product];
    if (!line) return;
    const rect = card.getBoundingClientRect();
    const x1 = rect.left - stageRect.left + rect.width / 2;
    const y1 = rect.top - stageRect.top + rect.height / 2;
    const dx = hubX - x1;
    const dy = hubY - y1;
    const len = Math.hypot(dx, dy) || 1;
    const cardInset = Math.min(rect.width, rect.height) * 0.42;
    line.setAttribute("x1", String(x1 + (dx / len) * cardInset));
    line.setAttribute("y1", String(y1 + (dy / len) * cardInset));
    line.setAttribute("x2", String(hubX - (dx / len) * hubR));
    line.setAttribute("y2", String(hubY - (dy / len) * hubR));
  });
}

function openInspector(id) {
  const product = ECOSYSTEM.products[id];
  if (!product || !inspector || !inspectorContent) return;
  inspectorContent.innerHTML = `
    <p class="tag ${id}">${product.tag}</p>
    <h2 id="inspector-title">${product.title}</h2>
    <p>${product.summary}</p>
    <p>${product.detail}</p>
    ${product.checks.length ? `<ul class="checks">${product.checks.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    <p><strong>Fonte de receita:</strong> ${product.revenue}</p>
  `;
  inspector.hidden = false;
  openTab(id);
}

function closeInspector() {
  if (inspector) inspector.hidden = true;
}

function playPipeline() {
  const steps = document.querySelectorAll(".pipe-step");
  let current = 0;
  steps.forEach((step) => step.classList.remove("is-on"));
  window.clearInterval(pipelineTimer);
  pipelineTimer = window.setInterval(() => {
    steps.forEach((step) => step.classList.remove("is-on"));
    if (current < steps.length) {
      steps[current].classList.add("is-on");
      current += 1;
    } else {
      window.clearInterval(pipelineTimer);
    }
  }, 700);
}

function markSimStep(n, state) {
  simTrack?.querySelectorAll("li").forEach((item) => {
    const step = Number(item.dataset.step);
    item.classList.toggle("is-on", state === "on" && step === n);
    item.classList.toggle("is-done", step < n || (state === "done" && step === n));
  });
}

function simulate(event) {
  event.preventDefault();
  const { productId, product, amount, revenue, commission, operation, net, settlement } = getSimValues();

  setActiveProduct(productId);
  if (productId !== "all") openTab(productId);

  const labels = settlement
    ? settlement.pipeline.map((step) => step.text)
    : [
        `Captura da transação ${product.name} ${atOperationPhrase(operation)}`,
        `Apuração por produto, operação, canal e estabelecimento`,
        `Cálculo da receita de ${money(revenue)} sobre ${money(amount)}`,
        `Distribuição da comissão de ${money(commission)} e líquido de ${money(net)}`,
        `Relatório ${operation === "Todas as operações" ? "consolidado de todas as operações" : `da ${operation}`} e liquidação na conta concentradora do MT`,
      ];

  if (settlement) renderEngineTrack(settlement);
  simTrack?.querySelectorAll("li").forEach((item) => item.classList.remove("is-on", "is-done"));

  let step = 1;
  markSimStep(step, "on");
  renderLiveReceipt(`Processando: ${labels[0]}`);

  const timer = window.setInterval(() => {
    step += 1;
    if (step <= 5) {
      markSimStep(step, "on");
      renderLiveReceipt(`Processando: ${labels[step - 1]}`);
    } else {
      window.clearInterval(timer);
      markSimStep(5, "done");
      renderLiveReceipt("Apuração concluída");
    }
  }, 650);
}

function initMap() {
  productCards.forEach((card) => {
    const activate = () => openInspector(card.dataset.product);
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
    card.addEventListener("mouseenter", () => setActiveProduct(card.dataset.product));
  });

  stage?.addEventListener("mouseleave", () => {
    if (!inspector || inspector.hidden) {
      setActiveProduct("all");
      productCards.forEach((card) => card.classList.remove("is-active"));
    }
  });
}

function initHubServices() {
  document.querySelectorAll("#hub-service-list li").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      const service = ECOSYSTEM.hubServices[item.dataset.service];
      if (!service || !inspector || !inspectorContent) return;
      document.querySelectorAll("#hub-service-list li").forEach((el) => el.classList.remove("is-active"));
      item.classList.add("is-active");
      inspectorContent.innerHTML = `
        <p class="tag hub">Confra HUB — soluções para Estabelecimento Comercial (EC)</p>
        <h2 id="inspector-title">${service.name}</h2>
        <p>${service.text}</p>
        <p>A transação segue o mecanismo único: captura, apuração, cálculo de comissão, distribuição e relatório, com liquidação na conta concentradora do MT.</p>
      `;
      inspector.hidden = false;
      setActiveProduct("hub");
      openTab("hub");
    });
  });
}

function initNav() {
  const closeNav = () => {
    document.body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("nav-open")) return;
    if (event.target.closest(".nav, .nav-toggle")) return;
    closeNav();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeNav();
  });

  const links = document.querySelectorAll(".nav a");
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
  );
  sections.forEach((section) => spy.observe(section));
}

renderProducts();
renderStaticBlocks();
renderSimulatorOptions();
initMap();
initHubServices();
initNav();

document.querySelector(".inspector-close")?.addEventListener("click", closeInspector);
inspector?.addEventListener("click", (event) => {
  if (event.target === inspector) closeInspector();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeInspector();
});
document.querySelector("#play-pipeline")?.addEventListener("click", playPipeline);
simProduct?.addEventListener("change", () => {
  renderEngineFields();
  applySuggestedRates();
  renderLiveReceipt();
  setActiveProduct(simProduct.value);
  if (simProduct.value !== "all") openTab(simProduct.value);
});
simAmount?.addEventListener("input", () => {
  applySuggestedRates();
  renderLiveReceipt();
});
simRevenue?.addEventListener("input", () => renderLiveReceipt());
simCommission?.addEventListener("input", () => renderLiveReceipt());
simOperation?.addEventListener("change", () => onEngineInput());
simMonth?.addEventListener("change", () => onEngineInput());
simYear?.addEventListener("input", () => onEngineInput());
document.querySelector("#sim-form")?.addEventListener("submit", simulate);
document.querySelector("#sim-export")?.addEventListener("click", exportSimFile);
document.querySelector("#sim-export-dash")?.addEventListener("click", exportDashboardJson);
window.addEventListener("resize", drawSpokes);
window.addEventListener("load", drawSpokes);
drawSpokes();
