const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const translations = {
  az: {
    skip_link: "Məzmunu keç",
    nav_home: "Ana Səhifə",
    nav_about: "Haqqımda",
    nav_skills: "Bacarıqlar",
    nav_experience: "Təcrübə",
    nav_projects: "Layihələr",
    nav_order: "Sifariş",
    nav_contact: "Əlaqə",
    hero_available: "Freelance və tam iş günü üçün əlçatandır",
    hero_im: "Mən",
    hero_desc: "Müasir, performansa yönəlmiş bir Frontend Developer olaraq, istifadəçi təcrübəsi, təmiz kod və genişlənmə imkanlarını ön planda tutan veb tətbiqlərin qurulmasına fokuslanıram. React ekosistemi, UI/UX prinsipləri və real layihələrdəki təcrübəmlə biznes çətinliklərinə effektiv texnoloji həllər təqdim edirəm.",
    btn_view_projects: "Layihələrə Bax",
    btn_contact_me: "Əlaqə Saxla",
    location: "Bakı, Azərbaycan",
    card_role: "Frontend Developer",
    stat_projects: "Layihələr",
    stat_projects_desc: "Real Veb Tətbiqlər (LMS, E-ticarət, Panel, Portfolio)",
    stat_teaching: "Təlim rolları",
    stat_teaching_desc: "Instructor / Mentor (KiberKod, RisePath)",
    stat_availability: "İş rejimi",
    stat_availability_val: "Remote • Freelance • On-site",
    about_title: "Haqqımda",
    about_head_desc: "Müasir, minimal və peşəkar UI ilə təmiz, responsive və yüksək performanslı interfeyslərin qurulmasına fokuslanmışam.",
    about_summary_title: "Peşəkar Xülasə",
    about_summary_text: "Müasir, minimal və performansa yönəlmiş istifadəçi interfeyslərinin qurulmasına, yüksək keyfiyyətli və istifadəçi mərkəzli veb təcrübələrin yaradılmasına fokuslanıram. Frontend inkişafı sahəsində React ekosistemi, komponent əsaslı arxitektura və UI/UX prinsiplərini tətbiq edərək genişlənə bilən və optimallaşdırılmış həllər hazırlayıram. Real layihələrdəki təcrübəm həm texniki, həm də dizayn baxımından balanslaşdırılmış məhsullar yaratmağa imkan verir.",
    highlight_ui: "Komponent əsaslı UI",
    highlight_ux: "Müasir UX nümunələri",
    highlight_perf: "Öncəlik performans",
    highlight_mentoring: "Tədris və təlimçi",
    about_info_title: "Qısa Məlumat",
    info_title_key: "Vəzifə",
    info_title_val: "Frontend Developer | Təlimçi",
    info_location_key: "Məkan",
    info_email_key: "E-poçt",
    info_phone_key: "Telefon",
    about_langs_title: "Dillər",
    lang_en: "İngilis dili (B1)",
    lang_ru: "Rus dili (A2)",
    lang_tr: "Türk dili (C1)",
    about_links_title: "Linklər",
    link_open: "Aç",
    skills_title: "Bacarıqlar",
    skills_head_desc: "Frontend, UI/UX, backend əsasları və yerləşdirmə sahələrində tam bacarıqlar toplusu.",
    skill_group_fe: "Frontend İnkişafı",
    skill_group_fe_desc: "Əsas frontend texnologiyaları və tətbiq arxitekturası.",
    skill_group_ui: "UI / UX və Stil",
    skill_group_ui_desc: "Müasir stil iş axınları və UI mühəndisliyi.",
    skill_group_be: "Backend İnkişafı",
    skill_group_be_desc: "API qurmaq və istifadə etmək üçün backend əsasları.",
    skill_group_db: "Məlumat Bazası",
    skill_group_db_desc: "Real dünyadakı CRUD tətbiqləri üçün məlumat əsasları.",
    skill_group_tools: "Alətlər və İş Axını",
    skill_group_tools_desc: "Gündəlik alətlər, sazlama və keyfiyyət təcrübələri.",
    skill_group_deploy: "Yerləşdirmə və Hostinq",
    skill_group_deploy_desc: "Saytların istehsalata buraxılması və saxlanılması.",
    skill_group_extra: "Əlavə Peşəkar Bacarıqlar",
    skill_group_extra_desc: "Keyfiyyəti və təsiri artıran mühəndislik təcrübələri.",
    skills_word: "Bacarıq",
    skill_count_12: "12",
    skill_count_9: "9",
    skill_count_6: "6",
    skill_count_4: "4",
    skill_count_8: "8",
    skill_count_3: "3",
    skill_perf_opt: "Performans Optimizasiyası",
    skill_a11y: "Veb Əlçatanlıq (a11y)",
    skill_seo: "SEO Əsasları",
    skill_clean_code: "Təmiz Kod Prinsipləri",
    skill_reusability: "Komponentin Təkrar İstifadəsi",
    skill_problem_solving: "Problem Həll Etmə",
    exp_title: "Təcrübə",
    exp_head_desc: "Frontend inkişafı, mentorluq və tədrisə fokuslanmış peşəkar rollar.",
    role_instructor: "Frontend Təlimçisi",
    role_dev: "Frontend Developer",
    role_mentor: "Frontend Mentor",
    company_label: "Şirkət:",
    exp_date_1: "Okt 2025 - Hazırda (8 ay)",
    exp_date_2: "Sen 2025 - Hazırda (9 ay)",
    exp_date_3: "İyun 2025 - May 2026 (1 il)",
    exp_date_4: "May 2025 - Sen 2025 (5 ay)",
    job_type_ft: "Tam iş günü",
    job_loc_az: "Azərbaycan (Ofisdən)",
    job_loc_baku: "Bakı, Azərbaycan (Ofisdən)",
    exp_desc_1: "Frontend Təlimçisi kimi çalışaraq tələbələrə HTML, CSS, JavaScript və React dərsləri keçirəm. Onlara praktiki layihələrdə dəstək oluram.",
    exp_desc_2: "Strukturlaşdırılmış frontend təlim proqramlarını tədris edir, müasir veb texnologiyaları üzrə tələbələrə mentorluq edirəm.",
    exp_desc_3: "React.js və Next.js istifadə edərək responsive və yüksək performanslı veb tətbiqlərin hazırlanması. REST API-lər və Redux ilə iş.",
    exp_desc_4: "Tələbələrə HTML, CSS, JavaScript və React daxil olmaqla Frontend İnkişafı üzrə mentorluq etmişəm.",
    projects_title: "Layihələr",
     projects_head_desc: "Real layihələriniz üçün hazır struktur. İstənilən vaxt şəkilləri və linkləri dəyişə bilərsiniz.",
     order_title: "Sifariş və Əməkdaşlıq",
     proj_1_title: "SmartRent",
    proj_1_desc: "Müasir avtomobil icarəsi platforması. Rahat bron etmə və idarəetmə sistemi.",
    proj_2_title: "Onlaynders.az",
    proj_2_desc: "Sertifikat zəmanətli interaktiv kompüter dərsləri platforması.",
    proj_3_title: "Medicare",
    proj_3_desc: "Tibb mərkəzləri üçün xəstə və həkim qəbulu idarəetmə sistemi.",
    proj_4_title: "BMPay",
    proj_4_desc: "Vergi hesablama və ödəniş idarəetmə paneli.",
    proj_5_title: "CVBrain",
    proj_5_desc: "Peşəkar CV-lərin yaradılması və idarə edilməsi üçün platforma.",
    proj_6_title: "Aetc Academy",
    proj_6_desc: "Mühəndislik biliklərini real sənaye təcrübəsi ilə yeni səviyyəyə yüksəldən təlim platforması.",
    btn_live: "Canlı Demo",
    btn_github: "GitHub",
    contact_title: "Əlaqə",
    contact_head_desc: "Gəlin təmiz, sürətli və peşəkar bir şey quraq.",
    contact_form_title: "Mesaj göndərin",
    label_name: "Ad",
    label_email: "E-poçt",
    label_message: "Mesaj",
    btn_send: "Göndər",
    btn_email_direct: "Birbaşa e-poçt yaz",
    contact_info_title: "Əlaqə məlumatı",
    btn_whatsapp: "WhatsApp ilə yaz",
    footer_subtitle: "Frontend Developer | Təlimçi",
    footer_top: "Yuxarı qalx",
    footer_rights: "Bütün hüquqlar qorunur.",
    typing_roles: ["Frontend Developer", "Təlimçi"]
  },
  en: {
    skip_link: "Skip to content",
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_order: "Order",
    nav_contact: "Contact",
    hero_available: "Available for freelance & full-time",
    hero_im: "I am",
    hero_desc: "As a modern, performance-oriented Frontend Developer, I focus on building web applications that prioritize user experience, clean code, and scalability. With experience in the React ecosystem, UI/UX principles, and real-world projects, I deliver effective technological solutions to business challenges.",
    btn_view_projects: "View Projects",
    btn_contact_me: "Contact Me",
    location: "Baku, Azerbaijan",
    card_role: "Frontend Developer",
    stat_projects: "Projects",
    stat_projects_desc: "Real-world Web Apps (LMS, E-commerce, Dashboard)",
    stat_teaching: "Teaching roles",
    stat_teaching_desc: "Instructor / Mentor (KiberKod, RisePath)",
    stat_availability: "Work mode",
    stat_availability_val: "Remote • Freelance • On-site",
    about_title: "About Me",
    about_head_desc: "Focused on building clean, responsive and high-performance interfaces with a modern, minimal and professional UI.",
    about_summary_title: "Professional Summary",
    about_summary_text: "I focus on building modern, minimal, and performance-oriented user interfaces, creating high-quality and user-centered web experiences. In Frontend development, I apply the React ecosystem, component-based architecture, and UI/UX principles to develop scalable and optimized solutions. My experience with real-world projects allows me to create products that are well-balanced from both a technical and design perspective.",
    highlight_ui: "Component-driven UI",
    highlight_ux: "Modern UX patterns",
    highlight_perf: "Performance-first",
    highlight_mentoring: "Mentoring & teaching",
    about_info_title: "Quick Info",
    info_title_key: "Title",
    info_title_val: "Frontend Developer | Instructor",
    info_location_key: "Location",
    info_email_key: "Email",
    info_phone_key: "Phone",
    about_langs_title: "Languages",
    lang_en: "English (B1)",
    lang_ru: "Russian (A2)",
    lang_tr: "Turkish (C1)",
    about_links_title: "Links",
    link_open: "Open",
    skills_title: "Skills",
    skills_head_desc: "Full skill set across frontend, UI/UX, backend basics, tooling and deployment.",
    skill_group_fe: "Frontend Development",
    skill_group_fe_desc: "Core frontend stack and application architecture.",
    skill_group_ui: "UI / UX & Styling",
    skill_group_ui_desc: "Modern styling workflows and UI engineering.",
    skill_group_be: "Backend Development",
    skill_group_be_desc: "Backend fundamentals for building and consuming APIs.",
    skill_group_db: "Database",
    skill_group_db_desc: "Data basics for real-world CRUD applications.",
    skill_group_tools: "Tools & Workflow",
    skill_group_tools_desc: "Daily tooling, debugging and quality practices.",
    skill_group_deploy: "Deployment & Hosting",
    skill_group_deploy_desc: "Shipping and maintaining production-ready sites.",
    skill_group_extra: "Extra Professional Skills",
    skill_group_extra_desc: "Engineering practices that improve quality and impact.",
    skills_word: "Skills",
    skill_count_12: "12",
    skill_count_9: "9",
    skill_count_6: "6",
    skill_count_4: "4",
    skill_count_8: "8",
    skill_count_3: "3",
    skill_perf_opt: "Performance Optimization",
    skill_a11y: "Web Accessibility (a11y)",
    skill_seo: "SEO Basics",
    skill_clean_code: "Clean Code Principles",
    skill_reusability: "Component Reusability",
    skill_problem_solving: "Problem Solving",
    exp_title: "Experience",
    exp_head_desc: "Professional roles focused on frontend development, mentoring and instruction.",
    role_instructor: "Frontend Instructor",
    role_dev: "Frontend Developer",
    role_mentor: "Frontend Mentor",
    company_label: "Company:",
    exp_date_1: "Oct 2025 - Present (8 months)",
    exp_date_2: "Sep 2025 - Present (9 months)",
    exp_date_3: "Jun 2025 - May 2026 (1 year)",
    exp_date_4: "May 2025 - Sep 2025 (5 months)",
    job_type_ft: "Full-time",
    job_loc_az: "Azerbaijan (On-site)",
    job_loc_baku: "Baku, Azerbaijan (On-site)",
    exp_desc_1: "Working as a Front-End Instructor, guiding students in HTML, CSS, JavaScript and React. Supporting them with practical projects.",
    exp_desc_2: "Delivering structured frontend training programs, mentoring students in modern web technologies and helping them build portfolio projects.",
    exp_desc_3: "Developing responsive and high-performance web applications using React.js and Next.js. Working with REST APIs and Redux.",
    exp_desc_4: "Mentored students in Front-End Development including HTML, CSS, JavaScript and React.",
    projects_title: "Projects",
    projects_head_desc: "Placeholder structure ready for your real projects. Replace images and links anytime.",
    order_title: "Order & Collaboration",
    proj_1_title: "SmartRent",
    proj_1_desc: "Modern car rental platform. Easy booking and management system.",
    proj_2_title: "Onlaynders.az",
    proj_2_desc: "Interactive computer lessons platform with certificate guarantee.",
    proj_3_title: "Medicare",
    proj_3_desc: "Patient and doctor appointment management system for medical centers.",
    proj_4_title: "BMPay",
    proj_4_desc: "Tax calculation and payment management dashboard.",
    proj_5_title: "CVBrain",
    proj_5_desc: "Platform for creating and managing professional CVs.",
    proj_6_title: "Aetc Academy",
    proj_6_desc: "Training platform that elevates engineering knowledge with real industrial experience.",
    btn_live: "Live Demo",
    btn_github: "GitHub",
    contact_title: "Contact",
    contact_head_desc: "Let’s build something clean, fast and professional.",
    contact_form_title: "Send a message",
    label_name: "Name",
    label_email: "Email",
    label_message: "Message",
    btn_send: "Send",
    btn_email_direct: "Email Directly",
    contact_info_title: "Contact info",
    btn_whatsapp: "Write on WhatsApp",
    footer_subtitle: "Frontend Developer | Instructor",
    footer_top: "Back to top",
    footer_rights: "All rights reserved.",
    typing_roles: ["Frontend Developer", "Instructor"]
  },
  ru: {
    skip_link: "Перейти к содержанию",
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_experience: "Опыт",
    nav_projects: "Проекты",
    nav_order: "Заказ",
    nav_contact: "Контакты",
    hero_available: "Доступен для фриланса и полной занятости",
    hero_im: "Я",
    hero_desc: "Как современный, ориентированный на производительность Frontend-разработчик, я специализируюсь на создании веб-приложений, в которых приоритет отдается пользовательскому опыту, чистому коду и масштабируемости. Имея опыт работы в экосистеме React, принципах UI/UX и реальных проектах, я предлагаю эффективные технологические решения для бизнес-задач.",
    btn_view_projects: "Посмотреть проекты",
    btn_contact_me: "Связаться со мной",
    location: "Баку, Азербайджан",
    card_role: "Frontend Developer",
    stat_projects: "Проекты",
    stat_projects_desc: "Реальные веб-приложения (LMS, E-commerce, Панели)",
    stat_teaching: "Опыт обучения",
    stat_teaching_desc: "Instructor / Mentor (KiberKod, RisePath)",
    stat_availability: "Режим работы",
    stat_availability_val: "Remote • Freelance • On-site",
    about_title: "Обо мне",
    about_head_desc: "Ориентирован на создание чистых, адаптивных и высокопроизводительных интерфейсов с современным и профессиональным UI.",
    about_summary_title: "Профессиональное резюме",
    about_summary_text: "Я специализируюсь на создании современных, минималистичных и ориентированных на производительность пользовательских интерфейсов, создавая высококачественный и ориентированный на пользователя веб-опыт. Во фронтенд-разработке я применяю экосистему React, компонентную архитектуру и принципы UI/UX для разработки масштабируемых и оптимизированных решений. Мой опыт работы над реальными проектами позволяет мне создавать продукты, сбалансированные как с технической, так и с дизайнерской точки зрения.",
    highlight_ui: "Компонентный UI",
    highlight_ux: "Современные UX паттерны",
    highlight_perf: "Приоритет производительности",
    highlight_mentoring: "Менторство и обучение",
    about_info_title: "Краткая информация",
    info_title_key: "Должность",
    info_title_val: "Frontend Developer | Преподаватель",
    info_location_key: "Локация",
    info_email_key: "Email",
    info_phone_key: "Телефон",
    about_langs_title: "Языки",
    lang_en: "Английский (B1)",
    lang_ru: "Русский (A2)",
    lang_tr: "Турецкий (C1)",
    about_links_title: "Ссылки",
    link_open: "Открыть",
    skills_title: "Навыки",
    skills_head_desc: "Полный набор навыков во фронтенде, UI/UX, основах бэкенда и развертывании.",
    skill_group_fe: "Frontend Разработка",
    skill_group_fe_desc: "Основной стек фронтенда и архитектура приложений.",
    skill_group_ui: "UI / UX и Стилизация",
    skill_group_ui_desc: "Современные рабочие процессы стилизации и UI инженерия.",
    skill_group_be: "Backend Разработка",
    skill_group_be_desc: "Основы бэкенда для создания и использования API.",
    skill_group_db: "Базы данных",
    skill_group_db_desc: "Основы данных для реальных CRUD приложений.",
    skill_group_tools: "Инструменты и процессы",
    skill_group_tools_desc: "Ежедневные инструменты, отладка и контроль качества.",
    skill_group_deploy: "Развертывание и хостинг",
    skill_group_deploy_desc: "Запуск и поддержка готовых сайтов.",
    skill_group_extra: "Доп. профессиональные навыки",
    skill_group_extra_desc: "Инженерные практики, повышающие качество и результат.",
    skills_word: "Навыков",
    skill_count_12: "12",
    skill_count_9: "9",
    skill_count_6: "6",
    skill_count_4: "4",
    skill_count_8: "8",
    skill_count_3: "3",
    skill_perf_opt: "Оптимизация производительности",
    skill_a11y: "Веб-доступность (a11y)",
    skill_seo: "Основы SEO",
    skill_clean_code: "Принципы чистого кода",
    skill_reusability: "Повторное использование компонентов",
    skill_problem_solving: "Решение задач",
    exp_title: "Опыт работы",
    exp_head_desc: "Профессиональные роли, ориентированные на фронтенд разработку и обучение.",
    role_instructor: "Frontend Преподаватель",
    role_dev: "Frontend Разработчик",
    role_mentor: "Frontend Ментор",
    company_label: "Компания:",
    exp_date_1: "Окт 2025 - Наст. время (8 месяцев)",
    exp_date_2: "Сен 2025 - Наст. время (9 месяцев)",
    exp_date_3: "Июн 2025 - Май 2026 (1 год)",
    exp_date_4: "Май 2025 - Сен 2025 (5 месяцев)",
    job_type_ft: "Полный рабочий день",
    job_loc_az: "Азербайджан (В офисе)",
    job_loc_baku: "Баку, Азербайджан (В офисе)",
    exp_desc_1: "Работаю преподавателем фронтенда, обучая студентов HTML, CSS, JavaScript и React. Помогаю с практическими проектами.",
    exp_desc_2: "Провожу структурированные программы обучения фронтенду, менторю студентов по современным веб-технологиям.",
    exp_desc_3: "Разработка адаптивных веб-приложений с использованием React.js и Next.js. Работа с REST API и Redux.",
    exp_desc_4: "Менторство студентов по фронтенд разработке, включая HTML, CSS, JavaScript и React.",
    projects_title: "Проекты",
    projects_head_desc: "Готовая структура для ваших реальных проектов. Меняйте изображения и ссылки в любое время.",
    order_title: "Заказ и Сотрудничество",
    proj_1_title: "SmartRent",
    proj_1_desc: "Современная платформа по аренде автомобилей. Удобная система бронирования и управления.",
    proj_2_title: "Onlaynders.az",
    proj_2_desc: "Платформа интерактивных компьютерных уроков с гарантией сертификата.",
    proj_3_title: "Medicare",
    proj_3_desc: "Система управления приемом пациентов и врачей для медицинских центров.",
    proj_4_title: "BMPay",
    proj_4_desc: "Панель управления расчетом налогов и платежами.",
    proj_5_title: "CVBrain",
    proj_5_desc: "Платформа для создания и управления профессиональными резюме.",
    proj_6_title: "Aetc Academy",
    proj_6_desc: "Обучающая платформа, повышающая инженерные знания благодаря реальному промышленному опыту.",
    btn_live: "Демо",
    btn_github: "GitHub",
    contact_title: "Контакты",
    contact_head_desc: "Давайте создадим что-то чистое, быстрое и профессиональное.",
    contact_form_title: "Отправить сообщение",
    label_name: "Имя",
    label_email: "Email",
    label_message: "Сообщение",
    btn_send: "Отправить",
    btn_email_direct: "Написать напрямую",
    contact_info_title: "Контактная информация",
    btn_whatsapp: "Написать в WhatsApp",
    footer_subtitle: "Frontend Developer | Преподаватель",
    footer_top: "Наверх",
    footer_rights: "Все права защищены.",
    typing_roles: ["Frontend Developer", "Преподаватель"]
  }
};

