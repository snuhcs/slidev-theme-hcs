---
theme: ./theme
title: Layout Gallery
aspectRatio: 16/9
canvasWidth: 960
colorSchema: light
fonts:
  provider: none
layout: cover
---

# Layout Gallery

::subtitle::
Every layout and component in the HCS theme

::author::
Human-Centered Computer Systems Lab

<!--
This deck is the reference for what the theme can do.
Open layouts.md next to it: each slide shows the markdown that produced it.
-->

---
layout: default
---

# How to Read This Deck

- Every slide names the layout that produced it.
- The source is `layouts.md`. Copy a slide out of it rather than writing
  frontmatter from memory.
- A slide starts with `---`, and the `key: value` block right after it is that
  slide's frontmatter:

```md
---
layout: text-image
---

# Title

::text::
- Bullets on one side.

::image::
<HcsFigure src="/figures/curves.svg" alt="..." caption="..." />
```

- `::name::` fills a named slot. Anything before the first one is the title.

---
layout: section
---

# Layouts

---
layout: default
---

# `default`

Title and body. This is what you get when no layout is set.

- **Bold** marks a key term, and <mark>mark</mark> highlights a phrase.
- Nested lists shrink one step at a time:
  - Second level, 18.7px
    - Third level, 16px
- A blockquote states the question a slide answers:

> How much of the speedup comes from the scheduler alone?

<p class="hcs-note">The <code>hcs-note</code> class gives small muted text, for a caveat or a source line.</p>

---
layout: figure
---

# `figure`

- Text on top, one figure filling the space left over.
- Use it when the figure is the slide and needs a sentence of setup.

::figure::
<HcsFigure src="/figures/curves.svg" alt="Accuracy against training epoch for the proposed method and a baseline" caption="Fig. 1 Illustrative data, not a real result" />

<!--
The figure never crops. HcsFigure fits it inside the remaining box.
-->

---
layout: two-figures
---

# `two-figures`

- Two figures side by side, each with its own caption.

::left::
<HcsFigure src="/figures/curves.svg" alt="Accuracy against training epoch" caption="(a) Convergence" />

::right::
<HcsFigure src="/figures/breakdown.svg" alt="Latency broken down into four stages" caption="(b) Latency breakdown" />

---
layout: text-image
---

# `text-image`

::text::

- Text on the left, figure on the right. This is the default.
- Good for a claim next to the evidence for it.
- Keep the text short enough that the figure stays large.

::image::
<HcsFigure src="/figures/breakdown.svg" alt="Latency broken down into four stages" caption="Fig. 2 Illustrative data" />

---
layout: text-image
imageSide: left
ratio: 1.15fr 0.85fr
---

# `text-image`, flipped and reweighted

::text::

- `imageSide: left` puts the figure first.
- `ratio: 1.15fr 0.85fr` gives the figure more room than the text.
- Both are slide frontmatter, so the change is one line.

::image::
<HcsFigure src="/figures/pipeline.svg" alt="Workload feeds a generator, which emits schedules to the target hardware" caption="Fig. 3 System overview" />

---
layout: text-image
clicks: 2
---

# Revealing One Piece at a Time

::text::

- Start with the whole figure.

<v-click at="1">

- Then point at the part that matters.

</v-click>

<v-click at="2">

- Then say <mark>what it means</mark>.

</v-click>

::image::
<HcsFigure src="/figures/breakdown.svg" alt="Latency broken down into four stages" caption="Fig. 4 Press the right arrow key to advance">
  <HcsArrow v-click="1" :x1="40" :y1="80" :x2="25" :y2="57" />
</HcsFigure>

<!--
Notes can be split per click step, so each step gets its own line to say.

[click] Point at Compile: the proposed bar is close to half the baseline.

[click] That is where the scheduler runs. Execute barely moves, which is the
point — the win is not in execution.
-->

---
layout: two-cols
---

# `two-cols`

::left::

## Baseline

- Describe the existing approach.
- List what it assumes.
- Name its one real limitation.

::right::

## Proposed

- Explain what changes.
- State what it now requires.
- Give the expected benefit.

---
layout: two-cols
ratio: 0.7fr 1.3fr
---

# `two-cols` with a ratio

