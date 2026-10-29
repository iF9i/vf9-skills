---
name: vf9-motion
description: Use when building or polishing a website's UI motion (entrance animations, scroll reveals, button press feedback). Provides VF9's shared Apple-style motion system - five presets (hero-reveal, slide, pop-in, bounce-rotate, bump) as plain CSS + a tiny JS, no libraries. Works for RTL/Arabic pages and respects prefers-reduced-motion.
---

# vf9-motion

Shared motion system used on vf9.dev. Drop-in for any static or framework site.

## Files (in this skill folder)
- `motion.css` - tokens, the five presets, reduced-motion handling
- `motion.js` - IntersectionObserver that adds `.in` and sets stagger delay `--d`

## Install
1. Copy `motion.css` and `motion.js` into the project (load the CSS after the main stylesheet, the JS at end of body with `defer`).
2. Mark elements: `class="reveal" data-motion="<preset>"`.

## Presets - where to use which
| preset | use for |
|---|---|
| `hero-reveal` | headings, intro text, section heads (rise + blur-to-sharp) |
| `slide` | long list rows, project rows, quote blocks (enters from the inline-start side) |
| `pop-in` | cards, stat numbers, button groups (small spring) |
| `bounce-rotate` | the logo / one hero image only, once |
| `bump` | automatic on `.btn` / `.pill` press via `:active` - adapt the selector to the site's button classes |

## Rules
- Siblings under the same parent stagger automatically (90ms each, change `--mo-step` in CSS and the `90` in JS together).
- Use `bounce-rotate` at most once per page; do not animate everything.
- Never put `transition` on the same property the reveal animates; the system uses keyframes with `fill-mode: backwards`, so hover transforms keep working after the entrance.
- Tune the feel only through the four tokens at the top of `motion.css`.
- If the site's buttons use other class names, change the `.btn, .pill` selector at the bottom of the CSS.
- Always test with prefers-reduced-motion on: content must be visible with no animation.
