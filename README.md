# ARAYI — arayimport.am

Ստատիկ, երկլեզու (հայերեն / English) կայք՝ ներմուծման վրա շեշտով։ Աշխատում է GitHub Pages-ում (անվճար), դոմենը և HTTPS-ը՝ Cloudflare-ով։ Սերվեր, տվյալների բազա կամ build պետք չէ։

## Ֆայլերի կառուցվածք

```
index.html            ← կայքի էջը
data/products.json    ← ⭐ ԱՊՐԱՆՔՆԵՐԸ (խմբագրվում է /admin էջից)
admin/                ← կառավարման վահանակ (Sveltia CMS)
js/config.js          ← ⭐ ԿԱՊԻ ՏՎՅԱԼՆԵՐ (հեռախոս, WhatsApp, Viber, Telegram, էլ. փոստ, հասցե)
js/content.js         ← կայքի բոլոր տեքստերը (հայերեն և անգլերեն)
js/app.js             ← տրամաբանություն (փոխել պետք չէ)
css/style.css         ← ոճեր և գույներ
assets/video/         ← գովազդային տեսանյութը (HY և EN) և դրանց շապիկները
assets/products/      ← ապրանքների նկարները
assets/img/           ← լոգո, քարտեզ, դրոշներ, favicon
```

## Ապրանքներ ավելացնել (առանց կոդի)

1. Բացեք **https://arayimport.am/admin**
2. Առաջին անգամ մուտք գործեք token-ով (տե՛ս ներքևում)։
3. **Ապրանքներ → Ապրանքների ցանկ → + ապրանք**
4. Լրացրեք անունը, կատեգորիան, նկարը, նկարագրությունը (գինը՝ ըստ ցանկության) → **Save**։
5. 1–2 րոպեից ապրանքը կերևա կայքում։

Յուրաքանչյուր ապրանքի տակ ավտոմատ ստեղծվում են **«Հարցնել WhatsApp-ով»** (պատրաստի հաղորդագրությամբ՝ ապրանքի անունով) և **զանգի** կոճակները։ Հեռախոսով արված մեծ նկարները ավտոմատ փոքրացվում են։ Ապրանքը թաքցնելու համար անջատեք **«Ցուցադրել կայքում»**-ը։ Հերթականությունը փոխվում է քաշելով։

### Մուտք /admin (մեկ անգամ, 3 րոպե)

1. GitHub → աջ վերևում ձեր նկարը → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**։
2. **Token name**՝ `ARAYI admin`, **Expiration**՝ ըստ ցանկության (օր.՝ 1 տարի)։
3. **Repository access** → *Only select repositories* → `aacc1on/arayi`։
4. **Permissions → Repository permissions → Contents**՝ *Read and write*։
5. **Generate token** → պատճենեք token-ը։
6. arayimport.am/admin → **Sign In Using Access Token** → տեղադրեք token-ը։

Token-ը պահվում է միայն ձեր բրաուզերում։ Մի՛ ուղարկեք այն ուրիշին։ Ժամկետը լրանալուց հետո ստեղծեք նորը նույն ձևով։

> Ըստ ցանկության՝ «Sign In with GitHub» կոճակ (առանց token-ի). տեղադրեք անվճար [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) Worker-ը ձեր Cloudflare-ում, ապա `admin/config.yml`-ում բացեք `base_url` տողը՝ Worker-ի հասցեով։

### Ապրանքներ՝ ուղիղ GitHub-ում (այլընտրանք)

Կարելի է խմբագրել `data/products.json`-ը GitHub-ում։ Յուրաքանչյուր ապրանք.

```json
{
  "title_hy": "Անուն", "title_en": "Name",
  "category_hy": "Կատեգորիա", "category_en": "Category",
  "image": "/assets/products/nkar.jpg",
  "text_hy": "Նկարագրություն", "text_en": "Description",
  "price": "",
  "published": true
}
```

## Հեռախոս, WhatsApp, Viber, Telegram, էլ. փոստ

Բացեք `js/config.js` և փոխեք միայն չակերտների ներսը։ Արժեքը ավտոմատ թարմանում է ամենուր՝ վերնագրում, կոճակներում, ապրանքների քարտերում, «Կապ» բաժնում և հեռախոսի ներքևի վահանակում։ Դատարկ թողնված դաշտի կոճակը չի երևում։

## Տեսանյութը փոխել

Փոխարինեք `assets/video/arayi-hy.mp4` և `arayi-en.mp4` ֆայլերը (նույն անուններով, ուղղահայաց 9:16, MP4/H.264, ցանկալի է մինչև 5 ՄԲ)։ Շապիկը՝ `poster-hy.jpg` / `poster-en.jpg`։

## Հետագա փոփոխություններ

GitHub-ում բացեք ֆայլը → մատիտի պատկերակ (**Edit**) → փոփոխեք → **Commit changes**։ Կայքը թարմանում է 1–2 րոպեում. բրաուզերում սեղմեք `Ctrl + F5`։

## Տեղում դիտել

```bash
python3 -m http.server 8000
# բացեք http://localhost:8000
```

Ապրանքները բեռնվում են `data/products.json`-ից, ուստի `index.html`-ը ուղղակի կրկնակի սեղմելով բացելիս ապրանքները չեն երևա. օգտագործեք վերևի հրամանը։

## Լեզուն

Այցելուն փոխում է լեզուն **ՀԱՅ / EN** կոճակով։ Ուղիղ հղում անգլերեն տարբերակին՝ `arayimport.am/?lang=en`։ Լռելյայն լեզուն՝ `config.js` → `DEFAULT_LANG`։

## Լիցենզիաներ

Կառավարման վահանակը՝ [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (MIT)։ Messenger պատկերակները՝ [Simple Icons](https://simpleicons.org) (CC0)։
