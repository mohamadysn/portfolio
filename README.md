# Mohamad Yassine — Bioinformatics Portfolio

Modern React/Vite portfolio designed for GitHub Pages.

Requires Node.js 20 or newer (`nvm use` if you use nvm).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish for free with GitHub Pages

1. Create a public GitHub repository named `portfolio`.
2. Upload/push all files from this folder.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Push to the `main` branch.
6. The included workflow will build and deploy the site.

The site URL is:

`https://mohamadysn.github.io/portfolio/`

## If your repository is named `YOUR-USERNAME.github.io`

Change this line in `vite.config.js`:

```js
base: '/portfolio/'
```

to:

```js
base: '/'
```
