# Diesel Craft

Landing-page для дизельного сервісу Diesel Craft (Одеса).

## Запуск

- `npm install`
- `npm run dev`

## Збірка

- `npm run build`
- `npm run preview`

## Деплой на GitHub Pages

1. Запуште репозиторій на GitHub (гілка `main`).
2. У репозиторії відкрийте **Settings → Pages**.
3. У полі **Build and deployment** виберіть **Source: GitHub Actions**.
4. Після цього кожен push у `main` буде автоматично деплоїти сайт на Pages.

Після першого успішного деплою посилання на сайт зʼявиться:
- у **Settings → Pages** (рядок *Your site is live at ...*),
- і в **Actions** у виконаному workflow (в environment `github-pages` показується `page_url`).

Примітка: для Vite `base` виставляється автоматично під GitHub Pages.

## Налаштування контактів

У коді використані плейсхолдери для телефону/Telegram/Viber та домену (sitemap/JSON-LD/OG). Замініть їх на реальні значення.
