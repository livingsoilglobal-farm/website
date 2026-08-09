"use client";

const offering = [
  ["Dried Moringa Leaves", "Whole-leaf, carefully dried for maximum nutrient retention."],
  ["Premium Leaf Powder", "Fine, consistent, nutrient-dense green powder."],
  ["Custom Particle Sizes", "Milled to the exact specification your product needs."],
  ["Bulk B2B Packaging", "20–25 kg bags built for reliable production supply chains."],
  ["Private Label Support", "White-label ready for your brand’s launch."],
];
const reasons = [
  ["PKM-1 Variety", "A high-yield, high-nutrient cultivar selected for consistent leaf quality."],
  ["Organic Cultivation", "Grown without synthetic inputs, prioritizing long-term soil health."],
  ["Traceability", "Every batch traced from field to final packaging."],
  ["Soil Testing & Agronomy", "Data-led farming decisions from planting through harvest."],
  ["Quality-First Drying", "Controlled methods that protect color, aroma, and nutrition."],
];
const quality = [
  ["01", "Controlled Drying", "Low-temperature drying that locks in color and nutrients."],
  ["02", "Moisture Testing", "Every batch verified to spec before it moves on."],
  ["03", "Microbiology & Heavy Metals", "Screened for the contaminants your QA team checks."],
  ["04", "Batch Traceability", "Each lot traced from field to final packaging."],
  ["05", "Certificate of Analysis", "Full documentation ships with every order."],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="top" data-pickrun-id="hero-section">
        <nav className="nav" data-pickrun-id="main-navigation">
          <a className="brand" href="#top" data-pickrun-id="brand-link"><img src="/assets/420dce977_generated_762897d5.png" alt="Living Soil Farms logo" data-pickrun-id="brand-logo" data-pickrun-asset-path="/workspace/app/public/assets/420dce977_generated_762897d5.png"/><span>Living Soil <em>Farms</em></span></a>
          <div className="navlinks"><a href="#offering">OFFERING</a><a href="#why">WHY US</a><a href="#quality">QUALITY</a><a href="#customers">PARTNERS</a><a href="#contact">CONTACT</a></div>
          <a className="navcta" href="#contact">CONTACT US</a>
        </nav>
        <div className="heroContent">
          <p className="kicker">PREMIUM ORGANIC INGREDIENTS · INDIA · 2026</p>
          <h1>Premium<br/>Moringa<br/><i>Ingredients.</i></h1>
          <p className="lede">Consistent, traceable moringa, mushroom and curcumin powders &amp; extracts — built for your production line and supplied to wellness brands worldwide.</p>
          <div className="actions"><a className="button primary" href="#contact" data-pickrun-id="hero-primary-cta">CONTACT US</a><a className="button ghost" href="#offering" data-pickrun-id="hero-secondary-cta">OUR OFFERING</a></div>
        </div>
        <div className="scrollmark">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro section" id="vision" data-pickrun-id="vision-section"><div className="tag">ANDHRA PRADESH · INDIA</div><div><h2>India’s most trusted<br/><i>regenerative ingredient company</i></h2><p>We deliver nutrition to the world’s fastest-growing wellness brands — while improving the health of every acre of soil we farm. Clean-label, plant-based demand is accelerating, and brands need a reliable, high-quality supplier they can build a product line around. That is the gap we fill.</p></div><div className="stats"><span><b>Plant-Based</b>Nutrition demand rising worldwide</span><span><b>Clean-Label</b>Brands prioritizing traceable inputs</span><span><b>Functional Foods</b>Expanding beyond commodity supply</span><span><b>B2B Supply</b>A gap for dependable bulk partners</span></div></section>

      <section className="cream section" id="offering" data-pickrun-id="offering-section"><div className="sectionHead"><div className="tag orange">OUR OFFERING</div><h2>Ingredient formats<br/><i>built for your line</i></h2><p>A full range of moringa formats — from whole dried leaves to precision-milled powder — engineered to slot straight into your production process.</p></div><div className="cards">{offering.map(([title, text], i)=><article className="card" key={title} data-pickrun-id={`offering-card-${i+1}`}><span className="num">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="note">Beyond moringa — mushroom, curcumin and other functional extracts available on request as we expand.</p></section>

      <section className="dark section" id="why" data-pickrun-id="why-section"><div className="sectionHead split"><div><div className="tag orange">WHY LIVING SOIL FARMS</div><h2>Five reasons brands<br/><i>choose us</i></h2></div><p>From seed to shipment, our approach is built around the details that make a dependable ingredient partner.</p></div><div className="reasonGrid">{reasons.map(([title,text],i)=><div className="reason" key={title} data-pickrun-id={`reason-card-${i+1}`}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="farm section" data-pickrun-id="farm-section"><div className="farmImage"/><div className="farmText"><div className="tag orange">FARM OPERATIONS</div><h2>An 8-acre foundation<br/><i>for consistent supply</i></h2><div className="farmFacts"><p><b>8-Acre</b>Andhra Pradesh Farm</p><p><b>High-Density</b>Planting</p><p><b>Borewell</b>Irrigation</p><p><b>Careful Harvesting</b>&amp; Handling</p></div></div></section>

      <section className="quality section" id="quality" data-pickrun-id="quality-section"><div className="sectionHead"><div className="tag orange">QUALITY ASSURANCE</div><h2>Rigorous checks<br/><i>at every stage</i></h2></div><div className="qualityList">{quality.map(([n,t,d])=><div className="qualityRow" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div><p className="qualityFoot">Every batch ships with full documentation — giving your QA and regulatory teams confidence from day one.</p></section>

      <section className="partners section" id="customers" data-pickrun-id="partners-section"><div className="tag">IDEAL PARTNERS</div><h2>Built for the brands<br/><i>shaping plant-based nutrition</i></h2><div className="partnerTypes"><span>Nutraceutical Brands</span><span>Ayurvedic Companies</span><span>Health Food Brands</span><span>Functional Beverage Makers</span><span>Exporters</span></div><div className="partnerCards"><div><b>Long-Term Supply Agreements</b><p>Predictable volume and pricing for both sides.</p></div><div><b>Bulk Sales</b><p>Standard 20–25 kg bags sized for production use.</p></div><div><b>Premium Pricing</b><p>For consistent, verified quality your team can trust.</p></div><div><b>Value-Added Ingredients</b><p>Expanding beyond powder as demand grows.</p></div></div></section>

      <section className="contact section" id="contact" data-pickrun-id="contact-section"><div className="contactIntro"><div className="tag orange">LET&apos;S GROW TOGETHER</div><h2>Premium moringa —<br/><i>partnerships welcome</i></h2><p>Tell us about your product line and volume needs. We’ll route the right harvest, documentation, and sample to your team.</p><a href="mailto:contactus@livingsoilhq.com">contactus@livingsoilhq.com</a><small>Andhra Pradesh · India · livingsoilhq.com</small></div><form action="https://formsubmit.co/contactus@livingsoilhq.com" method="POST" data-pickrun-id="sample-request-form"><input type="hidden" name="_subject" value="New Living Soil Farms enquiry"/><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_template" value="table"/><label>Company<input required name="company" placeholder="Your company"/></label><label>Your name<input required name="name" placeholder="Your name"/></label><label>Work email<input required type="email" name="email" placeholder="Work email"/></label><label>Country<input name="country" placeholder="Country"/></label><label>Estimated annual volume (kg)<input name="volume" placeholder="e.g. 5,000"/></label><label>Message<textarea name="message" placeholder="Tell us about your requirements"/></label><button className="button primary" type="submit">CONTACT US <span>↗</span></button></form></section>
      <footer className="siteFooter">
        <div className="footerTop">
          <div className="footerBrand"><span className="footerEyebrow">FOLLOW OUR JOURNEY</span><p>From our soil to your world.</p></div>
          <div className="socialLinks" aria-label="Living Soil Farms social links">
            <a href="https://www.facebook.com/profile.php?id=61592780099316" target="_blank" rel="noreferrer" aria-label="Follow Living Soil Farms on Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z"/></svg><span>Facebook</span></a>
            <a href="https://www.instagram.com/livingsoilglobal/" target="_blank" rel="noreferrer" aria-label="Follow Living Soil Farms on Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.8" cy="6.4" r="1"/></svg><span>Instagram</span></a>
            <a href="https://x.com/livingsoilhq" target="_blank" rel="noreferrer" aria-label="Follow Living Soil Farms on X" title="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 3H22l-6.8 7.8 8 10.2h-6.3L12 14.8 6.6 21H3.5l7.3-8.4L3.1 3h6.5l4.3 5.6L18.9 3Zm-1.1 16h1.7L8.7 4.9H6.9L17.8 19Z"/></svg><span>X</span></a>
            <a href="https://www.youtube.com/@LivingSoilFarms" target="_blank" rel="noreferrer" aria-label="Subscribe to Living Soil Farms on YouTube" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2a2.7 2.7 0 0 0-1.9-1.9C17.4 5.8 12 5.8 12 5.8s-5.4 0-7.1.5A2.7 2.7 0 0 0 3 8.2c-.5 1.7-.5 3.8-.5 3.8s0 2.1.5 3.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.1.5 7.1.5s5.4 0 7.1-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-3.8.5-3.8s0-2.1-.5-3.8Z"/><path d="m10 15.2 5.2-3.2L10 8.8v6.4Z" className="play"/></svg><span>YouTube</span></a>
          </div>
          <a className="locationLink" href="https://maps.app.goo.gl/kb2uCLaeuWdoP19S7" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/></svg><span><small>VISIT THE FARM</small>Andhra Pradesh, India</span><b>↗</b></a>
        </div>
        <div className="footerBottom"><span>© 2026 Living Soil Farms Pvt. Ltd.</span><span>Grown with intention · Supplied with confidence</span></div>
      </footer>
    </main>
  );
}
