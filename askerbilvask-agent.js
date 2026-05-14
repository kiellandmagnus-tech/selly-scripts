/*
 ============================================================
  BREEZ AI SALGSAGENT — Shopify Embed Script
  ============================================================
  INSTALLASJON (3 steg):

  1. Gå til Shopify Admin → Online Store → Themes → Edit code
  2. Åpne "theme.liquid" og lim inn hele denne filen
     rett FØR </body> taggen
  3. Bytt ut KONFIGURASJON nedenfor med kundens info

  Ferdig! Boten dukker opp nederst til høyre på nettsiden.
 ============================================================
*/

(function () {

  // ============================================================
  //  KONFIGURASJON — bytt ut dette per kunde
  // ============================================================
  var CONFIG = {

    // Butikkens navn (vises i chat-headeren)
    storeName: "Asker Bilvask",

    // Velkomstmelding når chatten åpnes
    welcomeMessage: "Hei! Velkommen til Asker Bilvask ✦ Jeg er her for å hjelpe deg finne riktig vaskeprogram eller abonnement. Hva kan jeg hjelpe deg med?",

    // Forslag-knapper som vises ved start
    suggestions: [
      "Hva koster abonnement?",
      "Hva er forskjellen på programmene?",
      "Jeg har varebil",
      "Er det mye kø?"
    ],

    // Farger — tilpass til kundens merkevare
    primaryColor: "#1B3B6F",
    primaryHover: "#1B3B6F",
    bubbleBackground: "#EEF2F8",

    // URL til din Vercel proxy — bytt ut etter deploy
    proxyUrl: "https://vercel-ai-gateway-demo-rose-pi.vercel.app/api/chat",

    // Systemtekst — beskriv butikken og produktene
    // Bytt ut denne med kundens produktinfo
    systemPrompt: `Du er en varm, hjelpsom og fremoverlent AI-salgskonsulent for Asker Bilvask — et moderne, døgnåpent bilvaskeanlegg i Asker med over 22.000 bilvask siden oppstart. Anlegget bruker kun svanemerkede produkter og har et miljøvennlig vannrensesystem som gjenvinner opptil 90% av vannet.

Din rolle er å hjelpe besøkende med å finne riktig vaskeprogram eller abonnement, svare på spørsmål og guide dem mot bestilling.

─────────────────────────────────────
TJENESTER OG PRISER
─────────────────────────────────────

ENKELTVASK PERSONBIL
URL: https://askerbilvask.no/asker-bilvask-personbil/
Fra kr 169 per vask. Betales ved selvbetjeningsskjerm i innkjøring med kort eller Vipps, eller via startvask.no uten å gå ut av bilen. Anlegget er åpent 24/7.

ABONNEMENT PERSONBIL
URL: https://askerbilvask.no/asker-bilvask-personbil-abonnement/
Maks 8 vask per måned. Bilen gjenkjennes automatisk ved skiltskanning. Ingen bindingstid.

Premium med polering og underspyling — kr 549/mnd
Inkluderer: forvask, felgvask, underspyling, ekstra børstevask, polering og skyllevoks. Skiboks skannes automatisk.

Standard med underspyling — kr 479/mnd
Inkluderer: forvask, felgvask, underspyling, børstevask og skyllevoks. Skiboks skannes automatisk.

Premium børsteløs — kr 479/mnd
Inkluderer: høytrykk forvask, underspyling, 2x høytrykk hovedvask, skyllevoks og tørk. Skiboks skannes automatisk.

ABONNEMENT VAREBIL
URL: https://askerbilvask.no/asker-bilvask-varebil-abonnement/
Varebiler inntil 2,40m takhøyde kan bruke alle personbilprogrammene. Takhøyde 2,40m til 2,60m: kun Premium børsteløs til kr 649/mnd.

FIRMA-ABONNEMENT
URL: https://askerbilvask.no/firma-abonnement-bilvask/
For bedrifter med flere biler. Ta kontakt for tilbud.

STØVSUGER
Startes via terminal ved innkjøring, startvask.no eller QR-kode på støvsugeren.

─────────────────────────────────────
SALGSTEKNIKKER
─────────────────────────────────────

ANBEFAL ABONNEMENT FREMFOR ENKELTVASK:
Abonnementet lønner seg etter bare 3 vask. Standard til kr 479/mnd gir 8 vask — det er kun kr 60 per vask. Sammenlign med enkeltvask fra kr 169.

INNVENDINGSHÅNDTERING:
"For dyrt" — abonnementet lønner seg etter bare 3 vask i måneden. Kr 479 delt på 8 vask er kr 60 per vask.
"Ingen bindingstid?" — nei, du kan stoppe abonnementet når som helst.
"Jeg har varebil" — vi vasker varebiler inntil 2,60m takhøyde.
"Er det kø?" / "Mye kø?" — anlegget er åpent 24/7 så du kan velge rolige tidspunkt. Morgen og sen kveld er roligst. Med abonnement åpner porten automatisk så du slipper å vente ved terminal.
"Hvor lang tid tar det?" — en vask tar ca 3-5 minutter. Med abonnement og skiltgjenkjenning kjører du bare rett inn.

KRYSSALG:
Nevn støvsugeren når kunden bestiller abonnement.
For bedrifter: nevn firma-abonnement.

─────────────────────────────────────
HVORDAN BESTILLE
─────────────────────────────────────

Abonnement: Fyll ut skjema på nettsiden og motta SMS fra Startvask med innloggingskode. Logg inn på startvask.no, bekreft og sett opp betaling. Kjør deretter inn mot porten og stopp 2 meter fra den. Porten åpner automatisk ved skiltgjenkjenning.

Enkeltvask: Betal ved selvbetjeningsskjerm i innkjøring eller via startvask.no.

Betaling: Visa, Mastercard eller Vipps.

─────────────────────────────────────
PRAKTISK
─────────────────────────────────────

Adresse: Røykenveien 70, Asker
Åpent: 24/7
Kontakt: post@askerbilutleie.no eller telefon 66761890
Abonnement kan bytte reg.nr. inntil 4 ganger i året.

KØ OG VENTETID:
Anlegget er åpent 24/7 så du kan alltid velge tidspunkt med lite trafikk. Morgentimer og sen kveld er roligst. Med abonnement og skiltgjenkjenning slipper du å stå ved terminal og vente. Porten åpner automatisk når hallen er ledig. En vask tar ca 3-5 minutter.

─────────────────────────────────────
TONE OG OPPFØRSEL
─────────────────────────────────────

Svar alltid på norsk. Vær varm og direkte som den beste ansatte i anlegget. Still ETT spørsmål for å kartlegge behov, anbefal deretter konkret. Kunden er allerede på askerbilvask.no — si aldri "gå til nettsiden vår". Send kunden direkte til riktig lenke. Bruk aldri stjerner eller bindestrek — skriv ren tekst. Maks 2 til 3 setninger pluss lenke.`

  };
  // ============================================================
  //  SLUTT KONFIGURASJON
  // ============================================================


  // Ikke rediger under denne linjen med mindre du vet hva du gjør

  var history = [];
  var isOpen = false;
  var sessionId = "s_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now();

  // ---- Inject CSS ----
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
      margin-bottom: 8px; position: relative;
      border: 1px solid #C5EEFF;
    }



    #baw-header {
      background: #1B3B6F; padding: 14px 16px;
      display: flex; align-items: center; gap: 10px;
      flex-shrink: 0;
    }
    #baw-header-avatar {
      width: 38px; height: 38px; border-radius: 50%;
      background: rgba(255,255,255,0.35);
      display: flex; align-items: center; justify-content: center;
      font-size: 17px; font-weight: bold; color: white; flex-shrink: 0;
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
    #baw-avatar-img img, #baw-avatar-img svg {
      width: 130px; height: 170px;
      border-radius: 50% 50% 44% 44% / 38% 38% 62% 62%;
      display: block;
      border: 4px solid white;
      box-shadow: 0 0 0 3px #AABBD4, 0 8px 28px rgba(27,59,111,0.22);
      overflow: hidden;
    }
    #baw-person:hover #baw-avatar-img img,
    #baw-person:hover #baw-avatar-img svg { transform: scale(1.03); transition: transform 0.2s; }
    #baw-online-dot {
      position: absolute; bottom: 14px; right: 4px;
      width: 15px; height: 15px; border-radius: 50%;
      background: #1D9E75; border: 3px solid white;
    }
    #baw-name-tag {
      background: ${CONFIG.primaryColor}; color: white;
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
      transition: background 0.2s;
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
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    #baw-messages {
      overflow-y: auto; padding: 20px 20px 12px;
      display: flex; flex-direction: column; gap: 14px;
      min-height: 280px; max-height: 560px; background: #fafafa;
    }

    .baw-msg { max-width: 86%; padding: 14px 18px; border-radius: 16px; line-height: 1.65; font-size: 17px; }
    .baw-msg.agent {
      background: #fff; border: 1px solid #eee; color: #222;
      align-self: flex-start; border-bottom-left-radius: 4px;
    }
    .baw-msg.user {
      background: ${CONFIG.primaryColor}; color: white;
      align-self: flex-end; border-bottom-right-radius: 4px;
    }
    .baw-msg.thinking { color: #aaa; font-style: italic; font-size: 12px; }

    #baw-sugs {
      display: flex; flex-wrap: wrap; gap: 7px;
      padding: 10px 16px 6px; background: #fafafa;
    }
    .baw-sug {
      background: #fff; border: 1px solid #f0d8e4; border-radius: 999px;
      padding: 4px 11px; font-size: 11px; cursor: pointer; color: ${CONFIG.primaryColor};
      font-family: inherit; transition: background 0.15s;
    }
    .baw-sug:hover { background: #fdf0f5; }

    #baw-input-row {
      display: flex; gap: 10px; padding: 14px 16px;
      border-top: 1px solid #f0f0f0; background: #fff;
    }
    #baw-input {
      flex: 1; border: 1px solid #e0e0e0; border-radius: 20px;
      padding: 11px 18px; font-size: 16px; font-family: inherit;
      outline: none; color: #222;
    }
    #baw-input:focus { border-color: ${CONFIG.primaryColor}; }
    #baw-send {
      background: ${CONFIG.primaryColor}; border: none; border-radius: 50%;
      width: 46px; height: 46px; cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s;
    }
    #baw-send:hover { background: ${CONFIG.primaryHover}; }

    @keyframes popIn {
      from { opacity: 0; transform: translateY(8px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }




    #baw-minimized {
      width: 72px; height: 72px; border-radius: 50%;
      background: ${CONFIG.primaryColor};
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; position: relative;
      box-shadow: 0 6px 24px rgba(27,59,111,0.45);
      transition: transform 0.2s, background 0.2s;
      margin-bottom: 8px;
    }
    #baw-minimized svg { width: 30px; height: 30px; }
    #baw-minimized:hover { transform: scale(1.08); background: ${CONFIG.primaryHover}; }

    #baw-min-dot {
      position: absolute; top: 2px; right: 2px;
      width: 10px; height: 10px; border-radius: 50%;
      background: #1D9E75; border: 2px solid white;
    }
  `;
  document.head.appendChild(style);

  // ---- Inject HTML ----
  var html = `
    <div id="breez-avatar-widget">

      <div id="baw-bubble" style="display:none;">
        <div id="baw-header">
          <div id="baw-header-avatar">✦</div>
          <div id="baw-header-info">
            <div id="baw-header-name">${CONFIG.storeName} Assistent</div>
            <div id="baw-header-status">● Online nå</div>
          </div>
          <div id="baw-bubble-close">×</div>
        </div>
        <div id="baw-messages"></div>
        <div id="baw-sugs"></div>
        <div id="baw-input-row">
          <input id="baw-input" type="text" placeholder="Skriv her..." autocomplete="off">
          <button id="baw-send">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#1a3a4a"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>

      <div id="baw-person">
        <div id="baw-dismiss-btn" title="Lukk">×</div>
        <div id="baw-speech" style="display:none;"></div>
        <div id="baw-avatar-img">
          <svg width="130" height="170" viewBox="0 0 130 170" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0D2347"/><stop offset="100%" style="stop-color:#1A4A8A"/></linearGradient></defs><rect width="130" height="170" fill="url(#bg)"/><circle cx="32" cy="22" r="4" fill="#79DDFF" opacity="0.6"/><circle cx="65" cy="14" r="5" fill="#79DDFF" opacity="0.7"/><circle cx="98" cy="22" r="4" fill="#79DDFF" opacity="0.6"/><circle cx="48" cy="18" r="3" fill="#79DDFF" opacity="0.4"/><circle cx="82" cy="16" r="3" fill="#79DDFF" opacity="0.4"/><line x1="32" y1="26" x2="32" y2="38" stroke="#79DDFF" stroke-width="2" opacity="0.5"/><line x1="65" y1="19" x2="65" y2="34" stroke="#79DDFF" stroke-width="2.5" opacity="0.6"/><line x1="98" y1="26" x2="98" y2="38" stroke="#79DDFF" stroke-width="2" opacity="0.5"/><rect x="18" y="88" width="94" height="40" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><rect x="26" y="96" width="35" height="24" rx="4" fill="rgba(255,255,255,0.12)"/><rect x="69" y="96" width="35" height="24" rx="4" fill="rgba(255,255,255,0.12)"/><circle cx="38" cy="131" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><circle cx="92" cy="131" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><text x="65" y="78" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="30" fill="white" letter-spacing="3">AB</text><rect x="20" y="148" width="90" height="1" fill="rgba(255,255,255,0.2)"/><text x="65" y="161" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="rgba(255,255,255,0.65)" letter-spacing="2">BILVASK</text></svg>
          <div id="baw-online-dot"></div>
        </div>
        <div id="baw-name-tag">${CONFIG.storeName}</div>
      </div>

      <div id="baw-minimized" style="display:none;" title="Åpne chat">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#1a3a4a"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        <div id="baw-min-dot"></div>
      </div>

    </div>
  `;
  var container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  // ---- Elements ----
  var bubble      = document.getElementById("baw-bubble");
  var msgsEl      = document.getElementById("baw-messages");
  var sugsEl      = document.getElementById("baw-sugs");
  var inputEl     = document.getElementById("baw-input");
  var sendBtn     = document.getElementById("baw-send");
  var closeBtn    = document.getElementById("baw-bubble-close");
  var person      = document.getElementById("baw-person");
  var speech      = document.getElementById("baw-speech");
  var dismissBtn  = document.getElementById("baw-dismiss-btn");
  var minimized   = document.getElementById("baw-minimized");

  // ---- Open chat ----
  function openChat() {
    speech.style.display = "none";
    bubble.style.display = "flex";
    isOpen = true;
    if (msgsEl.children.length === 0) initChat();
    inputEl.focus();
    try {
      if (typeof gtag === "function") {
        gtag("event", "selly_chat_opened", { page: window.location.pathname });
      }
    } catch(e) {}
  }

  // ---- Avatar click ----
  person.addEventListener("click", function(e) {
    if (e.target === dismissBtn) return;
    openChat();
  });
  speech.addEventListener("click", openChat);

  // ---- Dismiss avatar ----
  dismissBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    bubble.style.display = "none";
    person.style.display = "none";
    minimized.style.display = "flex";
    isOpen = false;
    sessionStorage.setItem("selly_dismissed", "true");
  });

  // ---- Restore from minimized ----
  minimized.addEventListener("click", function() {
    minimized.style.display = "none";
    person.style.display = "flex";
    sessionStorage.removeItem("selly_dismissed");
    openChat();
  });

  // ---- Check session ----
  if (sessionStorage.getItem("selly_dismissed") === "true") {
    person.style.display = "none";
    minimized.style.display = "flex";
  }

  // ---- Mark dismissed when product clicked ----
  document.addEventListener("click", function(e) {
    var link = e.target.closest("a[href*='utm_source=selly']");
    if (link) sessionStorage.setItem("selly_dismissed", "true");
  });

  // ---- Close chat ----
  closeBtn.addEventListener("click", function () {
    bubble.style.display = "none";
    isOpen = false;
  });

  // ---- Show speech bubble after delay ----
  setTimeout(function() {
    if (sessionStorage.getItem("selly_dismissed") === "true") return;
    var ctx = getPageContext();
    speech.innerHTML = ctx.message.substring(0, 90) + (ctx.message.length > 90 ? "..." : "");
    speech.style.display = "block";
  }, 1800);




  // ---- Detect current page ----
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
        message: "Hei! Du ser p\u00e5 vask av varebil \u2746 Vi vasker varebiler inntil 2,60m takhøyde. Hva er takhøyden p\u00e5 bilen din?",
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
        message: "Hei! Enkeltvask fra kr 169 \u2746 Visste du at abonnement lønner seg etter bare 3 vask? Standard koster kr 479/mnd og gir 8 vask.",
        sugs: ["Hva koster abonnement?", "Bare enkeltvask denne gangen", "Hva er inkludert?", "Hvordan betaler jeg?"]
      };
    }
    return {
      message: "Hei! Velkommen til Asker Bilvask \u2746 Har du personbil eller varebil, og leter du etter enkeltvask eller abonnement?",
      sugs: CONFIG.suggestions
    };
  }

  // ---- Product card image map ----
  var PAGE_PRODUCT_IMAGES = { // Ikke i bruk for Asker Bilvask
    "breez-foundation-farge": "https://www.breez.no/cdn/shop/files/ChatGPT_Image_1._feb._2026_11_34_10.png?v=1769942747&width=400",
    "matte-foundation": "https://www.breez.no/cdn/shop/files/Naturlig_skjonnhet_med_Breez_kosmetikk.png?v=1775671362&width=400",
    "foundation-glow": "https://www.breez.no/cdn/shop/files/Breez_kosmetikk_med_naturlige_undertoner.png?v=1775675468&width=400",
    "foundation-matte": "https://www.breez.no/cdn/shop/files/Naturlig_skjonnhet_og_varme_nyanser.png?v=1775671362&width=400",
    "glow-matte-bundle": "https://www.breez.no/cdn/shop/files/Naturlig_skjonnhet_med_myk_glod.png?v=1775675468&width=400"
  };

  var PAGE_PRODUCT_IDS = {
    "breez-foundation-farge": "9945853460783",
    "matte-foundation": "10474491216175",
    "foundation-glow": "10474471129391",
    "foundation-matte": "10474484793647",
    "glow-matte-bundle": "12645578637615"
  };

  function makeProductCard(name, price, url) {
    return "<div style=\"margin-top:14px;background:#EEF2F8;border:1.5px solid #AABBD4;border-radius:16px;overflow:hidden;box-shadow:0 3px 16px rgba(27,59,111,0.1);\">"
      + "<div style=\"padding:14px;\">"
      + "<div style=\"font-size:15px;font-weight:700;color:#1B3B6F;\">" + name + "</div>"
      + "<div style=\"font-size:14px;color:#333;margin-top:4px;font-weight:500;\">" + price + "</div>"
      + "<div style=\"margin-top:10px;\">"
      + "<a href=\"" + url + "?utm_source=selly&utm_medium=chat&utm_campaign=ai-agent\" target=\"_blank\" style=\"display:block;background:#1B3B6F;color:white;font-size:13px;font-weight:700;padding:11px 14px;border-radius:10px;text-align:center;text-decoration:none;\">Bestill her \u2192</a>"
      + "</div></div></div>";
  }

  // ---- Init chat ----
  function initChat() {
    var ctx = getPageContext();

    // Velkomstmelding fra agent
    var welcome = document.createElement("div");
    welcome.className = "baw-msg agent";
    welcome.textContent = CONFIG.welcomeMessage;
    msgsEl.appendChild(welcome);

    // Kort pause, så kommer den proaktive meldingen
    setTimeout(function() {
      var d = document.createElement("div");
      d.className = "baw-msg agent";
      d.innerHTML = ctx.message + (ctx.card ? makeProductCard(ctx.card.name, ctx.card.price, ctx.card.url) : "");
      msgsEl.appendChild(d);
      msgsEl.scrollTop = msgsEl.scrollHeight;
      setSugs(ctx.sugs);
    }, 600);
  }

  // ---- Add message ----
  function addMsg(role, text) {
    var d = document.createElement("div");
    d.className = "baw-msg " + role;
    d.textContent = text;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return d;
  }

  // ---- Suggestions ----
  function setSugs(list) {
    sugsEl.innerHTML = "";
    list.forEach(function (s) {
      var b = document.createElement("button");
      b.className = "baw-sug";
      b.textContent = s;
      b.onclick = function () { inputEl.value = s; sendMsg(); };
      sugsEl.appendChild(b);
    });
  }

  // ---- Send message ----
  function sendMsg() {
    var val = inputEl.value.trim();
    if (!val) return;
    inputEl.value = "";
    sugsEl.innerHTML = "";
    addMsg("user", val);
    history.push({ role: "user", content: val });

    try {
      if (typeof gtag === "function") {
        gtag("event", "selly_message_sent", {
          message: val,
          page: window.location.pathname
        });
      }
    } catch(e) {}

    var thinking = addMsg("agent", "Skriver...");
    thinking.classList.add("thinking");

    fetch(CONFIG.proxyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        system: CONFIG.systemPrompt,
        messages: history,
        page: window.location.pathname,
        sessionId: sessionId
      })
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      // Log to Google Sheets
      try {
        fetch("https://script.google.com/macros/s/AKfycbx_l_-wAiJvMwn4pQcGdm1hx6UEA2EDg2fR6TXcbg-DLptZVs-dNtjfLfn9GUlb8DVkJA/exec", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: sessionId,
            page: window.location.pathname,
            userMessage: val,
            agentReply: (data.content || []).map(function(b){ return b.text || ""; }).join("")
          })
        });
      } catch(e) {}
      var reply = (data.content || []).map(function (b) { return b.text || ""; }).join("");
      history.push({ role: "assistant", content: reply });
      thinking.classList.remove("thinking");

      var PRODUCT_IMAGES = {
        "breez-foundation-farge": "https://www.breez.no/cdn/shop/files/ChatGPT_Image_1._feb._2026_11_34_10.png?v=1769942747&width=400",
        "matte-foundation": "https://www.breez.no/cdn/shop/files/Naturlig_skjonnhet_med_Breez_kosmetikk.png?v=1775671362&width=400",
        "foundation-glow": "https://www.breez.no/cdn/shop/files/Breez_kosmetikk_med_naturlige_undertoner.png?v=1775675468&width=400",
        "foundation-matte": "https://www.breez.no/cdn/shop/files/Naturlig_skjonnhet_og_varme_nyanser.png?v=1775671362&width=400",
        "glow-matte-bundle": "https://www.breez.no/cdn/shop/files/Naturlig_skjonnhet_med_myk_glod.png?v=1775675468&width=400"
      };
      var productCard = "";
      var cleanReply = reply.replace(/\[PRODUKT:([^\]]+)\]/g, function(match, inner) {
        var parts = inner.split("|");
        var name  = parts[0] || "";
        var price = parts[1] || "";
        var url   = parts[2] || "https://www.breez.no";
        var slug  = url.split("/products/")[1] || "";
        var img   = PRODUCT_IMAGES[slug] || "https://www.breez.no/cdn/shop/files/ChatGPT_Image_1._feb._2026_11_34_10.png?v=1769942747&width=400";
        var productIds = {
          "breez-foundation-farge": "9945853460783",
          "matte-foundation": "10474491216175",
          "foundation-glow": "10474471129391",
          "foundation-matte": "10474484793647",
          "glow-matte-bundle": "12645578637615"
        };
        var productId = productIds[slug] || "";
        var cartUrl = productId ? "https://www.breez.no/cart/add?id=" + productId + "&quantity=1" : url;
        productCard = '<div style="margin-top:14px;background:#fff;border:1.5px solid #AABBD4;border-radius:16px;overflow:hidden;box-shadow:0 3px 16px rgba(27,59,111,0.13);">'
          + '<img src="' + img + '" style="width:100%;height:160px;object-fit:cover;object-position:center top;display:block;" alt="' + name + '">'
          + '<div style="padding:12px 14px;">'
          + '<div style="font-size:14px;font-weight:600;color:#1a1a1a;">' + name + '</div>'
          + '<div style="font-size:13px;color:#1B3B6F;margin-top:3px;font-weight:500;">' + price + '</div>'
          + '<div style="margin-top:10px;">'
          + '<a href="' + url + '?utm_source=selly&utm_medium=chat&utm_campaign=ai-agent" target="_blank">Se produktet & velg nyanse →</a>'
          + '</div></div></div>';
        return "";
      }).replace(/\*\*/g, "").trim();

      var boldReply = cleanReply.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      thinking.innerHTML = boldReply + productCard;
      msgsEl.scrollTop = msgsEl.scrollHeight;

      // If no product card shown but reply mentions a product, auto-show last recommended card
      if (!productCard && (cleanReply.includes("handlekurv") || cleanReply.includes("Klarna") || cleanReply.includes("refill") || cleanReply.includes("Foundation"))) {
        var lastCtx = getPageContext();
        if (lastCtx.card) {
          var autoCard = makeProductCard(lastCtx.card.name, lastCtx.card.price, lastCtx.card.url);
          thinking.innerHTML = thinking.innerHTML + autoCard;
        }
      }

      setSugs(["Hva koster abonnement?", "Hvordan bestiller jeg?", "Er det mye kø?"]);
    })
    .catch(function () {
      thinking.classList.remove("thinking");
      thinking.textContent = "Beklager, noe gikk galt. Prøv igjen eller kontakt oss direkte!";
    });
  }

  // ---- GA4 Event Tracking ----
  function trackGA4Event(eventName, params) {
    try {
      if (typeof gtag === "function") {
        gtag("event", eventName, params);
      }
    } catch(e) {}
  }

  sendBtn.addEventListener("click", sendMsg);
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") sendMsg();
  });

})();
