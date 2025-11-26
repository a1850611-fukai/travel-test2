import React from 'react';
import { Plane, Train, Ship, Utensils, Camera, ShoppingBag, Landmark, MapPin, Coffee, Sparkles } from 'lucide-react';
import { DaySchedule, ActivityType } from './types';

export const ITINERARY: DaySchedule[] = [
  {
    date: '2024-12-03',
    dayLabel: 'Day 1',
    shortDate: '12/3',
    items: [
      {
        id: '1-1',
        time: '12:00',
        title: '曼谷市區',
        location: 'Bangkok City Center',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Bangkok+City+Center',
        type: ActivityType.Sightseeing,
        description: '抵達曼谷，開始城市探索。'
      },
      {
        id: '1-2',
        time: '13:30',
        title: '藍色觀光船 / 大皇宮 / 玉佛寺 / 臥佛寺',
        location: 'The Grand Palace',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Bangkok',
        type: ActivityType.Sightseeing,
        description: '搭乘昭披耶河觀光船，參觀經典寺廟群。',
        details: {
          notes: '穿著規定：有袖上衣、長褲或長裙，不可穿拖鞋。'
        }
      },
      {
        id: '1-3',
        time: '18:00',
        title: '鄭王廟 (黎明寺) 夜景',
        location: 'Wat Arun',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Wat+Arun',
        type: ActivityType.Sightseeing,
        description: '欣賞湄南河畔的璀璨夜景。'
      },
      {
        id: '1-4',
        time: '19:30',
        title: 'Talat Phlu 美食市集',
        location: 'Talat Phlu Market',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Talat+Phlu+Market',
        type: ActivityType.Food,
        description: '搭乘 MRT 前往享用在地晚餐。',
        details: {
          notes: '推薦試試：韭菜粿、泰式炒河粉。'
        }
      }
    ]
  },
  {
    date: '2024-12-04',
    dayLabel: 'Day 2',
    shortDate: '12/4',
    items: [
      {
        id: '2-1',
        time: '08:00',
        title: '大城古都之旅 (Mini Van)',
        location: 'Ayutthaya Historical Park',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ayutthaya+Historical+Park',
        type: ActivityType.Transport,
        description: '前往大城府 (Ayutthaya)。'
      },
      {
        id: '2-2',
        time: '10:00',
        title: '古蹟巡禮',
        location: 'Wat Mahathat',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Wat+Mahathat+Ayutthaya',
        type: ActivityType.Sightseeing,
        description: '瑪哈泰寺 (樹中佛頭)、柴瓦塔那蘭寺、帕司三碧寺、拉嘉布拉那寺。',
        details: {
          notes: '建議租借泰服拍照，效果很好。'
        }
      },
      {
        id: '2-3',
        time: '16:00',
        title: '搭火車前往廊曼',
        location: 'Ayutthaya Railway Station',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ayutthaya+Railway+Station',
        type: ActivityType.Transport,
        description: '體驗泰國傳統火車風情前往 Don Mueang。'
      },
      {
        id: '2-4',
        time: '18:30',
        title: 'Save One Go Night Market',
        location: 'Save One Go Market',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Save+One+Go+Market',
        type: ActivityType.Food,
        description: '轉乘 Grab 前往熱鬧夜市晚餐。'
      }
    ]
  },
  {
    date: '2024-12-05',
    dayLabel: 'Day 3',
    shortDate: '12/5',
    items: [
      {
        id: '3-1',
        time: '09:00',
        title: '包車出發',
        location: 'Hotel Pickup',
        locationUrl: '',
        type: ActivityType.Transport,
        description: '私人包車前往大象保護區。'
      },
      {
        id: '3-2',
        time: '10:30',
        title: 'Somboon Legacy Foundation',
        location: 'Somboon Legacy Foundation',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Somboon+Legacy+Foundation',
        type: ActivityType.Activity,
        description: 'Hands-Off Elephant Sanctuary (友善大象體驗)。',
        details: {
          bookingRef: 'RES-ELE-20241205',
          notes: '請準備防蚊液與舒適好走的鞋子。'
        }
      }
    ]
  },
  {
    date: '2024-12-06',
    dayLabel: 'Day 4',
    shortDate: '12/6',
    items: [
      {
        id: '4-1',
        time: '08:00',
        title: '包車水上市場一日遊',
        location: 'Hotel Pickup',
        locationUrl: '',
        type: ActivityType.Transport,
        description: '前往叻丕府與夜功府。'
      },
      {
        id: '4-2',
        time: '09:30',
        title: '丹嫩莎多水上市場',
        location: 'Damnoen Saduak Floating Market',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Damnoen+Saduak+Floating+Market',
        type: ActivityType.Sightseeing,
        description: '搭手搖船體驗熱鬧的水上交易。'
      },
      {
        id: '4-3',
        time: '13:00',
        title: '美功鐵道市場',
        location: 'Maeklong Railway Market',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Maeklong+Railway+Market',
        type: ActivityType.Sightseeing,
        description: '觀看火車穿過市場的奇景。',
        details: {
          notes: '注意火車時刻表，火車來時請退到紅線後。'
        }
      },
      {
        id: '4-4',
        time: '15:00',
        title: '安帕瓦水上市場',
        location: 'Amphawa Floating Market',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Amphawa+Floating+Market',
        type: ActivityType.Sightseeing,
        description: '較為在地的水上市場，適合悠閒散步。'
      }
    ]
  },
  {
    date: '2024-12-07',
    dayLabel: 'Day 5',
    shortDate: '12/7',
    items: [
      {
        id: '5-1',
        time: '09:30',
        title: 'BTS 轉乘',
        location: 'BTS Station',
        locationUrl: '',
        type: ActivityType.Transport,
        description: '搭乘 BTS 往南。'
      },
      {
        id: '5-2',
        time: '10:30',
        title: '暹羅古城 (Ancient City)',
        location: 'The Ancient City',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=The+Ancient+City+Samut+Prakan',
        type: ActivityType.Sightseeing,
        description: '巨大的戶外博物館，縮小版泰國名勝。',
        details: {
          notes: '園區廣大，建議租高爾夫球車或自行車。'
        }
      },
      {
        id: '5-3',
        time: '17:00',
        title: '席娜卡琳火車夜市',
        location: 'Srinakarin Train Night Market',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Srinakarin+Train+Night+Market',
        type: ActivityType.Shopping,
        description: 'Grab 叫車前往，復古風格的超大夜市。'
      }
    ]
  },
  {
    date: '2024-12-08',
    dayLabel: 'Day 6',
    shortDate: '12/8',
    items: [
      {
        id: '6-1',
        time: '10:00',
        title: '吞武里海鮮市集',
        location: 'Thonburi Market Place',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Thonburi+Market+Place',
        type: ActivityType.Food,
        description: 'Grab 叫車前往，現撈海鮮現煮。'
      },
      {
        id: '6-2',
        time: '14:00',
        title: 'Big C 採買伴手禮',
        location: 'Big C Supercenter',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Big+C+Supercenter',
        type: ActivityType.Shopping,
        description: '最後衝刺，購買泰國零食與藥妝。'
      },
      {
        id: '6-3',
        time: '18:00',
        title: 'Bhawa Spa',
        location: 'Bhawa Spa on the Eight',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Bhawa+Spa',
        type: ActivityType.Activity,
        description: '享受高級 SPA 按摩 (18:00 - 21:00)。',
        details: {
          bookingRef: 'BHAWA-8829',
          notes: '請提早 15 分鐘抵達。'
        }
      }
    ]
  }
];

export const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.Transport: return <Train className="w-5 h-5" />;
    case ActivityType.Sightseeing: return <Camera className="w-5 h-5" />;
    case ActivityType.Food: return <Utensils className="w-5 h-5" />;
    case ActivityType.Shopping: return <ShoppingBag className="w-5 h-5" />;
    case ActivityType.Hotel: return <Coffee className="w-5 h-5" />;
    case ActivityType.Activity: return <Sparkles className="w-5 h-5" />;
    default: return <MapPin className="w-5 h-5" />;
  }
};