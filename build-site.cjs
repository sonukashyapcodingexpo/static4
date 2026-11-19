const fs = require("fs");
const path = require("path");
const root = __dirname;
const DOMAIN = "https://TODO-domain.example";

function writeFile(rel, contents) {
  const dest = path.join(root, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, contents.trim() + "\n", "utf8");
}

function img(src, alt, opts = {}) {
  const lazy = opts.lazy === false ? "" : ' loading="lazy"';
  const priority = opts.priority ? ' fetchpriority="high"' : "";
  const cls = opts.className ? ` class="${opts.className}"` : "";
  const w = opts.w || 1600;
  const h = opts.h || 1067;
  return `<img${cls} src="${src}" alt="${alt}" width="${w}" height="${h}"${lazy}${priority}>`;
}

const services = [
  {
    slug: "medical-billing",
    name: "Medical Billing",
    num: "01",
    blurb: "Support for agreed billing tasks, from charges and claims through posting and follow-up.",
    image: "/assets/images/documents.jpg",
    alt: "A person signing paperwork at a desk",
    hero: "Medical billing support, written around your workflow",
    lead: "Saanvi Laboratories can take on agreed parts of the billing work that sits behind patient care. Nothing starts until the tasks, handoffs, and information you will share are confirmed.",
    overview: [
      "Medical billing is the administrative path from a clinical encounter to a claim and a posted payment. Practices run that path in different ways. Some keep every step inside the clinic. Others ask an outside team to carry selected pieces.",
      "We begin by learning how billing works in your practice today: who prepares charges, how claims leave the office, how payments are posted, and who watches items that stall. The conversation decides what, if anything, Saanvi should handle."
    ],
    scope: [
      "Charge entry from information your practice supplies",
      "Claim preparation and submission by an agreed route",
      "Payment posting from the remittances you share",
      "Follow-up on claims that need another action",
      "Denial tracking, including the reason and the next step you approve"
    ],
    process: [
      ["Learn the current path", "We map how charges, claims, payments, and follow-up move today."],
      ["Write the scope", "We list tasks, handoffs, and the information each side must provide."],
      ["Agree a review rhythm", "Questions, updates, and changes get a cadence you can live with."],
      ["Revise in writing", "If the work needs to change, the written scope changes with it."]
    ],
    benefits: [
      "Named responsibilities make it clearer who owns each billing step.",
      "Written handoffs make questions easier to trace.",
      "Your team can talk about priorities instead of reconstructing the process.",
      "Collections, speed, and denial results depend on payers, documentation, and the scope you agree. This page does not promise those outcomes."
    ],
    faqs: [
      ["What does medical billing include?", "Only the tasks confirmed for your practice. Charge entry, submission, posting, follow-up, and denial work are topics to discuss, not a fixed package."],
      ["Do you guarantee payment or a denial rate?", "No. Payment depends on coverage, documentation, payer rules, and other factors this page cannot promise."],
      ["Can charts be attached to an enquiry?", "No. Do not send patient records or protected health information through the website."]
    ]
  },
  {
    slug: "medical-transcription",
    name: "Medical Transcription",
    num: "02",
    blurb: "Documentation support that turns agreed recordings or notes into text your practice can review.",
    image: "/assets/images/notes.jpg",
    alt: "A person writing notes beside a notebook and a cup",
    hero: "Transcription support for the notes your practice wants in text",
    lead: "Transcription support is a way to move dictated or written clinical notes into a document your team can review. Formats, specialties, turnaround, and review steps are confirmed before work is described as available.",
    overview: [
      "Clinicians capture visits in different ways: dictation, recorded notes, or rough text that still needs shaping. Transcription support is the work of producing a readable document from an agreed source.",
      "Saanvi Laboratories does not publish turnaround times, specialty coverage, or a delivery method until those points are confirmed. An enquiry is the right place to describe the kind of notes you have and how you want them returned."
    ],
    scope: [
      "Transcription from an agreed audio or text source",
      "Document formatting that matches a template you supply",
      "A review step, if you want one written into the scope",
      "Return of files by a method both sides confirm",
      "Clarification questions when the source is unclear"
    ],
    process: [
      ["Describe the source", "Tell us how notes are captured and what the finished document should look like."],
      ["Confirm the rules", "Names, abbreviations, templates, and what must never be guessed are written down."],
      ["Agree the exchange", "We settle how files arrive, how questions are asked, and how work is returned."],
      ["Review a sample", "A short sample can be used to check fit before a wider scope is discussed."]
    ],
    benefits: [
      "A written template keeps documents closer to the shape your practice expects.",
      "A named review step gives clinicians a clear place to correct the text.",
      "Questions can be routed instead of left inside a recording.",
      "Accuracy depends on the source recording and the rules you set. No accuracy rate is claimed here."
    ],
    faqs: [
      ["Which specialties and formats are supported?", "That list is still to be confirmed. Describe your notes in a consultation and we can say what is possible."],
      ["Is there a standard turnaround time?", "Not on this page. Any timing expectation has to be agreed for the specific work."],
      ["Should patient files be uploaded here?", "No. Use the form only for a general enquiry, with no patient information."]
    ]
  },
  {
    slug: "medical-coding",
    name: "Medical Coding",
    num: "03",
    blurb: "Coding support that connects clinical documentation with the billing workflow you agree.",
    image: "/assets/images/laptop.jpg",
    alt: "Hands typing on a laptop at a wooden desk",
    hero: "Coding support connected to documentation and billing",
    lead: "Coding support helps a practice assign codes from the documentation it already keeps, so billing has a clearer source. Code sets, review steps, and who signs off are confirmed for each engagement.",
    overview: [
      "Codes are the link between a clinical note and much of the billing that follows. The work can sit with clinicians, with in-house staff, or with an outside team. Saanvi can discuss support for the coding step when the documentation and the billing path are understood.",
      "This page does not claim coder certifications, a particular code-set specialty, or a guaranteed accuracy rate. Those points stay unpublished until Saanvi confirms them."
    ],
    scope: [
      "Review of documentation your practice provides for coding",
      "Suggested codes for an agreed code set",
      "Queries back to your team when the note does not support a choice",
      "Hand-off of coded information into the billing scope, if both are agreed",
      "A correction route when your team disagrees with a suggestion"
    ],
    process: [
      ["See the documents", "We look at how notes are written and which code sets you expect to use."],
      ["Define the boundary", "We record who suggests codes, who approves them, and what happens when a note is thin."],
      ["Connect to billing", "If billing support is also in scope, the hand-off between coding and claims is written down."],
      ["Keep a query path", "Unclear notes produce a question, not a guess."]
    ],
    benefits: [
      "Coding and billing can share one written hand-off instead of two separate habits.",
      "Queries create a record when documentation is not enough.",
      "Your clinicians keep the clinical judgement; the scope says so plainly.",
      "No accuracy percentage or certification is stated, because none has been verified for publication."
    ],
    faqs: [
      ["Do you guarantee coding accuracy?", "No. Coding quality depends on the note, the code set, and the review steps you agree."],
      ["Which code sets can you support?", "Please treat code-set coverage as unconfirmed until it is agreed in writing."],
      ["Will you code from a partial chart sent by email?", "Do not send charts or patient information to the public enquiry form."]
    ]
  },
  {
    slug: "compliance-audits",
    name: "Compliance Audits",
    num: "04",
    blurb: "A structured review of materials you choose, with the method and the report agreed first.",
    image: "/assets/images/desk.jpg",
    alt: "People reviewing notes and laptops together at a table",
    hero: "Review support with the scope agreed before the work",
    lead: "A compliance review can look at billing, documentation, or workflow materials you select. Saanvi does not claim a certification, a regulatory approval, or a guarantee that a practice is compliant.",
    overview: [
      "Practices sometimes want a second look at how work is documented or how claims are assembled. A useful review has a boundary: which files, which questions, which period, and what the written output will be.",
      "Until those points are confirmed, this page describes the kind of conversation we can have. It is not an audit certificate and it is not a statement that any method has been formally accredited."
    ],
    scope: [
      "A written list of the materials in scope",
      "Review questions agreed before work starts",
      "Notes of what was seen and what was not reviewed",
      "A report in a format you confirm",
      "A discussion of possible next steps, without a promise that they change an outcome"
    ],
    process: [
      ["Choose the question", "We identify what you want a second look at, and what is out of bounds."],
      ["Set the method", "Sample size, period, and the kind of report are agreed. They are not assumed."],
      ["Review the materials", "Work stays inside the file set you provide."],
      ["Talk through the notes", "Findings are discussed as observations, not as a compliance verdict."]
    ],
    benefits: [
      "A bounded review is easier to explain to the people who will read it.",
      "Out-of-scope topics stay out, which keeps the work honest.",
      "Observations can feed an operations conversation without being dressed up as a certification.",
      "Saanvi does not claim HIPAA certification, regulator approval, or guaranteed compliance."
    ],
    faqs: [
      ["Is this a certified compliance audit?", "No certification or regulatory approval is claimed on this website."],
      ["What will the report contain?", "The contents are agreed before the review. They are not a standard promise yet."],
      ["Can we send sample charts in the form?", "No. Keep patient information out of the enquiry form."]
    ]
  },
  {
    slug: "practice-consulting",
    name: "Practice Consulting",
    num: "05",
    blurb: "A practical conversation about workflow, priorities, and what support is worth scoping.",
    image: "/assets/images/workshop.jpg",
    alt: "A workshop where a facilitator points to notes on a wall",
    hero: "Consulting that starts with how your practice actually runs",
    lead: "Practice consulting is a structured conversation about operations: where work piles up, who owns it, and which changes are worth trying. Deliverables are confirmed for each engagement rather than pulled from a fixed catalogue.",
    overview: [
      "Clinics rarely need a generic plan. They need a clear look at the workflow they already have. Consulting support is a way to spend time on that look, with notes both sides can keep.",
      "Saanvi has not published a fixed consulting menu. A first conversation can cover billing flow, documentation handoffs, staffing of admin work, or the decision to outsource a piece of it."
    ],
    scope: [
      "A discovery conversation about current operations",
      "Notes of priorities you want to address",
      "Options for support, including work Saanvi may not be the right fit for",
      "A written summary if you ask for one and the scope includes it",
      "A decision point: continue, narrow the work, or stop"
    ],
    process: [
      ["Listen first", "We ask how the practice runs before suggesting a service."],
      ["Separate symptoms from tasks", "A busy front desk and a stalled claim are different problems."],
      ["Offer options", "Each option includes what it would take from your team."],
      ["Leave a record", "You should be able to see what was discussed and what was not decided."]
    ],
    benefits: [
      "Priorities can be ranked before money or staff time is committed.",
      "A written summary gives the practice something to share internally.",
      "The conversation can end without a sale if the fit is poor.",
      "No performance improvement is promised as a result of a consulting conversation."
    ],
    faqs: [
      ["What do we receive at the end?", "Only what the engagement says. A conversation, notes, or a longer piece of work are different scopes."],
      ["Is consulting tied to billing services?", "No. You can discuss operations without agreeing to outsource billing."],
      ["Do you publish case studies?", "Not in this phase. Client stories are not invented for the website."]
    ]
  },
  {
    slug: "credentialing",
    name: "Credentialing",
    num: "06",
    blurb: "Coordination support for credentialing tasks once payers, places, and duties are confirmed.",
    image: "/assets/images/handshake.jpg",
    alt: "Two people shaking hands across a meeting table",
    hero: "Credentialing coordination, scoped before the paperwork starts",
    lead: "Credentialing coordination helps a practice gather, check, and follow applications with payers or facilities. Networks, geography, timelines, and who is responsible for each document are confirmed before any of that is treated as included.",
    overview: [
      "Enrollment and credentialing work is full of forms, follow-ups, and deadlines that differ by payer. A coordination service can carry the chasing and the checklist, while the clinician or practice still owns attestations and signatures.",
      "This page does not name payers, states, or turnaround times. Those facts have to come from a confirmed scope. An enquiry can describe where you want to be enrolled and what is already in progress."
    ],
    scope: [
      "A checklist of applications you want help with",
      "Gathering documents from the list you approve",
      "Tracking status and reminders for items you still need to sign",
      "Follow-up with contacts, where you authorise it",
      "A status note on an agreed schedule"
    ],
    process: [
      ["List the targets", "Payers, facilities, and locations are named. Nothing outside that list is assumed."],
      ["Sort ownership", "We record which documents the practice must sign and which follow-ups Saanvi may make."],
      ["Track the file", "Each application gets a status your team can ask about."],
      ["Hand back decisions", "Approvals, questions, and missing items come back to the practice in writing."]
    ],
    benefits: [
      "A checklist reduces the chance that a form sits in one person’s inbox.",
      "Status notes make it easier to see what is waiting on the practice.",
      "Ownership stays visible, especially where a signature cannot be delegated.",
      "Enrollment is decided by the payer. This page does not promise approval or a timeline."
    ],
    faqs: [
      ["Which payers or regions are covered?", "Coverage is unconfirmed until it is written into an engagement. Tell us the target in a consultation."],
      ["Can you sign applications for a clinician?", "No. Signatures and attestations stay with the person responsible for them."],
      ["How long does credentialing take?", "Timelines vary and are not published here as a promise."]
    ]
  }
];

