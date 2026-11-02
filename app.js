/**
 * Octotech LL. Admin Core
 * TypeScript & Node.js Integrated Frontend Engine
 * 4-Language UI (AZ Primary, TR, RU, EN) + Real SEO Manager
 */

// 1. Full 4-Language Panel Translation Dictionary
const I18N = {
  az: {
    'sidebar.connectedSites': 'Bağlı Saytlar',
    'sidebar.addNewSite': 'Yeni Sayt İnteqrasiya Et',
    'sidebar.analyticsSection': 'Analitika & İcmal',
    'sidebar.contentSection': 'Məzmun & Resurslar',
    'sidebar.systemSection': 'Sistem & İdarəetmə',
    'nav.dashboard': 'Canlı İcmal',
    'nav.seoManager': 'Axtarış & SEO',
    'nav.records': 'Məlumat Bazası',
    'nav.media': 'Media Mərkəzi',
    'nav.localization': 'Lokalizasiya & Dillər',
    'nav.settings': 'Sistem Parametrləri',
    'topbar.quickSearch': 'Axtarış...',
    'topbar.recordsData': 'Qeydlər & Data',
    'media.uploadBtn': 'Fayl Yüklə',
    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Sayt tezliyi, SEO gücü, gündəlik unikal girişlər və qlobal status.',
    'dashboard.frequency': 'Sayt Tezliyi (Request/Dəq)',
    'dashboard.seoScore': 'SEO Gücü & İndekslənmə',
    'dashboard.dailyReach': 'Gündəlik Unikal Giriş',
    'dashboard.globalUptime': 'Qlobal Uptime & Edge',
    'dashboard.vsYesterday': 'dünənə nisbətən',
    'dashboard.seoStatusGood': 'Əla Səviyyə',
    'dashboard.noCritical': '(0 kritik xəta)',
    'dashboard.uniqueVisitors': 'unikal ziyarətçi',
    'dashboard.chartFreqTitle': 'Sayt Tezliyi & Gündəlik İstək Qrafiki',
    'dashboard.chartFreqDesc': 'Anlıq sorğu tezliyi və 200 OK nisbəti.',
    'dashboard.seoHealthTitle': 'SEO Sağlamlıq Skoru',
    'dashboard.recentEvents': 'Son Sinxronizasiya Əməliyyatları',
    'dashboard.viewAll': 'Hamısına Bax',
    'seo.title': 'SEO & Axtarış Mühərriki İdarəetməsi',
    'seo.subtitle': 'Meta başlıqlar, təsvirlər, canonical URL və Google axtarış önizləməsi (Real API).',
    'seo.saveChanges': 'Dəyişiklikləri Saxla',
    'seo.metaTitle': 'Səhifə Başlığı (Meta Title)',
    'seo.metaTitleTip': 'Tövsiyə olunan uzunluq: 50-60 simvol. Axtarış nəticəsində əsas başlıqdır.',
    'seo.metaDesc': 'Meta Təsvir (Description)',
    'seo.metaDescTip': 'Tövsiyə olunan uzunluq: 120-160 simvol. CTR üçün vacibdir.',
    'seo.canonical': 'Kanonik URL (Canonical URL)',
    'seo.keywords': 'Açar Sözlər (Keywords)',
    'seo.robotsHeading': 'Axtarış Botları & İndekslənmə (Robots)',
    'seo.robotsIndexLabel': 'Axtarış Mühərrikləri Səhifəni İndeksləsin (index)',
    'seo.robotsIndexDesc': 'Google və Yandex səhifəni axtarış bazasına əlavə edər.',
    'seo.robotsFollowLabel': 'Linkləri İzləsin (follow)',
    'seo.robotsFollowDesc': 'Səhifədəki daxili və xarici keçidləri izləməyə icazə verir.',
    'seo.ogHeading': 'OpenGraph & Sosial Şəbəkə Paylaşımı',
    'seo.ogTitle': 'Paylaşım Başlığı (og:title)',
    'seo.ogImage': 'Paylaşım Şəkli URL (og:image)',
    'seo.previewTitle': 'Google Axtarış Nəticəsi Önizləməsi',
    'seo.previewDesc': 'İstifadəçilər axtarış sistemlərində səhifənizi bu formada görəcəklər:',
    'seo.analysisTitle': 'Real-Time SEO Təhlili',
    'seo.titleCheck': 'Başlıq uzunluğu',
    'seo.descCheck': 'Təsvir dolğunluğu',
    'seo.canonicalCheck': 'Kanonik etiket',
    'loc.title': 'Çoxdilli Tərcümə Redaktoru',
    'loc.subtitle': 'Azərbaycan (Ana dil), Türk, Rus və İngilis dillərindəki açarları idarə edin.',
    'loc.exportJson': 'JSON İxrac Et',
    'loc.newKey': 'Yeni Açar Əlavə Et',
    'loc.targetLang': 'Hədəf Dil:',
    'loc.colKey': 'Açar (Key)',
    'loc.colSource': 'Ana Dil Mətni (AZ)',
    'loc.colTarget': 'Hədəf Tərcümə',
    'records.title': 'Məzmun & Canlı Qeydlər',
    'records.subtitle': 'Bütün saytların məzmununu mərkəzləşdirilmiş şəkildə idarə edin.',
    'records.newRecord': 'Yeni Qeyd Əlavə Et',
    'settings.subtitle': 'Sistem və API parametrləri.',
    'table.title': 'Başlıq',
    'table.source': 'Mənbə',
    'table.author': 'Müəllif / Tarix',
    'table.status': 'Status',
    'time.last24h': 'Son 24 Saat',
    'time.last7d': '7 Gün',
    'time.last30d': '30 Gün',
    'time.now': 'İndi'
  },
  tr: {
    'sidebar.connectedSites': 'Bağlı Siteler',
    'sidebar.addNewSite': 'Yeni Site Entegre Et',
    'sidebar.analyticsSection': 'Analitik & Genel Bakış',
    'sidebar.contentSection': 'İçerik & Kaynaklar',
    'sidebar.systemSection': 'Sistem & Yapılandırma',
    'nav.dashboard': 'Canlı Genel Bakış',
    'nav.seoManager': 'Arama & SEO',
    'nav.records': 'Veri Kayıtları',
    'nav.media': 'Medya Merkezi',
    'nav.localization': 'Yerelleştirme & Çeviri',
    'nav.settings': 'Sistem Tercihleri',
    'topbar.quickSearch': 'Arama...',
    'topbar.recordsData': 'Kayıtlar & Veri',
    'media.uploadBtn': 'Dosya Yükle',
    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Site frekansı, SEO gücü, günlük tekil erişim ve genel durum.',
    'dashboard.frequency': 'Site Frekansı (İstek/Dk)',
    'dashboard.seoScore': 'SEO Gücü & İndekslenme',
    'dashboard.dailyReach': 'Günlük Tekil Erişim',
    'dashboard.globalUptime': 'Global Uptime & Edge',
    'dashboard.vsYesterday': 'düne göre',
    'dashboard.seoStatusGood': 'Mükemmel Seviye',
    'dashboard.noCritical': '(0 kritik hata)',
    'dashboard.uniqueVisitors': 'tekil ziyaretçi',
    'dashboard.chartFreqTitle': 'Site Frekansı & Günlük İstek Grafiği',
    'dashboard.chartFreqDesc': 'Anlık istek frekansı ve 200 OK oranı.',
    'dashboard.seoHealthTitle': 'SEO Sağlık Skoru',
    'dashboard.recentEvents': 'Son Senkronize Edilen İşlemler',
    'dashboard.viewAll': 'Tümünü Gör',
    'seo.title': 'SEO & Arama Motoru Yönetimi',
    'seo.subtitle': 'Meta başlıklar, açıklamalar, canonical URL ve Google önizlemesi (Gerçek API).',
    'seo.saveChanges': 'Değişiklikleri Kaydet',
    'seo.metaTitle': 'Sayfa Başlığı (Meta Title)',
    'seo.metaTitleTip': 'Önerilen uzunluk: 50-60 karakter. Arama sonucunda görünen ana başlıktır.',
    'seo.metaDesc': 'Meta Açıklama (Description)',
    'seo.metaDescTip': 'Önerilen uzunluk: 120-160 karakter. Tıklama oranı (CTR) için kritiktir.',
    'seo.canonical': 'Kanonik URL (Canonical URL)',
    'seo.keywords': 'Anahtar Kelimeler (Keywords)',
    'seo.robotsHeading': 'Arama Botları & İndekslenme (Robots)',
    'seo.robotsIndexLabel': 'Arama Motorları Sayfayı İndekslesin (index)',
    'seo.robotsIndexDesc': 'Google ve Yandex sayfayı arama veritabanına ekler.',
    'seo.robotsFollowLabel': 'Bağlantıları Takip Etsin (follow)',
    'seo.robotsFollowDesc': 'Sayfadaki iç ve dış bağlantıları takip etmeye izin verir.',
    'seo.ogHeading': 'OpenGraph & Sosyal Paylaşım',
    'seo.ogTitle': 'Paylaşım Başlığı (og:title)',
    'seo.ogImage': 'Paylaşım Resmi URL (og:image)',
    'seo.previewTitle': 'Google Arama Sonucu Önizlemesi',
    'seo.previewDesc': 'Kullanıcılar arama sonuçlarında sayfanızı bu şekilde görecek:',
    'seo.analysisTitle': 'Gerçek Zamanlı SEO Analizi',
    'seo.titleCheck': 'Başlık uzunluğu',
    'seo.descCheck': 'Açıklama doluluğu',
    'seo.canonicalCheck': 'Kanonik etiket',
    'loc.title': 'Çok Dilli Çeviri Editörü',
    'loc.subtitle': 'Azerbaycan (Ana dil), Türkçe, Rusça ve İngilizce çevirileri yönetin.',
    'loc.exportJson': 'JSON İndir',
    'loc.newKey': 'Yeni Anahtar Ekle',
    'loc.targetLang': 'Hedef Dil:',
    'loc.colKey': 'Anahtar (Key)',
    'loc.colSource': 'Kaynak Metin (AZ)',
    'loc.colTarget': 'Hedef Çeviri',
    'records.title': 'İçerik & Canlı Kayıtlar',
    'records.subtitle': 'Tüm sitelerin içeriklerini tek merkezden yönetin.',
    'records.newRecord': 'Yeni İçerik Ekle',
    'settings.subtitle': 'Sistem ve API parametreleri.',
    'table.title': 'Başlık',
    'table.source': 'Kaynak',
    'table.author': 'Yazar / Tarih',
    'table.status': 'Durum',
    'time.last24h': 'Son 24 Saat',
    'time.last7d': '7 Gün',
    'time.last30d': '30 Gün',
    'time.now': 'Şimdi'
  },
  ru: {
    'sidebar.connectedSites': 'Подключенные сайты',
    'sidebar.addNewSite': 'Интегрировать новый сайт',
    'sidebar.analyticsSection': 'Аналитика и Обзор',
    'sidebar.contentSection': 'Контент и Ресурсы',
    'sidebar.systemSection': 'Система и Управление',
    'nav.dashboard': 'Главный обзор',
    'nav.seoManager': 'Поиск и SEO',
    'nav.records': 'База записей',
    'nav.media': 'Медиа-центр',
    'nav.localization': 'Локализация и языки',
    'nav.settings': 'Системные параметры',
    'topbar.quickSearch': 'Поиск...',
    'topbar.recordsData': 'Записи и Данные',
    'media.uploadBtn': 'Загрузить файл',
    'dashboard.title': 'Панель',
    'dashboard.subtitle': 'Частота запросов, SEO-показатели, суточный охват и аптайм.',
    'dashboard.frequency': 'Частота запросов (Req/мин)',
    'dashboard.seoScore': 'SEO-рейтинг и индексация',
    'dashboard.dailyReach': 'Суточный охват',
    'dashboard.globalUptime': 'Глобальный Uptime',
    'dashboard.vsYesterday': 'по сравнению со вчера',
    'dashboard.seoStatusGood': 'Отличный уровень',
    'dashboard.noCritical': '(0 критических ошибок)',
    'dashboard.uniqueVisitors': 'уникальных посетителей',
    'dashboard.chartFreqTitle': 'График частоты и запросов',
    'dashboard.chartFreqDesc': 'Частота запросов в реальном времени и доля 200 OK.',
    'dashboard.seoHealthTitle': 'Индекс здоровья SEO',
    'dashboard.recentEvents': 'Последние синхронизации',
    'dashboard.viewAll': 'Смотреть все',
    'seo.title': 'Управление поисковой оптимизацией (SEO)',
    'seo.subtitle': 'Мета-теги, описания, canonical URL и превью в Google (Real API).',
    'seo.saveChanges': 'Сохранить изменения',
    'seo.metaTitle': 'Заголовок страницы (Meta Title)',
    'seo.metaTitleTip': 'Рекомендуется: 50-60 символов. Главный заголовок в поиске.',
    'seo.metaDesc': 'Мета-описание (Description)',
    'seo.metaDescTip': 'Рекомендуется: 120-160 символов. Важно для CTR.',
    'seo.canonical': 'Канонический URL (Canonical)',
    'seo.keywords': 'Ключевые слова (Keywords)',
    'seo.robotsHeading': 'Поисковые роботы и индексация (Robots)',
    'seo.robotsIndexLabel': 'Разрешить индексацию (index)',
    'seo.robotsIndexDesc': 'Google и Яндекс добавляют страницу в поиск.',
    'seo.robotsFollowLabel': 'Переходить по ссылкам (follow)',
    'seo.robotsFollowDesc': 'Разрешает роботам переходить по внутренним ссылкам.',
    'seo.ogHeading': 'OpenGraph и шеринг в соцсетях',
    'seo.ogTitle': 'Заголовок соцсетей (og:title)',
    'seo.ogImage': 'URL изображения (og:image)',
    'seo.previewTitle': 'Предпросмотр в выдаче Google',
    'seo.previewDesc': 'Так страница выглядит для пользователей в результатах поиска:',
    'seo.analysisTitle': 'Анализ SEO в реальном времени',
    'seo.titleCheck': 'Длина заголовка',
    'seo.descCheck': 'Длина описания',
    'seo.canonicalCheck': 'Канонический тег',
    'loc.title': 'Многоязычный редактор переводов',
    'loc.subtitle': 'Управление переводами на Азербайджанском, Турецком, Русском и Английском.',
    'loc.exportJson': 'Экспорт JSON',
    'loc.newKey': 'Добавить ключ',
    'loc.targetLang': 'Целевой язык:',
    'loc.colKey': 'Ключ (Key)',
    'loc.colSource': 'Исходный текст (AZ)',
    'loc.colTarget': 'Перевод',
    'records.title': 'Контент и записи',
    'records.subtitle': 'Единое управление записями всех подключенных сайтов.',
    'records.newRecord': 'Создать запись',
    'settings.subtitle': 'Системные параметры и API ключи.',
    'table.title': 'Заголовок',
    'table.source': 'Источник',
    'table.author': 'Автор / Время',
    'table.status': 'Статус',
    'time.last24h': 'За 24 часа',
    'time.last7d': '7 дней',
    'time.last30d': '30 дней',
    'time.now': 'Сейчас'
  },
  en: {
    'sidebar.connectedSites': 'Connected Sites',
    'sidebar.addNewSite': 'Integrate New Site',
    'sidebar.analyticsSection': 'Analytics & Overview',
    'sidebar.contentSection': 'Content & Assets',
    'sidebar.systemSection': 'System & Infrastructure',
    'nav.dashboard': 'Live Overview',
    'nav.seoManager': 'Search & SEO',
    'nav.records': 'Data Records',
    'nav.media': 'Media Assets',
    'nav.localization': 'Localization & i18n',
    'nav.settings': 'System Settings',
    'topbar.quickSearch': 'Search...',
    'topbar.recordsData': 'Records & Data',
    'media.uploadBtn': 'Upload File',
    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Site frequency, SEO power, daily unique reach, and global edge health.',
    'dashboard.frequency': 'Site Frequency (Req/Min)',
    'dashboard.seoScore': 'SEO Power & Indexing',
    'dashboard.dailyReach': 'Daily Unique Reach',
    'dashboard.globalUptime': 'Global Uptime & Edge',
    'dashboard.vsYesterday': 'vs yesterday',
    'dashboard.seoStatusGood': 'Excellent Level',
    'dashboard.noCritical': '(0 critical errors)',
    'dashboard.uniqueVisitors': 'unique visitors',
    'dashboard.chartFreqTitle': 'Site Frequency & Request Wave',
    'dashboard.chartFreqDesc': 'Real-time CDN request rate and 200 OK throughput.',
    'dashboard.seoHealthTitle': 'SEO Health Score',
    'dashboard.recentEvents': 'Recent Synced Operations',
    'dashboard.viewAll': 'View All',
    'seo.title': 'SEO & Search Engine Manager',
    'seo.subtitle': 'Meta titles, descriptions, canonical URLs, and Google SERP preview (Real API).',
    'seo.saveChanges': 'Save Changes',
    'seo.metaTitle': 'Page Title (Meta Title)',
    'seo.metaTitleTip': 'Recommended length: 50-60 characters. Main headline in search results.',
    'seo.metaDesc': 'Meta Description',
    'seo.metaDescTip': 'Recommended length: 120-160 characters. Vital for CTR.',
    'seo.canonical': 'Canonical URL',
    'seo.keywords': 'Keywords',
    'seo.robotsHeading': 'Search Robots & Indexing (Robots)',
    'seo.robotsIndexLabel': 'Allow Search Engines to Index (index)',
    'seo.robotsIndexDesc': 'Allows Google and search engines to index this page.',
    'seo.robotsFollowLabel': 'Follow Links (follow)',
    'seo.robotsFollowDesc': 'Allows crawlers to discover and follow links on this page.',
    'seo.ogHeading': 'OpenGraph & Social Media Sharing',
    'seo.ogTitle': 'Social Title (og:title)',
    'seo.ogImage': 'Social Image URL (og:image)',
    'seo.previewTitle': 'Google Search Result Preview',
    'seo.previewDesc': 'This is how searchers will see your site in Google results:',
    'seo.analysisTitle': 'Real-Time SEO Diagnostics',
    'seo.titleCheck': 'Title length',
    'seo.descCheck': 'Description fullness',
    'seo.canonicalCheck': 'Canonical tag',
    'loc.title': 'Multi-Language Localization Editor',
    'loc.subtitle': 'Manage translation keys for Azerbaijani (Native), Turkish, Russian, and English.',
    'loc.exportJson': 'Export JSON',
    'loc.newKey': 'Add New Key',
    'loc.targetLang': 'Target Language:',
    'loc.colKey': 'Key',
    'loc.colSource': 'Source Text (AZ)',
    'loc.colTarget': 'Target Translation',
    'records.title': 'Content & Live Records',
    'records.subtitle': 'Centralized management across all connected web platforms.',
    'records.newRecord': 'Add New Record',
    'settings.subtitle': 'System preferences & API credentials.',
    'table.title': 'Title',
    'table.source': 'Source',
    'table.author': 'Author / Time',
    'table.status': 'Status',
    'time.last24h': 'Last 24 Hours',
    'time.last7d': '7 Days',
    'time.last30d': '30 Days',
    'time.now': 'Now'
  }
};

