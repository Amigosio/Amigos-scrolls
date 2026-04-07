// ============================
// AMIGOS SCROLLS - SCRIPT.JS
// ============================

const CREDENTIALS = { username: "cicada3301", password: "tryhackme@321" };

// ---- FULL BLOG DATA ----
const blogs = [
  {
    cat: "Finance", emoji: "💸", color: "#FFD700",
    title: "Why Your Savings Account Is Actually a Joke",
    time: "3 min read",
    body: `<p>Your bank gives you 3% interest. Inflation runs at 6%. Congratulations — you are officially getting poorer while doing nothing. That's not saving, that's a slow financial funeral with a savings passbook as the eulogy.</p>
    <p>The real game? Assets. Index funds. Gold. Real estate. Anything that outpaces inflation. The average Indian savings account is a trap dressed up in a blue passbook and a free chequebook. Meanwhile, your money is quietly melting every single year.</p>
    <p>Here's what actually works: Nifty 50 index funds, Public Provident Fund (PPF) for tax-free compounding, real estate in tier-2 cities, and sovereign gold bonds for those who want the security of gold without the physical headache.</p>
    <p>The formula is simple — spend less than you earn, invest the rest in assets that grow faster than inflation, and stop treating your savings account like a victory. It's just a parking lot. Park briefly, then move your money somewhere it can run.</p>`
  },
  {
    cat: "Finance", emoji: "📊", color: "#FF6B35",
    title: "Crypto: Genius Investment or Expensive Gambling?",
    time: "4 min read",
    body: `<p>Bitcoin made millionaires. Bitcoin also made a lot of people cry into their keyboards at 2am. The truth is somewhere in between — it's a volatile, speculative, occasionally revolutionary asset class that is 100% not for the faint-hearted.</p>
    <p>Here's the honest breakdown: Crypto is not a scam. It's also not magic internet money that will make you rich overnight. It's a highly speculative bet on the future of decentralised finance. Some of those bets will pay off spectacularly. Others will go to absolute zero.</p>
    <p>My hot take? Allocate only what you can afford to watch go to zero, laugh about it, and still afford chai. Because crypto doesn't care about your feelings, your rent, or your retirement plans. It will crash 80% and some influencer will call it "a buying opportunity."</p>
    <p>If you're going in — research before you ape in, stick to the top 2-3 coins, never put your emergency fund in, and for the love of God, use a hardware wallet and not some exchange that might vanish overnight.</p>`
  },
  {
    cat: "Finance", emoji: "🏦", color: "#7B2FBE",
    title: "SIP or Skip? The Truth About Mutual Funds",
    time: "5 min read",
    body: `<p>Everyone's uncle who works in finance will tell you to "start a SIP." And honestly? They're not wrong — they're just incomplete. SIPs (Systematic Investment Plans) are great for long-term wealth, but mutual funds aren't magic.</p>
    <p>Here's what nobody tells you: Expense ratios eat returns. A fund charging 2% annually is stealing a significant chunk of your wealth over 20 years thanks to compounding. Active fund managers, despite their fancy degrees, rarely beat index funds consistently over the long term.</p>
    <p>The verdict: For most salaried Indians with zero time to research stocks, a SIP in a Nifty 50 or Nifty Next 50 index fund is genuinely one of the smartest boring decisions you can make. Low cost, diversified, and you just... forget about it for 15 years.</p>
    <p>The key rules: Start early (even ₹500/month matters), increase SIP amount by 10% every year, don't stop during market crashes (that's when you're buying cheap!), and ignore the noise. Consistency beats timing every single time.</p>`
  },
  {
    cat: "Politics", emoji: "🗳️", color: "#E63946",
    title: "Election Season: Where Promises Go to Die",
    time: "4 min read",
    body: `<p>Every 5 years, politicians rediscover the poor. Suddenly there are roads to be built, gas cylinders to be given, and photographs to be taken next to farmers. Campaign buses appear in villages that haven't seen government officials in years. The samosas are free. The promises are cheaper.</p>
    <p>Then the election ends and — poof — they vanish like they were never there. The constituency becomes a ghost of campaign promises. The road is half-built. The cylinders were a one-time thing. The farmer is still waiting.</p>
    <p>It's the greatest magic trick in democracy: making voters' problems disappear while making politicians' bank accounts appear. And yet, we keep falling for it — because what's the alternative? Not vote? Vote for someone else who will also disappear?</p>
    <p>The real solution is boring and slow: informed local voting, RTI applications, demanding accountability between elections, not just during them. Democracy works best when citizens are annoying year-round, not just in May.</p>`
  },
  {
    cat: "Politics", emoji: "📺", color: "#2D6A4F",
    title: "News Anchors vs Journalists: What's the Difference?",
    time: "3 min read",
    body: `<p>Once upon a time, journalism meant holding power accountable. It meant RTIs, source protection, investigative reporting, and speaking truth even when it was uncomfortable. Today? It means shouting louder than the person opposite you on a primetime debate.</p>
    <p>The news anchor has evolved from reporter to performer, complete with dramatic background music, red breaking news banners, and outrage calibrated to exact TRP frequencies. The louder the anchor, the higher the ratings. The more outrage, the more ad revenue.</p>
    <p>Meanwhile, actual investigative journalists file RTIs from their laptops, get exactly 1,200 views on YouTube, and occasionally get booked under obscure laws for the inconvenience of doing real journalism.</p>
    <p>The solution? Be a media-literate consumer. Read, don't just watch. Seek out multiple sources. Support independent journalists directly. The media you consume shapes what you think is important — so choose carefully.</p>`
  },
  {
    cat: "War", emoji: "⚔️", color: "#333",
    title: "Why Do Wars Start? (It's Never Just One Reason)",
    time: "5 min read",
    body: `<p>History teachers will give you one clean answer. Reality gives you seventeen messy ones. Wars start because of oil, egos, borders, religion, propaganda, fear, greed, and the occasional assassination of an archduke who happened to be in the wrong place.</p>
    <p>The common thread in almost every war is this: ordinary people, convinced that dying for a politician's decision is glory. The propaganda machine runs before the tanks. By the time boots hit the ground, most soldiers genuinely believe they're fighting for something noble.</p>
    <p>The 21st century hasn't fixed this. It's just upgraded the weapons and added social media to the propaganda toolkit. Now wars come with hashtags and drone footage and clean language like "precision strikes" to make mass destruction sound clinical.</p>
    <p>The most important question to ask about any war: Who benefits? Follow the money, the arms deals, the resource contracts, the political power being consolidated. The answer is rarely the people doing the dying.</p>`
  },
  {
    cat: "Economics", emoji: "📉", color: "#06D6A0",
    title: "Inflation Explained: Why Your ₹100 Buys Less Every Year",
    time: "4 min read",
    body: `<p>In 2000, ₹100 could feed a small family. Today it barely covers a café sandwich. Welcome to inflation — the invisible tax that nobody voted for but everyone pays, every single day, at every shop, for the rest of their lives.</p>
    <p>Here's how it works: When the money supply increases faster than the supply of goods, each rupee becomes worth slightly less. Central banks manage this carefully — some inflation (around 2-4%) is actually healthy for an economy. It encourages spending and investment. Too much or too little? Disaster.</p>
    <p>India's inflation problem is structural: food inflation driven by supply chain issues, fuel costs that ripple through everything, and wages that simply haven't kept up with the cost of living for most of the population.</p>
    <p>What can you do? You can't stop inflation, but you can outrun it. Keep your money in assets that grow faster than inflation — index funds historically return 12-15% in India while inflation sits around 5-6%. The gap is your real return.</p>`
  },
  {
    cat: "Health", emoji: "💊", color: "#F72585",
    title: "Sleep Is the Original Superfood (And You're Starving)",
    time: "3 min read",
    body: `<p>You will spend ₹3,000 on a protein powder that tastes like chalk, ₹2,000 on a yoga mat you've used twice, and ₹500 on a wellness app — but you won't go to bed before 1am. That's the modern health paradox in one sentence.</p>
    <p>Science is remarkably clear about sleep: 7-9 hours of quality sleep improves memory consolidation, muscle recovery, metabolic function, immune strength, emotional regulation, and cardiovascular health. And it costs exactly ₹0. It's free. It comes with your body.</p>
    <p>We've built a culture where exhaustion is a badge of honour. "I only slept 4 hours" said with pride. "I hustle 24/7" as if the human body was designed for continuous operation without rest. It wasn't. Sleep deprivation is literally a form of torture used in warfare.</p>
    <p>The single highest ROI health intervention you can make right now: fix your sleep. Dark room, cool temperature, same bedtime every night, phone outside the bedroom. Your brain, body, and everyone who has to deal with you will thank you.</p>`
  },
  {
    cat: "Food", emoji: "🍛", color: "#FF9F1C",
    title: "The Biryani Wars: Hyderabadi vs Lucknowi (I Chose Violence)",
    time: "4 min read",
    body: `<p>This is not a debate. This is a matter of identity, heritage, and deeply personal rice-related trauma. Families have been divided. Friendships tested. Restaurant bills argued over because someone ordered the "wrong" biryani at a group dinner.</p>
    <p>Hyderabadi biryani fans will tell you the dum process is sacred — raw marinated meat and partially cooked rice sealed together, steaming in their own glory until the meat falls apart and the rice absorbs every molecule of flavour. It's drama. It's theatre. It's correct.</p>
    <p>Lucknowi (Awadhi) fans will say pakki dum is the only civilised way — meat cooked separately to perfection, then layered with rice and finished together. More subtle. More refined. Also correct, in a completely different universe.</p>
    <p>The real answer: whichever biryani is in front of you right now, still hot, is the best biryani. Except the overpriced hotel biryani that's ₹800 for 200 grams. That one deserves criticism regardless of its regional origin.</p>`
  },
  {
    cat: "Veg", emoji: "🥦", color: "#55A630",
    title: "Going Veg in India: Easy Mode or Impossible Quest?",
    time: "4 min read",
    body: `<p>India is simultaneously the best and most confusing country to be vegetarian in. On one hand: paneer in literally every form imaginable, dal makhani that exists on a spiritual plane above ordinary food, samosas at every corner of every street.</p>
    <p>On the other hand: "it's just chicken stock, not actually non-veg" from every restaurant that doesn't understand what vegetarian means. The constant social interrogation of your dietary choices by relatives eating jalebi for breakfast. The wedding buffet where every dish somehow has a meat-based gravy option.</p>
    <p>Being veg in India isn't just a dietary choice — it's an identity claim, a religious statement, a caste marker, a lifestyle brand, and a source of endless dinner table arguments. No other country has made vegetables this emotionally complex.</p>
    <p>The upside: Indian vegetarian cuisine is genuinely one of the most creative, diverse, and delicious in the world. When you're eating perfectly spiced rajma chawal or a proper South Indian thali, you're not missing anything. You're eating the good stuff.</p>`
  },
  {
    cat: "Religion", emoji: "🕌", color: "#C9184A",
    title: "Faith, Festivals & the Business of Belief in India",
    time: "5 min read",
    body: `<p>India doesn't just have religion — it has a religion economy. Temples sitting on more gold than many small nations. Festival seasons that drive some of the biggest consumer spending spikes of the year. Astrology apps with millions of subscribers who check their kundali before making business decisions.</p>
    <p>And that's not necessarily bad — it's just honest. The divine and the profitable have always coexisted in India's spiritual landscape. The Tirupati temple has better financial management than most listed companies. The Vaishno Devi shrine complex is a masterpiece of crowd management and infrastructure.</p>
    <p>What gets complicated is when faith becomes political currency — when temples become tools and prayers become propaganda. When religion, which should be personal, becomes a weapon in the hands of people who haven't stepped inside a place of worship except for the photo opportunity.</p>
    <p>Real faith — the kind that makes people kinder, more generous, more patient — is deeply private and quietly powerful. The loudest religion is rarely the most genuine. Watch what people do when nobody's watching. That's where actual belief lives.</p>`
  },
  {
    cat: "Tech", emoji: "💻", color: "#4CC9F0",
    title: "AI Is Coming For Your Job (And Your Excuses)",
    time: "5 min read",
    body: `<p>First it was calculators making mathematicians "obsolete." Then Excel. Then automation in factories. Now ChatGPT is writing emails, Midjourney is creating art, and GitHub Copilot is coding. Every generation has its "this will replace us" panic, and every generation is partially right.</p>
    <p>Here's the honest picture: AI won't replace humans. It will replace humans who don't know how to use AI. The people who will thrive are those who treat AI as a power tool — something that amplifies their abilities, not threatens them.</p>
    <p>The jobs most at risk are routine cognitive tasks — data entry, basic writing, simple analysis, customer service scripts, rote coding. The jobs safest are those requiring genuine creativity, complex human judgment, physical dexterity in unpredictable environments, and deep interpersonal trust.</p>
    <p>What should you do right now? Learn to use the tools. Understand what they're good at (speed, pattern recognition, summarising) and what they're bad at (genuine creativity, ethical judgment, real-world nuance). Then position yourself as the human who makes AI actually useful. That's the most valuable skill of the next decade.</p>`
  },
  {
    cat: "Tech", emoji: "📱", color: "#3A0CA3",
    title: "Your Smartphone Is Spying On You (And You Agreed)",
    time: "4 min read",
    body: `<p>Remember that 47-page terms and conditions document you scrolled past in 0.3 seconds and clicked "I Agree"? Yeah. Buried in page 31 was the bit where you gave a tech company permission to know your location, contacts, browsing habits, purchase history, and possibly your general mood based on typing patterns.</p>
    <p>This is not a conspiracy theory. It's a business model. You are not the customer of free apps — you are the product. Your data is sold to advertisers, analysed by algorithms, and used to predict and influence your behaviour. Every scroll, every click, every hesitation is data.</p>
    <p>The most unsettling part? It works. We keep buying things we didn't know we needed, consuming content that makes us anxious, and spending more time on platforms specifically designed to be as addictive as possible.</p>
    <p>What can you do? Use a VPN. Turn off location when not needed. Audit which apps have microphone and camera access. Consider paid alternatives to free services (if you're not paying, you're the product). At minimum — read the privacy policy. Or at least the summary. You deserve to know the deal you're getting.</p>`
  },
  {
    cat: "Sports", emoji: "🏏", color: "#0077B6",
    title: "Why India Is Cricket Obsessed and Everything Else Is Secondary",
    time: "4 min read",
    body: `<p>India has 1.4 billion people, a dozen Olympic medal-worthy sports, athletes who are genuinely world-class in wrestling, badminton, shooting, and athletics — and somehow 99% of the national sporting emotion is invested in 11 men holding a bat and a ball.</p>
    <p>Cricket in India isn't a sport. It's a collective emotional experience, a national religion, and a ₹15,000 crore industry all at once. When India plays Pakistan, the country doesn't just watch — it stops. Offices go silent. Streets empty. Millions of hearts beat together in terrifying synchrony.</p>
    <p>The colonial history matters: cricket was the sport of the British rulers, and Indians adopted it, then mastered it, then became the most powerful cricketing nation on earth. There's a certain poetic justice in that.</p>
    <p>But here's the question: does our obsession with cricket actively hurt other sports? When every sponsorship rupee, every TV channel, every kid's dream goes to cricket, what happens to our swimmers, our footballers, our track athletes? They compete on fraction of the resources with a fraction of the attention. We need to do better.</p>`
  },
  {
    cat: "Sports", emoji: "🏆", color: "#FB8500",
    title: "IPL: Sport or Bollywood With Cricket Sprinkled In?",
    time: "3 min read",
    body: `<p>Cheerleaders in matching outfits. Celebrity team owners waving from their boxes. Player auctions where humans are assigned a price tag and bought with the enthusiasm of a livestock fair. Opening ceremonies with Bollywood performances lasting longer than the first innings. And somewhere, eventually, some cricket happens.</p>
    <p>The IPL is the most successful cricket tournament on earth and also the one that has done the most to transform cricket from sport to entertainment product. And depending on who you ask, that's either the greatest thing to happen to Indian sport or a gaudy, overcrowded spectacle that has ruined the purity of the game.</p>
    <p>Both camps have a point. The IPL has created extraordinary wealth for players, given global exposure to young Indian talent, and brought cricket to new audiences. It's also shortened attention spans, devalued test cricket, and turned teams into brands.</p>
    <p>My take: watch it for what it is — high-intensity entertainment with great cricket occasionally breaking through. Just don't confuse it with the soul of the game. That's still in the test match, played over five days, where nothing matters and everything does.</p>`
  },
  {
    cat: "Travel", emoji: "✈️", color: "#2DC653",
    title: "Budget Travel in India: How to See Everything for ₹500/Day",
    time: "6 min read",
    body: `<p>India is enormous, gorgeous, chaotic, deeply spiritual, occasionally maddening, and surprisingly affordable if you know the tricks. The country that confuses first-time visitors with its sheer scale can be navigated beautifully on a shoestring — if you're willing to travel the way most Indians actually travel.</p>
    <p>The sleeper class train is your best friend. Crossing 1,000 kilometers overnight for ₹300 while sleeping in a berth — that's India's secret. Book on the IRCTC app, get a window seat, and watch the country scroll past. Nothing beats it for authentic travel experience and value for money.</p>
    <p>Eat at dhabas and local joints, not tourist restaurants. A thali that would cost ₹600 in a touristy restaurant costs ₹80 at the place down the road where the locals eat. The food is often better. The atmosphere is definitely more real.</p>
    <p>Stay in government guesthouses, dharamshalas, or budget hostels in the ₹200-400/night range. Visit state-run monuments rather than private tourist traps. Travel in shoulder season (Oct-Nov or Feb-March). Most importantly: slow down. Spend a week in one place rather than rushing through five. India rewards patience more than any other country.</p>`
  },
  {
    cat: "Travel", emoji: "🌆", color: "#E9C46A",
    title: "Mumbai vs Delhi: The Eternal Indian City Rivalry",
    time: "4 min read",
    body: `<p>Ask a Mumbaikar about Delhi and watch them shudder slightly before composing themselves to say something diplomatic. Ask a Delhiite about Mumbai and they'll say "too expensive, too small, no space, everyone's always rushing." Both are accurate. Both are incomplete.</p>
    <p>Mumbai is the city of possibility — everyone is there to make it, hustle it, dream it. The city is relentless, expensive, exhausting, and electric. It never sleeps because sleeping is a luxury in a city where rent takes your entire salary. But the energy! The diversity! The street food at 3am! There's nowhere else like it.</p>
    <p>Delhi is the city of power and history — where politics happens, where old money lives, where the roads are actually wide, where you can eat a proper meal for a fraction of Mumbai prices. It's greener, more spread out, colder in winter, and carries a weight of history that makes every monument feel like it's whispering stories.</p>
    <p>The real answer: they're both extraordinary, completely different, and serve completely different human needs. Go to Mumbai when you want to feel alive in a slightly panicked way. Go to Delhi when you want to feel like you're at the centre of something enormous and ancient. Go to both. They're both India at its most intense.</p>`
  }
];

