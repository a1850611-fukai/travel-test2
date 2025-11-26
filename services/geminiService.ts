import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: In a real PWA, you might want to proxy this or use a safe backend. 
// For this demo, we assume the environment variable is available.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getDailyInsight = async (locations: string[]): Promise<string> => {
  if (!apiKey) {
    return "泰國歡迎您！享受您的旅程。"; // Fallback if no key
  }

  try {
    const prompt = `
      I am a traveler in Thailand visiting these places today: ${locations.join(', ')}.
      Give me one fascinating, short (under 40 words), and fun cultural fact or tip about one of these places. 
      Write in Traditional Chinese (Taiwan). 
      Make it sound like a friendly local guide.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "享受泰國的美麗風光！";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "祝您今天旅途愉快！";
  }
};