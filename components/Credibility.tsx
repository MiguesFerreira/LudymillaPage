
import React from 'react';

const Credibility: React.FC = () => {
  const items = [
    { 
      title: "Porta-voz do MBL", 
      desc: "Voz ativa no maior movimento liberal do Brasil",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
          <path className="opacity-40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10a9.5 9.5 0 0 1 1.5-5M21 10a9.5 9.5 0 0 0-1.5-5" />
        </svg>
      )
    },
    { 
      title: "Presença no Congresso", 
      desc: "Atuação direta em Brasília e nas Câmaras Municipais",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M2 10l10-7 10 7M12 3v4" />
          <circle className="opacity-40" cx="12" cy="14" r="2" strokeWidth="1" />
        </svg>
      )
    },
    { 
      title: "Mobilização Popular", 
      desc: "Milhares de jovens engajados na luta pela liberdade",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
          <path className="opacity-40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    { 
      title: "Partido Missão", 
      desc: "Fundadora de honra do partido que representa o futuro",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
          <path className="opacity-30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 22V12M12 12L17 7M12 12L7 7" />
        </svg>
      )
    }
  ];

  const galleryImages = [
    { src: "https://lh3.googleusercontent.com/d/17J2Q7H2QlY13dvzqImV2w63EGJ4xK8Q6", alt: "Ludymilla Dias falando ao microfone em um palco durante evento político." },
    { src: "https://lh3.googleusercontent.com/d/1oVlTVdcuooCTlUs3IoF9NEd1aGc5UBE2", alt: "Ludymilla Dias sorrindo junto a apoiadores com as mãos erguidas em sinal de vitória." },
    { src: "https://lh3.googleusercontent.com/d/1DF11CEC9lt6DR4u47O63pZx0J0OokYy9", alt: "Ludymilla Dias em diálogo com outra liderança política em um evento institucional." },
    { src: "https://lh3.googleusercontent.com/d/1d1Rw7j3IQDlDtkJEKc_Pp_rP0bhDacMQ", alt: "Ludymilla Dias posando para foto com colega em ambiente de conferência." }
  ];

  return (
    <section className="py-32 bg-[#050505] text-white relative overflow-hidden" role="region" aria-labelledby="credibility-title">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal-node">
          <span className="text-yellow-500 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs bg-yellow-400/5 px-4 py-2 rounded-full border border-yellow-400/10" aria-hidden="true">Trajetória</span>
          <h2 id="credibility-title" className="text-5xl md:text-7xl font-black mt-8 mb-6 tracking-tighter">Atuação e <span className="text-yellow-400">Valores</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg md:text-xl font-medium leading-relaxed">Presença ativa na política brasileira, combatendo privilégios e defendendo a liberdade.</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" role="list">
          {items.map((item, idx) => (
            <div key={idx} 
                 className="reveal-node bg-[#0a0a0a] p-10 md:p-14 rounded-[2.5rem] border border-zinc-900 flex flex-col items-center text-center transition-all duration-700 hover:border-yellow-500/30 hover:bg-[#0f0f0f] group hover:-translate-y-3 relative overflow-hidden" 
                 style={{ transitionDelay: `${idx * 150}ms` }}
                 role="listitem">
              
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[2rem] flex items-center justify-center text-yellow-500 shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 border border-zinc-800">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl md:text-3xl font-black mb-4 tracking-tight group-hover:text-yellow-400 transition-colors duration-500">{item.title}</h3>
              <p className="text-zinc-500 text-sm md:text-lg leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Refined Gallery */}
        <div className="grid grid-cols-2 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} 
                 className="reveal-node overflow-hidden rounded-[2.5rem] aspect-square md:aspect-[4/3] group shadow-2xl relative border border-zinc-900"
                 style={{ transitionDelay: `${idx * 200}ms` }}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="transition-all duration-[1.5s] cursor-pointer object-cover h-full w-full group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/20 transition-all duration-700 rounded-[2.5rem] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
