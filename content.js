// content.js — i18n strings + structured data for Felipe's site.
// Globals: PAPERS, TALKS, COPY, GROUPS.

const PAPERS = [
  // ── PUBLISHED ──────────────────────────────────────────────────────────────
  {
    id: "sigma-2025",
    group: "published",
    year: "2025",
    title: {
      en: "Superelliptic affine Lie algebras and orthogonal polynomials",
      pt: "Álgebras de Lie afins superelípticas e polinômios ortogonais",
    },
    authors: "F. A. Santos · M. Neklyudov · V. Futorny",
    venue: "Forum of Mathematics, Sigma — Cambridge University Press",
    venueShort: "Forum Math. Sigma",
    metrics: "SJR 1.834 · JCR 1.2",
    link: { label: "Cambridge", href: "https://www.cambridge.org/core/journals/forum-of-mathematics-sigma" },
    arxiv: "2402.02947",
    tags: ["superelliptic", "orthogonal polynomials", "4th-order ODEs"],
    abstract: {
      en: "Identifies a structural mechanism — the universal central extension of superelliptic affine Lie algebras — that produces families of non-classical orthogonal polynomials satisfying explicit fourth-order linear ODEs. Includes a uniqueness theorem under a non-resonance condition and a Favard-type criterion certifying orthogonality.",
      pt: "Identifica um mecanismo estrutural — a extensão central universal de álgebras de Lie afins superelípticas — que produz famílias de polinômios ortogonais não-clássicos satisfazendo EDOs lineares explícitas de quarta ordem. Inclui um teorema de unicidade sob não-ressonância e um critério tipo Favard certificando ortogonalidade.",
    },
  },
  {
    id: "pspum-2024",
    group: "published",
    year: "2024",
    title: {
      en: "Superelliptic affine Lie algebras and non-classical orthogonal polynomials",
      pt: "Álgebras de Lie afins superelípticas e polinômios ortogonais não-clássicos",
    },
    authors: "F. A. Santos · V. Futorny · K. Zhao",
    venue: "Proceedings of Symposia in Pure Mathematics, vol. 108 — AMS",
    venueShort: "PSPUM vol. 108 (AMS)",
    metrics: null,
    link: { label: "AMS", href: "https://www.ams.org/books/pspum/" },
    arxiv: null,
    tags: ["superelliptic", "orthogonal polynomials", "survey"],
    abstract: {
      en: "Surveys the theory of universal central extensions of Krichever–Novikov algebras for super- and hyperelliptic rings, with the mechanism that produces recurrences and orthogonal polynomial families — both classical and non-classical.",
      pt: "Apresenta um panorama da teoria de extensões centrais universais de álgebras de Krichever–Novikov para anéis super- e hiperelípticos, com o mecanismo que produz recorrências e famílias de polinômios ortogonais — clássicos e não-clássicos.",
    },
  },
  {
    id: "commalg-2022",
    group: "published",
    year: "2022",
    title: {
      en: "On the universal central extension of superelliptic affine Lie algebras",
      pt: "Sobre a extensão central universal de álgebras de Lie afins superelípticas",
    },
    authors: "F. A. Santos",
    venue: "Communications in Algebra, 50(5), 2045–2055 — Taylor & Francis",
    venueShort: "Comm. Algebra 50(5)",
    metrics: "SJR 0.656",
    link: { label: "Taylor & Francis", href: "https://www.tandfonline.com/journals/lagb20" },
    arxiv: "1808.08570",
    tags: ["UCE", "Kähler differentials", "sole author"],
    abstract: {
      en: "Computes the universal central extension of the current algebra g ⊗ R, with R = C[t, t⁻¹, u]/(uᵐ − p(t)). Uses Kassel's identification C ≃ Ω¹_R/dR and the Z/m-grading induced by u to extract an explicit finite basis for the centre in terms of t⁻¹dt and t⁻ⁱuˡdt, with a closed formula for its dimension.",
      pt: "Calcula a extensão central universal da álgebra de correntes g ⊗ R, com R = C[t, t⁻¹, u]/(uᵐ − p(t)). Usa a identificação de Kassel C ≃ Ω¹_R/dR e a graduação Z/m induzida por u para extrair uma base finita explícita do centro em termos de t⁻¹dt e t⁻ⁱuˡdt, com fórmula fechada para sua dimensão.",
    },
  },

  // ── SUBMITTED ──────────────────────────────────────────────────────────────────
  // Submitted destinations are intentionally hidden — only the
  // "Submitted YYYY" status + arXiv link are surfaced.
  {
    id: "sub-dictionary",
    group: "submitted",
    year: "2026",
    title: {
      en: "Dictionary between UCE cocycles and orthogonal polynomials",
      pt: "Dicionário entre cociclos da UCE e polinômios ortogonais",
    },
    authors: "F. A. Santos · M. Neklyudov · V. Futorny",
    venue: null, venueShort: null, link: null,
    metrics: { en: "Submitted 2026", pt: "Submetido em 2026" },
    arxiv: "2605.02530",
    tags: ["UCE", "cocycles", "orthogonal polynomials", "Krichever–Novikov"],
    abstract: {
      en: "Builds an explicit dictionary between the cocycle data of the universal central extension of superelliptic Krichever–Novikov algebras — on both the current and derivation sides — and the three-term recurrences of classical and non-classical orthogonal polynomial families. The Der(A) half of the dictionary is treated systematically for the first time.",
      pt: "Constrói um dicionário explícito entre os dados de cociclo da extensão central universal de álgebras de Krichever–Novikov superelípticas — tanto no lado de correntes quanto no de derivações — e as recorrências de três termos das famílias clássicas e não-clássicas de polinômios ortogonais. O lado Der(A) do dicionário é tratado sistematicamente pela primeira vez.",
    },
  },
  {
    id: "sub-freefield",
    group: "submitted",
    year: "2026",
    title: {
      en: "Free field realizations of superelliptic affine Lie algebras",
      pt: "Realizações por campos livres de álgebras de Lie afins superelípticas",
    },
    authors: "F. A. Santos",
    venue: null, venueShort: null, link: null,
    metrics: { en: "Submitted 2026", pt: "Submetido em 2026" },
    arxiv: "2604.09461",
    tags: ["free fields", "Wakimoto", "sl₂", "vertex operators"],
    abstract: {
      en: "Constructs Wakimoto-type free field realizations for superelliptic affine Lie algebras associated with coordinate rings of u^m = p(t), in the case g = sl₂. Explicit operators are built on a tensor product of a βγ ghost system and a Heisenberg algebra, with the three current generators realized by explicit vertex operators; includes a complete obstruction theory and identifies the twisted-module setting as the necessary framework for positive results.",
      pt: "Constrói realizações por campos livres do tipo Wakimoto para álgebras de Lie afins superelípticas associadas aos anéis de coordenadas u^m = p(t), no caso g = sl₂. Operadores explícitos são definidos no produto tensorial de um sistema de fantasmas βγ e uma álgebra de Heisenberg, com os três geradores de corrente realizados por operadores de vértice explícitos; inclui uma teoria de obstrução completa e identifica o contexto de módulos torcidos como o cenário necessário para resultados positivos.",
    },
  },
  {
    id: "sub-sugawara",
    group: "submitted",
    year: "2026",
    title: {
      en: "A Sugawara–Legendre mechanism for the hyperelliptic Heisenberg algebra",
      pt: "Um mecanismo de Sugawara–Legendre para a álgebra de Heisenberg hiperelíptica",
    },
    authors: "F. A. Santos",
    venue: null, venueShort: null, link: null,
    metrics: { en: "Submitted 2026", pt: "Submetido em 2026" },
    arxiv: "2605.06090",
    tags: ["φ-Verma", "Heisenberg", "Sugawara", "Legendre"],
    abstract: {
      en: "Studies the φ-Verma modules of the Heisenberg subalgebra Hₘ of the universal central extension of sl₂ ⊗ Aₘ, where Aₘ is the coordinate ring of the superelliptic curve uᵐ = P(t), and asks how the orthogonal polynomial families that arise in the centre relations are controlled by the module theory of Hₘ. In the hyperelliptic case (m = 2, r = 1) three theorems are proved: the canonical contravariant (Shapovalov) form is diagonal in the polynomial basis determined by the cocycle, with Legendre squared norms hₙ = 2/(2n+1); M(φ) is irreducible iff κ₀ ≠ 0; corresponding statements for m ≥ 3 are recorded as conjectures.",
      pt: "Estuda os módulos φ-Verma da subálgebra de Heisenberg Hₘ da extensão central universal de sl₂ ⊗ Aₘ, onde Aₘ é o anel de coordenadas da curva superelíptica uᵐ = P(t), e pergunta como as famílias de polinômios ortogonais que surgem nas relações do centro são controladas pela teoria de módulos de Hₘ. No caso hiperelíptico (m = 2, r = 1) provam-se três teoremas: a forma canônica contravariante (Shapovalov) é diagonal na base polinomial determinada pelo cociclo, com normas ao quadrado de Legendre hₙ = 2/(2n+1); M(φ) é irredutível sse κ₀ ≠ 0; afirmações correspondentes para m ≥ 3 ficam registradas como conjecturas.",
    },
  },
  {
    id: "sub-phiverma",
    group: "submitted",
    year: "2026",
    title: {
      en: "Irreducibility of φ-Verma modules for a hyperelliptic Heisenberg algebra",
      pt: "Irredutibilidade de módulos φ-Verma para uma álgebra de Heisenberg hiperelíptica",
    },
    authors: "F. A. Santos",
    venue: null, venueShort: null, link: null,
    metrics: { en: "Submitted 2026", pt: "Submetido em 2026" },
    arxiv: "1709.05663",
    tags: ["φ-Verma", "Heisenberg", "irreducibility"],
    abstract: {
      en: "Establishes a necessary-and-sufficient operational criterion: under p-admissibility of the polarisation φ and the natural specialisation of central characters, the φ-Verma module over the hyperelliptic Heisenberg algebra is irreducible if and only if κ₀ ≠ 0.",
      pt: "Estabelece um critério operacional necessário e suficiente: sob p-admissibilidade da polarização φ e a especialização natural dos caracteres centrais, o módulo φ-Verma sobre a álgebra de Heisenberg hiperelíptica é irredutível se, e somente se, κ₀ ≠ 0.",
    },
  },

  // ── IN PREPARATION ─────────────────────────────────────────────────────────
  {
    id: "kronecker",
    group: "in-prep",
    year: "2026",
    title: {
      en: "Irreducibility under Kronecker substitutions",
      pt: "Irredutibilidade sob substituições do tipo Kronecker",
    },
    authors: "F. A. Santos · V. Futorny · M. Neklyudov",
    venue: null,
    venueShort: { en: "In preparation", pt: "Em preparação" },
    metrics: { en: "Manuscript in finalisation", pt: "Manuscrito em finalização" },
    link: null,
    arxiv: null,
    tags: ["Kronecker", "irreducibility", "polynomials"],
    abstract: {
      en: "When does a Kronecker-type substitution preserve polynomial irreducibility? Provides operational criteria in controlled classes, with a mixed-radix encoding paired with a geometric reading via moment curves.",
      pt: "Quando uma substituição do tipo Kronecker preserva a irredutibilidade polinomial? Critérios operacionais em classes controladas, com codificação mixed-radix e leitura geométrica via curvas monomiais.",
    },
  },
  {
    id: "weyl-invariants",
    group: "in-prep",
    year: "2026",
    title: {
      en: "Modules over invariant subalgebras of Weyl algebras",
      pt: "Módulos sobre subálgebras invariantes de álgebras de Weyl",
    },
    authors: "F. A. Santos · J. Schwarz",
    venue: null,
    venueShort: { en: "In preparation", pt: "Em preparação" },
    metrics: { en: "Manuscript in finalisation", pt: "Manuscrito em finalização" },
    link: null,
    arxiv: null,
    tags: ["Weyl algebras", "invariants", "Gelfand–Kirillov"],
    abstract: {
      en: "Detects and exhibits non-holonomic modules arising from S₂-invariants of Weyl algebras, with computational validations of Gelfand–Kirillov dimension on concrete examples.",
      pt: "Detecta e exibe módulos não-holônomicos oriundos dos S₂-invariantes de álgebras de Weyl, com validações computacionais da dimensão de Gelfand–Kirillov em exemplos concretos.",
    },
  },
  {
    id: "ca-templates",
    group: "in-prep",
    year: "2026",
    title: {
      en: "Templates for cellular automata",
      pt: "Templates para autômatos celulares",
    },
    authors: "F. A. Santos · P. P. Balbi · E. Ruivo",
    venue: null,
    venueShort: { en: "In preparation", pt: "Em preparação" },
    metrics: { en: "Manuscript in finalisation", pt: "Manuscrito em finalização" },
    link: null,
    arxiv: null,
    tags: ["cellular automata", "templates", "computation"],
    abstract: {
      en: "Defines a Cellular-Automata Template as an algebraic object that represents families of rules over the intractable space k^(k^(2r+1)), enabling symbolic search and classification. Includes formal properties (equivalence, union, intersection, restriction) and a computational pipeline.",
      pt: "Define um Cellular-Automata Template como objeto algébrico que representa famílias de regras sobre o espaço intratável k^(k^(2r+1)), permitindo busca e classificação simbólica. Inclui propriedades formais (equivalência, união, interseção, restrição) e um pipeline computacional.",
    },
  },
];