function relatedTo(slug) {
  const index = services.findIndex((item) => item.slug === slug);
  return [1, 2, 3].map((step) => services[(index + step) % services.length]);
}

function brand() {
  return `<a class="brand" href="/" aria-label="Saanvi Laboratories home"><span class="brand-mark" aria-hidden="true">SL</span><span><strong>Saanvi</strong><small>Laboratories</small></span></a>`;
}

function navLink(href, label, current) {
  const currentAttr = href === current ? ' aria-current="page"' : "";
  return `<a href="${href}"${currentAttr}>${label}</a>`;
}

function navGroup(label, links, current) {
  const active = links.some((item) => item.href === current) ? " is-current" : "";
  const items = links.map((item) => navLink(item.href, item.label, current)).join("");
  return `<div class="nav-group${active}"><button class="nav-toggle" type="button" aria-expanded="false">${label} <span aria-hidden="true"></span></button><div class="dropdown">${items}</div></div>`;
}

function header(current) {
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container header-inner">
    ${brand()}
    <nav id="primary-nav" class="primary-nav" aria-label="Main navigation">
      ${navLink("/", "Home", current)}
      ${navGroup("About Us", [
        ["About Saanvi", "/about"],
        ["Vision and Mission", "/about/vision-and-mission"],
        ["Core Values", "/about/core-values"],
        ["Infrastructure", "/about/infrastructure"]
      ].map(([label, href]) => ({ label, href })), current)}
      ${navGroup("Services", [{ label: "All Services", href: "/services" }].concat(services.map((item) => ({ label: item.name, href: "/services/" + item.slug }))), current)}
      ${navLink("/specialties", "Specialties", current)}
      ${navGroup("Why Saanvi", [
        { label: "Why Outsource", href: "/why-saanvi/why-outsource" },
        { label: "Our Commitment", href: "/why-saanvi/our-commitment" }
      ], current)}
      ${navGroup("Resources", [{ label: "FAQs", href: "/faqs" }], current)}
    </nav>
    <a class="button header-cta" href="/consultation">Free Consultation</a>
    <button class="menu-button" type="button" aria-label="Open navigation" aria-controls="primary-nav" aria-expanded="false">☰</button>
  </div>
</header>`;
}

function footer() {
  const serviceLinks = services.map((item) => `<li><a href="/services/${item.slug}">${item.name}</a></li>`).join("");
  return `<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      ${brand()}
      <p>Healthcare revenue cycle support, agreed around the way your practice already works.</p>
      <p>Photographs are free stock images used as illustration. They are not photos of Saanvi’s office, team, or clients.</p>
      <p>Contact details and approved social profiles: TODO — obtain from Saanvi.</p>
    </div>
    <div>
      <h2>Services</h2>
      <ul>${serviceLinks}</ul>
    </div>
    <div>
      <h2>Explore</h2>
      <ul>
        <li><a href="/specialties">Specialties</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/about/vision-and-mission">Vision and Mission</a></li>
        <li><a href="/about/core-values">Core Values</a></li>
        <li><a href="/about/infrastructure">Infrastructure</a></li>
        <li><a href="/why-saanvi/why-outsource">Why Outsource</a></li>
        <li><a href="/why-saanvi/our-commitment">Our Commitment</a></li>
        <li><a href="/faqs">FAQs</a></li>
      </ul>
    </div>
    <div>
      <h2>Get in touch</h2>
      <ul>
        <li><a href="/consultation">Free Consultation</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms">Terms and Conditions</a></li>
        <li><span>Hyderabad, India</span></li>
        <li><span>Phone, email, and hours: TODO</span></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>© <span data-year></span> Saanvi Laboratories</span>
    <span>Business details pending verification before launch.</span>
  </div>
</footer>
<div class="mobile-actions">
  <a href="/contact">Contact</a>
  <a href="/consultation">Free Consultation</a>
</div>`;
}

function layout({ title, description, route, current, main, jsonLd = "" }) {
  const canonical = route === "/404.html" ? DOMAIN + "/404.html" : DOMAIN + (route === "/" ? "/" : route + "/");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#184233">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${DOMAIN}/assets/images/tablet.jpg">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
<script defer src="/assets/js/main.js"></script>
${jsonLd}
</head>
<body>
${header(current)}
<main id="main">
${main}
</main>
${footer()}
</body>
</html>`;
}

function crumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${items.map((item) => item.href ? `<a href="${item.href}">${item.label}</a>` : `<span aria-current="page">${item.label}</span>`).join('<span aria-hidden="true">/</span>')}</nav>`;
}

function pageHero({ crumbItems, eyebrow, title, lead, image, alt, cta = true }) {
  return `<section class="page-hero">
  ${img(image, alt, { lazy: false, priority: true, className: "page-hero-img" })}
  <div class="page-hero-veil" aria-hidden="true"></div>
  <div class="container page-hero-inner">
    ${crumbs(crumbItems)}
    <p class="eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    <p class="lead">${lead}</p>
    ${cta ? '<a class="button" href="/consultation">Get a Free Consultation</a>' : ""}
  </div>
</section>`;
}

function serviceCards(list, className = "service-grid") {
  return `<div class="${className}">${list.map((item) => `<a class="service-card" href="/services/${item.slug}">
    <div class="media">${img(item.image, item.alt)}</div>
    <div class="card-body"><span class="card-kicker">Service ${item.num}</span><h3>${item.name}</h3><p>${item.blurb}</p><span class="card-go">Explore service</span></div>
  </a>`).join("")}</div>`;
}

function contactStrip(title = "Start with a conversation.") {
  return `<section class="section section-white">
  <div class="container contact-strip">
    <div>
      <p class="eyebrow">Next step</p>
      <h2>${title}</h2>
    </div>
    <a class="button button-pine" href="/consultation">Get a Free Consultation</a>
  </div>
</section>`;
}

function steps(items) {
  return `<div class="steps">${items.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
}

function faqs(items) {
  return items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
}

const specialties = [
  ["cardiology", "Cardiology", "/assets/images/stethoscope.jpg", "A stethoscope resting on fabric", "Cardiology practices often have imaging, visits, and procedures moving through the same billing path. A conversation can cover how those encounters are documented and handed to billing."],
  ["dermatology", "Dermatology", "/assets/images/skin.jpg", "A skincare treatment used as an illustration for dermatology", "Dermatology can mix office visits and procedures. The useful question is which encounters your team wants help administering, not a claim that every dermatology workflow is already supported."],
  ["orthopaedics", "Orthopaedics", "/assets/images/movement.jpg", "A coach guiding a person through a strength exercise", "Orthopaedic work may include clinic visits, procedures, and therapy relationships. Scope would name which of those the practice wants operational help with."],
  ["gastroenterology", "Gastroenterology", "/assets/images/corridor.jpg", "A bright procedure room with clinical equipment", "Gastroenterology often combines consultations and procedure days. Any support would follow the documentation and billing path you describe."],
  ["physical-therapy", "Physical Therapy", "/assets/images/therapy.jpg", "Hands-on bodywork used as an illustration for physical therapy", "Therapy practices can have recurring visits and authorisations. Those are topics for a scoping conversation, not a published list of covered plans."],
  ["podiatry", "Podiatry", "/assets/images/hospital-hall.jpg", "A clinic reception desk used as an illustration for podiatry conversations", "Podiatry is listed as an example specialty. Confirm with Saanvi whether it is in scope before treating it as an active service line."]
];

