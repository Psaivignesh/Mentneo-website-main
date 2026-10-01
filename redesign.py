import re

def update_css():
    with open('src/App.css', 'r') as f:
        css = f.read()

    # 1. Fonts
    css = re.sub(
        r"@import url\([^)]+\);",
        "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');",
        css
    )
    
    css = re.sub(r"'Space Grotesk',sans-serif", "'Inter', sans-serif", css)
    css = re.sub(r"'Space Grotesk'", "'Inter'", css)
    css = re.sub(r"'Manrope'", "'Inter'", css)
    css = re.sub(r"'IBM Plex Mono','Courier New',monospace", "'Inter', sans-serif", css)
    css = re.sub(r"'Inter Tight',sans-serif", "'Inter', sans-serif", css)
    css = re.sub(r"'IBM Plex Mono', 'Courier New', monospace", "'Inter', sans-serif", css)

    # 2. Variables
    css = re.sub(
        r":root\{.*?\}",
        ":root{--black:#000000;--ink:#000000;--surface:#0a0a0a;--line:rgba(255,255,255,0.1);--white:#ffffff;--grey:#a1a1aa;--muted:#71717a;--blue:#3b82f6;--cyan:#06b6d4}",
        css
    )

    # 3. Headings & Typography
    css = re.sub(r"h2 span,h1 em,\.contact em\{font-style:normal;color:var\(--blue\)\}", "h2 span,h1 em,.contact em{font-style:normal;color:var(--white)}", css)
    
    # Remove uppercase from hero h1
    css = re.sub(r"text-transform:uppercase;", "", css)
    css = re.sub(r"text-transform: uppercase;", "", css)

    # 4. Buttons
    css = re.sub(r"\.button\{[^\}]+\}", ".button{display:inline-flex;align-items:center;justify-content:center;border-radius:4px;padding:12px 24px;font:400 15px 'Inter',sans-serif;transition:all .2s ease;}", css)
    css = re.sub(r"\.button-primary\{[^\}]+\}", ".button-primary{background:var(--white);color:var(--black);border:1px solid var(--white);}", css)
    css = re.sub(r"\.button-primary:hover\{[^\}]+\}", ".button-primary:hover{background:transparent;color:var(--white);}", css)
    css = re.sub(r"\.button-primary span\{[^\}]+\}", ".button-primary span{color:inherit;margin-left:8px; transition:transform .2s;}", css)
    css = re.sub(r"\.button-primary:hover span\{[^\}]+\}", "", css)

    css = re.sub(r"\.button-ghost\{[^\}]+\}", ".button-ghost{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,0.2);}", css)
    css = re.sub(r"\.button-ghost:hover\{[^\}]+\}", ".button-ghost:hover{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.4);}", css)
    css = re.sub(r"\.button-ghost span\{[^\}]+\}", ".button-ghost span{color:inherit;margin-left:8px; transition:transform .2s;}", css)

    # 5. Header
    css = re.sub(r"\.site-header\{[^\}]+\}", ".site-header{position:fixed;z-index:20;top:0;left:0;right:0;width:100%;height:72px;padding:0 max(5vw,28px);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid transparent;background:rgba(0,0,0,0.6);backdrop-filter:blur(12px);transition:.28s}", css)
    css = re.sub(r"\.site-header \.header-cta\{[^\}]+\}", ".site-header .header-cta{border:0;border-radius:4px;padding:8px 16px;background:var(--white);color:var(--black);font:400 13px 'Inter',sans-serif;transition:all .2s}", css)
    css = re.sub(r"\.site-header \.header-cta:hover\{[^\}]+\}", ".site-header .header-cta:hover{opacity:0.85}", css)
    css = re.sub(r"\.site-header \.header-cta span\{[^\}]+\}", ".site-header .header-cta span{color:var(--black);margin-left:6px;}", css)

    # 6. Hero and backgrounds
    css = re.sub(r"background-image:linear-gradient.*?background-size:80px 80px", "background:var(--black)", css)
    css = re.sub(r"\.hero:after\{[^\}]+\}", ".hero:after{display:none;}", css)
    
    # Hero Visual
    css = re.sub(r"\.hero-visual\{[^\}]+\}", ".hero-visual{position:absolute;z-index:1;right:2vw;width:min(47vw,660px);aspect-ratio:1;border:1px solid rgba(255,255,255,0.05);border-radius:50%;opacity:0.4;background:transparent}", css)
    css = re.sub(r"\.orbit\{[^\}]+\}", ".orbit{position:absolute;border:1px solid rgba(255,255,255,0.08);border-radius:50%;inset:12%;transform:rotate(34deg) scaleY(.32);animation:orbit 32s linear infinite}", css)
    css = re.sub(r"\.orbit-two\{[^\}]+\}", ".orbit-two{inset:24%;transform:rotate(-48deg) scaleY(.7);border-color:rgba(255,255,255,0.05);animation-direction:reverse}", css)
    css = re.sub(r"\.core\{[^\}]+\}", ".core{position:absolute;inset:42%;border:1px solid rgba(255,255,255,0.15);background:#000;display:grid;place-content:center;text-align:center;border-radius:50%; box-shadow:none;}", css)
    
    css = css.replace("background:#050505", "background:var(--black)")
    css = css.replace("background:#080808", "background:var(--black)")

    # 7. Typography specifics
    css = re.sub(r"h1,h2,h3\{[^\}]+\}", "h1,h2,h3{font-family:'Inter',sans-serif;font-weight:400;letter-spacing:-0.03em;color:var(--white);margin:0}", css)
    css = re.sub(r"h2\{[^\}]+\}", "h2{font-size:clamp(2.5rem,6vw,4rem);line-height:1.1;letter-spacing:-0.04em;font-weight:400;}", css)
    css = re.sub(r"\.hero h1\{[^\}]+\}", ".hero h1{font-size:clamp(3.5rem,8vw,6.5rem);line-height:1;letter-spacing:-0.05em;font-weight:400;margin:24px 0 32px}", css)

    # 8. Extra cleanup
    # Remove large borders and box shadows for capabilities
    css = re.sub(r"box-shadow:0 0 0 12px #[0-9a-fA-F]+", "box-shadow:none", css)
    
    # Append subtle button hover effect
    css += "\n.button:hover span { transform: translateX(4px); }\n"
    
    # Change nav active underline color to white instead of blue
    css = css.replace("background:var(--blue)", "background:var(--white)")
    css = css.replace("color:var(--blue)", "color:var(--white)")
    css = css.replace("border-color:var(--blue)", "border-color:rgba(255,255,255,0.4)")
    css = css.replace("border-left:1px solid var(--blue)", "border-left:1px solid rgba(255,255,255,0.3)")
    css = css.replace("border-top:1px solid var(--blue)", "border-top:1px solid rgba(255,255,255,0.3)")

    with open('src/App.css', 'w') as f:
        f.write(css)

    with open('src/index.css', 'r') as f:
        icss = f.read()

    icss = re.sub(r"'DM Sans', sans-serif", "'Inter', sans-serif", icss)
    icss = icss.replace("#080a0f", "#000000")
    with open('src/index.css', 'w') as f:
        f.write(icss)

if __name__ == '__main__':
    update_css()
