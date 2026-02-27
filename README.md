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

## Быстрый старт

```bash
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

## Важно

В `package.json` используется `latest`, чтобы при установке подтянулась последняя стабильная версия Angular/Nx/Ionic/Capacitor.
