<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Papi Portfolio</title>
<style> :root{
  --bg: #0f1724;
  --card: #0b1220;
  --text: #e6eef6;
  --muted: #9fb0c8;
  --accent: #6ee7b7;
  --glass: rgba(255,255,255,0.03);
  --radius: 14px;
}

[data-theme="light"] {
  --bg: #f7fbff;
  --card: #ffffff;
  --text: #0b1220;
  --muted: #5b6b7a;
  --accent: #0ea5a1;
  --glass: rgba(2,6,23,0.04);
}

/* basic reset */
*{box-sizing:border-box;margin:0;padding:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;}
html,body{height:100%}
body{background:linear-gradient(180deg,var(--bg),#071022);color:var(--text);-webkit-font-smoothing:antialiased;}

/* nav */
.nav{display:flex;align-items:center;justify-content:space-between;padding:18px 36px;background:transparent;position:fixed;left:0;right:0;top:0;z-index:50}
.logo{font-weight:700;letter-spacing:1px}
.logo span{font-weight:400;color:var(--muted)}
.nav-links a{margin-left:18px;color:var(--text);text-decoration:none}
.nav-links{display:flex;align-items:center}
.nav-links .admin-link{background:var(--accent);padding:8px 12px;border-radius:10px;color:#00211b;margin-left:14px}
.theme-toggle{margin-left:12px;padding:8px;border-radius:10px;background:transparent;border:1px solid rgba(255,255,255,0.04);cursor:pointer}

/* hero */
.hero{height:78vh;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;padding:80px 20px}
.hero-inner{max-width:920px;z-index:10}
.headline{font-size:48px;margin-bottom:12px}
.lead{font-size:18px;color:var(--muted);margin-bottom:22px}
.cta-row .btn{margin-right:12px}

/* orbs */
.orb{position:absolute;border-radius:50%;filter:blur(40px);opacity:0.6}
.orb-1{width:360px;height:360px;background:linear-gradient(135deg,#6ee7b7,#60a5fa);left:-120px;top:-40px;animation:float 8s ease-in-out infinite}
.orb-2{width:250px;height:250px;background:linear-gradient(135deg,#f472b6,#a78bfa);right:-80px;top:40px;animation:float 10s ease-in-out infinite}
.orb-3{width:180px;height:180px;background:linear-gradient(135deg,#f59e0b,#fb7185);left:70%;bottom:-60px;animation:float 12s ease-in-out infinite}
@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-20px)}100%{transform:translateY(0)}}

/* sections */
.section{padding:80px 24px;max-width:1100px;margin:0 auto}
.about-grid{display:grid;grid-template-columns:1fr 360px;gap:28px;align-items:center}
.about-card img{width:100%;border-radius:12px;display:block}

/* projects */
.project-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
.project{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 6px 18px rgba(0,0,0,0.25)}

/* posts */
.posts-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
.post-card{background:var(--card);padding:14px;border-radius:10px}
.post-card img{width:100%;border-radius:8px;margin-bottom:10px}

/* forms */
.contact-form, .post-form{display:flex;flex-direction:column;gap:12px;max-width:700px}
.contact-form input, .post-form input, .post-form textarea, .contact-form textarea{background:var(--glass);border:1px solid rgba(255,255,255,0.04);padding:12px;border-radius:10px;color:var(--text)}
.btn{background:var(--accent);color:#001;padding:10px 14px;border-radius:10px;border:none;cursor:pointer}
.btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--text)}

/* footer */
.footer{padding:40px 20px;text-align:center;color:var(--muted)}

/* responsive */
@media(max-width:880px){
  .about-grid{grid-template-columns:1fr}
  .nav{padding:12px 16px}
  .headline{font-size:36px}
}
/* Active nav link highlight */
.nav-links a.active {
  color: var(--accent);
  font-weight: 600;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 4px;
}
</style>
</head>
<body>
  <header class="nav">
    <div class="logo">Papi <span>Portfolio</span></div>
    <nav class="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="blog.html">Blog</a>
      <a href="#contact">Contact</a>
      <a href="admin.html" class="admin-link">Admin</a>
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">🌙</button>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="hero-inner">
        <h1 class="headline">Hi — I'm <span class="accent">Papi</span></h1>
        <p class="lead">I build beautiful, modern web experiences. Welcome to my portfolio (2025).</p>
        <div class="cta-row">
          <a class="btn" href="#projects">See projects</a>
          <a class="btn btn-ghost" href="blog.html">Read my blog</a>
        </div>
      </div>

      <!-- Animated shapes -->
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </section>

    <section id="about" class="section about">
      <h2>About Me</h2>
      <div class="about-grid">
        <div class="about-text">
          <p>I'm a front-end focused developer who loves motion, responsive design and elegant code. I design and build websites that people enjoy using.</p>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Design & animations</li>
          </ul>
        </div>
        <div class="about-card">
          <img src="/images/image1" alt="Papi" />
        </div>
      </div>
    </section>

    <section id="projects" class="section projects">
      <h2>Projects</h2>
      <div class="project-list">
        <article class="project">
          <h3>Project Alpha</h3>
          <h2>hospital websites</h2>
          <h4>https://melanin-hosptal.netlify.app/</h4>
          <p>Animated landing page with fluid interactions.</p>
          
          <a class="small-link" href="#">View</a>
        </article>

        <article class="project">
          <h3>Project Beta</h3>
          <p>Full-stack app with admin panel and CMS.</p>
          <a class="small-link" href="#">View</a>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact">
      <h2>Contact</h2>
      <form id="contactForm" class="contact-form">
        <input name="name" placeholder="Your name" />
        <input name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit" class="btn">Send message</button>
      </form>
      <p class="muted">Or email me at <a href="solopappy76@gmail.com">solopappy76@gmail.com</a></p>
    </section>
  </main>

  <footer class="footer">
    <p>© <span id="year"></span> Papi Portfolio</p>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
