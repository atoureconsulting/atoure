# Brand Kit

This file covers voice, tone and visual identity. The actual binary asset files (logos, fonts, colour swatches) are not duplicated in this repository. They live in the atoureconsulting/website repository, at the paths noted below, and anyone producing merchandise, decks or printed material should pull them from there.

## Voice and tone

These rules apply to everything written for AToure: social captions, page copy, headings, body text, proposals, decks. They are not optional style preferences, they are house rules.

### The hard rule

Never use hyphens or dashes in anything written for AToure. No em dashes, no en dashes, no hyphenated compounds. Restructure the sentence instead: a full stop, a comma or a colon will almost always do the job. If a name genuinely needs a compound word, use a space or run the words together rather than hyphenating.

### AToure is not an agency

Never call AToure an agency, in English or in French copy ("agence" is out too). AToure is a management and consulting company. It builds a project and runs it on the ground as the operator, rather than selling a campaign and handing delivery to someone else. The single exception is the contractual term "agency fee" used in the Mauritius documents, which is a fee name, not a description of the company, and that distinction should be kept if the term ever comes up.

### Baba Touré is Director

Baba Touré holds the title Director of AToure. He is not referred to as founder, even though he started the company.

### Other house habits, taken from copy the client wrote themselves

- Short declarative fragments in capability lists. For example: "Local creator collaborations. Deep access to the fitness community." No verbs needed.
- Numbers are stated plainly, then undercut with the human story behind them. The client's own line is "But the numbers never tell the full story," followed by the human result that number represents.
- Every Africa Tour caption closes with "This is what AToure was built for."

### Africa Tour caption format

One post per country, in tour order: Ghana, Cameroon, Nigeria, Benin, Rwanda. Chapter 1 carries the series opener; later chapters drop it. The shape is:

```
Chapter N: Country. [flag]

[Scene. Something physical and specific from that leg.]

[What AToure delivered, as short fragments.]

[Views figure] But the numbers never tell the full story. [The human result.]

This is what AToure was built for.

@ashtonhall Africa Tour '26 | Managed by AToure Management & Consulting

#AfricaTour #Country #City #AshtonHall #ashtonsmall
```

Only tag creators who were actually on that leg. @indian_ashtonhall joined the tour in Nigeria, not Cameroon. Ashton Small was on the Ghana, Cameroon and Rwanda legs.

### Figures

Do not publish a view count that has not been supplied or verified. Several figures on the public case study pages are inferred from partial screenshots and read lower than the real totals. Ask rather than estimate.

Reach and impressions are modelled, not reported. Instagram stopped exposing a separate impressions metric for Reels in 2024, so both figures are estimates and should be labelled estimated wherever they appear publicly. Reach is always lower than views, because views count replays and reach counts unique accounts.

### The Africa Tour, for reference

Five countries, five cities, in order: Ghana (Accra), Cameroon (Douala), Nigeria (Lagos), Benin (Cotonou), Rwanda (Kigali). Douala was the only Cameroonian market on the tour, so Yaounde does not belong in any market list for this campaign.

## Visual identity

Full detail, including production notes and known limitations, lives in the website repository's own brand kit README at `brand-kit/README.md`. The summary below is drawn from that file.

### Colours

| Name | Hex | RGB |
|---|---|---|
| AToure Gold | `#C8A951` | 200, 169, 81 |
| AToure Gold Light | `#E0C47A` | 224, 196, 122 |
| AToure Gold Dark | `#A08830` | 160, 136, 48 |
| AToure Gold Pale | `#F5EDD6` | 245, 237, 214 |
| AToure Black | `#0D0C0A` | 13, 12, 10 |
| AToure Black Soft | `#1A1814` | 26, 24, 20 |
| AToure Black Mid | `#2C2820` | 44, 40, 32 |
| AToure Cream | `#FAF6EE` | 250, 246, 238 |
| AToure Cream Mid | `#F0E8D4` | 240, 232, 212 |
| AToure Cream Dark | `#E5D9BE` | 229, 217, 190 |
| AToure Warm White | `#FEFCF8` | 254, 252, 248 |
| AToure Text Mid | `#5C5040` | 92, 80, 64 |
| AToure Text Light | `#9A8870` | 154, 136, 112 |
| Race Weekend Red | `#D30F1F` | 211, 15, 31 |
| Race Weekend Gold | `#D1A262` | 209, 162, 98 |
| Race Weekend Black | `#0D0C0A` | 13, 12, 10 |

The black is deliberately warm, not pure black, and should not be substituted for one. The cream carries the same warm cast rather than being a plain white.

There is a known inconsistency: three different values for the gold are in circulation across the supplied artwork files (`#C8A951`, `#CFAA5C` and `#B28B3C`). `#C8A951` is the value used across the website and is the recommended canonical gold. Standardise on it before any production run, or agree a Pantone equivalent with the printer.

Full CMYK conversions and the Adobe swatch file are at `brand-kit/03-colours/colours.txt` and `brand-kit/03-colours/atoure-palette.ase` in the website repository. The CMYK values are a straight mathematical conversion and are not press ready.

### Fonts

Two typefaces, both licensed under the SIL Open Font Licence, which permits commercial use including on merchandise, so no purchase is required:

- Cormorant Garamond: display and headline face, used for all large type. Supplied in seven weights plus italics.
- Jost: supporting face, used for body copy and labels. Supplied in six weights plus italic.

Font files live at `brand-kit/02-fonts/` in the website repository, along with a type specimen image and the OFL licence text for each face.

### Logos

Logo files live at `brand-kit/01-logos/` in the website repository, split into an `atoure/` folder and a `race-weekend/` folder, with a contact sheet image indexing every file.

There are two AToure lockups, and they are not interchangeable:

- The nav lockup (sans serif, set in Jost): the version used in the website header, with a gold monogram and "ATOURE" plus "MANAGEMENT & CONSULTING" in wide letterspacing. True vector, and the version to use for garments and most other production unless there is a specific reason not to.
- The serif lockup: an older version of the wordmark set in a serif face. Only supplied as PNG, since its "MANAGEMENT & CONSULTING" line does not trace cleanly to vector at source resolution.

A standalone monogram is also supplied as true vector, and is the preferred choice for garments, caps, sleeves and anywhere a full lockup would be too wide to read.

Two known limitations worth flagging to anyone doing large format production: the AToure monogram vector is a trace from a 306 by 420 pixel PNG rather than an original file, since no vector original exists in the company's files; and the Race Weekend mark was similarly traced from a PDF. Both reproduce faithfully, but the original design files would be cleaner if they can be recovered from whoever built the identity.

Client and partner logos (DAZN, Netflix, MTN, Canal+, Red Bull and others) live separately in the website repository's `Media/logos/` folder. Those are third party trademarks, are not part of AToure's own brand kit, and must not be applied to merchandise without written permission from each rights holder.