// 2. Global State
const state = {
  uiLanguage: 'az', // Default Primary: Azerbaijani
  activeTabId: 'dashboard',
  sidebarCollapsed: false,
  siteConfig: null,
  seo: {},
  translations: [],
  records: [],
  targetLang: 'tr',
  selectedModule: 'all',
  media: [],
  uploadConfig: null,
  tabs: [
    { id: 'dashboard', title: 'Canlı İcmal', icon: 'grid', closable: false },
    { id: 'seo-manager', title: 'Axtarış & SEO', icon: 'search', closable: true },
    { id: 'data-grid', title: 'Məlumat Bazası', icon: 'database', closable: true },
    { id: 'media', title: 'Media Mərkəzi', icon: 'image', closable: true },
    { id: 'localization', title: 'Lokalizasiya & Dillər', icon: 'globe', closable: true }
  ]
};

// 3. DOM Cache
const elements = {
  sidebar: document.getElementById('sidebar'),
  sidebarToggle: document.getElementById('sidebarToggle'),
  workspaceTabs: document.getElementById('workspaceTabs'),
  contentCanvas: document.getElementById('contentCanvas'),
  currentBreadcrumb: document.getElementById('currentBreadcrumb'),
  currentSiteName: document.getElementById('currentSiteName'),
  settingSiteName: document.getElementById('settingSiteName'),
  settingSiteDomain: document.getElementById('settingSiteDomain'),
  settingSiteType: document.getElementById('settingSiteType'),
  settingSiteEndpoint: document.getElementById('settingSiteEndpoint'),
  saveSiteSettingsBtn: document.getElementById('saveSiteSettingsBtn'),
  cmdModal: document.getElementById('cmdModal'),
  cmdSearchInput: document.getElementById('cmdSearchInput'),
  cmdTrigger: document.getElementById('cmdTrigger'),
  recordsTbody: document.getElementById('recordsTbody'),
  recordSearchInput: document.getElementById('recordSearchInput'),
  recentEventsTbody: document.getElementById('recentEventsTbody'),
  // SEO Elements
  seoTitleInput: document.getElementById('seoTitleInput'),
  seoDescInput: document.getElementById('seoDescInput'),
  seoCanonicalInput: document.getElementById('seoCanonicalInput'),
  seoKeywordsInput: document.getElementById('seoKeywordsInput'),
  seoRobotsIndexCheck: document.getElementById('seoRobotsIndexCheck'),
  seoRobotsFollowCheck: document.getElementById('seoRobotsFollowCheck'),
  seoOgTitleInput: document.getElementById('seoOgTitleInput'),
  seoOgImageInput: document.getElementById('seoOgImageInput'),
  saveSeoBtn: document.getElementById('saveSeoBtn'),
  titleCharCount: document.getElementById('titleCharCount'),
  descCharCount: document.getElementById('descCharCount'),
  serpTitlePreview: document.getElementById('serpTitlePreview'),
  serpSnippetPreview: document.getElementById('serpSnippetPreview'),
  serpUrlPreview: document.getElementById('serpUrlPreview'),
  seoRadialVal: document.getElementById('seoRadialVal'),
  valSeoScore: document.getElementById('valSeoScore'),
  seoCheckTitle: document.getElementById('seoCheckTitle'),
  seoCheckDesc: document.getElementById('seoCheckDesc'),
  // Localization Elements
  locCardsContainer: document.getElementById('locCardsContainer'),
  locSearchInput: document.getElementById('locSearchInput'),
  targetLangLabel: document.getElementById('targetLangLabel'),
  // Media Elements
  mediaFileInput: document.getElementById('mediaFileInput'),
  mediaDropzone: document.getElementById('mediaDropzone'),
  mediaGridContainer: document.getElementById('mediaGridContainer'),
  mediaSearchInput: document.getElementById('mediaSearchInput'),
  mediaTotalCount: document.getElementById('mediaTotalCount'),
  mediaUploadLimitHint: document.getElementById('mediaUploadLimitHint'),
  // Multer Settings Elements
  settingMulterSize: document.getElementById('settingMulterSize'),
  settingMulterMime: document.getElementById('settingMulterMime'),
  settingMulterDir: document.getElementById('settingMulterDir'),
  saveMulterSettingsBtn: document.getElementById('saveMulterSettingsBtn'),
  // Wizard Elements
  setupWizardModal: document.getElementById('setupWizardModal'),
  wizBrandName: document.getElementById('wizBrandName'),
  wizBrandDomain: document.getElementById('wizBrandDomain'),
  wizBrandIndustry: document.getElementById('wizBrandIndustry'),
  wizBrandEngine: document.getElementById('wizBrandEngine'),
  wizAdminName: document.getElementById('wizAdminName'),
  wizAdminEmail: document.getElementById('wizAdminEmail'),
  wizAdminPassword: document.getElementById('wizAdminPassword'),
  wizAdminRole: document.getElementById('wizAdminRole'),
  wizSystemLang: document.getElementById('wizSystemLang'),
  wizMulterSize: document.getElementById('wizMulterSize'),
  wizMulterMime: document.getElementById('wizMulterMime')
};

