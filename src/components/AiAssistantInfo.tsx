import { Zap } from 'lucide-react';

export const AiAssistantInfo = () => {
  return (
    <div className="p-6 bg-slate-800 rounded-lg border border-slate-700 shadow-md">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 flex-nowrap">
        <Zap className="text-yellow-400 flex-shrink-0" size={24} />
        <span className="text-gradient-neon">Our AI Assistant</span>
      </h3>
      <p className="text-white text-sm leading-relaxed">
        Our contact form is powered by a smart assistant. Just briefly describe your needs, and it will draft a professional message, detect your inquiry&apos;s intent, and suggest an optimal subject line—making communication effortless and precise.
      </p>
    </div>
  );
};