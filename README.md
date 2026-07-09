# Personal Website (Blog / Portfolio Style)

A clean, modern personal site — built for showcasing **projects** and
**publications**, with a compact about/experience section. Ready to deploy on
**GitHub Pages**.

## ✨ Features

- 🧭 Sticky blurred nav + mobile hamburger menu
- 🦸 Friendly hero with avatar, bio, and social links
- 💼 **Generous project cards** — including a wide "featured" card
- 📄 **Publications with expandable Abstract & BibTeX** (click to reveal)
- 🧷 Condensed experience & education (the full detail belongs in your CV PDF)
- 🏷️ Subtle skill tags (no big skill bars)
- 📱 Fully responsive + print-friendly

## 🚀 Quick Start (Local Preview)

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## ✏️ How to Customize

Everything lives in **`index.html`**. Search & replace these placeholders:

| Placeholder | Replace with |
|-------------|--------------|
| `Your Name` | Your name |
| `Your Title` | Your role / tagline |
| `you@example.com` | Your email |
| `github.com/yourusername` | Your GitHub |
| `linkedin.com/in/yourusername` | Your LinkedIn |
| `https://scholar.google.com/` | Your Scholar profile |

### Projects

Each project is an `<article class="project-card">`. The first one has the
`featured` class so it spans the full width with a side thumbnail.

- To use a real image instead of the gradient + emoji, replace the
  `.project-thumb` contents with `<img src="project.jpg" alt="..." />` and add
  styling (or use it as a background).
- Change the gradient by editing the inline `style="background: ..."` on
  `.project-thumb`.

### Publications

Each publication is an `<article class="pub-card">`. Structure:

```html
<article class="pub-card">
  <div class="pub-year">2024</div>
  <div class="pub-content">
    <h3>Title</h3>
    <p class="pub-authors">Author One, <span class="me">Your Name</span>, ...</p>
    <p class="pub-venue">Published in <em>Venue</em></p>
    <div class="pub-links">
      <a href="#">PDF</a>
      <button class="toggle-btn" data-toggle="abstract">Abstract</button>
      <button class="toggle-btn" data-toggle="bibtex">BibTeX</button>
    </div>
    <p class="pub-detail" data-detail="abstract">Your plain-language explanation...</p>
    <pre class="pub-detail bibtex" data-detail="bibtex">@article{...}</pre>
  </div>
</article>
```

- Wrap **your name** in `<span class="me">…</span>` to highlight it.
- The **Abstract** and **BibTeX** buttons toggle on click (powered by `script.js`).

### Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
  --accent: #3b82f6;
  --accent-2: #6366f1;
  /* ... */
}
```

## 🌐 Deploy to GitHub Pages

1. Create a repo named **`yourusername.github.io`** (or any name).
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → `main` branch (`/root`)** → Save.
4. Visit your URL (shown in Pages settings). Updates deploy automatically on push.

## 📁 Structure

```
.
├── index.html   # All content (nav, hero, projects, publications, about)
├── styles.css   # Styling
├── script.js    # Nav, mobile menu, abstract/bibtex toggles
├── .nojekyll    # Skip Jekyll on GitHub Pages
└── README.md
```

## License

Free to use for personal purposes. 🎈
