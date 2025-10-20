"use client"
import React, { useState, useMemo } from 'react';
import { MessageCircle, MapPin, Clock, Shield, Heart, Brain, Users, Award, Moon, Sun, Lock, Instagram } from 'lucide-react';
import Image from 'next/image';

// ============================================
// CONFIGURAÇÃO DO CONSULTÓRIO - ESCOBAR PSICO
// ============================================
const clinicConfig = {
  business: {
    name: "Escobar Júnior",
    role: "Psicólogo",
    tagline: "Atendimento Especializado em Casos Graves",    
    description: "Consultório especializado em tratamento de dependência química, depressão grave, transtornos de ansiedade severos e casos complexos. Atendimento humanizado, sigiloso e baseado em evidências científicas.",
    crp: "CRP 07/39799",
    yearsExperience: 10,    
    instagramHandle: "@escobarpsico",    
  },

  contact: {
    phone: "(54) 99909-6262",
    address: "Rua Uruguai 1969 - Centro",
    city: "Passo Fundo, RS",
    instagram: "@escobarpsico",
    email: "escobarpsicologo@gmail.com",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta com o psicólogo Escobar Júnior..."
  },
  
  theme: {
    primaryColor: "#3B82A0",
    secondaryColor: "#5BA8C9",
    accentColor: "#F0F8FB",
    darkBg: "#0A0A0A",
    lightBg: "#F8FCFD",
    textDark: "#1A1A1A",
    textLight: "#FFFFFF",
    borderColor: "#D0E8F0",
    trustColor: "#4A96B8",
    warmColor: "#6BACC9"
  },

  specializations: [
    {
      id: "saude-idoso",
      name: "Saúde do Idoso",
      icon: Users,
      color: "#3B82A0",
      description:
        "Atendimento psicológico voltado à terceira idade, promovendo escuta acolhedora e apoio nas transformações emocionais dessa fase da vida. Trabalho com foco na valorização da história pessoal, fortalecimento da autoestima e promoção do bem-estar psíquico e social.",
    },
    {
      id: "alzheimer",
      name: "Alzheimer e Demências",
      icon: Brain,
      color: "#5BA8C9",
      description:
        "Acompanhamento especializado de pacientes e familiares, oferecendo suporte emocional diante dos desafios do cuidado. Atuação voltada à compreensão das perdas cognitivas, ao acolhimento das angústias e à orientação sobre as fases da doença, sempre com uma escuta sensível e humanizada.",
    },
    {
      id: "cuidados-paliativos",
      name: "Cuidados Paliativos",
      icon: Heart,
      color: "#6BACC9",
      description:
        "Atendimento a pacientes e familiares em momentos de fragilidade, com enfoque na dignidade, no alívio do sofrimento e na escuta profunda do sujeito. O trabalho é pautado na presença empática e na construção de sentido mesmo diante da finitude.",
    },
    {
      id: "todas-idades",
      name: "Atendimento para Todas as Idades",
      icon: Shield,
      color: "#4A96B8",
      description:
        "Atendimento psicológico individual para crianças, adolescentes, adultos e idosos. Cada processo terapêutico é conduzido com base na singularidade de cada sujeito, valorizando o autoconhecimento e o desenvolvimento emocional em todas as fases da vida.",
    },
  ],

  
  differentials: [
    {
      icon: Heart,
      title: "Escuta Acolhedora",
      description: "Ambiente seguro e livre de julgamentos para você se expressar"
    },
    {
      icon: Brain,
      title: "Especialista em Idosos",
      description: "Formação e experiência em saúde mental da terceira idade"
    },
    {
      icon: Shield,
      title: "Conforto Emocional",
      description: "Foco em promover bem-estar e qualidade de vida emocional"
    },
    {
      icon: Users,
      title: "Todas as Idades",
      description: "Atendimento de crianças, jovens, adultos e idosos"
    },
    {
      icon: Award,
      title: "Abordagem Humanizada",
      description: "Tratamento empático e personalizado para cada pessoa"
    },
    {
      icon: Lock,
      title: "Sigilo Profissional",
      description: "Total confidencialidade conforme Código de Ética"
    }
  ],

  testimonials: [
    {
      id: "1",
      name: "M.S.",
      text: "O psicólogo Escobar me ajudou muito no cuidado emocional com minha mãe que tem Alzheimer. Sua orientação foi fundamental.",
      rating: 5,
      condition: "Familiar de paciente com Alzheimer"
    },
    {
      id: "2",
      name: "R.L.",
      text: "Profissional extremamente atencioso e humano. Me sinto acolhida e compreendida em cada sessão.",
      rating: 5,
      condition: "Paciente adulto"
    },
    {
      id: "3",
      name: "A.C.",
      text: "Excelente trabalho com minha avó. Ele trouxe mais qualidade de vida e conforto emocional para ela.",
      rating: 5,
      condition: "Familiar de paciente idoso"
    },
    {
      id: "4",
      name: "J.P.",
      text: "A escuta sem julgamentos fez toda diferença. Me sinto à vontade para falar sobre tudo.",
      rating: 5,
      condition: "Paciente jovem"
    }
  ],

  faqs: [
    {
      question: "Quais idades você atende?",
      answer: "Atendo crianças, jovens, adultos e idosos. Tenho especialização em saúde do idoso, mas trabalho com todas as faixas etárias, sempre com uma abordagem humanizada e acolhedora."
    },
    {
      question: "Como funciona o atendimento para casos de Alzheimer?",
      answer: "O atendimento envolve tanto o paciente quanto a família. Ofereço suporte emocional para o idoso e orientação para familiares e cuidadores sobre como lidar com os desafios da doença."
    },
    {
      question: "Você faz atendimento online?",
      answer: "Sim, ofereço atendimento por videochamada para maior comodidade. É uma opção segura e eficaz, principalmente para quem tem dificuldade de locomoção."
    },
    {
      question: "O que são cuidados paliativos psicológicos?",
      answer: "É o apoio emocional oferecido a pacientes em situações de doença grave e seus familiares, visando conforto, dignidade e qualidade de vida nesse momento delicado."
    },
    {
      question: "Como é sua abordagem terapêutica?",
      answer: "Trabalho com uma escuta acolhedora e sem julgamentos, criando um espaço seguro onde você pode se expressar livremente. Meu foco é promover conforto emocional e saúde mental."
    }
  ]
};


