# gspanos.tech

My personal blog. Plain HTML and one stylesheet — no build step, no dependencies,
no package manager. What is in this repo is exactly what gets served.

## Publishing a post

1. **Create the page.**

   ```sh
   mkdir -p posts/my-new-post
   cp _template.html posts/my-new-post/index.html
   ```

2. **Fill in the placeholders.** Open the new file and replace every `{{...}}`:

   | Placeholder        | Example                                                                       |
   | ------------------ | ----------------------------------------------------------------------------- |
   | `{{TITLE}}`        | `Why I stopped using frameworks`                                              |
   | `{{DESCRIPTION}}`  | one sentence, ~150 chars, used by search and social previews                  |
   | `{{SLUG}}`         | `my-new-post` — must match the folder name                                    |
   | `{{ISO_DATE}}`     | `2026-08-04`                                                                  |
   | `{{DISPLAY_DATE}}` | `4 August 2026`                                                               |
   | `{{TAGS}}`         | `programming, life` (or delete the whole `&middot; <span class="tags">` line) |

3. **Write the post** where the `<!-- Write the post here -->` comment is. Plain HTML:
   `<p>`, `<h2 id="section-name">`, `<ul><li>`, `<blockquote><p>`, `<em>`, `<strong>`,
   `<a href>`, `<pre><code>`. Nothing else is needed — `style.css` handles the rest.

4. **Link it** by adding this block to the top of the list in **`index.html`**
   (inside `<ul class="post-list">`) and in **`posts/index.html`**:

   ```html
   <li>
     <time datetime="2026-08-04">4 August 2026</time>
     <a href="/posts/my-new-post/">Why I stopped using frameworks</a>
   </li>
   ```

   `index.html` shows the latest 10, so delete the oldest `<li>` there to keep it at 10.

5. **Add it to the feed** — top of the item list in **`rss.xml`**:

   ```xml
   <item>
     <title>Why I stopped using frameworks</title>
     <link>https://gspanos.tech/posts/my-new-post/</link>
     <guid isPermaLink="true">https://gspanos.tech/posts/my-new-post/</guid>
     <description>One sentence.</description>
     <pubDate>Tue, 04 Aug 2026 00:00:00 +0000</pubDate>
   </item>
   ```

6. **Add it to `sitemap.xml`** — one line:

   ```xml
   <url><loc>https://gspanos.tech/posts/my-new-post/</loc></url>
   ```

7. `git add -A && git commit -m "New post: ..." && git push`. GitHub Pages
   publishes on push to `main`.

## Previewing locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Use a server rather than opening the files
directly — the pages use absolute paths (`/style.css`) and the SVG sprite needs
a real origin.

## Social preview images

`og-image/<slug>.png` holds the card image for each existing post. New posts point at
`og-image/<slug>.png` too; if you don't make one, the link preview just falls back to text.

## What's where

| Path             | What it is                                                              |
| ---------------- | ----------------------------------------------------------------------- |
| `_template.html` | The page skeleton. Copy it for new posts.                               |
| `style.css`      | The entire stylesheet. Colours are CSS variables at the top.            |
| `theme.js`       | Dark/light toggle click handler.                                        |
| `icons.svg`      | SVG sprite — pages reference it with `<use href="/icons.svg#github" />`. |
| `posts/`         | One folder per post, each with an `index.html`.                         |
| `rss.xml`        | The feed. Hand-maintained.                                              |
| `sitemap.xml`    | Hand-maintained.                                                        |
| `feed/`          | Meta-refresh redirect to `/rss.xml`, kept for old subscribers.          |
| `CNAME`          | The custom domain.                                                      |
| `.nojekyll`      | Only matters if Pages is ever switched to deploy from a branch; the Actions deploy never runs Jekyll. |

Changing the header, footer, or `<head>` means editing each HTML file — there is no
templating. That is the trade for having no toolchain. `_template.html` is the
reference copy: keep it in sync so new posts inherit the change.
