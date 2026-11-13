import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Send, Mail, Linkedin, Github, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // Direct mailto integration with pre-filled subject and body
    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    // Trigger mail client
    window.location.href = mailtoUrl;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#8b5cf6', '#38bdf8', '#a78bfa'],
      });
    } catch {
      // ignore in environments without canvas support
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 07. GET IN TOUCH"
          title="Let's Connect & Collaborate"
          subtitle="Open for software engineering opportunities, AI/ML research collaborations, and technical discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Connect & Links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="card-glass p-7">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Start a Conversation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether you're exploring internships, software engineering roles, full-stack projects, or machine learning systems, feel free to reach out directly.
              </p>

              {/* Contact Channels */}
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-primary-light transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyanAccent/40 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyanAccent/10 border border-cyanAccent/20 flex items-center justify-center text-cyanAccent group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono text-slate-400">Professional Network</div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-cyanAccent transition-colors">
                      linkedin.com/in/raunakgupta-devmode
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono text-slate-400">Source Code & Repositories</div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-slate-100 transition-colors">
                      github.com/raunakgupta2264
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Location & Status Badge */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Location: India</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active & Available
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="card-glass p-7 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-primary-light" />
                <h3 className="text-xl font-heading font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-glow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">
                    Mail Client Triggered!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                    Your message draft has been formatted and transferred to your email application addressed to <span className="text-cyanAccent">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-secondary text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Chen"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineering Opportunity / Project Collab"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
