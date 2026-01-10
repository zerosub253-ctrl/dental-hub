/**
 * DentalHub Roadmap Timeline Component
 * 
 * Design Philosophy: Minimalist Medical Tech
 * - Teal (#0D9488) for healthcare authority and trust
 * - Gold (#F59E0B) for warmth and human connection
 * - Vertical timeline with staggered card layout
 * - Smooth expand/collapse interactions
 * - Premium whitespace and typography hierarchy
 * - Enhanced backgrounds with subtle gradients and patterns
 */

import { useState } from 'react';
import { ChevronDown, MapPin, Camera, HeartPulse, Mic } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  value: string;
  color: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: 'Market Entry',
    subtitle: 'MVP',
    icon: <MapPin className="w-6 h-6" />,
    features: [
      'Агрегатор клиник с Гео-поиском (Map-based search)',
      'Интеграция Google Reviews API (реальный траст и отзывы)',
      'Базовая админка для клиник (управление профилем)',
    ],
    value: 'Быстрый поиск проверенного врача рядом',
    color: '#0D9488',
  },
  {
    id: 2,
    title: 'Patient Tech',
    subtitle: 'Smart Diagnostics',
    icon: <Camera className="w-6 h-6" />,
    features: [
      'AI-предиагностика по фото',
      'Туториал "Как сделать снимок" (анимированная подсказка)',
      'Калькулятор стоимости (Price Estimation на основе фото)',
    ],
    value: 'Снятие страха цены и неизвестности у пациента',
    color: '#14B8A6',
  },
  {
    id: 3,
    title: 'Ecosystem',
    subtitle: 'Retention',
    icon: <HeartPulse className="w-6 h-6" />,
    features: [
      'Единая цифровая медкарта пациента (история, диагнозы)',
      'Умный календарь бронирования (синхронизация слотов врача)',
      'Система Recall: Пуш-уведомления о плановых осмотрах',
    ],
    value: 'LTV (пожизненная ценность) клиента и возвращаемость',
    color: '#2DD4BF',
  },
  {
    id: 4,
    title: 'Innovation',
    subtitle: "Doctor's Voice AI",
    icon: <Mic className="w-6 h-6" />,
    features: [
      'Voice Recognition System: Врач диктует диагноз во время осмотра',
      'Speech-to-Text в реальном времени: Автоматическое заполнение медкарты',
      'Интеграция с зубной формулой (автоматизация)',
    ],
    value: 'Сокращение времени приема на 30%, избавление врача от рутины',
    color: '#F59E0B',
  },
];

export default function RoadmapTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
          {/* Header background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 opacity-95" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              DentalHub Strategy
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 font-light tracking-wide drop-shadow-md">
              Connecting Patients, Empowering Doctors via AI
            </p>
            <div className="mt-10 h-1.5 w-32 bg-gradient-to-r from-amber-300 via-amber-200 to-transparent mx-auto rounded-full shadow-lg" />
          </div>
        </header>

        {/* Timeline Section */}
        <section className="py-16 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 via-teal-400 to-amber-400 transform -translate-x-1/2 hidden md:block shadow-lg" />

            {/* Phases Container */}
            <div className="space-y-10 md:space-y-16">
              {phases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={`relative md:flex md:items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:absolute md:left-1/2 top-6 w-14 h-14 bg-white border-4 border-teal-600 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-20 shadow-lg">
                    <span className="text-teal-600 font-bold text-xl">{phase.id}</span>
                  </div>

                  {/* Card Container */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    {/* Phase Card */}
                    <div
                      className={`ml-20 md:ml-0 bg-white rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                        expandedPhase === phase.id
                          ? 'border-2 border-teal-600 shadow-2xl scale-105'
                          : 'border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-teal-300'
                      }`}
                      onClick={() => togglePhase(phase.id)}
                    >
                      {/* Card Header with gradient background */}
                      <div
                        className="p-6 md:p-8 bg-gradient-to-br from-white to-gray-50"
                        style={{
                          borderLeft: `6px solid ${phase.color}`,
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            <div
                              className="p-3 rounded-xl text-white flex-shrink-0 mt-1 shadow-md"
                              style={{ backgroundColor: phase.color }}
                            >
                              {phase.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-1 break-words">
                                {phase.title}
                              </h3>
                              <p className="text-sm md:text-base font-semibold text-teal-600 uppercase tracking-wider">
                                {phase.subtitle}
                              </p>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                              expandedPhase === phase.id ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedPhase === phase.id ? 'max-h-full' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 md:px-8 py-6 md:py-8 border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                          {/* Features List */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                              Key Features
                            </h4>
                            <ul className="space-y-3">
                              {phase.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed"
                                >
                                  <span
                                    className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-2 shadow-sm"
                                    style={{ backgroundColor: phase.color }}
                                  />
                                  <span className="text-gray-800">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Business Value */}
                          <div
                            className="p-4 md:p-5 rounded-xl border-l-4 shadow-sm"
                            style={{
                              backgroundColor: `${phase.color}15`,
                              borderLeftColor: phase.color,
                            }}
                          >
                            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                              💼 Business Value
                            </p>
                            <p className="text-gray-900 font-medium leading-relaxed">{phase.value}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32" />

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Ready to Transform Dental Healthcare?
            </h2>
            <p className="text-lg md:text-xl text-teal-50 mb-10 font-light drop-shadow-md">
              Join us on this journey to connect patients with trusted doctors, powered by AI.
            </p>
            <button
              className="px-8 md:px-10 py-4 md:py-5 bg-amber-400 text-gray-900 font-bold rounded-xl hover:bg-amber-300 transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 text-base md:text-lg"
              onClick={() => alert('Contact form coming soon!')}
            >
              Get in Touch
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8 px-4 md:px-8 text-center">
          <p className="text-sm md:text-base">
            &copy; 2026 DentalHub. Connecting Patients, Empowering Doctors via AI.
          </p>
        </footer>
      </div>
    </div>
  );
}
