import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import DayNavigator from './components/DayNavigator';
import DetailModal from './components/DetailModal';
import { ITINERARY } from './constants';
import { ItineraryItem } from './types';

const App: React.FC = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);

  const currentDay = ITINERARY[currentDayIndex];

  return (
    <div className="min-h-screen bg-thai-silk pb-20 thai-pattern">
      <div className="max-w-md mx-auto bg-[#FDFDFD] min-h-screen shadow-2xl overflow-hidden relative">
        
        {/* Decorative Top Border */}
        <div className="h-1 bg-gradient-to-r from-thai-gold via-thai-purple to-thai-gold"></div>

        <HeroSection 
          currentDate={currentDay.date} 
          dayItems={currentDay.items}
        />

        <main>
          <div className="flex items-center justify-between px-6 mb-4">
             <h2 className="text-xl font-serif font-bold text-thai-purple">行程安排</h2>
             <span className="text-xs text-gray-400 font-sans">{currentDay.items.length} 個活動</span>
          </div>
          
          <Timeline 
            items={currentDay.items} 
            onItemClick={setSelectedItem}
          />
        </main>

        <DayNavigator 
          days={ITINERARY} 
          currentDayIndex={currentDayIndex} 
          onDaySelect={setCurrentDayIndex}
        />

        <DetailModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
        
        {/* Floating Elephant Decoration (CSS only illustration essentially) */}
        <div className="fixed bottom-24 right-4 opacity-10 pointer-events-none z-0">
           <svg width="100" height="80" viewBox="0 0 100 80" fill="black">
              <path d="M70,50 Q90,50 90,70 L90,80 L80,80 L80,70 Q80,60 70,60 L70,80 L60,80 L60,50 Z M50,50 Q30,50 30,70 L30,80 L40,80 L40,70 Q40,60 50,60 L50,80 L60,80 L60,50 Z M20,40 Q10,40 10,60 L10,70 L20,70 L20,60 Q20,50 30,50 L30,40 Z M80,20 Q90,10 70,10 Q60,10 60,30 L60,40 L80,40 Z" />
           </svg>
        </div>
      </div>
    </div>
  );
};

export default App;