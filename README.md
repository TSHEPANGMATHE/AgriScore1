# AgriScore Demo

Static HTML/CSS/vanilla JavaScript prototype for GitHub Pages, designed around South African agriculture.

## Three farmer eligibility outcomes
- **Strong** — Lerato Mokoena (AGR001), calculated demo score (about **773 / 850**); eligible for further lender review.
- **Limited** — Thabo Nkosi (AGR002), calculated demo score (about **467 / 850**); should build more farming and repayment history.
- **Not Eligible** — Nomsa Baloyi (AGR003), calculated demo score (about **280 / 850**); not eligible for a demo loan enquiry at this stage.

**Farmer View is a free feature**, not an eligibility outcome. It explains a farmer’s demo profile, strengths, and practical areas to improve.

## Demo logins
- `lerato@demo.agr` / `farmer123` — Strong, AGR001
- `thabo@demo.agr` / `farmer123` — Limited, AGR002
- `nomsa@demo.agr` / `farmer123` — Not Eligible, AGR003

Lerato has 20 mobile-money, 20 repayment and 20 harvest records; Thabo has 12 of each and Nomsa 8, so thin files look thin. Every record has a client ID, and pages filter records by the signed-in demo account.

## Run
Open `index.html` or serve this folder with a simple local web server. After login, the dashboard opens first. Use **Farmer View · Free** in the navigation for free improvement guidance.

## Important
All data is fictional. Browser localStorage is not secure authentication. Scores and loan eligibility are illustrative and are not validated credit decisions, real offers, or bank approvals.

## Publish
Upload the folder contents to a GitHub repository and enable GitHub Pages from the repository root. Internal links are relative.

## Scoring
Scores are calculated from each farmer's sample records (mobile money 250, repayments 300, harvests 200, weather 100 points). Farmer View includes a what-if panel that recalculates the score with the same formula.
