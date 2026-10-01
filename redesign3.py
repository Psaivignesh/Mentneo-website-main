import re

def update_jsx():
    with open('src/App.jsx', 'r') as f:
        jsx = f.read()

    # Add Client Login to header
    header_actions_search = r'<div className="header-actions"><button className="search-button"[^>]*>⌕</button>'
    replacement = '<div className="header-actions"><button className="search-button" onClick={() => { setSearchOpen(true); setActiveMenu(null) }} aria-label="Search Mentneo">⌕</button><a className="header-login" href="/admin">Client Login</a>'
    jsx = re.sub(header_actions_search, replacement, jsx)

    # Modify Hero Section
    # Extract the whole hero section
    hero_pattern = r'<section className="hero" id="top">.*?</section>'
    
    new_hero = """<div className="hero-container" id="top">
  <section className="hero">
    <button className="hero-close">Close</button>
    <div className="hero-content">
      <div className="hero-visual-new">
        <div className="shape shape-1"></div>
        <div className="shape shape-2">MN</div>
      </div>
      <div className="hero-copy">
        <p className="eyebrow">MENTNEO AI R&D</p>
        <h1>WE RESEARCH.<br /><em>WE BUILD.</em><br />WE DEPLOY.</h1>
        <p className="hero-intro">Mentneo turns complex business challenges into intelligent, production-ready technology through AI research, engineering, implementation and deployment.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Talk to our R&D team ↗</a>
          <a className="button button-ghost" href="#capabilities">Explore capabilities →</a>
        </div>
      </div>
    </div>
  </section>
  <section className="hero-cards">
    <article className="hero-card">
      <div className="card-icon">✧</div>
      <span className="card-label">01 / Research</span>
      <h3>AI Research</h3>
      <p>Exploring advanced models and intelligent architectures.</p>
      <i className="card-arrow">→</i>
    </article>
    <article className="hero-card">
      <div className="card-icon">⚡</div>
      <span className="card-label">02 / Engineering</span>
      <h3>Product Engineering</h3>
      <p>Building production-ready software and platforms.</p>
      <i className="card-arrow">→</i>
    </article>
    <article className="hero-card">
      <div className="card-icon">↗</div>
      <span className="card-label">03 / Implementation</span>
      <h3>AI Deployment</h3>
      <p>Integrating intelligence into real business workflows.</p>
      <i className="card-arrow">→</i>
    </article>
  </section>
</div>"""
    jsx = re.sub(hero_pattern, new_hero, jsx, flags=re.DOTALL)
    
    with open('src/App.jsx', 'w') as f:
        f.write(jsx)

