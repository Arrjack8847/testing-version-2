# Golden Autumn Heritage — Scene 1 Interactive Opening

The 15 original illustrated PNG files are organized at `public/assets/scene-1/` with descriptive filenames. No artwork was regenerated or re-encoded during the GitHub reorganization.

## Run on Windows (PowerShell)

From your existing local clone, make sure you are on the development branch:

```powershell
git checkout feat/golden-autumn-scene1-static-preview
git pull origin feat/golden-autumn-scene1-static-preview
py -m http.server 8000 --directory public
```

Open **http://localhost:8000**.

If Python is not installed, use `npx serve public -l 8000` (requires Node.js).

## What works now

- Continual gentle garden zoom, sunshine variation, swaying floral borders and hanging vines
- A hovering butterfly with two independently flapping wing images
- Nine reusable drifting-leaf particles, plus three ornamental leaves
- Touch/click on the garden releases a brief leaf scatter
- **OPEN INVITATION** performs the ~3-second butterfly-flight/envelope-lift/leaf-scatter cinematic reveal
- A new invitation message appears after the opening, with a **REPLAY THE OPENING** control
- Keyboard-focusable buttons, announced reveal heading, reduced-motion support
- No JavaScript framework, music or external CDN needed

The couple names and invitation message are demo placeholders. The opening is **Scene 1 only**; Scene 2, wedding details, music, RSVP and full scrolling sections have not been built yet.

## Where to edit

- `public/index.html` — composition, labels, sample names and accessible markup
- `public/scene1-motion.css` — wind, light, butterfly, leaves, reveal styles and reduced motion
- `public/scene1-motion.js` — generated leaf particles, opening/replay controls and keyboard focus
- `public/assets/scene-1/` — the 15 original PNGs

## Testing checklist

1. On a 390×844 mobile viewport, verify the gateway and flowers frame the names without overlaps.
2. Without touching the screen, watch vines and flowers gently move and a few leaves drift.
3. Tap **OPEN INVITATION**; butterfly flies, leaves scatter, envelope and seal rise, invitation message appears.
4. Tap **REPLAY THE OPENING** and verify the opening returns to its original state.
5. Tap the garden (away from the button) to create a small leaf scatter.
6. Enable “Reduce motion” on the operating system; decorative animation should stop and opening should reveal immediately.
7. Check 360×740 and 430×932 mobile sizes; confirm all asset paths return successfully.

**Current limitation:** the original artwork totals roughly 18 MB, so on low-end phones or slower mobile connections the first load may be heavy. Future optimization should create visually checked WebP/AVIF derivatives while retaining these originals as source assets.
