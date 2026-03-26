// ============================
// CICADA SCROLLS - SCRIPT.JS
// ============================

// ⚠️ SECURITY NOTE FOR BEGINNERS:
// Passwords stored in frontend JS are NOT truly secure — anyone can view source.
// For a real login system, use a backend (Node.js / Firebase / Supabase).
// This is a demo-level lock for a personal blog.
// NEVER use this same password for important accounts.

const CREDENTIALS = {
  username: "cicada3301",
  password: "tryhackme@321"
};

// ---- LOGIN ----
function doLogin() {
  const user = document.getElementById("login-user").value.trim();
  const pass = document.getElementById("login-pass").value;
  const errEl = document.getElementById("login-error");

  if (user === CREDENTIALS.username && pass === CREDENTIALS.password) {
    errEl.textContent = "";
    const overlay = document.getElementById("login-overlay");
    overlay.style.opacity = "0";
    overlay.style.transform = "scale(1.04)";
    overlay.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    setTimeout(() => {
      overlay.classList.add("hidden");
      document.getElementById("main-site").classList.remove("hidden");
      document.getElementById("main-site").style.animation = "fadeInSite 0.5s ease";
    }, 400);
  } else {
    errEl.textContent = "❌ Wrong credentials. Try again.";
    const box = document.querySelector(".login-box");
    box.style.animation = "none";
    box.offsetHeight; // reflow
    box.style.animation = "shake 0.4s ease";
  }
}

// Allow Enter key to login
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-pass").addEventListener("keydown", (e) => {
    if (e.key === "Enter") doLogin();
  });
  document.getElementById("login-user").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("login-pass").focus();
  });
});

// ---- LOGOUT ----
function doLogout() {
  document.getElementById("main-site").classList.add("hidden");
  const overlay = document.getElementById("login-overlay");
  overlay.classList.remove("hidden");
  overlay.style.opacity = "1";
  overlay.style.transform = "scale(1)";
  document.getElementById("login-user").value = "";
  document.getElementById("login-pass").value = "";
  document.getElementById("login-error").textContent = "";
}

// ---- FILTER BLOGS ----
function filterBlogs(cat) {
  const cards = document.querySelectorAll(".blog-card");
  const tag = document.getElementById("filter-tag");

  cards.forEach(card => {
    if (cat === "all" || card.dataset.cat === cat) {
      card.classList.remove("hidden");
      card.style.animation = "cardPop 0.3s ease";
    } else {
      card.classList.add("hidden");
    }
  });

  if (cat === "all") {
    tag.textContent = "";
  } else {
    const labels = {
      finance: "💸 Finance", politics: "🗳️ Politics", war: "⚔️ War",
      economics: "📉 Economics", health: "💊 Health", food: "🍛 Food",
      veg: "🥦 Veg", religion: "🕌 Religion"
    };
    tag.textContent = labels[cat] || cat;
  }

  document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
}

// ---- MODAL ----
function openBlog(btn) {
  document.getElementById("blog-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("blog-modal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("blog-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
});

// ---- CSS ANIMATIONS (injected) ----
const style = document.createElement("style");
style.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-8px); }
    80% { transform: translateX(8px); }
  }
  @keyframes fadeInSite {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes cardPop {
    from { opacity: 0; transform: scale(0.96); }
    to { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(style);