let currentLang = localStorage.getItem("portfolio-lang") || "az";
let typingTimeout = null;

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const currentLangDisplay = $("#current-lang");
  if (currentLangDisplay) {
    currentLangDisplay.textContent = lang.toUpperCase();
  }

  $$(".lang-option").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  // Update aria-labels and other attributes
  const nav = $(".nav");
  const toggle = $(".nav__toggle");
  if (nav && toggle) {
    const isOpen = nav.classList.contains("nav--open");
    toggle.setAttribute("aria-label", isOpen ? (lang === "az" ? "Menyunu bağla" : lang === "ru" ? "Закрыть меню" : "Close menu") : (lang === "az" ? "Menyunu aç" : lang === "ru" ? "Открыть меню" : "Open menu"));
  }

  document.documentElement.lang = lang;

  // Restart typing animation with new language roles
  if (typingTimeout) clearTimeout(typingTimeout);
  initTyping();
}

function initAOS() {
  if (!window.AOS) return;
  AOS.init({
    once: true,
    duration: 800,
    easing: "ease-out-cubic",
    disable: prefersReducedMotion,
  });
}

function initTyping() {
  const el = $("#typing-text");
  if (!el) return;

  const roles = translations[currentLang].typing_roles;
  if (prefersReducedMotion) {
    el.textContent = roles.join(" | ");
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const current = roles[roleIndex];
    const visible = current.slice(0, charIndex);
    el.textContent = visible;

    const baseSpeed = isDeleting ? 36 : 54;
    const jitter = Math.floor(Math.random() * 28);

    if (!isDeleting && charIndex < current.length) {
      charIndex += 1;
      typingTimeout = setTimeout(type, baseSpeed + jitter);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      typingTimeout = setTimeout(type, baseSpeed + jitter);
      return;
    }

    if (!isDeleting) {
      isDeleting = true;
      typingTimeout = setTimeout(type, 900);
      return;
    }

    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingTimeout = setTimeout(type, 260);
  };

  type();
}