// SVG Icon Helper
function getSvg(name) {
  switch (name) {
    case 'grid':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`;
    case 'search':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
    case 'globe':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    case 'database':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
    case 'image':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
    case 'layers':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
    case 'settings':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;
    case 'code':
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    default:
      return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

// Dairesel Bayrak SVG Kütüphanesi (React Circular Flags standartı)
function getCircleFlagSvg(lang) {
  switch (lang) {
    case 'az':
      return `
        <svg class="circle-flag" viewBox="0 0 512 512">
          <mask id="main-mask-az"><circle cx="256" cy="256" r="256" fill="#fff"/></mask>
          <g mask="url(#main-mask-az)">
            <path fill="#00b5e2" d="M0 0h512v170.7H0z"/>
            <path fill="#ef3340" d="M0 170.7h512v170.6H0z"/>
            <path fill="#509e2f" d="M0 341.3h512V512H0z"/>
            <circle cx="230" cy="256" r="54" fill="#fff"/>
            <circle cx="242" cy="256" r="44" fill="#ef3340"/>
            <polygon fill="#fff" points="266,234 272,246 284,244 278,254 286,264 274,264 270,276 264,266 252,270 256,258 248,250 260,250"/>
          </g>
        </svg>
      `;
    case 'tr':
      return `
        <svg class="circle-flag" viewBox="0 0 512 512">
          <mask id="main-mask-tr"><circle cx="256" cy="256" r="256" fill="#fff"/></mask>
          <g mask="url(#main-mask-tr)">
            <circle cx="256" cy="256" r="256" fill="#e30a17"/>
            <circle cx="206" cy="256" r="82" fill="#fff"/>
            <circle cx="224" cy="256" r="66" fill="#e30a17"/>
            <polygon fill="#fff" points="274,226 280,246 300,246 284,258 290,278 274,266 258,278 264,258 248,246 268,246"/>
          </g>
        </svg>
      `;
    case 'ru':
      return `
        <svg class="circle-flag" viewBox="0 0 512 512">
          <mask id="main-mask-ru"><circle cx="256" cy="256" r="256" fill="#fff"/></mask>
          <g mask="url(#main-mask-ru)">
            <path fill="#f5f5f5" d="M0 0h512v170.7H0z"/>
            <path fill="#0039a6" d="M0 170.7h512v170.6H0z"/>
            <path fill="#d52b1e" d="M0 341.3h512V512H0z"/>
          </g>
        </svg>
      `;
    case 'en':
    default:
      return `
        <svg class="circle-flag" viewBox="0 0 512 512">
          <mask id="main-mask-en"><circle cx="256" cy="256" r="256" fill="#fff"/></mask>
          <g mask="url(#main-mask-en)">
            <path fill="#012169" d="M0 0h512v512H0z"/>
            <path stroke="#fff" stroke-width="60" d="M0 0l512 512M512 0L0 512"/>
            <path stroke="#c8102e" stroke-width="38" d="M0 0l512 512M512 0L0 512"/>
            <path stroke="#fff" stroke-width="100" d="M256 0v512M0 256h512"/>
            <path stroke="#c8102e" stroke-width="60" d="M256 0v512M0 256h512"/>
          </g>
        </svg>
      `;
  }
}

// 4. Panel UI Language Switcher Engine (Floating Flag Circle)
function setPanelLanguage(lang) {
  if (!I18N[lang]) return;
  state.uiLanguage = lang;

  // Update floating trigger button flag
  const activeFlagContainer = document.getElementById('activeFloatingFlag');
  if (activeFlagContainer) {
    activeFlagContainer.innerHTML = getCircleFlagSvg(lang);
  }

  // Update menu active item
  document.querySelectorAll('.floating-lang-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-ui-lang') === lang);
  });

  // Translate all [data-i18n] nodes in the entire app
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Dynamically update open workspace tab titles according to the new language
  const tabKeyMap = {
    'dashboard': 'nav.dashboard',
    'seo-manager': 'nav.seoManager',
    'data-grid': 'nav.records',
    'media': 'nav.media',
    'localization': 'nav.localization',
    'settings': 'nav.settings'
  };

  state.tabs.forEach(tab => {
    const k = tabKeyMap[tab.id];
    if (k && dict[k]) {
      tab.title = dict[k];
    }
  });

  renderWorkspaceTabs();
}

// Floating flag click & popup logic
const floatingLangWrapper = document.getElementById('floatingLangWrapper');
const floatingFlagBtn = document.getElementById('floatingFlagBtn');

if (floatingFlagBtn) {
  floatingFlagBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    floatingLangWrapper.classList.toggle('open');
  });
}

document.querySelectorAll('.floating-lang-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-ui-lang');
    setPanelLanguage(lang);
    if (floatingLangWrapper) floatingLangWrapper.classList.remove('open');
    showToast(`Panel Dili: ${lang.toUpperCase()}`);
  });
});

document.addEventListener('click', (e) => {
  if (floatingLangWrapper && !floatingLangWrapper.contains(e.target)) {
    floatingLangWrapper.classList.remove('open');
  }
});

// 5. Workspace Multi-Tab Bar Engine
function renderWorkspaceTabs() {
  elements.workspaceTabs.innerHTML = '';
  
  state.tabs.forEach(tab => {
    const tabEl = document.createElement('button');
    tabEl.className = `tab-btn ${tab.id === state.activeTabId ? 'active' : ''}`;
    tabEl.innerHTML = `
      ${getSvg(tab.icon)}
      <span>${tab.title}</span>
      ${tab.closable ? `<span class="tab-close" data-tab-id="${tab.id}" title="Bağla">&times;</span>` : ''}
    `;

    tabEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-close')) {
        closeTab(tab.id);
      } else {
        activateTab(tab.id);
      }
    });

    elements.workspaceTabs.appendChild(tabEl);
  });

  const current = state.tabs.find(t => t.id === state.activeTabId);
  if (current && elements.currentBreadcrumb) {
    elements.currentBreadcrumb.textContent = current.title;
  }

  // Smooth zero-lag view activation
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `view-${state.activeTabId}`);
  });

  // Sync sidebar active item
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(nav => {
    nav.classList.toggle('active', nav.getAttribute('data-target-tab') === state.activeTabId);
  });
}

function activateTab(tabId) {
  if (state.activeTabId === tabId) return;
  state.activeTabId = tabId;
  renderWorkspaceTabs();
}

function openTab(tabDef) {
  const existing = state.tabs.find(t => t.id === tabDef.id);
  if (!existing) {
    state.tabs.push(tabDef);
  }
  state.activeTabId = tabDef.id;
  renderWorkspaceTabs();
}

function closeTab(tabId) {
  const index = state.tabs.findIndex(t => t.id === tabId);
  if (index === -1) return;
  
  state.tabs.splice(index, 1);
  if (state.activeTabId === tabId) {
    const nextTab = state.tabs[Math.max(0, index - 1)];
    state.activeTabId = nextTab ? nextTab.id : 'dashboard';
  }
  renderWorkspaceTabs();
}

elements.sidebarToggle.addEventListener('click', () => {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  elements.sidebar.classList.toggle('collapsed', state.sidebarCollapsed);
});

document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('data-target-tab');
    const title = item.querySelector('.nav-label').textContent;
    const icon = item.getAttribute('data-tab-icon') || 'grid';
    openTab({ id: targetId, title, icon, closable: targetId !== 'dashboard' });
  });
});

// 6. REAL API: SEO MANAGER (SHOPIFY GRADE)
async function fetchSeo() {
  try {
    const res = await fetch('/api/seo');
    const result = await res.json();
    if (result.success && result.data) {
      state.seo = result.data;
      populateSeoForm(result.data, result.computedScore);
    }
  } catch (err) {
    console.error('Failed to fetch SEO config from API', err);
  }
}

function populateSeoForm(seo, score = 95) {
  elements.seoTitleInput.value = seo.title || '';
  elements.seoDescInput.value = seo.description || '';
  elements.seoCanonicalInput.value = seo.canonical || '';
  elements.seoKeywordsInput.value = seo.keywords || '';
  elements.seoRobotsIndexCheck.checked = seo.robotsIndex !== false;
  elements.seoRobotsFollowCheck.checked = seo.robotsFollow !== false;
  elements.seoOgTitleInput.value = seo.ogTitle || '';
  elements.seoOgImageInput.value = seo.ogImage || '';

  if (elements.seoRadialVal) elements.seoRadialVal.textContent = score;
  if (elements.valSeoScore) elements.valSeoScore.textContent = score;

  updateSerpPreview();
}

function updateSerpPreview() {
  const title = elements.seoTitleInput.value.trim() || 'Octotech LL. | Səhifə Başlığı';
  const desc = elements.seoDescInput.value.trim() || 'Axtarış nəticəsində görünəcək təsvir mətni burada yer alacaq...';
  const canonical = elements.seoCanonicalInput.value.trim() || 'https://mystore.az';

  elements.serpTitlePreview.textContent = title;
  elements.serpSnippetPreview.textContent = desc;
  elements.serpUrlPreview.textContent = canonical;

  // Character counters
  const titleLen = elements.seoTitleInput.value.length;
  elements.titleCharCount.textContent = `${titleLen} / 60`;
  elements.titleCharCount.className = `char-counter ${titleLen >= 50 && titleLen <= 60 ? 'good' : titleLen > 60 ? 'warning' : ''}`;

  const descLen = elements.seoDescInput.value.length;
  elements.descCharCount.textContent = `${descLen} / 160`;
  elements.descCharCount.className = `char-counter ${descLen >= 120 && descLen <= 160 ? 'good' : descLen > 160 ? 'warning' : ''}`;

  // Live Diagnostics update
  if (elements.seoCheckTitle) {
    elements.seoCheckTitle.textContent = titleLen >= 40 && titleLen <= 65 ? `Optimal (${titleLen} simvol)` : `Düzəliş lazımdır (${titleLen} simvol)`;
  }
  if (elements.seoCheckDesc) {
    elements.seoCheckDesc.textContent = descLen >= 100 && descLen <= 165 ? `Dolğun (${descLen} simvol)` : `Düzəliş lazımdır (${descLen} simvol)`;
  }
}

// Live typing updates for Google preview
[elements.seoTitleInput, elements.seoDescInput, elements.seoCanonicalInput].forEach(inp => {
  if (inp) inp.addEventListener('input', updateSerpPreview);
});

window.saveSeoConfig = async function() {
  const payload = {
    title: elements.seoTitleInput.value.trim(),
    description: elements.seoDescInput.value.trim(),
    canonical: elements.seoCanonicalInput.value.trim(),
    keywords: elements.seoKeywordsInput.value.trim(),
    robotsIndex: elements.seoRobotsIndexCheck.checked,
    robotsFollow: elements.seoRobotsFollowCheck.checked,
    ogTitle: elements.seoOgTitleInput.value.trim(),
    ogImage: elements.seoOgImageInput.value.trim()
  };

  elements.saveSeoBtn.classList.add('loading');
  try {
    const res = await fetch('/api/seo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.success) {
      showToast('SEO parametrləri uğurla yadda saxlanıldı!');
      fetchSeo(); // refresh score
    }
  } catch (err) {
    showToast('Xəta baş verdi, yenidən cəhd edin.');
  } finally {
    elements.saveSeoBtn.classList.remove('loading');
  }
};

// 7. REAL API: MODULE-BASED LOCALIZATION STUDIO (EDITOR.JS SUPPORT)
async function fetchTranslations() {
  try {
    const res = await fetch('/api/translations');
    const result = await res.json();
    if (result.success && result.data) {
      state.translations = result.data;
      updateModuleCounts();
      renderLocalizationStudio();
    }
  } catch (err) {
    console.error('Failed to fetch translations', err);
  }
}

function updateModuleCounts() {
  const counts = { all: state.translations.length, common: 0, marketing: 0, products: 0, checkout: 0, system: 0 };
  state.translations.forEach(t => {
    const m = t.module || 'common';
    if (counts[m] !== undefined) counts[m]++;
  });

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setEl('countAll', counts.all);
  setEl('countCommon', counts.common);
  setEl('countMarketing', counts.marketing);
  setEl('countProducts', counts.products);
  setEl('countCheckout', counts.checkout);
  setEl('countSystem', counts.system);
}

function renderLocalizationStudio(list = state.translations) {
  if (!elements.locCardsContainer) return;
  if (elements.targetLangLabel) {
    elements.targetLangLabel.textContent = state.targetLang.toUpperCase();
  }

  // Filter by selected module
  let filtered = list;
  if (state.selectedModule !== 'all') {
    filtered = filtered.filter(t => (t.module || 'common') === state.selectedModule);
  }

  if (filtered.length === 0) {
    elements.locCardsContainer.innerHTML = `
      <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:32px; text-align:center; color:var(--text-dim); font-size:12.5px;">
        Bu modulda heç bir tərcümə açarı tapılmadı.
      </div>
    `;
    return;
  }

  elements.locCardsContainer.innerHTML = filtered.map(item => {
    const currentVal = item[state.targetLang] || '';
    const moduleName = item.module || 'common';
    const isRich = item.type === 'rich';

    return `
      <div class="loc-block-card" id="card-${item.key.replace(/\./g, '_')}">
        <div class="loc-block-header">
          <div class="loc-block-key-group">
            <span class="loc-key-badge">${item.key}</span>
            <span class="loc-module-tag">${moduleName}</span>
            <span class="loc-type-tag">${isRich ? 'Modular Rich Block' : 'Inline Text'}</span>
          </div>
          <button class="btn btn-secondary" style="padding:2px 8px; font-size:10.5px;" onclick="copyTranslationKey('${item.key}')">Açarı Kopyala</button>
        </div>

        <div class="loc-block-body">
          <!-- Left: AZ Native Reference -->
          <div class="loc-source-box">
            <div>
              <div class="loc-source-label">Ana Dil Mətni (AZ)</div>
              <div>${item.az || ''}</div>
            </div>
          </div>

          <!-- Right: Target Language Modular Editor -->
          <div class="loc-target-box">
            <div class="loc-target-label-row">
              <span class="loc-target-label">Hədəf Dil Tərcüməsi (${state.targetLang.toUpperCase()})</span>
              <span class="loc-save-status" id="status-${item.key.replace(/\./g, '_')}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Avtomatik Saxlanılır</span>
              </span>
            </div>

            ${isRich ? `
              <div class="modular-editor-container" contenteditable="true" data-key="${item.key}" placeholder="${state.targetLang.toUpperCase()} zəngin mətnini daxil edin...">${currentVal}</div>
            ` : `
              <input type="text" class="loc-input-field" data-key="${item.key}" value="${currentVal}" placeholder="${state.targetLang.toUpperCase()} tərcüməsini daxil edin...">
            `}
          </div>
        </div>

        <div class="loc-block-footer">
          <div class="loc-param-pills">
            <span style="color:var(--text-dim); margin-right:4px;">Parametrlər:</span>
            <span class="loc-param-pill" onclick="insertParam('${item.key}', '{{count}}')">+ {{count}}</span>
            <span class="loc-param-pill" onclick="insertParam('${item.key}', '{{price}}')">+ {{price}}</span>
            <span class="loc-param-pill" onclick="insertParam('${item.key}', '{{user}}')">+ {{user}}</span>
          </div>
          <div style="font-family:var(--font-mono); font-size:10px;">ID: ${item.key}</div>
        </div>
      </div>
    `;
  }).join('');

  // Attach auto-save event listeners
  elements.locCardsContainer.querySelectorAll('.loc-input-field, .modular-editor-container').forEach(input => {
    const saveHandler = async (e) => {
      const key = input.getAttribute('data-key');
      const val = input.tagName === 'INPUT' ? input.value.trim() : input.innerText.trim();
      
      const payload = { key };
      payload[state.targetLang] = val;

      const statusEl = document.getElementById(`status-${key.replace(/\./g, '_')}`);
      if (statusEl) {
        statusEl.innerHTML = `<span style="color:var(--text-dim);">Saxlanılır...</span>`;
      }

      try {
        await fetch('/api/translations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (statusEl) {
          statusEl.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Saxlanıldı</span>
          `;
        }
      } catch (err) {
        if (statusEl) {
          statusEl.innerHTML = `<span style="color:var(--danger-base);">Xəta baş verdi</span>`;
        }
      }
    };

    input.addEventListener('change', saveHandler);
    input.addEventListener('blur', saveHandler);
  });
}

