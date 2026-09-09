---
theme: hcs
title: Talk title
layout: cover
---

# Talk title

::subtitle::
Human-Centered Computer Systems Lab

::author::
Your Name · 2026-03-14

<!--
Speaker notes go in an HTML comment at the end of a slide.
They appear in presenter view, not on the slide.
-->

---
layout: agenda
---

# Today

1. **Problem** — what breaks today
2. **Approach** — what this work changes
3. **Evaluation** — what the evidence shows

---
layout: default
---

# Motivation

- One message per slide, stated as a sentence.
- **Bold** the term you want remembered.

> The question this talk answers.

---
layout: section
---

# Method

---
layout: default
---

# Adding a figure

- Put images in this deck's own `public/`, then reference them from the root:

```md
---
layout: text-image
---

# Claim beside its evidence

::text::

- The claim, in one line.

::image::
<HcsFigure src="/figures/result.png" alt="What the figure shows" caption="Fig. 1" />
```

- `public/figures/result.png` is written `/figures/result.png`.

---
layout: two-cols
---

# Comparison

::left::

## Baseline

- What exists today.

::right::

## This work

- What changes.

---
layout: statement
---

# One slide, one message

::support::
Use this to land a conclusion or separate two parts of the argument.

---
layout: end
---

# Thank you