function initNav() {
  const nav = $(".nav");
  const toggle = $(".nav__toggle");
  const menu = $("#nav-menu");
  const links = $$("[data-nav-link]");

  if (!nav || !toggle || !menu) return;

  const setOpen = (open) => {
    nav.classList.toggle("nav--open", open);
    toggle.setAttribute("aria-expanded", String(open));
    
    const label = open 
      ? (currentLang === "az" ? "Menyunu bağla" : currentLang === "ru" ? "Закрыть меню" : "Close menu")
      : (currentLang === "az" ? "Menyunu aç" : currentLang === "ru" ? "Открыть меню" : "Open menu");
    toggle.setAttribute("aria-label", label);
  };

  toggle.addEventListener("click", () => {
    const open = !nav.classList.contains("nav--open");
    setOpen(open);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("nav--open")) return;
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (nav.contains(target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    setOpen(false);
  });
}

function initActiveNav() {
  const navLinks = $$("[data-nav-link]");
  const sections = navLinks
    .map((a) => {
      const id = a.getAttribute("href")?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (sections.length === 0) return;

  const byId = new Map();
  navLinks.forEach((a) => {
    const id = a.getAttribute("href")?.slice(1) || "";
    byId.set(id, a);
  });

  const setActive = (id) => {
    navLinks.forEach((a) => a.classList.remove("is-active"));
    const active = byId.get(id);
    if (active) active.classList.add("is-active");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (!visible?.target?.id) return;
      setActive(visible.target.id);
    },
    {
      root: null,
      threshold: [0.2, 0.35, 0.5, 0.7],
    }
  );

  sections.forEach((s) => observer.observe(s));
}

function initToTop() {
  const btn = $("#to-top");
  if (!btn) return;

  const onScroll = () => {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

function initYear() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function initLang() {
  const switcher = $("#lang-switcher");
  const trigger = $("#lang-trigger");
  const options = $$(".lang-option");

  if (!switcher || !trigger) return;

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    switcher.classList.toggle("is-active");
  });

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        updateLanguage(lang);
      }
      switcher.classList.remove("is-active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) {
      switcher.classList.remove("is-active");
    }
  });

  // Initialize with saved or default language
  updateLanguage(currentLang);
}

