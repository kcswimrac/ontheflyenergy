# On The Fly Energy - Site Refactor Summary

## Overview

The ontheflyenergy.com site has been successfully refocused from customer acquisition to **talent and investor acquisition** for an early-stage hard tech energy storage startup. The site now positions On The Fly Energy as a frontier hard tech company building modular kinetic energy storage (flywheels) for grid-edge and AI datacenter applications.

---

## Major Architectural Changes

### 1. **Multi-Page Navigation with React Router**
- Installed `react-router-dom` (v7.9.6)
- Converted from single-page anchor navigation to proper multi-page routing
- Created dedicated routes for:
  - `/` - Home page
  - `/investors` - Investor relations
  - `/join` - Talent recruitment
  - `/about` - Founder story and credibility

### 2. **New Navigation System**
- **Component:** `src/components/Navbar.tsx`
- Fixed navigation bar at top of all pages
- Responsive mobile menu with hamburger icon
- Active route highlighting
- Links to all major sections: Home, For Investors, Join Us, About

---

## New Components

### Homepage Components

#### **HeroSection** (refactored from original)
**Location:** `src/components/HeroSection.tsx`

**Changes:**
- **Headline:** Changed from "POWER THAT OUTLASTS" to "AI is breaking the grid. Lithium alone cannot keep up."
- **Subheadline:** Positions On The Fly Energy as building "the kinetic layer for an electrified world" with modular flywheel power buffers
- **CTAs:** Now link to `/join` ("Join the Mission") and `/investors` ("For Investors")
- **Stats:** Updated to show technical specs relevant to early stage:
  - "0-5 min Volatility Window"
  - "20+ years Design Lifespan"
  - "100k+ cycles No Degradation"

#### **VisionSection** (new)
**Location:** `src/components/VisionSection.tsx`

**Purpose:** "If we succeed, the world looks like this"

**Content:**
- Grid that absorbs AI scale load volatility
- Data centers with kinetic buffers for sub-5-minute power events
- Energy infrastructure that behaves like cloud compute: fast, modular, dispatchable

#### **WhyFlywheelsSection** (new)
**Location:** `src/components/WhyFlywheelsSection.tsx`

**Purpose:** Explain strategic positioning in energy stack

**Content:**
- Lithium is energy (hours/days storage)
- Flywheels are power (instant response)
- Both are needed for complete solutions
- On The Fly Energy targets 0–5 minute volatility window where batteries degrade rapidly

#### **ProgressSection** (new, replaces ProductsSection)
**Location:** `src/components/ProgressSection.tsx`

**Purpose:** Show honest, concrete progress without overclaiming

**Content:**
- Timeline-based milestone cards
- Completed milestones:
  - Rotor-Seed Prototype Design (Q4 2024)
  - Containment & Burst Analysis (Q1 2025)
  - Inverter Design Exploration (Q1 2025)
- In-progress/planned milestones:
  - Pilot Site Conversations (In Progress)
  - Manufacturing Partnership Development (Q2 2025)
  - First Working Prototype (Target Q3 2025)
- Visual timeline with checkmarks for completed items
- Bottom note: "We are not overclaiming. This is early-stage hard tech..."

#### **TalentCTASection** (new)
**Location:** `src/components/TalentCTASection.tsx`

**Purpose:** Recruit founding team members

**Content:**
- Intro: "Assembling a founding team to build the world's most responsive energy storage platform"
- List of disciplines needed:
  - Power Electronics & Inverter Design
  - Motor Control & Embedded Firmware
  - Mechanical & Rotor Design
  - Composite Manufacturing & Testing
  - Controls, SCADA & Manufacturing Systems
- CTA linking to `/join` page

---

## New Pages

### **HomePage**
**Location:** `src/pages/HomePage.tsx`

**Structure:**
1. HeroSection
2. VisionSection
3. WhyFlywheelsSection
4. ProgressSection
5. TalentCTASection

**Purpose:** Establish narrative clarity, position as hard tech frontier company, provide clear paths for talent and investors

---

### **InvestorsPage**
**Location:** `src/pages/InvestorsPage.tsx`

**Sections:**

1. **Hero**
   - Title: "For Investors"
   - Tagline: "Building the kinetic layer for grid-scale AI and industrial power systems"

2. **Problem Section**
   - AI and electrification creating unprecedented power volatility
   - Lithium batteries degrade under high cycle counts and high C-rates
   - Grid needs a kinetic layer for 0–5 minute window

3. **Wedge Section**
   - Modular flywheel systems for short-duration, high-power window
   - Instant power response, 100k+ cycles with no degradation
   - Integrate at grid edge to protect batteries and improve economics

4. **Traction Section**
   - Technical de-risking (prototype design, FEA, inverter architecture)
   - Early conversations (pilots, manufacturing partners)
   - Team capabilities (automation, manufacturing, EVs, energy)

5. **Roadmap Section**
   - Q2 2025: First integrated prototype
   - Q3 2025: Validate performance metrics
   - Q4 2025: First pilot deployment
   - 2026: Scale manufacturing, certification, expand pilots

