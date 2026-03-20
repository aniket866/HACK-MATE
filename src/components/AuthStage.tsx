import { useState } from 'react';
import { LogIn, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

interface AuthStageProps {
  onLogin: () => Promise<void>;
  onBack: () => void;
}

export function AuthStage({ onLogin, onBack }: AuthStageProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
      setLoading(true);
      setError(null);
      try {
          await onLogin();
      } catch (err: any) {
          setError(err.message || "Failed to sign in with Google.");
          setLoading(false);
      }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 selection:bg-gray-900 selection:text-white font-sans overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#e5e7eb,transparent)]"></div>
      </div>

      <div className="w-full max-w-md p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl z-10 animate-in fade-in zoom-in duration-500">
        
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-gray-900/20">
            {loading ? <Loader2 className="w-8 h-8 animate-spin" /> : <ShieldCheck className="w-8 h-8" />}
          </div>
          <h2 className="text-3xl font-black mb-2 tracking-tight">
            Authentication Required
          </h2>
          <p className="text-gray-500">
            Please sign in with your Google account to access and save your hackathon projects.
          </p>
        </div>

        {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm font-medium leading-relaxed">{error}</p>
            </div>
        )}

        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-gray-900/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <LogIn className="w-5 h-5" />} 
            Continue with Google
          </button>
        </div>

        <button 
          onClick={onBack}
          disabled={loading}
          className="mt-8 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors w-full disabled:opacity-50"
        >
          ← Go Back to Landing Page
        </button>
      </div>
      
      <p className="fixed bottom-8 text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Hackathon Copilot Security</p>
    </div>
  );
}
