# words

Nx workspace для кроссплатформенного мобильного приложения на **Angular + Ionic + Capacitor**.

## Почему эта архитектура

- **Angular** — основа приложения и бизнес-логики.
- **Ionic** — мобильный UI-слой и компоненты, одинаково работающие на iOS/Android/Web.
- **Capacitor** — нативная оболочка и мост к нативным API.
- **Nx** — монорепо, масштабирование на несколько приложений и shared-библиотеки.

## Структура репозитория

- `apps/mobile` — основное мобильное приложение (Ionic + Angular).
- `libs/shared/core` — общие токены, модели, инфраструктурные абстракции.
- `libs/shared/ui` — переиспользуемые UI-компоненты.

## Версии (зафиксированы под Node 18)

- Node: `18.20.4` (см. `.nvmrc` и `package.json > engines`)
- Angular: `18.2.x`
- Ionic Angular: `8.3.3`
- Capacitor: `6.2.0` (CLI/Android/iOS/Core)
- Nx: `19.8.3`

> Версии закреплены без `latest`, чтобы не требовалось обновление Node.js.

## Быстрый старт

```bash
nvm use
npm install
npm run start
```

## Мобильный цикл (Capacitor)

```bash
npm run build
npm run mobile:sync
npm run mobile:android
npm run mobile:ios
```
