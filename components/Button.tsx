import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, fullWidth = false }) => {
  return (
    <a 
      href="https://go.perfectpay.com.br/PPU38CQ5LBC"
      className={`
        inline-block text-center
        bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg 
        shadow-[0_0_20px_rgba(22,163,74,0.6)] animate-pulse transition-all transform hover:scale-105
        text-xl uppercase tracking-wider border-b-4 border-green-800
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {children}
    </a>
  );
};

export default Button;