// ---- COMMENTS STORAGE ----
let comments = {};
let currentBlogIndex = null;
let subscribers = [];

// ---- LOGIN ----
function doLogin() {
  const user = document.getElementById("login-user").value.trim();
  const pass = document.getElementById("login-pass").value;
  const errEl = document.getElementById("login-error");
  if (user === CREDENTIALS.username && pass === CREDENTIALS.password) {
    errEl.textContent = "";
    const overlay = document.getElementById("login-overlay");
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.4s ease";
    setTimeout(() => {
      overlay.classList.add("hidden");
      document.getElementById("main-site").classList.remove("hidden");
    }, 400);
  } else {
    errEl.textContent = "❌ Wrong credentials. Try again.";
    const box = document.querySelector(".login-box");
    box.style.animation = "none";
    box.offsetHeight;
    box.style.animation = "shake 0.4s ease";
  }
}

function doLogout() {
  document.getElementById("main-site").classList.add("hidden");
  const overlay = document.getElementById("login-overlay");
  overlay.classList.remove("hidden");
  overlay.style.opacity = "1";
  document.getElementById("login-user").value = "";
  document.getElementById("login-pass").value = "";
  document.getElementById("login-error").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-pass").addEventListener("keydown", e => { if (e.key === "Enter") doLogin(); });
  document.getElementById("login-user").addEventListener("keydown", e => { if (e.key === "Enter") document.getElementById("login-pass").focus(); });
  document.getElementById("blog-modal").addEventListener("click", e => { if (e.target === document.getElementById("blog-modal")) closeModal(); });
});

