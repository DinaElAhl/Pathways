/* data-apps.js — source of truth for app objects */
"use strict";
var DT = "https://dinaelahl.github.io/desktop-tutorial";

window.PW_APPS = [
  { id: "path-builder", name: "Path Builder", icon: "🧭", category: "planning", status: "live",
    desc: "Visual builder to drag, connect, and sequence apps and resources into a structured learning path.",
    features: ["E² 5-part blueprint", "Drag & drop nodes", "Save & share paths", "LTI 1.3 launch"],
    tags: ["e2", "planning", "flagship"],
    relatedFrameworks: ["e2", "lti13"], relatedResources: ["e2-guide", "e2-template"],
    url: "path-builder.html", liveUrl: "path-builder.html",
    demoSteps: ["Choose a subject and curriculum", "Select frameworks and apps", "Arrange into a path", "Export or share"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Understand backward design and learning-path thinking.",
        resources: [
          { title: "Understanding by Design (Vanderbilt CFT)", url: "https://cft.vanderbilt.edu/guides-sub-pages/backward-design/" },
          { title: "ASCD: Understanding by Design", url: "https://www.ascd.org/books/understanding-by-design-expanded-2nd-edition" }
        ] },
      { stage: 2, title: "Practice", desc: "Build your first path with a small unit.",
        resources: [
          { title: "Edutopia: Backward Design Lesson Planning", url: "https://www.edutopia.org/article/backward-design-lesson-planning/" },
          { title: "Coursera: Curriculum Design", url: "https://www.coursera.org/learn/curriculum-design" }
        ] },
      { stage: 3, title: "Integration", desc: "Wire paths into your LMS via LTI 1.3.",
        resources: [
          { title: "1EdTech LTI 1.3 spec", url: "https://www.1edtech.org/standards/lti" },
          { title: "Wiggins & McTighe on UbD (video)", url: "https://www.youtube.com/watch?v=xWJQKuXuDlM" }
        ] },
      { stage: 4, title: "Mastery", desc: "Map a full programme of study and iterate on outcomes.",
        resources: [
          { title: "IB MYP Curriculum", url: "https://www.ibo.org/programmes/middle-years-programme/curriculum/" },
          { title: "Harvard Project Zero", url: "http://www.pz.harvard.edu/" }
        ] }
    ] },

  { id: "e2-lesson-planner", name: "E² Lesson Planner", icon: "📝", category: "planning", status: "live",
    desc: "Generates a complete 5-part blueprint (Hook → Teach → Practice → Connect → Reflect) with differentiation tiers.",
    features: ["E² blueprint", "Differentiation tiers", "PDF / Google Docs export", "Bloom’s alignment"],
    tags: ["planning", "e2", "ai", "flagship"],
    relatedFrameworks: ["e2", "blooms-taxonomy", "udl3"], relatedResources: ["e2-template", "e2-guide"],
    url: DT + "/e2-lesson-planner.html", liveUrl: "https://claude.ai",
    demoSteps: ["Enter topic and grade", "AI generates 5-part plan", "Adjust tiers and levers", "Export PDF"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Understand the 5-part lesson structure.",
        resources: [
          { title: "Edutopia: How to Structure the Perfect Lesson", url: "https://www.edutopia.org/article/how-structure-perfect-lesson/" },
          { title: "Madeline Hunter lesson model (Wikipedia)", url: "https://en.wikipedia.org/wiki/Madeline_Hunter" }
        ] },
      { stage: 2, title: "Practice", desc: "Use AI to draft your first 5-part lesson.",
        resources: [
          { title: "Anthropic prompt engineering docs", url: "https://docs.anthropic.com/claude/docs/prompt-engineering" },
          { title: "Learn Prompting (free course)", url: "https://learnprompting.org/" }
        ] },
      { stage: 3, title: "Integration", desc: "Pair AI-generated plans with research-backed pedagogy.",
        resources: [
          { title: "RAND: Lesson Planning research", url: "https://www.rand.org/pubs/research_reports/RRA956-14.html" },
          { title: "ISTE AI in education", url: "https://iste.org/ai" }
        ] },
      { stage: 4, title: "Mastery", desc: "Set department-wide standards for AI-assisted planning.",
        resources: [
          { title: "ISTE Standards for Educators", url: "https://iste.org/standards" },
          { title: "OECD: AI in Education", url: "https://www.oecd.org/education/ceri/artificial-intelligence-in-education.htm" }
        ] }
    ] },

  { id: "e2-blueprint-planner", name: "E² Blueprint Planner", icon: "🗺️", category: "planning", status: "live",
    desc: "Stack multiple E² lessons into a coherent week, term, or year. Surfaces gaps in modalities and Bloom’s coverage.",
    features: ["Multi-lesson view", "Bloom heatmap", "Modality balance", "Term-level export"],
    tags: ["planning", "e2", "flagship"],
    relatedFrameworks: ["e2", "blooms-taxonomy"], relatedResources: ["e2-guide"],
    url: DT + "/e2-blueprint-planner.html", liveUrl: "https://claude.ai",
    demoSteps: ["Import or create lessons", "View coverage heatmap", "Rebalance modalities", "Export term plan"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Read the basics of long-term curriculum mapping.",
        resources: [
          { title: "Vanderbilt CFT: Backward Design", url: "https://cft.vanderbilt.edu/guides-sub-pages/backward-design/" },
          { title: "ASCD: Curriculum Mapping", url: "https://www.ascd.org/books/getting-results-with-curriculum-mapping" }
        ] },
      { stage: 2, title: "Practice", desc: "Map one term in your subject.",
        resources: [
          { title: "Edutopia: Curriculum Mapping Guide", url: "https://www.edutopia.org/article/curriculum-mapping-guide" },
          { title: "Heidi Hayes Jacobs on mapping", url: "https://www.heidihayesjacobs.com/" }
        ] },
      { stage: 3, title: "Integration", desc: "Audit Bloom and modality coverage across the year.",
        resources: [
          { title: "TeachThought: Curriculum Mapping", url: "https://www.teachthought.com/pedagogy/curriculum-mapping/" },
          { title: "ISTE: AI in Curriculum", url: "https://iste.org/ai" }
        ] },
      { stage: 4, title: "Mastery", desc: "Align programmes across grades and subjects.",
        resources: [
          { title: "IB Programmes overview", url: "https://www.ibo.org/programmes/" },
          { title: "OECD Learning Compass 2030", url: "https://www.oecd.org/education/2030-project/" }
        ] }
    ] },

  { id: "e2-rubrics-assessment", name: "E² Rubrics & Assessment", icon: "📊", category: "assessment", status: "live",
    desc: "Build E²-aligned rubrics and formative assessments with QTI export and tiered task templates.",
    features: ["QTI 2.2 / 3.0 export", "Holistic & analytic", "Standard alignment", "Tiered task templates"],
    tags: ["assessment", "rubric", "qti", "e2", "flagship"],
    relatedFrameworks: ["e2", "blooms-taxonomy"], relatedResources: ["bloom-matrix", "pbl-rubric"],
    url: DT + "/e2-rubrics-assessment.html", liveUrl: "https://claude.ai",
    demoSteps: ["Choose rubric type", "Add criteria and levels", "Align to standards", "Export QTI"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Holistic vs analytic rubrics, formative vs summative.",
        resources: [
          { title: "Vanderbilt CFT: Rubrics", url: "https://cft.vanderbilt.edu/guides-sub-pages/rubrics/" },
          { title: "Edutopia: Guide to Creating Rubrics", url: "https://www.edutopia.org/article/guide-creating-rubrics" }
        ] },
      { stage: 2, title: "Practice", desc: "Build and field-test your first rubric.",
        resources: [
          { title: "1EdTech QTI 3.0 spec", url: "https://www.imsglobal.org/spec/qti/v3p0" },
          { title: "RubiStar rubric builder", url: "http://rubistar.4teachers.org/" }
        ] },
      { stage: 3, title: "Integration", desc: "Move toward standards-based grading.",
        resources: [
          { title: "ASCD: Standards-Based Grading", url: "https://www.ascd.org/el/articles/standards-based-grading" },
          { title: "EdWeek: What is Formative Assessment?", url: "https://www.edweek.org/teaching-learning/what-is-formative-assessment" }
        ] },
      { stage: 4, title: "Mastery", desc: "Validate assessments using research-grade criteria.",
        resources: [
          { title: "NWEA Assessment Research", url: "https://www.nwea.org/research/" },
          { title: "AERA Standards for Educational Testing", url: "https://www.aera.net/Publications/Books/Standards-for-Educational-Psychological-Testing" }
        ] }
    ] },

  { id: "flip-studio", name: "FlipStudio", icon: "🎬", category: "engagement", status: "live",
    desc: "Paste any YouTube, website, or PDF link and get a structured flipped lesson with comprehension questions.",
    features: ["Auto-transcription", "Quiz generation", "Timestamp markers", "Accessibility captions"],
    tags: ["video", "flipped", "ai"],
    relatedFrameworks: ["e2", "udl3"], relatedResources: ["flipped-video"],
    url: "#", liveUrl: "https://flipgrid.com",
    demoSteps: ["Paste a video URL", "AI generates questions", "Add timestamp markers", "Publish to LMS"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Learn the core idea of the flipped classroom.",
        resources: [
          { title: "Flipped Learning Network: Definition", url: "https://flippedlearning.org/definition-of-flipped-learning/" },
          { title: "Edutopia: Flipped Classroom topic", url: "https://www.edutopia.org/topic/flipped-classroom" }
        ] },
      { stage: 2, title: "Practice", desc: "Flip one lesson using free tooling.",
        resources: [
          { title: "Khan Academy", url: "https://www.khanacademy.org/" },
          { title: "Edpuzzle", url: "https://edpuzzle.com/" }
        ] },
      { stage: 3, title: "Integration", desc: "Embed comprehension and discussion in flipped media.",
        resources: [
          { title: "ASEE: Survey of Flipped Classroom Research", url: "https://peer.asee.org/the-flipped-classroom-a-survey-of-the-research" },
          { title: "TED-Ed Lessons", url: "https://ed.ted.com/" }
        ] },
      { stage: 4, title: "Mastery", desc: "Adopt flipped pedagogy at department/school level.",
        resources: [
          { title: "Flipped Learning Global Initiative", url: "https://www.flglobal.org/" },
          { title: "Bergmann & Sams keynote (video)", url: "https://www.youtube.com/watch?v=iQWvc6qhTds" }
        ] }
    ] },

  { id: "quiz-forge", name: "QuizForge", icon: "❓", category: "assessment", status: "live",
    desc: "Generate quizzes from any text, URL, or document. Multiple question types, auto-grading, xAPI reporting.",
    features: ["10 question types", "xAPI reporting", "AI generation", "Adaptive difficulty"],
    tags: ["quiz", "assessment", "ai", "xapi"],
    relatedFrameworks: ["blooms-taxonomy", "xapi", "lti13"], relatedResources: ["bloom-matrix", "xapi-intro"],
    url: "#", liveUrl: "https://quizlet.com",
    demoSteps: ["Upload or paste content", "AI generates questions", "Review and edit", "Publish and track"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Bloom-aligned questioning and assessment purpose.",
        resources: [
          { title: "Univ. of Arkansas: Using Bloom’s Taxonomy", url: "https://tips.uark.edu/using-blooms-taxonomy/" },
          { title: "Edutopia: Assessment topic", url: "https://www.edutopia.org/topic/assessment" }
        ] },
      { stage: 2, title: "Practice", desc: "Build your first AI-generated quiz.",
        resources: [
          { title: "Kahoot question library", url: "https://kahoot.com/library/" },
          { title: "1EdTech QTI 3.0 spec", url: "https://www.imsglobal.org/spec/qti/v3p0" }
        ] },
      { stage: 3, title: "Integration", desc: "Stream results into a learning record store.",
        resources: [
          { title: "xAPI overview", url: "https://xapi.com/overview/" },
          { title: "ETS: Item Writing Guidelines", url: "https://files.eric.ed.gov/fulltext/ED458213.pdf" }
        ] },
      { stage: 4, title: "Mastery", desc: "Use psychometrics to refine items.",
        resources: [
          { title: "ETS Research", url: "https://www.ets.org/research.html" },
          { title: "Item Response Theory (overview)", url: "https://www.sciencedirect.com/topics/psychology/item-response-theory" }
        ] }
    ] },

  { id: "differentiate-it", name: "DifferentiateIt", icon: "🎯", category: "planning", status: "live",
    desc: "Paste any task → get three auto-differentiated versions (struggling, on-level, advanced).",
    features: ["3 tiers auto-generated", "UDL-aligned", "Reading level adjustment", "Vocabulary scaffolding"],
    tags: ["differentiation", "udl", "accessibility"],
    relatedFrameworks: ["udl3", "e2"], relatedResources: ["diff-menu", "udl-cheat"],
    url: "#", liveUrl: "https://claude.ai",
    demoSteps: ["Paste original task", "AI generates 3 tiers", "Adjust reading levels", "Copy or export"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Foundations of UDL and tiered tasks.",
        resources: [
          { title: "CAST: What is UDL?", url: "https://www.cast.org/impact/universal-design-for-learning-udl" },
          { title: "Tomlinson: The Differentiated Classroom", url: "https://www.ascd.org/books/the-differentiated-classroom-2nd-edition" }
        ] },
      { stage: 2, title: "Practice", desc: "Differentiate one task across three tiers.",
        resources: [
          { title: "Edutopia: Differentiated Instruction", url: "https://www.edutopia.org/topic/differentiated-instruction" },
          { title: "ReadWorks (leveled passages)", url: "https://www.readworks.org/" }
        ] },
      { stage: 3, title: "Integration", desc: "Use UDL guidelines and reading-level data system-wide.",
        resources: [
          { title: "UDL Guidelines 3.0", url: "https://udlguidelines.cast.org/" },
          { title: "Lexile Framework", url: "https://lexile.com/" }
        ] },
      { stage: 4, title: "Mastery", desc: "Evaluate impact with evidence-based research.",
        resources: [
          { title: "Hattie: Visible Learning", url: "https://visible-learning.org/" },
          { title: "How Learning Works (Wiley)", url: "https://www.wiley.com/en-us/How+Learning+Works%3A+Seven+Research+Based+Principles+for+Smart+Teaching-p-9780470484104" }
        ] }
    ] },

  { id: "exit-ticket", name: "ExitTicket", icon: "🚪", category: "assessment", status: "live",
    desc: "Quick formative check-ins that surface understanding in real time. 60-second polls and open-ended prompts.",
    features: ["Real-time results", "10 prompt types", "Class analytics", "Anonymous mode"],
    tags: ["assessment", "formative", "engagement"],
    relatedFrameworks: ["e2", "xapi", "lti13"], relatedResources: ["exit-bank"],
    url: "#", liveUrl: "https://nearpod.com",
    demoSteps: ["Choose prompt type", "Students respond on any device", "View live results", "Export data"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Why exit tickets and formative checks work.",
        resources: [
          { title: "Edutopia: Exit Slips", url: "https://www.edutopia.org/article/exit-slips-collect-feedback" },
          { title: "Marzano Resources", url: "https://www.marzanoresources.com/" }
        ] },
      { stage: 2, title: "Practice", desc: "Run your first 60-second exit poll.",
        resources: [
          { title: "Mentimeter", url: "https://www.mentimeter.com/" },
          { title: "Poll Everywhere", url: "https://www.polleverywhere.com/" }
        ] },
      { stage: 3, title: "Integration", desc: "Wire formative data into instruction.",
        resources: [
          { title: "Inside the Black Box (AAIA)", url: "https://www.aaia.org.uk/inside-the-black-box/" },
          { title: "Dylan Wiliam Center", url: "https://dylanwiliamcenter.com/" }
        ] },
      { stage: 4, title: "Mastery", desc: "Embed assessment-for-learning at scale.",
        resources: [
          { title: "NFER: Assessment for Learning", url: "https://www.nfer.ac.uk/key-topics-expertise/assessment/" },
          { title: "Responsive Teaching (Harry Fletcher-Wood)", url: "https://improvingteaching.co.uk/" }
        ] }
    ] },

  { id: "vocab-vault", name: "VocabVault", icon: "📚", category: "languages", status: "live",
    desc: "Spaced-repetition vocabulary sets for any subject. CEFR-tagged for language classes.",
    features: ["SM-2 algorithm", "CEFR tagging", "Audio pronunciation", "Image association"],
    tags: ["vocabulary", "spaced-rep", "languages", "cefr"],
    relatedFrameworks: ["cefr-arabic"], relatedResources: ["arabic-cefr"],
    url: "#", liveUrl: "https://quizlet.com",
    demoSteps: ["Upload word list or generate from topic", "Tag CEFR levels", "Students drill via SR", "Track mastery"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Spaced repetition science and CEFR tagging.",
        resources: [
          { title: "NIH: Spaced Practice and Memory", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4961413/" },
          { title: "Anki (open-source SR)", url: "https://apps.ankiweb.net/" }
        ] },
      { stage: 2, title: "Practice", desc: "Build a CEFR-tagged set and drill it daily.",
        resources: [
          { title: "Quizlet", url: "https://quizlet.com/" },
          { title: "Memrise", url: "https://www.memrise.com/" }
        ] },
      { stage: 3, title: "Integration", desc: "Align vocabulary work to CEFR descriptors.",
        resources: [
          { title: "CEFR Companion Volume", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" },
          { title: "Paul Nation vocabulary research", url: "https://www.wgtn.ac.nz/lals/about/staff/paul-nation" }
        ] },
      { stage: 4, title: "Mastery", desc: "Use research-grade SR protocols.",
        resources: [
          { title: "SuperMemo SM-2 algorithm", url: "https://www.supermemo.com/en/blog/algorithm-sm-2" },
          { title: "Cambridge ESOL Research", url: "https://www.cambridgeenglish.org/research-and-validation/" }
        ] }
    ] },

  { id: "hifz-helper", name: "HifzHelper", icon: "📿", category: "arabic", status: "live",
    desc: "Quran memorisation tracker with mutashabihat hints, murajaah cycles, and ijazah teacher linking.",
    features: ["Mutashabihat alerts", "Murajaah scheduler", "Tajweed notes", "Progress charts"],
    tags: ["quran", "hifz", "arabic", "islamic"],
    relatedFrameworks: ["cefr-arabic"], relatedResources: ["hifz-tracker", "tajweed-rules"],
    url: "#", liveUrl: "https://quran.com",
    demoSteps: ["Select surah and juz", "Set daily target", "Record and review", "Track with charts"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Foundations of Quran memorisation and tajweed.",
        resources: [
          { title: "Quran.com", url: "https://quran.com/" },
          { title: "Bayyinah TV (tajweed/tafsir)", url: "https://bayyinah.com/" }
        ] },
      { stage: 2, title: "Practice", desc: "Set up a murajaah routine.",
        resources: [
          { title: "Quran.com Memorization tool", url: "https://quran.com/memorization" },
          { title: "Tarteel AI (recitation)", url: "https://www.tarteel.ai/" }
        ] },
      { stage: 3, title: "Integration", desc: "Work mutashabihat and tajweed into review cycles.",
        resources: [
          { title: "IslamQA: Mutashabihat resources", url: "https://islamqa.info/en/categories/topics" },
          { title: "Quran Academy", url: "https://quranacademy.com/" }
        ] },
      { stage: 4, title: "Mastery", desc: "Pursue ijazah-track recitation and isnad.",
        resources: [
          { title: "Oxford Bibliographies: Isnad", url: "https://www.oxfordbibliographies.com/view/document/obo-9780195390155/obo-9780195390155-0212.xml" },
          { title: "ScienceDirect: Memorisation research", url: "https://www.sciencedirect.com/topics/psychology/memorization" }
        ] }
    ] },

  { id: "arabic-lab", name: "ArabicLab", icon: "ع", category: "arabic", status: "live",
    desc: "Arabic as a second language studio with CEFR A1–C2 tracks, Fusha vs dialect switching.",
    features: ["CEFR A1–C2", "Fusha & dialect", "Grammar drills", "Speaking practice"],
    tags: ["arabic", "language", "cefr", "asl"],
    relatedFrameworks: ["cefr-arabic"], relatedResources: ["arabic-cefr"],
    url: "#", liveUrl: "https://arabic.desert.edu",
    demoSteps: ["Take placement test", "Choose Fusha or dialect track", "Complete daily drills", "Track CEFR progress"],
    stages: [
      { stage: 1, title: "Awareness", desc: "CEFR descriptors for Arabic as a second language.",
        resources: [
          { title: "Council of Europe: CEFR levels", url: "https://www.coe.int/en/web/common-european-framework-reference-languages" },
          { title: "ACTFL Proficiency Guidelines", url: "https://www.actfl.org/educator-resources/actfl-proficiency-guidelines-2012" }
        ] },
      { stage: 2, title: "Practice", desc: "Get to A2 with daily drills.",
        resources: [
          { title: "Duolingo Arabic", url: "https://www.duolingo.com/course/ar/en/Learn-Arabic" },
          { title: "Madinah Arabic", url: "https://www.madinaharabic.com/" }
        ] },
      { stage: 3, title: "Integration", desc: "Combine Fusha and dialect with authentic input.",
        resources: [
          { title: "Al-Kitaab (Georgetown UP)", url: "https://press.georgetown.edu/Book/Al-Kitaab-fii-Tacallum-al-cArabiyya-One" },
          { title: "CAMeL Tools (NLP for Arabic)", url: "https://camel-tools.readthedocs.io/" }
        ] },
      { stage: 4, title: "Mastery", desc: "Move from B2 → C2 with ACTFL OPI training.",
        resources: [
          { title: "ACTFL OPI training", url: "https://www.actfl.org/professional-learning/assessments/opi" },
          { title: "MIT OCW: Linguistics", url: "https://ocw.mit.edu/courses/linguistics-and-philosophy/" }
        ] }
    ] },

  { id: "project-pilot", name: "ProjectPilot", icon: "🚀", category: "pbl", status: "beta",
    desc: "Full PBL project planner with timeline, collaboration tools, and a driving-question builder.",
    features: ["Driving question builder", "Milestone tracker", "Peer collaboration", "Exhibition planner"],
    tags: ["pbl", "project", "collaboration"],
    relatedFrameworks: ["e2"], relatedResources: ["pbl-rubric"],
    url: "#", liveUrl: "https://claude.ai",
    demoSteps: ["Write driving question", "Set milestones", "Assign team roles", "Plan exhibition"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Gold-standard PBL design.",
        resources: [
          { title: "PBLWorks: Gold Standard PBL", url: "https://www.pblworks.org/what-is-pbl/gold-standard-project-design" },
          { title: "Edutopia: Project-Based Learning", url: "https://www.edutopia.org/project-based-learning" }
        ] },
      { stage: 2, title: "Practice", desc: "Plan and run your first short project.",
        resources: [
          { title: "High Tech High projects", url: "https://www.hightechhigh.org/student-work/" },
          { title: "PBLWorks (Buck Institute)", url: "https://www.pblworks.org/" }
        ] },
      { stage: 3, title: "Integration", desc: "Embed PBL across a department.",
        resources: [
          { title: "MDRC: Project-Based Learning research", url: "https://www.mdrc.org/publication/project-based-learning" },
          { title: "Lucas Education Research", url: "https://www.lucasedresearch.org/" }
        ] },
      { stage: 4, title: "Mastery", desc: "Deeper learning at scale.",
        resources: [
          { title: "Hewlett Foundation: Deeper Learning", url: "https://hewlett.org/strategy/deeper-learning/" },
          { title: "ISTE: PBL", url: "https://iste.org/blog/project-based-learning" }
        ] }
    ] },

  { id: "timeline-pro", name: "TimelinePro", icon: "📅", category: "engagement", status: "beta",
    desc: "Visual history and sequence timeline builder. Drag events, add images and sources.",
    features: ["Drag & drop events", "Image embeds", "Source citations", "Interactive publish"],
    tags: ["history", "visual", "social-studies"],
    relatedFrameworks: ["blooms-taxonomy"], relatedResources: [],
    url: "#", liveUrl: "https://www.timetoast.com",
    demoSteps: ["Create timeline", "Add events with dates", "Attach images and sources", "Publish interactive view"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Why timelines build historical thinking.",
        resources: [
          { title: "Knight Lab: TimelineJS", url: "https://timeline.knightlab.com/" },
          { title: "TimeToast", url: "https://www.timetoast.com/" }
        ] },
      { stage: 2, title: "Practice", desc: "Build a class timeline with sources.",
        resources: [
          { title: "Sutori", url: "https://www.sutori.com/" },
          { title: "Tiki-Toki", url: "https://www.tiki-toki.com/" }
        ] },
      { stage: 3, title: "Integration", desc: "Tie to inquiry-based history standards.",
        resources: [
          { title: "Stanford History Education Group", url: "https://sheg.stanford.edu/" },
          { title: "C3 Framework (NCSS)", url: "https://www.socialstudies.org/standards/c3" }
        ] },
      { stage: 4, title: "Mastery", desc: "Teach historical thinking concepts.",
        resources: [
          { title: "Historical Thinking Project (Seixas)", url: "https://historicalthinking.ca/" },
          { title: "AHA: Teaching & Learning", url: "https://www.historians.org/teaching-and-learning" }
        ] }
    ] },

  { id: "data-dash", name: "DataDash", icon: "📈", category: "assessment", status: "beta",
    desc: "Student progress analytics across all Pathways apps. Early warning alerts and parent-friendly reports.",
    features: ["Cross-app analytics", "Early warning alerts", "Parent reports", "Bloom’s distribution"],
    tags: ["analytics", "data", "reporting"],
    relatedFrameworks: ["xapi", "ferpa", "gdpr-k"], relatedResources: ["xapi-intro", "ferpa"],
    url: "#", liveUrl: "https://lookerstudio.google.com",
    demoSteps: ["Connect apps via xAPI", "View class dashboard", "Set alert thresholds", "Generate reports"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Learning analytics fundamentals.",
        resources: [
          { title: "xAPI overview", url: "https://xapi.com/overview/" },
          { title: "SoLAR (learning analytics society)", url: "https://www.solaresearch.org/" }
        ] },
      { stage: 2, title: "Practice", desc: "Stand up a dashboard for one class.",
        resources: [
          { title: "Looker Studio", url: "https://lookerstudio.google.com/" },
          { title: "Microsoft Power BI", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi" }
        ] },
      { stage: 3, title: "Integration", desc: "Run a learning record store.",
        resources: [
          { title: "Learning Locker docs", url: "https://docs.learninglocker.net/" },
          { title: "1EdTech Caliper Analytics", url: "https://www.imsglobal.org/activity/caliper" }
        ] },
      { stage: 4, title: "Mastery", desc: "Engage with peer-reviewed analytics research.",
        resources: [
          { title: "LAK Conference (SoLAR)", url: "https://www.solaresearch.org/events/lak/" },
          { title: "Journal of Learning Analytics", url: "https://learning-analytics.info/" }
        ] }
    ] },

  { id: "read-aloud", name: "ReadAloud Studio", icon: "🔊", category: "languages", status: "soon",
    desc: "Text-to-speech studio with natural Arabic and English voices. Exports MP3 or embeds inline.",
    features: ["Arabic TTS", "English TTS", "SSML support", "Accessibility export"],
    tags: ["accessibility", "udl", "languages"],
    relatedFrameworks: ["wcag22", "udl3", "cefr-arabic"], relatedResources: [],
    url: "#", liveUrl: "https://naturalreaders.com",
    demoSteps: ["Paste or upload text", "Choose voice and language", "Preview audio", "Export MP3 or embed"],
    stages: [
      { stage: 1, title: "Awareness", desc: "Accessibility baselines for audio learning.",
        resources: [
          { title: "WCAG 2.2 spec", url: "https://www.w3.org/TR/WCAG22/" },
          { title: "UDL Guidelines (Representation)", url: "https://udlguidelines.cast.org/" }
        ] },
      { stage: 2, title: "Practice", desc: "Convert one reading to natural speech.",
        resources: [
          { title: "NaturalReader", url: "https://www.naturalreaders.com/" },
          { title: "ReadSpeaker", url: "https://www.readspeaker.com/" }
        ] },
      { stage: 3, title: "Integration", desc: "Use SSML for precise pronunciation.",
        resources: [
          { title: "W3C SSML 1.1 spec", url: "https://www.w3.org/TR/speech-synthesis11/" },
          { title: "Amazon Polly", url: "https://aws.amazon.com/polly/" }
        ] },
      { stage: 4, title: "Mastery", desc: "Audit accessibility at site/system level.",
        resources: [
          { title: "WebAIM articles", url: "https://webaim.org/articles/" },
          { title: "IEEE TTS research", url: "https://ieeexplore.ieee.org/document/6706875" }
        ] }
    ] }
];
