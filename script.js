const LOGO = '<img class="logo-inline" src="assets/logo-confrapag.png" alt="confrapag">';

const ECOSYSTEM = {
  products: {
    pix: {
      name: "PIX",
      tag: "Recebimento e envio instantâneo",
      title: `PIX no arranjo ${LOGO}`,
      summary:
        "Soluções completas para recebimentos e pagamentos instantâneos com segurança, agilidade e alta disponibilidade.",
      detail:
        "Toda transação PIX é capturada em tempo real e encaminhada à central de conciliação para classificação, apuração e liquidação na conta concentradora do MT.",
      checks: [
        "QR Code, chave PIX, API e PDV",
        "Liquidação na conta concentradora",
        "Rastreio por cliente, canal e estabelecimento",
        "Receita: tarifa sobre envio e recebimento",
      ],
      flow: [
        "Cliente inicia PIX de recebimento ou envio",
        "Transação autorizada e liquidada",
        "Evento chega à captura da central",
        "Receita creditada na conta MT",
      ],
      revenue: "Tarifa sobre transações de recebimento e envio.",
      feeRate: 0.0099,
      partnerShare: 0.4,
    },
    tef: {
      name: "TEF",
      tag: "Ponto de venda físico e digital",
      title: "TEF integrado ao PDV",
      summary:
        "Soluções de pagamento integrado para o ponto de venda físico e digital com confiabilidade e eficiência.",
      detail:
        "A venda no PDV ou pinpad é autorizada, entra na apuração TEF e a receita correspondente é liquidada na conta MT.",
      checks: [
        "PDV físico, pinpad e canais digitais",
        "Multiadquirência e conciliação por estabelecimento",
        "Captura automática de cada venda",
        "Receita: tarifa sobre transações no PDV",
      ],
      flow: [
        "Venda no PDV ou pinpad",
        "Autorização da bandeira/adquirente",
        "Transação entra na apuração TEF",
        "Receita liquidada na conta MT",
      ],
      revenue: "Tarifa sobre transações de pagamento no ponto de venda.",
      feeRate: 0.018,
      partnerShare: 0.45,
    },
    system: {
      name: "SYSTEM",
      tag: "Plataforma, APIs e gestão",
      title: "SYSTEM — a espinha dorsal tecnológica",
      summary:
        "Plataforma tecnológica e APIs robustas para integração, automação e gestão completa das operações.",
      detail:
        "Portal, APIs e backoffice registram o uso da plataforma. Mensalidades e serviços entram na apuração SYSTEM e liquidam na conta MT.",
      checks: [
        "APIs de integração, automação e backoffice",
        "Gestão de operações, usuários e regras",
        "Eventos de uso viram transações apuráveis",
        "Receita: mensalidade de plataforma e serviços",
      ],
      flow: [
        "Operação usa portal, API ou PDV",
        "Serviços e eventos são registrados",
        "Uso entra na apuração SYSTEM",
        "Mensalidades e taxas na conta MT",
      ],
      revenue: "Mensalidade de uso da plataforma e serviços.",
      feeRate: 0.05,
      partnerShare: 0.3,
    },
    hub: {
      name: "HUB",
      tag: "Soluções para o Estabelecimento Comercial (EC)",
      title: "HUB de serviços financeiros",
      summary:
        "Soluções inteligentes",
      detail:
        "Cada serviço do HUB gera transação, tarifa e comissão no mesmo mecanismo de apuração, com liquidação na conta MT.",
      checks: [
        "Cinco famílias de solução no mesmo hub",
        "Foco em economia, regularização e sustentabilidade",
        "Comissionamento por serviço e parceiro",
        "Receita: taxa sobre serviços ao Estabelecimento Comercial (EC)",
      ],
      flow: [
        "Estabelecimento Comercial (EC) contrata o serviço do HUB",
        "Operação é processada no produto",
        "Taxa e comissão são calculadas",
        "Valor liquidado na conta MT",
      ],
      revenue: "Taxa pelos serviços e soluções para Estabelecimento Comercial (EC).",
      feeRate: 0.08,
      partnerShare: 0.5,
    },
  },
  hubServices: {
    veicular: {
      name: "Débitos veiculares",
      text: "Regularização de IPVA, licenciamento e débitos do veículo em um fluxo único, com tarifa e comissão apuradas no HUB.",
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
      text: "Emissão de certificado digital com rastreio da transação até a liquidação na conta concentradora.",
    },
    energia: {
      name: "Energia sustentável",
      text: "Portabilidade de energia com economia e sustentabilidade, liquidada e comissionada no mesmo mecanismo.",
    },
  },
  pipeline: [
    {
      n: 1,
      name: "Captura",
      text: "Todas as transações dos produtos (PIX, TEF, SYSTEM e HUB) são capturadas em tempo real.",
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
        "Produto de origem (PIX, TEF, SYSTEM, HUB)",
        "Operação cliente e estabelecimento",
        "Canal (PDV, API, app, portal)",
        "Data de captura, liquidação e competência",
      ],
    },
    {
      title: "Regras de comissionamento",
      text: "O motor aplica a tabela contratual sem intervenção manual, com trilha de auditoria.",
      items: [
        "Percentual ou valor fixo por produto",
        "Faixas de volume e metas da operação",
        `Split entre ${LOGO}, parceiro e canal`,
        "Exceções e vigência por contrato",
      ],
    },
    {
      title: "Governança da conta MT",
      text: "A conta concentradora no MT Pagamentos é o ponto único de liquidez do ecossistema.",
      items: [
        "100% das receitas liquidam nesta conta",
        "Repasses saem após a apuração",
        "Saldo, conciliação e extrato auditáveis",
        "Controle centralizado para as 16 operações",
      ],
    },
  ],
  layers: [
    { n: "Camada 1", title: "Origem", text: "Estabelecimentos Comerciais (EC) e usuários finais geram transações nos canais PIX, TEF, SYSTEM e HUB." },
    { n: "Camada 2", title: "Produtos", text: "Cada produto processa, autoriza e registra o evento, mantendo a especialização da ponta." },
    { n: "Camada 3", title: `Central ${LOGO}`, text: "Conciliação, classificação, regras de comissão e visão única das 16 operações." },
    { n: "Camada 4", title: "Conta MT", text: "Liquidação financeira concentrada. Único ponto de entrada de receita do ecossistema." },
    { n: "Camada 5", title: "Distribuição", text: "Repasses a parceiros, extratos, dashboards e trilha de auditoria para gestão e compliance." },
  ],
  benefits: [
    { title: "Concentração total", text: "Concentração 100% das receitas em uma única conta no MT, com segurança e controle.", icon: '<svg viewBox="0 0 48 48"><path d="M24 6 10 12v12c0 8.5 6 16 14 18.8C32 40 38 32.5 38 24V12L24 6Z"/><path d="m18 24 4 4 8-9"/></svg>' },
    { title: "Apuração automática", text: "Comissionamento automático, preciso e auditável, sem planilha paralela.", icon: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="8"/><path d="M24 8v4M24 36v4M8 24h4M36 24h4M12.5 12.5l2.8 2.8M32.7 32.7l2.8 2.8M12.5 35.5l2.8-2.8M32.7 15.3l2.8-2.8"/></svg>' },
    { title: "Visão completa", text: "Desempenho por produto, cliente e canal, com gestão consolidada do negócio.", icon: '<svg viewBox="0 0 48 48"><path d="M8 36V20h8v16H8Zm12 0V12h8v24h-8Zm12 0V24h8v12h-8Z"/></svg>' },
    { title: "Transparência", text: "Mais confiança para clientes e parceiros, com regras e extratos rastreáveis.", icon: '<svg viewBox="0 0 48 48"><circle cx="18" cy="16" r="6"/><circle cx="30" cy="16" r="6"/><path d="M8 36c1-6 5-10 10-10s9 4 10 10M22 36c1-6 5-10 10-10s9 4 10 10"/></svg>' },
    { title: "Competitividade", text: "Soluções que geram economia, sustentabilidade e diferencial para o Estabelecimento Comercial (EC).", icon: '<svg viewBox="0 0 48 48"><path d="M10 36c10-2 16-10 20-24 5 8 7 15 6 24-8-2-16 0-26 0Z"/></svg>' },
  ],
};