// ---- FILTER ----
function filterBlogs(cat) {
  const cards = document.querySelectorAll(".blog-card");
  const tag = document.getElementById("filter-tag");
  cards.forEach(card => {
    card.classList.toggle("hidden", cat !== "all" && card.dataset.cat !== cat);
  });
  const labels = { finance:"💸 Finance", politics:"🗳️ Politics", war:"⚔️ War", economics:"📉 Economics", health:"💊 Health", food:"🍛 Food", veg:"🥦 Veg", religion:"🕌 Religion", tech:"💻 Tech", sports:"🏏 Sports", travel:"✈️ Travel" };
  tag.textContent = cat === "all" ? "" : (labels[cat] || cat);
  document.getElementById("search-input").value = "";
  document.getElementById("search-notice").classList.add("hidden");
  document.getElementById("no-results").classList.add("hidden");
  document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
}

// ---- SEARCH ----
function searchBlogs() {
  const q = document.getElementById("search-input").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".blog-card");
  const notice = document.getElementById("search-notice");
  const noticeText = document.getElementById("search-notice-text");
  const noResults = document.getElementById("no-results");
  document.getElementById("filter-tag").textContent = "";
  let found = 0;
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const cat = card.dataset.cat.toLowerCase();
    const matches = !q || title.includes(q) || cat.includes(q);
    card.classList.toggle("hidden", !matches);
    if (matches) found++;
  });
  if (q) {
    notice.classList.remove("hidden");
    noticeText.textContent = `🔍 Showing ${found} result${found !== 1 ? 's' : ''} for "${q}"`;
    noResults.classList.toggle("hidden", found > 0);
  } else {
    notice.classList.add("hidden");
    noResults.classList.add("hidden");
  }
}

