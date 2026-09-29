# ARAYI — կայք (GitHub Pages)

Ստատիկ, երկլեզու (հայերեն / English) կայք։ Սերվեր, տվյալների բազա կամ build պետք չէ։

## Ֆայլերի կառուցվածք

```
index.html          ← կայքի էջը
js/config.js        ← ⭐ ԿԱՊԻ ՏՎՅԱԼՆԵՐ ԵՎ ՍՈՑՑԱՆՑԵՐ (կայքի «.env»-ը)
js/content.js       ← կայքի բոլոր տեքստերը (հայերեն և անգլերեն)
js/app.js           ← տրամաբանություն (փոխել պետք չէ)
css/style.css       ← ոճեր և գույներ
assets/img/         ← լոգո, նկարներ, դրոշներ, favicon
```

## Հեռախոս, էլ. փոստ, սոցցանցեր փոխելը

Բացեք `js/config.js` և փոխեք միայն չակերտների ներսը.

```js
PHONE:     "+374 91 123 456",
WHATSAPP:  "+374 91 123 456",
EMAIL:     "info@arayi.am",
FACEBOOK:  "https://facebook.com/arayi",
INSTAGRAM: "https://instagram.com/arayi",
TIKTOK:    "",        // դատարկ = կայքում չի երևա
LINKEDIN:  "https://linkedin.com/company/arayi",
```

Արժեքը ավտոմատ թարմացվում է ամենուր՝ վերնագրի կոճակում, «Զանգահարել» և «WhatsApp» կոճակներում, «Կապ» բաժնում և footer-ում։ Դատարկ թողնված սոցցանցի պատկերակը չի երևում։

## Տեղադրում GitHub Pages-ում (առանց ծրագրավորման)

1. Բացեք zip ֆայլը ձեր համակարգչում։
2. Մտեք [github.com](https://github.com) → վերևի աջ անկյունում **+** → **New repository**։
3. Անունը՝ `arayi` → **Public** → **Create repository**։
4. Նոր էջում սեղմեք **uploading an existing file** հղումը։
5. Քաշեք թղթապանակի **պարունակությունը** (`index.html`, `css`, `js`, `assets`, `404.html`), ոչ թե թղթապանակն ինքը։ `index.html`-ը պետք է լինի repository-ի արմատում։ → **Commit changes**։
6. **Settings** → ձախում **Pages** → **Source**՝ *Deploy from a branch* → **Branch**՝ `main`, թղթապանակ՝ `/ (root)` → **Save**։
7. 1–2 րոպեից կայքը հասանելի կլինի հասցեով՝ `https://ՁԵՐ-USERNAME.github.io/arayi/`

### Նույնը՝ հրամանային տողով

```bash
cd arayi-site
git init
git add .
git commit -m "ARAYI website"
git branch -M main
git remote add origin https://github.com/ՁԵՐ-USERNAME/arayi.git
git push -u origin main
```

Այնուհետև՝ քայլ 6-ը։

## Հետագա փոփոխություններ

GitHub-ում բացեք ֆայլը (օր.՝ `js/config.js`) → մատիտի պատկերակ (**Edit**) → փոփոխեք → **Commit changes**։ Կայքը թարմանում է 1–2 րոպեում. բրաուզերում սեղմեք `Ctrl + F5`։

## Սեփական դոմեն (ըստ ցանկության, օր.՝ arayi.am)

1. **Settings** → **Pages** → **Custom domain** → գրեք `arayi.am` → **Save**։
2. Դոմենի մատակարարի DNS կարգավորումներում ավելացրեք.
   - `A` գրառումներ `@`-ի համար՝ `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` գրառում `www`-ի համար՝ `ՁԵՐ-USERNAME.github.io`
3. DNS-ը թարմանալուց հետո միացրեք **Enforce HTTPS**։

## Տեղում դիտել

Բավական է բացել `index.html`-ը բրաուզերում։ Կամ՝

```bash
python3 -m http.server 8000
# բացեք http://localhost:8000
```

Քարտեզը և Google տառատեսակները աշխատում են ինտերնետ կապի առկայությամբ։

## Լեզուն

Այցելուն փոխում է լեզուն վերնագրի **ՀԱՅ / EN** կոճակով։ Ուղիղ հղում անգլերեն տարբերակին՝ `.../arayi/?lang=en`։ Լռելյայն լեզուն՝ `config.js` → `DEFAULT_LANG`։
