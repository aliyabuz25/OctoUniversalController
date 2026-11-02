import React, { useState, useEffect } from 'react';
import { 
  LayoutGrid, 
  Search, 
  Database, 
  Image as ImageIcon, 
  Globe, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  Menu,
  Clock,
  LogOut
} from 'lucide-react';
import { UiLanguage } from '../types';
import { DICTIONARIES } from '../i18n';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  activeTabId: string;
  onSelectTab: (id: string, title: string, icon: string) => void;
  siteName: string;
  uiLang: UiLanguage;
  adminName?: string;
  adminEmail?: string;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  onToggleCollapse,
  activeTabId,
  onSelectTab,
  siteName,
  uiLang,
  adminName = 'Admin',
  adminEmail,
  onLogout
}) => {
  const t = DICTIONARIES[uiLang] || DICTIONARIES.az;

  // Real-time Session Duration Countdown (e.g. 59:45 remaining)
  const [sessionSeconds, setSessionSeconds] = useState<number>(3540);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onLogout?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onLogout]);

  const formatSessionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getInitials = (name?: string) => {
    if (!name) return 'AD';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  const sections = [
    {
      title: t['sidebar.analyticsSection'] || 'Analitika & İcmal',
      items: [
        { id: 'dashboard', label: t['nav.dashboard'] || 'Canlı İcmal', icon: LayoutGrid },
        { id: 'seo-manager', label: t['nav.seoManager'] || 'Axtarış & SEO', icon: Search },
      ]
    },
    {
      title: t['sidebar.contentSection'] || 'Məzmun & Resurslar',
      items: [
        { id: 'data-grid', label: t['nav.records'] || 'Məlumat Bazası', icon: Database },
        { id: 'media', label: t['nav.media'] || 'Media Mərkəzi', icon: ImageIcon },
        { id: 'localization', label: t['nav.localization'] || 'Lokalizasiya & Dillər', icon: Globe },
      ]
    },
    {
      title: t['sidebar.systemSection'] || 'Sistem & İdarəetmə',
      items: [
        { id: 'settings', label: t['nav.settings'] || 'Sistem Parametrləri', icon: Settings },
      ]
    }
  ];

  return (
    <aside 
      className={`bg-white border-r border-slate-200/90 flex flex-col shrink-0 transition-[width] duration-200 ease-in-out z-40 select-none ${
        collapsed ? 'w-16 min-w-[64px]' : 'w-60 min-w-[240px]'
      }`}
    >
      {/* Brand Header - Pixel-perfect 40px (h-10) matching TabsBar */}
      <div className="h-10 px-3 flex items-center justify-between border-b border-slate-200/90 shrink-0">
        {!collapsed ? (
          <>
            <div className="flex items-center min-w-0">
              <span className="text-xs font-semibold text-slate-900 truncate tracking-tight">
                {siteName || 'Octotech Store'}
              </span>
            </div>
            <button
              onClick={onToggleCollapse}
              className="p-1 rounded-none text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              title="Sidebarı yığ"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            onClick={onToggleCollapse}
            className="w-full h-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-none transition-colors"
            title="Sidebarı genişləndir"
          >
            <Menu className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Nav Sections */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-3.5 scrollbar-thin">
        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-1">
            {!collapsed ? (
              <div className="px-2.5 pt-1 pb-1 text-[9.5px] font-bold text-slate-400 uppercase tracking-wider">
                {sec.title}
              </div>
            ) : (
              idx > 0 && <div className="border-t border-slate-100 my-2 mx-1" />
            )}
            
            <div className="space-y-0.5">
              {sec.items.map(item => {
                const Icon = item.icon;
                const isActive = activeTabId === item.id;

                if (collapsed) {
                  return (
                    <div key={item.id} className="relative group flex justify-center">
                      <button
                        onClick={() => onSelectTab(item.id, item.label, item.id)}
                        className={`w-10 h-9 flex items-center justify-center rounded-none transition-all ${
                          isActive
                            ? 'bg-slate-100 text-slate-900 shadow-xs border border-slate-200/90 font-semibold'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-slate-900' : 'text-slate-500'}`} />
                      </button>

                      {/* Tooltip on hover in collapsed mode */}
                      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-medium rounded-none whitespace-nowrap shadow-lg pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                        {item.label}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectTab(item.id, item.label, item.id)}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-none text-xs font-medium transition-all group ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 font-semibold shadow-xs border border-slate-200/80'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                    }`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Profile & Session Section with Circle PFP */}
      {!collapsed ? (
        <div className="border-t border-slate-200/90 bg-white shrink-0">
          <div className="p-2.5 flex items-center justify-between gap-2">
            {/* Circle PFP in theme tones + User details */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div 
                className="circle-pfp w-8 h-8 flex items-center justify-center font-bold text-xs select-none border shrink-0 relative transition-transform"
                style={{
                  backgroundColor: 'var(--theme-surface-subtle)',
                  color: 'var(--theme-accent)',
                  borderColor: 'var(--theme-border)'
                }}
                title={adminName}
              >
                <span>{getInitials(adminName)}</span>
                <span 
                  className="circle-pfp absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 border-2 border-white dark:border-slate-900" 
                  style={{ backgroundColor: '#10b981' }}
                  title="Aktiv Sessiya"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold text-slate-900 truncate leading-tight">
                  {adminName}
                </div>
                <div 
                  className="flex items-center gap-1 text-[10.5px] text-slate-500 font-mono mt-0.5 select-none" 
                  title="Aktiv Sessiya Müddəti"
                >
                  <Clock className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                  <span>Sessiya: {formatSessionTime(sessionSeconds)}</span>
                </div>
              </div>
            </div>

            {/* Logout Action */}
            <button
              onClick={onLogout}
              className="p-1.5 rounded-none text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors shrink-0 cursor-pointer"
              title="Sessiyadan Çıxış (Logout)"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Micro Version Bar */}
          <div 
            onClick={() => onSelectTab('settings', 'Sistem Parametrləri', 'settings')}
            className="h-6 px-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 hover:text-slate-700 bg-slate-50/50 cursor-pointer transition-colors"
          >
            <span className="font-medium tracking-tight">Core v2.4.2</span>
            <span className="font-mono text-[9px] uppercase">GitHub</span>
          </div>
        </div>
      ) : (
        <div className="border-t border-slate-200/90 py-2.5 flex flex-col items-center gap-2 bg-white shrink-0 relative group">
          {/* Collapsed Circle PFP in theme tones */}
          <div 
            onClick={onLogout}
            className="circle-pfp w-8 h-8 flex items-center justify-center font-bold text-xs select-none border shrink-0 relative cursor-pointer hover:scale-105 transition-transform"
            style={{
              backgroundColor: 'var(--theme-surface-subtle)',
              color: 'var(--theme-accent)',
              borderColor: 'var(--theme-border)'
            }}
            title="Klikləyərək çıxış edin"
          >
            <span>{getInitials(adminName)}</span>
            <span 
              className="circle-pfp absolute -bottom-0.5 -right-0.5 w-2 h-2 border border-white dark:border-slate-900" 
              style={{ backgroundColor: '#10b981' }}
            />
          </div>

          <button
            onClick={onLogout}
            className="p-1 rounded-none text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
            title="Çıxış et"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>

          {/* Hover Tooltip in collapsed mode */}
          <div className="absolute left-full ml-2 bottom-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-none shadow-xl pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 whitespace-nowrap space-y-1">
            <div className="font-semibold">{adminName}</div>
            <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" /> Sessiya: {formatSessionTime(sessionSeconds)}
            </div>
            <div className="pt-1 border-t border-slate-800 text-[9.5px] text-rose-400 font-medium">
              Çıxış üçün klikləyin
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
