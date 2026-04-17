/* data-apps-stages.js — staged learning paths for each app */
"use strict";
window.PW_APP_STAGES = {
  "path-builder": { liveUrl: "path-builder.html", stages: [
    { stage: 1, title: "Awareness", desc: "Understand what a learning path is and why it matters.", resources: [
      { title: "What is a Learning Path?", url: "https://www.edutopia.org/article/personalized-learning" },
      { title: "Pathways Getting Started Guide", url: "https://docs.google.com/document/create" }] },
    { stage: 2, title: "Practice", desc: "Build your first simple path with 3\u20135 nodes.", resources: [
      { title: "LTI 1.3 Launch Basics", url: "https://www.imsglobal.org/spec/lti/v1p3/" },
      { title: "Path Builder Tutorial (video)", url: "https://www.youtube.com/results?search_query=learning+path+builder+tutorial" }] },
    { stage: 3, title: "Integration", desc: "Connect your path to an LMS and share with colleagues.", resources: [
      { title: "Canvas LTI Integration", url: "https://community.canvaslms.com/t5/Admin-Guide/ct-p/admin" }] },
    { stage: 4, title: "Mastery", desc: "Analyse path completion data and iterate on design.", resources: [
      { title: "xAPI Data Analysis", url: "https://xapi.com/overview/" }] }
  ] },
  "e2-lesson-planner": { liveUrl: "https://claude.ai", stages: [
    { stage: 1, title: "Awareness", desc: "Learn the E\u00b2 5-part blueprint.", resources: [
      { title: "E\u00b2 Framework Overview", url: "https://www.edutopia.org/article/lesson-planning-strategies" },
      { title: "Lesson Planning Best Practices", url: "https://www.youtube.com/results?search_query=lesson+planning+best+practices" }] },
    { stage: 2, title: "Practice", desc: "Plan one lesson using Hook\u2192Teach\u2192Practice\u2192Connect\u2192Reflect.", resources: [
      { title: "Bloom\u2019s Question Stems", url: "https://bloomstaxonomy.net/" },
      { title: "Google Docs Lesson Template", url: "https://docs.google.com/document/create" }] },
    { stage: 3, title: "Integration", desc: "Differentiate the lesson for three tiers.", resources: [
      { title: "UDL Guidelines", url: "https://udlguidelines.cast.org/" },
      { title: "Differentiation Strategies", url: "https://www.readingrockets.org/topics/differentiated-instruction" }] },
    { stage: 4, title: "Mastery", desc: "Teach, collect exit-ticket data, and refine.", resources: [
      { title: "Using Exit Tickets", url: "https://www.edutopia.org/article/using-exit-tickets" }] }
  ] },
  "e2-blueprint-planner": { liveUrl: "https://claude.ai", stages: [
    { stage: 1, title: "Awareness", desc: "Understand unit-level planning with Bloom\u2019s coverage.", resources: [
      { title: "Backward Design (UbD)", url: "https://www.edutopia.org/article/understanding-by-design" }] },
    { stage: 2, title: "Practice", desc: "Stack 5 E\u00b2 lessons into a one-week blueprint.", resources: [
      { title: "Bloom\u2019s Taxonomy Net", url: "https://bloomstaxonomy.net/" }] },
    { stage: 3, title: "Integration", desc: "Audit modality balance and fill gaps.", resources: [
      { title: "UDL Checkpoints", url: "https://udlguidelines.cast.org/" }] },
    { stage: 4, title: "Mastery", desc: "Export a full-term plan and share with your department.", resources: [
      { title: "Collaborative Planning", url: "https://www.edutopia.org/article/collaborative-planning-teachers" }] }
  ] },
  "e2-rubrics-assessment": { liveUrl: "https://claude.ai", stages: [
    { stage: 1, title: "Awareness", desc: "Learn holistic vs analytic rubric types.", resources: [
      { title: "Rubric Basics", url: "https://www.edutopia.org/article/rubrics-for-formative-assessment" },
      { title: "QTI Standard", url: "https://www.imsglobal.org/question/index.html" }] },
    { stage: 2, title: "Practice", desc: "Build one analytic rubric with 4 criteria.", resources: [
      { title: "PBL Gold Standard Rubrics", url: "https://www.pblworks.org/free-resources/gold-standard-pbl-rubrics" }] },
    { stage: 3, title: "Integration", desc: "Export as QTI 2.2 and import into your LMS.", resources: [
      { title: "QTI Import Guide", url: "https://www.imsglobal.org/question/index.html" }] },
    { stage: 4, title: "Mastery", desc: "Use tiered-task templates for differentiated assessment.", resources: [
      { title: "Differentiated Assessment", url: "https://www.readingrockets.org/topics/differentiated-instruction" }] }
  ] },
  "flip-studio": { liveUrl: "https://flipgrid.com", stages: [
    { stage: 1, title: "Awareness", desc: "Understand the flipped-classroom model.", resources: [
      { title: "Flipped Learning Network", url: "https://flippedlearning.org/definition-of-flipped-learning/" },
      { title: "Why Flip? (Edutopia)", url: "https://www.edutopia.org/article/flipped-classroom-guide" }] },
    { stage: 2, title: "Practice", desc: "Flip one lesson: paste a video, generate questions.", resources: [
      { title: "How to Make Flipped Videos", url: "https://www.youtube.com/results?search_query=how+to+make+flipped+classroom+video" }] },
    { stage: 3, title: "Integration", desc: "Embed flipped lesson in your LMS with LTI.", resources: [
      { title: "Flipgrid in Class", url: "https://info.flip.com/en-us/getting-started.html" }] },
    { stage: 4, title: "Mastery", desc: "Analyse viewing data and iterate on question quality.", resources: [
      { title: "Video Analytics", url: "https://www.edutopia.org/article/using-video-data-improve-teaching" }] }
  ] },
  "quiz-forge": { liveUrl: "https://quizlet.com", stages: [
    { stage: 1, title: "Awareness", desc: "Learn Bloom\u2019s-aligned question types.", resources: [
      { title: "Bloom\u2019s Question Stems", url: "https://bloomstaxonomy.net/" },
      { title: "xAPI Overview", url: "https://xapi.com/overview/" }] },
    { stage: 2, title: "Practice", desc: "Generate a 10-question quiz from a text passage.", resources: [
      { title: "Quizlet for Teachers", url: "https://quizlet.com/teachers" }] },
    { stage: 3, title: "Integration", desc: "Enable xAPI reporting and connect to DataDash.", resources: [
      { title: "xAPI Statements Guide", url: "https://xapi.com/statements-101/" }] },
    { stage: 4, title: "Mastery", desc: "Use adaptive difficulty and review item analytics.", resources: [
      { title: "Item Analysis Guide", url: "https://www.edutopia.org/article/formative-assessment-strategies" }] }
  ] },
  "differentiate-it": { liveUrl: "https://claude.ai", stages: [
    { stage: 1, title: "Awareness", desc: "Understand UDL and three-tier differentiation.", resources: [
      { title: "UDL at a Glance", url: "https://udlguidelines.cast.org/" },
      { title: "Differentiated Instruction", url: "https://www.readingrockets.org/topics/differentiated-instruction" }] },
    { stage: 2, title: "Practice", desc: "Paste one task and review the three generated tiers.", resources: [
      { title: "Tiered Assignments", url: "https://www.edutopia.org/article/differentiated-instruction-strategies" }] },
    { stage: 3, title: "Integration", desc: "Adjust reading levels and add vocabulary scaffolding.", resources: [
      { title: "Vocabulary Scaffolding", url: "https://www.readingrockets.org/topics/vocabulary" }] },
    { stage: 4, title: "Mastery", desc: "Build a reusable differentiation menu for your subject.", resources: [
      { title: "Choice Boards", url: "https://www.edutopia.org/article/choice-boards-differentiated-learning" }] }
  ] },
  "exit-ticket": { liveUrl: "https://nearpod.com", stages: [
    { stage: 1, title: "Awareness", desc: "Learn why exit tickets improve learning.", resources: [
      { title: "Using Exit Tickets (Edutopia)", url: "https://www.edutopia.org/article/using-exit-tickets" },
      { title: "Formative Assessment Basics", url: "https://www.edutopia.org/article/formative-assessment-strategies" }] },
    { stage: 2, title: "Practice", desc: "Run one exit ticket with your class.", resources: [
      { title: "Nearpod Exit Tickets", url: "https://nearpod.com/" }] },
    { stage: 3, title: "Integration", desc: "Review class analytics and identify struggling students.", resources: [
      { title: "Data-Driven Instruction", url: "https://www.edutopia.org/article/data-driven-instruction" }] },
    { stage: 4, title: "Mastery", desc: "Use anonymous mode for sensitive topics; iterate prompts.", resources: [
      { title: "Psychological Safety", url: "https://www.edutopia.org/article/creating-safe-classroom" }] }
  ] },
  "vocab-vault": { liveUrl: "https://quizlet.com", stages: [
    { stage: 1, title: "Awareness", desc: "Understand spaced repetition and CEFR levels.", resources: [
      { title: "Spaced Repetition Science", url: "https://www.youtube.com/results?search_query=spaced+repetition+science" },
      { title: "CEFR Levels Explained", url: "https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions" }] },
    { stage: 2, title: "Practice", desc: "Create one vocab set and tag CEFR levels.", resources: [
      { title: "Quizlet Vocab Sets", url: "https://quizlet.com/" }] },
    { stage: 3, title: "Integration", desc: "Assign sets to students and track mastery rates.", resources: [
      { title: "Vocabulary Instruction", url: "https://www.readingrockets.org/topics/vocabulary" }] },
    { stage: 4, title: "Mastery", desc: "Add audio pronunciation and image associations.", resources: [
      { title: "Multimodal Vocabulary", url: "https://www.edutopia.org/article/vocabulary-instruction-strategies" }] }
  ] },
  "hifz-helper": { liveUrl: "https://quran.com", stages: [
    { stage: 1, title: "Awareness", desc: "Learn the murajaah (revision) cycle for Quran memorisation.", resources: [
      { title: "Quran.com Memorisation Tools", url: "https://quran.com/memorization" },
      { title: "Tajweed Basics", url: "https://tajweed.me/" }] },
    { stage: 2, title: "Practice", desc: "Set a daily target and memorise one page with revision.", resources: [
      { title: "Hifz Tips (video)", url: "https://www.youtube.com/results?search_query=hifz+quran+tips+for+beginners" }] },
    { stage: 3, title: "Integration", desc: "Use mutashabihat alerts to tackle similar verses.", resources: [
      { title: "Mutashabihat Study", url: "https://quran.com/" }] },
    { stage: 4, title: "Mastery", desc: "Connect with an ijazah-holding teacher for verification.", resources: [
      { title: "Ijazah Tradition", url: "https://www.youtube.com/results?search_query=quran+ijazah+explained" }] }
  ] },
  "arabic-lab": { liveUrl: "https://arabic.desert.edu", stages: [
    { stage: 1, title: "Awareness", desc: "Understand Fusha vs dialect and take placement test.", resources: [
      { title: "CEFR for Arabic", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" },
      { title: "Arabic Dialects Explained", url: "https://www.youtube.com/results?search_query=arabic+dialects+explained" }] },
    { stage: 2, title: "Practice", desc: "Complete daily grammar drills at your CEFR level.", resources: [
      { title: "Arabic Grammar Resource", url: "https://www.youtube.com/results?search_query=arabic+grammar+for+beginners" }] },
    { stage: 3, title: "Integration", desc: "Practice speaking with dialect-specific exercises.", resources: [
      { title: "Conversation Practice", url: "https://www.youtube.com/results?search_query=arabic+conversation+practice" }] },
    { stage: 4, title: "Mastery", desc: "Track CEFR progress from A1 towards B2+.", resources: [
      { title: "Self-Assessment Grid", url: "https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale" }] }
  ] },
  "project-pilot": { liveUrl: "https://claude.ai", stages: [
    { stage: 1, title: "Awareness", desc: "Learn PBL Gold Standard design elements.", resources: [
      { title: "PBL Works Gold Standard", url: "https://www.pblworks.org/what-is-pbl/gold-standard-project-design" },
      { title: "PBL Overview (Edutopia)", url: "https://www.edutopia.org/project-based-learning" }] },
    { stage: 2, title: "Practice", desc: "Write a driving question and set 3 milestones.", resources: [
      { title: "Driving Question Tubric", url: "https://www.pblworks.org/free-resources" }] },
    { stage: 3, title: "Integration", desc: "Assign team roles and launch the project.", resources: [
      { title: "Group Work That Works", url: "https://www.edutopia.org/article/group-work-strategies" }] },
    { stage: 4, title: "Mastery", desc: "Plan a public exhibition and gather peer feedback.", resources: [
      { title: "Exhibition Planning", url: "https://www.pblworks.org/free-resources" }] }
  ] },
  "timeline-pro": { liveUrl: "https://www.timetoast.com", stages: [
    { stage: 1, title: "Awareness", desc: "Learn visual timeline design principles.", resources: [
      { title: "Timeline Design Tips", url: "https://www.youtube.com/results?search_query=timeline+design+for+education" }] },
    { stage: 2, title: "Practice", desc: "Create a 10-event historical timeline.", resources: [
      { title: "TimeToast Timelines", url: "https://www.timetoast.com/" }] },
    { stage: 3, title: "Integration", desc: "Embed images, source citations, and publish.", resources: [
      { title: "Source Citation Guide", url: "https://www.edutopia.org/article/teaching-students-cite-sources" }] },
    { stage: 4, title: "Mastery", desc: "Use timelines as interactive assessment artefacts.", resources: [
      { title: "Visual Learning Strategies", url: "https://www.edutopia.org/article/visual-learning-strategies" }] }
  ] },
  "data-dash": { liveUrl: "https://lookerstudio.google.com", stages: [
    { stage: 1, title: "Awareness", desc: "Understand xAPI data flow and student privacy.", resources: [
      { title: "xAPI for Teachers", url: "https://xapi.com/overview/" },
      { title: "FERPA Basics", url: "https://studentprivacy.ed.gov/" }] },
    { stage: 2, title: "Practice", desc: "Connect one app and view the class dashboard.", resources: [
      { title: "Looker Studio Intro", url: "https://lookerstudio.google.com/" }] },
    { stage: 3, title: "Integration", desc: "Set early-warning thresholds for at-risk students.", resources: [
      { title: "Early Warning Systems", url: "https://www.edutopia.org/article/early-warning-systems-schools" }] },
    { stage: 4, title: "Mastery", desc: "Generate parent-friendly reports and Bloom\u2019s distributions.", resources: [
      { title: "Data-Driven Instruction", url: "https://www.edutopia.org/article/data-driven-instruction" }] }
  ] },
  "read-aloud": { liveUrl: "https://naturalreaders.com", stages: [
    { stage: 1, title: "Awareness", desc: "Understand TTS accessibility benefits and WCAG requirements.", resources: [
      { title: "WCAG 2.2 Quick Ref", url: "https://www.w3.org/WAI/WCAG22/quickref/" },
      { title: "Natural Readers Demo", url: "https://naturalreaders.com/" }] },
    { stage: 2, title: "Practice", desc: "Convert one text passage to audio with Arabic voice.", resources: [
      { title: "Arabic TTS Options", url: "https://www.youtube.com/results?search_query=arabic+text+to+speech" }] },
    { stage: 3, title: "Integration", desc: "Embed audio inline in a lesson or export MP3.", resources: [
      { title: "Accessibility in LMS", url: "https://www.w3.org/WAI/teach-advocate/" }] },
    { stage: 4, title: "Mastery", desc: "Use SSML for pronunciation control and pacing.", resources: [
      { title: "SSML Reference", url: "https://www.w3.org/TR/speech-synthesis11/" }] }
  ] }
};
