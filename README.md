# Magic Cube built with React-Three-Fiber

## 🔦 About

This repo is 4 Magic Cube 3x3x3 built with [Expo + Tamagui](https://tamagui.dev/docs/guides/expo) and bootstrapped with [`create-r3f-app`](https://github.com/utsuboco/create-r3f-app).

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- Expo SDK
- Expo Router
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Three.js

## 🗂 Folder layout

The main apps are:

- `app` you'll be importing most files from `app/`

## 🏁 Start the app

- Install dependencies: `bun install`

- Web local dev: `bun web`

- Android local dev: `bun android`

- Ios local dev: `bun ios`

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it as example:

```sh
bun add jotai
```

## Update new dependencies

### Pure JS dependencies

```sh
bun update --latest
```

## Deploying to Vercel

- Config in `vercel.json` file
- Build command: leave default setting
- Output dir: leave default setting
- Build preview version with `bunx vercel build` or production with `bunx vercel build --prod`
- Then deploy the preview with `bunx vercel --prebuilt` or production with `bunx vercel --prod --prebuilt`