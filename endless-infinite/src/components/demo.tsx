import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Ghost, Skull } from "lucide-react";

const Default = () => {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <SmokeBackground smokeColor="#808080" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white mix-blend-difference py-20">
        <Ghost size={64} className="mb-4 text-white" />
        <h1 className="text-4xl font-bold">Standard Smoke</h1>
      </div>
    </div>
  );
};

const Customized = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden mt-8 rounded-3xl border border-white/10">
      <div className="absolute inset-0 z-0 opacity-80">
        {/* Integrating our primary color from Endless Infinite */}
        <SmokeBackground smokeColor="#ffb4a8" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white py-20">
        <Skull size={64} className="mb-8 text-[#ffb4a8]" />
        <h1 className="text-5xl font-black tracking-tight mb-8">Custom Colored Smoke</h1>
        
        {/* Integrating Unsplash images as requested */}
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto px-8">
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=400&fit=crop" 
              alt="Cyberpunk Miami Vibe" 
              className="rounded-2xl shadow-2xl shadow-black/50 border border-white/10 hover:scale-105 transition-transform" 
            />
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
              alt="Abstract Neon" 
              className="rounded-2xl shadow-2xl shadow-black/50 border border-white/10 hover:scale-105 transition-transform" 
            />
        </div>
      </div>
    </div>
  );
};

export { Default, Customized };
