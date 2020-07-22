# Nomod Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/95fadadb-a17b-42cf-9fec-7b711582c069/deploy-status)](https://app.netlify.com/sites/nomod/deploys)

Nomod's primary marketing site located at Nomod.com. Built with [Gatsby](https://www.gatsbyjs.org)!

## Installing Locally

1. Clone this repo to your local machine

2. Install the Gatsby-CLI by running `npm install -g gatsby-cli`

3. Navigate to your repo directory and run `npm install`

To get a development server up and running:

1. Run `gatsby develop`

2. Gatsby will start a hot-reloading development environment accessible by default at localhost:8000

## Production Build

1. Run `gatsby build`

2. To serve the production build locally, run `gatsby serve` and Gatsby will start a local HTML server for testing, by default at localhost:9000

## Deployment

Commit or merge into the master branch. Netlify will automatically pick up the changes and will kick off a new build!

## Content & Localisation

The site detects the browser's locale settings and sends the user to their preferrefed locale. If a match is not found, they're sent to the US site.

The user can change their preferred locale, with their choice being stored in a cookie.

All the information related to locales sits in 2 folders:

```
src/i18n
src/pages
```

`src/i18n` holds all locale configuration including menus. These include, top menu (menu-top.md), footer menu (footer.md) and the terms menu (terms-menu.md).

All locales that are coming soon and therefore have a coming soon landing page, share content from a single markdown file located at `src/coming-soon-page/index.md`

#### Links

The menus support https as well as mailto links. For example:

`href: 'mailto:help@nomod.com?subject=I need help!'` will set up a mailto link, whilst `href: 'https://help.nomod.com'` will set up an external link.

All external links are set to open in a new tab by default. An external link from a menu can optionally be opened in the same tab by adding a field titled `newTab` under the href field, and setting it to false. For example:

```
href: 'https://help.nomod.com'
newTab: false
```

#### Content

`src/pages` contains all the site content. This is distributed in locales folders

```
src/en-us/
src/en-gb/
```

Each folder contain the same amount of files. Each file turns into a page via a template in the `src/template` folder. Having our content distributed this way allows for 100% content flexibility. The text and images can be different for each locale and can be written in any language.

#### Adding a New Locale

This can be done in four steps. If the locale is coming soon, ignore steps 2 & 3, but not 4! Before a locale goes lives, ensure that all steps have been carried out.

1. Add your new locale to the `src/i18n/locales.json` file. If the locale is live, set `available` to `true` or if it's coming soon, set `available` to `false`.

2. Add menu entries in `src/i18n/top-menu.md`, `src/i18n/footer-menu.md` and `src/i18n/terms-menu.md` for the new locale.

3. All content is automatically served up by the default locale during the build process, usually `en-us`. To manage custom content for a given locale, choose one of the existing locale folders in the `pages` folder, duplicate it and rename it to match you locale. For example if your locale is `es-Es`, rename the duplicated folder to `pages/es-es`. You're now ready to individually manage your locale's content. Only the pages that you want to customise need to be present in your locale folder. If a given page is not present, it will be served up by the default locale.

4. In order for the new locale to redirectly correctly to its own 404 page, a redirect must be created in `static/_redirects`. [This tells Netlify how to implement the relevant redirect](https://docs.netlify.com/routing/redirects/redirect-options/#custom-404-page-handling). Use the same pattern as used for other locales:

   ```xml
   /en-gb/* /en-gb/404.html 404
   /en-ca/* /en-ca/404.html 404
   /en-es/* /en-es/404.html 404

   /en-us/* /:splat
   ```

#### Setting the Default Locale

The site's default locale is `en-US`. To change it carry out the following:

1. Go to `scr/i18n/locales.json` and set `default` to `true`, in the corresponding locale

   ```json
   [
     {
       "locale": "en-US",
       "default": true,
       "available": true,
       "country": "United States",
       "flag": "../images/flags/us-flag.inline.svg",
       "dateFormat": "DD/MM/YYYY",
       "defaultTitle": "Nomod · Better payments for humans",
       "defaultDescription": "A simple, intuitive way to accept in-person card payments on your device"
     },
     {
       "locale": "en-GB",
       "default": false,
       "available": true,
       "country": "United Kingdom",
       "flag": "../images/flags/uk-flag.inline.svg",
       "dateFormat": "DD.MM.YYYY",
       "defaultTitle": "Nomod · Better payments for humans",
       "defaultDescription": "A simple, intuitive way to accept in-person card payments on your device"
     },
     {
       "locale": "en-CA",
       "default": false,
       "available": true,
       "country": "Canada",
       "flag": "../images/flags/ca-flag.inline.svg",
       "dateFormat": "DD/MM/YYYY",
       "defaultTitle": "Nomod · Better payments for humans",
       "defaultDescription": "A simple, intuitive way to accept in-person card payments on your device"
     }
   ]
   ```

2. Go to `static/_redirects` file and update its contents:

   from:

   ```
   /en-gb/* /en-gb/404.html 404
   /en-ca/* /en-ca/404.html 404
   /en-es/* /en-es/404.html 404

   /en-us/* /:splat
   ```

   to:

   ```
   /en-gb/* /en-gb/404.html 404
   /en-ca/* /en-ca/404.html 404
   /en-us/* /en-us/404.html 404

   /en-es/* /:splat 301
   ```

   Note the 301 code to tell search engines the page urls of the corresponding new default locale has changed