// Module Navigator Click
document.querySelectorAll('.loc-module-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.loc-module-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedModule = btn.getAttribute('data-module');
    renderLocalizationStudio();
  });
});

window.insertParam = function(key, param) {
  const cardId = `card-${key.replace(/\./g, '_')}`;
  const card = document.getElementById(cardId);
  if (!card) return;
  const input = card.querySelector('.loc-input-field, .modular-editor-container');
  if (input) {
    if (input.tagName === 'INPUT') {
      input.value += (input.value ? ' ' : '') + param;
      input.dispatchEvent(new Event('change'));
    } else {
      input.innerText += (input.innerText ? ' ' : '') + param;
      input.dispatchEvent(new Event('blur'));
    }
    showToast(`${param} parametri əlavə olundu`);
  }
};

window.copyTranslationKey = function(key) {
  navigator.clipboard.writeText(key);
  showToast(`Açar kopyalandı: ${key}`);
};

document.querySelectorAll('.lang-selector-group .lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-selector-group .lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.targetLang = btn.getAttribute('data-lang');
    renderLocalizationStudio();
  });
});

if (elements.locSearchInput) {
  elements.locSearchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = state.translations.filter(t => 
      t.key.toLowerCase().includes(q) || 
      (t.az && t.az.toLowerCase().includes(q)) || 
      (t[state.targetLang] && t[state.targetLang].toLowerCase().includes(q))
    );
    renderLocalizationStudio(filtered);
  });
}

