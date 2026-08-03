/* ==========================================================================
   ZeynVision — Core Engine
   i18n (AR/EN/TR) · Theme · Canvas · Terminal · Interactions
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------- i18n Dictionary ---------------- */
  const I18N = {
    ar: {
      nav: { home: "الرئيسية", about: "من نحن", services: "الخدمات", work: "أعمالنا", insights: "المدونة", contact: "تواصل معنا", cta: "ابدأ مشروعك" },
      hero: {
        tag: "حيث تقابل الرؤية الذكاء",
        t1: "نصمّم الحلول", t2: "حيث يلتقي الإبداع", t3: "بالهندسة والذكاء الاصطناعي",
        sub: "ZeynVision وكالة تقنية وإبداعية نخبوية تجمع التصميم البصري بالمنطق البرمجي وتحليل البيانات، لبناء منتجات رقمية ذكية تقود أسواقها.",
        cta1: "ابدأ مشروعك", cta2: "استكشف الحلول", m1: "جاهزون للعمل", m2: "إسطنبول — عالمياً"
      },
      pillars: {
        kicker: "نظام متكامل", title: "أربع ركائز تصنع الفارق",
        sub: "كل مشروع يُبنى على نواة ذكية تدمج البيانات والبرمجة والتصميم في منتج واحد متماسك.",
        p1: { t: "نواة ذكية", d: "نماذج تعلّم آلي وذكاء اصطناعي مدمجة في صميم المنتج، لا إضافات هامشية." },
        p2: { t: "بيانات", d: "تحليل متقدم يحوّل البيانات الخام إلى قرارات دقيقة وقيمة ملموسة." },
        p3: { t: "برمجة", d: "هندسة برمجية نظيفة وقابلة للتوسع بمعايير صارمة وأداء فائق." },
        p4: { t: "تصميم", d: "إبداع بصري وتجربة مستخدم تضع الإنسان في قلب كل قرار." }
      },
      live: {
        kicker: "إثبات حي", title: "التقنية تعمل أمامك",
        sub: "لا وعود نظرية — كود حي وبيانات لحظية تعكس مستوى الهندسة لدينا.",
        chart: "معالجة البيانات — لحظياً", live: "مباشر",
        throughput: "الإنتاجية: 12.4K req/s"
      },
      stack: { label: "نعتمد أحدث التقنيات العالمية" },
      est: {
        kicker: "شفافية كاملة", title: "قدّر مشروعك فوراً",
        sub: "اختر الخدمة والنطاق لتحصل على تقدير مبدئي فوري — ثم نناقش التفاصيل معاً.",
        service: "نوع الخدمة", scope: "نطاق المشروع",
        s: { web: "تطوير الويب المتقدم", software: "هندسة البرمجيات المؤسسية", data: "تحليل البيانات المتقدم", ai: "حلول الذكاء الاصطناعي", design: "تصميم UI/UX والهوية" },
        o: { small: "صغير — MVP / تجريبي", medium: "متوسط — منتج متكامل", large: "كبير — منصة مؤسسية" },
        note: "تقدير مبدئي — يُحدَّد بدقة بعد جلسة الاستشارة المجانية.",
        cta: "احجز استشارة مجانية"
      },
      work: {
        kicker: "أعمالنا", title: "دراسات حالة تصنع الأثر",
        sub: "مشاريع مختارة عبر الصناعات — من التحدي الهندسي إلى النتائج الرقمية القابلة للقياس.",
        f: { all: "الكل", web: "ويب", ai: "ذكاء اصطناعي", data: "بيانات", design: "تصميم" },
        m: { kpi: "كفاءة تشغيلية", cost: "تكلفة تقارير", conv: "تحويل", acc: "دقة", lh: "Lighthouse", sales: "مبيعات", sat: "رضا", prod: "منتجات مغطاة", tix: "تذاكر يدوية", svc: "خدمة", reg: "مناطق", uptime: "توافرية" },
        p1: { t: "منصة تحليلات لحظية", d: "لوحة تحكم تتعامل مع 4M حدث/يوم بتأخير أقل من 200ms." },
        p2: { t: "محرك توصيات مخصص", d: "نظام توصيات تعلّم ذاتي رفع معدل التحويل بنسبة 27%." },
        p3: { t: "متجر ويب فائق الأداء", d: "إعادة بناء كاملة حققت LCP بمقدار 0.8 ثانية ونتيجة 100 في Lighthouse." },
        p4: { t: "هوية ونظام تصميم", d: "نظام تصميم متكامل لعلامة مالية رفع رضا المستخدمين 31%." },
        p5: { t: "مساعد ذكي للدعم", d: "روبوت محادثة مؤسسي يحل 68% من التذاكر دون تدخل بشري." },
        p6: { t: "بوابة مؤسسية سحابية", d: "بوابة موحّدة لـ 3 أقسام دولية بمزامنة لحظية وأمان متعدد الطبقات." }
      },
      about: {
        kicker: "من نحن", title: "نظام يجمع الإبداع بالمنطق",
        p1: "ZeynVision ليست مجرد فريق — إنها منهجية. نبني جسراً دقيقاً بين الإبداع البصري والمنطق البرمجي الصارم، بحيث يكون كل قرار تصميمي مدعوماً ببيانات، وكل سطر كود يخدم رؤية واضحة.",
        p2: "بنيتنا المؤسسية مصممة للتعامل مع التعقيد: فرق هندسية متعددة التخصصات، عمليات تسليم شفافة، ومعايير جودة تُختبر بالقياس لا بالانطباع.",
        v1: { t: "دقة هندسية صارمة", d: "مواصفات مقاسة، اختبارات آلية، ومراجعات كود صارمة." },
        v2: { t: "موثوقية مطلقة", d: "تسليم في الموعد، تواصل شفاف، ودعم مستمر بعد الإطلاق." },
        v3: { t: "حلول مخصصة بالكامل", d: "لا قوالب جاهزة — كل حل يُبنى لسياق عملك وحده." },
        s1: "مشروعاً منجزاً", s2: "نسبة رضا العملاء", s3: "صناعة نخدمها", s4: "دعم فني متواصل"
      },
      services: {
        kicker: "ما نقدمه", title: "خدمات متكاملة بمعايير عالمية",
        s1: { t: "تطوير الويب المتقدم", d: "تطبيقات ويب تفاعلية عالية الأداء بأحدث الأطر، مع تحسين Core Web Vitals وSEO.", l1: "تطبيقات React / Next.js", l2: "متاجر وبوابات مؤسسية", l3: "PWA وتطبيقات متجاوبة" },
        s2: { t: "هندسة البرمجيات المؤسسية", d: "أنظمة خلفية موثوقة، واجهات API، وهندسة سحابية قابلة للتوسع لعشرات الملايين من الطلبات.", l1: "Node.js / Python / Go", l2: "بنية Microservices", l3: "DevOps و CI/CD و Kubernetes" },
        s3: { t: "تحليل البيانات المتقدم", d: "مستودعات بيانات، لوحات تحكم حية، ونماذج تنبؤية تحوّل البيانات إلى ميزة تنافسية.", l1: "Data Warehousing و ETL", l2: "لوحات BI لحظية", l3: "نمذجة تنبؤية وتحليلات سلوكية" },
        s4: { t: "حلول الذكاء الاصطناعي", d: "ننقل نماذج التعلّم الآلي من المختبر إلى الإنتاج: LLM، رؤية حاسوبية، وتوصيات.", l1: "مساعدات LLM و RAG", l2: "رؤية حاسوبية ومعالجة لغة", l3: "MLOps وتوسيع النماذج" },
        s5: { t: "التصميم الإبداعي و UI/UX", d: "هويات بصرية، أنظمة تصميم، وتجارب مستخدم مدروسة تبنى على البحث والاختبار.", l1: "هوية بصرية وشعارات", l2: "Design Systems", l3: "اختبارات قابلية استخدام" },
        s6: { t: "مشروعك هنا", d: "أخبرنا عن هدفك، وسنرسم لك خارطة طريق تقنية واضحة خلال 48 ساعة.", cta: "تحدث معنا" }
      },
      insights: {
        kicker: "المدونة والتقارير", title: "رؤى تقنية معمّقة", sub: "مقالات وتقارير تعزز موقعنا كمرجع تقني قطاعي.",
        c1: "ذكاء اصطناعي", c2: "أداء", c3: "تصميم", c4: "بيانات", c5: "أمن", c6: "استراتيجية",
        read: "اقرأ المقال",
        art: { mlops: { title: "من النموذج إلى الإنتاج: دليل MLOps الهندسي لبناء أنظمة ذكاء اصطناعي مستقرة ومستدامة", by: "بقلم: فريق الهندسة والتطوير في ZeynVision" }, cwv: { title: "Core Web Vitals: معيار النجاح الجديد للأداء الرقمي وتجربة المستخدم", by: "بقلم: فريق الهندسة والتطوير في ZeynVision" }, minimalism: { title: "البساطة المتطرفة في واجهات المستقبل: هندسة المساحات والخطوط الدقيقة في تجربة المستخدم", by: "بقلم: فريق التصميم والهندسة في ZeynVision" }, streaming: { title: "البيانات اللحظية: هندسة البث الحديثة من Kafka إلى التحليل الفوري", by: "بقلم: فريق الهندسة والتطوير في ZeynVision" }, security: { title: "أمان التطبيقات الحديثة: طبقات لا جدران — منهجية الدفاع المتعدد الطبقات لحماية منتجاتك الرقمية", by: "بقلم: فريق الهندسة والتطوير في ZeynVision" }, transformation: { title: "التحول الرقمي ليس مشروعاً تقنياً: لماذا تفشل 70% من البرامج وكيف نبني استراتيجية تصمد؟", by: "بقلم: إدارة وتطوير ZeynVision" } },
        i1: { t: "من النموذج إلى الإنتاج: دليل MLOps العملي", d: "كيف تنقل نماذج التعلّم الآلي إلى بيئة إنتاج مستقرة ومراقبة." },
        i2: { t: "Core Web Vitals: معيار النجاح الجديد", d: "لماذا أصبحت سرعة التحميل مقياساً حاسماً للتجربة وترتيب البحث؟" },
        i3: { t: "البساطة المتطرفة في واجهات المستقبل", d: "لماذا تقود المساحات البيضاء والخطوط الهندسية تجربة المستخدم الحديثة؟" },
        i4: { t: "البيانات لحظية: هندسة البث الحديثة", d: "من Kafka إلى التحليل اللحظي — كيف نبني أنظمة بيانات تواكب الثانية؟" },
        i5: { t: "أمان التطبيقات الحديثة: طبقات لا جدران", d: "منهجية الدفاع المتعدد الطبقات لحماية منتجاتك الرقمية." },
        i6: { t: "التحول الرقمي ليس مشروعاً تقنياً", d: "لماذا يفشل 70% من برامج التحول، وكيف نبني استراتيجية تصمد؟" }
      },
      contact: {
        kicker: "تواصل معنا", title: "لنبدأ مشروعك القادم",
        sub: "أخبرنا عن فكرتك — نرد خلال 24 ساعة بخطة واضحة واستشارة مجانية.",
        f: { name: "الاسم الكامل", namePh: "مثال: أحمد الكيلاني", email: "البريد الإلكتروني", emailPh: "you@company.com", svc: "الخدمة المطلوبة", budget: "الميزانية التقريبية", msg: "تفاصيل المشروع", msgPh: "صف هدفك، نطاق العمل، والجدول الزمني المتوقع...", submit: "أرسل الطلب" },
        b1: "< $10K", b2: "$10K – $50K", b3: "$50K – $150K", b4: "> $150K",
        ok: "✓ تم استلام طلبك — سيتواصل معك فريقنا خلال 24 ساعة.",
        hq: "المقر الرئيسي", hq1: "Levent، إسطنبول، تركيا", em: "البريد", ph: "الهاتف", web: "الموقع", hrs: "ساعات العمل", hrs1: "الاثنين – الجمعة، 09:00 – 18:00",
        consult: "احجز استشارة فورية"
      },
      modal: {
        c: { title: "احجز استشارة فورية", sub: "اجتماع تقديري مجاني (30 دقيقة) مع فريقنا الهندسي.", name: "الاسم", email: "البريد الإلكتروني", date: "اليوم", time: "الوقت", submit: "تأكيد الحجز", ok: "✓ تم تأكيد حجزك — سنرسل دعوة الاجتماع لبريدك." },
        q: { title: "انتظر — خصم 10% لمشروعك الأول", sub: "اترك بياناتك ونعاود الاتصال خلال 24 ساعة بتقدير أولي مجاني.", submit: "أرسل تفاصيلي", ok: "✓ تم الاستلام — سنتواصل معك قريباً." }
      },
      legal: { title: "السياسة القانونية", p1: "نلتزم بحماية بياناتك الشخصية ومعالجتها وفق معايير GDPR. تُستخدم البيانات التي تشاركها معنا حصراً للتواصل وتنفيذ خدماتك.", p2: "لا نبيع أو نشارك بياناتك مع أطراف ثالثة لأغراض تسويقية دون موافقة صريحة. يمكنك طلب حذف بياناتك في أي وقت.", p3: "تستخدم ملفات الارتباط لتحسين الأداء والتحليلات. يمكنك إدارة تفضيلاتك من شريط ملفات الارتباط أو إعدادات المتصفح." },
      cookie: { msg: "نستخدم ملفات الارتباط لتحسين تجربتك وتحليل الزيارات. باستمرارك في التصفح فأنت توافق على استخدامها.", accept: "قبول", reject: "رفض" },
      footer: { tag: "وكالة تقنية وإبداعية — حيث تقابل الرؤية الذكاء.", nav: "الموقع", services: "الخدمات", legal: "قانوني", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", cookies: "سياسة ملفات الارتباط", rights: "جميع الحقوق محفوظة." }
    },

    en: {
      nav: { home: "Home", about: "About", services: "Services", work: "Work", insights: "Insights", contact: "Contact", cta: "Start Your Project" },
      hero: {
        tag: "Where Vision Meets Intelligence",
        t1: "We build solutions", t2: "where creativity meets", t3: "engineering & artificial intelligence",
        sub: "ZeynVision is an elite creative-tech agency fusing visual design with software logic and data analytics to build intelligent digital products that lead their markets.",
        cta1: "Start Your Project", cta2: "Explore Solutions", m1: "Available for new projects", m2: "Istanbul — Worldwide"
      },
      pillars: {
        kicker: "Integrated System", title: "Four pillars that make the difference",
        sub: "Every project is built on a smart core where data, code and design merge into one cohesive product.",
        p1: { t: "Smart Core", d: "Machine learning & AI models embedded in the product's core, not marginal add-ons." },
        p2: { t: "Data", d: "Advanced analytics turning raw data into precise decisions and tangible value." },
        p3: { t: "Code", d: "Clean, scalable software engineering with rigorous standards and superior performance." },
        p4: { t: "Design", d: "Visual creativity and user experience that put people at the heart of every decision." }
      },
      live: {
        kicker: "Live Proof", title: "Technology at work, before your eyes",
        sub: "No theoretical promises — live code and real-time data reflecting the level of our engineering.",
        chart: "Data processing — realtime", live: "LIVE",
        throughput: "Throughput: 12.4K req/s"
      },
      stack: { label: "Powered by world-class technologies" },
      est: {
        kicker: "Full Transparency", title: "Estimate your project instantly",
        sub: "Pick a service and scope to get an instant preliminary estimate — then let's discuss details together.",
        service: "Service type", scope: "Project scope",
        s: { web: "Advanced Web Development", software: "Enterprise Software Engineering", data: "Advanced Data Analytics", ai: "AI Solutions", design: "UI/UX & Brand Design" },
        o: { small: "Small — MVP / Pilot", medium: "Medium — Full Product", large: "Large — Enterprise Platform" },
        note: "Preliminary estimate — finalized after your free consultation session.",
        cta: "Book a Free Consultation"
      },
      work: {
        kicker: "Our Work", title: "Case studies that create impact",
        sub: "Selected projects across industries — from the engineering challenge to measurable digital results.",
        f: { all: "All", web: "Web", ai: "AI", data: "Data", design: "Design" },
        m: { kpi: "operational efficiency", cost: "reporting cost", conv: "conversion", acc: "accuracy", lh: "Lighthouse", sales: "sales", sat: "satisfaction", prod: "products covered", tix: "manual tickets", svc: "service", reg: "regions", uptime: "uptime" },
        p1: { t: "Realtime Analytics Platform", d: "A dashboard handling 4M events/day with under 200ms latency." },
        p2: { t: "Custom Recommendation Engine", d: "A self-learning recommendation system that lifted conversion by 27%." },
        p3: { t: "High-Performance Web Store", d: "A full rebuild achieving 0.8s LCP and a perfect 100 Lighthouse score." },
        p4: { t: "Brand Identity & Design System", d: "An integrated design system for a fintech brand raising user satisfaction by 31%." },
        p5: { t: "Smart Support Assistant", d: "An enterprise chatbot resolving 68% of tickets with no human intervention." },
        p6: { t: "Cloud Enterprise Portal", d: "A unified portal for 3 international divisions with realtime sync and multi-layer security." }
      },
      about: {
        kicker: "About Us", title: "A system where creativity meets logic",
        p1: "ZeynVision is not just a team — it is a methodology. We build a precise bridge between visual creativity and rigorous software logic, so every design decision is data-backed and every line of code serves a clear vision.",
        p2: "Our institutional structure is built to handle complexity: multidisciplinary engineering teams, transparent delivery processes, and quality standards measured by data, not impressions.",
        v1: { t: "Rigorous Engineering Precision", d: "Measured specs, automated testing, and strict code reviews." },
        v2: { t: "Absolute Reliability", d: "On-time delivery, transparent communication, and continuous support after launch." },
        v3: { t: "Fully Custom Solutions", d: "No templates — every solution is built for your business context alone." },
        s1: "Projects delivered", s2: "Client satisfaction", s3: "Industries served", s4: "Round-the-clock support"
      },
      services: {
        kicker: "What We Do", title: "Integrated services, global standards",
        s1: { t: "Advanced Web Development", d: "High-performance interactive web apps with modern frameworks, Core Web Vitals and SEO optimization.", l1: "React / Next.js applications", l2: "E-commerce & enterprise portals", l3: "PWA & responsive apps" },
        s2: { t: "Enterprise Software Engineering", d: "Reliable backends, APIs and cloud architecture scaling to tens of millions of requests.", l1: "Node.js / Python / Go", l2: "Microservices architecture", l3: "DevOps, CI/CD & Kubernetes" },
        s3: { t: "Advanced Data Analytics", d: "Data warehouses, live dashboards and predictive models turning data into a competitive edge.", l1: "Data warehousing & ETL", l2: "Realtime BI dashboards", l3: "Predictive modeling & behavioral analytics" },
        s4: { t: "AI Solutions", d: "We take machine learning models from lab to production: LLM, computer vision and recommendations.", l1: "LLM assistants & RAG", l2: "Computer vision & NLP", l3: "MLOps & model scaling" },
        s5: { t: "Creative Design & UI/UX", d: "Visual identities, design systems and researched user experiences built on testing.", l1: "Brand identity & logos", l2: "Design systems", l3: "Usability testing" },
        s6: { t: "Your Project Here", d: "Tell us your goal and we'll draft a clear technical roadmap within 48 hours.", cta: "Talk to us" }
      },
      insights: {
        kicker: "Insights & Blog", title: "Deep technical perspectives", sub: "Articles and reports establishing us as an industry technical reference.",
        c1: "AI", c2: "Performance", c3: "Design", c4: "Data", c5: "Security", c6: "Strategy",
        read: "Read article",
        art: { mlops: { title: "From Model to Production: A Practical MLOps Engineering Guide to Stable and Sustainable AI Systems", by: "By the Engineering and Development Team at ZeynVision" }, cwv: { title: "Core Web Vitals: The New Standard for Digital Performance and User Experience", by: "By the Engineering and Development Team at ZeynVision" }, minimalism: { title: "Extreme Minimalism in Future Interfaces: The Engineering of Space and Precise Lines in User Experience", by: "By the Design and Engineering Team at ZeynVision" }, streaming: { title: "Real-Time Data: Modern Streaming Engineering from Kafka to Instant Analytics", by: "By the Engineering and Development Team at ZeynVision" }, security: { title: "Modern Application Security: Layers, Not Walls — The Defense-in-Depth Methodology for Protecting Your Digital Products", by: "By the Engineering and Development Team at ZeynVision" }, transformation: { title: "Digital Transformation Is Not a Tech Project: Why 70% of Programs Fail, and How to Build a Resilient Strategy", by: "By ZeynVision Management and Development" } },
        i1: { t: "From Model to Production: A Practical MLOps Guide", d: "How to move machine learning models into a stable, monitored production environment." },
        i2: { t: "Core Web Vitals: The New Success Metric", d: "Why load speed is now a critical factor for experience and search ranking." },
        i3: { t: "Extreme Minimalism in Future Interfaces", d: "Why whitespace and geometric lines lead the modern user experience." },
        i4: { t: "Realtime Data: Modern Streaming Architecture", d: "From Kafka to instant analytics — building data systems that keep pace with every second." },
        i5: { t: "Modern Application Security: Layers, Not Walls", d: "A multi-layer defense methodology for protecting your digital products." },
        i6: { t: "Digital Transformation Is Not an IT Project", d: "Why 70% of transformation programs fail, and how to build a strategy that lasts." }
      },
      contact: {
        kicker: "Contact Us", title: "Let's start your next project",
        sub: "Tell us your idea — we reply within 24 hours with a clear plan and a free consultation.",
        f: { name: "Full name", namePh: "e.g. John Carter", email: "Email", emailPh: "you@company.com", svc: "Service needed", budget: "Approx. budget", msg: "Project details", msgPh: "Describe your goal, scope and expected timeline...", submit: "Send Request" },
        b1: "< $10K", b2: "$10K – $50K", b3: "$50K – $150K", b4: "> $150K",
        ok: "✓ Request received — our team will reach out within 24 hours.",
        hq: "Headquarters", hq1: "Levent, Istanbul, Turkey", em: "Email", ph: "Phone", web: "Website", hrs: "Working hours", hrs1: "Mon – Fri, 09:00 – 18:00",
        consult: "Book an Instant Consultation"
      },
      modal: {
        c: { title: "Book an Instant Consultation", sub: "A free 30-minute discovery call with our engineering team.", name: "Name", email: "Email", date: "Date", time: "Time", submit: "Confirm Booking", ok: "✓ Booking confirmed — we'll send the meeting invite to your inbox." },
        q: { title: "Wait — 10% off your first project", sub: "Leave your details and we'll call you within 24 hours with a free initial estimate.", submit: "Send My Details", ok: "✓ Received — we'll get back to you soon." }
      },
      legal: { title: "Legal Policy", p1: "We are committed to protecting your personal data and processing it in line with GDPR standards. Data you share with us is used exclusively for communication and delivering our services.", p2: "We never sell or share your data with third parties for marketing purposes without explicit consent. You may request deletion of your data at any time.", p3: "Cookies are used to improve performance and analytics. You can manage your preferences via the cookie banner or browser settings." },
      cookie: { msg: "We use cookies to improve your experience and analyze traffic. By continuing to browse, you agree to their use.", accept: "Accept", reject: "Reject" },
      footer: { tag: "A creative-tech agency — where vision meets intelligence.", nav: "Site", services: "Services", legal: "Legal", privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Policy", rights: "All rights reserved." }
    },

    tr: {
      nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetler", work: "İşlerimiz", insights: "Blog", contact: "İletişim", cta: "Projenizi Başlatın" },
      hero: {
        tag: "Vizyonun Zekâyla Buluştuğu Yer",
        t1: "Çözümleri", t2: "yaratıcılığın mühendislik ve yapay zekâyla", t3: "buluştuğu yerde tasarlıyoruz",
        sub: "ZeynVision, görsel tasarımı yazılım mantığı ve veri analitiğiyle birleştiren seçkin bir yaratıcı-teknoloji ajansıdır; pazarlarına liderlik eden akıllı dijital ürünler inşa eder.",
        cta1: "Projenizi Başlatın", cta2: "Çözümleri Keşfedin", m1: "Yeni projelere açığız", m2: "İstanbul — Dünya geneli"
      },
      pillars: {
        kicker: "Entegre Sistem", title: "Fark yaratan dört temel",
        sub: "Her proje; veri, kod ve tasarımı tek bir tutarlı üründe birleştiren akıllı bir çekirdek üzerine inşa edilir.",
        p1: { t: "Akıllı Çekirdek", d: "Makine öğrenimi ve yapay zekâ modelleri ürünün özüne gömülüdür; kenar eklentiler değil." },
        p2: { t: "Veri", d: "Ham veriyi hassas kararlara ve somut değere dönüştüren ileri analitik." },
        p3: { t: "Kod", d: "Temiz, ölçeklenebilir yazılım mühendisliği; sıkı standartlar ve üstün performans." },
        p4: { t: "Tasarım", d: "İnsanı her kararın merkezine koyan görsel yaratıcılık ve kullanıcı deneyimi." }
      },
      live: {
        kicker: "Canlı Kanıt", title: "Teknoloji gözlerinizin önünde çalışıyor",
        sub: "Teorik vaatler yok — mühendislik seviyemizi yansıtan canlı kod ve gerçek zamanlı veri.",
        chart: "Veri işleme — gerçek zamanlı", live: "CANLI",
        throughput: "Verim: 12,4K istek/sn"
      },
      stack: { label: "Dünya standartlarında teknolojilerle" },
      est: {
        kicker: "Tam Şeffaflık", title: "Projenizi anında hesaplayın",
        sub: "Hizmeti ve kapsamı seçin, anında ön tahmin alın — sonra detayları birlikte konuşalım.",
        service: "Hizmet türü", scope: "Proje kapsamı",
        s: { web: "İleri Düzey Web Geliştirme", software: "Kurumsal Yazılım Mühendisliği", data: "İleri Veri Analitiği", ai: "Yapay Zekâ Çözümleri", design: "UI/UX ve Marka Tasarımı" },
        o: { small: "Küçük — MVP / Pilot", medium: "Orta — Tam Ürün", large: "Büyük — Kurumsal Platform" },
        note: "Ön tahmin — ücretsiz danışmanlık görüşmesinden sonra kesinleşir.",
        cta: "Ücretsiz Danışmanlık Ayırtın"
      },
      work: {
        kicker: "İşlerimiz", title: "Etki yaratan vaka çalışmaları",
        sub: "Sektörler arası seçilmiş projeler — mühendislik zorluğundan ölçülebilir dijital sonuçlara.",
        f: { all: "Tümü", web: "Web", ai: "Yapay Zekâ", data: "Veri", design: "Tasarım" },
        m: { kpi: "operasyonel verim", cost: "raporlama maliyeti", conv: "dönüşüm", acc: "doğruluk", lh: "Lighthouse", sales: "satış", sat: "memnuniyet", prod: "kapsanan ürün", tix: "manuel bilet", svc: "hizmet", reg: "bölge", uptime: "çalışma süresi" },
        p1: { t: "Gerçek Zamanlı Analitik Platformu", d: "Günde 4M olayı 200ms altında gecikmeyle işleyen bir gösterge paneli." },
        p2: { t: "Özel Öneri Motoru", d: "Dönüşümü %27 artıran kendi kendine öğrenen öneri sistemi." },
        p3: { t: "Yüksek Performanslı Web Mağazası", d: "0,8 sn LCP ve 100 Lighthouse puanı sağlayan tam yeniden yapım." },
        p4: { t: "Marka Kimliği ve Tasarım Sistemi", d: "Kullanıcı memnuniyetini %31 artıran entegre tasarım sistemi." },
        p5: { t: "Akıllı Destek Asistanı", d: "Biletlerin %68'ini insan müdahalesi olmadan çözen kurumsal sohbet robotu." },
        p6: { t: "Bulut Kurumsal Portal", d: "Gerçek zamanlı senkronizasyon ve çok katmanlı güvenlikle 3 uluslararası bölüm için birleşik portal." }
      },
      about: {
        kicker: "Hakkımızda", title: "Yaratıcılığın mantıkla buluştuğu sistem",
        p1: "ZeynVision yalnızca bir ekip değil — bir metodolojidir. Görsel yaratıcılık ile titiz yazılım mantığı arasında hassas bir köprü kuruyoruz; her tasarım kararı veriye dayanır, her kod satırı net bir vizyona hizmet eder.",
        p2: "Kurumsal yapımız karmaşıklıkla başa çıkmak için tasarlandı: çok disiplinli mühendislik ekipleri, şeffaf teslim süreçleri ve izlenimle değil ölçümle test edilen kalite standartları.",
        v1: { t: "Titiz Mühendislik Hassasiyeti", d: "Ölçülen spesifikasyonlar, otomatik testler ve sıkı kod incelemeleri." },
        v2: { t: "Mutlak Güvenilirlik", d: "Zamanında teslim, şeffaf iletişim ve lansman sonrası sürekli destek." },
        v3: { t: "Tamamen Özel Çözümler", d: "Şablon yok — her çözüm yalnızca sizin iş bağlamınız için inşa edilir." },
        s1: "Tamamlanan proje", s2: "Müşteri memnuniyeti", s3: "Hizmet verilen sektör", s4: "Kesintisiz destek"
      },
      services: {
        kicker: "Neler Yapıyoruz", title: "Entegre hizmetler, küresel standartlar",
        s1: { t: "İleri Düzey Web Geliştirme", d: "Modern çerçevelerle yüksek performanslı etkileşimli web uygulamaları; Core Web Vitals ve SEO optimizasyonu.", l1: "React / Next.js uygulamaları", l2: "E-ticaret ve kurumsal portallar", l3: "PWA ve duyarlı uygulamalar" },
        s2: { t: "Kurumsal Yazılım Mühendisliği", d: "On milyonlarca isteğe ölçeklenen güvenilir backend, API ve bulut mimarisi.", l1: "Node.js / Python / Go", l2: "Mikroservis mimarisi", l3: "DevOps, CI/CD ve Kubernetes" },
        s3: { t: "İleri Veri Analitiği", d: "Veriyi rekabet avantajına dönüştüren veri ambarları, canlı paneller ve tahmin modelleri.", l1: "Veri ambarı ve ETL", l2: "Gerçek zamanlı BI panelleri", l3: "Tahmine dayalı modelleme" },
        s4: { t: "Yapay Zekâ Çözümleri", d: "Makine öğrenimi modellerini laboratuvardan üretime taşıyoruz: LLM, bilgisayar görüşü ve öneri sistemleri.", l1: "LLM asistanları ve RAG", l2: "Bilgisayar görüşü ve NLP", l3: "MLOps ve model ölçekleme" },
        s5: { t: "Yaratıcı Tasarım ve UI/UX", d: "Araştırma ve testlerle inşa edilen görsel kimlikler, tasarım sistemleri ve kullanıcı deneyimleri.", l1: "Marka kimliği ve logolar", l2: "Tasarım sistemleri", l3: "Kullanılabilirlik testleri" },
        s6: { t: "Projeniz Burada", d: "Hedefinizi anlatın, 48 saat içinde net bir teknik yol haritası çizelim.", cta: "Bizimle konuşun" }
      },
      insights: {
        kicker: "Blog ve Raporlar", title: "Derin teknik bakışlar", sub: "Bizi sektörün teknik referansı yapan makaleler ve raporlar.",
        c1: "Yapay Zekâ", c2: "Performans", c3: "Tasarım", c4: "Veri", c5: "Güvenlik", c6: "Strateji",
        read: "Makaleyi oku",
        art: { mlops: { title: "Modelden Üretime: Kararlı ve Sürdürülebilir Yapay Zeka Sistemleri İçin Pratik Bir MLOps Mühendislik Rehberi", by: "Yazan: ZeynVision Mühendislik ve Geliştirme Ekibi" }, cwv: { title: "Core Web Vitals: Dijital Performans ve Kullanıcı Deneyimi İçin Yeni Başarı Standardı", by: "ZeynVision Mühendislik ve Geliştirme Ekibi tarafından" }, minimalism: { title: "Geleceğin Arayüzlerinde Aşırı Minimalizm: Kullanıcı Deneyiminde Alan ve Hassas Çizgilerin Mühendisliği", by: "ZeynVision Tasarım ve Mühendislik Ekibi Tarafından" }, streaming: { title: "Gerçek Zamanlı Veri: Kafka'dan Anlık Analitiğe Modern Akış Mühendisliği", by: "ZeynVision Mühendislik ve Geliştirme Ekibi Tarafından" }, security: { title: "Modern Uygulama Güvenliği: Duvarlar Değil, Katmanlar — Dijital Ürünlerinizi Korumak İçin Derinlemesine Savunma Metodolojisi", by: "ZeynVision Mühendislik ve Geliştirme Ekibi Tarafından" }, transformation: { title: "Dijital Dönüşüm Bir Teknoloji Projesi Değildir: Programların %70'i Neden Başarısız Olur ve Dayanıklı Bir Strateji Nasıl İnşa Edilir?", by: "ZeynVision Yönetim ve Geliştirme Ekibi Tarafından" } },
        i1: { t: "Modelden Üretime: Pratik MLOps Rehberi", d: "Makine öğrenimi modellerini istikrarlı, izlenen bir üretim ortamına nasıl taşırsınız?" },
        i2: { t: "Core Web Vitals: Yeni Başarı Ölçütü", d: "Yükleme hızı neden deneyim ve arama sıralaması için kritik hale geldi?" },
        i3: { t: "Geleceğin Arayüzlerinde Aşırı Minimalizm", d: "Beyaz alanlar ve geometrik çizgiler modern kullanıcı deneyimine neden öncülük ediyor?" },
        i4: { t: "Gerçek Zamanlı Veri: Modern Akış Mimarisi", d: "Kafka'dan anlık analitiğe — her saniyeye ayak uyduran veri sistemleri nasıl kurulur?" },
        i5: { t: "Modern Uygulama Güvenliği: Duvarlar Değil Katmanlar", d: "Dijital ürünlerinizi korumak için çok katmanlı savunma metodolojisi." },
        i6: { t: "Dijital Dönüşüm Bir BT Projesi Değildir", d: "Dönüşüm programlarının %70'i neden başarısız oluyor ve kalıcı strateji nasıl kurulur?" }
      },
      contact: {
        kicker: "İletişim", title: "Bir sonraki projenize başlayalım",
        sub: "Fikrinizi anlatın — net bir plan ve ücretsiz danışmanlıkla 24 saat içinde dönelim.",
        f: { name: "Ad Soyad", namePh: "örn. Ali Yılmaz", email: "E-posta", emailPh: "you@company.com", svc: "İhtiyaç duyulan hizmet", budget: "Yaklaşık bütçe", msg: "Proje detayları", msgPh: "Hedefinizi, kapsamı ve beklenen zaman çizelgesini açıklayın...", submit: "Talebi Gönder" },
        b1: "< $10K", b2: "$10K – $50K", b3: "$50K – $150K", b4: "> $150K",
        ok: "✓ Talebiniz alındı — ekibimiz 24 saat içinde size ulaşacak.",
        hq: "Merkez", hq1: "Levent, İstanbul, Türkiye", em: "E-posta", ph: "Telefon", web: "Web sitesi", hrs: "Çalışma saatleri", hrs1: "Pzt – Cum, 09:00 – 18:00",
        consult: "Anında Danışmanlık Ayırtın"
      },
      modal: {
        c: { title: "Anında Danışmanlık Ayırtın", sub: "Mühendislik ekibimizle ücretsiz 30 dakikalık keşif görüşmesi.", name: "Ad", email: "E-posta", date: "Tarih", time: "Saat", submit: "Rezervasyonu Onayla", ok: "✓ Rezervasyon onaylandı — toplantı davetini e-postanıza göndereceğiz." },
        q: { title: "Durun — ilk projenize %10 indirim", sub: "Bilgilerinizi bırakın, 24 saat içinde ücretsiz ön tahminle size dönelim.", submit: "Bilgilerimi Gönder", ok: "✓ Alındı — en kısa sürede size döneceğiz." }
      },
      legal: { title: "Yasal Politika", p1: "Kişisel verilerinizi GDPR standartlarına uygun şekilde korumayı ve işlemeyi taahhüt ediyoruz. Paylaştığınız veriler yalnızca iletişim ve hizmetlerimizin sunumu için kullanılır.", p2: "Verilerinizi açık onay olmadan üçüncü taraflarla asla satmaz veya pazarlama amacıyla paylaşmayız. Verilerinizin silinmesini istediğinizde talep edebilirsiniz.", p3: "Çerezler performans ve analitik iyileştirme için kullanılır. Tercihlerinizi çerez bildiriminden veya tarayıcı ayarlarından yönetebilirsiniz." },
      cookie: { msg: "Deneyiminizi iyileştirmek ve trafiği analiz etmek için çerezler kullanıyoruz. Gezinmeye devam ederek kullanımlarını kabul etmiş olursunuz.", accept: "Kabul Et", reject: "Reddet" },
      footer: { tag: "Yaratıcı-teknoloji ajansı — vizyonun zekâyla buluştuğu yer.", nav: "Site", services: "Hizmetler", legal: "Yasal", privacy: "Gizlilik Politikası", terms: "Hizmet Şartları", cookies: "Çerez Politikası", rights: "Tüm hakları saklıdır." }
    }
  };

  /* ---------------- State ---------------- */
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  let currentLang = localStorage.getItem("zv-lang") || "ar";

  /* ---------------- i18n Engine ---------------- */
  function applyLang(lang, { persist = true } = {}) {
    currentLang = lang;
    const dict = I18N[lang] || I18N.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
      if (val !== undefined) el.textContent = val;
    });
    $$("[data-i18n-ph]").forEach((el) => {
      const key = el.dataset.i18nPh;
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
      if (val !== undefined) el.placeholder = val;
    });

    // Article reader: show matching language block, fall back to AR when absent
    $$(".article-lang").forEach((el) => {
      const modal = el.closest(".modal");
      const hasLang = modal && modal.querySelector('.article-lang[data-lang="' + lang + '"]');
      el.hidden = el.dataset.lang !== (hasLang ? lang : "ar");
    });

    $$(".lang-btn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    document.title = lang === "ar"
      ? "ZeynVision — حيث تقابل الرؤية الذكاء"
      : lang === "tr"
        ? "ZeynVision — Vizyonun Zekâyla Buluştuğu Yer"
        : "ZeynVision — Where Vision Meets Intelligence";
    if (persist) localStorage.setItem("zv-lang", lang);
    refreshEstimate();
  }

  // Language switcher — click handlers
  $$(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => applyLang(btn.dataset.lang))
  );

  /* ---------------- Theme ---------------- */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("zv-theme", theme);
  }
  const savedTheme = localStorage.getItem("zv-theme") || "dark";
  applyTheme(savedTheme);

  $("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  /* ---------------- Background Canvas (data streams) ---------------- */
  const canvas = $("#bg-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, nodes = [], mouse = { x: -9999, y: -9999 }, rafId = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function seedNodes() {
    const count = Math.min(70, Math.floor((W * H) / 22000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
      cyan: Math.random() < 0.14 // bright cyan accent particles
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const dark = document.documentElement.dataset.theme === "dark";
    const base = dark ? "255,255,255" : "10,30,63";
    const linkDist = 130;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.cyan
        ? `rgba(0, 212, 255, ${dark ? 0.6 : 0.55})`
        : `rgba(${base},${dark ? 0.28 : 0.35})`;
      ctx.fill();

      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x, dy = n.y - m.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < linkDist * linkDist) {
          const a = (1 - Math.sqrt(d2) / linkDist) * (dark ? 0.09 : 0.12);
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(${base},${a})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      const mdx = n.x - mouse.x, mdy = n.y - mouse.y;
      const md2 = mdx * mdx + mdy * mdy;
      if (md2 < 190 * 190) {
        const a = (1 - Math.sqrt(md2) / 190) * 0.55;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(0,229,255,${a})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    rafId = requestAnimationFrame(draw);
  }

  function initCanvas() {
    resizeCanvas();
    seedNodes();
    if (!reducedMotion && rafId === null) draw();
  }
  window.addEventListener("resize", () => { resizeCanvas(); seedNodes(); });
  window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseout", () => { mouse.x = -9999; mouse.y = -9999; });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }
    else if (!reducedMotion && rafId === null) draw();
  });

  /* ---------------- Hero logo glow (mouse parallax) ---------------- */
  const glow = $("#hero-glow");
  let gx = 0, gy = 0, tx = 0, ty = 0;
  window.addEventListener("mousemove", (e) => {
    const r = glow.getBoundingClientRect();
    tx = (e.clientX - (r.left + r.width / 2)) * 0.08;
    ty = (e.clientY - (r.top + r.height / 2)) * 0.08;
  });
  (function glowLoop() {
    gx += (tx - gx) * 0.08;
    gy += (ty - gy) * 0.08;
    glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    requestAnimationFrame(glowLoop);
  })();

  /* ---------------- Terminal typing ---------------- */
  const CODE_LINES = [
    ['tk-cm', '// ZeynVision — vision-core'],
    ['tk-kw', 'const '], ['tk-pn', 'vision = '], ['tk-kw', 'new '], ['tk-fn', 'Engine'], ['tk-pn', '({'],
    ['tk-pn', '  core: '], ['tk-str', '"smart"'], ['tk-pn', ', data: '], ['tk-str', '"live"'],
    ['tk-pn', '  design: '], ['tk-str', '"minimal"'], ['tk-pn', ', scale: '], ['tk-num', '1e6'],
    ['tk-pn', '});'],
    ['tk-pn', ''],
    ['tk-kw', 'await '], ['tk-fn', 'vision'], ['tk-pn', '.'], ['tk-fn', 'deploy'], ['tk-pn', '();'],
    ['tk-cm', '// latency: 38ms · uptime: 99.99%'],
    ['tk-pn', ''],
    ['tk-pn', '▶ '], ['tk-str', '"Where Vision Meets Intelligence"'], ['tk-pn', ' ✓']
  ];
  const termBody = $("#terminal-body");
  const termCode = $("#terminal-body code");

  function typeTerminal() {
    termCode.innerHTML = "";
    // render progressively: append per-line segments, cursor stays at end
    const cursor = termBody.querySelector(".cursor");
    function renderLines(idx) {
      if (idx >= CODE_LINES.length) { setTimeout(() => typeTerminal(), 4200); return; }
      const [cls, txt] = CODE_LINES[idx];
      const seg = document.createElement("span");
      seg.className = cls;
      seg.textContent = txt;
      termCode.appendChild(seg);
      cursor.remove();
      termBody.appendChild(cursor);
      setTimeout(() => renderLines(idx + 1), cls === "tk-cm" ? 160 : 120);
    }
    renderLines(0);
  }

  /* ---------------- Live chart ---------------- */
  const chart = $("#live-chart");
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$(".bar", chart).forEach((b, i) => setTimeout(() => b.classList.add("animated"), i * 90));
        chartObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  chartObserver.observe(chart);

  /* ---------------- Estimator ---------------- */
  const PRICING = {
    web:      { small: [150, 1000],   medium: [1000, 2500],  large: [3000, 9000] },
    software: { small: [500, 2500],   medium: [2500, 8000],  large: [8000, 20000] },
    data:     { small: [200, 500],    medium: [500, 1000],   large: [1000, 3500] },
    ai:       { small: [100, 1000],   medium: [1100, 2000],  large: [2000, 4000] },
    design:   { small: [200, 500],    medium: [500, 1000],   large: [1000, 3500] }
  };
  const estService = $("#est-service");
  const estScope = $("#est-scope");
  const estRange = $("#est-range");

  function refreshEstimate() {
    const [lo, hi] = PRICING[estService.value][estScope.value];
    estRange.textContent = "$" + lo.toLocaleString("en-US") + " – $" + hi.toLocaleString("en-US");
  }
  estService.addEventListener("change", refreshEstimate);
  estScope.addEventListener("change", refreshEstimate);

  /* ---------------- Portfolio filters ---------------- */
  const filterBtns = $$(".filter-btn");
  const workCards = $$(".work-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      workCards.forEach((card) => {
        const show = f === "all" || card.dataset.cat === f;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  /* ---------------- Counters ---------------- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const t0 = performance.now();
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$(".stat-num").forEach(animateCounter);
        statsObs.disconnect();
      }
    });
  }, { threshold: 0.35 });
  statsObs.observe($("#stats"));

  /* ---------------- Reveal on scroll ---------------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        revealObs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => revealObs.observe(el));

  /* ---------------- Navbar / menu / scrollspy ---------------- */
  const nav = $("#navbar");
  const menuToggle = $("#menu-toggle");
  const navLinks = $("#nav-links");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 24));
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  $$(".nav-link").forEach((l) => l.addEventListener("click", () => navLinks.classList.remove("open")));

  const spyObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$(".nav-link").forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ["home", "about", "services", "work", "insights", "contact"].forEach((id) => {
    const sec = document.getElementById(id);
    if (sec) spyObs.observe(sec);
  });

  /* ---------------- Modals ---------------- */
  function openModal(m) { m.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeModal(m) { m.classList.remove("open"); document.body.style.overflow = ""; }
  $$(".modal").forEach((m) => {
    $$("[data-close]", m).forEach((el) => el.addEventListener("click", () => closeModal(m)));
    m.addEventListener("click", (e) => { if (e.target === m) closeModal(m); });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $$(".modal.open").forEach(closeModal);
  });

  $("#open-consult").addEventListener("click", () => openModal($("#consult-modal")));

  // Article reader: any blog card with data-article opens its matching modal
  $$(".insight-card[data-article]").forEach((card) => {
    card.addEventListener("click", () => openModal($("#article-modal-" + card.dataset.article)));
  });
  $(".nav-cta").addEventListener("click", (e) => { e.preventDefault(); openModal($("#consult-modal")); });

  // date min = today
  const qDate = $("#q-date");
  qDate.min = new Date().toISOString().split("T")[0];

  // time slots
  $$("#time-slots .slot").forEach((s) => s.addEventListener("click", () => {
    $$("#time-slots .slot").forEach((x) => x.classList.remove("active"));
    s.classList.add("active");
  }));

  // forms (simulated submit)
  function wireForm(formId, okId) {
    const form = $("#" + formId);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.reset();
      $("#" + okId).hidden = false;
      setTimeout(() => { $("#" + okId).hidden = true; }, 5000);
      if (formId === "quote-form") setTimeout(() => closeModal($("#quote-modal")), 1400);
      if (formId === "consult-form") setTimeout(() => closeModal($("#consult-modal")), 1400);
    });
  }
  wireForm("contact-form", "form-ok");
  wireForm("consult-form", "consult-ok");
  wireForm("quote-form", "quote-ok");

  /* ---------------- Exit-intent quick quote ---------------- */
  const quoteModal = $("#quote-modal");
  let exitShown = false;
  const shownAt = Date.now();
  document.addEventListener("mouseout", (e) => {
    if (exitShown) return;
    if (Date.now() - shownAt < 6000) return;
    if (!e.relatedTarget && e.clientY <= 8) {
      exitShown = true;
      openModal(quoteModal);
    }
  });

  /* ---------------- Legal modal tabs ---------------- */
  const legalModal = $("#legal-modal");
  const legalContent = $("#legal-content");
  const LEGAL_COPY = {
    privacy: ["legal.p1", "legal.p2"],
    terms: ["legal.p1", "legal.p2"],
    cookies: ["legal.p3"]
  };
  $$(".legal-link").forEach((l) => l.addEventListener("click", (e) => {
    e.preventDefault();
    openLegal(l.dataset.legal);
  }));
  $$(".legal-tab").forEach((t) => t.addEventListener("click", () => openLegal(t.dataset.tab)));

  function openLegal(tab) {
    $$(".legal-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === tab));
    legalContent.innerHTML = "";
    const dict = I18N[currentLang] || I18N.ar;
    LEGAL_COPY[tab].forEach((key) => {
      const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
      if (val) {
        const p = document.createElement("p");
        p.textContent = val;
        legalContent.appendChild(p);
      }
    });
    openModal(legalModal);
  }

  /* ---------------- Cookie banner ---------------- */
  const cookieBanner = $("#cookie-banner");
  let cookieShown = false;
  function showCookie() {
    if (!localStorage.getItem("zv-cookie") && !cookieShown) {
      cookieShown = true;
      cookieBanner.classList.add("show");
    }
  }
  // Show only after the visitor interacts (scroll) — keeps the hero clean on load
  window.addEventListener("scroll", () => { if (window.scrollY > 80) showCookie(); }, { passive: true });
  setTimeout(() => { if (window.scrollY > 80) showCookie(); }, 3000);
  $("#cookie-accept").addEventListener("click", () => {
    localStorage.setItem("zv-cookie", "accepted");
    cookieBanner.classList.remove("show");
  });
  $("#cookie-reject").addEventListener("click", () => {
    localStorage.setItem("zv-cookie", "rejected");
    cookieBanner.classList.remove("show");
  });

  /* ---------------- Init ---------------- */
  initCanvas();
  applyLang(currentLang);
  refreshEstimate();
  setTimeout(typeTerminal, 500);
})();