const stage = document.querySelector(".eco-stage");
const productCards = document.querySelectorAll(".product-card[data-product]");
const toggle = document.querySelector(".nav-toggle");
const inspector = document.querySelector("#inspector");
const inspectorContent = document.querySelector("#inspector-content");
const simProduct = document.querySelector("#sim-product");
const simService = document.querySelector("#sim-service");
const simServiceWrap = document.querySelector("#sim-service-wrap");
const simAmount = document.querySelector("#sim-amount");
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

  if (revenueBody) {
    revenueBody.innerHTML = Object.entries(ECOSYSTEM.products)
      .map(
        ([id, product]) =>
          `<tr><td><span class="pill ${id}">${product.name}</span></td><td>${product.revenue}</td></tr>`
      )
      .join("");
  }

  if (simTrack) {
    simTrack.innerHTML = ECOSYSTEM.pipeline
      .map((step) => `<li data-step="${step.n}"><strong>${step.n}. ${step.name}</strong><br>${step.text}</li>`)
      .join("");
  }
}

function renderSimulatorOptions() {
  if (!simProduct || !simService) return;
  simProduct.innerHTML = Object.entries(ECOSYSTEM.products)
    .map(([id, product]) => `<option value="${id}">${product.name}</option>`)
    .join("");
  simService.innerHTML = Object.entries(ECOSYSTEM.hubServices)
    .map(([id, service]) => `<option value="${id}">${service.name}</option>`)
    .join("");
  toggleHubService();
}

