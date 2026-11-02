import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Database, Download, Palette, Compass } from 'lucide-react';
import { 
  UiLanguage, 
  TabItem, 
  SiteConfig, 
  SeoConfig, 
  TranslationItem, 
  RecordItem, 
  MediaItem, 
  MulterConfig 
} from './types';
import { DICTIONARIES } from './i18n';
import { COLOR_THEMES, getInitialTheme, applyTheme } from './theme';
import { Sidebar } from './components/Sidebar';
import { TabsBar } from './components/TabsBar';
import { OnboardingWizard } from './components/OnboardingWizard';
import { FloatingFlagSelector } from './components/FloatingFlagSelector';
import { CommandPalette } from './components/CommandPalette';
import { ThemeSelectorModal } from './components/ThemeSelectorModal';
import { InteractiveTutorial } from './components/InteractiveTutorial';

import { DashboardView } from './views/DashboardView';
import { SeoManagerView } from './views/SeoManagerView';
import { LocalizationView } from './views/LocalizationView';
import { MediaView } from './views/MediaView';
import { DataRecordsView } from './views/DataRecordsView';
import { SettingsView } from './views/SettingsView';

const LANG_STORAGE_KEY = 'octotech_admin_lang';
const SIDEBAR_STORAGE_KEY = 'octotech_admin_sidebar_collapsed';
const TAB_STORAGE_KEY = 'octotech_admin_active_tab';

const getInitialLang = (): UiLanguage => {
  if (typeof window === 'undefined') return 'az';
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved && (saved === 'az' || saved === 'tr' || saved === 'ru' || saved === 'en')) {
    return saved as UiLanguage;
  }
  return 'az';
};

const getInitialSidebarCollapsed = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';
};

const getInitialActiveTab = (): string => {
  if (typeof window === 'undefined') return 'dashboard';
  return localStorage.getItem(TAB_STORAGE_KEY) || 'dashboard';
};