function clearSearch() {
  document.getElementById("search-input").value = "";
  searchBlogs();
}

// ---- OPEN BLOG ----
function openBlog(index) {
  currentBlogIndex = index;
  const b = blogs[index];
  document.getElementById("modal-content").innerHTML = `
    <span class="modal-cat">${b.emoji} ${b.cat.toUpperCase()}</span>
    <h2>${b.title}</h2>
    <div class="modal-meta">⏱ ${b.time} &nbsp;·&nbsp; The Amigos Scrolls</div>
    <div class="modal-body">${b.body}</div>
  `;
  renderComments(index);
  document.getElementById("blog-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("blog-modal").classList.add("hidden");
  document.body.style.overflow = "";
  currentBlogIndex = null;
}

// ---- COMMENTS ----
function renderComments(index) {
  const list = document.getElementById("comments-list");
  const blogComments = comments[index] || [];
  if (blogComments.length === 0) {
    list.innerHTML = '<p class="no-comments">No comments yet. Be the first! 🐛</p>';
    return;
  }
  list.innerHTML = blogComments.map(c => `
    <div class="comment-item">
      <div class="comment-author">👤 ${c.name}</div>
      <div class="comment-text">${c.text}</div>
      <div class="comment-time">${c.time}</div>
    </div>
  `).join('');
}

function postComment() {
  const name = document.getElementById("comment-name").value.trim();
  const text = document.getElementById("comment-text").value.trim();
  if (!name || !text) { alert("Please fill in your name and comment!"); return; }
  if (currentBlogIndex === null) return;
  if (!comments[currentBlogIndex]) comments[currentBlogIndex] = [];
  comments[currentBlogIndex].push({ name, text, time: new Date().toLocaleString('en-IN') });
  renderComments(currentBlogIndex);
  document.getElementById("comment-name").value = "";
  document.getElementById("comment-text").value = "";
}

// ---- EMAILJS CONFIG ----
const EMAILJS_SERVICE_ID  = "service_mjg1ypx";
const EMAILJS_TEMPLATE_ID = "template_7vgj9xi";
const EMAILJS_PUBLIC_KEY  = "_vEp4_tRaxLSzIjy-";

// ---- NEWSLETTER ----
async function subscribeNewsletter() {
  const emailInput = document.getElementById("newsletter-email");
  const email = emailInput.value.trim();
  const msg = document.getElementById("newsletter-msg");
  const list = document.getElementById("subscribers-list");
  const btn = document.querySelector(".newsletter-form button");

  if (!email || !email.includes("@") || !email.includes(".")) {
    msg.style.color = "#F72585";
    msg.textContent = "❌ Please enter a valid email address!";
    return;
  }
  if (subscribers.includes(email)) {
    msg.style.color = "#FFD700";
    msg.textContent = "⚠️ This email is already subscribed!";
    return;
  }

  btn.textContent = "SENDING... 📨";
  btn.disabled = true;
  msg.style.color = "#aaa";
  msg.textContent = "Sending your welcome email...";

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      { email: email },
      EMAILJS_PUBLIC_KEY
    );
    subscribers.push(email);
    msg.style.color = "#06D6A0";
    msg.textContent = "✅ You are in the hive! Check your inbox for a welcome email 🐛";
    emailInput.value = "";
    const tag = document.createElement("span");
    tag.className = "subscriber-tag";
    tag.textContent = email;
    list.appendChild(tag);
  } catch (error) {
    console.error("EmailJS error:", error);
    msg.style.color = "#F72585";
    msg.textContent = "❌ Something went wrong. Please try again!";
  }

  btn.textContent = "SUBSCRIBE 🐛";
  btn.disabled = false;
}

// ---- CSS ANIMATIONS ----
const style = document.createElement("style");
style.textContent = `
  @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-10px)} 40%{transform:translateX(10px)} 60%{transform:translateX(-8px)} 80%{transform:translateX(8px)} }
`;
document.head.appendChild(style);