function homePage() {
  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Saanvi Laboratories",
    url: DOMAIN + "/",
    description: "Medical billing and revenue cycle management support for healthcare practices.",
    areaServed: "Hyderabad, India",
    image: DOMAIN + "/assets/images/tablet.jpg"
  })}</script>`;
  const main = `<section class="hero">
  <div class="hero-media">
    ${img("/assets/images/tablet.jpg", "A stethoscope beside hands typing on a laptop", { lazy: false, priority: true })}
    <p class="hero-chip">Illustrative photo · Hyderabad practice support</p>
  </div>
  <div class="hero-copy">
    <p class="eyebrow">Medical billing · Revenue cycle</p>
    <h1>Operational support for the work behind the visit.</h1>
    <p class="lead">Saanvi Laboratories helps doctors, clinics, and healthcare groups with medical billing and revenue cycle support. The work is shaped around your practice, and the scope is agreed before it begins.</p>
    <div class="hero-actions">
      <a class="button" href="/consultation">Get a Free Consultation</a>
      <a class="button button-ghost" href="/services">View services</a>
    </div>
    <p class="hero-meta"><span>Billing</span><span>Documentation</span><span>Coding</span><span>Credentialing</span></p>
  </div>
</section>
<section class="section section-white">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="eyebrow">Six ways to work together</p>
        <h2>Services for the operational detail.</h2>
      </div>
      <a class="text-link" href="/services">All services</a>
    </div>
    ${serviceCards(services)}
  </div>
</section>
<section class="section section-foam">
  <div class="container intro-grid">
    <div class="frame portrait">
      ${img("/assets/images/doctor.jpg", "A physician in a white coat, shown as an illustration of the practices Saanvi supports")}
    </div>
    <div>
      <p class="eyebrow">About Saanvi</p>
      <h2>A Hyderabad team for practice operations, not a hospital theme.</h2>
      <p class="body-copy">Saanvi Laboratories is a medical billing and revenue cycle management brand based in Hyderabad. The people we speak with are doctors, clinics, hospitals, and healthcare groups who want the administrative work described clearly.</p>
      <p class="body-copy">Company history, client names, and performance figures are not published here. They need confirmation before they appear on the site.</p>
      <div class="intro-points">
        <div><strong>Scope first</strong><span>Tasks are listed before work is treated as included.</span></div>
        <div><strong>One workflow</strong><span>Handoffs are written so both sides can see them.</span></div>
        <div><strong>No invented proof</strong><span>Testimonials and statistics wait until they are real and approved.</span></div>
      </div>
      <p><a class="text-link" href="/about">Read about Saanvi</a></p>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="eyebrow">How we work</p>
        <h2>Three steps, then a written agreement.</h2>
        <p>Numbers about speed or collections are not shown, because none have been approved. The process itself is the commitment we can describe today.</p>
      </div>
    </div>
    ${steps([
      ["Understand", "We ask about the practice, the current workflow, and the support you are considering."],
      ["Agree", "Scope, responsibilities, information exchange, and expectations are confirmed together."],
      ["Work together", "Communication and review points are set for the engagement you actually choose."]
    ])}
  </div>
</section>
<section class="section section-foam">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="eyebrow">Example specialties</p>
        <h2>Support starts by listening to the practice.</h2>
        <p>These specialties are examples pending confirmation. They are not a promise that every one of them is an active service line.</p>
      </div>
      <a class="text-link" href="/specialties">Specialty notes</a>
    </div>
    <div class="specialty-grid">
      ${specialties.map(([id, name, src, alt]) => `<a class="specialty-card" href="/specialties#${id}">${img(src, alt)}<span><small>Example</small><strong>${name}</strong></span></a>`).join("")}
    </div>
  </div>
</section>
<section class="why-band">
  <div class="why-copy">
    <p class="eyebrow">Why practices look outside</p>
    <h2>Outsourcing is a workflow choice, not a guaranteed result.</h2>
    <p>An outside team can hold a named piece of billing or documentation work. It can also be the wrong fit. The useful version is the one with a written boundary.</p>
    <ul class="why-list">
      <li>Admin time stays attached to a task list, not a vague promise.</li>
      <li>Denials and follow-up have an owner, once you assign one.</li>
      <li>Cost is discussed as fees plus the time your team still spends.</li>
    </ul>
    <a class="button" href="/why-saanvi/why-outsource">Why outsource</a>
  </div>
  ${img("/assets/images/meeting.jpg", "Two colleagues at a laptop in a bright office", { lazy: false })}
</section>
<section class="section">
  <div class="container">
    <div class="review-band">
      <div>
        <p class="eyebrow">Free practice review</p>
        <h2>A conversation to see whether a review would help.</h2>
        <p>Ask for a discussion of your current workflow and the areas where support might belong. Availability, length, and what is included still need to be confirmed with Saanvi. This is not a separate product page yet.</p>
        <a class="button button-pine" href="/consultation">Request a conversation</a>
      </div>
      <div class="review-aside">
        <strong>01</strong>
        <p>Bring the workflow that is taking the most attention. Leave patient records out of the form.</p>
      </div>
    </div>
  </div>
</section>
${contactStrip("Tell us about the practice, not the patients.")}`;
  return layout({
    title: "Medical Billing & Revenue Cycle Support | Saanvi Laboratories",
    description: "Saanvi Laboratories provides medical billing and revenue cycle support for doctors, clinics, and healthcare groups in Hyderabad.",
    route: "/",
    current: "/",
    main,
    jsonLd
  });
}

function aboutPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "About" }],
    eyebrow: "About Saanvi",
    title: "Practice operations support from Hyderabad.",
    lead: "Saanvi Laboratories is a separate brand focused on medical billing and revenue cycle management. This page stays inside the facts that have been supplied.",
    image: "/assets/images/office.jpg",
    alt: "A modern office corridor used as an illustration, not a photo of Saanvi’s office"
  })}
  <section class="section">
    <div class="container split">
      <div class="prose">
        <p class="eyebrow">Who we are</p>
        <h2>Built for healthcare practices, described without invented history.</h2>
        <p class="body-copy">The business is identified as Saanvi Laboratories, based in Hyderabad, India. The audience is doctors, physician practices, clinics, hospitals, and healthcare groups who want operational support around billing and the revenue cycle.</p>
        <p class="body-copy">Experience claims, years in business, staff counts, client lists, and technology partners are not included. They are marked for confirmation rather than filled in with plausible detail.</p>
        <h2>Where we work</h2>
        <p class="body-copy">The published location is Hyderabad. A street address, map pin, and a list of other cities served are TODO items. Do not treat a stock photograph of an office or a clinic as our premises.</p>
        <div class="notice">TODO: confirm company story, leadership, locations served, and any approved description of experience before launch.</div>
        <p><a class="button button-pine" href="/consultation">Get a Free Consultation</a></p>
      </div>
      <aside class="side-card">
        <p class="eyebrow">On this site</p>
        <h2>Read the statements we can stand behind.</h2>
        <p><a class="text-link" href="/about/vision-and-mission">Vision and mission</a></p>
        <p><a class="text-link" href="/about/core-values">Core values</a></p>
        <p><a class="text-link" href="/about/infrastructure">Infrastructure</a></p>
      </aside>
    </div>
  </section>
  <section class="section section-foam">
    <div class="container card-grid">
      <article class="plain-card">
        ${img("/assets/images/office-team.jpg", "People working on laptops around a shared table")}
        <h2>A working relationship</h2>
        <p class="body-copy">The public story is about how an engagement starts, not about unnamed clients or awards.</p>
      </article>
      <article class="plain-card">
        ${img("/assets/images/doctor.jpg", "Physician portrait used to represent healthcare practices")}
        <h2>Your practice sets the brief</h2>
        <p class="body-copy">Services are described at a high level until your workflow tells us which tasks belong in scope.</p>
      </article>
    </div>
  </section>
  ${contactStrip()}`;
  return layout({
    title: "About Saanvi Laboratories | Hyderabad",
    description: "Saanvi Laboratories is a Hyderabad medical billing and revenue cycle support brand. History and client details are published only when confirmed.",
    route: "/about",
    current: "/about",
    main
  });
}

function visionPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { label: "Vision and Mission" }],
    eyebrow: "Working statements",
    title: "Vision and mission, pending confirmation.",
    lead: "These statements are drafts for Saanvi to approve or replace. They describe intent. They are not certified promises or performance claims.",
    image: "/assets/images/office-team.jpg",
    alt: "A group working together on laptops in a shared room"
  })}
  <section class="section">
    <div class="container value-grid">
      <article>
        <span>01</span>
        <h2>Vision</h2>
        <p class="body-copy">Healthcare practices can keep their attention on care, with operational support that is clear enough to review. The vision is a working relationship in which billing and related tasks have a named scope, not a fog of assumptions.</p>
      </article>
      <article>
        <span>02</span>
        <h2>Mission</h2>
        <p class="body-copy">Help practices describe the revenue-cycle work they want supported, agree the responsibilities on both sides, and keep communication attached to that agreement. The mission stops where a claim would need numbers, clients, or certifications we do not have approval to publish.</p>
      </article>
    </div>
    <div class="container">
      <p class="notice">TODO: replace these drafts with the vision and mission Saanvi approves, word for word.</p>
    </div>
  </section>`;
  return layout({
    title: "Vision and Mission | Saanvi Laboratories",
    description: "Draft vision and mission statements for Saanvi Laboratories, marked for confirmation before launch.",
    route: "/about/vision-and-mission",
    current: "/about/vision-and-mission",
    main
  });
}

function valuesPage() {
  const values = [
    ["01", "Clarity", "Say what the work is, what it is not, and who does it. Unconfirmed claims stay off the page and out of the proposal."],
    ["02", "Agreed scope", "A task is included when both sides have named it. Silence is not a way of adding work."],
    ["03", "Steady communication", "Questions, status, and changes have a place to go. The cadence is part of the engagement, not an afterthought."],
    ["04", "Respect for clinical time", "Ask the practice only for decisions and information that the scope actually needs. Do not collect patient records through a marketing form."]
  ];
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { label: "Core Values" }],
    eyebrow: "How we intend to work",
    title: "Values you can check against the work.",
    lead: "These values describe the behaviour an engagement should show. They are not awards, and they are not a substitute for a contract.",
    image: "/assets/images/meeting.jpg",
    alt: "Two professionals meeting with a laptop and papers"
  })}
  <section class="section">
    <div class="container value-grid">
      ${values.map(([num, title, text]) => `<article><span>${num}</span><h2>${title}</h2><p class="body-copy">${text}</p></article>`).join("")}
    </div>
  </section>`;
  return layout({
    title: "Core Values | Saanvi Laboratories",
    description: "Saanvi Laboratories’ working values: clarity, agreed scope, steady communication, and respect for clinical time.",
    route: "/about/core-values",
    current: "/about/core-values",
    main
  });
}

function infrastructurePage() {
  const blocks = [
    ["/assets/images/office.jpg", "A contemporary office interior used as an illustration", "Office", "A full street address, floor, and visitor instructions are TODO. The photograph is a stock interior, not Saanvi’s workplace."],
    ["/assets/images/laptop.jpg", "Close view of typing on a laptop", "Technology", "Systems, software names, and integrations are not listed. They will be confirmed before any tool is presented as part of the service."],
    ["/assets/images/microscope.jpg", "Sample tubes in a rack, illustrating careful handling rather than a Saanvi lab", "Information handling", "Enquiry forms are for general questions only. Patient records do not belong in them. Security certifications are not claimed."],
    ["/assets/images/laboratory.jpg", "A scientist at a microscope in a laboratory", "Team", "Team size, roles, and biographies are TODO. Stock portraits are not staff photos and should not be read as one."]
  ];
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { label: "Infrastructure" }],
    eyebrow: "Office, tools, and care with information",
    title: "Infrastructure, described only as far as we know it.",
    lead: "The company name includes laboratories. The published service is healthcare operations support. Facilities, tools, and team details below are either high level or still to be confirmed.",
    image: "/assets/images/laboratory.jpg",
    alt: "A person using a microscope in a laboratory"
  })}
  <section class="section">
    <div class="container info-grid">
      ${blocks.map(([src, alt, title, text]) => `<article>${img(src, alt)}<h2>${title}</h2><p class="body-copy">${text}</p></article>`).join("")}
    </div>
    <div class="container"><p class="notice">TODO: confirm office address, systems, security measures, and team information. Do not add certification logos unless Saanvi supplies them.</p></div>
  </section>`;
  return layout({
    title: "Infrastructure | Saanvi Laboratories",
    description: "What Saanvi Laboratories can say today about office, technology, information handling, and team strength, with gaps marked for confirmation.",
    route: "/about/infrastructure",
    current: "/about/infrastructure",
    main
  });
}

function servicesPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Services" }],
    eyebrow: "Services",
    title: "Six services. Each one starts with a boundary.",
    lead: "Browse the operational support Saanvi can discuss. Every service page explains possible scope, a way of working, and the limits of what this website will claim.",
    image: "/assets/images/hospital-hall.jpg",
    alt: "A clinic reception area with a front desk"
  })}
  <section class="section">
    <div class="container">
      ${serviceCards(services)}
      <p class="notice">Final service inclusions must be confirmed with Saanvi before launch copy is treated as a contract.</p>
    </div>
  </section>
  ${contactStrip("Not sure which service fits? Start with the workflow.")}`;
  return layout({
    title: "Healthcare Operations Services | Saanvi Laboratories",
    description: "Medical billing, transcription, coding, compliance reviews, practice consulting, and credentialing support from Saanvi Laboratories.",
    route: "/services",
    current: "/services",
    main
  });
}

