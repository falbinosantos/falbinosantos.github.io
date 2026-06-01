// app.jsx — Felipe Albino dos Santos site
// Globals from content.js: PAPERS, GROUPS, TALKS, COPY
// Globals from tweaks-panel.jsx: useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor

const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "burgundy",
  "bg": "warm",
  "density": "regular",
  "heads": "serif"
}/*EDITMODE-END*/;

const ORCID = "0000-0002-3133-4877";
const SCHOLAR = "https://scholar.google.com/citations?user=keoMFg0AAAAJ";
const LINKEDIN = "https://www.linkedin.com/in/felipea/";
const EMAIL = "falbinosantos@gmail.com";
const CV_PDF = "assets/cv.pdf";

const ACCENTS = {
  burgundy: { c: "oklch(0.46 0.09 18)",  soft: "oklch(0.92 0.025 18)" },
  slate:    { c: "oklch(0.46 0.07 248)", soft: "oklch(0.93 0.022 248)" },
  forest:   { c: "oklch(0.46 0.07 152)", soft: "oklch(0.93 0.022 152)" },
  charcoal: { c: "oklch(0.30 0.005 60)", soft: "oklch(0.92 0.005 60)" },
};
const BGS = {
  warm:  { bg: "#faf8f4", soft: "#f3efe7", rule: "#e5e2db", ruleSoft: "#ece8e0" },
  cool:  { bg: "#f7f8fa", soft: "#eceff4", rule: "#dfe3ea", ruleSoft: "#e7eaf0" },
  paper: { bg: "#ffffff", soft: "#f5f5f4", rule: "#e7e5e2", ruleSoft: "#eeede9" },
};
const ACCENT_SWATCHES = [
  ["#8b3a3a", "#faf8f4"],
  ["#3b5273", "#faf8f4"],
  ["#3a6a4a", "#faf8f4"],
  ["#2c2c2c", "#faf8f4"],
];
const ACCENT_KEYS = ["burgundy", "slate", "forest", "charcoal"];

