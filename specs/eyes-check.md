# Spec: Eyes Check

Made by: any AI employee, before anything visual goes to Baba.
Applies to: decks, sample reports, real reports, website pages, the talent
roster, anything a client opens in a browser.

Editing a file is not the same as seeing it. Open it the way the client
will, on a laptop and on a phone, and report what they would experience.

## How

```
node tools/eyes.js <file or URL> [more]
```

It saves desktop and phone screenshots to `.eyes/` and lists technical
problems: broken images, missing files, script errors, a missing phone
layout, pages that scroll sideways. Then look at the screenshots yourself.

## What to look for, as the client

1. **The first screen.** Within five seconds, is it clear what this is, who
   it is for, and who made it?
2. **The name and logo.** "AToure Management & Consulting", correct logo,
   client logo where it belongs.
3. **The figures.** Readable, labelled, estimated where modelled. Sample
   reports say fictional in red on page one.
4. **The phone.** Text readable without zooming. Nothing cut off. Tables
   usable.
5. **The flow.** Every link and button goes where it says. Sections in a
   sensible order.
6. **What would confuse them.** Jargon, unexplained numbers, an empty
   section, an image that does not belong.

## The report back

A short list for Baba: what works, what a client would stumble on, and the
fix for each. Attach or name the screenshots.