def update_css():
    with open('src/App.css', 'r') as f:
        css = f.read()

    # Redesign variables and base
    css = re.sub(
        r":root\{.*?\}",
        ":root{--black:#050505;--white:#ffffff;--bg:#f7f7f8;--text:#111111;--grey:#666666;--line:rgba(0,0,0,0.1);--blue:#3b82f6;--purple:#8b5cf6}",
        css
    )
    
    # Update body
    css = re.sub(r"body\{[^\}]+\}", "body{margin:0;min-width:320px;background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;}", css)
    css = re.sub(r"main\{[^\}]+\}", "main{overflow:hidden;background:var(--bg);}", css)
    
    # Update Typography colors globally to support white background
    css = re.sub(r"h1,h2,h3\{[^\}]+\}", "h1,h2,h3{font-family:'Inter',sans-serif;font-weight:500;letter-spacing:-0.03em;color:var(--text);margin:0;}", css)
    
    # Update Header
    css = re.sub(r"\.site-header\{[^\}]+\}", ".site-header{position:fixed;z-index:20;top:0;left:0;right:0;width:100%;height:70px;display:flex;align-items:center;justify-content:center;background:var(--bg);border-bottom:1px solid transparent;transition:all .3s ease;}", css)
    
    # Wrapper for header content to center max-width
    # App.jsx doesn't have a wrapper, so we'll use padding and max-width on site-header, and space-between
    css = css.replace(".site-header{", ".site-header{max-width:1400px;margin:0 auto;padding:0 40px;justify-content:space-between;")
    
    css = re.sub(r"\.brand\{[^\}]+\}", ".brand{display:flex;align-items:center;gap:12px;font:600 15px 'Inter';letter-spacing:0;color:var(--text);}", css)
    css = re.sub(r"\.brand-mark\{[^\}]+\}", ".brand-mark{display:grid;place-items:center;width:24px;height:24px;border:1px solid var(--text);border-radius:4px;color:var(--text);font-size:12px;background:transparent;}", css)
    
    css = re.sub(r"\.nav-item\{[^\}]+\}", ".nav-item{display:flex;align-items:center;gap:6px;padding:8px 16px;border:0;color:var(--grey);background:transparent;font:400 14px 'Inter';transition:color .2s;}", css)
    css = re.sub(r"\.nav-item:hover,\.nav-item\.active\{[^\}]+\}", ".nav-item:hover,.nav-item.active{color:var(--text);}", css)
    
    # Header buttons
    css = re.sub(r"\.site-header \.header-cta\{[^\}]+\}", ".site-header .header-cta{border:0;border-radius:30px;padding:10px 20px;background:var(--black);color:var(--white);font:500 14px 'Inter',sans-serif;transition:all .2s;}", css)
    
    extra_css = """
.header-login { font: 500 14px 'Inter'; color: var(--text); text-decoration: none; padding: 10px 20px; border-radius: 30px; transition: background 0.2s; }
.header-login:hover { background: rgba(0,0,0,0.05); }
.hero-container {
  padding: 100px 2vw 40px;
  max-width: 1400px;
  margin: 0 auto;
}
.hero {
  position: relative;
  width: 100%;
  min-height: 650px;
  background: var(--black);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--white);
  padding: 80px 20px;
}
.hero-close {
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgba(255,255,255,0.1);
  color: var(--white);
  border: 0;
  border-radius: 20px;
  padding: 8px 16px;
  font: 400 13px 'Inter';
  cursor: pointer;
  transition: background 0.2s;
  z-index: 10;
}
.hero-close:hover {
  background: rgba(255,255,255,0.2);
}
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
}
.hero-visual-new {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shape-1 {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3));
  border: 1px solid rgba(255,255,255,0.2);
  animation: float 6s ease-in-out infinite;
  transform: rotate(15deg);
}
.shape-2 {
  position: absolute;
  font: 600 20px 'Inter';
  color: var(--white);
  z-index: 2;
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(15deg); }
  50% { transform: translateY(-10px) rotate(20deg); }
}
.hero-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero .eyebrow {
  color: var(--grey);
  font: 600 12px 'Inter';
  letter-spacing: 0.1em;
  margin-bottom: 24px;
}
.hero h1 {
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 24px;
  font-weight: 500;
}
.hero h1 em {
  color: var(--blue);
  font-style: normal;
}
.hero-intro {
  font-size: 18px;
  color: #a1a1aa;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 40px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}
.hero-actions .button-primary {
  background: var(--white);
  color: var(--black);
  border-radius: 30px;
  padding: 14px 28px;
  border: 0;
  font-weight: 500;
}
.hero-actions .button-ghost {
  background: rgba(255,255,255,0.05);
  color: var(--white);
  border-radius: 30px;
  padding: 14px 28px;
  border: 1px solid rgba(255,255,255,0.1);
}
.hero-actions .button-ghost:hover {
  background: rgba(255,255,255,0.1);
}

.hero-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
}
.hero-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hero-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.05);
}
.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--bg);
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  font-size: 18px;
}
.card-label {
  font: 500 11px 'Inter';
  color: var(--grey);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}
.hero-card h3 {
  font-size: 22px;
  color: var(--text);
  margin-bottom: 12px;
}
.hero-card p {
  color: var(--grey);
  font-size: 14px;
  margin: 0 0 24px 0;
  line-height: 1.5;
}
.card-arrow {
  margin-top: auto;
  font-style: normal;
  color: var(--grey);
  font-size: 20px;
  transition: transform 0.2s;
}
.hero-card:hover .card-arrow {
  transform: translateX(4px);
  color: var(--text);
}

@media(max-width: 900px) {
  .hero-cards { grid-template-columns: 1fr; }
  .hero { border-radius: 20px; padding: 60px 20px; }
  .hero h1 { font-size: 2.5rem; }
  .hero-actions { flex-direction: column; width: 100%; }
  .hero-actions .button { width: 100%; }
}
"""
    css += extra_css
    
    # Replace other elements globally to dark-on-light theme
    css = css.replace("background:var(--black)", "background:var(--white)")
    css = css.replace("background:#000", "background:var(--white)")
    css = css.replace("color:var(--white)", "color:var(--text)")
    
    # Fix hero text which should remain white on black
    css = css.replace(".hero h1 {\\n  font-size", ".hero h1 {\\n  color: #fff;\\n  font-size")
    
    with open('src/App.css', 'w') as f:
        f.write(css)

    # index.css update
    with open('src/index.css', 'r') as f:
        icss = f.read()
    icss = icss.replace("#000000", "#f7f7f8")
    with open('src/index.css', 'w') as f:
        f.write(icss)

if __name__ == '__main__':
    update_jsx()
    update_css()