function useLang() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("falbino.lang") || "en"; } catch (e) { return "en"; }
  });
  useEffect(() => {
    try { localStorage.setItem("falbino.lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}

const t = (node, lang) =>
  (node && typeof node === "object" && !Array.isArray(node) && lang in node) ? node[lang] : node;

// ── Top nav ───────────────────────────────────────────────────────────────────
function TopNav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = COPY.nav;
  const items = ["research", "publications", "talks", "cv", "contact"];
  return (
    <header className={`topnav ${scrolled ? "scrolled" : ""}`}>
      <div className="topnav-inner">
        <a href="#top" className="topnav-mark">
          <span className="dot" /> Felipe Albino dos Santos
        </a>
        <nav className="topnav-links">
          {items.map((k) => (
            <a key={k} href={`#${k}`}>{t(nav[k], lang)}</a>
          ))}
        </nav>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button data-on={lang === "en" ? "1" : "0"} onClick={() => setLang("en")}>EN</button>
          <button data-on={lang === "pt" ? "1" : "0"} onClick={() => setLang("pt")}>PT</button>
        </div>
      </div>
    </header>
  );
}

// ── ORCiD badge ───────────────────────────────────────────────────────────────
function OrcidBadge() {
  return (
    <a className="orcid" href={`https://orcid.org/${ORCID}`} target="_blank" rel="noreferrer"
       title={`ORCiD ${ORCID}`} aria-label="ORCiD profile">
      <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#A6CE39"/>
        <path fill="#fff" d="M9.5 9.7h1.9V22h-1.9V9.7zM10.4 6.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2 0-.6.6-1.2 1.2-1.2zM13.7 9.7h4.6c4.4 0 6.3 3.2 6.3 6.2 0 3.3-2.5 6.2-6.2 6.2h-4.7V9.7zm1.9 10.7h2.5c3.6 0 4.4-2.7 4.4-4.5 0-2.9-1.8-4.5-4.5-4.5h-2.4v9z"/>
      </svg>
      <span>ORCiD</span>
      <em>{ORCID}</em>
    </a>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ lang }) {
  const h = COPY.hero;
  return (
    <section id="top" className="hero shell">
      <div className="hero-grid">
        <div>
          <h1 className="hero-name">Felipe Albino<br/>dos Santos</h1>
          <p className="hero-role">{t(h.role, lang)}</p>
          <p className="hero-field">{t(h.field, lang)}</p>
          <p className="hero-inst">{t(h.primary, lang)}</p>
          <div className="hero-cta">
            <a href="#research">{t(COPY.nav.research, lang)}</a>
            <a href="#publications">{t(COPY.nav.publications, lang)}</a>
            <a href="#talks">{t(COPY.nav.talks, lang)}</a>
          </div>
        </div>
        <div className="hero-aside">
          <img className="avatar" src="assets/felipe.png" alt="Felipe Albino dos Santos"/>
          <OrcidBadge />
        </div>
      </div>
    </section>
  );
}

// ── Statement ─────────────────────────────────────────────────────────────────
function Statement({ lang }) {
  const s = COPY.statement;
  return (
    <section id="research" className="shell">
      <div className="content">
        <div className="section-label">{t(s.label, lang)}</div>
        <h2 className="statement-head">{t(s.head, lang)}</h2>
        <p className="statement-body">{t(s.body, lang)}</p>
      </div>
    </section>
  );
}

// ── Publications ──────────────────────────────────────────────────────────────
function Publications({ lang, onOpen }) {
  const p = COPY.publications;

  const grouped = useMemo(() => {
    const g = { published: [], submitted: [], "in-prep": [] };
    PAPERS.forEach((paper) => { g[paper.group] && g[paper.group].push(paper); });
    return g;
  }, []);

  const order = ["published", "submitted", "in-prep"];

  return (
    <section id="publications" className="shell">
      <div className="content">
        <div className="section-label">{t(p.label, lang)}</div>
        <h2>{t(p.head, lang)}</h2>
        <p className="pipeline-intro">{t(p.intro, lang)}</p>

        {order.map((key) => grouped[key].length > 0 && (
          <div key={key} className="pub-group">
            <div className="pub-group-h">
              <span className="pub-group-label">{t(GROUPS[key], lang)}</span>
              <span className="pub-group-count">{grouped[key].length}</span>
            </div>
            <ul className="papers-list">
              {grouped[key].map((paper) => (
                <PaperRow key={paper.id} paper={paper} lang={lang} onOpen={onOpen} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function PaperRow({ paper, lang, onOpen }) {
  // For submitted papers we deliberately hide the destination journal — only
  // the "Submitted YYYY" status is shown, alongside the arXiv link.
  const showVenue = paper.group !== "submitted";
  const venueShort = showVenue ? t(paper.venueShort, lang) : null;
  const metrics = t(paper.metrics, lang);
  return (
    <li className="paper" data-group={paper.group}
        onClick={() => onOpen(paper)} role="button" tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(paper); } }}>
      <div className="paper-year">{paper.year}</div>
      <div className="paper-main">
        <h3 className="paper-title">{t(paper.title, lang)}</h3>
        <div className="paper-authors">{paper.authors}</div>
        <div className="paper-meta">
          {venueShort && <span>{venueShort}</span>}
          {metrics && <><span className="sep">·</span><span>{metrics}</span></>}
        </div>
        <div className="paper-tags">
          {paper.tags.map((tag) => <span key={tag} className="paper-tag">{tag}</span>)}
          {paper.arxiv && (
            <a className="paper-tag paper-tag-arxiv"
               href={`https://arxiv.org/abs/${paper.arxiv}`}
               target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              arXiv:{paper.arxiv} ↗
            </a>
          )}
          {paper.link && (
            <a className="paper-tag paper-tag-link"
               href={paper.link.href} target="_blank" rel="noreferrer"
               onClick={(e) => e.stopPropagation()}>
              {paper.link.label} ↗
            </a>
          )}
        </div>
      </div>
      <div className="paper-arrow">↗</div>
    </li>
  );
}

// ── Paper drawer ──────────────────────────────────────────────────────────────
function PaperDrawer({ paper, lang, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = paper ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [paper, onClose]);

  const open = !!paper;
  const p = COPY.publications;
  const cur = paper || PAPERS[0];

  return (
    <>
      <div className="drawer-backdrop" data-open={open ? "1" : "0"} onClick={onClose} />
      <aside className="drawer" data-open={open ? "1" : "0"} aria-hidden={!open}>
        <div className="drawer-head">
          <span className="drawer-code">{cur.year} · {t(GROUPS[cur.group], lang)}</span>
          <button className="drawer-close" onClick={onClose}>{t(p.close, lang)} · Esc</button>
        </div>
        <div className="drawer-body">
          <h2 className="drawer-title">{t(cur.title, lang)}</h2>

          <div className="drawer-row">
            <div className="k">{t(p.authors, lang)}</div>
            <div className="v">{cur.authors}</div>
          </div>
          {(cur.venue || cur.venueShort) && cur.group !== "submitted" && (
            <div className="drawer-row">
              <div className="k">{t(p.venue, lang)}</div>
              <div className="v">{cur.venue || t(cur.venueShort, lang)}</div>
            </div>
          )}
          {cur.metrics && (
            <div className="drawer-row">
              <div className="k">{cur.group === "published" ? (lang === "en" ? "Metrics" : "Indicadores") : (lang === "en" ? "Status" : "Status")}</div>
              <div className="v">{t(cur.metrics, lang)}</div>
            </div>
          )}
          {cur.arxiv && (
            <div className="drawer-row">
              <div className="k">arXiv</div>
              <div className="v">
                <a href={`https://arxiv.org/abs/${cur.arxiv}`} target="_blank" rel="noreferrer">
                  arXiv:{cur.arxiv} ↗
                </a>
              </div>
            </div>
          )}
          {cur.link && (
            <div className="drawer-row">
              <div className="k">{lang === "en" ? "Link" : "Link"}</div>
              <div className="v">
                <a href={cur.link.href} target="_blank" rel="noreferrer">{cur.link.label} ↗</a>
              </div>
            </div>
          )}
          <div className="drawer-row">
            <div className="k">{lang === "en" ? "Tags" : "Temas"}</div>
            <div className="v">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cur.tags.map((tag) => <span key={tag} className="paper-tag">{tag}</span>)}
              </div>
            </div>
          </div>

          <div className="drawer-abstract">
            <div className="section-label" style={{ marginBottom: 12 }}>{t(p.abstract, lang)}</div>
            {t(cur.abstract, lang)}
          </div>
        </div>
      </aside>
    </>
  );
}

// ── Talks ─────────────────────────────────────────────────────────────────────
const fmtDate = (iso, lang) => {
  const [y, m, d] = iso.split("-").map(Number);
  const months = {
    en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    pt: ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],
  };
  return `${months[lang][m-1]} ${y}`;
};

function Talks({ lang }) {
  const tk = COPY.talks;
  const upcoming = TALKS.filter((x) => x.status === "upcoming");
  const past = TALKS.filter((x) => x.status === "past");
  return (
    <section id="talks" className="shell">
      <div className="content">
        <div className="section-label">{t(tk.label, lang)}</div>
        <h2>{t(tk.head, lang)}</h2>
        <p className="talks-intro">{t(tk.intro, lang)}</p>

        {upcoming.length > 0 && (
          <>
            <div className="pub-group-h">
              <span className="pub-group-label">{t(tk.upcoming, lang)}</span>
              <span className="pub-group-count">{upcoming.length}</span>
            </div>
            <ul className="talks-list">
              {upcoming.map((talk, i) => <TalkRow key={i} talk={talk} lang={lang} />)}
            </ul>
          </>
        )}
        {past.length > 0 && (
          <>
            <div className="pub-group-h" style={{ marginTop: 32 }}>
              <span className="pub-group-label">{t(tk.past, lang)}</span>
              <span className="pub-group-count">{past.length}</span>
            </div>
            <ul className="talks-list">
              {past.map((talk, i) => <TalkRow key={i} talk={talk} lang={lang} />)}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}

function TalkRow({ talk, lang }) {
  const tk = COPY.talks;
  return (
    <li className="talk" data-status={talk.status}>
      <div className="talk-date">{fmtDate(talk.date, lang)}</div>
      <div className="talk-city">{talk.city}</div>
      <div>
        <div className="talk-title">{t(talk.title, lang)}</div>
        <div className="talk-venue">{talk.venue}</div>
      </div>
      <div className="talk-kind">{t(tk.kind[talk.kind], lang)}</div>
    </li>
  );
}

// ── CV ────────────────────────────────────────────────────────────────────────
function CV({ lang }) {
  const cv = COPY.cv;
  return (
    <section id="cv" className="shell">
      <div className="content">
        <div className="section-label">{t(cv.label, lang)}</div>
        <h2>{t(cv.head, lang)}</h2>
        <p className="cv-body">{t(cv.body, lang)}</p>
        <div className="cv-actions">
          <a className="btn" href={CV_PDF} target="_blank" rel="noreferrer">↓ {t(cv.download, lang)}</a>
          <a className="btn secondary" href="https://lattes.cnpq.br/" target="_blank" rel="noreferrer">{t(cv.lattes, lang)} ↗</a>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact({ lang }) {
  const cc = COPY.contact;
  return (
    <section id="contact" className="shell">
      <div className="content">
        <div className="section-label">{t(cc.label, lang)}</div>
        <h2>{t(cc.head, lang)}</h2>
        <div className="contact-grid">
          <div className="contact-k">{t(cc.email, lang)}</div>
          <div className="contact-v">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="contact-k">{t(cc.office, lang)}</div>
          <div className="contact-v">{t(cc.officeVal, lang)}</div>
          <div className="contact-k">{t(cc.links, lang)}</div>
          <div className="contact-v">
            <div className="links">
              <a href={`https://orcid.org/${ORCID}`} target="_blank" rel="noreferrer">ORCiD ↗</a>
              <a href={SCHOLAR} target="_blank" rel="noreferrer">Google Scholar ↗</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://arxiv.org/a/dossantos_f_1" target="_blank" rel="noreferrer">arXiv ↗</a>
              <a href="https://lattes.cnpq.br/" target="_blank" rel="noreferrer">Lattes ↗</a>
              <a href="https://www.mackenzie.br/" target="_blank" rel="noreferrer">Mackenzie ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang, y2k, onToggleY2K }) {
  return (
    <footer className="foot shell">
      <span>© 2026 Felipe Albino dos Santos</span>
      <span className="foot-mid">{t(COPY.footer.last, lang)} · {t(COPY.footer.set, lang)}</span>
      <Y2KToggle on={y2k} onToggle={() => onToggleY2K(!y2k)} />
    </footer>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useLang();
  const [activePaper, setActivePaper] = useState(null);
  const [y2k, setY2K] = useY2K();

  useEffect(() => {
    const r = document.documentElement;
    const a = ACCENTS[tweaks.accent] || ACCENTS.burgundy;
    const b = BGS[tweaks.bg] || BGS.warm;
    r.style.setProperty("--accent", a.c);
    r.style.setProperty("--accent-soft", a.soft);
    r.style.setProperty("--bg", b.bg);
    r.style.setProperty("--bg-soft", b.soft);
    r.style.setProperty("--rule", b.rule);
    r.style.setProperty("--rule-soft", b.ruleSoft);
    r.setAttribute("data-density", tweaks.density);
    r.setAttribute("data-heads", tweaks.heads);
  }, [tweaks]);

  useEffect(() => {
    const el = document.getElementById("preboot");
    if (el) { el.classList.add("hide"); setTimeout(() => el.remove(), 320); }
  }, []);

  const accentIdx = ACCENT_KEYS.indexOf(tweaks.accent);
  const onAccent = (palette) => {
    const i = ACCENT_SWATCHES.findIndex((p) => p[0] === palette[0]);
    if (i >= 0) setTweak("accent", ACCENT_KEYS[i]);
  };

  return (
    <>
      <TopNav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Statement lang={lang} />
        <Publications lang={lang} onOpen={setActivePaper} />
        <Talks lang={lang} />
        <CV lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} y2k={y2k} onToggleY2K={setY2K} />

      {y2k && <Y2KOverlay />}

      <PaperDrawer paper={activePaper} lang={lang} onClose={() => setActivePaper(null)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakColor label="Accent" value={ACCENT_SWATCHES[accentIdx >= 0 ? accentIdx : 0]}
                      options={ACCENT_SWATCHES}
                      onChange={onAccent} />
          <TweakRadio label="Background" value={tweaks.bg}
                      options={[
                        { value: "warm",  label: "Warm" },
                        { value: "cool",  label: "Cool" },
                        { value: "paper", label: "Paper" },
                      ]}
                      onChange={(v) => setTweak("bg", v)} />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakRadio label="Density" value={tweaks.density}
                      options={[
                        { value: "compact", label: "Tight" },
                        { value: "regular", label: "Regular" },
                        { value: "airy",    label: "Airy" },
                      ]}
                      onChange={(v) => setTweak("density", v)} />
          <TweakRadio label="Headings" value={tweaks.heads}
                      options={[
                        { value: "serif", label: "Serif" },
                        { value: "sans",  label: "Sans" },
                      ]}
                      onChange={(v) => setTweak("heads", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