const GROUPS = {
  published:  { en: "Published",          pt: "Publicado" },
  submitted:  { en: "Submitted",          pt: "Submetido" },
  "in-prep":  { en: "In preparation",     pt: "Em preparação" },
};

const TALKS = [
  { date: "2027-01-15", city: "Bujumbura, Burundi",   venue: "Workshop on Representation Theory",                     title: { en: "TBA",                                                          pt: "A definir" },                                                       kind: "invited",  status: "upcoming" },
  { date: "2026-07-08", city: "São Carlos, Brazil",   venue: "Escola de Álgebra",                                     title: { en: "Superelliptic Lie algebras II",                                pt: "Álgebras de Lie superelípticas II" },                               link: "https://algebra2026.icmc.usp.br", kind: "invited",  status: "upcoming" },
  { date: "2024-11-12", city: "São Paulo, Brazil",    venue: "Workshop de Tendências Tecnológicas",                   title: { en: "A brief introduction to cellular automata",                    pt: "Uma breve introdução aos autômatos celulares" },                    kind: "workshop", status: "past" },
  { date: "2023-08-22", city: "Sumy, Ukraine",        venue: "Ukraine Algebra Conference",                            title: { en: "Superelliptic affine Lie algebras and non-classical orthogonal polynomials", pt: "Álgebras de Lie afins superelípticas e polinômios ortogonais não-clássicos" }, kind: "talk",     status: "past" },
  { date: "2022-09-14", city: "São Paulo, Brazil",    venue: "I Encontro Paulista da Pós-Graduação em Matemática",    title: { en: "Superelliptic affine Lie algebras and non-classical orthogonal polynomials", pt: "Álgebras de Lie superelípticas afins e polinômios ortogonais não-clássicos" }, kind: "talk",     status: "past" },
  { date: "2021-11-04", city: "San Salvador, El Salvador", venue: "Jornada de Álgebra y Aplicaciones",                title: { en: "Superelliptic affine Lie algebras and non-classical orthogonal polynomials", pt: "Álgebras de Lie afins superelípticas e polinômios ortogonais não-clássicos" }, kind: "talk",     status: "past" },
  { date: "2018-08-01", city: "Rio de Janeiro, Brazil", venue: "International Congress of Mathematicians",            title: { en: "Irreducible φ-Verma modules for hyperelliptic Heisenberg algebras", pt: "Módulos φ-Verma irredutíveis para álgebras de Heisenberg hiperelípticas" }, kind: "poster",   status: "past" },
];

