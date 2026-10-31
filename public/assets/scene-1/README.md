# Golden Autumn Heritage — Scene 1

Fifteen original illustrated PNG assets are organized in `public/assets/scene-1/`, using stable descriptive names.

## Static composition

Open `public/index.html` using any static web server whose root is `public/`.

Example:

```bash
python -m http.server 8000 -d public
```

Then visit `http://localhost:8000` on desktop or a mobile device on the same network.

This first version is deliberately **static**: the Open Invitation pill, leaves, flowers and butterfly are placeholders with no active animation or click behavior. The couple names are sample text.

## Artwork notes

- The background is a full-colour JPG-like PNG; the other assets have transparent channels.
- The background already includes a distant pavilion; the separate Myanmar gateway is placed in the foreground.
- The animation stage should individually pivot vines and wings, move leaf particles, add a working opening sequence, then profile mobile performance.
- Inspect semi-transparent cutout edges on dark and light backgrounds, and test 360×800, 390×844, and 430×932 screens.
