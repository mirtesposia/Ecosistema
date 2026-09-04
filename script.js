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
        "Toda transação Confra PIX é capturada em tempo real e encaminhada à central de conciliação para classificação, apuração e liquidação na conta concentradora do MT.",
      checks: [
        "QR Code, chave PIX, API e PDV",
        "Spread PIX: custo do fornecedor versus venda à operação",
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
      revenue: "Spread PIX e tarifa sobre envio e recebimento.",
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
        "A venda no PDV ou pinpad é autorizada, entra na apuração Confra TEF e a receita correspondente é liquidada na conta MT.",
      checks: [
        "PDV físico, pinpad e canais digitais",
        "Retenção de 0,15% por transação TEF",
        "Captura automática de cada venda",
        "Receita: tarifa sobre transações no PDV",
      ],
      flow: [
        "Venda no PDV ou pinpad",
        "Autorização da bandeira/adquirente",
        "Transação entra na apuração Confra TEF",
        "Receita liquidada na conta MT",
      ],
      revenue: "Retenção de 0,15% por transação TEF, liquidada na conta MT.",
      feeRate: 0.018,
      partnerShare: 0.3,
    },
    system: {
      name: "Confra SYSTEM",
      tag: "Plataforma, APIs e gestão",
      title: "Confra SYSTEM — a espinha dorsal tecnológica",
      summary:
        "Plataforma tecnológica e APIs robustas para integração, automação e gestão completa das operações.",
      detail:
        "O Confra SYSTEM tem CNPJ próprio. Portal, APIs e backoffice registram o uso; cada módulo tem subconta, com espaço para novos contratos.",
      checks: [
        "Subcontas: Confra PDV, Confra Cobrança, Confra Emissor de Boleto e Geren Pix",
        "CNPJ próprio, com inclusão de futuros contratos",
        "Mensalidades, taxas e valor fixo por produto",
        "API do conciliador confronta custos com a central de custos",
      ],
      flow: [
        "Operação usa portal, API ou PDV",
        "Serviços e eventos são registrados",
        "Uso entra na apuração Confra SYSTEM",
        "Mensalidades e taxas na conta MT",
      ],
      revenue: "Mensalidades e serviços dos módulos PDV, cobrança, emissor de boleto e Geren Pix.",
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
        "Cada unidade do Confra HUB tem subconta própria. A receita do fornecedor entra, é apurada e o HUB repassa às operações, conciliando o recebido com a comissão da rede licenciada.",
      checks: [
        "Confra Cred (Confrac / Credit César), Confra Energia, débitos veiculares e certificação digital",
        "Débitos veiculares: convênio Parcele na Hora · Certificado: Cert Sign",
        "Custo da operação (ex.: certificado digital) entra na apuração e é conciliado via API",
        "Repasse do HUB para as operações via subconta na conta MT",
      ],
      flow: [
        "Estabelecimento Comercial (EC) contrata o serviço do Confra HUB",
        "Operação é processada no produto",
        "Taxa e comissão são calculadas",
        "Valor liquidado na conta MT",
      ],
      revenue: "Taxa pelos serviços e soluções para Estabelecimento Comercial (EC).",
      feeRate: 0.08,
      partnerShare: 0.3,
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
      text: "Todas as transações dos produtos (Confra PIX, Confra TEF, Confra SYSTEM e Confra HUB) são capturadas em tempo real.",
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
      text: "Repasses automáticos das comissões para parceiros, conforme contratos e regras vigentes.",
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
        "Produto de origem (Confra PIX, Confra TEF, Confra SYSTEM, Confra HUB)",
        "CNPJ e subconta da unidade de negócio, na conta Confrapagmtos",
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
      text: "A conta concentradora (Confrapagmtos) no MT Pagamentos é o ponto único de liquidez, com subcontas por produto.",
      items: [
        "Receita do fornecedor entra, é apurada e repassada às operações",
        "Central de custos concilia contrato × produção via API",
        "Controladoria identifica divergência e aciona o jurídico",
        "Fechamentos (ex.: energia) conciliam receita recebida e custo acordado",
      ],
    },
  ],
  layers: [
    { n: "Camada 1", title: "Origem", text: "Estabelecimentos Comerciais (EC) e usuários finais geram transações nos canais Confra PIX, Confra TEF, Confra SYSTEM e Confra HUB." },
    { n: "Camada 2", title: "Produtos", text: "Cada produto processa, autoriza e registra o evento, mantendo a especialização da ponta." },
    { n: "Camada 3", title: `Central ${LOGO}`, text: "Conciliação, classificação, regras de comissão e visão única das 16 operações." },
    { n: "Camada 4", title: "Conta MT", text: "Liquidação na conta Confrapagmtos, com CNPJ e subconta por produto. Único ponto de entrada de receita do ecossistema." },
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
        "CONCILIADOR POR API: lançamento e conferência",
      ],
    },
    {
      kicker: "2ª etapa",
      title: "Conta MT, CNPJs e subcontas",
      text: "Na conta Confrapagmtos, cada produto se vincula a um CNPJ e a subcontas. A receita do fornecedor entra, é apurada e o repasse segue para as operações de forma clara e conciliada.",
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
        "Confra Cred — Confrac / comissões Credit César",
        "Confra Energia — subconta Confraenergia",
        "Débitos veiculares — convênio Parcele na Hora",
        "Certificação digital — Cert Sign",
      ],
    },
    {
      kicker: "Confra SYSTEM",
      title: "CNPJ próprio e módulos",
      text: "O Confra SYSTEM opera com CNPJ próprio. Cada produto tem subconta, com espaço para novos contratos.",
      items: [
        "Confra PDV",
        "Confra Cobrança",
        "Confra Emissor de Boleto",
        "Geren Pix",
      ],
    },
    {
      kicker: "Confra TEF",
      title: "Retenção 0,15% e conciliação",
      text: "A retenção de 0,15% por transação TEF vem embutida nos acertos de Capta e IPAG. O valor precisa ir para a conta do Confra TEF, senão o licenciado recebe em duplicidade.",
      items: [
        "Retenção de 0,15% por transação TEF",
        "Origem: acertos Capta e IPAG",
        "Repasse obrigatório para a conta Confra TEF",
        "Conciliação para evitar pagamento duplicado",
      ],
    },
    {
      kicker: "Confra PIX Online",
      title: "Spread, CNPJ e processamento",
      text: "O Confra PIX Online tem estrutura própria, com outros sócios e CNPJ específico. A margem permanece na conta do produto. Wiki e ConfraBase consolidam a receita de processamento.",
      items: [
        "CNPJ e estrutura próprios",
        "Custo Celcoin: R$ 0,29 por PIX · venda às operações: R$ 0,89",
        "Wiki e ConfraBase: cobrança por volume processado",
        "Boleto de cobrança a Capta, IPAG e MTBank",
      ],
    },
    {
      kicker: "Confrapag",
      title: "Shopping, universidade e eventos",
      text: "Linhas complementares de receita, apuradas na mesma conta concentradora quando a venda ocorre na base.",
      items: [
        "Confra Shopping: marketplace com retenção percentual nas vendas entre clientes da base",
        "Universidade Confrapag: subconta para receita de cursos",
        "Eventos: convenções regionais e Paulo Por Aí",
      ],
    },
    {
      kicker: "Repasses",
      title: "Rede × Operação",
      text: "O lucro apurado (venda − compra − custo) é distribuído automaticamente após a conciliação na conta MT.",
      items: [
        "70% rede licenciada",
        "30% operação",
        "Conciliação entre valor recebido e comissão paga",
      ],
    },
  ],
  extraRevenue: [
    {
      id: "pix",
      name: "Wiki e ConfraBase",
      revenue: "Processamento por volume de transações, cobrado via boleto de Capta, IPAG e MTBank.",
    },
    {
      id: "hub",
      name: "Confra Shopping",
      revenue: "Marketplace: retenção percentual sobre vendas entre clientes da base.",
    },
    {
      id: "system",
      name: "Universidade Confrapag",
      revenue: "Subconta própria para a receita de cursos vendidos.",
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
              <ul class="checks">${product.checks.map((item) => `<li>${item}</li>`).join("")}</ul>
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

function getSimValues() {
  const productId = simProduct?.value || "pix";
  const entries = productEntries(productId);
  const product =
    productId === "all"
      ? { name: "Todos os produtos" }
      : ECOSYSTEM.products[productId];
  const amount = Number(simAmount?.value) || 0;
  const revenue = Number(simRevenue?.value) || 0;
  const commission = Number(simCommission?.value) || 0;
  const operation = simOperation?.selectedOptions[0]?.text || "Operação 01";
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
  return { productId, product, amount, revenue, commission, operation, net, breakdown };
}

function applySuggestedRates() {
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
    <text x="70" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#0b1f4d">${pct(slices[1]?.value || 0, total)}</text>
  </svg>`;
}

function renderLiveReceipt(status) {
  if (!simReceipt) return;
  const { productId, product, amount, revenue, commission, operation, net, breakdown } = getSimValues();
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
  const { productId, product, amount, revenue, commission, operation, net, breakdown } = getSimValues();
  const when = new Date().toLocaleString("pt-BR");
  const brl = (value) => value.toFixed(2).replace(".", ",");
  const rows =
    productId === "all"
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
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  const op = operation.replace(/\s+/g, "-").toLowerCase();
  link.href = URL.createObjectURL(blob);
  link.download = `simulacao-${op}-${stamp}.csv`;
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
  simOperation.innerHTML = Array.from({ length: 16 }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return `<option value="${index + 1}">Operação ${n}</option>`;
  }).join("");
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
    <ul class="checks">${product.checks.map((item) => `<li>${item}</li>`).join("")}</ul>
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
  const { productId, product, amount, revenue, commission, operation, net } = getSimValues();

  simTrack?.querySelectorAll("li").forEach((item) => item.classList.remove("is-on", "is-done"));
  setActiveProduct(productId);
  if (productId !== "all") openTab(productId);

  const labels = [
    `Captura da transação ${product.name} na ${operation}`,
    `Apuração por produto, operação, canal e estabelecimento`,
    `Cálculo da receita de ${money(revenue)} sobre ${money(amount)}`,
    `Distribuição da comissão de ${money(commission)} e líquido de ${money(net)}`,
    `Relatório da ${operation} e liquidação na conta concentradora do MT`,
  ];

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
simOperation?.addEventListener("change", () => renderLiveReceipt());
document.querySelector("#sim-form")?.addEventListener("submit", simulate);
document.querySelector("#sim-export")?.addEventListener("click", exportSimFile);
window.addEventListener("resize", drawSpokes);
window.addEventListener("load", drawSpokes);
drawSpokes();
