// y2k.jsx — easter egg: transforms the whole site into a 2003 Geocities vibe.
// Toggled by clicking the ✨ in the footer; persists in localStorage.
// Globals consumed: nothing — fully self-contained.
// Exposes: useY2K, Y2KOverlay (marquee + sparkle cursor + under-construction
// stripe + hit counter), Y2KToggle button.

const { useState, useEffect, useRef } = React;

// Persisted flag — same shape as useLang. Synchronously sets [data-y2k]
// before paint so we don't get a flash of the modern site on reload.
function useY2K() {
  const [on, setOn] = useState(() => {
    try { return localStorage.getItem("falbino.y2k") === "1"; }
    catch (e) { return false; }
  });
  useEffect(() => {
    try { localStorage.setItem("falbino.y2k", on ? "1" : "0"); } catch (e) {}
    document.documentElement.setAttribute("data-y2k", on ? "1" : "0");
  }, [on]);
  return [on, setOn];
}

// Sparkle cursor — emits a small ★ at the cursor every few frames, fades it
// out via CSS. Throttled to one per ~30ms so a fast mouse doesn't spawn 60/s.
function SparkleCursor() {
  const lastRef = useRef(0);
  useEffect(() => {
    const COLORS = ["#ff00ff", "#00ffff", "#ffff00", "#ff6699", "#66ff66", "#ffffff"];
    const GLYPHS = ["★", "✦", "✧", "✨", "•"];
    const onMove = (e) => {
      const now = performance.now();
      if (now - lastRef.current < 30) return;
      lastRef.current = now;
      const s = document.createElement("span");
      s.className = "y2k-spark";
      s.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      s.style.left = (e.clientX + (Math.random() - 0.5) * 14) + "px";
      s.style.top  = (e.clientY + (Math.random() - 0.5) * 14) + "px";
      s.style.color = COLORS[(Math.random() * COLORS.length) | 0];
      s.style.fontSize = (10 + Math.random() * 10) + "px";
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 900);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}

// Marquee uses the actual deprecated <marquee> tag — still rendered by every
// browser, and nothing else nails the period feel.
function Y2KOverlay() {
  // Pseudo-random but stable per-session "visitor number". Reads from
  // sessionStorage so reloads don't tick it but a fresh tab does.
  const [hits] = useState(() => {
    try {
      const cached = sessionStorage.getItem("falbino.y2k.hits");
      if (cached) return cached;
      const n = 31337 + Math.floor(Math.random() * 900);
      sessionStorage.setItem("falbino.y2k.hits", String(n));
      return String(n);
    } catch (e) { return "31337"; }
  });
  const digits = hits.padStart(7, "0").split("");

  return (
    <>
      <SparkleCursor />
      {/* Top marquee — period-accurate scrolling promo bar */}
      <div className="y2k-marquee-bar">
        {/* eslint-disable-next-line */}
        <marquee scrollamount="6" behavior="scroll" direction="left">
          {"★ "}<b>WELCOME TO FELIPE'S HOMEPAGE!!1!</b>{" ★ "}
          Best viewed in <u>Netscape Navigator 4.0</u> @ 800×600 ★ This site is{" "}
          <span className="y2k-blink">UNDER CONSTRUCTION</span> — please pardon our dust ★{" "}
          Sign my guestbook ★ ♫ Now playing: <i>midis/cosmos.mid</i> ★ Don't forget to{" "}
          <b>bookmark</b> this page!! ★ Hi mom!!! ★ Lie algebras 4 ever ✰
        </marquee>
      </div>

      {/* Under-construction caution stripe just below */}
      <div className="y2k-caution" aria-hidden="true">
        <span>⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠ UNDER CONSTRUCTION ⚠</span>
      </div>

      {/* Hit counter — fixed bottom-left, classic LCD-style digits */}
      <div className="y2k-hits" aria-hidden="true">
        <span className="y2k-hits-lbl">You are visitor #</span>
        <span className="y2k-hits-num">
          {digits.map((d, i) => <span key={i} className="y2k-hits-digit">{d}</span>)}
        </span>
      </div>
    </>
  );
}

function Y2KToggle({ on, onToggle }) {
  return (
    <button className="y2k-toggle" data-on={on ? "1" : "0"}
            onClick={onToggle}
            title={on ? "Back to 2026" : "Activate Y2K mode"}>
      <span aria-hidden="true">✨</span>
      <em>{on ? "back to 2026" : "y2k"}</em>
    </button>
  );
}

Object.assign(window, { useY2K, Y2KOverlay, Y2KToggle });
