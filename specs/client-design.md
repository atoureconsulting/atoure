# Spec: Designing With the Client's Brand

Applies to: every deck, sample report and report made for a client.
Made by: whichever AI employee builds the piece.

AToure pitches very different companies: leagues, festivals, ministries,
brands. There is no single AToure colour scheme for client work. Every piece
is a merge of the client's design and AToure's: the client should recognise
themselves in it, and it should be unmistakably made by AToure.

## 1. Collect the client's look

Before designing, write `customers/<client>/design.md`:

- **Logo:** the files used and where they came from. Prefer the client's own
  site or press kit.
- **Colours:** primary and secondary, as hex codes, each with its source
  (website, brand guidelines, social posts, event posters).
- **Typefaces:** what they use, and the closest free web font if theirs is
  not available.
- **Imagery:** the feel of their photos and posters: dark and dramatic,
  bright and festive, formal, editorial.
- **Tone:** how they speak about themselves.

## 2. Merge

| Element | Comes from |
|---|---|
| Main colours, backgrounds, imagery | The client |
| Headline typeface | The client, or the closest web font |
| Cover and closing slide | Both logos together: "AToure × Client" |
| Accent on AToure's own sections (the AToure answer, the report, track record, contact) | AToure Gold `#C8A951` |
| Small labels and captions | AToure's Jost |
| Body text | Whichever of the two reads best at small sizes |

If the client's own colours fight with gold (a yellow, orange or gold brand),
use AToure Black `#0D0C0A` or AToure Cream `#FAF6EE` as the AToure accent
instead. The full AToure palette is in `brand/03-colours/colours.txt`.

## 3. Record and reuse

Write the merged palette and fonts at the bottom of `design.md`. The deck,
the sample report, and every real report for that client use the same
merge, so the client sees one consistent relationship.

## Done means

- Someone who knows the client would recognise their brand on the cover.
- The AToure logo is on the cover and the close, and gold (or the fallback)
  marks AToure's sections.
- Text is readable on a phone: run `node tools/eyes.js` and look.
- `design.md` lists every colour and logo with its source.

## Where we were

The PFL Africa and AML decks (October 2026) used the same dark green and
gold, in Oswald and Public Sans, for two different clients. That is the
pattern this spec replaces. Restyle either deck before reusing it.
