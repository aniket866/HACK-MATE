import { ArrowLeft, Plus, Minus, Code2 } from 'lucide-react';
import { useState } from 'react';

export function FAQ({ onBack }: { onBack: () => void }) {
  const faqs = [
    {
      q: 'Do I have to use the exact tools you recommend?',
      a: "No! Tools are suggestions. We recommend them because they're quick to set up and have free tiers. Use whatever your team is comfortable with.",
    },
    {
      q: 'Can I use code/projects I built before the hackathon?',
      a: 'Check the specific hackathon rules. Some allow builds on existing projects, others require starting from scratch. Our tool assumes starting fresh.',
    },
    {
      q: 'Will using your tool help me win?',
      a: 'Our tool helps you focus on what matters: building fast, designing well, and pitching effectively. Judges care about innovation and execution - we help with both.',
    },
    {
      q: 'Do you store my project details?',
      a: "With a Free session: No - all data stays in your browser's local storage. Your data is private to your machine unless you explicitly export and share it.",
    },
    {
      q: 'Is this tool free?',
      a: 'Yes! All features are currently free. We may add optional premium features (team collaboration cloud-sync, advanced analytics) later.',
    },
    {
      q: 'Can I use this for non-hackathon projects?',
      a: 'Yes! The workflow works for any software project with a 24-72 hour deadline: product launches, startup MVPs, client projects.',
    },
    {
      q: 'How are the AI prompts created?',
      a: 'Each prompt is written by our team and tested with ChatGPT/Claude. We iterate based on user feedback and judge criteria from 50+ hackathons.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span>FAQ</span>
          </div>
          <div className="w-24" />
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-lg">
            Everything you need to know about the Hackathon Copilot.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-20 p-8 bg-gray-50 rounded-3xl border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-500 mb-6 font-medium">
            We're here to help you win. Reach out to us on Discord or GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-900 transition-colors">
              Join Discord
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold border border-gray-200 hover:bg-gray-100 transition-colors">
              Email Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-8">{question}</span>
        <div className="shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-4 h-4 text-gray-500" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-50 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
          <p className="text-gray-600 leading-relaxed font-medium">{answer}</p>
        </div>
      )}
    </div>
  );
}
