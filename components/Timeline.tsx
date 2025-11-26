import React from 'react';
import { ItineraryItem, ActivityType } from '../types';
import { getActivityIcon } from '../constants';
import { ChevronRight, MapPin } from 'lucide-react';

interface TimelineProps {
  items: ItineraryItem[];
  onItemClick: (item: ItineraryItem) => void;
}

const Timeline: React.FC<TimelineProps> = ({ items, onItemClick }) => {
  return (
    <div className="relative px-6 pb-24">
      {/* Vertical Line */}
      <div className="absolute left-10 top-2 bottom-0 w-0.5 bg-gray-200 z-0"></div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={item.id} className="relative z-10">
            <div className="flex gap-4 items-stretch">
              {/* Time Column */}
              <div className="flex flex-col items-center w-8 pt-1">
                 <span className="text-xs font-bold text-gray-500 bg-thai-silk px-1 rounded z-20 mb-1">{item.time}</span>
                 {/* Icon Bubble */}
                 <div className={`
                   w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 border-white z-20
                   ${item.type === ActivityType.Food ? 'bg-orange-100 text-orange-600' : 
                     item.type === ActivityType.Transport ? 'bg-blue-100 text-blue-600' :
                     item.type === ActivityType.Sightseeing ? 'bg-thai-gold text-white' :
                     'bg-purple-100 text-purple-600'}
                 `}>
                   {getActivityIcon(item.type)}
                 </div>
              </div>

              {/* Card */}
              <div 
                onClick={() => onItemClick(item)}
                className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-sans font-bold text-gray-800 text-lg leading-tight mb-1">{item.title}</h3>
                  <ChevronRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                </div>
                
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center gap-2">
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.locationUrl, '_blank');
                    }}
                    className="flex items-center gap-1 text-xs text-thai-gold-dark font-medium bg-yellow-50 px-2 py-1 rounded-md hover:bg-yellow-100 transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                  
                  {item.details?.bookingRef && (
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-md font-mono">
                      #{item.details.bookingRef}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;