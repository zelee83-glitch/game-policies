# Our Games — static portfolio and privacy pages

Public static website for a growing collection of casual games. Hosted with **GitHub Pages**, with no server, database, analytics SDK, or external JavaScript dependencies.

**Status:** Website and BlockPop privacy disclosure are **pre-release drafts**. Do not submit the policy to Google Play until every verification placeholder has been resolved and it matches the release APK/AAB and Play Console Data safety form.

## Routes

| Page | File | Published URL after Pages activation |
| --- | --- | --- |
| Games home | `index.html` | `https://zelee83-glitch.github.io/game-policies/` |
| BlockPop game | `blockpop/index.html` | `https://zelee83-glitch.github.io/game-policies/blockpop/` |
| BlockPop privacy | `blockpop/privacy.html` | `https://zelee83-glitch.github.io/game-policies/blockpop/privacy.html` |
| Support | `support.html` | `https://zelee83-glitch.github.io/game-policies/support.html` |

## Publish with GitHub Pages

1. Repository **Settings → Pages → Build and deployment**.
2. Select **Deploy from a branch**, branch **main**, folder **/(root)**.
3. Save, check the GitHub Pages deployment record, then verify every URL in a private browser window on mobile and desktop.
4. Do not claim the site is published until public HTTPS access has been confirmed.

Site files use relative paths so that they also work under the project subpath `/game-policies/`. There is no build step. `.nojekyll` suppresses Jekyll processing.

## Add another game

1. Add a folder such as `suika/` with `index.html` and a *game-specific* `privacy.html`.
2. Add verified images under `assets/`. Avoid uploading source code or confidential development files.
3. Add one object to `games.json`, with `visible: true`, valid relative `icon` and `detailUrl` values. The homepage reads this catalog and has a static BlockPop fallback.
4. Only add real store URLs after independently confirming the listing is accessible. Set unverified URLs to `null`.
5. Review the privacy statements and contact information for that game's exact production SDK and build configuration.

## BlockPop publication checklist — NOT COMPLETE

- [ ] Confirm exact developer/publisher name and privacy/support contact, consistent with Play Console.
- [ ] Verify all data access, collection, transmission and sharing in the **exact signed shipping AAB**, including SDK versions, advertising identifiers, diagnostics, backups, and any analytics.
- [ ] Confirm whether production AdMob, UMP, Billing, and purchase verification are actually active; list processors and advertising partners.
- [ ] Establish retention and deletion rules and verify user request mechanisms.
- [ ] Confirm target audience, country rollout, consent/family requirements and third-party disclosures.
- [ ] Align the final policy with the Play Console Data safety form, actual app behavior and in-app policy link.
- [ ] Replace the privacy draft's `[TO CONFIRM]` text and "pre-release draft" notices only **after** supporting evidence is checked.
- [ ] Replace conceptual artwork with approved screenshots from a verified build if desired.
- [ ] Add public store links only after confirmed availability.
- [ ] Test anonymous HTTPS access to the home, details, policy and support routes, including mobile screen sizes.

The BlockPop app icon is copied from `zelee83-glitch/minigamegem/block-puzzle/icon.svg`. The decorative puzzle board on the homepage is an illustration, **not** a gameplay screenshot.

## Scope

This repository only contains public website content. No changes to the private game repository or any Google Play/AdMob/Billing configuration are made here.

## Google policy guidance

- [Google Play Developer Policy — Privacy Policy](https://support.google.com/googleplay/android-developer/answer/18265346)
- [Prepare your app for review](https://support.google.com/googleplay/android-developer/answer/9859455)
- [GitHub Pages — publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
