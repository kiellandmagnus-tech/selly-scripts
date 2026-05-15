/*
 ============================================================
  ASKER BILVASK AI SALGSKONSULENT — Embed Script
  ============================================================
  INSTALLASJON (Framer):

  1. Gå til Settings → Code → Add Script
  2. Lim inn: <script src="https://cdn.jsdelivr.net/gh/kiellandmagnus-tech/selly-scripts@main/askerbilvask-agent.js"></script>
  3. Klikk Save og Publish

  Ferdig! Chatboten dukker opp nederst til høyre på nettsiden.
 ============================================================
*/

(function () {

  // ============================================================
  //  KONFIGURASJON
  // ============================================================
  var CONFIG = {
    storeName: "Asker Bilvask",
    welcomeMessage: "Hei! Velkommen til Asker Bilvask \u2746 Jeg er her for \u00e5 hjelpe deg finne riktig vaskeprogram eller abonnement. Hva kan jeg hjelpe deg med?",
    suggestions: [
      "Hva koster abonnement?",
      "Hva er forskjellen p\u00e5 programmene?",
      "Jeg har varebil",
      "Er det mye k\u00f8?"
    ],
    primaryColor: "#1B3B6F",
    primaryHover: "#122A52",
    bubbleBackground: "#EEF2F8",
    proxyUrl: "https://vercel-ai-gateway-demo-rose-pi.vercel.app/api/chat",
    systemPrompt: `Du er en varm, hjelpsom og fremoverlent AI-salgskonsulent for Asker Bilvask \u2014 et moderne, d\u00f8gn\u00e5pent bilvaskeanlegg i Asker med over 22.000 bilvask siden oppstart. Anlegget bruker kun svanemerkede produkter og har et milj\u00f8vennlig vannrensesystem som gjenvinner opptil 90% av vannet.

Din rolle er \u00e5 hjelpe bes\u00f8kende med \u00e5 finne riktig vaskeprogram eller abonnement, svare p\u00e5 sp\u00f8rsm\u00e5l og guide dem mot bestilling.

\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
TJENESTER OG PRISER
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

ENKELTVASK PERSONBIL
URL: https://askerbilvask.no/asker-bilvask-personbil/
Fra kr 169 per vask. Betales ved selvbetjeningsskjerm i innkj\u00f8ring med kort eller Vipps, eller via startvask.no uten \u00e5 g\u00e5 ut av bilen. Anlegget er \u00e5pent 24/7.

ABONNEMENT PERSONBIL
URL: https://askerbilvask.no/asker-bilvask-personbil-abonnement/
Maks 8 vask per m\u00e5ned. Bilen gjenkjennes automatisk ved skiltskanning. Ingen bindingstid.

Premium med polering og underspyling \u2014 kr 549/mnd
Inkluderer: forvask, felgvask, underspyling, ekstra b\u00f8rstevask, polering og skyllevoks.

Standard med underspyling \u2014 kr 479/mnd
Inkluderer: forvask, felgvask, underspyling, b\u00f8rstevask og skyllevoks.

Premium b\u00f8rstel\u00f8s \u2014 kr 479/mnd
Inkluderer: h\u00f8ytrykk forvask, underspyling, 2x h\u00f8ytrykk hovedvask, skyllevoks og t\u00f8rk.

ABONNEMENT VAREBIL
URL: https://askerbilvask.no/asker-bilvask-varebil-abonnement/
Varebiler inntil 2,40m takah\u00f8yde kan bruke alle personbilprogrammene. Takah\u00f8yde 2,40m til 2,60m: kun Premium b\u00f8rstel\u00f8s til kr 649/mnd.

FIRMA-ABONNEMENT
URL: https://askerbilvask.no/firma-abonnement-bilvask/
For bedrifter med flere biler. Ta kontakt for tilbud.

ST\u00d8VSUGER
Startes via terminal ved innkj\u00f8ring, startvask.no eller QR-kode p\u00e5 st\u00f8vsugeren.

\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
SALGSTEKNIKKER
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

Anbefal alltid abonnement fremfor enkeltvask. Standard til kr 479/mnd gir 8 vask \u2014 kun kr 60 per vask mot kr 169 for enkeltvask.

INNVENDINGSH\u00c5NDTERING:
"For dyrt" \u2014 abonnementet l\u00f8nner seg etter bare 3 vask i m\u00e5neden.
"Ingen bindingstid?" \u2014 nei, du kan stoppe n\u00e5r som helst.
"Jeg har varebil" \u2014 vi vasker varebiler inntil 2,60m takah\u00f8yde.
"Er det k\u00f8?" \u2014 anlegget er \u00e5pent 24/7, morgen og sen kveld er roligst. Med abonnement \u00e5pner porten automatisk.
"Hvor lang tid tar det?" \u2014 en vask tar ca 3-5 minutter. Med abonnement kj\u00f8rer du bare rett inn.

\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
PRAKTISK
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

Adresse: R\u00f8ykenveien 70, Asker. \u00c5pent 24/7.
Kontakt: post@askerbilutleie.no eller telefon 66761890.
Abonnement: Fyll ut skjema p\u00e5 nettsiden, motta SMS fra Startvask, logg inn p\u00e5 startvask.no og sett opp betaling. Porten \u00e5pner automatisk ved skiltgjenkjenning.
Betaling: Visa, Mastercard eller Vipps.
Abonnement kan bytte reg.nr. inntil 4 ganger i \u00e5ret.

\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
TONE OG OPPF\u00d8RSEL
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

Svar alltid p\u00e5 norsk. V\u00e6r varm og direkte. Kunden er allerede p\u00e5 askerbilvask.no \u2014 si aldri "g\u00e5 til nettsiden v\u00e5r". Send kunden direkte til riktig lenke. Bruk aldri stjerner eller bindestrek. Maks 2 til 3 setninger pluss lenke.`
  };

  var history = [];
  var isOpen = false;
  var sessionId = "s_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now();

  // ---- CSS ----
  var style = document.createElement("style");
  style.textContent = `
    #breez-avatar-widget {
      position: fixed; bottom: 0; right: 24px; z-index: 9999;
      display: flex; flex-direction: column; align-items: flex-end;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    #baw-bubble {
      width: 665px; max-width: calc(100vw - 32px);
      background: #fff; border-radius: 20px 20px 20px 4px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.16);
      display: flex; flex-direction: column; overflow: hidden;
      margin-bottom: 8px; border: 1px solid #C5DEEF;
    }
    #baw-header {
      background: #1B3B6F; padding: 14px 16px;
      display: flex; align-items: center; gap: 10px; flex-shrink: 0;
    }
    #baw-header-avatar {
      width: 38px; height: 38px; border-radius: 50%;
      background: rgba(255,255,255,0.25);
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; font-weight: 900; color: white;
      font-family: Arial Black, Arial, sans-serif; letter-spacing: 1px;
      flex-shrink: 0;
    }
    #baw-header-info { flex: 1; }
    #baw-header-name { font-size: 14px; font-weight: 700; color: white; }
    #baw-header-status { font-size: 11px; color: white; opacity: 0.75; margin-top: 2px; }
    #baw-bubble-close {
      background: none; border: none; color: white;
      font-size: 22px; cursor: pointer; opacity: 0.6;
      line-height: 1; padding: 0; flex-shrink: 0;
    }
    #baw-bubble-close:hover { opacity: 1; }
    #baw-person {
      display: flex; flex-direction: column; align-items: center;
      cursor: pointer; margin-bottom: 0; position: relative;
    }
    #baw-avatar-img {
      position: relative; transition: transform 0.2s;
    }
    #baw-avatar-img svg {
      width: 130px; height: 170px;
      border-radius: 50% 50% 44% 44% / 38% 38% 62% 62%;
      display: block;
      border: 4px solid white;
      box-shadow: 0 0 0 3px #AABBD4, 0 8px 28px rgba(27,59,111,0.22);
      overflow: hidden;
    }
    #baw-person:hover #baw-avatar-img svg { transform: scale(1.03); }
    #baw-online-dot {
      position: absolute; bottom: 14px; right: 4px;
      width: 15px; height: 15px; border-radius: 50%;
      background: #1D9E75; border: 3px solid white;
    }
    #baw-name-tag {
      background: #1B3B6F; color: white;
      font-size: 11px; padding: 5px 18px; border-radius: 999px;
      font-weight: 500; letter-spacing: 0.04em; margin-top: 6px;
      box-shadow: 0 3px 10px rgba(27,59,111,0.35);
    }
    #baw-dismiss-btn {
      position: absolute; top: -8px; right: -8px;
      width: 22px; height: 22px; border-radius: 50%;
      background: #888; color: white; font-size: 14px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; z-index: 10; border: 2px solid white;
    }
    #baw-dismiss-btn:hover { background: #555; }
    #baw-speech {
      background: #fff; border: 1px solid #AABBD4;
      border-radius: 12px 12px 12px 4px;
      padding: 10px 14px; font-size: 13px; line-height: 1.5;
      color: #333; max-width: 220px; margin-bottom: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      cursor: pointer; animation: popIn 0.3s ease;
    }
    @keyframes popIn {
      from { opacity: 0; transform: translateY(8px) scale(0.95); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    #baw-messages {
      overflow-y: auto; padding: 20px 20px 12px;
      display: flex; flex-direction: column; gap: 14px;
      min-height: 280px; max-height: 560px; background: #fafafa;
    }
    .baw-msg { max-width: 86%; padding: 14px 18px; border-radius: 16px; line-height: 1.65; font-size: 17px; }
    .baw-msg.agent { background: #fff; border: 1px solid #eee; color: #222; align-self: flex-start; border-bottom-left-radius: 4px; }
    .baw-msg.user  { background: #1B3B6F; color: white; align-self: flex-end; border-bottom-right-radius: 4px; }
    .baw-msg.thinking { color: #aaa; font-style: italic; font-size: 12px; }
    #baw-sugs { display: flex; flex-wrap: wrap; gap: 7px; padding: 10px 16px 6px; background: #fafafa; }
    .baw-sug {
      background: #fff; border: 1px solid #AABBD4; border-radius: 999px;
      padding: 4px 11px; font-size: 11px; cursor: pointer; color: #1B3B6F;
      font-family: inherit; transition: background 0.15s;
    }
    .baw-sug:hover { background: #EEF2F8; }
    #baw-input-row {
      display: flex; gap: 10px; padding: 14px 16px;
      border-top: 1px solid #f0f0f0; background: #fff;
    }
    #baw-input {
      flex: 1; border: 1px solid #e0e0e0; border-radius: 20px;
      padding: 11px 18px; font-size: 16px; font-family: inherit; outline: none; color: #222;
    }
    #baw-input:focus { border-color: #1B3B6F; }
    #baw-send {
      background: #1B3B6F; border: none; border-radius: 50%;
      width: 46px; height: 46px; cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
    }
    #baw-send:hover { background: #122A52; }
    #baw-minimized {
      width: 72px; height: 72px; border-radius: 50%;
      background: #1B3B6F;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; position: relative;
      box-shadow: 0 6px 24px rgba(27,59,111,0.45);
      transition: transform 0.2s, background 0.2s;
      margin-bottom: 8px;
    }
    #baw-minimized:hover { transform: scale(1.08); background: #122A52; }
    #baw-min-dot {
      position: absolute; top: 2px; right: 2px;
      width: 10px; height: 10px; border-radius: 50%;
      background: #1D9E75; border: 2px solid white;
    }
  `;
  document.head.appendChild(style);

  // ---- HTML ----
  var html = `
    <div id="breez-avatar-widget">
      <div id="baw-bubble" style="display:none;">
        <div id="baw-header">
          <div id="baw-header-avatar">AB</div>
          <div id="baw-header-info">
            <div id="baw-header-name">Asker Bilvask Assistent</div>
            <div id="baw-header-status">&#9679; Online n\u00e5</div>
          </div>
          <button id="baw-bubble-close">\u00d7</button>
        </div>
        <div id="baw-messages"></div>
        <div id="baw-sugs"></div>
        <div id="baw-input-row">
          <input id="baw-input" type="text" placeholder="Skriv her..." autocomplete="off">
          <button id="baw-send">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>

      <div id="baw-person">
        <div id="baw-dismiss-btn" title="Lukk">\u00d7</div>
        <div id="baw-speech" style="display:none;"></div>
        <div id="baw-avatar-img">
          <svg width="130" height="170" viewBox="0 0 130 170" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="abGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#0D2347"/>
                <stop offset="100%" style="stop-color:#1B4F9A"/>
              </linearGradient>
            </defs>
            <rect width="130" height="170" fill="url(#abGrad)"/>
            <circle cx="25" cy="22" r="4" fill="#79DDFF" opacity="0.6"/>
            <circle cx="65" cy="14" r="5" fill="#79DDFF" opacity="0.75"/>
            <circle cx="105" cy="22" r="4" fill="#79DDFF" opacity="0.6"/>
            <line x1="25" y1="26" x2="25" y2="40" stroke="#79DDFF" stroke-width="2" opacity="0.5"/>
            <line x1="65" y1="19" x2="65" y2="36" stroke="#79DDFF" stroke-width="2.5" opacity="0.65"/>
            <line x1="105" y1="26" x2="105" y2="40" stroke="#79DDFF" stroke-width="2" opacity="0.5"/>
            <rect x="1" y="42" width="128" height="1" fill="rgba(255,255,255,0.12)"/>
            <text x="65" y="105" text-anchor="middle" dominant-baseline="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="52" fill="white" letter-spacing="-1">AB</text>
            <rect x="15" y="130" width="100" height="1" fill="rgba(255,255,255,0.25)"/>
            <text x="65" y="148" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.75)" letter-spacing="3">BILVASK</text>
          </svg>
          <div id="baw-online-dot"></div>
        </div>
        <div id="baw-name-tag">Asker Bilvask</div>
      </div>

      <div id="baw-minimized" style="display:none;" title="\u00c5pne chat">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;">
          <span style="font-family:Arial Black,Arial,sans-serif;font-size:14px;font-weight:900;color:white;letter-spacing:1px;line-height:1;">AB</span>
          <span style="font-family:Arial,sans-serif;font-size:7px;color:rgba(255,255,255,0.8);letter-spacing:1.5px;">BILVASK</span>
        </div>
        <div id="baw-min-dot"></div>
      </div>
    </div>
  `;
  var container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  // ---- Elements ----
  var bubble     = document.getElementById("baw-bubble");
  var msgsEl     = document.getElementById("baw-messages");
  var sugsEl     = document.getElementById("baw-sugs");
  var inputEl    = document.getElementById("baw-input");
  var sendBtn    = document.getElementById("baw-send");
  var closeBtn   = document.getElementById("baw-bubble-close");
  var person     = document.getElementById("baw-person");
  var speech     = document.getElementById("baw-speech");
  var dismissBtn = document.getElementById("baw-dismiss-btn");
  var minimized  = document.getElementById("baw-minimized");

  function openChat() {
    speech.style.display = "none";
    bubble.style.display = "flex";
    isOpen = true;
    if (msgsEl.children.length === 0) initChat();
    inputEl.focus();
    try { if (typeof gtag === "function") gtag("event", "selly_chat_opened", { page: window.location.pathname }); } catch(e) {}
  }

  person.addEventListener("click", function(e) {
    if (e.target === dismissBtn) return;
    openChat();
  });
  speech.addEventListener("click", openChat);

  dismissBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    bubble.style.display = "none";
    person.style.display = "none";
    minimized.style.display = "flex";
    isOpen = false;
    sessionStorage.setItem("selly_dismissed", "true");
  });

  minimized.addEventListener("click", function() {
    minimized.style.display = "none";
    person.style.display = "flex";
    sessionStorage.removeItem("selly_dismissed");
    openChat();
  });

  if (sessionStorage.getItem("selly_dismissed") === "true") {
    person.style.display = "none";
    minimized.style.display = "flex";
  }

  closeBtn.addEventListener("click", function() {
    bubble.style.display = "none";
    isOpen = false;
  });

  setTimeout(function() {
    if (sessionStorage.getItem("selly_dismissed") === "true") return;
    var ctx = getPageContext();
    speech.innerHTML = ctx.message.substring(0, 90) + (ctx.message.length > 90 ? "..." : "");
    speech.style.display = "block";
  }, 1800);

  function getPageContext() {
    var url = window.location.href.toLowerCase();
    if (url.includes("personbil-abonnement")) {
      return {
        message: "Hei! Du ser p\u00e5 abonnement for personbil \u2746 Vi har tre programmer fra kr 479/mnd. Bruker du bilen mye eller litt?",
        sugs: ["Mye, vil ha best mulig vask", "Passer standard for meg?", "Hva er forskjellen p\u00e5 programmene?", "Ingen bindingstid?"]
      };
    }
    if (url.includes("varebil")) {
      return {
        message: "Hei! Du ser p\u00e5 vask av varebil \u2746 Vi vasker varebiler inntil 2,60m takh\u00f8yde. Hva er takh\u00f8yden p\u00e5 bilen din?",
        sugs: ["Under 2,40m", "Mellom 2,40 og 2,60m", "Hva koster det?", "Bestill abonnement"]
      };
    }
    if (url.includes("firma")) {
      return {
        message: "Hei! Firma-abonnement er perfekt for bedrifter med flere biler \u2746 Hvor mange biler gjelder det?",
        sugs: ["2 til 5 biler", "6 til 10 biler", "Over 10 biler", "F\u00e5 tilbud"]
      };
    }
    if (url.includes("personbil") && !url.includes("abonnement")) {
      return {
        message: "Hei! Enkeltvask fra kr 169 \u2746 Visste du at abonnement l\u00f8nner seg etter bare 3 vask? Standard koster kr 479/mnd og gir 8 vask.",
        sugs: ["Hva koster abonnement?", "Bare enkeltvask denne gangen", "Hva er inkludert?", "Hvordan betaler jeg?"]
      };
    }
    return {
      message: "Hei! Velkommen til Asker Bilvask \u2746 Har du personbil eller varebil, og leter du etter enkeltvask eller abonnement?",
      sugs: CONFIG.suggestions
    };
  }

  function makeProductCard(name, price, url) {
    return "<div style=\"margin-top:14px;background:#EEF2F8;border:1.5px solid #AABBD4;border-radius:16px;overflow:hidden;box-shadow:0 3px 16px rgba(27,59,111,0.1);\">"
      + "<div style=\"padding:14px;\">"
      + "<div style=\"font-size:15px;font-weight:700;color:#1B3B6F;\">" + name + "</div>"
      + "<div style=\"font-size:14px;color:#333;margin-top:4px;font-weight:500;\">" + price + "</div>"
      + "<div style=\"margin-top:10px;\">"
      + "<a href=\"" + url + "?utm_source=selly&utm_medium=chat&utm_campaign=ai-agent\" target=\"_blank\" style=\"display:block;background:#1B3B6F;color:white;font-size:13px;font-weight:700;padding:11px 14px;border-radius:10px;text-align:center;text-decoration:none;\">Bestill her \u2192</a>"
      + "</div></div></div>";
  }

  function initChat() {
    var ctx = getPageContext();
    var welcome = document.createElement("div");
    welcome.className = "baw-msg agent";
    welcome.textContent = CONFIG.welcomeMessage;
    msgsEl.appendChild(welcome);
    setTimeout(function() {
      var d = document.createElement("div");
      d.className = "baw-msg agent";
      d.innerHTML = ctx.message + (ctx.card ? makeProductCard(ctx.card.name, ctx.card.price, ctx.card.url) : "");
      msgsEl.appendChild(d);
      msgsEl.scrollTop = msgsEl.scrollHeight;
      setSugs(ctx.sugs || CONFIG.suggestions);
    }, 600);
  }

  function addMsg(role, text) {
    var d = document.createElement("div");
    d.className = "baw-msg " + role;
    d.textContent = text;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return d;
  }

  function setSugs(list) {
    sugsEl.innerHTML = "";
    list.forEach(function(s) {
      var b = document.createElement("button");
      b.className = "baw-sug";
      b.textContent = s;
      b.onclick = function() { inputEl.value = s; sendMsg(); };
      sugsEl.appendChild(b);
    });
  }

  function sendMsg() {
    var val = inputEl.value.trim();
    if (!val) return;
    inputEl.value = "";
    sugsEl.innerHTML = "";
    addMsg("user", val);
    history.push({ role: "user", content: val });
    try { if (typeof gtag === "function") gtag("event", "selly_message_sent", { message: val, page: window.location.pathname }); } catch(e) {}
    var thinking = addMsg("agent", "Skriver...");
    thinking.classList.add("thinking");
    fetch(CONFIG.proxyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system: CONFIG.systemPrompt,
        messages: history,
        page: window.location.pathname,
        sessionId: sessionId
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      try {
        fetch("https://script.google.com/macros/s/AKfycbx_l_-wAiJvMwn4pQcGdm1hx6UEA2EDg2fR6TXcbg-DLptZVs-dNtjfLfn9GUlb8DVkJA/exec", {
          method: "POST", mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: sessionId,
            page: window.location.pathname,
            userMessage: val,
            agentReply: (data.content || []).map(function(b){ return b.text || ""; }).join("")
          })
        });
      } catch(e) {}
      var reply = (data.content || []).map(function(b) { return b.text || ""; }).join("");
      history.push({ role: "assistant", content: reply });
      thinking.classList.remove("thinking");
      var productCard = "";
      var cleanReply = reply.replace(/\[PRODUKT:([^\]]+)\]/g, function(match, inner) {
        var parts = inner.split("|");
        productCard = makeProductCard(parts[0] || "", parts[1] || "", parts[2] || "https://askerbilvask.no");
        return "";
      }).replace(/\*\*/g, "").trim();
      thinking.innerHTML = cleanReply + productCard;
      msgsEl.scrollTop = msgsEl.scrollHeight;
      setSugs(["Hva koster abonnement?", "Hvordan bestiller jeg?", "Er det mye k\u00f8?"]);
    })
    .catch(function() {
      thinking.classList.remove("thinking");
      thinking.textContent = "Beklager, noe gikk galt. Pr\u00f8v igjen eller kontakt oss direkte!";
    });
  }

  sendBtn.addEventListener("click", sendMsg);
  inputEl.addEventListener("keydown", function(e) {
    if (e.key === "Enter") sendMsg();
  });

})();