export const App: React.FC = () => {
  const [uiLang, setUiLang] = useState<UiLanguage>(getInitialLang);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(getInitialSidebarCollapsed);
  const [activeTabId, setActiveTabId] = useState<string>(getInitialActiveTab);
  const [cmdOpen, setCmdOpen] = useState(false);

  // Theme state
  const [currentTheme, setCurrentTheme] = useState<string>(getInitialTheme);
  const [themeModalOpen, setThemeModalOpen] = useState(false);

  // Azerbaijani Interactive Tutorial state (first visit auto-detect)
  const [tutorialOpen, setTutorialOpen] = useState(false);

  // Data states
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [seo, setSeo] = useState<SeoConfig>({
    title: 'Octotech LL. | Rəsmi Mağaza',
    description: 'Ən son texnologiya və innovativ həllər.',
    canonical: 'http://localhost:3000',
    keywords: 'elektronika, satish, zemanet',
    robotsIndex: true,
    robotsFollow: true,
    ogTitle: 'Octotech LL.',
    ogDescription: 'Rəsmi Satış və Zəmanət Mərkəzi',
    ogImage: '',
    sitemapUrl: 'http://localhost:3000/sitemap.xml',
    lastUpdated: new Date().toISOString()
  });
  const [translations, setTranslations] = useState<TranslationItem[]>([]);
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [multerConfig, setMulterConfig] = useState<MulterConfig | null>(null);

  // Setup onboarding modal state
  const [wizardOpen, setWizardOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Admin user & Session lock state
  const [adminUser, setAdminUser] = useState<{ fullName: string; email: string; role?: string }>({
    fullName: 'Admin',
    email: 'admin@octotech.az',
    role: 'Super Admin'
  });
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [lockPassword, setLockPassword] = useState<string>('');

  const t = DICTIONARIES[uiLang] || DICTIONARIES.az;

  const [tabs, setTabs] = useState<TabItem[]>([
    { id: 'dashboard', title: 'Canlı İcmal', icon: 'dashboard', closable: false },
    { id: 'seo-manager', title: 'Axtarış & SEO', icon: 'search', closable: true },
    { id: 'data-grid', title: 'Məlumat Bazası', icon: 'database', closable: true },
    { id: 'media', title: 'Media Mərkəzi', icon: 'image', closable: true },
    { id: 'localization', title: 'Lokalizasiya & Dillər', icon: 'globe', closable: true },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Sync active theme to DOM and persistence
  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  // First visit check: auto-launch Azerbaijani interactive tutorial
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed = localStorage.getItem('octotech_tutorial_completed');
      if (!completed) {
        const timer = setTimeout(() => {
          setTutorialOpen(true);
        }, 350);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    const themeName = COLOR_THEMES.find(t => t.id === themeId)?.name || themeId;
    showToast(`Tema tətbiq edildi: ${themeName}`);
  };

  // Sync tab titles on language change
  useEffect(() => {
    const titleMap: Record<string, string> = {
      dashboard: t['nav.dashboard'] || 'Canlı İcmal',
      'seo-manager': t['nav.seoManager'] || 'Axtarış & SEO',
      'data-grid': t['nav.records'] || 'Məlumat Bazası',
      media: t['nav.media'] || 'Media Mərkəzi',
      localization: t['nav.localization'] || 'Lokalizasiya & Dillər',
      settings: t['nav.settings'] || 'Sistem Parametrləri',
    };

    setTabs(prev => prev.map(tab => ({
      ...tab,
      title: titleMap[tab.id] || tab.title
    })));
  }, [uiLang]);

  // Initial Data Fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check setup status
        const setupRes = await fetch('/api/setup');
        const setupData = await setupRes.json();
        if (setupData.success) {
          if (!setupData.data.setup?.completed) {
            setWizardOpen(true);
          }
          if (setupData.data.site) setSiteConfig(setupData.data.site);
          if (setupData.data.uploadConfig) setMulterConfig(setupData.data.uploadConfig);
          if (setupData.data.admin) setAdminUser(setupData.data.admin);
        }

        // Fetch SEO
        const seoRes = await fetch('/api/seo');
        const seoData = await seoRes.json();
        if (seoData.success && seoData.data) setSeo(seoData.data);

        // Fetch Translations
        const transRes = await fetch('/api/translations');
        const transData = await transRes.json();
        if (transData.success && transData.data) setTranslations(transData.data);

        // Fetch Records
        const recRes = await fetch('/api/records');
        const recData = await recRes.json();
        if (recData.success && recData.data) setRecords(recData.data);

        // Fetch Media
        const mediaRes = await fetch('/api/media');
        const mediaData = await mediaRes.json();
        if (mediaData.success && mediaData.data) setMedia(mediaData.data);

        // Fetch Upload Config
        const upRes = await fetch('/api/settings/upload');
        const upData = await upRes.json();
        if (upData.success && upData.data) setMulterConfig(upData.data);
      } catch (err) {
        console.error('Initial data fetch error:', err);
      }
    };

    fetchData();
  }, []);

  // Keyboard shortcut Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectLang = (lang: UiLanguage) => {
    setUiLang(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next));
      return next;
    });
  };

  const handleActivateTab = (id: string) => {
    setActiveTabId(id);
    localStorage.setItem(TAB_STORAGE_KEY, id);
  };

  const openTab = (id: string, title: string, icon: string) => {
    const existing = tabs.find(t => t.id === id);
    if (!existing) {
      setTabs(prev => [...prev, { id, title, icon, closable: id !== 'dashboard' }]);
    }
    handleActivateTab(id);
  };

  const closeTab = (id: string) => {
    const idx = tabs.findIndex(t => t.id === id);
    if (idx === -1) return;
    const nextTabs = tabs.filter(t => t.id !== id);
    setTabs(nextTabs);
    if (activeTabId === id) {
      const fallback = nextTabs[Math.max(0, idx - 1)] || nextTabs[0];
      if (fallback) handleActivateTab(fallback.id);
    }
  };

  // API Mutators
  const handleSaveSeo = async (updatedSeo: SeoConfig) => {
    try {
      const res = await fetch('/api/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSeo)
      });
      const data = await res.json();
      if (data.success) {
        setSeo(data.data);
        showToast('SEO parametrləri yeniləndi');
      }
    } catch {
      showToast('Xəta baş verdi');
    }
  };

  const handleSaveTranslation = async (item: TranslationItem) => {
    try {
      const res = await fetch('/api/translations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      const data = await res.json();
      if (data.success) {
        setTranslations(prev => prev.map(t => t.key === item.key ? item : t));
        showToast('Tərcümə yadda saxlanıldı');
      }
    } catch {
      showToast('Xəta baş verdi');
    }
  };

  const handleAddTranslation = async (item: TranslationItem) => {
    try {
      const res = await fetch('/api/translations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      const data = await res.json();
      if (data.success) {
        setTranslations(prev => [item, ...prev]);
        showToast('Yeni açar əlavə olundu');
      }
    } catch {
      showToast('Xəta baş verdi');
    }
  };

  const handleDeleteTranslation = async (key: string) => {
    // optional delete
  };

  const handleUploadMedia = async (file: File): Promise<boolean> => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/media/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success && data.data) {
        setMedia(prev => [data.data, ...prev]);
        showToast(`"${file.name}" yükləndi`);
        return true;
      } else {
        showToast(data.error || 'Yükləmə xətası');
        return false;
      }
    } catch {
      showToast('Fayl yükləmə xətası');
      return false;
    }
  };

  const handleDeleteMedia = async (id: string) => {
    try {
      const res = await fetch(`/api/media/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setMedia(prev => prev.filter(m => m.id !== id));
        showToast('Fayl silindi');
      }
    } catch {
      showToast('Silinmə xətası');
    }
  };

  const handleAddRecord = async (title: string) => {
    try {
      const res = await fetch('/api/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          source: 'Octotech Admin Core',
          author: 'Admin',
          status: 'published'
        })
      });
      const data = await res.json();
      if (data.success && data.data) {
        setRecords(prev => [data.data, ...prev]);
        showToast('Yeni qeyd əlavə olundu');
      }
    } catch {
      showToast('Xəta baş verdi');
    }
  };

  const handleSaveSite = async (newSite: SiteConfig) => {
    try {
      const res = await fetch('/api/site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSite)
      });
      const data = await res.json();
      if (data.success) {
        setSiteConfig(data.data);
        showToast('Sayt məlumatları yeniləndi');
      }
    } catch {
      showToast('Xəta baş verdi');
    }
  };

  const handleSaveMulter = async (newMulter: MulterConfig) => {
    try {
      const res = await fetch('/api/settings/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMulter)
      });
      const data = await res.json();
      if (data.success) {
        setMulterConfig(data.data);
        showToast('Multer qaydaları yeniləndi');
      }
    } catch {
      showToast('Xəta baş verdi');
    }
  };

  const handleWizardComplete = (result: any) => {
    if (result.site) setSiteConfig(result.site);
    if (result.uploadConfig) setMulterConfig(result.uploadConfig);
    if (result.systemLang) setUiLang(result.systemLang);
    setWizardOpen(false);
    showToast(`Xoş gəldiniz! "${result.site?.name || 'Octotech'}" sistemi aktivləşdirildi.`);
  };

  const currentTab = tabs.find(t => t.id === activeTabId);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={toggleSidebar}
        activeTabId={activeTabId}
        onSelectTab={openTab}
        siteName={siteConfig?.name || 'Octotech Store'}
        uiLang={uiLang}
        adminName={adminUser.fullName || 'Admin'}
        adminEmail={adminUser.email}
        onLogout={() => {
          setIsLocked(true);
          showToast('Sessiya təhlükəsiz şəkildə sonlandırıldı');
        }}
      />

      {/* Main Viewport */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50">
        {/* Workspace Multi-Tab Bar */}
        <TabsBar
          tabs={tabs}
          activeTabId={activeTabId}
          onActivateTab={handleActivateTab}
          onCloseTab={closeTab}
          onQuickAdd={() => openTab('seo-manager', 'Axtarış & SEO', 'search')}
          uiLang={uiLang}
        />

        {/* Viewport Top Breadcrumb & Action Bar */}
        <div className="h-10 px-4 bg-white border-b border-slate-200/90 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span>Octotech LL.</span>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{currentTab?.title || 'Canlı İcmal'}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Azerbaijani Interactive Tutorial Button */}
            <button
              onClick={() => setTutorialOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Sistem Bələdçisi (Tutorial) - 6 mərhələli bələdçi turu"
            >
              <Compass className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
              <span>Bələdçi</span>
            </button>

            {/* Theme Selector Top Bar Button - Flat & Sharp */}
            <button
              onClick={() => setThemeModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Rəng sxemini dəyiş"
            >
              <Palette className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
              <span>Tema</span>
              <span 
                className="w-2.5 h-2.5 rounded-none border border-black/20" 
                style={{ backgroundColor: COLOR_THEMES.find(t => t.id === currentTheme)?.colors.accent || '#0f172a' }} 
              />
            </button>

            <a
              href="/api/backup/download"
              download
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Bütün saytın tam SQLite backupını endir"
            >
              <Database className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
              <span>SQLite Backup</span>
            </a>

            <button
              onClick={() => setCmdOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1 rounded-none border border-slate-300 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>{t['topbar.quickSearch'] || 'Axtarış (CMD+K)...'}</span>
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTabId === 'dashboard' && (
            <DashboardView 
              records={records} 
              media={media}
              translations={translations}
              seo={seo}
              siteConfig={siteConfig}
              uiLang={uiLang} 
            />
          )}
          {activeTabId === 'seo-manager' && <SeoManagerView seo={seo} onSaveSeo={handleSaveSeo} uiLang={uiLang} />}
          {activeTabId === 'localization' && (
            <LocalizationView
              translations={translations}
              onSaveTranslation={handleSaveTranslation}
              onAddTranslation={handleAddTranslation}
              onDeleteTranslation={handleDeleteTranslation}
              uiLang={uiLang}
            />
          )}
          {activeTabId === 'media' && (
            <MediaView
              media={media}
              multerConfig={multerConfig}
              onUploadFile={handleUploadMedia}
              onDeleteMedia={handleDeleteMedia}
              uiLang={uiLang}
            />
          )}
          {activeTabId === 'data-grid' && (
            <DataRecordsView records={records} onAddRecord={handleAddRecord} uiLang={uiLang} />
          )}
          {activeTabId === 'settings' && (
            <SettingsView
              siteConfig={siteConfig}
              multerConfig={multerConfig}
              onSaveSite={handleSaveSite}
              onSaveMulter={handleSaveMulter}
              onRerunWizard={() => setWizardOpen(true)}
              onOpenTutorial={() => setTutorialOpen(true)}
              uiLang={uiLang}
              currentTheme={currentTheme}
              onSelectTheme={handleSelectTheme}
            />
          )}
        </div>
      </main>

      {/* Floating Circular Flag Language Selector */}
      <FloatingFlagSelector currentLang={uiLang} onSelectLang={handleSelectLang} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onSelectTab={openTab}
        onSelectTheme={handleSelectTheme}
        onOpenThemes={() => setThemeModalOpen(true)}
        onOpenTutorial={() => setTutorialOpen(true)}
        uiLang={uiLang}
      />

      {/* Theme Selector Modal */}
      <ThemeSelectorModal
        isOpen={themeModalOpen}
        onClose={() => setThemeModalOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
        uiLang={uiLang}
      />

      {/* Azerbaijani Interactive Step-by-Step Tutorial */}
      <InteractiveTutorial
        isOpen={tutorialOpen}
        onClose={() => setTutorialOpen(false)}
        uiLang={uiLang}
      />

      {/* Fullscreen Onboarding Card Deck Wizard */}
      <OnboardingWizard
        isOpen={wizardOpen}
        onComplete={handleWizardComplete}
        uiLang={uiLang}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100000] bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-xl shadow-lg border border-slate-800"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Session Lock Screen Modal: SF Pro Flat */}
      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999999] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              className="bg-white dark:bg-slate-900 p-8 max-w-sm w-full border border-slate-300 dark:border-slate-800 shadow-2xl space-y-5 text-center"
            >
              <div 
                className="circle-pfp w-20 h-20 mx-auto flex items-center justify-center font-bold text-2xl select-none border-2 shadow-sm"
                style={{
                  backgroundColor: 'var(--theme-surface-subtle)',
                  color: 'var(--theme-accent)',
                  borderColor: 'var(--theme-border)'
                }}
              >
                <span>{adminUser?.fullName ? adminUser.fullName.slice(0, 2).toUpperCase() : 'AD'}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {adminUser?.fullName || 'Super Admin'}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  {adminUser?.email || 'admin@octotech.az'}
                </p>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-none text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                  Sessiya mühafizəsi aktivdir
                </div>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLocked(false);
                  setLockPassword('');
                  showToast('Sessiya bərpa edildi. Xoş gəldiniz!');
                }}
                className="space-y-3 pt-1"
              >
                <input
                  type="password"
                  placeholder="Sessiya şifrəsi (istənilən)..."
                  value={lockPassword}
                  onChange={(e) => setLockPassword(e.target.value)}
                  className="w-full h-9 px-3 text-xs border border-slate-300 dark:border-slate-700 rounded-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white"
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-full h-9 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Sessiyanı Bərpa Et
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