window.addNewTranslationKey = async function() {
  const newKey = prompt('Yeni tərcümə açarı (məs: product.addToCart):');
  if (!newKey) return;
  const newAz = prompt('Ana Dil Mətni (Azərbaycan):') || '';
  const newModule = prompt('Modul adı (common / marketing / products / checkout / system):', 'common') || 'common';

  const payload = { key: newKey, module: newModule, type: 'text', az: newAz, tr: '', ru: '', en: '' };
  try {
    await fetch('/api/translations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    fetchTranslations();
    showToast(`Yeni açar əlavə olundu: ${newKey}`);
  } catch (err) {
    showToast('Xəta baş verdi');
  }
};

window.exportTranslations = function() {
  const exportData = {};
  state.translations.forEach(t => {
    exportData[t.key] = t[state.targetLang] || t.az;
  });
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `translations_${state.targetLang}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`${state.targetLang.toUpperCase()} JSON faylı ixrac olundu.`);
};

// 8. REAL API: RECORDS & EVENTS
async function fetchRecords() {
  try {
    const res = await fetch('/api/records');
    const result = await res.json();
    if (result.success && result.data) {
      state.records = result.data;
      renderRecords(result.data);
      renderRecentEvents(result.data);
    }
  } catch (err) {
    console.error('Failed to fetch records', err);
  }
}

function renderRecords(recordsToRender = state.records) {
  if (!elements.recordsTbody) return;
  if (recordsToRender.length === 0) {
    elements.recordsTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:32px; color:var(--text-dim);">Qeyd tapılmadı.</td></tr>`;
    return;
  }

  elements.recordsTbody.innerHTML = recordsToRender.map(rec => {
    const statusText = rec.status === 'draft' ? 'Qaralama' : rec.status === 'synced' ? 'Sinxron' : 'Yayında';
    return `
      <tr>
        <td style="font-family:var(--font-mono); font-size:12px; color:var(--text-dim);">${rec.id}</td>
        <td style="font-weight:500;">${rec.title}</td>
        <td style="color:var(--text-muted); font-size:12.5px;">${rec.source}</td>
        <td style="color:var(--text-muted); font-size:12px;">${rec.author} &bull; ${rec.date}</td>
        <td><span class="status-indicator ${rec.status}"><span class="status-dot"></span>${statusText}</span></td>
      </tr>
    `;
  }).join('');
}

