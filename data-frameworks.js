/* data-frameworks.js — source of truth for framework objects */
"use strict";

window.PW_FRAMEWORKS = [
  {
    id: "e2",
    name: "E² Teaching Framework",
    category: "pedagogy",
    shortDesc: "Every Student Has the Right to Understand — the pedagogical spine behind every Pathways path.",
    pillars: [
      { name: "Lesson Design", desc: "5-part blueprint: Hook → Teach → Practice → Connect → Reflect." },
      { name: "Differentiation", desc: "Modalities, tiered tasks, cultural responsiveness, student choice." },
      { name: "Engagement", desc: "Curiosity, active participation, purpose, feedback, gamification, routine & novelty." },
      { name: "Classroom Culture", desc: "Relationship-building, co-created norms, restorative practices, welcoming environment." }
    ],
    relatedApps: ["e2-lesson-planner", "e2-blueprint-planner", "e2-rubrics-assessment", "path-builder", "flip-studio"],
    externalUrl: "https://pathways-edu.netlify.app/path-builder.html",
    stages: [
      { stage: 1, title: "Understand E²", desc: "Learn the 4 pillars and the 5-part lesson structure.",
        resources: [
          { title: "E² Framework Overview", url: "path-builder.html" },
          { title: "Edutopia: How to Structure a 5-Part Lesson", url: "https://www.edutopia.org/article/how-structure-perfect-lesson/" },
          { title: "ASCD: Understanding by Design", url: "https://www.ascd.org/books/understanding-by-design-expanded-2nd-edition" }
        ] },
      { stage: 2, title: "Plan Your First E² Lesson", desc: "Design a single lesson with the blueprint template.",
        resources: [
          { title: "E² 5-Part Lesson Template", url: "resources.html#e2-template" },
          { title: "Bloom’s Taxonomy verb list", url: "https://bloomstaxonomy.net/" },
          { title: "UDL Guidelines 3.0", url: "https://udlguidelines.cast.org/" }
        ] },
      { stage: 3, title: "Implement in Class", desc: "Run E²-structured lessons and gather student feedback.",
        resources: [
          { title: "Edutopia: Practical Formative Assessment", url: "https://www.edutopia.org/article/practical-guide-formative-assessment" },
          { title: "Understood: Differentiated Instruction", url: "https://www.understood.org/articles/differentiated-instruction-what-it-is-and-isnt" }
        ] },
      { stage: 4, title: "Evaluate & Iterate", desc: "Review outcomes, refine tiers, polish your path.",
        resources: [
          { title: "Dylan Wiliam: Assessment for Learning", url: "https://www.dylanwiliam.org/Dylan_Wiliams_website/Papers.html" },
          { title: "Hattie: Visible Learning", url: "https://visible-learning.org/" }
        ] }
    ]
  },
  {
    id: "udl3",
    name: "UDL 3.0",
    category: "pedagogy",
    shortDesc: "Universal Design for Learning — multiple means of engagement, representation, and action & expression.",
    pillars: [
      { name: "Engagement", desc: "Recruiting interest, sustaining effort & persistence, self-regulation." },
      { name: "Representation", desc: "Perception, language & symbols, comprehension." },
      { name: "Action & Expression", desc: "Physical action, expression & communication, executive functions." }
    ],
    relatedApps: ["differentiate-it", "e2-lesson-planner", "read-aloud"],
    externalUrl: "https://udlguidelines.cast.org/",
    stages: [
      { stage: 1, title: "Understand UDL", desc: "Read CAST’s explanation of the three networks.",
        resources: [
          { title: "CAST: What is UDL?", url: "https://www.cast.org/impact/universal-design-for-learning-udl" },
          { title: "UDL Guidelines 3.0", url: "https://udlguidelines.cast.org/" }
        ] },
      { stage: 2, title: "Plan a UDL-Aligned Lesson", desc: "Design a lesson with multiple means in mind.",
        resources: [
          { title: "CAST: UDL Lesson Planning", url: "https://www.cast.org/products-services/resources/2020/udl-tips-lesson-planning" },
          { title: "Edutopia: UDL Strategies", url: "https://www.edutopia.org/topic/universal-design-for-learning" }
        ] },
      { stage: 3, title: "Apply in Class", desc: "Trial multiple means; collect student voice.",
        resources: [
          { title: "Novak Education: UDL Now", url: "https://www.novakeducation.com/blog" },
          { title: "Inclusive Schools Network", url: "https://inclusiveschools.org/" }
        ] },
      { stage: 4, title: "Evaluate & Iterate", desc: "Audit barriers and continuously remove them.",
        resources: [
          { title: "CAST Research", url: "https://www.cast.org/our-work/research-development.html" },
          { title: "Meyer, Rose & Gordon: UDL Theory and Practice", url: "https://www.cast.org/products-services/resources/2014/universal-design-learning-theory-practice-udl-meyer" }
        ] }
    ]
  },
  {
    id: "blooms-taxonomy",
    name: "Bloom’s Taxonomy (Revised)",
    category: "pedagogy",
    shortDesc: "Six cognitive levels: remember, understand, apply, analyze, evaluate, create.",
    pillars: [
      { name: "Remember", desc: "Recall facts and basic concepts." },
      { name: "Understand", desc: "Explain ideas or concepts." },
      { name: "Apply", desc: "Use information in new situations." },
      { name: "Analyze", desc: "Draw connections among ideas." },
      { name: "Evaluate", desc: "Justify a stand or decision." },
      { name: "Create", desc: "Produce new or original work." }
    ],
    relatedApps: ["quiz-forge", "e2-rubrics-assessment", "e2-lesson-planner"],
    externalUrl: "https://www.bloomstaxonomy.net/",
    stages: [
      { stage: 1, title: "Understand Bloom’s", desc: "Read the revised taxonomy and verb lists.",
        resources: [
          { title: "Bloom’s Taxonomy (official site)", url: "https://www.bloomstaxonomy.net/" },
          { title: "Univ. of Arkansas: Using Bloom’s", url: "https://tips.uark.edu/using-blooms-taxonomy/" }
        ] },
      { stage: 2, title: "Plan With Bloom’s", desc: "Write objectives at every cognitive level.",
        resources: [
          { title: "Vanderbilt CFT: Bloom’s Taxonomy", url: "https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/" },
          { title: "TeachThought: Question Stems", url: "https://www.teachthought.com/critical-thinking/blooms-taxonomy-questioning/" }
        ] },
      { stage: 3, title: "Apply Through Questioning", desc: "Use Bloom-aligned prompts and tasks daily.",
        resources: [
          { title: "Edutopia: Higher-Order Thinking", url: "https://www.edutopia.org/topic/critical-thinking" },
          { title: "Cult of Pedagogy: Question Strategies", url: "https://www.cultofpedagogy.com/student-questions/" }
        ] },
      { stage: 4, title: "Evaluate Coverage", desc: "Audit assessments to balance Bloom’s levels.",
        resources: [
          { title: "Anderson & Krathwohl revision (PDF)", url: "https://www.uky.edu/~rsand1/china2018/texts/Anderson-Krathwohl%20-%20A%20taxonomy%20for%20learning%20teaching%20and%20assessing.pdf" },
          { title: "Iowa State Bloom Wheel", url: "https://www.celt.iastate.edu/instructional-strategies/effective-teaching-practices/revised-blooms-taxonomy/" }
        ] }
    ]
  },
  {
    id: "ib-pyp",
    name: "IB Primary Years Programme (PYP)",
    category: "curricula",
    shortDesc: "Inquiry-based transdisciplinary framework for ages 3–12.",
    pillars: [
      { name: "Transdisciplinary Themes", desc: "Six themes connecting subjects through real-world concepts." },
      { name: "Learner Profile", desc: "Ten attributes: inquirers, knowledgeable, thinkers, communicators, principled, open-minded, caring, risk-takers, balanced, reflective." },
      { name: "Exhibition", desc: "Culminating collaborative inquiry project in the final year." }
    ],
    relatedApps: ["e2-lesson-planner", "project-pilot", "e2-blueprint-planner"],
    externalUrl: "https://www.ibo.org/programmes/primary-years-programme/",
    stages: [
      { stage: 1, title: "Understand the PYP", desc: "Read the PYP curriculum framework.",
        resources: [
          { title: "IB: PYP Curriculum", url: "https://www.ibo.org/programmes/primary-years-programme/curriculum/" },
          { title: "IB: Learner Profile", url: "https://www.ibo.org/benefits/learner-profile/" }
        ] },
      { stage: 2, title: "Plan a Unit of Inquiry", desc: "Design a transdisciplinary unit.",
        resources: [
          { title: "IB: Programme of Inquiry guidance", url: "https://resources.ibo.org/pyp" },
          { title: "Toddle: PYP Planner Examples", url: "https://www.toddleapp.com/blog/pyp-unit-planner/" }
        ] },
      { stage: 3, title: "Implement in Class", desc: "Lead inquiry, surface student questions.",
        resources: [
          { title: "Kath Murdoch: Inquiry Cycle", url: "https://www.kathmurdoch.com.au/" },
          { title: "Concept-Based Inquiry (Marschall & French)", url: "https://www.connecttheconceptdots.com/" }
        ] },
      { stage: 4, title: "Reflect & Improve", desc: "Use exhibition and assessment data to iterate.",
        resources: [
          { title: "IB: Standards & Practices", url: "https://www.ibo.org/standards-and-practices/" },
          { title: "IB: PYP Exhibition guidelines", url: "https://resources.ibo.org/pyp/topic/Exhibition" }
        ] }
    ]
  },
  {
    id: "ib-myp",
    name: "IB Middle Years Programme (MYP)",
    category: "curricula",
    shortDesc: "Concept-driven subject framework for ages 11–16.",
    pillars: [
      { name: "Key Concepts", desc: "16 concepts (e.g. change, systems, relationships) drive inquiry across 8 subject groups." },
      { name: "ATL Skills", desc: "Approaches to Learning: communication, social, self-management, research, thinking." },
      { name: "Personal Project", desc: "Extended independent project in the final year of MYP." }
    ],
    relatedApps: ["e2-lesson-planner", "project-pilot", "e2-rubrics-assessment"],
    externalUrl: "https://www.ibo.org/programmes/middle-years-programme/",
    stages: [
      { stage: 1, title: "Understand the MYP", desc: "Read the MYP model and key concepts.",
        resources: [
          { title: "IB: MYP Curriculum", url: "https://www.ibo.org/programmes/middle-years-programme/curriculum/" },
          { title: "IB: Approaches to Learning (PDF)", url: "https://www.ibo.org/globalassets/digital-tookit/brochures/approaches-to-learning-dp-en.pdf" }
        ] },
      { stage: 2, title: "Plan an MYP Unit", desc: "Map a unit using key/related concepts and global contexts.",
        resources: [
          { title: "IB: From Principles to Practice", url: "https://resources.ibo.org/myp" },
          { title: "Toddle: MYP planner", url: "https://www.toddleapp.com/blog/myp-unit-planner/" }
        ] },
      { stage: 3, title: "Implement & Assess", desc: "Apply MYP criterion-based assessment.",
        resources: [
          { title: "IB: MYP assessment", url: "https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/" },
          { title: "ManageBac: MYP guides", url: "https://www.managebac.com/myp" }
        ] },
      { stage: 4, title: "Reflect & Lead", desc: "Coach colleagues; refine the personal project.",
        resources: [
          { title: "IB: Personal Project", url: "https://www.ibo.org/programmes/middle-years-programme/curriculum/personal-project/" },
          { title: "IB: Standards & Practices", url: "https://www.ibo.org/standards-and-practices/" }
        ] }
    ]
  },
  {
    id: "ib-dp",
    name: "IB Diploma Programme (DP)",
    category: "curricula",
    shortDesc: "Rigorous pre-university programme for ages 16–19 with TOK, EE, and CAS.",
    pillars: [
      { name: "Theory of Knowledge", desc: "Critical thinking course exploring the nature of knowledge across disciplines." },
      { name: "Extended Essay", desc: "4,000-word independent research paper on a topic of the student’s choice." },
      { name: "CAS", desc: "Creativity, Activity, Service — experiential learning outside the classroom." },
      { name: "Six Subject Groups", desc: "Studies in Language & Literature, Language Acquisition, Individuals & Societies, Sciences, Mathematics, The Arts." }
    ],
    relatedApps: ["e2-lesson-planner", "e2-rubrics-assessment", "quiz-forge"],
    externalUrl: "https://www.ibo.org/programmes/diploma-programme/",
    stages: [
      { stage: 1, title: "Understand the DP", desc: "Read the DP model and core requirements.",
        resources: [
          { title: "IB: DP Curriculum", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/" },
          { title: "IB: TOK / EE / CAS", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/dp-core/" }
        ] },
      { stage: 2, title: "Plan DP Teaching", desc: "Plan SL/HL pacing and core integration.",
        resources: [
          { title: "IB: Subject briefs", url: "https://www.ibo.org/programmes/diploma-programme/curriculum/subject-briefs/" },
          { title: "OSC IB study guides", url: "https://www.oxfordstudycourses.com/" }
        ] },
      { stage: 3, title: "Apply in Class", desc: "Teach with criterion-based assessment.",
        resources: [
          { title: "IB: DP assessment", url: "https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/" },
          { title: "Inthinking subject sites", url: "https://www.thinkib.net/" }
        ] },
      { stage: 4, title: "Reflect & Lead", desc: "Mentor EE/TOK supervision; iterate.",
        resources: [
          { title: "IB: Standards & Practices", url: "https://www.ibo.org/standards-and-practices/" },
          { title: "IBO: Research", url: "https://www.ibo.org/research/" }
        ] }
    ]
  },
  {
    id: "cambridge-igcse",
    name: "Cambridge IGCSE / AS & A Level",
    category: "curricula",
    shortDesc: "Internationally recognised qualifications, primary through pre-university, 160+ countries.",
    pillars: [
      { name: "Primary", desc: "Ages 5–11." }, { name: "Lower Secondary", desc: "Ages 11–14." },
      { name: "IGCSE", desc: "Ages 14–16." }, { name: "AS & A Level", desc: "Ages 16–19." }
    ],
    relatedApps: ["e2-lesson-planner", "quiz-forge", "e2-rubrics-assessment"],
    externalUrl: "https://www.cambridgeinternational.org/",
    stages: [
      { stage: 1, title: "Understand Cambridge Pathway", desc: "Map stages and qualifications.",
        resources: [
          { title: "Cambridge International (home)", url: "https://www.cambridgeinternational.org/" },
          { title: "Cambridge: Approach to Teaching (PDF)", url: "https://www.cambridgeinternational.org/Images/271151-cambridge-approach-to-teaching-and-learning.pdf" }
        ] },
      { stage: 2, title: "Plan Schemes of Work", desc: "Use the official scheme-of-work templates.",
        resources: [
          { title: "Cambridge: Subject syllabuses", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/" },
          { title: "Cambridge: Schemes of work", url: "https://www.cambridgeinternational.org/support-and-training-for-schools/teaching-cambridge-at-your-school/teaching-and-assessment-resources/" }
        ] },
      { stage: 3, title: "Implement & Assess", desc: "Run with assessment objectives and mark schemes.",
        resources: [
          { title: "Cambridge: Past papers", url: "https://www.cambridgeinternational.org/students/past-paper-materials/" },
          { title: "Cambridge: Endorsed resources", url: "https://www.cambridgeinternational.org/why-choose-us/teaching-and-learning/teaching-resources/" }
        ] },
      { stage: 4, title: "Reflect & Iterate", desc: "Use exam analysis and CPD to iterate.",
        resources: [
          { title: "Cambridge: Professional development", url: "https://www.cambridgeinternational.org/support-and-training-for-schools/professional-development/" },
          { title: "Cambridge: Research", url: "https://www.cambridgeassessment.org.uk/research-matters/" }
        ] }
    ]
  },
  {
    id: "cefr-arabic",
    name: "CEFR (Arabic focus)",
    category: "arabic",
    shortDesc: "Common European Framework A1–C2, applied to Arabic as a second language.",
    pillars: [
      { name: "A1–A2", desc: "Basic: familiar expressions, simple phrases." },
      { name: "B1–B2", desc: "Independent: connected text, fluent interaction." },
      { name: "C1–C2", desc: "Proficient: fluent, spontaneous, near-native." }
    ],
    relatedApps: ["arabic-lab", "vocab-vault", "hifz-helper"],
    externalUrl: "https://www.coe.int/en/web/common-european-framework-reference-languages",
    stages: [
      { stage: 1, title: "Understand CEFR", desc: "Read the global scale and Arabic adaptations.",
        resources: [
          { title: "Council of Europe: CEFR levels", url: "https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale" },
          { title: "ACTFL: Proficiency Guidelines", url: "https://www.actfl.org/educator-resources/actfl-proficiency-guidelines-2012" }
        ] },
      { stage: 2, title: "Plan Arabic Levels", desc: "Map your scheme of work to A1–C2 descriptors.",
        resources: [
          { title: "CoE: CEFR Companion Volume", url: "https://www.coe.int/en/web/common-european-framework-reference-languages/companion-volume" },
          { title: "Madinah Arabic", url: "https://www.madinaharabic.com/" }
        ] },
      { stage: 3, title: "Apply in Class", desc: "Use can-do statements to assess speaking and writing.",
        resources: [
          { title: "Al-Kitaab textbooks", url: "https://press.georgetown.edu/Book/Al-Kitaab-fii-Tacallum-al-cArabiyya-One" },
          { title: "Duolingo Arabic", url: "https://www.duolingo.com/course/ar/en/Learn-Arabic" }
        ] },
      { stage: 4, title: "Evaluate Proficiency", desc: "Use OPI-style interviews to evaluate.",
        resources: [
          { title: "ACTFL OPI training", url: "https://www.actfl.org/professional-learning/assessments/opi" },
          { title: "Cambridge ESOL Research", url: "https://www.cambridgeenglish.org/research-and-validation/" }
        ] }
    ]
  },
  {
    id: "lti13",
    name: "LTI 1.3",
    category: "interoperability",
    shortDesc: "OAuth2/OpenID-Connect spec for launching tools from Canvas, Moodle, Blackboard, Brightspace, Google Classroom.",
    pillars: [
      { name: "Launch", desc: "Secure tool launch via OpenID Connect." },
      { name: "Deep Linking", desc: "Select and embed specific content." },
      { name: "AGS", desc: "Assignment & Grade Services — score passback." },
      { name: "NRPS", desc: "Names & Role Provisioning — roster sync." }
    ],
    relatedApps: ["path-builder", "quiz-forge", "exit-ticket"],
    externalUrl: "https://www.1edtech.org/standards/lti",
    stages: [
      { stage: 1, title: "Understand LTI 1.3", desc: "Read the launch flow and key services.",
        resources: [
          { title: "1EdTech: LTI 1.3 spec", url: "https://www.imsglobal.org/spec/lti/v1p3/" },
          { title: "1EdTech: LTI standards", url: "https://www.1edtech.org/standards/lti" }
        ] },
      { stage: 2, title: "Plan Integration", desc: "Pick LMSs to support; map AGS/NRPS needs.",
        resources: [
          { title: "Canvas: LTI 1.3 docs", url: "https://canvas.instructure.com/doc/api/file.lti_dev_key_config.html" },
          { title: "Moodle: External tool docs", url: "https://docs.moodle.org/en/External_tool" }
        ] },
      { stage: 3, title: "Apply (Build & Register)", desc: "Register the tool and test deep linking.",
        resources: [
          { title: "1EdTech LTI 1.3 reference impl", url: "https://github.com/IMSGlobal/lti-1-3-php-library" },
          { title: "Google Classroom Add-ons", url: "https://developers.google.com/classroom/add-ons/get-started" }
        ] },
      { stage: 4, title: "Certify & Maintain", desc: "Pursue 1EdTech certification.",
        resources: [
          { title: "1EdTech: Certification", url: "https://site.imsglobal.org/certifications" },
          { title: "1EdTech: TrustEd Apps", url: "https://www.1edtech.org/program/trustedapps" }
        ] }
    ]
  },
  {
    id: "xapi",
    name: "xAPI (Experience API)",
    category: "interoperability",
    shortDesc: "Records learning as actor → verb → object statements in a Learning Record Store.",
    pillars: [
      { name: "Statements", desc: "Actor-verb-object triples for any learning experience." },
      { name: "LRS", desc: "Learning Record Store — central data repository." },
      { name: "Profiles", desc: "Vocabulary sets for specific domains (e.g. cmi5)." }
    ],
    relatedApps: ["quiz-forge", "exit-ticket", "data-dash"],
    externalUrl: "https://xapi.com/",
    stages: [
      { stage: 1, title: "Understand xAPI", desc: "Learn statements, actors, verbs, objects.",
        resources: [
          { title: "xAPI overview", url: "https://xapi.com/overview/" },
          { title: "xAPI specification", url: "https://github.com/adlnet/xAPI-Spec" }
        ] },
      { stage: 2, title: "Plan a Tracking Strategy", desc: "Pick verbs and profiles you’ll emit.",
        resources: [
          { title: "ADL: cmi5 profile", url: "https://aicc.github.io/CMI-5_Spec_Current/" },
          { title: "Rustici: SCORM vs xAPI", url: "https://rusticisoftware.com/resources/elearning-101-scorm-vs-xapi/" }
        ] },
      { stage: 3, title: "Apply (LRS + emitters)", desc: "Stand up an LRS and start recording statements.",
        resources: [
          { title: "Learning Locker (open-source LRS)", url: "https://docs.learninglocker.net/" },
          { title: "Veracity Learning LRS", url: "https://lrs.io/" }
        ] },
      { stage: 4, title: "Analyse & Improve", desc: "Visualise data and feed it back into design.",
        resources: [
          { title: "1EdTech Caliper Analytics", url: "https://www.imsglobal.org/activity/caliper" },
          { title: "SoLAR (analytics society)", url: "https://www.solaresearch.org/" }
        ] }
    ]
  },
  {
    id: "scorm",
    name: "SCORM 1.2 / 2004",
    category: "interoperability",
    shortDesc: "Legacy packaging standard for e-learning courses. Use xAPI for new work.",
    pillars: [
      { name: "Content Aggregation", desc: "Package SCOs with manifest XML." },
      { name: "Run-Time", desc: "Communication API between SCO and LMS." }
    ],
    relatedApps: ["flip-studio"],
    externalUrl: "https://scorm.com/scorm-explained/",
    stages: [
      { stage: 1, title: "Understand SCORM", desc: "Why SCORM exists and where it fits.",
        resources: [
          { title: "SCORM Explained", url: "https://scorm.com/scorm-explained/" },
          { title: "SCORM 1.2 overview", url: "https://scorm.com/scorm-explained/technical-scorm/scorm-1-2-overview/" }
        ] },
      { stage: 2, title: "Plan Course Packaging", desc: "Author content with SCORM in mind.",
        resources: [
          { title: "Articulate Storyline (SCORM)", url: "https://articulate.com/360/storyline" },
          { title: "Adobe Captivate", url: "https://www.adobe.com/products/captivate.html" }
        ] },
      { stage: 3, title: "Apply (Publish & Test)", desc: "Publish a SCORM package and test in the LMS.",
        resources: [
          { title: "SCORM Cloud (free testing)", url: "https://cloud.scorm.com/" },
          { title: "Rustici Engine", url: "https://rusticisoftware.com/products/rustici-engine/" }
        ] },
      { stage: 4, title: "Move Beyond SCORM", desc: "Plan migration to xAPI/cmi5.",
        resources: [
          { title: "Rustici: SCORM vs xAPI", url: "https://rusticisoftware.com/resources/elearning-101-scorm-vs-xapi/" },
          { title: "ADL cmi5 spec", url: "https://aicc.github.io/CMI-5_Spec_Current/" }
        ] }
    ]
  },
  {
    id: "wcag22",
    name: "WCAG 2.2 AA",
    category: "accessibility",
    shortDesc: "Baseline for accessible web content — perceivable, operable, understandable, robust.",
    pillars: [
      { name: "Perceivable", desc: "Text alternatives, captions, contrast." },
      { name: "Operable", desc: "Keyboard, timing, navigation." },
      { name: "Understandable", desc: "Readable, predictable, input help." },
      { name: "Robust", desc: "Works with assistive tech." }
    ],
    relatedApps: ["read-aloud", "differentiate-it"],
    externalUrl: "https://www.w3.org/TR/WCAG22/",
    stages: [
      { stage: 1, title: "Understand WCAG 2.2", desc: "Read the four POUR principles and AA criteria.",
        resources: [
          { title: "W3C: WCAG 2.2 spec", url: "https://www.w3.org/TR/WCAG22/" },
          { title: "WAI: WCAG 2.2 Quick Reference", url: "https://www.w3.org/WAI/WCAG22/quickref/" }
        ] },
      { stage: 2, title: "Plan Accessibility", desc: "Add accessibility to design and content workflows.",
        resources: [
          { title: "WebAIM articles", url: "https://webaim.org/articles/" },
          { title: "A11y Project checklist", url: "https://www.a11yproject.com/checklist/" }
        ] },
      { stage: 3, title: "Apply & Test", desc: "Use automated and manual testing.",
        resources: [
          { title: "axe DevTools", url: "https://www.deque.com/axe/" },
          { title: "Lighthouse accessibility audits", url: "https://developer.chrome.com/docs/lighthouse/accessibility/" }
        ] },
      { stage: 4, title: "Sustain", desc: "Embed accessibility in CI and procurement.",
        resources: [
          { title: "GOV.UK: Accessibility regulations", url: "https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps" },
          { title: "Section 508 (US)", url: "https://www.section508.gov/" }
        ] }
    ]
  },
  {
    id: "ferpa",
    name: "FERPA",
    category: "compliance",
    shortDesc: "US federal law protecting student education record privacy.",
    pillars: [
      { name: "Education Records", desc: "Records directly related to a student maintained by an educational agency." },
      { name: "Directory Information", desc: "Limited categories of info that may be disclosed without consent." },
      { name: "Parent / Eligible Student Rights", desc: "Inspection, amendment, and consent rights." }
    ],
    relatedApps: ["data-dash"],
    externalUrl: "https://studentprivacy.ed.gov/",
    stages: [
      { stage: 1, title: "Understand FERPA", desc: "Read general guidance for parents and schools.",
        resources: [
          { title: "ED: Student Privacy Policy Office", url: "https://studentprivacy.ed.gov/" },
          { title: "ED: FERPA general guidance for parents", url: "https://studentprivacy.ed.gov/resources/ferpa-general-guidance-parents" }
        ] },
      { stage: 2, title: "Plan Compliance", desc: "Map data flows; identify school officials & vendors.",
        resources: [
          { title: "ED: FERPA Toolkit", url: "https://studentprivacy.ed.gov/resources?resource_type=All&topic=All&audience=All" },
          { title: "CoSN privacy resources", url: "https://www.cosn.org/edtech-topics/privacy/" }
        ] },
      { stage: 3, title: "Apply Vendor Reviews", desc: "Use a privacy review process for edtech.",
        resources: [
          { title: "Common Sense Privacy Evaluations", url: "https://privacy.commonsense.org/" },
          { title: "Student Data Privacy Consortium", url: "https://privacy.a4l.org/" }
        ] },
      { stage: 4, title: "Audit & Train", desc: "Annual training and audit cadence.",
        resources: [
          { title: "ED: Training videos & webinars", url: "https://studentprivacy.ed.gov/training" },
          { title: "FERPA|Sherpa", url: "https://ferpasherpa.org/" }
        ] }
    ]
  },
  {
    id: "gdpr-k",
    name: "GDPR-K",
    category: "compliance",
    shortDesc: "EU data-protection plus stricter children’s provisions (age 13–16).",
    pillars: [
      { name: "Lawful Basis", desc: "Consent, contract, legal obligation, vital interests, public task, legitimate interests." },
      { name: "Children’s Provisions", desc: "Age of consent (13–16) for information society services." },
      { name: "Data Subject Rights", desc: "Access, rectification, erasure, portability, objection." }
    ],
    relatedApps: ["data-dash"],
    externalUrl: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/",
    stages: [
      { stage: 1, title: "Understand GDPR-K", desc: "Read ICO guidance for children.",
        resources: [
          { title: "ICO: Children and the UK GDPR", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/children-and-the-uk-gdpr/" },
          { title: "EDPB: Guidelines", url: "https://www.edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en" }
        ] },
      { stage: 2, title: "Plan Compliance", desc: "DPIAs, privacy notices, consent flows.",
        resources: [
          { title: "ICO: DPIA template", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/" },
          { title: "ICO: Age-appropriate design code", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/" }
        ] },
      { stage: 3, title: "Apply Across Vendors", desc: "Process Article 28 contracts; map sub-processors.",
        resources: [
          { title: "ICO: Contracts and liabilities", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/" },
          { title: "EDPB: SCCs", url: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en" }
        ] },
      { stage: 4, title: "Audit & Train", desc: "Annual audits; staff DPO training.",
        resources: [
          { title: "ICO: Accountability framework", url: "https://ico.org.uk/for-organisations/advice-for-small-organisations/accountability-framework/" },
          { title: "IAPP resources", url: "https://iapp.org/resources/" }
        ] }
    ]
  }
];
