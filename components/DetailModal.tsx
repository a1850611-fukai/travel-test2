import React from 'react';
import { X, FileText, Image as ImageIcon } from 'lucide-react';
import { ItineraryItem } from '../types';

interface DetailModalProps {
  item: ItineraryItem | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out]">
        <div className="bg-thai-purple p-4 flex justify-between items-center">
          <h3 className="text-white font-serif font-bold text-lg truncate pr-4">{item.title}</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3">
             <div className="bg-thai-silk p-2 rounded-lg">
                <FileText className="w-5 h-5 text-thai-gold-dark" />
             </div>
             <div>
               <p className="text-xs text-gray-500 uppercase font-bold">描述</p>
               <p className="text-gray-700 leading-relaxed">{item.description}</p>
             </div>
          </div>

          {item.details?.bookingRef && (
            <div className="bg-green-50 border border-green-100 p-3 rounded-lg flex flex-col">
              <span className="text-xs text-green-600 font-bold uppercase">訂位代號</span>
              <span className="text-lg font-mono text-green-800 font-bold">{item.details.bookingRef}</span>
            </div>
          )}

          {item.details?.notes && (
            <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
              <span className="text-xs text-orange-600 font-bold uppercase block mb-1">貼心提醒</span>
              <p className="text-sm text-gray-700">{item.details.notes}</p>
            </div>
          )}

          {item.details?.imageUrl ? (
            <div className="mt-4">
              <span className="text-xs text-gray-500 font-bold uppercase mb-2 block">相關憑證</span>
              <img src={item.details.imageUrl} alt="Booking proof" className="w-full rounded-lg border border-gray-200" />
            </div>
          ) : (
             <div className="mt-6 p-4 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 gap-2">
                <ImageIcon className="w-8 h-8 opacity-50" />
                <span className="text-xs">尚無上傳憑證圖片</span>
             </div>
          )}
          
          <a 
            href={item.locationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center w-full bg-thai-gold hover:bg-thai-gold-dark text-white font-bold py-3 rounded-xl transition-colors shadow-md"
          >
            開啟 Google Maps 導航
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;