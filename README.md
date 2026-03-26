# 🐛 The Cicada Scrolls — Personal Blog Website

A colourful, funny, and opinionated multi-topic blog covering Finance, Politics, War, Economics, Health, Food, Veg, and Religion. Built with pure HTML + CSS + JavaScript.

---

## 📁 File Structure

```
your-repo/
├── index.html      ← Main website file
├── style.css       ← All styling
├── script.js       ← Login logic + interactivity
└── README.md       ← This file
```

---

## 🚀 How to Deploy on GitHub Pages (Step-by-Step for Beginners)

### Step 1 — Create a GitHub Account
Go to https://github.com and sign up (free).

### Step 2 — Create a New Repository
1. Click the **"+"** button → **"New repository"**
2. Name it: `cicada-scrolls` (or anything you like)
3. Set it to **Public**
4. Click **"Create repository"**

### Step 3 — Upload Your Files
1. On your repo page, click **"uploading an existing file"**
2. Drag and drop: `index.html`, `style.css`, `script.js`
3. Click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **branch: main** and folder: **/ (root)**
5. Click **Save**

### Step 5 — Your site is live! 🎉
In a few minutes, visit:
`https://YOUR-USERNAME.github.io/cicada-scrolls/`

---

## 🌐 Connect a Custom Domain

### Step 1 — Buy a domain
Buy from: GoDaddy, Namecheap, Google Domains, or Hostinger.
Example: `cicadascrolls.in`

### Step 2 — Add domain in GitHub Pages
1. Go to repo → **Settings → Pages**
2. Under **"Custom domain"**, enter your domain (e.g. `cicadascrolls.in`)
3. Click **Save**

### Step 3 — Add DNS records at your domain registrar
Log into your domain provider and add these DNS records:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | YOUR-USERNAME.github.io  |

### Step 4 — Enable HTTPS
Back in GitHub Pages settings, check **"Enforce HTTPS"** ✅

DNS can take 10 minutes to 48 hours to propagate. Then your site is live at your custom domain!

---

## ⚠️ Security Note

The login in this site is **frontend-only** — it's a basic privacy lock, not real security. Anyone who views the page source can see the credentials. For a real secure login, consider:
- **Firebase Authentication** (free tier available)
- **Supabase** (free and beginner-friendly)
- **Netlify Identity**

---

## ✏️ How to Add More Blogs

Open `index.html` and copy this block inside the `<div class="blogs-grid">`:

```html
<article class="blog-card" data-cat="finance">
  <div class="blog-header" style="background:#YOUR_COLOR;">
    <span class="blog-emoji">💸</span>
    <span class="blog-category">Finance</span>
  </div>
  <div class="blog-body">
    <h3>Your Blog Title Here</h3>
    <p class="blog-excerpt">Your blog content goes here...</p>
    <div class="blog-footer">
      <span class="read-time">⏱ 3 min read</span>
      <button class="read-more" onclick="openBlog(this)">Read More →</button>
    </div>
  </div>
</article>
```

Change `data-cat` to one of: `finance`, `politics`, `war`, `economics`, `health`, `food`, `veg`, `religion`

---

Made with ☕ + opinions. Mumbai, India. 🇮🇳
