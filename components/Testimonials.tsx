import React, { useState, useEffect } from 'react';
import { Heart, ThumbsUp } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana S.",
    text: "Eu não acreditava nessas coisas, mas na 3ª noite ele me mandou mensagem pedindo desculpas chorando. Estou em choque!",
    likes: 124,
    loved: 45
  },
  {
    name: "Fernanda L.",
    text: "Funciona mesmo! Ele estava bloqueado e sumido há meses. Hoje acordei com ele na minha porta. Gratidão Sacerdotisa!",
    likes: 89,
    loved: 120
  },
  {
    name: "Carla M.",
    text: "Fiz para um amor novo e na mesma semana conheci alguém que parece que saiu dos meus sonhos. A conexão é surreal.",
    likes: 210,
    loved: 88
  },
  {
    name: "Juliana R.",
    text: "A intensidade é real. Ele disse que sentia o corpo queimar de saudade. Estamos juntos de novo e mais fortes.",
    likes: 156,
    loved: 92
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto my-10 bg-zinc-800 p-6 rounded-xl shadow-2xl border border-zinc-700">
      <h3 className="text-center text-yellow-500 font-bold mb-4 text-lg">Histórias Reais</h3>
      <div className="relative overflow-hidden min-h-[160px]">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-zinc-200 italic mb-4">"{item.text}"</p>
            <p className="text-zinc-400 font-bold text-sm text-right">- {item.name}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-zinc-400">
              <div className="flex items-center gap-1 text-blue-400">
                <ThumbsUp size={16} fill="currentColor" /> {item.likes}
              </div>
              <div className="flex items-center gap-1 text-red-500">
                <Heart size={16} fill="currentColor" /> {item.loved}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-yellow-500 w-4' : 'bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;