
import React from 'react';

const Defense: React.FC = () => {
  const defenses = [
    { 
      title: "Combate à corrupção", 
      desc: "Tolerância zero com o desvio de dinheiro público e fortalecimento dos mecanismos de fiscalização.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" className="text-red-500 opacity-60" />
        </svg>
      )
    },
    { 
      title: "Respeito à responsabilidade fiscal", 
      desc: "Gestão técnica do orçamento, garantindo que o Estado não gaste mais do que arrecada.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "Aumento da qualidade em saúde", 
      desc: "Foco na eficiência do atendimento, redução de filas e modernização da gestão hospitalar.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      title: "Combate à poluição e ao desmatamento", 
      desc: "Proteção ativa do meio ambiente aliada ao desenvolvimento sustentável e tecnológico.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a3 3 0 013 3V16.5m-5-12.5a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: "Fim dos privilégios do funcionalismo", 
      desc: "Reforma administrativa real para acabar com super-salários e regalias da elite estatal.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 01-6.001 0M18 7l-3 9m3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    { 
      title: "Endurecimento das leis penais", 
      desc: "Combate à impunidade através de penas mais rigorosas para crimes violentos e corrupção.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      title: "Priorização da educação para todos", 
      desc: "Foco no ensino básico de qualidade e na formação técnica voltada para o mercado de trabalho.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      title: "Industrialização do Nordeste", 
      desc: "Incentivos para levar desenvolvimento industrial e empregos para a região.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      title: "Guerra contra o tráfico de drogas", 
      desc: "Enfrentamento direto ao crime organizado e proteção das nossas fronteiras e comunidades.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      )
    }
  ];

  return (
    <section id="defense" className="py-32 bg-[#050505] text-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-yellow-400 to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal-node">
          <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs">Missão de Verdade</span>
          <h2 className="text-5xl md:text-7xl font-black mt-8 mb-6 tracking-tighter">O Que Eu <span className="text-yellow-400">Defendo</span></h2>
          <p className="text-zinc-500 text-xl font-medium">Princípios fundamentais para um Brasil livre e próspero.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defenses.map((item, idx) => (
            <div key={idx} 
                 className="reveal-node bg-[#0a0a0a] p-12 rounded-[3rem] border border-zinc-900 flex flex-col items-start text-left hover:bg-[#0f0f0f] hover:border-yellow-400/20 transition-all duration-700 group hover:-translate-y-2"
                 style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="mb-10 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-yellow-400 group-hover:scale-110 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/30 transition-all duration-500">
                <div className="w-8 h-8">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-5 tracking-tight text-white group-hover:text-yellow-400 transition-colors">{item.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg">{item.desc}</p>
              
              <div className="mt-8 w-12 h-1 bg-zinc-800 rounded-full group-hover:w-24 group-hover:bg-yellow-400 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Defense;
