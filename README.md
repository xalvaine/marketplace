## Описание

[Next.js-приложение](https://nextjs.org/) созданное с помощью [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Версия Next.js - 11.

## Запуск

Команда для запуска dev-сервера:

```bash
npm run dev
# или
yarn dev
```

Сервер будет запущен на [http://localhost:3000](http://localhost:3000).

## Структура проекта

### Корневой каталог

[`.husky/pre-commit`](.husky/pre-commit) - git hooks.

[`next/types/global.d.ts`](next/types/global.d.ts) - глобальные типы.

[`.env`](.env) - описываются переменные среды. Правила для их наименования можно почитать [здесь](https://nextjs.org/docs/basic-features/environment-variables).

[`.babel.config.js`](.babel.config.js) - конфиг babel (возможно потребуется редактировать для тестов).

[`jest.config.js`](jest.config.js) - конфиг jest.

[`next.config.js`](next.config.js) - конфиг next.js, редактируемый, как правило, для добавления новых модулей сборщика.

[`.eslintrc`](.eslintrc) - конфиг линтера js/ts.

[`.prettierrc`](.prettierrc) - конфиг форматтера.

[`.stylelintrc`](.stylelintrc) - конфиг линтера css.

[`tsconfig.json`](tsconfig.json) - конфиг typescript.

[`deploy.sh`](deploy.sh) - скрипт для деплоя.

### Папка src

[`api`](src/api) - конфиги для axios.

[`components`](src/components) - универсальные и переиспользуемые компоненты. Их наименования и разделение на категории в основном совпадает с [компонентами ant-design](https://ant.design/components/overview/).

[`hooks`](src/hooks) - хуки react-query.

[`icons`](src/icons) - иконки. При экспорте иконки из figma важно стереть у неё все поля fill, width и height, дабы иконку потом можно было перекрасить с помощью CSS.

[`interfaces`](src/interfaces) - интерфейсы.

[`pages`](src/pages) - роутинг от Next.js. Подробнее о нём [здесь](https://nextjs.org/docs/routing/introduction) и [здесь](https://nextjs.org/docs/routing/dynamic-routes). О функциях фетчинга можно почитать [тут](https://nextjs.org/docs/basic-features/pages) и [тут](https://nextjs.org/docs/basic-features/data-fetching). Также в файлах внутри [`pages`](src/pages) по возможности расположены различные функции, вызывающиеся при открытии конкретной страницы.

[`reducers`](src/reducers) - всё, что связано с redux расположено здесь.

[`styles`](src/styles) - глобальные CSS-стили.

[`utils`](src/utils) - полезные и универсальные хуки/функции/классы. Вероятно эту папку стоит нормально структурировать.

[`views`](src/views) - неуниверсальные UI-компоненты. Внутри [`views/common`](src/views/common) расположены переиспользуемые компоненты, внутри [`views/pages`](src/views/pages) - непереиспользуемые. Структура последних соответствует их вложенности друг в друга на страницах.

[`config.ts`](src/config.ts) - конфиг.

Поскольку back-end разделен на три отдельных сервиса: публичную витрину, оформление заказа и модуль авторизации, во фронте имеется аналогичное разделение на showcase, checkout и authorization соответственно.

## Развертка

Ради экономии ресурсов сервера, который однажды был намертво положен сборкой фронта, Next.js предварительно собирается локально.

Команда для деплоя:

```bash
npm run deploy
# или
yarn deploy
```
