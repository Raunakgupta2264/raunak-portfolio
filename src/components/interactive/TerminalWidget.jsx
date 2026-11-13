import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, projects, certifications, technicalInterests } from '../../data/portfolioData';

export default function TerminalWidget({ isOpen, onClose, onOpen }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Raunak Gupta Developer CLI [Version 1.0.0]' },
    { type: 'output', text: 'Type "help" to view all available commands, or click any command pill below.' },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const executeCommand = (cmdText) => {
    const rawCmd = cmdText.trim().toLowerCase();
    if (!rawCmd) return;

    const newHistory = [...history, { type: 'input', text: cmdText }];

    switch (rawCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • whoami     - Display summary of profile & background
  • education  - View degree & university information
  • cgpa       - View academic performance record
  • projects   - List 5 major software & AI projects
  • certs      - View 6 verified academic certifications
  • skills     - Display core technical interests & technologies
  • contact    - Output email, GitHub, and LinkedIn links
  • clear      - Clear terminal screen
  • exit       - Close terminal window`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${personalInfo.name} — ${personalInfo.role}
Education: ${personalInfo.degree} at ${personalInfo.university} (Class of ${personalInfo.graduation})
CGPA: ${personalInfo.cgpa} / 10.0
Focus: Full-Stack Web, Artificial Intelligence, and Crash-Consistent Systems.`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `University: ${personalInfo.university}
Degree:     ${personalInfo.degree}
Graduation: ${personalInfo.graduation}
Status:     Full-Time Undergraduate Student (Academic Standing: 9.49 CGPA)`
        });
        break;

      case 'cgpa':
        newHistory.push({
          type: 'output',
          text: `Current CGPA: 9.49 / 10.0
Department:   Computer Science & Engineering
Institution:  KL Deemed to be University`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map((p, i) => `${i + 1}. [${p.badge}] ${p.title}\n   Tech: ${p.technologies.join(', ')}`).join('\n\n')
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'output',
          text: certifications.map((c, i) => `${i + 1}. ${c.title} — ${c.issuer}`).join('\n')
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Technical Interests:
${technicalInterests.map(item => `  • ${item}`).join('\n')}

Core Technologies:
  • Python, C/C++, JavaScript, SQL, HTML5/CSS3
  • React.js, Tailwind CSS, Vite, Framer Motion
  • Machine Learning, Generative AI, Linear Algebra
  • Operating Systems, File Systems, Linux, Git`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${personalInfo.email}
GitHub:   ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${cmdText}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const quickPills = ['help', 'whoami', 'projects', 'cgpa', 'certs', 'contact', 'clear'];

  return (
    <>
      {/* Floating Bottom-Right Dock Launcher Button */}
      {!isOpen && (
        <motion.button
          onClick={onOpen}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0b0626] border border-cyanAccent/40 shadow-glow-cyan text-cyanAccent flex items-center gap-2 group backdrop-blur-xl"
          title="Open Developer Terminal CLI"
          aria-label="Open Developer Terminal"
        >
          <TerminalIcon className="w-5 h-5 group-hover:rotate-6 transition-transform" />
          <span className="text-xs font-mono font-semibold hidden sm:inline">
            Terminal
          </span>
          <span className="w-2 h-2 rounded-full bg-cyanAccent animate-pulse" />
        </motion.button>
      )}

      {/* Terminal Drawer / Window */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className={`w-full ${
                isExpanded ? 'max-w-5xl h-[90vh]' : 'max-w-3xl h-[560px]'
              } rounded-2xl bg-[#070319]/95 border border-primary/30 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl transition-all duration-300 font-mono`}
            >
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2 hidden xs:inline">
                    raunak@portfolio:~ (bash)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                    title={isExpanded ? 'Restore' : 'Maximize'}
                  >
                    {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={onClose}
                    className="p-1 rounded text-slate-400 hover:text-red-400 transition-colors"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Command Suggestion Bar */}
              <div className="px-4 py-2 bg-white/[0.02] border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[10px] text-slate-500 font-mono uppercase shrink-0">Quick Cmds:</span>
                {quickPills.map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded text-[11px] text-cyanAccent bg-cyanAccent/10 hover:bg-cyanAccent/20 border border-cyanAccent/20 transition-colors shrink-0"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Content Area */}
              <div
                className="flex-1 p-4 overflow-y-auto space-y-3 text-xs sm:text-sm text-slate-300"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item, index) => (
                  <div key={index} className="leading-relaxed">
                    {item.type === 'input' ? (
                      <div className="flex items-center gap-2 text-slate-200">
                        <span className="text-cyanAccent font-semibold">raunak@portfolio:~$</span>
                        <span>{item.text}</span>
                      </div>
                    ) : item.type === 'error' ? (
                      <div className="text-red-400 pl-4 whitespace-pre-wrap">{item.text}</div>
                    ) : (
                      <div className="text-slate-300 pl-4 whitespace-pre-wrap text-xs sm:text-sm text-opacity-90">{item.text}</div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Active Prompt Input */}
              <div className="p-3 bg-white/[0.03] border-t border-white/10 flex items-center gap-2">
                <span className="text-cyanAccent font-semibold text-xs sm:text-sm shrink-0">
                  raunak@portfolio:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command (e.g. help, projects, cgpa)..."
                  className="flex-1 bg-transparent border-none text-white focus:outline-none text-xs sm:text-sm font-mono placeholder-slate-600"
                  autoFocus
                />
                <button
                  onClick={() => executeCommand(inputVal)}
                  className="p-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary-light transition-colors"
                  title="Run Command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
