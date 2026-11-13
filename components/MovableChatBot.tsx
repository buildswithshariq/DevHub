'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BotIcon, XIcon, SendIcon, SparklesIcon, MoveIcon, WhatsAppIcon, BikeIcon } from './icons';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface MovableChatBotProps {
  botName?: string;
  themeColor?: string;
}

export function MovableChatBot({ botName = 'ScootBot AI', themeColor = '#10b981' }: MovableChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I am **${botName}** 🛵. How can I assist you with scooter models, genuine OEM spare parts compatibility, or our direct WhatsApp checkout? You can also drag and reposition me anywhere across your screen!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Position for dragging
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [showDragHint, setShowDragHint] = useState(true);

  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, startX: 0, startY: 0 });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize position on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialX = Math.max(20, window.innerWidth - 84);
      const initialY = Math.max(20, window.innerHeight - 100);
      setPosition({ x: initialX, y: initialY });
    }
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Hide drag hint after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowDragHint(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Drag handlers
  const handleStartDrag = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setHasMoved(false);
    dragStartRef.current = {
      mouseX: clientX,
      mouseY: clientY,
      startX: position.x,
      startY: position.y
    };
  };

  const handleMoveDrag = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartRef.current.mouseX;
    const deltaY = clientY - dragStartRef.current.mouseY;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      setHasMoved(true);
      setShowDragHint(false);
    }

    const newX = dragStartRef.current.startX + deltaX;
    const newY = dragStartRef.current.startY + deltaY;

    // Bounds checking
    const maxX = window.innerWidth - 70;
    const maxY = window.innerHeight - 70;
    const boundedX = Math.max(10, Math.min(maxX, newX));
    const boundedY = Math.max(10, Math.min(maxY, newY));

    setPosition({ x: boundedX, y: boundedY });
  };

  const handleEndDrag = () => {
    setIsDragging(false);
  };

  // Mouse event listeners
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      handleMoveDrag(e.clientX, e.clientY);
    };
    const onMouseUp = () => {
      handleEndDrag();
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);

  // Touch event listeners for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStartDrag(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMoveDrag(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    handleEndDrag();
  };

  const handleAvatarClick = () => {
    // If not dragged significantly, toggle chat window
    if (!hasMoved) {
      setIsOpen(!isOpen);
      setShowDragHint(false);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: query.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Connection issue. Please ask again or reach out on WhatsApp.' }
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Network timeout. Feel free to contact our store directly via WhatsApp.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickChips = [
    'Which brake pads fit Honda Activa 6G?',
    'What is the real range of VoltPulse Apex?',
    'How does direct WhatsApp checkout work?',
    'Show all-weather tubeless tire pricing'
  ];

  return (
    <>
      {/* Movable Floating Bot Avatar */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex: 49,
          touchAction: 'none'
        }}
        className="select-none transition-transform"
      >
        {/* Subtle Idle Hover / Floating Animation */}
        <div className="relative group">
          {/* Tooltip Drag Hint */}
          {showDragHint && !isOpen && (
            <div className="absolute bottom-full mb-2 right-0 bg-zinc-900 text-white text-[10px] font-medium py-1 px-2.5 rounded-lg border border-zinc-700 shadow-xl whitespace-nowrap animate-bounce flex items-center gap-1.5 pointer-events-none">
              <MoveIcon size={12} className="text-emerald-400" />
              <span>Drag me anywhere!</span>
            </div>
          )}

          {/* Draggable Circle Avatar */}
          <div
            onMouseDown={(e) => handleStartDrag(e.clientX, e.clientY)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={handleAvatarClick}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center cursor-grab active:cursor-grabbing shadow-xl transition-all duration-200 border-2 ${
              isOpen
                ? 'bg-zinc-900 border-emerald-400 text-emerald-400 scale-105 ring-4 ring-emerald-500/20'
                : 'bg-zinc-900 hover:bg-zinc-800 border-emerald-500/80 text-white hover:scale-105'
            }`}
          >
            {/* Ambient Animated Glow Ping */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-zinc-950" />
            </span>

            {/* Icon */}
            <div className="flex flex-col items-center justify-center">
              <BotIcon size={24} className="text-emerald-400" />
              <span className="text-[9px] font-mono tracking-tighter text-zinc-300 mt-0.5">AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-out / Pop-up Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/80 text-zinc-100 shadow-2xl flex flex-col z-50 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b border-zinc-800 bg-zinc-950/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <BotIcon size={18} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-semibold text-white tracking-tight">{botName}</h3>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400">Scooty & OEM Parts Consultant</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([messages[0]])}
                className="text-[10px] text-zinc-400 hover:text-zinc-200 px-2 py-1 transition-colors"
                title="Clear Chat"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <XIcon size={16} />
              </button>
            </div>
          </div>

          {/* Messages Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-zinc-800/90 text-zinc-200 border border-zinc-700/60 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800/80 rounded-2xl px-3.5 py-2 rounded-bl-none border border-zinc-700/50 flex items-center gap-1.5 text-zinc-400">
                  <SparklesIcon size={14} className="text-emerald-400 animate-spin" />
                  <span className="text-[11px]">ScootBot thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-zinc-950/40 border-t border-zinc-800/60 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 whitespace-nowrap transition-colors flex-shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-zinc-800 bg-zinc-950/80 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about scooty specs, brake pads, battery price..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || isLoading}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white transition-colors cursor-pointer"
            >
              <SendIcon size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