6. **Capital Section**
   - Where funding accelerates progress
   - Precision machining, power electronics, certification, pilot deployments

7. **Contact Form**
   - Name, Firm/Organization, Investment Stage, Check Size, Message
   - Uses Web3Forms API (same access key as original site)
   - Success/error handling with user feedback

---

### **JoinPage**
**Location:** `src/pages/JoinPage.tsx`

**Sections:**

1. **Hero**
   - Title: "Join the Mission"
   - Tagline: "Assembling a founding team to build the world's most responsive energy storage platform"

2. **Intro Section**
   - Opportunity to build something that matters
   - Real hardware solving systemic problems
   - Early stage with enormous impact and autonomy

3. **Disciplines We Need**
   - Power Electronics & Inverter Design
   - Motor Control & Embedded Firmware
   - Mechanical & Rotor Design
   - Composite Manufacturing & Testing
   - Controls, SCADA & Manufacturing Systems
   - Systems Integration & Field Engineering

4. **What We Value**
   - Builders Over Talkers
   - Extreme Ownership
   - Intellectual Honesty
   - Long-Term Thinking

5. **Contact Form**
   - Name, Email, Background/Expertise, What do you want to work on, Additional Info
   - Uses Web3Forms API
   - Success/error handling

---

### **AboutPage**
**Location:** `src/pages/AboutPage.tsx`

**Sections:**

1. **Hero**
   - Title: "About Us"
   - Tagline: "Building the kinetic layer for an electrified world"

2. **Why We Exist**
   - Grid breaking under AI and electrification
   - Lithium batteries not complete answer for 0–5 minute volatility
   - Founding team saw this gap firsthand through automation, manufacturing, EV work
   - Building kinetic layer to complement batteries

3. **What We Bring**
   - Built Real Hardware (automation, manufacturing, energy infrastructure)
   - Manufacturing DNA (casting, precision machining, production systems)
   - Energy Systems Experience (EVs, industrial power, grid-edge)
   - Solving Real Problems (focused on what grid actually needs)

4. **The Founding Team**
   - Deep experience in automation, manufacturing, casting, EVs, energy systems
   - Track record building physical products under constraints
   - Engineers and builders, not academics
   - **TODO:** Add individual founder bios with LinkedIn links and credentials

5. **Built in America**
   - Commitment to American manufacturing
   - Strategic and operational imperative for critical infrastructure

---

## Archived Components

The following customer-focused components were moved to `src/components/archive/` for reference:

- `ApplicationsSection.tsx` - Industry use cases
- `CTASection.tsx` - Original contact form and newsletter
- `CultureSection.tsx` - 6 culture values
- `ManifestoSection.tsx` - Brand positioning and mission
- `MetricsSection.tsx` - Social proof stats
- `MissionSection.tsx` - 6 core value cards
- `ProductsSection.tsx` - Rotor-Seed, Rotor-Pod, Rotor-Farm products

These can be referenced or repurposed later if needed.

---

## Design System Preserved

All existing design elements were maintained:

### **Colors**
- `midnight-black`: #0D0D0D
- `energy-green`: #27AE60
- `steel-blue`: #2C3E50
- `patriot-red`: #B22222 (not heavily used in new design)
- `industrial-white`: #F5F5F5

### **Typography**
- Headers: Montserrat (font-montserrat)
- Body: Open Sans (font-open-sans)
- Code/Mono: Roboto Mono (font-roboto-mono)

### **Tailwind Animations**
- `animate-fade-in`
- `animate-slide-up`
- `animate-float`

### **Responsive Design**
- Mobile-first approach maintained
- Hamburger menu for mobile navigation
- Grid layouts adapt from 1 to 2-3 columns
- All forms and sections tested for mobile responsiveness

---

## How the Site Now Speaks to Talent and Investors

### **For Talent**

1. **Homepage Hero:** Immediately frames the problem (AI breaking grid) and positions the company as building something ambitious and necessary
2. **Join the Mission CTA:** Prominent on homepage, links to dedicated recruitment page
3. **JoinPage:** Lists disciplines needed, company values, application form
4. **Honest Progress:** ProgressSection shows real milestones without hype—appeals to serious engineers
5. **About Page:** Establishes founder credibility through track record building real hardware

### **For Investors**

1. **Homepage Hero:** "For Investors" is secondary CTA on hero section
2. **InvestorsPage Structure:**
   - Problem framing (AI grid strain, battery limitations)
   - Clear wedge (0–5 minute volatility window)
   - Traction evidence (prototype, FEA, partnerships)
   - Roadmap with realistic timelines
   - Capital allocation transparency
   - Direct contact form
3. **ProgressSection:** Demonstrates methodical de-risking approach
4. **WhyFlywheelsSection:** Shows strategic thinking about market positioning
5. **AboutPage:** Founder story and capabilities build confidence

---

## Technical Implementation Details