function toggleHubService() {
  if (!simServiceWrap || !simProduct) return;
  simServiceWrap.hidden = simProduct.value !== "hub";
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
    card.classList.toggle("is-active", card.dataset.product === name);
  });
}

function drawSpokes() {
  const svg = document.querySelector(".eco-lines");
  const hubEl = document.querySelector(".hub-inner");
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

  productCards.forEach((card) => {
    const line = spokes[card.dataset.product];
    if (!line) return;
    const rect = card.getBoundingClientRect();
    line.setAttribute("x1", String(rect.left - stageRect.left + rect.width / 2));
    line.setAttribute("y1", String(rect.top - stageRect.top + rect.height / 2));
    line.setAttribute("x2", String(hubX));
    line.setAttribute("y2", String(hubY));
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
  const productId = simProduct.value;
  const product = ECOSYSTEM.products[productId];
  const amount = Number(simAmount.value) || 0;
  const service = productId === "hub" ? ECOSYSTEM.hubServices[simService.value] : null;
  const fee = amount * product.feeRate;
  const partner = fee * product.partnerShare;
  const net = fee - partner;

  simTrack?.querySelectorAll("li").forEach((item) => item.classList.remove("is-on", "is-done"));
  setActiveProduct(productId);
  openTab(productId);

  const labels = [
    `Captura da transação ${product.name}${service ? ` · ${service.name}` : ""}`,
    "Apuração por produto, cliente, canal e estabelecimento",
    `Cálculo da tarifa de ${money(fee)}`,
    `Distribuição: ${money(partner)} ao parceiro e ${money(net)} para a central`,
    "Registro no relatório e liquidação na conta concentradora do MT",
  ];

  let step = 1;
  markSimStep(step, "on");
  simReceipt.innerHTML = `<p>Processando ${labels[0]}...</p>`;

  const timer = window.setInterval(() => {
    step += 1;
    if (step <= 5) {
      markSimStep(step, "on");
      simReceipt.innerHTML = `<p>Processando ${labels[step - 1]}...</p>`;
    } else {
      window.clearInterval(timer);
      markSimStep(5, "done");
      simReceipt.innerHTML = `
        <h3>Recibo ilustrativo da apuração</h3>
        <dl>
          <dt>Produto</dt><dd>${product.name}${service ? ` · ${service.name}` : ""}</dd>
          <dt>Valor da transação</dt><dd>${money(amount)}</dd>
          <dt>Tarifa (${(product.feeRate * 100).toFixed(2)}%)</dt><dd>${money(fee)}</dd>
          <dt>Comissão do parceiro</dt><dd>${money(partner)}</dd>
          <dt>Receita líquida na conta MT</dt><dd>${money(net)}</dd>
          <dt>Destino da liquidação</dt><dd>Conta concentradora no MT Pagamentos</dd>
        </dl>
      `;
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
        <p class="tag hub">HUB — soluções para Estabelecimento Comercial (EC)</p>
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
  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
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
simProduct?.addEventListener("change", toggleHubService);
document.querySelector("#sim-form")?.addEventListener("submit", simulate);
window.addEventListener("resize", drawSpokes);
window.addEventListener("load", drawSpokes);
drawSpokes();
