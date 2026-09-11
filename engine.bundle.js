/* Browser bundle of engine/src. Rebuild with `npm run build:engine` when Node is available. */
var ConfraEngine = (function (exports) {
  "use strict";

  function toCents(reais) {
    const value = Number(reais);
    if (!Number.isFinite(value)) return 0;
    return Math.round(value * 100);
  }

  function fromCents(cents) {
    return (Number(cents) || 0) / 100;
  }

  function roundMoney(reais) {
    return fromCents(toCents(reais));
  }

  function addCents() {
    let total = 0;
    for (let i = 0; i < arguments.length; i += 1) total += Number(arguments[i]) || 0;
    return total;
  }

  function percentOf(cents, rate) {
    return Math.round((Number(cents) || 0) * (Number(rate) || 0));
  }

  function split70_30(profit) {
    const safe = Math.max(Number(profit) || 0, 0);
    const network70 = Math.round(safe * 0.7);
    return { network70, operation30: safe - network70 };
  }

  const OPERATIONS = [
    "Confrapag",
    "Aliança Pay",
    "Araguaia Pay",
    "Athos Pay",
    "BrazPay",
    "Bull Bank",
    "Deixa no Azul",
    "Libber Pay",
    "Pague Assim",
    "Parcela Já",
    "Propag Pay",
    "Seven Pay",
    "Sky Thunder",
    "S4Pag",
    "Wedsbank",
    "TMJ PAY",
  ];

  const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const ENGINE_PRODUCTS = ["pix", "tef", "hub", "system", "shopping", "universidade", "eventos"];
  const PIX_SUPPLIERS = ["F3", "F4", "F5", "F6", "F7"];
  const ALL_SUPPLIERS = "ALL";
  const ALL_OPERATIONS = "ALL";
  const ALL_OPERATIONS_LABEL = "Todas as operações";
  const TEF_BANDS = PIX_SUPPLIERS;

  const PIX_CONTRACT = {
    sellPrice: 0.89,
    buyPrice: 0.29,
    pulseRate: 0.1,
    pulseLabel: "Pulse · 10% na central de tarifa",
  };

  const PIX_SUPPLIER_LABELS = {
    ALL: "Todos os fornecedores",
    F3: "Fornecedor F3",
    F4: "Fornecedor F4",
    F5: "Fornecedor F5",
    F6: "Fornecedor F6",
    F7: "Fornecedor F7",
  };

  const TEF_CONTRACT = {
    retentionRate: 0.0015,
    takeF3: 0.018,
    takeF4: 0.012,
    takeF5: 0.015,
    takeF6: 0.015,
    takeF7: 0.015,
  };

  function supplierLabel(id) {
    if (id === ALL_SUPPLIERS) return PIX_SUPPLIER_LABELS.ALL;
    if (id && PIX_SUPPLIER_LABELS[id]) return PIX_SUPPLIER_LABELS[id];
    return PIX_SUPPLIER_LABELS.F3;
  }

  function operationLabel(value) {
    if (!value || value === ALL_OPERATIONS) return ALL_OPERATIONS_LABEL;
    return value;
  }

  function atOperation(value) {
    return operationLabel(value) === ALL_OPERATIONS_LABEL
      ? "em todas as operações (consolidado)"
      : `na ${value}`;
  }

  const HUB_SERVICES = {
    cred: { name: "Confra Cred", subaccount: "Confrac", salePrice: 100, purchasePrice: 70, unitCost: 5 },
    veicular: { name: "Débitos veiculares", subaccount: "Parcele na Hora", salePrice: 35, purchasePrice: 22, unitCost: 3 },
    tributos: { name: "Parcelamento de tributos", subaccount: "Confra HUB Tributos", salePrice: 25, purchasePrice: 15, unitCost: 2 },
    fgts: { name: "Adiantamento de FGTS Aniversário", subaccount: "Confra HUB FGTS", salePrice: 80, purchasePrice: 50, unitCost: 8 },
    certificado: { name: "Certificado digital", subaccount: "Cert Sign", salePrice: 200, purchasePrice: 140, unitCost: 10 },
    energia: { name: "Confra Energia", subaccount: "Confraenergia", salePrice: 150, purchasePrice: 110, unitCost: 15 },
  };

  const SYSTEM_SERVICES = {
    pdv: { name: "Confra PDV", subaccount: "Confra SYSTEM · PDV", salePrice: 150, purchasePrice: 80, unitCost: 15 },
    cobranca: { name: "Confra Cobrança", subaccount: "Confra SYSTEM · Cobrança", salePrice: 80, purchasePrice: 40, unitCost: 8 },
    gerenpix: { name: "Confra GerenPix", subaccount: "Confra SYSTEM · GerenPix", salePrice: 60, purchasePrice: 30, unitCost: 6 },
  };

  const UNIVERSIDADE_COURSES = {
    onboarding: { name: "Onboarding de Colaboradores", audience: "colaborador", salePrice: 197, purchasePrice: 60, unitCost: 10 },
    inicial: { name: "Formação Inicial", audience: "cliente", salePrice: 497, purchasePrice: 150, unitCost: 25 },
    fast: { name: "Plano Fast", audience: "cliente", salePrice: 297, purchasePrice: 90, unitCost: 15 },
    lideres: { name: "Formação de Líderes", audience: "cliente", salePrice: 697, purchasePrice: 200, unitCost: 40 },
    split: { name: "Split de Recebíveis", audience: "cliente", salePrice: 397, purchasePrice: 120, unitCost: 20 },
    f3f4: { name: "F3 e F4 Sem Segredos", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
    tef: { name: "ConfraTEF", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
    pix: { name: "ConfraPix", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
    online: { name: "ConfraOnline", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
    hub: { name: "ConfraHub", audience: "cliente", salePrice: 350, purchasePrice: 100, unitCost: 15 },
  };

  const EVENTOS_CATALOG = {
    nacional: { name: "Convenção Nacional", salePrice: 890, purchasePrice: 350, unitCost: 80 },
    regional: { name: "Regionais", salePrice: 450, purchasePrice: 180, unitCost: 40 },
    paulo: { name: "Paulo Por Aí", salePrice: 297, purchasePrice: 90, unitCost: 25 },
    livre: { name: "Evento livre do Confra Eventos", salePrice: 350, purchasePrice: 120, unitCost: 30 },
  };

  const PERCENT_PRODUCTS = {
    shopping: { name: "Confra Shopping", subaccount: "Confra Shopping", rate: 0.06 },
  };

  const SUBACCOUNTS = {
    pix: "Confra PIX · CNPJ próprio",
    tef: "Confra TEF",
    hub: "Confra HUB",
    system: "Confra SYSTEM",
    shopping: "Confra Shopping",
    universidade: "Universidade Confrapag",
    eventos: "Confra Eventos",
  };

  const PIPELINE = [
    { n: 1, name: "Captura", text: "Evento entra na central de apuração, comissionamento e conciliação." },
    { n: 2, name: "Apuração", text: "Classificação por produto, operação, canal, CNPJ e subconta." },
    { n: 3, name: "Cálculo de comissões", text: "Contrato, custo documentado, Pulse/retenção e faixas." },
    { n: 4, name: "Distribuição", text: "Lucro (venda − compra − custo) em 70% rede e 30% operação." },
    { n: 5, name: "Relatórios", text: "Recibo, JSON do dashboard e liquidação na conta concentradora MT." },
  ];

  function pipelineFor(labels) {
    return PIPELINE.map((step, index) => ({
      ...step,
      text: labels[index] || step.text,
    }));
  }

  function dashboardRow(params) {
    const tpvF3 = roundMoney(params.tpvF3 || 0);
    const tpvF4 = roundMoney(params.tpvF4 || 0);
    const tpvF5 = roundMoney(params.tpvF5 || 0);
    const tpvF6 = roundMoney(params.tpvF6 || 0);
    const tpvF7 = roundMoney(params.tpvF7 || 0);
    const f3 = roundMoney(params.f3 || 0);
    const f4 = roundMoney(params.f4 || 0);
    const f5 = roundMoney(params.f5 || 0);
    const f6 = roundMoney(params.f6 || 0);
    const f7 = roundMoney(params.f7 || 0);
    const tpv = roundMoney(tpvF3 + tpvF4 + tpvF5 + tpvF6 + tpvF7);
    const comissao = roundMoney(f3 + f4 + f5 + f6 + f7);
    return {
      operacao: params.operacao,
      ano: params.ano,
      mes: params.mes,
      tpv,
      tpvF3,
      tpvF4,
      tpvF5,
      tpvF6,
      tpvF7,
      f3,
      f4,
      f5,
      f6,
      f7,
      comissao,
      take: tpv ? (comissao / tpv) * 100 : 0,
    };
  }

  function simulatePix(input) {
    const quantity = Math.max(0, Math.round(Number(input.quantity) || 0));
    const ticket = Math.max(0, Number(input.ticket) || 0);
    const sellPrice = Number(input.sellPrice) || PIX_CONTRACT.sellPrice;
    const buyPrice = Number(input.buyPrice) || PIX_CONTRACT.buyPrice;
    const pulseRate = Number(input.pulseRate) || PIX_CONTRACT.pulseRate;
    const supplier = input.supplier || "F3";
    const label = supplierLabel(supplier);
    const operation = operationLabel(input.operation);
    const volume = toCents(quantity * ticket);
    const revenue = toCents(quantity * sellPrice);
    const buy = toCents(quantity * buyPrice);
    const pulse = percentOf(revenue, pulseRate);
    const documentedBuy = input.costDocumented ? buy : 0;
    const cost = addCents(documentedBuy, pulse);
    const profit = Math.max(revenue - cost, 0);
    const split = split70_30(profit);
    const notes = [
      `${label}: compra R$ ${buyPrice.toFixed(2)} · venda às operações R$ ${sellPrice.toFixed(2)} por PIX.`,
      `${PIX_CONTRACT.pulseLabel}.`,
      "Custo só entra com contrato ou aditivo na central de custos (F3 a F7).",
      "Liquidação no CNPJ e subconta do Confra PIX.",
    ];
    if (!input.costDocumented) {
      notes.push(`Custo ${label} ignorado: não há contrato ou aditivo na central de custos.`);
    }
    return {
      productId: "pix",
      productName: "Confra PIX",
      subaccount: SUBACCOUNTS.pix,
      operation,
      year: input.year,
      month: input.month,
      supplier,
      amount: fromCents(volume),
      revenue: fromCents(revenue),
      cost: fromCents(cost),
      pulse: fromCents(pulse),
      retention: 0,
      profit: fromCents(profit),
      split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
      takeRate: volume ? (split.operation30 / volume) * 100 : 0,
      lines: [
        { code: "TPV", label: `Volume (${quantity} PIX × ticket)`, amount: fromCents(volume), role: "volume" },
        { code: "VENDA", label: "Tarifa cobrada das operações", amount: fromCents(revenue), role: "revenue" },
        { code: "COMPRA", label: `Custo ${label}`, amount: fromCents(documentedBuy), role: "cost" },
        { code: "PULSE", label: PIX_CONTRACT.pulseLabel, amount: fromCents(pulse), role: "fee" },
        { code: "LUCRO", label: "Venda − compra − Pulse", amount: fromCents(profit), role: "profit" },
        { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
        { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
      ],
      notes,
      pipeline: pipelineFor([
        `Captura de ${quantity} PIX ${atOperation(operation)} · ${label}`,
        "Apuração Confra PIX Online · CNPJ e subconta próprios",
        `Receita ${fromCents(revenue).toFixed(2)} · ${label} ${fromCents(documentedBuy).toFixed(2)} · Pulse ${fromCents(pulse).toFixed(2)}`,
        `Distribuição 70/30 sobre lucro de ${fromCents(profit).toFixed(2)}`,
        "JSON do dashboard e liquidação na conta concentradora do MT",
      ]),
      dashboardRow: dashboardRow({
        operacao: operation,
        ano: input.year,
        mes: input.month,
        tpvF3: fromCents(volume),
        f3: fromCents(split.operation30),
      }),
    };
  }

  function simulateTef(input) {
    const supplier = input.supplier || ALL_SUPPLIERS;
    const label = supplierLabel(supplier);
    const operation = operationLabel(input.operation);
    const bands = supplier === ALL_SUPPLIERS ? PIX_SUPPLIERS : PIX_SUPPLIERS.indexOf(supplier) >= 0 ? [supplier] : PIX_SUPPLIERS;
    const takeMap = {
      F3: Number(input.takeF3) || TEF_CONTRACT.takeF3,
      F4: Number(input.takeF4) || TEF_CONTRACT.takeF4,
      F5: Number(input.takeF5) || TEF_CONTRACT.takeF5,
      F6: Number(input.takeF6) || TEF_CONTRACT.takeF6,
      F7: Number(input.takeF7) || TEF_CONTRACT.takeF7,
    };
    const tpvBy = { F3: 0, F4: 0, F5: 0, F6: 0, F7: 0 };
    const feeBy = { F3: 0, F4: 0, F5: 0, F6: 0, F7: 0 };
    const rawTpv = {
      F3: toCents(input.tpvF3),
      F4: toCents(input.tpvF4),
      F5: toCents(input.tpvF5),
      F6: toCents(input.tpvF6),
      F7: toCents(input.tpvF7),
    };
    PIX_SUPPLIERS.forEach((band) => {
      if (bands.indexOf(band) < 0) return;
      tpvBy[band] = rawTpv[band];
      feeBy[band] = percentOf(tpvBy[band], takeMap[band]);
    });
    const tpv = addCents(tpvBy.F3, tpvBy.F4, tpvBy.F5, tpvBy.F6, tpvBy.F7);
    const fees = addCents(feeBy.F3, feeBy.F4, feeBy.F5, feeBy.F6, feeBy.F7);
    const retentionRate = Number(input.retentionRate) || TEF_CONTRACT.retentionRate;
    const retention = percentOf(tpv, retentionRate);
    const documentedCost = input.costDocumented ? toCents(input.documentedCost) : 0;
    const profit = Math.max(retention - documentedCost, 0);
    const split = split70_30(profit);
    const notes = [
      `Retenção de ${(retentionRate * 100).toFixed(2)}% por transação TEF.`,
      `Custo classificado em ${label}.`,
      "O valor da retenção precisa ir para a conta Confra TEF, senão o licenciado recebe em duplicidade.",
      supplier === ALL_SUPPLIERS ? "TPV e comissão por fornecedor F3 a F7." : `TPV e take apenas do ${label}.`,
    ];
    if (!input.costDocumented && (Number(input.documentedCost) || 0) > 0) {
      notes.push(`Custo ${label} ignorado: não há contrato ou aditivo.`);
    }
    return {
      productId: "tef",
      productName: "Confra TEF",
      subaccount: SUBACCOUNTS.tef,
      operation,
      year: input.year,
      month: input.month,
      supplier,
      amount: fromCents(tpv),
      revenue: fromCents(addCents(fees, retention)),
      cost: fromCents(documentedCost),
      pulse: 0,
      retention: fromCents(retention),
      profit: fromCents(profit),
      split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
      takeRate: tpv ? (fees / tpv) * 100 : 0,
      lines: [
        {
          code: "TPV",
          label: supplier === ALL_SUPPLIERS ? "TPV total (todos os fornecedores)" : `TPV ${label}`,
          amount: fromCents(tpv),
          role: "volume",
        },
      ]
        .concat(
          bands.map((band) => ({
            code: band,
            label: `Comissão ${band}`,
            amount: fromCents(feeBy[band]),
            role: "revenue",
          }))
        )
        .concat([
          { code: "RET", label: `Retenção TEF ${(retentionRate * 100).toFixed(2)}% → conta Confra TEF`, amount: fromCents(retention), role: "fee" },
          { code: "CUSTO", label: `Custo documentado · ${label}`, amount: fromCents(documentedCost), role: "cost" },
          { code: "LUCRO", label: "Retenção − custo", amount: fromCents(profit), role: "profit" },
          { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
          { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
        ]),
      notes,
      pipeline: pipelineFor([
        `Captura TEF ${atOperation(operation)} · ${label}`,
        supplier === ALL_SUPPLIERS ? "Apuração por fornecedor F3 a F7 e estabelecimento" : `Apuração do TPV ${label}`,
        `Comissão das faixas ${fromCents(fees).toFixed(2)} · retenção ${fromCents(retention).toFixed(2)}`,
        `Retenção líquida ${fromCents(profit).toFixed(2)} em 70/30, obrigatoriamente na conta Confra TEF`,
        "Linha no formato do dashboard (TPV e comissão por faixa)",
      ]),
      dashboardRow: dashboardRow({
        operacao: operation,
        ano: input.year,
        mes: input.month,
        tpvF3: fromCents(tpvBy.F3),
        tpvF4: fromCents(tpvBy.F4),
        tpvF5: fromCents(tpvBy.F5),
        tpvF6: fromCents(tpvBy.F6),
        tpvF7: fromCents(tpvBy.F7),
        f3: fromCents(feeBy.F3),
        f4: fromCents(feeBy.F4),
        f5: fromCents(feeBy.F5),
        f6: fromCents(feeBy.F6),
        f7: fromCents(feeBy.F7),
      }),
    };
  }

  function simulateMargin(params) {
    const supplier = params.supplier || "F3";
    const label = supplierLabel(supplier);
    const operation = operationLabel(params.operation);
    const quantity = Math.max(0, Number(params.quantity) || 0);
    const sale = toCents(quantity * (Number(params.salePrice) || 0));
    const purchase = toCents(quantity * (Number(params.purchasePrice) || 0));
    const unitCost = toCents(quantity * (Number(params.unitCost) || 0));
    const documentedCost = params.costDocumented ? purchase + unitCost : 0;
    const profit = Math.max(sale - documentedCost, 0);
    const split = split70_30(profit);
    const notes = [
      `${params.service.name} liquida na subconta ${params.service.subaccount}.`,
      `Custo classificado em ${label}.`,
      "Comissionamento considera preço de venda, preço de compra e custo.",
      "Conciliação entre valor recebido e comissão paga à rede licenciada.",
    ];
    if (!params.costDocumented && purchase + unitCost > 0) {
      notes.push("Compra e custo ignorados: não há contrato ou aditivo na central de custos.");
    }
    return {
      productId: params.productId,
      productName: params.productName,
      subaccount: `${params.rootSubaccount} · ${params.service.subaccount}`,
      operation,
      year: params.year,
      month: params.month,
      supplier,
      serviceId: params.serviceId,
      serviceName: params.service.name,
      amount: fromCents(sale),
      revenue: fromCents(sale),
      cost: fromCents(documentedCost),
      pulse: 0,
      retention: 0,
      profit: fromCents(profit),
      split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
      takeRate: sale ? (split.operation30 / sale) * 100 : 0,
      lines: [
        { code: "VENDA", label: "Preço de venda", amount: fromCents(sale), role: "revenue" },
        { code: "COMPRA", label: `Preço de compra · ${label}`, amount: fromCents(params.costDocumented ? purchase : 0), role: "cost" },
        { code: "CUSTO", label: `Custo operacional · ${label}`, amount: fromCents(params.costDocumented ? unitCost : 0), role: "cost" },
        { code: "LUCRO", label: "Venda − compra − custo", amount: fromCents(profit), role: "profit" },
        { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
        { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
      ],
      notes,
      pipeline: pipelineFor([
        `${params.service.name} contratado pelo EC ${atOperation(operation)} · ${label}`,
        `Serviço entra na subconta ${params.service.subaccount}`,
        `Venda ${fromCents(sale).toFixed(2)} − compra/custo ${fromCents(documentedCost).toFixed(2)}`,
        `Lucro ${fromCents(profit).toFixed(2)} em 70% rede e 30% operação`,
        "Liquidação na conta concentradora do MT",
      ]),
      dashboardRow: dashboardRow({
        operacao: operation,
        ano: params.year,
        mes: params.month,
        tpvF3: fromCents(sale),
        f3: fromCents(split.operation30),
      }),
    };
  }

  function simulateHub(input) {
    return simulateMargin({
      ...input,
      productId: "hub",
      productName: "Confra HUB",
      rootSubaccount: SUBACCOUNTS.hub,
      service: HUB_SERVICES[input.serviceId] || HUB_SERVICES.cred,
      serviceId: input.serviceId,
    });
  }

  function simulateSystem(input) {
    return simulateMargin({
      ...input,
      productId: "system",
      productName: "Confra SYSTEM",
      rootSubaccount: SUBACCOUNTS.system,
      service: SYSTEM_SERVICES[input.serviceId] || SYSTEM_SERVICES.pdv,
      serviceId: input.serviceId,
    });
  }

  function simulateUniversidade(input) {
    const operation = operationLabel(input.operation);
    const AUDIENCE_LABEL = { cliente: "rede de licenciados", colaborador: "colaborador" };
    const courses = (input.courses || []).map((line) => {
      const catalog = UNIVERSIDADE_COURSES[line.courseId] || UNIVERSIDADE_COURSES.inicial;
      return {
        courseId: line.courseId || "inicial",
        name: line.name || catalog.name,
        audience: line.audience || catalog.audience,
        quantity: Math.max(0, Number(line.quantity) || 0),
        salePrice: Number.isFinite(Number(line.salePrice)) ? Number(line.salePrice) : catalog.salePrice,
        purchasePrice: Number.isFinite(Number(line.purchasePrice)) ? Number(line.purchasePrice) : catalog.purchasePrice,
        unitCost: Number.isFinite(Number(line.unitCost)) ? Number(line.unitCost) : catalog.unitCost,
      };
    });
    const enrollments = courses.reduce((total, course) => total + course.quantity, 0);
    let sale = 0;
    let purchase = 0;
    let unitCost = 0;
    const courseLines = [];
    courses.forEach((course) => {
      const revenue = toCents(course.quantity * course.salePrice);
      const buy = toCents(course.quantity * course.purchasePrice);
      const cost = toCents(course.quantity * course.unitCost);
      sale = addCents(sale, revenue);
      purchase = addCents(purchase, buy);
      unitCost = addCents(unitCost, cost);
      courseLines.push({
        code: String(course.courseId).toUpperCase(),
        label: `${course.name} · ${course.quantity} matrículas · ${AUDIENCE_LABEL[course.audience] || course.audience}`,
        amount: fromCents(revenue),
        role: "revenue",
      });
    });
    const documentedCost = input.costDocumented ? addCents(purchase, unitCost) : 0;
    const profit = Math.max(sale - documentedCost, 0);
    const names = courses.map((course) => course.name).filter(Boolean);
    const summary = names.length ? names.join(" · ") : "Catálogo da Universidade";
    const notes = [
      "A Universidade Confrapag gere o próprio catálogo: cada curso vendido entra na subconta dela, sem percentual sobre o TPV dos outros produtos.",
      "Este modelo não tem split 70/30. O lucro permanece 100% na Universidade.",
      `${courses.length} curso(s) · ${enrollments} matrícula(s) no período.`,
      `Liquidação na subconta ${SUBACCOUNTS.universidade}.`,
    ];
    if (!input.costDocumented && addCents(purchase, unitCost) > 0) {
      notes.push("Compra e custo dos cursos ignorados: não há contrato ou aditivo na central de custos.");
    }
    return {
      productId: "universidade",
      productName: "Universidade Confrapag",
      subaccount: SUBACCOUNTS.universidade,
      operation,
      year: input.year,
      month: input.month,
      serviceId: courses[0] && courses[0].courseId,
      serviceName: summary,
      amount: fromCents(sale),
      revenue: fromCents(sale),
      cost: fromCents(documentedCost),
      pulse: 0,
      retention: 0,
      profit: fromCents(profit),
      split: { network70: 0, operation30: 0 },
      takeRate: sale ? (profit / sale) * 100 : 0,
      lines: [
        { code: "MAT", label: `Matrículas no período (${enrollments})`, amount: fromCents(sale), role: "volume" },
      ]
        .concat(courseLines)
        .concat([
          { code: "COMPRA", label: "Compra de conteúdo e plataforma", amount: fromCents(input.costDocumented ? purchase : 0), role: "cost" },
          { code: "CUSTO", label: "Custo operacional dos cursos", amount: fromCents(input.costDocumented ? unitCost : 0), role: "cost" },
          { code: "LUCRO", label: "Lucro da Universidade (sem split)", amount: fromCents(profit), role: "profit" },
        ]),
      notes,
      pipeline: pipelineFor([
        `Matrículas capturadas pela Universidade ${atOperation(operation)}`,
        "Cada curso vendido é classificado no catálogo e na subconta própria",
        `Venda ${fromCents(sale).toFixed(2)} − compra/custo ${fromCents(documentedCost).toFixed(2)}`,
        `Lucro ${fromCents(profit).toFixed(2)} permanece 100% na Universidade, sem split 70/30`,
        "Liquidação na conta concentradora do MT",
      ]),
      dashboardRow: dashboardRow({
        operacao: operation,
        ano: input.year,
        mes: input.month,
        tpvF3: fromCents(sale),
        f3: 0,
      }),
    };
  }

  function simulateEventos(input) {
    const operation = operationLabel(input.operation);
    const events = (input.events || []).map((line) => {
      const catalog = EVENTOS_CATALOG[line.eventId] || EVENTOS_CATALOG.livre;
      return {
        eventId: line.eventId || "livre",
        name: line.name || catalog.name,
        quantity: Math.max(0, Number(line.quantity) || 0),
        salePrice: Number.isFinite(Number(line.salePrice)) ? Number(line.salePrice) : catalog.salePrice,
        purchasePrice: Number.isFinite(Number(line.purchasePrice)) ? Number(line.purchasePrice) : catalog.purchasePrice,
        unitCost: Number.isFinite(Number(line.unitCost)) ? Number(line.unitCost) : catalog.unitCost,
      };
    });
    const tickets = events.reduce((total, event) => total + event.quantity, 0);
    let sale = 0;
    let purchase = 0;
    let unitCost = 0;
    const eventLines = [];
    events.forEach((event) => {
      const revenue = toCents(event.quantity * event.salePrice);
      const buy = toCents(event.quantity * event.purchasePrice);
      const cost = toCents(event.quantity * event.unitCost);
      sale = addCents(sale, revenue);
      purchase = addCents(purchase, buy);
      unitCost = addCents(unitCost, cost);
      eventLines.push({
        code: String(event.eventId).toUpperCase(),
        label: `${event.name} · ${event.quantity} ingressos`,
        amount: fromCents(revenue),
        role: "revenue",
      });
    });
    const documentedCost = input.costDocumented ? addCents(purchase, unitCost) : 0;
    const profit = Math.max(sale - documentedCost, 0);
    const names = events.map((event) => event.name).filter(Boolean);
    const summary = names.length ? names.join(" · ") : "Catálogo do Confra Eventos";
    const notes = [
      "O Confra Eventos gere o próprio catálogo: cada evento vendido entra na subconta dele, sem percentual sobre o TPV dos outros produtos.",
      "Este modelo não tem split 70/30. O lucro permanece 100% no Confra Eventos.",
      `${events.length} evento(s) · ${tickets} ingresso(s) no período.`,
      `Liquidação na subconta ${SUBACCOUNTS.eventos}.`,
    ];
    if (!input.costDocumented && addCents(purchase, unitCost) > 0) {
      notes.push("Compra e custo dos eventos ignorados: não há contrato ou aditivo na central de custos.");
    }
    return {
      productId: "eventos",
      productName: "Confra Eventos",
      subaccount: SUBACCOUNTS.eventos,
      operation,
      year: input.year,
      month: input.month,
      serviceId: events[0] && events[0].eventId,
      serviceName: summary,
      amount: fromCents(sale),
      revenue: fromCents(sale),
      cost: fromCents(documentedCost),
      pulse: 0,
      retention: 0,
      profit: fromCents(profit),
      split: { network70: 0, operation30: 0 },
      takeRate: sale ? (profit / sale) * 100 : 0,
      lines: [
        { code: "ING", label: `Ingressos no período (${tickets})`, amount: fromCents(sale), role: "volume" },
      ]
        .concat(eventLines)
        .concat([
          { code: "COMPRA", label: "Compra de produção e estrutura", amount: fromCents(input.costDocumented ? purchase : 0), role: "cost" },
          { code: "CUSTO", label: "Custo operacional dos eventos", amount: fromCents(input.costDocumented ? unitCost : 0), role: "cost" },
          { code: "LUCRO", label: "Lucro do Confra Eventos (sem split)", amount: fromCents(profit), role: "profit" },
        ]),
      notes,
      pipeline: pipelineFor([
        `Ingressos capturados pelo Confra Eventos ${atOperation(operation)}`,
        "Cada evento vendido é classificado no catálogo e na subconta própria",
        `Venda ${fromCents(sale).toFixed(2)} − compra/custo ${fromCents(documentedCost).toFixed(2)}`,
        `Lucro ${fromCents(profit).toFixed(2)} permanece 100% no Confra Eventos, sem split 70/30`,
        "Liquidação na conta concentradora do MT",
      ]),
      dashboardRow: dashboardRow({
        operacao: operation,
        ano: input.year,
        mes: input.month,
        tpvF3: fromCents(sale),
        f3: 0,
      }),
    };
  }

  function simulatePercent(input) {
    const meta = PERCENT_PRODUCTS[input.productId];
    const operation = operationLabel(input.operation);
    const sales = toCents(input.sales);
    const rate = Number(input.rate) || meta.rate;
    const revenue = percentOf(sales, rate);
    const profit = Math.max(revenue, 0);
    const split = split70_30(profit);
    return {
      productId: input.productId,
      productName: meta.name,
      subaccount: meta.subaccount,
      operation,
      year: input.year,
      month: input.month,
      amount: fromCents(sales),
      revenue: fromCents(revenue),
      cost: 0,
      pulse: 0,
      retention: 0,
      profit: fromCents(profit),
      split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
      takeRate: sales ? (revenue / sales) * 100 : 0,
      lines: [
        { code: "VENDAS", label: "Vendas da base", amount: fromCents(sales), role: "volume" },
        { code: "PERC", label: `Percentual ${(rate * 100).toFixed(2)}%`, amount: fromCents(revenue), role: "revenue" },
        { code: "LUCRO", label: "Receita apurada", amount: fromCents(profit), role: "profit" },
        { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
        { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
      ],
      notes: [
        `${meta.name}: receita = percentual sobre as vendas da base.`,
        `Percentual aplicado: ${(rate * 100).toFixed(2)}%.`,
        `Liquidação na subconta ${meta.subaccount}.`,
      ],
      pipeline: pipelineFor([
        `Vendas da base ${atOperation(operation)} entram no ${meta.name}`,
        "Apuração do percentual sobre as vendas",
        `Receita ${fromCents(revenue).toFixed(2)} (${(rate * 100).toFixed(2)}% de ${fromCents(sales).toFixed(2)})`,
        `Lucro ${fromCents(profit).toFixed(2)} em 70% rede e 30% operação`,
        "Liquidação na conta concentradora do MT",
      ]),
      dashboardRow: dashboardRow({
        operacao: operation,
        ano: input.year,
        mes: input.month,
        tpvF3: fromCents(sales),
        f3: fromCents(split.operation30),
      }),
    };
  }

  function simulateProduct(input) {
    if (input.productId === "pix") return simulatePix(input);
    if (input.productId === "tef") return simulateTef(input);
    if (input.productId === "hub") return simulateHub(input);
    if (input.productId === "system") return simulateSystem(input);
    if (input.productId === "universidade") return simulateUniversidade(input);
    if (input.productId === "eventos") return simulateEventos(input);
    if (input.productId === "shopping") return simulatePercent(input);
    throw new Error(`Produto sem adaptador: ${input && input.productId}`);
  }

  function toDashboardPayload(settlement) {
    return {
      source: "confrapag-simulador",
      version: 1,
      generatedAt: new Date().toISOString(),
      product: settlement.productId,
      operation: settlement.operation,
      settlement,
      rows: [settlement.dashboardRow],
    };
  }

  function isDashboardRow(value) {
    return Boolean(value && typeof value === "object" && typeof value.operacao === "string" && typeof value.tpv === "number");
  }

  function parseDashboardPayload(raw) {
    if (Array.isArray(raw)) return raw.filter(isDashboardRow);
    if (!raw || typeof raw !== "object") return [];
    const rows = raw.rows || (raw.dashboard && raw.dashboard.rows);
    return Array.isArray(rows) ? rows.filter(isDashboardRow) : [];
  }

  exports.OPERATIONS = OPERATIONS;
  exports.MONTHS = MONTHS;
  exports.ENGINE_PRODUCTS = ENGINE_PRODUCTS;
  exports.PIX_SUPPLIERS = PIX_SUPPLIERS;
  exports.ALL_SUPPLIERS = ALL_SUPPLIERS;
  exports.ALL_OPERATIONS = ALL_OPERATIONS;
  exports.ALL_OPERATIONS_LABEL = ALL_OPERATIONS_LABEL;
  exports.PIX_CONTRACT = PIX_CONTRACT;
  exports.PIX_SUPPLIER_LABELS = PIX_SUPPLIER_LABELS;
  exports.TEF_BANDS = TEF_BANDS;
  exports.TEF_CONTRACT = TEF_CONTRACT;
  exports.supplierLabel = supplierLabel;
  exports.operationLabel = operationLabel;
  exports.atOperation = atOperation;
  exports.HUB_SERVICES = HUB_SERVICES;
  exports.SYSTEM_SERVICES = SYSTEM_SERVICES;
  exports.UNIVERSIDADE_COURSES = UNIVERSIDADE_COURSES;
  exports.EVENTOS_CATALOG = EVENTOS_CATALOG;
  exports.PERCENT_PRODUCTS = PERCENT_PRODUCTS;
  exports.SUBACCOUNTS = SUBACCOUNTS;
  exports.PIPELINE = PIPELINE;
  exports.toCents = toCents;
  exports.fromCents = fromCents;
  exports.roundMoney = roundMoney;
  exports.split70_30 = split70_30;
  exports.dashboardRow = dashboardRow;
  exports.simulatePix = simulatePix;
  exports.simulateTef = simulateTef;
  exports.simulateHub = simulateHub;
  exports.simulateSystem = simulateSystem;
  exports.simulateUniversidade = simulateUniversidade;
  exports.simulateEventos = simulateEventos;
  exports.simulatePercent = simulatePercent;
  exports.simulateProduct = simulateProduct;
  exports.toDashboardPayload = toDashboardPayload;
  exports.parseDashboardPayload = parseDashboardPayload;
  return exports;
})({});