function servicePage(service) {
  const related = relatedTo(service.slug);
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: service.name }],
    eyebrow: `Service ${service.num}`,
    title: service.hero,
    lead: service.lead,
    image: service.image,
    alt: service.alt
  })}
  <section class="section">
    <div class="container split">
      <div class="prose">
        <p class="eyebrow">Overview</p>
        <h2>What this support is for.</h2>
        ${service.overview.map((paragraph) => `<p class="body-copy">${paragraph}</p>`).join("")}
        <h2>Possible scope</h2>
        <p class="body-copy">These items are examples. Each one stays outside the engagement until it is confirmed.</p>
        <ul class="checklist">${service.scope.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h2>Careful benefits</h2>
        <ul>${service.benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <aside class="side-card">
        <p class="eyebrow">Discuss the fit</p>
        <h2>See whether this belongs in your practice.</h2>
        <p>A consultation is a conversation about scope and availability. It does not send patient records anywhere, and it does not confirm an outcome.</p>
        <a class="button" href="/consultation">Get a Free Consultation</a>
        <p>Do not include patient information in the form.</p>
      </aside>
    </div>
  </section>
  <section class="section section-foam">
    <div class="container">
      <p class="eyebrow">How it can work</p>
      <h2>A sequence you can expect to discuss.</h2>
      ${steps(service.process)}
    </div>
  </section>
  <section class="section">
    <div class="container narrow">
      <p class="eyebrow">Questions</p>
      <h2>About ${service.name}</h2>
      ${faqs(service.faqs)}
    </div>
  </section>
  <section class="section section-foam">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Related services</p>
          <h2>Other work practices often ask about.</h2>
        </div>
      </div>
      ${serviceCards(related, "related")}
    </div>
  </section>
  ${contactStrip("Talk through " + service.name.toLowerCase() + " against your workflow.")}`;
  return layout({
    title: `${service.name} | Saanvi Laboratories`,
    description: service.lead.slice(0, 155),
    route: "/services/" + service.slug,
    current: "/services/" + service.slug,
    main
  });
}

function specialtiesPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Specialties" }],
    eyebrow: "Examples, pending confirmation",
    title: "Specialties we can talk about.",
    lead: "The list below comes from the project brief as examples. It is not a statement that every specialty is currently supported. Confirm the final list with Saanvi before launch.",
    image: "/assets/images/corridor.jpg",
    alt: "A clean procedure room with an operating light"
  })}
  <section class="section">
    <div class="container info-grid">
      ${specialties.map(([id, name, src, alt, text]) => `<article id="${id}">${img(src, alt)}<h2>${name}</h2><p class="body-copy">${text}</p><p><a class="text-link" href="/consultation">Discuss this specialty</a></p></article>`).join("")}
    </div>
    <div class="container"><p class="notice">More specialties can be added only after the business confirms them. Photographs are illustrations of clinical or everyday settings, not Saanvi client sites.</p></div>
  </section>`;
  return layout({
    title: "Specialties | Saanvi Laboratories",
    description: "Example specialties for Saanvi Laboratories, including cardiology, dermatology, orthopaedics, gastroenterology, physical therapy, and podiatry.",
    route: "/specialties",
    current: "/specialties",
    main
  });
}

function outsourcePage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Why Outsource" }],
    eyebrow: "Why outsource",
    title: "A second team helps only when the work is named.",
    lead: "Outsourcing medical billing can move selected tasks outside the practice. It does not, by itself, raise collections or shrink denials. Those outcomes depend on the practice, the payers, and the scope.",
    image: "/assets/images/laptop.jpg",
    alt: "Hands typing on a laptop"
  })}
  <section class="section">
    <div class="container split">
      <div class="prose">
        <h2>What practices usually want from it</h2>
        <ul>
          <li>A place for billing tasks that no longer fits the clinical day.</li>
          <li>A written owner for follow-up, instead of a shared inbox.</li>
          <li>Room for in-house staff to stay on scheduling, patients, and decisions that should not leave the practice.</li>
        </ul>
        <h2>Cost, without a savings claim</h2>
        <p class="body-copy">Cost is a comparison you should make in the consultation: the fee for outside support, the staff time you would still spend, and the cost of rework when information is missing. This website does not publish a percentage saving. Any figure would be invented.</p>
        <h2>Denials, as a workflow</h2>
        <p class="body-copy">A denial is a claim that needs a reason and a next action. Outsourcing can include tracking those items if the scope says so. It cannot promise a denial rate. The useful question is who notices the denial, who may act on it, and what information they need from the practice.</p>
        <p class="notice">TODO: confirm any approved language about fees, markets served, or denial handling before it is treated as final.</p>
      </div>
      <aside class="side-card">
        <p class="eyebrow">A fair test</p>
        <h2>Bring one workflow, not the whole practice history.</h2>
        <p>Describe the task that is hardest to staff. We can say whether it looks like a fit for a scoped engagement.</p>
        <a class="button" href="/consultation">Get a Free Consultation</a>
      </aside>
    </div>
  </section>
  ${contactStrip()}`;
  return layout({
    title: "Why Outsource Medical Billing | Saanvi Laboratories",
    description: "Why practices consider outsourcing medical billing, including cost questions and denial follow-up, without promised savings or rates.",
    route: "/why-saanvi/why-outsource",
    current: "/why-saanvi/why-outsource",
    main
  });
}

function commitmentPage() {
  const items = [
    ["Quality", "Quality means the work matches the written scope and the review points you set. It is not a slogan and it is not a score."],
    ["Turnaround", "Timing is discussed for the specific tasks. A marketing page is the wrong place for a guarantee, so none is offered."],
    ["Accuracy", "Accuracy depends on the source information, the checks you want, and the people who approve exceptions. No accuracy percentage is published."],
    ["Transparency", "Scope, status, and changes should be visible to the practice. If something is outside the agreement, it should be said plainly."]
  ];
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Our Commitment" }],
    eyebrow: "Our commitment",
    title: "Promises we can keep without inventing results.",
    lead: "Saanvi’s public commitment is about how an engagement is framed: quality checks you agree, timing you discuss, accuracy you can review, and a scope you can read.",
    image: "/assets/images/professional.jpg",
    alt: "A professional portrait used as an illustration, not a photo of Saanvi staff"
  })}
  <section class="section">
    <div class="container value-grid">
      ${items.map(([title, text], index) => `<article><span>0${index + 1}</span><h2>${title}</h2><p class="body-copy">${text}</p></article>`).join("")}
    </div>
    <div class="container"><p class="notice">TODO: replace this page with approved commitment language if Saanvi has an existing quality statement. Do not add turnaround or accuracy guarantees unless they are real and cleared.</p></div>
  </section>
  ${contactStrip("Ask how these commitments would be written for your practice.")}`;
  return layout({
    title: "Our Commitment | Saanvi Laboratories",
    description: "Saanvi Laboratories’ commitment to agreed quality checks, discussed turnaround, reviewable accuracy, and a readable scope.",
    route: "/why-saanvi/our-commitment",
    current: "/why-saanvi/our-commitment",
    main
  });
}