function initContactForm() {
  const form = $("#contact-form");
  const hint = $("#form-hint");
  const submitBtn = form?.querySelector('button[type="submit"]');
  
  if (!form || !submitBtn) return;

  const setHint = (text, type = 'info') => {
    if (!hint) return;
    hint.textContent = text;
    hint.className = `form__hint ${type}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = $("#name")?.value?.trim() || "";
    const email = $("#email")?.value?.trim() || "";
    const message = $("#message")?.value?.trim() || "";

    if (!name || !email || !message) {
      const errorMsg = currentLang === "az" ? "Zəhmət olmasa bütün xanaları doldurun." : 
                      currentLang === "ru" ? "Пожалуйста, заполните все поля." : 
                      "Please fill in all fields.";
      setHint(errorMsg, 'error');
      return;
    }

    // Loading state
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === "az" ? "Göndərilir..." : 
                           currentLang === "ru" ? "Отправка..." : 
                           "Sending...";
    setHint("");

    const data = {
      name: name,
      email: email,
      message: message
    };

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setHint(currentLang === "az" ? "Mesajınız uğurla göndərildi!" : 
                currentLang === "ru" ? "Ваше сообщение успешно отправлено!" : 
                "Your message has been sent successfully!", 'success');
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          throw new Error(result.errors.map(error => error.message).join(", "));
        } else {
          throw new Error("Failed to send");
        }
      }
    } catch (error) {
      console.error("Submission Error:", error);
      let finalError = error.message === "Failed to fetch" 
        ? (currentLang === "az" ? "Şəbəkə xətası. Yenidən cəhd edin." : "Network error. Please try again.")
        : error.message;
      setHint(finalError, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

initAOS();
initNav();
initActiveNav();
initToTop();
initYear();
initLang();
initContactForm();

/**
 * Vercel Analytics Initialization
 * Bu hissə statistikaların Vercel tərəfindən izlənilməsini təmin edir.
 * index.html-dəki script ilə birlikdə işləyir.
 */
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