// ============================================
// PÁGINA PRINCIPAL
// ============================================

export default function EscobarPsico() {
  const [darkMode, setDarkMode] = useState(true);  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const { business, contact, theme, specializations, differentials, faqs } = clinicConfig;

  const bgColor = darkMode ? theme.darkBg : "#FAFCFD";
  const textColor = darkMode ? theme.textLight : theme.textDark;

  const whatsappLink = `https://wa.me/55${contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full backdrop-blur-xl border-b z-50 shadow-sm"
        style={{ 
          backgroundColor: darkMode ? "rgba(10, 10, 10, 0.95)" : "rgba(255, 255, 255, 0.95)",
          borderColor: theme.primaryColor + "20"
        }}
      >
        <div className="max-w-full flex justify-between items-center h-16 px-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight" style={{ color: theme.primaryColor }}>
                {business.name}
              </p>
              <p className="text-xs" style={{ color: theme.secondaryColor }}>
                {business.role}
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-lg transition flex-shrink-0 ml-2 hover:scale-110"
            style={{ backgroundColor: theme.primaryColor + "15" }}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" style={{ color: theme.primaryColor }} />
            ) : (
              <Moon className="w-5 h-5" style={{ color: theme.primaryColor }} />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="pt-20 pb-16 px-4 relative overflow-hidden"
        style={{ 
          background: darkMode 
            ? `linear-gradient(135deg, ${theme.primaryColor}25 0%, ${theme.secondaryColor}15 100%)`
            : `linear-gradient(135deg, ${theme.primaryColor}10 0%, ${theme.accentColor} 100%)`
        }}
      >
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: theme.primaryColor }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: theme.secondaryColor }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <a
              href={`https://instagram.com/${business.instagramHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md border-2 transition hover:scale-105"
              style={{ 
                backgroundColor: theme.primaryColor + "15",
                borderColor: theme.primaryColor + "40"
              }}
            >
              <Instagram className="w-4 h-4" style={{ color: theme.primaryColor }} />
              <span className="text-sm font-bold" style={{ color: theme.primaryColor }}>
                {business.instagramHandle}
              </span>
            </a>
          </div>

          <div className="text-center space-y-6">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-2xl mx-auto" 
                style={{ 
                  borderColor: theme.primaryColor,
                  boxShadow: `0 20px 40px ${theme.primaryColor}30`
                }}
              >
                <Image
                  src="/escobar_junior.jpg"
                  alt="Escobar Júnior - Psicólogo"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div 
                className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  boxShadow: `0 4px 12px ${theme.primaryColor}40`
                }}
              >                
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: theme.primaryColor }}>
                {business.name}
              </h1>
              <p className="text-xl font-semibold" style={{ color: theme.secondaryColor }}>
                {business.role}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ color: theme.primaryColor }}>
                {business.tagline}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: darkMode ? "#bbb" : theme.textDark }}>
                {business.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`
                }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                <MessageCircle className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Agendar Consulta</span>
              </a>
              <a
                href={`https://instagram.com/${business.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 border-2 backdrop-blur-sm"
                style={{ 
                  borderColor: theme.primaryColor,
                  color: theme.primaryColor,
                  backgroundColor: darkMode ? theme.primaryColor + "10" : "white"
                }}
              >
                <Instagram className="w-6 h-6" />
                Ver Instagram
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm" style={{ backgroundColor: theme.primaryColor + "10" }}>
                <Heart className="w-4 h-4" style={{ color: theme.primaryColor }} />
                <span className="text-sm font-semibold" style={{ color: theme.primaryColor }}>Escuta Acolhedora</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm" style={{ backgroundColor: theme.primaryColor + "10" }}>
                <Shield className="w-4 h-4" style={{ color: theme.primaryColor }} />
                <span className="text-sm font-semibold" style={{ color: theme.primaryColor }}>Sem Julgamentos</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm" style={{ backgroundColor: theme.primaryColor + "10" }}>
                <Users className="w-4 h-4" style={{ color: theme.primaryColor }} />
                <span className="text-sm font-semibold" style={{ color: theme.primaryColor }}>Todas as Idades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="px-4 py-16 border-b" style={{ borderColor: theme.borderColor }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: theme.primaryColor }}>
              Como posso te ajudar?
            </h2>
            <p className="text-sm" style={{ color: darkMode ? "#999" : "#666" }}>
              Meu compromisso é com sua saúde emocional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="group p-6 rounded-2xl border-2 transition-all hover:scale-105 hover:shadow-2xl"
                  style={{ 
                    backgroundColor: darkMode ? "#1A1515" : theme.lightBg,
                    borderColor: theme.primaryColor + "30"
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: theme.primaryColor }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="px-4 py-16 border-b" style={{ borderColor: theme.borderColor }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: theme.primaryColor }}>
              Áreas de Especialização
            </h2>
            <p className="text-sm" style={{ color: darkMode ? "#999" : "#666" }}>
              Atendimento especializado e humanizado
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec) => {
              const Icon = spec.icon;
              return (
                <div 
                  key={spec.id}
                  className="group relative p-8 rounded-2xl border-2 transition-all hover:scale-105 overflow-hidden"
                  style={{ 
                    backgroundColor: darkMode ? "#1A1515" : theme.lightBg,
                    borderColor: spec.color + "50"
                  }}
                >
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ background: spec.color }}
                  />
                  
                  <div className="relative z-10 flex gap-5 items-start">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: spec.color + "20" }}
                    >
                      <Icon className="w-8 h-8" style={{ color: spec.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3" style={{ color: spec.color }}>
                        {spec.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">{spec.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 px-4 border-t" style={{ borderColor: theme.borderColor }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: theme.primaryColor }}>
              Perguntas Frequentes
            </h2>
            <p className="text-sm" style={{ color: darkMode ? "#999" : "#666" }}>
              Tire suas dúvidas sobre o atendimento
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border-2 overflow-hidden"
                style={{ 
                  borderColor: theme.primaryColor + "30",
                  backgroundColor: darkMode ? "#1A1515" : theme.lightBg
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between transition hover:bg-opacity-80"
                >
                  <span className="font-bold text-base pr-4" style={{ color: theme.primaryColor }}>
                    {faq.question}
                  </span>
                  <span className="text-2xl flex-shrink-0" style={{ color: theme.primaryColor }}>
                    {expandedFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: darkMode ? "#ccc" : "#555" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 border-t" style={{ borderColor: theme.borderColor }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: theme.primaryColor }}>
              Entre em Contato
            </h2>
            <p className="text-sm" style={{ color: darkMode ? "#999" : "#666" }}>
              Estou aqui para te ouvir
            </p>
          </div>
          <div className="space-y-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center p-5 rounded-2xl border-2 transition-all hover:scale-105 hover:shadow-lg"
              style={{ 
                borderColor: theme.primaryColor + "40",
                backgroundColor: darkMode ? "#1A1515" : theme.lightBg
              }}
            >
              <MessageCircle className="w-6 h-6 flex-shrink-0" style={{ color: theme.primaryColor }} />
              <div className="min-w-0">
                <p className="text-xs font-semibold mb-1" style={{ color: darkMode ? "#999" : theme.primaryColor + "80" }}>
                  WhatsApp
                </p>
                <p className="font-bold text-base">{contact.phone}</p>
                <p className="text-xs text-gray-500 mt-1">Clique para agendar uma consulta</p>
              </div>
            </a>

            <div 
              className="flex gap-4 items-center p-5 rounded-2xl border-2"
              style={{ 
                borderColor: theme.primaryColor + "40",
                backgroundColor: darkMode ? "#1A1515" : theme.lightBg
              }}
            >
              <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: theme.primaryColor }} />
              <div className="min-w-0">
                <p className="text-xs font-semibold mb-1" style={{ color: darkMode ? "#999" : theme.primaryColor + "80" }}>
                  Localização
                </p>
                <p className="font-bold text-base">{contact.address}</p>
                <p className="text-sm text-gray-600 mt-1">{contact.city}</p>
              </div>
            </div>

            <a 
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center p-5 rounded-2xl border-2 transition-all hover:scale-105 hover:shadow-lg"
              style={{ 
                borderColor: theme.primaryColor + "40",
                backgroundColor: darkMode ? "#1A1515" : theme.lightBg
              }}
            >
              <Instagram className="w-6 h-6 flex-shrink-0" style={{ color: theme.primaryColor }} />
              <div className="min-w-0">
                <p className="text-xs font-semibold mb-1" style={{ color: darkMode ? "#999" : theme.primaryColor + "80" }}>
                  Instagram
                </p>
                <p className="font-bold text-base">{contact.instagram}</p>                
              </div>
            </a>
          </div>          
        </div>
      </section>

      {/* CTA Final */}
      <section 
        className="py-16 px-4 border-t"
        style={{ 
          borderColor: theme.borderColor,
          background: darkMode 
            ? `linear-gradient(135deg, ${theme.primaryColor}15 0%, ${theme.secondaryColor}08 100%)`
            : `linear-gradient(135deg, ${theme.primaryColor}08 0%, ${theme.accentColor} 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" 
            style={{ 
              background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
              boxShadow: `0 20px 40px ${theme.primaryColor}30`
            }}
          >
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: theme.primaryColor }}>
            Pronto para cuidar da sua saúde emocional?
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: darkMode ? "#aaa" : "#666" }}>
            Ofereço um espaço acolhedor e livre de julgamentos onde você pode se expressar com tranquilidade. Dê o primeiro passo em direção ao bem-estar emocional.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl text-lg"
            style={{ 
              background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`
            }}
          >
            <MessageCircle className="w-6 h-6" />
            Agendar Consulta Agora
          </a>
          <div className="flex items-center justify-center gap-3 pt-4 text-sm" style={{ color: darkMode ? "#666" : "#999" }}>
            <Lock className="w-4 h-4" />
            <span>Atendimento sigiloso e respeitoso</span>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl hover:shadow-3xl transition active:scale-95 z-40 hover:scale-110"
        style={{ backgroundColor: theme.primaryColor }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Footer */}
      <footer 
        className="border-t py-10 px-4 text-center"
        style={{ borderColor: theme.borderColor, color: darkMode ? "#666" : "#999" }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 mb-3">            
            <p className="font-bold text-lg" style={{ color: theme.primaryColor }}>
              {business.name}
            </p>
          </div>
          <p className="text-sm">{business.role} • {business.crp}</p>
          <p className="text-sm">{business.tagline}</p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              style={{ color: theme.primaryColor }}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              style={{ color: theme.primaryColor }}
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          <div className="pt-6 border-t text-xs" style={{ borderColor: theme.borderColor }}>
            <a 
              href='https://www.instagram.com/digital_nova_online/'
              target='_blank'
              style={{ color: darkMode ? "#555" : "#bbb" }}
            >
              Site desenvolvido por <span style={{ color: theme.trustColor }}>Digital Nova</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Safe Area Bottom */}
      <div className="h-6" />
    </div>
  );
}