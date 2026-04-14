import React from 'react';
import { 
    Code2, 
    Github, 
    Twitter, 
    Linkedin, 
    Mail, 
    ArrowUpRight,
    Heart,
    Zap,
    ExternalLink
} from 'lucide-react';

interface FooterProps {
    onOpenHowItWorks?: () => void;
    onOpenFeatures?: () => void;
    onOpenResources?: () => void;
    onOpenGuide?: () => void;
    onOpenFAQ?: () => void;
    onOpenCaseStudies?: () => void;
}

export function Footer({ 
    onOpenHowItWorks, 
    onOpenFeatures, 
    onOpenResources, 
    onOpenGuide, 
    onOpenFAQ,
    onOpenCaseStudies 
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-16 sm:py-24 border-t border-gray-800 selection:bg-white selection:text-gray-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-24">
                    
                    {/* Brand Column */}
                    <div className="space-y-8 animate-in fade-in duration-700">
                        <div className="flex items-center gap-3 group cursor-default">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-900 shadow-xl shadow-white/5 group-hover:rotate-6 transition-transform">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-black tracking-tight text-white">Hackathon Copilot</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            Empowering builders to transform ideas into winning projects within 48 hours. The ultimate secret weapon for modern hackathons.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="https://github.com/anandmahadev/HACK-MATE" icon={<Github className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="mailto:hello@antigravity.ai" icon={<Mail className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Platform Column */}
                    <div className="space-y-8 animate-in fade-in duration-700 delay-100">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Platform</h4>
                        <ul className="space-y-4">
                            <FooterLink label="How it Works" onClick={onOpenHowItWorks} />
                            <FooterLink label="Core Features" onClick={onOpenFeatures} />
                            <FooterLink label="Success Stories" onClick={onOpenCaseStudies} />
                            <FooterLink label="Setup Guide" onClick={onOpenGuide} />
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="space-y-8 animate-in fade-in duration-700 delay-200">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Resources</h4>
                        <ul className="space-y-4">
                            <FooterLink label="Documentation" onClick={onOpenResources} />
                            <FooterLink label="Help Center (FAQ)" onClick={onOpenFAQ} />
                            <FooterLink label="GitHub Repo" href="https://github.com/anandmahadev/HACK-MATE" isExternal />
                            <FooterLink label="Project Status" href="#" isExternal />
                        </ul>
                    </div>

                    {/* Newsletter/CTA Column */}
                    <div className="space-y-8 animate-in fade-in duration-700 delay-300">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Join the Community</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                            Stay updated with the latest tools and strategies for hackathon winners.
                        </p>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative flex items-center bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group-hover:border-gray-600 transition-colors">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="bg-transparent border-none text-white text-sm px-4 py-3 w-full focus:ring-0 placeholder:text-gray-500"
                                />
                                <button className="bg-white text-gray-900 p-2.5 m-1 rounded-lg hover:shadow-lg hover:shadow-white/10 transition-all active:scale-95">
                                    <Zap className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 sm:pt-12 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-0 animate-in fade-in duration-1000 delay-500 fill-mode-forwards">
                    <div className="flex items-center gap-6 text-sm font-medium">
                        <p>© {currentYear} Hackathon Copilot. Built with <Heart className="w-3.5 h-3.5 inline mx-0.5 text-red-500 animate-pulse" /> by builders.</p>
                    </div>
                    
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Systems Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-white hover:text-gray-900 hover:border-white transition-all transform hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}

function FooterLink({ label, onClick, href, isExternal }: { label: string; onClick?: () => void; href?: string, isExternal?: boolean }) {
    if (href) {
        return (
            <li>
                <a 
                    href={href} 
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                >
                    {label}
                    {isExternal && <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />}
                </a>
            </li>
        );
    }

    return (
        <li>
            <button 
                onClick={onClick}
                className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
            >
                {label}
                <div className="w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 mt-0.5" />
            </button>
        </li>
    );
}
