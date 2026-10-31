/* =====================================================================
   ARAYI — կայքի տրամաբանությունը։ Այս ֆայլը փոխելու կարիք չկա.
   կապի տվյալները՝ js/config.js, տեքստերը՝ js/content.js,
   ապրանքները՝ market.arayimport.am/admin (պահուստը՝ data/products.json)
   ===================================================================== */
(function () {
  "use strict";
  var SITE = window.SITE || {};
  var CONTENT = window.CONTENT || {};
  var ICONS = {"facebook": "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z", "instagram": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077", "tiktok": "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z", "youtube": "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", "telegram": "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z", "whatsapp": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z", "linkedin": "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"};
  var NETWORKS = [
    ["FACEBOOK", "facebook", "Facebook"],
    ["INSTAGRAM", "instagram", "Instagram"],
    ["TIKTOK", "tiktok", "TikTok"],
    ["LINKEDIN", "linkedin", "LinkedIn"],
    ["YOUTUBE", "youtube", "YouTube"]
  ];  // Telegram, WhatsApp and Viber have their own buttons in the contact section
  var PHONE_PATH = "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z";
  var currentLang = "hy";

  function val(key) { return (SITE[key] || "").toString().trim(); }
  function digits(s) { return s.replace(/[^\d+]/g, ""); }
  function all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function tr(key) { var t = CONTENT[currentLang] || {}; return t[key] !== undefined ? t[key] : ((CONTENT.hy || {})[key] || ""); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function svgPath(d, size) {
    return '<svg viewBox="0 0 24 24"' + (size ? ' width="' + size + '" height="' + size + '"' : "") +
      ' aria-hidden="true" focusable="false"><path fill="currentColor" d="' + d + '"/></svg>';
  }
  function svgIcon(name) { return svgPath(ICONS[name], 22); }

  /* ---------- links ---------- */
  function waLink(text) {
    var wa = val("WHATSAPP");
    if (!wa) return "";
    return "https://wa.me/" + digits(wa).replace("+", "") + (text ? "?text=" + encodeURIComponent(text) : "");
  }
  function telLink() { var p = val("PHONE"); return p ? "tel:" + digits(p) : ""; }
  function marketBase() { return val("MARKET").replace(/\/+$/, ""); }
  function marketUrl(suffix) { var m = marketBase(); return m ? m + "/" + currentLang + "/" + (suffix || "") : ""; }

  /* ---------- market links: [data-market="catalog/"] → https://market…/hy/catalog/ ---------- */
  function fillMarket() {
    all("[data-market]").forEach(function (el) {
      var url = marketUrl(el.getAttribute("data-market"));
      if (el.tagName === "A" && url) el.href = url;
      el.hidden = !url;
    });
  }

  /* ---------- contacts: filled everywhere from config.js ---------- */
  function fillContacts(lang) {
    var values = {
      PHONE: val("PHONE"),
      WHATSAPP: val("WHATSAPP"),
      VIBER: val("VIBER"),
      TELEGRAM: val("TELEGRAM"),
      EMAIL: val("EMAIL"),
      ADDRESS: val(lang === "en" ? "ADDRESS_EN" : "ADDRESS_HY"),
      HOURS: val(lang === "en" ? "HOURS_EN" : "HOURS_HY"),
      MAP_QUERY: val("MAP_QUERY")
    };
    all("[data-site]").forEach(function (el) {
      var k = el.getAttribute("data-site");
      if (values[k] !== undefined) el.textContent = values[k];
    });
    all("[data-href]").forEach(function (el) {
      var k = el.getAttribute("data-href");
      if (k === "tel" && values.PHONE) el.href = telLink();
      if (k === "mail" && values.EMAIL) el.href = "mailto:" + values.EMAIL;
      if (k === "whatsapp" && values.WHATSAPP) {
        var tk = el.getAttribute("data-wa-text");
        el.href = waLink(tk ? tr(tk) : "");
      }
      if (k === "viber" && values.VIBER) el.href = "viber://chat?number=" + encodeURIComponent(digits(values.VIBER));
      if (k === "telegram" && values.TELEGRAM) el.href = values.TELEGRAM;
    });
    all("[data-requires]").forEach(function (el) {
      el.hidden = !values[el.getAttribute("data-requires")];
    });
    var map = document.querySelector("[data-map]");
    if (map && values.MAP_QUERY) {
      var src = "https://maps.google.com/maps?q=" + encodeURIComponent(values.MAP_QUERY) + "&z=14&output=embed&hl=" + lang;
      if (map.getAttribute("src") !== src) map.setAttribute("src", src);
    }
  }

  /* ---------- social links: only filled ones are shown ---------- */
  function fillSocials() {
    var html = "";
    NETWORKS.forEach(function (n) {
      var url = val(n[0]);
      if (!url) return;
      html += '<a class="social" href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' + n[2] + '">' + svgIcon(n[1]) + "</a>";
    });
    all("[data-socials]").forEach(function (el) { el.innerHTML = html; });
    all("[data-requires-social]").forEach(function (el) { el.hidden = !html; });
  }

  /* ---------- products (market feed, fallback data/products.json) ---------- */
  var products = null;         // null = not loaded yet
  var activeCat = "";          // "" = all categories
  var MAX_PRODUCTS = 8;        // how many market products to show on this page

  function pick(p, field) {
    var a = p[field + "_" + currentLang], b = p[field + "_" + (currentLang === "en" ? "hy" : "en")];
    return ((a || "").toString().trim()) || ((b || "").toString().trim());
  }
  function imgUrl(src) {
    src = (src || "").toString().trim();
    if (!src || /^https?:\/\//i.test(src)) return src;
    return src.replace(/^\/+/, "");      // works on the domain root and on a sub-path
  }
  function catKey(p) { return ((p.category_hy || p.category_en || "") + "").trim(); }

  function getJSON(url) {
    return fetch(url, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    });
  }
  function listOf(data) {
    var list = Array.isArray(data) ? data : (data && data.products) || [];
    return list.filter(function (p) { return p && p.published !== false && (p.title_hy || p.title_en); });
  }
  // market feed fields → this page's fields (summary_* → text_*)
  function fromMarket(p) {
    return {
      title_hy: p.title_hy, title_en: p.title_en,
      category_hy: p.category_hy, category_en: p.category_en,
      text_hy: p.summary_hy, text_en: p.summary_en,
      url_hy: p.url_hy, url_en: p.url_en,
      image: p.image, featured: p.featured
    };
  }
  function loadLocal() {
    return getJSON("data/products.json").then(listOf).catch(function () { return []; });
  }
  function loadProducts() {
    var base = marketBase();
    var source = base
      ? getJSON(base + "/api/products.json")
          .then(function (data) {
            var list = listOf(data).map(fromMarket);
            if (!list.length) throw new Error("empty");
            return list.slice(0, MAX_PRODUCTS);
          })
          .catch(loadLocal)
      : loadLocal();
    source.then(function (list) { products = list; renderProducts(); });
  }

  function renderProducts() {
    var grid = document.querySelector("[data-products]");
    var chipsEl = document.querySelector("[data-chips]");
    if (!grid || products === null) return;
    all(".product:not([data-custom])", grid).forEach(function (el) { el.remove(); });
    var custom = grid.querySelector("[data-custom]");
    var tel = telLink(), html = "";

    products.forEach(function (p) {
      var title = pick(p, "title"), cat = pick(p, "category"), text = pick(p, "text");
      var price = (p.price || "").toString().trim();
      var img = imgUrl(p.image);
      var url = pick(p, "url");
      var wa = waLink(tr("products.wa_msg").replace("{title}", title) + (url ? "\n" + url : ""));
      var imgTag = img ? '<img src="' + esc(img) + '" alt="' + esc(title) + '" width="800" height="600" loading="lazy">' : "";
      html += '<article class="product" data-cat="' + esc(catKey(p)) + '">' +
        '<div class="product-img">' + (url && img ? '<a href="' + esc(url) + '" tabindex="-1" aria-hidden="true">' + imgTag + "</a>" : imgTag) + "</div>" +
        '<div class="product-body">' +
          (cat ? '<span class="product-cat">' + esc(cat) + "</span>" : "") +
          "<h3>" + (url ? '<a href="' + esc(url) + '">' + esc(title) + "</a>" : esc(title)) + "</h3>" +
          (text ? "<p>" + esc(text) + "</p>" : "") +
          (url ? '<a class="product-more" href="' + esc(url) + '">' + esc(tr("products.more")) + ' <span aria-hidden="true">→</span></a>' : "") +
          '<p class="product-price">' + esc(price || tr("products.price")) + "</p>" +
          '<div class="product-actions">' +
            (wa ? '<a class="btn btn-wa btn-sm" href="' + esc(wa) + '" target="_blank" rel="noopener">' + svgIcon("whatsapp") + "<span>" + esc(tr("products.whatsapp")) + "</span></a>" : "") +
            (tel ? '<a class="btn btn-icon" href="' + esc(tel) + '" aria-label="' + esc(tr("products.call") + " " + val("PHONE")) + '" title="' + esc(tr("products.call")) + '">' + svgPath(PHONE_PATH) + "</a>" : "") +
          "</div>" +
        "</div>" +
      "</article>";
    });
    if (custom) custom.insertAdjacentHTML("beforebegin", html);
    else grid.insertAdjacentHTML("beforeend", html);

    // category chips (shown only when there are 2+ categories)
    var keys = [], labels = {};
    products.forEach(function (p) {
      var k = catKey(p);
      if (k && keys.indexOf(k) < 0) { keys.push(k); labels[k] = pick(p, "category"); }
    });
    if (keys.indexOf(activeCat) < 0) activeCat = "";
    if (chipsEl) {
      chipsEl.hidden = keys.length < 2;
      var ch = '<button type="button" class="chip" data-cat="" aria-pressed="' + (activeCat === "" ? "true" : "false") + '">' + esc(tr("products.all")) + "</button>";
      keys.forEach(function (k) {
        ch += '<button type="button" class="chip" data-cat="' + esc(k) + '" aria-pressed="' + (activeCat === k ? "true" : "false") + '">' + esc(labels[k]) + "</button>";
      });
      chipsEl.innerHTML = ch;
    }
    applyFilter();
  }

  function applyFilter() {
    all("[data-products] .product:not([data-custom])").forEach(function (el) {
      el.hidden = !!activeCat && el.getAttribute("data-cat") !== activeCat;
    });
    all("[data-chips] .chip").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-cat") === activeCat ? "true" : "false");
    });
  }

  function initChips() {
    var chipsEl = document.querySelector("[data-chips]");
    if (!chipsEl) return;
    chipsEl.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      activeCat = b.getAttribute("data-cat") || "";
      applyFilter();
    });
  }

  /* ---------- promo video ---------- */
  var video = null, phone = null, userPaused = false, inView = true;

  function updateVideoUI() {
    if (!video) return;
    var playBtn = document.querySelector("[data-video-play]");
    var soundBtn = document.querySelector("[data-video-sound]");
    var label = document.querySelector("[data-video-sound-label]");
    phone.classList.toggle("is-paused", video.paused);
    phone.classList.toggle("is-sound", !video.muted);
    if (playBtn) playBtn.setAttribute("aria-label", tr(video.paused ? "video.play" : "video.pause"));
    if (soundBtn) soundBtn.setAttribute("aria-pressed", video.muted ? "false" : "true");
    if (label) label.textContent = tr(video.muted ? "video.sound.on" : "video.sound.off");
  }

  function tryPlay() {
    if (!video || userPaused || !inView) return;
    var p = video.play();
    if (p && p.catch) p.catch(function () { updateVideoUI(); });
  }

  function setVideoLang(lang) {
    if (!video) return;
    var src = video.getAttribute("data-video-" + lang), poster = video.getAttribute("data-poster-" + lang);
    if (src && video.getAttribute("src") !== src) {
      video.setAttribute("poster", poster);
      video.setAttribute("src", src);
      video.load();
      tryPlay();
    }
    updateVideoUI();
  }

  function initVideo() {
    video = document.querySelector("[data-promo]");
    if (!video) return;
    phone = video.closest(".hero-media") || video.parentNode;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { userPaused = true; video.removeAttribute("autoplay"); video.pause(); }

    function togglePlay() {
      if (video.paused) { userPaused = false; inView = true; tryPlay(); }
      else { userPaused = true; video.pause(); }
    }
    var playBtn = document.querySelector("[data-video-play]");
    if (playBtn) playBtn.addEventListener("click", togglePlay);
    video.addEventListener("click", togglePlay);

    var soundBtn = document.querySelector("[data-video-sound]");
    if (soundBtn) soundBtn.addEventListener("click", function () {
      video.muted = !video.muted;
      if (!video.muted && video.paused) { userPaused = false; inView = true; tryPlay(); }
      updateVideoUI();
    });

    ["play", "pause", "volumechange"].forEach(function (ev) { video.addEventListener(ev, updateVideoUI); });

    // pause while scrolled out of view, resume when back
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (!inView && !video.paused) video.pause();
        else tryPlay();
      }, { threshold: 0.25 }).observe(video);
    }
  }

  /* ---------- language ---------- */
  function getLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "hy" || q === "en") return q;
    try { var s = localStorage.getItem("arayi-lang"); if (s === "hy" || s === "en") return s; } catch (e) {}
    return SITE.DEFAULT_LANG === "en" ? "en" : "hy";
  }

  function applyLang(lang) {
    currentLang = lang;
    var t = CONTENT[lang] || CONTENT.hy || {};
    document.documentElement.lang = lang;
    if (t["meta.title"]) document.title = t["meta.title"];
    var md = document.querySelector('meta[name="description"]');
    if (md && t["meta.description"]) md.setAttribute("content", t["meta.description"]);
    all("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); if (t[k] !== undefined) el.textContent = t[k];
    });
    all("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt"); if (t[k] !== undefined) el.alt = t[k];
    });
    all("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria"); if (t[k] !== undefined) el.setAttribute("aria-label", t[k]);
    });
    all("[data-i18n-title]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-title"); if (t[k] !== undefined) el.setAttribute("title", t[k]);
    });
    all("[data-src-" + lang + "]").forEach(function (el) {
      var src = el.getAttribute("data-src-" + lang);
      if (el.getAttribute("src") !== src) el.src = src;
    });
    all("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    fillContacts(lang);
    fillMarket();
    setVideoLang(lang);
    renderProducts();
    try { localStorage.setItem("arayi-lang", lang); } catch (e) {}
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    var btn = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!btn || !nav) return;
    function close() { btn.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); }
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      nav.classList.toggle("open", !open);
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    all("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
    var y = document.querySelector("[data-year]"); if (y) y.textContent = new Date().getFullYear();
    fillSocials();
    initVideo();
    initChips();
    applyLang(getLang());
    initMenu();
    loadProducts();
  });
})();