function faqPage() {
  const groups = [
    ["General", [
      ["What does Saanvi Laboratories do?", "Saanvi provides medical billing and revenue cycle management support. The exact tasks are confirmed with each practice."],
      ["Where are you based?", "The business is identified as being in Hyderabad, India. A full office address is still TODO."],
      ["Are you the same company as another healthcare brand?", "No. Saanvi Laboratories is a separate brand. This site does not reuse another company’s name, claims, or design."]
    ]],
    ["Services", [
      ["Which services can I ask about?", "Medical billing, transcription, coding, compliance reviews, practice consulting, and credentialing. Each page explains what is still unconfirmed."],
      ["Do you serve every specialty listed?", "The specialty list is an example list pending confirmation. Ask before assuming a specialty is active."],
      ["Will you publish client results?", "Only real, approved results. None are included in this phase."]
    ]],
    ["Working together", [
      ["How does an engagement start?", "With a consultation, then a written scope. Work does not begin from a website visit alone."],
      ["What is the free practice review?", "It is an offer to discuss your workflow. Length, contents, and availability still need confirmation. There is no separate review page in this phase."],
      ["Can timelines be guaranteed?", "No. Timing belongs in the agreement for the specific work."]
    ]],
    ["Privacy", [
      ["Can I send patient records?", "No. The enquiry forms are for general questions. Do not submit patient records or other protected health information."],
      ["Does the form already deliver my message?", "No. Until an approved form service is connected, the form tells you that nothing was sent. It does not open the thank-you page."],
      ["Where is the privacy policy?", "A draft is on the privacy policy page and should be reviewed by the business before launch."]
    ]]
  ];
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "FAQs" }],
    eyebrow: "Resources",
    title: "Questions worth asking before a scope is written.",
    lead: "These answers are a starting point. Details for your practice are confirmed in conversation, not assumed from a public page.",
    image: "/assets/images/notes.jpg",
    alt: "Notes and a pen on a wooden desk"
  })}
  <section class="section">
    <div class="container narrow">
      ${groups.map(([title, items]) => `<div class="faq-group"><h2>${title}</h2>${faqs(items)}</div>`).join("")}
    </div>
  </section>`;
  return layout({
    title: "FAQs | Saanvi Laboratories",
    description: "Answers about Saanvi Laboratories services, specialties, engagements, and what not to send in an enquiry.",
    route: "/faqs",
    current: "/faqs",
    main
  });
}

function formFields(prefix, extra) {
  return `${extra}
<label class="wide">Message
  <textarea id="${prefix}-message" name="message" rows="5" placeholder="Describe the practice need. Do not include patient information."></textarea>
</label>
<label class="consent"><input id="${prefix}-consent" name="consent" type="checkbox" required><span>I understand this is a general enquiry and I will not submit patient records or protected health information. <span class="req">*</span></span></label>
<button class="button button-pine" type="submit">Send enquiry</button>
<p class="form-status" role="status" aria-live="polite"></p>
<p class="privacy-note">The form is not connected to a submission service yet. Read the <a href="/privacy-policy">Privacy Policy</a>.</p>`;
}

function contactPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Contact" }],
    eyebrow: "Contact",
    title: "Start with the practice, not a patient file.",
    lead: "Send a general enquiry and we can arrange a conversation once a real destination for the form is connected. Phone, email, address, and hours below are still to be confirmed.",
    image: "/assets/images/phone.jpg",
    alt: "A person holding a phone beside an open laptop"
  })}
  <section class="section">
    <div class="container form-layout">
      <div>
        <p class="eyebrow">Reach Saanvi</p>
        <h2>Details we can publish today.</h2>
        <ul class="detail-list">
          <li><b>Office</b> Hyderabad, India. Street address: TODO — obtain from Saanvi.</li>
          <li><b>Phone</b> TODO — obtain from Saanvi. No number is invented here.</li>
          <li><b>WhatsApp</b> TODO — obtain from Saanvi.</li>
          <li><b>Email</b> TODO — obtain from Saanvi.</li>
          <li><b>Hours</b> TODO — obtain from Saanvi.</li>
        </ul>
        <div class="map-placeholder" style="background-image:linear-gradient(160deg, rgba(14,42,33,.82), rgba(14,42,33,.55)), url('/assets/images/office.jpg')">
          <p>Map embed is waiting for a verified office location. A placeholder pin is not shown.</p>
        </div>
      </div>
      <form id="contact-form" class="enquiry-form" data-enquiry-form action="" method="post" novalidate>
        <noscript><p class="notice">JavaScript is required to validate this form. It cannot send an enquiry until an approved service is connected.</p></noscript>
        <label>Name <span class="req">*</span><input id="contact-name" name="name" required autocomplete="name"></label>
        <label>Phone <span class="req">*</span><input id="contact-phone" name="phone" type="tel" required autocomplete="tel"></label>
        <label class="wide">Email <span class="req">*</span><input id="contact-email" name="email" type="email" required autocomplete="email"></label>
        ${formFields("contact", "")}
      </form>
    </div>
  </section>`;
  return layout({
    title: "Contact Saanvi Laboratories | Hyderabad",
    description: "Contact Saanvi Laboratories in Hyderabad. Phone, email, address, and hours are marked for confirmation, and the enquiry form is not yet connected.",
    route: "/contact",
    current: "/contact",
    main
  });
}

function consultationPage() {
  const options = ["Medical Billing", "Medical Transcription", "Medical Coding", "Compliance Audits", "Practice Consulting", "Credentialing", "Not sure yet"]
    .map((name) => `<option>${name}</option>`).join("");
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Free Consultation" }],
    eyebrow: "Free consultation",
    title: "Tell us what you want to take off the clinical day.",
    lead: "Share your name, the practice, and the kind of support you are considering. Leave charts, member IDs, and any other patient information out of this form.",
    image: "/assets/images/workshop.jpg",
    alt: "A team workshop with notes on a wall",
    cta: false
  })}
  <section class="section">
    <div class="container form-layout">
      <div class="prose">
        <p class="eyebrow">What the conversation is</p>
        <h2>Three things we can cover.</h2>
        <ul class="checklist">
          <li>How the relevant workflow runs today.</li>
          <li>Which tasks you might want supported, and which must stay in the practice.</li>
          <li>What information would be needed before any work is agreed.</li>
        </ul>
        <p class="body-copy">Submitting this form does not book a time and does not send the enquiry. The static page will say so until an approved endpoint is connected. The thank-you page is reserved for a confirmed submission later.</p>
        <p class="notice">Do not include patient records, claim numbers tied to a person, or other protected health information.</p>
      </div>
      <form id="consult-form" class="enquiry-form" data-enquiry-form action="" method="post" novalidate>
        <noscript><p class="notice">JavaScript is required to validate this form. It cannot send an enquiry until an approved service is connected.</p></noscript>
        <label>Name <span class="req">*</span><input id="consult-name" name="name" required autocomplete="name"></label>
        <label>Practice name<input id="consult-practice" name="practice" autocomplete="organization"></label>
        <label>Specialty<input id="consult-specialty" name="specialty"></label>
        <label>Phone <span class="req">*</span><input id="consult-phone" name="phone" type="tel" required autocomplete="tel"></label>
        <label>Email <span class="req">*</span><input id="consult-email" name="email" type="email" required autocomplete="email"></label>
        <label>Services interested in
          <select id="consult-services" name="services"><option value="">Select a service</option>${options}</select>
        </label>
        ${formFields("consult", "")}
      </form>
    </div>
  </section>`;
  return layout({
    title: "Free Consultation | Saanvi Laboratories",
    description: "Request a free consultation with Saanvi Laboratories. The form asks for practice details only and does not accept patient information.",
    route: "/consultation",
    current: "/consultation",
    main
  });
}

function privacyPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Privacy Policy" }],
    eyebrow: "Draft legal page",
    title: "Privacy policy draft.",
    lead: "This is a working draft for a marketing website. It is not approved legal text. Saanvi should have it reviewed before launch.",
    image: "/assets/images/documents.jpg",
    alt: "Hands signing a document",
    cta: false
  })}
  <section class="section">
    <div class="container narrow legal prose">
      <p class="notice">DRAFT — pending legal review. Do not treat this as the final privacy policy.</p>
      <h2>Who this draft covers</h2>
      <p class="body-copy">This draft describes the public website of Saanvi Laboratories, Hyderabad, India. It covers enquiries you choose to send about services. It is not a notice for patient care, and the site is not a place to send patient records.</p>
      <h2>Information the forms ask for</h2>
      <p class="body-copy">Consultation and contact forms ask for details such as your name, practice name, specialty, phone, email, the service you are considering, and a message. You should not include patient names, clinical notes, insurance identifiers, or other sensitive health information.</p>
      <h2>How a future form service would use it</h2>
      <p class="body-copy">Today the forms are not connected, so an enquiry is not delivered. If Saanvi later connects an approved processor, enquiry details would be used to respond to the request, keep a record of that conversation, and protect the form from spam. They would not be sold as a marketing list in this draft.</p>
      <h2>Cookies and analytics</h2>
      <p class="body-copy">This phase does not add analytics or advertising cookies. If tracking is added later, the notice and any required consent should be updated before it goes live.</p>
      <h2>Contact about this draft</h2>
      <p class="body-copy">A privacy contact email is TODO — obtain from Saanvi. Until then, use the contact page for a general question and keep patient information out of it.</p>
    </div>
  </section>`;
  return layout({
    title: "Privacy Policy Draft | Saanvi Laboratories",
    description: "Draft privacy policy for the Saanvi Laboratories website. Enquiry forms are not connected yet and must not be used for patient information.",
    route: "/privacy-policy",
    current: "/privacy-policy",
    main
  });
}

function termsPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Terms and Conditions" }],
    eyebrow: "Draft legal page",
    title: "Terms for using this website.",
    lead: "These terms are a draft for the public site. They do not create a services contract. A real engagement would need its own agreement.",
    image: "/assets/images/desk.jpg",
    alt: "People reviewing papers and laptops at a desk",
    cta: false
  })}
  <section class="section">
    <div class="container narrow legal prose">
      <p class="notice">DRAFT — pending legal review and business approval.</p>
      <h2>The website</h2>
      <p class="body-copy">This site introduces Saanvi Laboratories and lets you ask for a conversation. Content is general information about possible services. It is not medical, legal, or billing advice for a specific case.</p>
      <h2>No patient submissions</h2>
      <p class="body-copy">Do not send patient records or protected health information through the site. Forms that are submitted before a processor is connected are not delivered.</p>
      <h2>Enquiries</h2>
      <p class="body-copy">An enquiry is a request to talk. It does not reserve capacity, create a client relationship, or promise a result. Scope, fees, and timing live in a separate agreement if both sides choose to proceed.</p>
      <h2>Accuracy of published information</h2>
      <p class="body-copy">Some business details are marked TODO because they are not verified. Photographs are free stock images for illustration. They do not show Saanvi’s office, staff, or clients.</p>
      <h2>Liability</h2>
      <p class="body-copy">To the extent the law allows, and subject to legal review, the website is provided as general information. A limitation of liability should be approved by counsel before this draft is treated as final.</p>
      <h2>Contact</h2>
      <p class="body-copy">Questions about these terms can be sent through the contact page. A legal contact address is TODO.</p>
    </div>
  </section>`;
  return layout({
    title: "Terms and Conditions Draft | Saanvi Laboratories",
    description: "Draft website terms for Saanvi Laboratories. The pages are general information and do not create a services contract.",
    route: "/terms",
    current: "/terms",
    main
  });
}

function thanksPage() {
  const main = `<section class="section">
    <div class="container center-panel">
      <p class="eyebrow">Thank you</p>
      <h1>This page is for a confirmed enquiry.</h1>
      <p class="lead">When an approved form service is connected, a successful submission can land here. The forms on this site do not redirect here today, and they do not send your details.</p>
      <p><a class="button button-pine" href="/">Back to home</a></p>
      <p><a class="text-link" href="/contact">Contact page</a></p>
    </div>
  </section>`;
  return layout({
    title: "Thank You | Saanvi Laboratories",
    description: "Confirmation page for a future successful enquiry to Saanvi Laboratories. Current forms do not submit or redirect here.",
    route: "/thank-you",
    current: "/thank-you",
    main
  });
}

function missingPage() {
  const main = `${pageHero({
    crumbItems: [{ href: "/", label: "Home" }, { label: "Page not found" }],
    eyebrow: "404",
    title: "That page is not part of this site.",
    lead: "The address may be mistyped, or it may belong to a later phase that has not been built. Home, services, and consultation are available.",
    image: "/assets/images/hospital-hall.jpg",
    alt: "A clinic reception area",
    cta: false
  })}
  <section class="section">
    <div class="container">
      <p><a class="button button-pine" href="/">Go to the homepage</a> <a class="button" href="/consultation">Get a Free Consultation</a></p>
      <p><a class="text-link" href="/services">Browse services</a></p>
    </div>
  </section>`;
  return layout({
    title: "Page not found | Saanvi Laboratories",
    description: "The page you requested is not available on the Saanvi Laboratories website.",
    route: "/404.html",
    current: "",
    main
  });
}

const pages = [
  ["index.html", homePage()],
  ["about/index.html", aboutPage()],
  ["about/vision-and-mission/index.html", visionPage()],
  ["about/core-values/index.html", valuesPage()],
  ["about/infrastructure/index.html", infrastructurePage()],
  ["services/index.html", servicesPage()],
  ...services.map((service) => [`services/${service.slug}/index.html`, servicePage(service)]),
  ["specialties/index.html", specialtiesPage()],
  ["why-saanvi/why-outsource/index.html", outsourcePage()],
  ["why-saanvi/our-commitment/index.html", commitmentPage()],
  ["faqs/index.html", faqPage()],
  ["contact/index.html", contactPage()],
  ["consultation/index.html", consultationPage()],
  ["privacy-policy/index.html", privacyPage()],
  ["terms/index.html", termsPage()],
  ["thank-you/index.html", thanksPage()],
  ["404.html", missingPage()]
];

for (const [rel, html] of pages) writeFile(rel, html);

const urls = [
  "/",
  "/about/",
  "/about/vision-and-mission/",
  "/about/core-values/",
  "/about/infrastructure/",
  "/services/",
  ...services.map((service) => `/services/${service.slug}/`),
  "/specialties/",
  "/why-saanvi/why-outsource/",
  "/why-saanvi/our-commitment/",
  "/faqs/",
  "/contact/",
  "/consultation/",
  "/privacy-policy/",
  "/terms/"
];

writeFile("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\n`);
writeFile("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `<url><loc>${DOMAIN}${url}</loc></url>`).join("\n")}\n</urlset>\n`);

console.log("Wrote " + pages.length + " pages");
