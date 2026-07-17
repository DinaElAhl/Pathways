/* data-frameworks.js — source of truth for framework objects */
"use strict";

window.PW_FRAMEWORKS = [
  {
    id: "e2",
    name: "E\u00b2 Teaching Framework",
    category: "pedagogy",
    shortDesc: "Every Student Has the Right to Understand \u2014 the pedagogical spine behind every Pathways path.",
    pillars: [
      { name: "Lesson Design", desc: "5-part blueprint: Hook \u2192 Teach \u2192 Practice \u2192 Connect \u2192 Reflect." },
      { name: "Differentiation", desc: "Modalities, tiered tasks, cultural responsiveness, student choice." },
      { name: "Engagement", desc: "Curiosity, active participation, purpose, feedback, gamification, routine & novelty." },
      { name: "Classroom Culture", desc: "Relationship-building, co-created norms, restorative practices, welcoming environment." }
    ],
    relatedApps: ["e2-lesson-planner", "e2-blueprint-planner", "e2-rubrics-assessment", "path-builder", "flip-studio"],
    externalUrl: "path-builder.html"
  },
  {
    id: "udl3",
    name: "UDL 3.0",
    category: "pedagogy",
    shortDesc: "Universal Design for Learning \u2014 multiple means of engagement, representation, and action & expression.",
    pillars: [
      { name: "Engagement", desc: "Recruiting interest, sustaining effort & persistence, self-regulation." },
      { name: "Representation", desc: "Perception, language & symbols, comprehension." },
      { name: "Action & Expression", desc: "Physical action, expression & communication, executive functions." }
    ],
    relatedApps: ["differentiate-it", "e2-lesson-planner", "read-aloud"],
    externalUrl: "https://udlguidelines.cast.org/"
  },
  {
    id: "blooms-taxonomy",
    name: "Bloom\u2019s Taxonomy (Revised)",
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
    externalUrl: "#"
  },
  {
    id: "ib-pyp",
    name: "IB Primary Years Programme (PYP)",
    category: "curricula",
    shortDesc: "Inquiry-based transdisciplinary framework for ages 3\u201312.",
    pillars: [
      { name: "Transdisciplinary Themes", desc: "Six themes connecting subjects through real-world concepts." },
      { name: "Learner Profile", desc: "Ten attributes: inquirers, knowledgeable, thinkers, communicators, principled, open-minded, caring, risk-takers, balanced, reflective." },
      { name: "Exhibition", desc: "Culminating collaborative inquiry project in the final year." }
    ],
    relatedApps: ["e2-lesson-planner", "project-pilot", "e2-blueprint-planner"],
    externalUrl: "https://www.ibo.org/programmes/primary-years-programme/"
  },
  {
    id: "ib-myp",
    name: "IB Middle Years Programme (MYP)",
    category: "curricula",
    shortDesc: "Concept-driven subject framework for ages 11\u201316.",
    pillars: [
      { name: "Key Concepts", desc: "16 concepts (e.g. change, systems, relationships) drive inquiry across 8 subject groups." },
      { name: "ATL Skills", desc: "Approaches to Learning: communication, social, self-management, research, thinking." },
      { name: "Personal Project", desc: "Extended independent project in the final year of MYP." }
    ],
    relatedApps: ["e2-lesson-planner", "project-pilot", "e2-rubrics-assessment"],
    externalUrl: "https://www.ibo.org/programmes/middle-years-programme/"
  },
  {
    id: "ib-dp",
    name: "IB Diploma Programme (DP)",
    category: "curricula",
    shortDesc: "Rigorous pre-university programme for ages 16\u201319 with TOK, EE, and CAS.",
    pillars: [
      { name: "Theory of Knowledge", desc: "Critical thinking course exploring the nature of knowledge across disciplines." },
      { name: "Extended Essay", desc: "4,000-word independent research paper on a topic of the student\u2019s choice." },
      { name: "CAS", desc: "Creativity, Activity, Service \u2014 experiential learning outside the classroom." },
      { name: "Six Subject Groups", desc: "Studies in Language & Literature, Language Acquisition, Individuals & Societies, Sciences, Mathematics, The Arts." }
    ],
    relatedApps: ["e2-lesson-planner", "e2-rubrics-assessment", "quiz-forge"],
    externalUrl: "https://www.ibo.org/programmes/diploma-programme/"
  }
];
