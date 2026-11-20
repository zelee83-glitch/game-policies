# Shared privacy and publisher data

This directory contains **public information** explicitly provided by the developer for reuse by multiple games from this repository.

- Machine-readable common profile: [publisher.json](publisher.json)
- Publisher display name: **lee.D** (provided by the user; not independently checked against Google Play Console)
- Privacy and support contact: **jakshow@foxmail.com**
- Games using the profile: **BlockPop**, **Magic Ball**

## Decision status

| Field | Decision / data | What still needs to be checked |
| --- | --- | --- |
| Publisher display name | lee.D | Verify exact Play Console public developer identity |
| Legal entity | Not provided | Required only where applicable; never invent |
| Contact | jakshow@foxmail.com | Ensure it receives privacy/support messages |
| Market plan | Global | Verify countries, actual rollout, consent and privacy obligations |
| Target audience | 13 and older | Verify Play target-age declarations and local child/teen rules |
| Support emails | Shared inbox; 180-day intended retention | Implement and document actual cleanup, exceptions and request handling |
| Local game storage | Propose deletion by clearing app data or uninstall | Verify backup and retention behavior in each signed release |
| Third-party processing | SDK- and game-specific | Audit final binaries, SDK versions, data flows and Play Data safety |

## Usage and guardrails

1. Multiple games may reuse this profile *only if* they are operated by the same actual publisher and use this contact channel.
2. Game-specific privacy policies must accurately describe **that game's exact release build** and actual SDK/data handling. A shared contact profile does not establish that the games have identical privacy behavior.
3. Do not silently turn a planned approach or user decision into a verified production promise. Keep the status fields in `publisher.json` until evidence resolves them.
4. The active `blockpop/privacy.html` and `magicball/privacy.html` were **not updated** in this commit. Their existing draft placeholders remain pending separate policy review.
5. Never place secrets, login credentials, private personal information, signed binaries or upload keys here: this repository is **public**.

This is a **shared data source**, not a finalized privacy policy, legal determination or automatic code generator.
