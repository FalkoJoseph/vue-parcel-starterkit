# vue-parcel-starterkit
> Parcel starterkit for Vue.js with single file components & hot reloading. 🎉

`vue-parcel-starterkit` is inspired by [vue-parcel-example](https://github.com/rohitkrai03/vue-parcel-example).
The main difference is that this starterkit supports Vue single file components.

# Requirements

- Node >= v8
- [Parcel](parceljs.org)

# What's in the box?

- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [stylelint](https://github.com/stylelint/stylelint)
- [parcel-plugin-vue](https://github.com/lc60005457/parcel-plugin-vue)

# Getting started

Clone this repository, and run `npm install`.

**Development**
```bash
npm run dev
```

**Production**
```bash
npm run build
```

**Common issues**

While Parcel is still a work in progress, there are some minor issues such as:

`configured port 3000 could not be used.`
> You can safely ignore this error message as it still works. There's already [a fix](https://github.com/parcel-bundler/parcel/pull/302) being issued.

`Error: read ECONNRESET`
> When you manually refresh the page, it breaks the connection. Hot-reloading is not affected. There's [a fix](https://github.com/parcel-bundler/parcel/pull/320) being issued as of right now.