function renderRecentEvents(records = state.records) {
  if (!elements.recentEventsTbody) return;
  elements.recentEventsTbody.innerHTML = records.slice(0, 3).map(rec => {
    const statusText = rec.status === 'draft' ? 'Qaralama' : rec.status === 'synced' ? 'Sinxron' : 'Yayında';
    return `
      <tr>
        <td style="font-family:var(--font-mono); font-size:12px; color:var(--text-dim);">${rec.id}</td>
        <td style="font-weight:500;">${rec.title}</td>
        <td style="color:var(--text-muted); font-size:12.5px;">${rec.source}</td>
        <td style="color:var(--text-muted); font-size:12px;">${rec.author} &bull; ${rec.date}</td>
        <td><span class="status-indicator ${rec.status}"><span class="status-dot"></span>${statusText}</span></td>
      </tr>
    `;
  }).join('');
}

if (elements.recordSearchInput) {
  elements.recordSearchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = state.records.filter(r => 
      r.title.toLowerCase().includes(q) || 
      r.id.toLowerCase().includes(q) || 
      r.source.toLowerCase().includes(q)
    );
    renderRecords(filtered);
  });
}

window.showNewRecordDialog = async function() {
  const title = prompt('Qeydin başlığını daxil edin:');
  if (!title) return;

  try {
    await fetch('/api/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        source: 'Octotech Admin Panel',
        author: 'Admin',
        status: 'published'
      })
    });
    fetchRecords();
    showToast('Yeni məzmun qeydi əlavə olundu!');
  } catch (err) {
    showToast('Xəta baş verdi');
  }
};

// 9. REAL API: SITES DROPDOWN
// 9. REAL API: SINGLE SITE CONFIGURATION (ADMIN CONTROLLED)
async function fetchSiteConfig() {
  try {
    const res = await fetch('/api/site');
    const result = await res.json();
    if (result.success && result.data) {
      state.siteConfig = result.data;
      if (elements.currentSiteName) {
        elements.currentSiteName.textContent = result.data.name;
      }
      if (elements.settingSiteName) elements.settingSiteName.value = result.data.name || '';
      if (elements.settingSiteDomain) elements.settingSiteDomain.value = result.data.domain || '';
      if (elements.settingSiteType) elements.settingSiteType.value = result.data.type || 'Next.js + Headless Engine';
      if (elements.settingSiteEndpoint) elements.settingSiteEndpoint.value = result.data.endpoint || '';
      if (elements.serpUrlPreview && result.data.domain) {
        elements.serpUrlPreview.textContent = result.data.domain;
      }
    }
  } catch (err) {
    console.error('Failed to fetch site config', err);
  }
}

window.saveSiteConfig = async function() {
  const payload = {
    name: elements.settingSiteName ? elements.settingSiteName.value.trim() : '',
    domain: elements.settingSiteDomain ? elements.settingSiteDomain.value.trim() : '',
    type: elements.settingSiteType ? elements.settingSiteType.value : '',
    endpoint: elements.settingSiteEndpoint ? elements.settingSiteEndpoint.value.trim() : ''
  };

  if (!payload.name) {
    showToast('Zəhmət olmasa sayt adını qeyd edin.');
    return;
  }

  try {
    const res = await fetch('/api/site', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.success && result.data) {
      state.siteConfig = result.data;
      if (elements.currentSiteName) {
        elements.currentSiteName.textContent = result.data.name;
      }
      if (elements.serpUrlPreview && result.data.domain) {
        elements.serpUrlPreview.textContent = result.data.domain;
      }
      showToast('Sayt tənzimləmələri uğurla saxlanıldı!');
    }
  } catch (err) {
    showToast('Xəta: Tənzimləmələr saxlanıla bilmədi');
  }
};

// 9.1 REAL API: MEDIA LIBRARY (MULTER POWERED)
async function fetchMedia() {
  try {
    const res = await fetch('/api/media');
    const result = await res.json();
    if (result.success && result.data) {
      state.media = result.data;
      renderMediaGrid();
    }
  } catch (err) {
    console.error('Failed to fetch media', err);
  }
}