### **Dependencies Added**
- `react-router-dom@7.9.6` - Client-side routing

### **File Structure**
```
src/
├── components/
│   ├── archive/              # Old customer-focused components
│   ├── HeroSection.tsx       # Refactored for problem/vision narrative
│   ├── Navbar.tsx            # New fixed navigation
│   ├── ProgressSection.tsx   # Honest milestone timeline
│   ├── TalentCTASection.tsx  # Homepage talent CTA
│   ├── VisionSection.tsx     # "If we succeed" future state
│   └── WhyFlywheelsSection.tsx # Strategic positioning
├── pages/
│   ├── AboutPage.tsx         # Founder story and credibility
│   ├── HomePage.tsx          # Main landing page
│   ├── InvestorsPage.tsx     # Investor relations
│   └── JoinPage.tsx          # Talent recruitment
├── App.tsx                   # Router setup
└── main.tsx                  # Entry point (unchanged)
```

### **Build & Deployment**
- Build command: `npm run build`
- Deploy command: `npm run deploy` (uses gh-pages)
- Build tested successfully ✓
- All TypeScript compilation passed ✓

---

## Content TODOs

### **AboutPage - Founder Bios**
**Location:** `src/pages/AboutPage.tsx` line 90

**Required:**
- Individual founder bios with:
  - Names and titles
  - Specific background and credentials
  - Companies worked at
  - Systems built
  - LinkedIn profile links
  - Relevant patents/publications if any

### **Progress Milestones**
**Location:** `src/components/ProgressSection.tsx`

**Consider updating with:**
- Specific competition/prize participation outcomes
- LOIs or pilot site names (if disclosable)
- Any additional de-risking steps completed
- Manufacturing vendor relationships (if disclosable)

### **Contact Form Integration**
Both InvestorsPage and JoinPage use Web3Forms with access key `919b97a3-a0bf-4bbc-99e1-ca7da35e3bf0`.

**Verify:**
- Access key is still valid
- Email routing goes to correct addresses (investors@, careers@)
- Form submissions are being received
- Consider adding email notification integrations if needed

### **Images & Visuals**
**Current hero image:** `src/assets/home.png`

**Consider:**
- Adding visuals that better represent kinetic energy, motion, or modular systems
- Product renderings or CAD imagery if available
- Photos of prototype work or manufacturing facilities
- Team photos for About page

---

## Brand Voice & Messaging

The new site uses direct, clear language throughout:

### **Tone Characteristics:**
- **Straightforward:** No marketing fluff or hype
- **Specific:** Concrete timelines, honest about stage
- **Technical:** Appeals to engineers and technical investors
- **Ambitious:** Clear about solving real systemic problems
- **Humble:** "We are not overclaiming" - acknowledges early stage

### **Key Phrases Used:**
- "Serious adults doing hard things"
- "We are not academics trying to commercialize a lab concept"
- "Builders over talkers"
- "The physics does not care about your story"
- "Methodically de-risking the path"

### **What Changed:**
- **Before:** Product-focused ("Power that Outlasts"), feature lists, units deployed
- **After:** Problem-focused ("AI is breaking the grid"), strategic positioning, honest progress

---

## Next Steps / Recommendations

### **Immediate Actions:**

1. **Add founder bios to AboutPage** with real names, backgrounds, and LinkedIn links
2. **Update progress milestones** with any new achievements since implementation
3. **Verify form submissions** are routing to correct email addresses
4. **Test on actual devices** to ensure mobile experience is smooth
5. **Consider adding hero imagery** that better represents kinetic energy systems

### **Short-Term (1-2 weeks):**

1. **SEO optimization:**
   - Add meta descriptions to all pages
   - Update page titles
   - Add Open Graph tags for social sharing
   - Create sitemap

2. **Analytics:**
   - Add Google Analytics or similar
   - Track form submissions and conversions
   - Monitor which pages drive most engagement

3. **Content refinement:**
   - Get feedback from team on messaging
   - Test with sample investors and engineers
   - Refine based on actual conversations

### **Medium-Term (1-2 months):**

1. **Blog or updates section** for sharing technical progress
2. **Case studies or pilot details** as they become available
3. **Team page** with individual profiles as team grows
4. **Press/media section** if coverage is received
5. **Newsletter signup** for updates (if desired)

---

## Summary

The On The Fly Energy website has been successfully transformed from a customer-acquisition product site into a talent and investor-focused platform for an early-stage hard tech venture. The site now:

- **Clearly articulates the problem** (AI grid strain, battery limitations)
- **Positions the solution strategically** (kinetic layer for 0–5 minute volatility)
- **Shows credible progress** without overclaiming
- **Provides clear paths** for talent to apply and investors to reach out
- **Maintains professional design** with existing brand system
- **Uses honest, direct language** that appeals to technical audiences

All code is committed to branch `claude/refocus-talent-recruitment-016Bj7sfxFVPiaqHqXgz5drh` and pushed to the repository. The site builds cleanly and is ready for deployment via `npm run deploy`.
