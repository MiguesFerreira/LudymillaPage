
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const profileImage = "https://lh3.googleusercontent.com/d/1VMrXH9LqpXJXw3xfFhMh8GTGHou2dgt-";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Você é o assistente virtual da candidata Ludymilla Dias (Número 14).
          Seu objetivo é responder dúvidas sobre as propostas dela para Guarulhos de forma educada, firme e técnica.
          As principais propostas incluem: 
          1. Segurança Pública (tolerância zero, apoio policial).
          2. Educação sem ideologia (foco no ensino básico, autoridade dos pais).
          3. Liberdade Econômica (desburocratização, incentivo ao empreendedor).
          4. Estado Eficiente (corte de gastos, fim de privilégios).
          Seja sempre positivo e termine incentivando a pessoa a se juntar à missão ou votar 14.`,
        },
      });

      setChatHistory(prev => [...prev, { role: 'bot', text: response.text || "Desculpe, tive um problema técnico. Tente novamente!" }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'bot', text: "No momento não consigo responder, mas saiba que Ludymilla está lutando por você!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-80 md:w-96 flex flex-col border border-zinc-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-zinc-950 p-4 rounded-t-3xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-yellow-400 border border-yellow-400/20">
                <img src={profileImage} alt="Ludymilla Dias" className="w-full h-full object-cover" />
              </div>
              <div className="text-white text-sm font-bold">Assistente de Missão</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {chatHistory.length === 0 && (
              <p className="text-zinc-400 text-center text-sm py-8 italic">Como posso ajudar você a conhecer as propostas da Ludymilla?</p>
            )}
            {chatHistory.map((chat, i) => (
              <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${chat.role === 'user' ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-200 text-zinc-800'}`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 p-3 rounded-2xl flex gap-1">
                  <div className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-zinc-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Pergunte sobre segurança..."
              className="flex-1 bg-zinc-100 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="bg-yellow-400 p-2 rounded-full text-zinc-950 hover:bg-yellow-300 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-yellow-400 text-zinc-950 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