function renderMediaGrid() {
  if (!elements.mediaGridContainer) return;
  const query = (elements.mediaSearchInput ? elements.mediaSearchInput.value : '').toLowerCase().trim();
  const filtered = state.media.filter(m => 
    (m.originalName && m.originalName.toLowerCase().includes(query)) || 
    (m.filename && m.filename.toLowerCase().includes(query))
  );

  if (elements.mediaTotalCount) {
    elements.mediaTotalCount.textContent = `${filtered.length} fayl`;
  }

  if (filtered.length === 0) {
    elements.mediaGridContainer.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:36px; color:var(--text-dim); font-size:12.5px;">
        Heç bir media faylı tapılmadı. Yuxarıdan fayl yükləyə bilərsiniz.
      </div>
    `;
    return;
  }

  elements.mediaGridContainer.innerHTML = filtered.map(item => {
    const isImg = item.mimeType && item.mimeType.startsWith('image/');
    const sizeKB = item.size > 1024 * 1024 
      ? (item.size / (1024 * 1024)).toFixed(1) + ' MB' 
      : Math.round(item.size / 1024) + ' KB';
    const dateFormatted = new Date(item.createdAt).toLocaleDateString();

    return `
      <div class="media-card" data-media-id="${item.id}">
        <div class="media-thumb-wrap">
          ${isImg 
            ? `<img src="${item.url}" alt="${item.originalName}" class="media-thumb-img" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'media-thumb-fallback\\'>Fayl</div>';">`
            : `<div class="media-thumb-fallback">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
               </div>`
          }
        </div>
        <div class="media-info">
          <div class="media-name" title="${item.originalName}">${item.originalName}</div>
          <div class="media-meta">
            <span>${sizeKB}</span>
            <span>${dateFormatted}</span>
          </div>
        </div>
        <div class="media-actions">
          <button class="media-action-btn" onclick="copyMediaUrl('${item.url}')" title="URL Kopyala">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Kopyala</span>
          </button>
          <button class="media-action-btn delete-btn" onclick="deleteMediaFile('${item.id}')" title="Sil">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            <span>Sil</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

async function uploadFileViaMulter(file) {
  if (!file) return;
  const formData = new FormData();
  formData.append('file', file);

  try {
    showToast('Fayl yüklənir...');
    const res = await fetch('/api/media/upload', {
      method: 'POST',
      body: formData
    });
    const result = await res.json();
    if (result.success && result.data) {
      showToast(`${file.name} uğurla yükləndi!`);
      fetchMedia();
    } else {
      showToast(result.error || 'Yükləmə xətası baş verdi');
    }
  } catch (err) {
    showToast('Yükləmə zamanı şəbəkə xətası');
  }
}

window.deleteMediaFile = async function(id) {
  if (!confirm('Bu faylı silmək istədiyinizə əminsiniz?')) return;
  try {
    const res = await fetch(`/api/media/${id}`, { method: 'DELETE' });
    const result = await res.json();
    if (result.success) {
      showToast('Fayl silindi');
      fetchMedia();
    } else {
      showToast(result.error || 'Silinmə xətası');
    }
  } catch (err) {
    showToast('Silinmə zamanı xəta baş verdi');
  }
};

window.copyMediaUrl = function(url) {
  const fullUrl = window.location.origin + url;
  navigator.clipboard.writeText(fullUrl);
  showToast('Media URL panoya kopyalandı');
};

// Drag & Drop Listeners
if (elements.mediaDropzone) {
  elements.mediaDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    elements.mediaDropzone.classList.add('dragover');
  });
  elements.mediaDropzone.addEventListener('dragleave', () => {
    elements.mediaDropzone.classList.remove('dragover');
  });
  elements.mediaDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    elements.mediaDropzone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        uploadFileViaMulter(files[i]);
      }
    }
  });
}

if (elements.mediaFileInput) {
  elements.mediaFileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        uploadFileViaMulter(files[i]);
      }
      elements.mediaFileInput.value = '';
    }
  });
}

if (elements.mediaSearchInput) {
  elements.mediaSearchInput.addEventListener('input', () => {
    renderMediaGrid();
  });
}

// 9.2 REAL API: MULTER UPLOAD SETTINGS
async function fetchUploadConfig() {
  try {
    const res = await fetch('/api/settings/upload');
    const result = await res.json();
    if (result.success && result.data) {
      state.uploadConfig = result.data;
      if (elements.settingMulterSize) elements.settingMulterSize.value = result.data.maxFileSizeMB;
      if (elements.settingMulterMime) elements.settingMulterMime.value = result.data.allowedMimeTypes;
      if (elements.settingMulterDir) elements.settingMulterDir.value = result.data.uploadDir;
      if (elements.mediaUploadLimitHint) {
        elements.mediaUploadLimitHint.textContent = `Multer: Maks ${result.data.maxFileSizeMB} MB`;
      }
    }
  } catch (err) {
    console.error('Failed to fetch upload config', err);
  }
}

window.saveUploadConfig = async function() {
  const size = elements.settingMulterSize ? Number(elements.settingMulterSize.value) : 15;
  const mime = elements.settingMulterMime ? elements.settingMulterMime.value.trim() : '';
  const dir = elements.settingMulterDir ? elements.settingMulterDir.value.trim() : 'uploads';

  try {
    const res = await fetch('/api/settings/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        maxFileSizeMB: size,
        allowedMimeTypes: mime,
        uploadDir: dir
      })
    });
    const result = await res.json();
    if (result.success && result.data) {
      state.uploadConfig = result.data;
      if (elements.mediaUploadLimitHint) {
        elements.mediaUploadLimitHint.textContent = `Multer: Maks ${result.data.maxFileSizeMB} MB`;
      }
      showToast('Multer tənzimləmələri saxlanıldı!');
    } else {
      showToast(result.error || 'Tənzimləmə xətası');
    }
  } catch (err) {
    showToast('Tənzimləmələri saxlayarkən xəta baş verdi');
  }
};

// 9.3 ONBOARDING WIZARD ("SİZİ TANIYAQ")
let currentWizardStep = 1;

async function checkSetupStatus() {
  try {
    const res = await fetch('/api/setup');
    const result = await res.json();
    if (result.success && result.data) {
      const { setup, site, admin, uploadConfig } = result.data;
      if (elements.wizBrandName && site.name) elements.wizBrandName.value = site.name;
      
      // Auto-detect domain from active host and lock it
      const currentOrigin = window.location.origin || (window.location.protocol + '//' + window.location.host);
      if (elements.wizBrandDomain) {
        elements.wizBrandDomain.value = currentOrigin;
        elements.wizBrandDomain.setAttribute('readonly', 'true');
      }

      if (elements.wizBrandEngine && site.type) elements.wizBrandEngine.value = site.type;
      if (elements.wizAdminName && admin.fullName) elements.wizAdminName.value = admin.fullName;
      if (elements.wizAdminEmail && admin.email) elements.wizAdminEmail.value = admin.email;
      if (elements.wizAdminRole && admin.role) elements.wizAdminRole.value = admin.role;
      if (elements.wizMulterSize && uploadConfig.maxFileSizeMB) elements.wizMulterSize.value = uploadConfig.maxFileSizeMB;
      if (elements.wizMulterMime && uploadConfig.allowedMimeTypes) elements.wizMulterMime.value = uploadConfig.allowedMimeTypes;

      isSetupCompleted = !!(setup && setup.completed);
      if (!isSetupCompleted) {
        openSetupWizard(true);
      }
    }
  } catch (err) {
    console.error('Failed to check setup status', err);
  }
}

let isSetupCompleted = false;

window.openSetupWizard = function(force = false) {
  currentWizardStep = 1;
  updateWizardStepView(1);
  
  // Ensure domain is dynamically locked to active host
  const currentOrigin = window.location.origin || (window.location.protocol + '//' + window.location.host);
  if (elements.wizBrandDomain) {
    elements.wizBrandDomain.value = currentOrigin;
    elements.wizBrandDomain.setAttribute('readonly', 'true');
  }

  if (elements.setupWizardModal) {
    elements.setupWizardModal.classList.add('open');
  }
};

window.closeSetupWizard = function() {
  if (!isSetupCompleted) {
    showToast('Quraşdırma məcburidir. Zəhmət olmasa kartları tamamlayın.');
    return;
  }
  if (elements.setupWizardModal) {
    elements.setupWizardModal.classList.remove('open');
  }
};

