# Our Games — static portfolio and privacy pages

Public static website for a growing collection of casual games. Hosted with **GitHub Pages**, with no server, database, analytics SDK, or external JavaScript dependencies.

**Status:** Website, BlockPop and Magic Ball privacy disclosures are **pre-release drafts**. Do not submit the policy to Google Play until every verification placeholder has been resolved and it matches the release APK/AAB and Play Console Data safety form.

## Routes

| Page | File | GitHub Pages URL (check current deployment) |
| --- | --- | --- |
| Games home | `index.html` | `https://zelee83-glitch.github.io/game-policies/` |
| BlockPop game | `blockpop/index.html` | `https://zelee83-glitch.github.io/game-policies/blockpop/` |
| BlockPop privacy | `blockpop/privacy.html` | `https://zelee83-glitch.github.io/game-policies/blockpop/privacy.html` |
| Magic Ball game | `magicball/index.html` | `https://zelee83-glitch.github.io/game-policies/magicball/` |
| Magic Ball privacy (draft) | `magicball/privacy.html` | `https://zelee83-glitch.github.io/game-policies/magicball/privacy.html` |
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
3. Add one object to `games.json`, with `visible: true`, valid relative `icon` and `detailUrl` values. The homepage reads this catalog and has a static fallback featuring BlockPop and Magic Ball.
4. Only add real store URLs after independently confirming the listing is accessible. Set unverified URLs to `null`.
5. Review the privacy statements and contact information for that game's exact production SDK and build configuration.

## BlockPop publication checklist — NOT COMPLETE

- [x] Record developer-provided publisher display name (lee.D) and common privacy/support email (jakshow@foxmail.com). Exact Play Console identity and mailbox operation still require verification.
- [ ] Verify all data access, collection, transmission and sharing in the **exact signed shipping AAB**, including SDK versions, advertising identifiers, diagnostics, backups, and any analytics.
- [ ] Confirm whether production AdMob, UMP, Billing, and purchase verification are actually active; list processors and advertising partners.
- [ ] Establish retention and deletion rules and verify user request mechanisms.
- [ ] Confirm target audience, country rollout, consent/family requirements and third-party disclosures.
- [ ] Align the final policy with the Play Console Data safety form, actual app behavior and in-app policy link.
- [ ] Replace the privacy draft's `[TO CONFIRM]` text and "pre-release draft" notices only **after** supporting evidence is checked.
- [ ] Replace conceptual artwork with approved screenshots from a verified build if desired.
- [ ] Add public store links only after confirmed availability.
- [ ] Test anonymous HTTPS access to the home, details, policy and support routes, including mobile screen sizes.

The BlockPop app icon is copied from `zelee83-glitch/minigamegem/block-puzzle/icon.svg`. The Magic Ball vector artwork is copied from `zelee83-glitch/minigamegem/merge-drop/assets/merge_drop_icon.svg` (the active project icon is a separate PNG and must be checked before final release). The decorative puzzle board on the homepage is an illustration, **not** a gameplay screenshot.

## Magic Ball publication checklist — NOT COMPLETE

- [ ] Verify the final store title (currently Magic Ball in release documents, Merge Drop in the Godot project), and confirm the public listing is accessible before adding a store link.
- [x] Record developer-provided publisher display name (lee.D) and common privacy/support email (jakshow@foxmail.com). Exact Play Console identity and mailbox operation still require verification.
- [ ] Compare `com.wizardacad.magicball` and the exact signed release AAB against all privacy disclosures, permissions and embedded SDKs.
- [ ] Verify live AdMob banner behavior, UMP choices, data categories and advertising partners on a real Android device; QA records are not final production evidence.
- [ ] Verify local saves, leaderboard, backups, retention and deletion claims against the actual shipping build.
- [ ] Confirm target audience, regions, children's advertising requirements and third-party rights.
- [ ] Align the final policy, Play Data safety form and an in-game policy link; the UMP privacy-options entry does not replace the policy link.
- [ ] Remove **all** `[TO CONFIRM]` items and draft notices only after evidence-backed review.
- [ ] Replace/approve vector artwork after checking the actual PNG launch icon and verified gameplay screenshots.
- [ ] Run anonymous HTTPS, mobile layout and broken-link checks for all pages.

## Scope

This repository only contains public website content. No changes to the private game repository or any Google Play/AdMob/Billing configuration are made here.

## Google policy guidance

- [Google Play Developer Policy — Privacy Policy](https://support.google.com/googleplay/android-developer/answer/18265346)
- [Prepare your app for review](https://support.google.com/googleplay/android-developer/answer/9859455)
- [GitHub Pages — publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Shared public publisher/privacy information

- [Publisher privacy profile](privacy-config/publisher.json): public, user-confirmed shared publisher display name, privacy/support email, target markets and audience intentions, and intended retention/deletion principles.
- [Profile status and reuse rules](privacy-config/README.md): distinguishes user decisions from unverified Play Console, legal and build-specific items.
- The BlockPop and Magic Ball HTML privacy policies and shared Support page were updated on 2026-11-20 using the common profile. Both policies **remain pre-release drafts** pending per-game SDK/data-flow, age/region and retention verification. No game code was changed.