const COPY = {
  nav: {
    about:        { en: "About",        pt: "Sobre" },
    research:     { en: "Research",     pt: "Pesquisa" },
    problems:     { en: "Problems",     pt: "Problemas" },
    publications: { en: "Publications", pt: "Publicações" },
    talks:        { en: "Talks",        pt: "Palestras" },
    cv:           { en: "CV",           pt: "Currículo" },
    contact:      { en: "Contact",      pt: "Contato" },
  },
  hero: {
    role:      { en: "Professor · Universidade Presbiteriana Mackenzie",
                 pt: "Professor · Universidade Presbiteriana Mackenzie" },
    field:     { en: "Lie algebras · Representation theory · Universal central extensions",
                 pt: "Álgebras de Lie · Teoria de representações · Extensões centrais universais" },
    primary:   { en: "Faculdade de Computação e Informática · São Paulo",
                 pt: "Faculdade de Computação e Informática · São Paulo" },
    orcidLabel: "ORCiD",
  },
  about: {
    label: { en: "About", pt: "Sobre" },
    head: {
      en: "Mathematician, São Paulo.",
      pt: "Matemático, São Paulo.",
    },
    body: {
      en: "Felipe Albino dos Santos is a mathematician based in São Paulo, where he teaches at the Faculdade de Computação e Informática of the Universidade Presbiteriana Mackenzie. His research lives on the border between algebra and analysis: he studies the representation theory of infinite-dimensional Lie algebras and the way their structural invariants give rise to concrete analytic objects — orthogonal polynomials, three-term recurrences, and differential equations. He works closely with collaborators in Brazil and abroad, and keeps a standing interest in computational questions, from cellular automata to symbolic search.",
      pt: "Felipe Albino dos Santos é matemático em São Paulo, onde leciona na Faculdade de Computação e Informática da Universidade Presbiteriana Mackenzie. Sua pesquisa vive na fronteira entre álgebra e análise: estuda a teoria de representações de álgebras de Lie de dimensão infinita e o modo como seus invariantes estruturais dão origem a objetos analíticos concretos — polinômios ortogonais, recorrências de três termos e equações diferenciais. Colabora com pesquisadores no Brasil e no exterior e mantém um interesse constante por questões computacionais, de autômatos celulares à busca simbólica.",
    },
  },
  problems: {
    label: { en: "Problems", pt: "Problemas" },
    head: {
      en: "Problems I think about.",
      pt: "Problemas que me interessam.",
    },
    intro: {
      en: "A few questions that motivate the work — some active, some long-term.",
      pt: "Algumas perguntas que motivam o trabalho — umas ativas, outras de longo prazo.",
    },
    items: [
      {
        en: "How do the universal central extensions of superelliptic Krichever–Novikov algebras encode entire families of orthogonal polynomials?",
        pt: "Como as extensões centrais universais de álgebras de Krichever–Novikov superelípticas codificam famílias inteiras de polinômios ortogonais?",
      },
      {
        en: "When is a φ-Verma module over a hyperelliptic Heisenberg algebra irreducible — and what controls it?",
        pt: "Quando um módulo φ-Verma sobre uma álgebra de Heisenberg hiperelíptica é irredutível — e o que o controla?",
      },
      {
        en: "Can free-field (Wakimoto-type) realizations be built for superelliptic affine Lie algebras beyond sl₂?",
        pt: "É possível construir realizações por campos livres (tipo Wakimoto) para álgebras de Lie afins superelípticas além de sl₂?",
      },
      {
        en: "Does the structural–analytic bridge extend to orthogonal and twisted Yangians?",
        pt: "A ponte estrutural–analítica se estende a Yangians ortogonais e torcidos?",
      },
      {
        en: "When does a Kronecker-type substitution preserve polynomial irreducibility?",
        pt: "Quando uma substituição do tipo Kronecker preserva a irredutibilidade polinomial?",
      },
    ],
  },
  statement: {
    label: { en: "Research", pt: "Pesquisa" },
    head: {
      en: "Curves, central extensions, and the polynomials they produce.",
      pt: "Curvas, extensões centrais e os polinômios que elas produzem.",
    },
    body: {
      en: "Felipe studies superelliptic Krichever–Novikov algebras and their representations. By describing the universal central extension of g ⊗ R explicitly — through generators and relations on R = C[t, t⁻¹, u]/(uᵐ − p(t)) — he extracts concrete consequences: three-term recurrences and fourth-order linear ODEs that produce non-classical orthogonal polynomials, and operational irreducibility criteria for φ-Verma modules over hyperelliptic Heisenberg algebras. The longer-term aim is to carry this structural–analytic bridge into the setting of orthogonal and twisted Yangians.",
      pt: "Felipe estuda álgebras de Krichever–Novikov superelípticas e suas representações. Descrevendo explicitamente a extensão central universal de g ⊗ R — por geradores e relações sobre R = C[t, t⁻¹, u]/(uᵐ − p(t)) — extrai consequências concretas: recorrências de três termos e EDOs lineares de quarta ordem que produzem polinômios ortogonais não-clássicos, e critérios operacionais de irredutibilidade para módulos φ-Verma sobre álgebras de Heisenberg hiperelípticas. A meta de longo prazo é levar essa ponte estrutural-analítica ao contexto de Yangians ortogonais e torcidos.",
    },
  },
  publications: {
    label: { en: "Publications", pt: "Publicações" },
    head: {
      en: "Published work and preprints.",
      pt: "Trabalhos publicados e pré-prints.",
    },
    intro: {
      en: "Listed by year. arXiv links and journal pages are attached where available.",
      pt: "Listados por ano. Links no arXiv e nas páginas dos periódicos quando disponíveis.",
    },
    open: { en: "Read more", pt: "Saber mais" },
    close: { en: "Close", pt: "Fechar" },
    abstract: { en: "Summary", pt: "Resumo" },
    venue:    { en: "Venue",   pt: "Veículo" },
    authors:  { en: "Authors", pt: "Autores" },
  },
  talks: {
    label: { en: "Talks", pt: "Palestras" },
    head: {
      en: "Selected talks and events.",
      pt: "Palestras e eventos selecionados.",
    },
    intro: {
      en: "A curated set of recent and upcoming appearances. Slides on request.",
      pt: "Uma seleção de apresentações recentes e futuras. Slides sob solicitação.",
    },
    kind: {
      invited:    { en: "Invited",    pt: "Convidado" },
      talk:       { en: "Talk",       pt: "Palestra" },
      workshop:   { en: "Workshop",   pt: "Oficina" },
      poster:     { en: "Poster",     pt: "Pôster" },
    },
    upcoming: { en: "Upcoming", pt: "Próximas" },
    past:     { en: "Past",     pt: "Anteriores" },
  },
  cv: {
    label: { en: "Curriculum vitae", pt: "Currículo" },
    head:  { en: "Curriculum vitae.", pt: "Currículo." },
    body:  {
      en: "A complete academic record — formation, positions, publications, talks, advising, and service — is available as a downloadable PDF.",
      pt: "Um registro acadêmico completo — formação, posições, publicações, palestras, orientações e serviço — está disponível em PDF para download.",
    },
    download: { en: "Download CV (PDF)", pt: "Baixar currículo (PDF)" },
    lattes:   { en: "Lattes profile",     pt: "Currículo Lattes" },
  },
  contact: {
    label: { en: "Contact", pt: "Contato" },
    head:  { en: "Get in touch.", pt: "Entre em contato." },
    email: { en: "Email", pt: "E-mail" },
    office: { en: "Office", pt: "Endereço" },
    officeVal: {
      en: "Universidade Presbiteriana Mackenzie · Faculdade de Computação e Informática · São Paulo, Brazil",
      pt: "Universidade Presbiteriana Mackenzie · Faculdade de Computação e Informática · São Paulo, Brasil",
    },
    links: { en: "Profiles", pt: "Perfis" },
  },
  footer: {
    last: { en: "Last updated May 2026", pt: "Atualizado em maio de 2026" },
    set:  { en: "Set in Newsreader and DM Sans.", pt: "Composto em Newsreader e DM Sans." },
  },
};

Object.assign(window, { PAPERS, GROUPS, TALKS, COPY });