window.wizardNextStep = function(targetStep) {
  if (currentWizardStep === 1) {
    const name = elements.wizBrandName ? elements.wizBrandName.value.trim() : '';
    const domain = elements.wizBrandDomain ? elements.wizBrandDomain.value.trim() : '';
    if (!name || !domain) {
      showToast('Zəhmət olmasa marka adını və domeni daxil edin.');
      return;
    }
  } else if (currentWizardStep === 2) {
    const adminName = elements.wizAdminName ? elements.wizAdminName.value.trim() : '';
    const email = elements.wizAdminEmail ? elements.wizAdminEmail.value.trim() : '';
    if (!adminName || !email) {
      showToast('Zəhmət olmasa admin adı və e-poçtunu daxil edin.');
      return;
    }
  }

  currentWizardStep = targetStep;
  updateWizardStepView(targetStep);
};

window.wizardPrevStep = function(targetStep) {
  currentWizardStep = targetStep;
  updateWizardStepView(targetStep);
};

window.wizardGoToStep = function(targetStep) {
  if (targetStep === currentWizardStep) return;
  if (targetStep > currentWizardStep) {
    // Cannot skip: validate current step before proceeding to next
    wizardNextStep(currentWizardStep + 1);
  } else {
    wizardPrevStep(targetStep);
  }
};

function updateWizardStepView(step) {
  const card1 = document.getElementById('gameCard1');
  const card2 = document.getElementById('gameCard2');
  const card3 = document.getElementById('gameCard3');

  // Clear existing animation classes
  [card1, card2, card3].forEach(card => {
    if (!card) return;
    card.classList.remove('is-active', 'is-underneath-1', 'is-underneath-2', 'is-discarded-left', 'is-discarded-deep-left');
  });

  // Assign card deck states according to the active step ("Oyun kartları çevrilmə mexanikası")
  if (step === 1) {
    if (card1) card1.classList.add('is-active');
    if (card2) card2.classList.add('is-underneath-1');
    if (card3) card3.classList.add('is-underneath-2');
  } else if (step === 2) {
    if (card1) card1.classList.add('is-discarded-left'); // Sol tepeye çevrilsin!
    if (card2) card2.classList.add('is-active');        // Altından növbəti kart çıxsın!
    if (card3) card3.classList.add('is-underneath-1');
  } else if (step === 3) {
    if (card1) card1.classList.add('is-discarded-deep-left');
    if (card2) card2.classList.add('is-discarded-left'); // Sol tepeye çevrilsin!
    if (card3) card3.classList.add('is-active');        // Altından növbəti kart çıxsın!
  }
}

window.submitSetupWizard = async function() {
  const currentOrigin = window.location.origin || (window.location.protocol + '//' + window.location.host);
  const payload = {
    site: {
      name: elements.wizBrandName ? elements.wizBrandName.value.trim() : 'Octotech Store',
      domain: currentOrigin,
      type: elements.wizBrandEngine ? elements.wizBrandEngine.value : 'Next.js + Headless Engine',
      endpoint: currentOrigin + '/api/v1'
    },
    admin: {
      fullName: elements.wizAdminName ? elements.wizAdminName.value.trim() : 'Super Admin',
      email: elements.wizAdminEmail ? elements.wizAdminEmail.value.trim() : 'admin@mystore.az',
      role: elements.wizAdminRole ? elements.wizAdminRole.value : 'Super Admin',
      password: elements.wizAdminPassword ? elements.wizAdminPassword.value.trim() : undefined
    },
    uploadConfig: {
      maxFileSizeMB: elements.wizMulterSize ? Number(elements.wizMulterSize.value) || 20 : 20,
      allowedMimeTypes: elements.wizMulterMime ? elements.wizMulterMime.value.trim() : 'image/jpeg,image/png,image/webp,image/svg+xml,application/pdf',
      uploadDir: 'uploads'
    },
    industry: elements.wizBrandIndustry ? elements.wizBrandIndustry.value : 'E-ticarət & Onlayn Mağaza'
  };

  try {
    const res = await fetch('/api/setup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.success && result.data) {
      // Apply chosen UI language
      if (elements.wizSystemLang) {
        setPanelLanguage(elements.wizSystemLang.value);
      }

      // Update brand name in top-left sidebar
      if (elements.currentSiteName) {
        elements.currentSiteName.textContent = result.data.site.name;
      }
      if (elements.serpUrlPreview && result.data.site.domain) {
        elements.serpUrlPreview.textContent = result.data.site.domain;
      }

      // Update settings inputs
      if (elements.settingSiteName) elements.settingSiteName.value = result.data.site.name;
      if (elements.settingSiteDomain) elements.settingSiteDomain.value = result.data.site.domain;
      if (elements.settingSiteType) elements.settingSiteType.value = result.data.site.type;
      if (elements.settingSiteEndpoint) elements.settingSiteEndpoint.value = result.data.site.endpoint;

      // Update multer inputs
      if (elements.settingMulterSize) elements.settingMulterSize.value = result.data.uploadConfig.maxFileSizeMB;
      if (elements.settingMulterMime) elements.settingMulterMime.value = result.data.uploadConfig.allowedMimeTypes;
      if (elements.mediaUploadLimitHint) {
        elements.mediaUploadLimitHint.textContent = `Multer: Maks ${result.data.uploadConfig.maxFileSizeMB} MB`;
      }

      isSetupCompleted = true;
      closeSetupWizard();
      showToast(`Xoş gəldiniz! "${result.data.site.name}" üçün sistem hazırlandı.`);
    } else {
      showToast(result.error || 'Quraşdırma zamanı xəta baş verdi');
    }
  } catch (err) {
    showToast('Quraşdırma server xətası');
  }
};

// 10. Toast Notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.background = '#0f172a';
  toast.style.color = '#ffffff';
  toast.style.padding = '9px 14px';
  toast.style.borderRadius = '6px';
  toast.style.fontSize = '12.5px';
  toast.style.zIndex = '10000';
  toast.style.boxShadow = '0 6px 18px rgba(15, 23, 42, 0.16)';
  toast.style.transition = 'all 160ms ease';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(6px)';
    setTimeout(() => toast.remove(), 160);
  }, 2200);
}

// 11. Command Palette (Cmd + K)
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    toggleCommandModal();
  }
  if (e.key === 'Escape' && elements.cmdModal.classList.contains('open')) {
    toggleCommandModal(false);
  }
});

if (elements.cmdTrigger) {
  elements.cmdTrigger.addEventListener('click', () => toggleCommandModal(true));
}

elements.cmdModal.addEventListener('click', (e) => {
  if (e.target === elements.cmdModal) toggleCommandModal(false);
});

function toggleCommandModal(forceOpen) {
  const shouldOpen = forceOpen !== undefined ? forceOpen : !elements.cmdModal.classList.contains('open');
  elements.cmdModal.classList.toggle('open', shouldOpen);
  if (shouldOpen) {
    elements.cmdSearchInput.value = '';
    elements.cmdSearchInput.focus();
  }
}

document.querySelectorAll('.command-item').forEach(item => {
  item.addEventListener('click', () => {
    const tabId = item.getAttribute('data-tab');
    const title = item.getAttribute('data-title');
    const icon = tabId === 'seo-manager' ? 'search' 
      : tabId === 'localization' ? 'globe' 
      : tabId === 'data-grid' ? 'database' 
      : tabId === 'media' ? 'image'
      : tabId === 'settings' ? 'settings' 
      : 'grid';
    openTab({ id: tabId, title, icon, closable: true });
    toggleCommandModal(false);
  });
});

window.copySnippet = function(elementId) {
  const codeEl = document.getElementById(elementId);
  if (codeEl) {
    navigator.clipboard.writeText(codeEl.innerText);
    showToast('Kod panoya kopyalandı.');
  }
};

// 12. Initialize App
renderWorkspaceTabs();
setPanelLanguage('az'); // Azerbaijani as default primary
fetchSiteConfig();
fetchSeo();
fetchTranslations();
fetchRecords();
fetchMedia();
fetchUploadConfig();
checkSetupStatus();
