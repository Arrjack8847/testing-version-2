# Scene 1 asset and composition audit

All 15 uploaded images are identical to the original uploaded Git blobs; **no re-encoding** occurred when they were moved to meaningful names.

Artwork: 1 opaque background PNG (941×1672), 14 transparent RGBA PNGs. Main gateway: 1024×1536. Foreground: 2172×724.

### Layout direction

- Sunset garden fills the viewport and supports the full-screen portrait composition.
- Ivory–gold gateway is anchored at x=4%, y=17%, width=92%, height=65%.
- Hanging vines connect near the top corners (partially clipped so their stems feel rooted).
- Floral borders frame left and right sides around mid-screen; bottom foreground fills lower edge.
- Name field is kept inside the arch opening and above the invitation envelope.
- Envelope and ornamental seal stack centrally around y=69–77%.
- The three distinct leaves are positioned as separate decorative objects for the next animation stage.
- Butterfly wing/body pieces are a preliminary visual arrangement; the joint alignment needs refinement when animating.

### Findings and limits

- Assets have transparent channels but could contain fine fringe/halo pixels; inspect before final production export.
- Background imagery includes a distant pavilion not exactly matching the gateway. This is acceptable for a static draft but should be art-directed during polish.
- Current placement uses proportional dimensions and may distort or crop elements on uncommon aspect ratios.
- The **OPEN INVITATION** CTA is now interactive: wing flight, scattering leaves, envelope/seal lift, reveal card and replay are implemented in `scene1-motion.css` and `scene1-motion.js`.
- The artwork remains an original composition inspired by the reference; this is an interactive Scene 1 demo, not the complete website. In-memory mobile browser checks passed at 390×844, 360×740 and 430×932 (reduced motion), but real-device testing and network-loading performance still need review.
