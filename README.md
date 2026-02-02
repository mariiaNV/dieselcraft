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
3. У полі **Build and deployment** виберіть **Source: Deploy from a branch**.
4. Виберіть **Branch: gh-pages** і **Folder: /(root)**, натисніть **Save**.
5. Після цього кожен push у `main` буде автоматично деплоїти сайт на Pages.

Після першого успішного деплою посилання на сайт зʼявиться у **Settings → Pages** (рядок *Your site is live at ...*).

Примітка: для Vite `base` виставляється автоматично під GitHub Pages.

## Налаштування контактів

У коді використані плейсхолдери для телефону/Telegram/Viber та домену (sitemap/JSON-LD/OG). Замініть їх на реальні значення.