::left::

## Setting

- Edge GPU
- 8 W budget

::right::

## What that rules out

- Any schedule that assumes unified memory, because the transfer cost stops
  being free and starts dominating the measured latency.
- Search budgets over a few hundred trials, which take longer to measure than
  the deadline allows.

---
layout: statement
---

# One slide, one message

::support::
Use this to separate two parts of an argument, or to land a conclusion.

---
layout: full-figure
---

<HcsFigure src="/figures/pipeline.svg" alt="Workload feeds a generator, which emits schedules to the target hardware, with measured cost fed back" caption="The full-figure layout: the figure fills the slide, with only a caption for context" />

---
layout: result
---

# `result`

::figure::
<HcsFigure src="/figures/breakdown.svg" alt="Latency broken down into four stages" caption="Fig. 5 Illustrative data" />

::takeaway::
**Takeaway:** the accent rule separates the evidence from your reading of it, so
the sentence you want remembered is not just another bullet.

---
layout: section
---

# Content

---
layout: default
---

# Tables

| Item | Description |
| --- | --- |
| Dataset | Name, size, and how it was selected |
| Baselines | What is being compared, and at which version |
| Metrics | The primary measure, then the secondary ones |
| Controls | What was held constant across runs |

<p class="hcs-note">Tables are styled by the theme. Keep them to about five rows so they stay readable from the back of a room.</p>

---
layout: default
---

# Equations and Mixed Scripts

- Write LaTeX between `$$` for a display equation:

$$
\mathcal{L}(\theta) = \frac{1}{N}\sum_{i=1}^{N}\bigl(f_\theta(x_i) - y_i\bigr)^2 + \lambda \lVert \theta \rVert_2^2
$$

- Inline math works too: the model converges once $\lVert \nabla \theta \rVert < \epsilon$.
- 한글과 English를 한 슬라이드에 섞어 써도 줄바꿈이 단어 단위로 유지됩니다.

---
layout: default
---

# Code, One Step at a Time

```py {1-2|4-5|7-8|all}
def schedule(op, target):
    space = enumerate_tilings(op, target)

    for candidate in space:
        cost = measure(candidate, target)

        if cost < best.cost:
            best = candidate
```

- The `{1-2|4-5|7-8|all}` after the language moves the highlight as you advance.
- The code stays put, so nobody has to find their place again.

<!--
Walk the highlight down: build the space, measure each candidate, keep the best.
-->

---
layout: default
number: true
footer: Layout Gallery
---

# Slide Frontmatter

- `number: true` shows the page number in the footer, bottom left.
- `footer: Layout Gallery` replaces the default `HCS Lab @ SNU`, bottom right.
- Both are per slide. Look at the footer of this one.
- Deck-wide settings go in the frontmatter of the first slide instead.

---
layout: default
---

# Components

- `HcsFigure` — a figure with a caption. `src`, `alt`, `caption`, and `fit`
  (`contain` by default, `cover` to fill and crop).
- `HcsArrow` — an arrow drawn over a figure. Put it inside `HcsFigure`, and give
  `x1`, `y1`, `x2`, `y2` on a 0–100 grid over the image box.
- `HcsBrand` — the SNU and HCS logos. The `cover`, `section`, and `end` layouts
  already place it; you rarely write it yourself.
- `HcsFrame` — the white slide frame with the footer, used by every content
  layout.

```md
<HcsFigure src="/figures/curves.svg" alt="Convergence" caption="Fig. 1" fit="contain">
  <HcsArrow :x1="30" :y1="70" :x2="62" :y2="38" color="#d46a26" />
</HcsFigure>
```

---
layout: default
---

# Presenting

- Notes are an HTML comment at the **end** of a slide, and appear only in
  presenter view.
- Navigation: `space` / `→` advances one click step, `↓` skips to the next
  slide, `o` opens the overview, `g` jumps to a slide number, `d` toggles dark
  mode.
- Presenter view and drawing have no key bound. Both are buttons on the
  navigation bar, which appears at the bottom-left corner.
- Presenter and slide windows stay in sync across devices only under a dev
  server (`npm run dev:layouts`). A static build syncs windows of one browser.

---
layout: end
---

# Thank you
