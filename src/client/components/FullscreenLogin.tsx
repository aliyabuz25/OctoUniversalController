import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Clock, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { UiLanguage, AdminUser } from '../types';

interface FullscreenLoginProps {
  onLoginSuccess: (token: string, user: AdminUser, expiresIn: number) => void;
  uiLang?: UiLanguage;
}

export const FullscreenLogin: React.FC<FullscreenLoginProps> = ({
  onLoginSuccess,
  uiLang = 'az'
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!username.trim()) {
      setErrorMsg('Zəhmət olmasa istifadəçi adını daxil edin');
      return;
    }

    if (!password) {
      setErrorMsg('Zəhmət olmasa şifrəni daxil edin');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.trim(),
          password
        })
      });

      const data = await res.json();

      if (res.ok && data.success && data.data?.token) {
        onLoginSuccess(data.data.token, data.data.user, data.data.expiresIn || 600);
      } else {
        setErrorMsg(data.error || 'İstifadəçi adı və ya şifrə yanlışdır');
      }
    } catch (err: any) {
      setErrorMsg('Serverlə əlaqə xətası: ' + (err.message || 'Server cavab vermir'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999999] bg-slate-950 text-slate-100 flex items-center justify-center p-4 select-none overflow-hidden"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", sans-serif' }}
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Fullscreen Login Card: 100% Flat & Sharp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 shadow-2xl rounded-none p-7 sm:p-8 space-y-6"
      >
        {/* Top Header Badge */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-none bg-white text-slate-950 flex items-center justify-center font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-sm font-bold uppercase tracking-wider text-white">
                Octotech Core
              </h1>
              <p className="text-[10.5px] text-slate-400 font-mono">
                Mərkəzi İdarəetmə Paneli
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-none bg-slate-800 border border-slate-700 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>JWT Auth</span>
          </div>
        </div>

        {/* Informative Security Banner */}
        <div className="p-3 bg-slate-950 border border-slate-800 flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200">10 Dəqiqəlik Təhlükəsiz Sessiya:</span> Daxil olduqdan sonra sistem 600 saniyə aktiv qalacaq və vaxt bitdikdə avtomatik bağlanacaq.
          </div>
        </div>

        {/* Error Alert Box */}
        <AnimatePresence>
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2 overflow-hidden"
            >
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              İstifadəçi Adı (Username / Email)
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full h-10 pl-9 pr-3 bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-600 rounded-none focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Şifrə (Password)
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-10 pl-9 pr-10 bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-600 rounded-none focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                title={showPassword ? 'Gizlət' : 'Göstər'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 bg-white hover:bg-slate-200 text-slate-950 rounded-none text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent animate-spin" />
                  <span>Yoxlanılır...</span>
                </>
              ) : (
                <>
                  <span>Təhlükəsiz Daxil Ol</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer Hint for Developer / Admin */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Standart Giriş:</span>
          <span className="text-slate-400">admin / admin</span>
        </div>
      </motion.div>
    </div>
  );
};
