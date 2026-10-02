import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-24 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#171f33] border border-[#ffc174]/60 text-[#dae2fd] shadow-[0_10px_30px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-top-2 duration-200">
      <span className="material-symbols-outlined text-[#ffc174] text-[20px]">
        verified_user
      </span>
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-[#a08e7a] hover:text-[#dae2fd] text-xs cursor-pointer"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
