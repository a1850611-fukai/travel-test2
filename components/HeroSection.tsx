import React, { useEffect, useState } from 'react';
import { CloudSun, Sun, MapPin } from 'lucide-react';
import { getDailyInsight } from '../services/geminiService';
import { ItineraryItem } from '../types';

interface HeroSectionProps {
  currentDate: string;
  dayItems: ItineraryItem[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentDate, dayItems }) => {
  const [insight, setInsight] = useState<string>('正在載入今日旅遊小知識...');
  const [sunsetTime, setSunsetTime] = useState<string>('');

  // Calculate generic sunset time for Bangkok (approximate)
  useEffect(() => {
    // December in Bangkok sunset is roughly 17:48 - 17:55
    setSunsetTime('17:50'); 
  }, []);

  useEffect(() => {
    const fetchInsight = async () => {
      setInsight('正在詢問 AI 導遊...');
      const locations = dayItems.map(item => item.title);
      const fact = await getDailyInsight(locations);
      setInsight(fact);
    };
    
    // Debounce or just run when date changes
    fetchInsight();
  }, [currentDate, dayItems]);

  const formattedDate = new Date(currentDate).toLocaleDateString('zh-TW', {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="relative bg-thai-purple text-white pt-8 pb-12 px-6 rounded-b-[40px] shadow-xl overflow-hidden mb-6">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-thai-gold mb-2">
          <MapPin className="w-4 h-4" />
          <span className="uppercase tracking-widest text-xs font-bold">Thailand • Bangkok Region</span>
        </div>
        
        <h1 className="text-3xl font-serif font-bold mb-1 text-white">{formattedDate}</h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
          <div className="flex items-center gap-1">
             <CloudSun className="w-4 h-4" /> <span>32°C</span>
          </div>
          <div className="flex items-center gap-1">
             <Sun className="w-4 h-4 text-orange-400" /> <span>日落 {sunsetTime}</span>
          </div>
        </div>

        {/* Gemini Insight Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 w-full max-w-sm">
          <p className="text-thai-gold text-xs font-bold uppercase mb-1 flex items-center justify-center gap-1">
            <span className="animate-pulse">✨</span> AI 導遊小知識
          </p>
          <p className="text-sm font-light leading-relaxed">
            {insight}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;