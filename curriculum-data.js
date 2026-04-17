/* curriculum-data.js — preset dropdown data for the 7-step curriculum wizard */
"use strict";
window.CURRICULUM_DATA = {
  orgTypes: [
    { id: "school", label: "Traditional Public/Private School", roles: ["Principal", "Superintendent", "Department Head", "Teacher", "Teaching Assistant"] },
    { id: "charter", label: "Charter School", roles: ["Director", "Instructional Lead", "Teacher", "Teaching Assistant"] },
    { id: "homeschool", label: "Homeschooling Family", roles: ["Parent/Teacher", "Student", "Learning Coach"] },
    { id: "university", label: "University / Higher Ed", roles: ["Dean", "Department Chair", "Professor", "Teaching Assistant"] },
    { id: "corporate", label: "Corporate Training", roles: ["Learning Director", "Trainer", "Manager", "Employee"] }
  ],
  grades: [
    { id: "prek", label: "Pre-K (Ages 3\u20134)", phase: "early-childhood" },
    { id: "k", label: "Kindergarten", phase: "early-childhood" },
    { id: "1", label: "Grade 1", phase: "elementary" },
    { id: "2", label: "Grade 2", phase: "elementary" },
    { id: "3", label: "Grade 3", phase: "elementary" },
    { id: "4", label: "Grade 4", phase: "elementary" },
    { id: "5", label: "Grade 5", phase: "elementary" },
    { id: "6", label: "Grade 6", phase: "middle" },
    { id: "7", label: "Grade 7", phase: "middle" },
    { id: "8", label: "Grade 8", phase: "middle" },
    { id: "9", label: "Grade 9", phase: "secondary" },
    { id: "10", label: "Grade 10", phase: "secondary" },
    { id: "11", label: "Grade 11", phase: "secondary" },
    { id: "12", label: "Grade 12", phase: "secondary" },
    { id: "undergrad", label: "Undergraduate", phase: "higher-ed" },
    { id: "grad", label: "Graduate", phase: "higher-ed" }
  ],
  learningOutcomes: {
    "prek": ["Develop social-emotional skills and independence", "Build foundational literacy awareness", "Explore mathematical thinking through play", "Develop gross and fine motor skills", "Nurture curiosity and love of learning"],
    "k": ["Master basic letter recognition and phonics", "Develop number sense and counting skills", "Learn to follow classroom routines", "Build listening and speaking skills", "Grow independence in self-care and transitions"],
    "1": ["Read and decode simple texts fluently", "Write short sentences with sound spelling", "Add and subtract within 20", "Use basic scientific observation", "Begin research and information-seeking skills"],
    "2": ["Read grade-level texts with comprehension", "Write multi-sentence paragraphs", "Master addition and subtraction within 100", "Understand basic earth and life sciences", "Collaborate effectively in pairs and groups"],
    "3": ["Read chapter books independently", "Write structured paragraphs with evidence", "Multiply and divide within 100", "Design simple science experiments", "Use digital tools for research"],
    "4": ["Analyse fiction and non-fiction texts", "Write multi-paragraph essays", "Master multi-digit arithmetic and fractions", "Understand physical science concepts", "Present research findings orally"],
    "5": ["Synthesise information across multiple sources", "Write persuasive and narrative essays", "Apply fractions, decimals, and percentages", "Conduct independent science investigations", "Demonstrate digital citizenship"],
    "6": ["Analyse complex texts across genres", "Write argumentative and explanatory essays", "Apply ratios, rates, and algebraic thinking", "Design controlled experiments", "Develop study and organisational skills"],
    "7": ["Evaluate author purpose and bias", "Write research papers with citations", "Solve equations and inequalities", "Understand cell biology and chemistry basics", "Manage long-term projects independently"],
    "8": ["Compare perspectives across texts and media", "Master the research writing process", "Apply linear functions and geometry", "Understand physics and earth science", "Prepare for high school academic expectations"],
    "9": ["Engage with complex literary and informational texts", "Write analytical and synthesis essays", "Master algebra and begin geometry proofs", "Apply scientific method rigorously", "Develop time-management and self-advocacy"],
    "10": ["Interpret rhetoric and persuasive techniques", "Write research papers with multiple sources", "Apply geometry and begin trigonometry", "Understand chemistry and biology deeply", "Explore career and post-secondary interests"],
    "11": ["Analyse seminal US and world documents", "Write college-level analytical essays", "Master pre-calculus and statistics", "Conduct independent research projects", "Prepare standardised test strategies"],
    "12": ["Demonstrate critical thinking across disciplines", "Prepare for post-secondary pathways", "Master research and academic writing", "Apply advanced mathematical reasoning", "Develop global awareness and cultural competency"],
    "undergrad": ["Master discipline-specific methodologies", "Conduct independent research", "Develop professional communication skills", "Apply theoretical frameworks to real problems", "Build collaborative and leadership skills"],
    "grad": ["Contribute original research to the field", "Master advanced analytical methods", "Publish and present scholarly work", "Mentor junior researchers", "Develop expertise in specialised domain"]
  },
  frameworksByPhase: {
    "early-childhood": ["e2", "udl3"],
    "elementary": ["e2", "udl3", "blooms-taxonomy", "ib-pyp"],
    "middle": ["e2", "udl3", "blooms-taxonomy", "ib-myp", "cambridge-igcse"],
    "secondary": ["e2", "udl3", "blooms-taxonomy", "ib-dp", "cambridge-igcse", "cefr-arabic"],
    "higher-ed": ["udl3", "blooms-taxonomy", "lti13", "xapi"]
  },
  appsByFramework: {
    "e2": ["e2-lesson-planner", "e2-blueprint-planner", "e2-rubrics-assessment", "flip-studio"],
    "udl3": ["differentiate-it", "path-builder", "read-aloud"],
    "blooms-taxonomy": ["quiz-forge", "exit-ticket", "e2-rubrics-assessment"],
    "ib-pyp": ["e2-lesson-planner", "project-pilot"],
    "ib-myp": ["e2-lesson-planner", "project-pilot", "e2-rubrics-assessment"],
    "ib-dp": ["e2-lesson-planner", "quiz-forge", "e2-rubrics-assessment"],
    "cambridge-igcse": ["e2-lesson-planner", "quiz-forge", "e2-rubrics-assessment"],
    "cefr-arabic": ["arabic-lab", "vocab-vault", "hifz-helper"],
    "lti13": ["path-builder", "quiz-forge", "exit-ticket"],
    "xapi": ["quiz-forge", "exit-ticket", "data-dash"],
    "scorm": ["flip-studio"],
    "wcag22": ["read-aloud", "differentiate-it"],
    "ferpa": ["data-dash"],
    "gdpr-k": ["data-dash"]
  },
  resourcesByKey: {
    "e2": ["e2-guide", "e2-template", "e2-research"],
    "udl3": ["udl-cheat", "diff-menu"],
    "blooms-taxonomy": ["bloom-matrix", "exit-bank"],
    "cefr-arabic": ["arabic-cefr", "hifz-tracker", "tajweed-rules"],
    "lti13": ["lti-setup"],
    "xapi": ["xapi-intro"],
    "e2-lesson-planner": ["e2-template", "e2-guide", "diff-menu"],
    "e2-rubrics-assessment": ["bloom-matrix", "pbl-rubric"],
    "quiz-forge": ["bloom-matrix", "xapi-intro"],
    "differentiate-it": ["diff-menu", "udl-cheat"],
    "exit-ticket": ["exit-bank"],
    "flip-studio": ["flipped-video"],
    "project-pilot": ["pbl-rubric"],
    "hifz-helper": ["hifz-tracker", "tajweed-rules"],
    "arabic-lab": ["arabic-cefr"],
    "data-dash": ["xapi-intro", "ferpa", "gdpr-k"],
    "path-builder": ["getting-started"]
  }
};
