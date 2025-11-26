import React from 'react';
import { DaySchedule } from '../types';

interface DayNavigatorProps {
  days: DaySchedule[];
  currentDayIndex: number;
  onDaySelect: (index: number) => void;
}

const DayNavigator: React.FC<DayNavigatorProps> = ({ days, currentDayIndex, onDaySelect }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 pb-safe">
      <div className="flex overflow-x-auto no-scrollbar py-3 px-2 gap-2">
        {days.map((day, index) => {
          const isActive = index === currentDayIndex;
          return (
            <button
              key={day.date}
              onClick={() => onDaySelect(index)}
              className={`
                flex flex-col items-center justify-center min-w-[4.5rem] py-2 rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-thai-purple text-white shadow-lg transform -translate-y-1' 
                  : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}
              `}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-thai-gold' : ''}`}>
                {day.dayLabel}
              </span>
              <span className="text-sm font-bold">{day.shortDate}</span>
            </button>
          );
        })}
      </div>
      {/* Safe area spacer for iOS */}
      <div className="h-4 bg-white"></div>
    </div>
  );
};

export default DayNavigator;