# Stelo : build my personal website from scratch

[![wakatime](https://wakatime.com/badge/user/90a8ccc0-463e-48d6-8e05-22f7ef87c61c/project/85d10ca8-4598-4610-b01f-d583457f2986.svg)](https://wakatime.com/badge/user/90a8ccc0-463e-48d6-8e05-22f7ef87c61c/project/85d10ca8-4598-4610-b01f-d583457f2986)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/imomaliev/vue-ts/main.svg)](https://results.pre-commit.ci/latest/github/imomaliev/vue-ts/main)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ba6ddd69-f2d2-4455-a175-f0e991099f92/deploy-status)](https://app.netlify.com/sites/sonodakazuto/deploys)

## Todo

### Environment

-   [x] Init project
-   [x] Update gitignore
-   [x] Set yarn version
-   [x] Install yarn plugin (interactive-tools)
-   [x] Creat Intellij Run Scripts
-   [x] Add [editorconfig](https://editorconfig.org/#example-file)
-   [x] Set up [Git flow](https://ihower.tw/blog/archives/5140)

### Vite

-   [ ] Modify [tsconfig](https://ithelp.ithome.com.tw/m/articles/10263733)
-   [ ] Modify [vite.config.ts](https://vitejs.dev/config/#esbuild)
-   Add [plugins](https://github.com/vitejs/awesome-vite#plugins)

### CI

-   [x] Set up husky hooks
-   [x] Set up pre-commit and pre-commit.ci
-   [x] Set up [prettier](https://prettier.io/docs/en/next/options.html)
-   [x] Add [prettier-plugin-sh](https://github.com/un-ts/prettier/tree/master/packages/sh)
-   [x] Set up eslint
-   [x] Set up prettier and eslint integration
-   [ ] Add [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) (failed now)
-   [x] Set up [lint-staged](https://github.com/okonet/lint-staged#Configuration)
-   [x] Set up [commitlint](https://ithelp.ithome.com.tw/m/articles/10278664)
-   [x] Set up [commitizen](https://ithelp.ithome.com.tw/m/articles/10279064)
-   [x] Set up [commitlint and commitizen integration](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/cz-commitlint) (failed to auto save message)
-   [x] Set up standard-version
-   [x] Set up codacy
-   [x] Set up lint for pull requests (GitHub action)
-   [ ] Set up vitest (later)

### CD

-   [x] Set up auto deploy (Netlify)

### Website

-   [x] Add Unocss
-   [x] Add Unocss preset (uno, attributify, icons)
-   [ ] Add markdown support
-   [ ] Add dark mode support
-   [ ] Add i18n support
-   [ ] Add router support

## Environment

-   Vue
-   Typescript
-   Vite
-   Yarn

## Reference

1. [Creating vite vue ts template: GitHub project template](https://dev.to/imomaliev/github-project-template-1mc3)
2. [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
3. [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
4. [What is causing Error: .eslintrc.js: Environment key "vue/setup-compiler-macros" is unknown](https://stackoverflow.com/questions/69796772/what-is-causing-error-eslintrc-js-environment-key-vue-setup-compiler-macros)
5. [解决 defineProps 定义问题](https://segmentfault.com/a/1190000041461442)
6. [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
7. [使用 ESLint, Prettier, Husky, Lint-staged 以及 Commitizen 提升專案品質及一致性](https://medium.com/@danielhu95/set-up-eslint-pipeline-zh-tw-990d7d9eb68e)
