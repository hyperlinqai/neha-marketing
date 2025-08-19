import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, ArrowRight, CheckCircle, Users, TrendingUp, Target, BarChart3, MessageCircle } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Simple scroll-reveal animations
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const delay = el.dataset.delay || '0ms';
            el.style.transitionDelay = delay;
            el.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'will-change-transform');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Research",
      description: "Understand client goals, audience, and competitive landscape."
    },
    {
      step: "2", 
      title: "Campaign Setup & Creative",
      description: "Build targeted ads, conversion-focused landing pages, and messaging aligned with the brand."
    },
    {
      step: "3",
      title: "Automation & Integration", 
      description: "Connect lead forms, CRM, email nurturing, and workflows to streamline sales follow-ups."
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description: "A/B test creatives, audiences, and landing page elements to maximize conversions and reduce CPL."
    },
    {
      step: "5",
      title: "Reporting & Insights",
      description: "Deliver transparent, actionable reports to inform next steps and scaling."
    }
  ];

  const projects = [
    { title: "Issar Industries", category: "Visual Identity", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "Moneme Design", category: "Book Cover Print", image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "Product Packaging", category: "Coffee Pouch", image: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "Book Campaign", category: "Marketing Campaign", image: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-200 selection:text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-900">
              <span className="bg-gradient-to-r from-brand-500 via-rose-500 to-fuchsia-500 bg-300% bg-clip-text text-transparent animate-shine">Neha</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-orange-500 transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Projects</button>
              <button onClick={() => scrollToSection('process')} className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Process</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Contact</button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@worxwithneha.com" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        {/* animated gradient blobs */}
        <div className="pointer-events-none absolute -top-28 -right-24 w-80 h-80 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-rose-400/30 to-brand-400/30 blur-3xl animate-spin-slow"></div>
        <div className="pointer-events-none absolute -bottom-20 -left-8 w-96 h-96 rounded-full bg-gradient-to-tr from-brand-400/30 via-amber-400/30 to-emerald-400/30 blur-3xl animate-float"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-28">
          <div className="reveal">
            <p className="text-brand-300 text-lg mb-4 font-medium">Hi. I'm Neha</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="block">A results-focused</span>
              <span className="block bg-gradient-to-r from-brand-400 via-rose-400 to-fuchsia-500 bg-300% bg-clip-text text-transparent animate-shine">performance marketer</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300/90 mb-12">based in Dubai</p>
            <div className="w-full flex justify-center">
              <button onClick={() => scrollToSection('about')} className="mx-auto inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 via-rose-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:shadow-rose-500/30 transition-all duration-300 hover:scale-[1.03] ring-1 ring-white/10">
                Explore my work
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 bottom-16 md:bottom-12 flex justify-center animate-bounce">
          <button onClick={() => scrollToSection('about')} className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2">scroll to continue</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal" data-delay="50ms">
              <span className="text-orange-500 font-semibold text-sm tracking-wide uppercase">01. About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
                Turning ad budgets into quality leads and revenue
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  With 4 years of hands-on experience, I help businesses grow by turning ad budgets into quality leads and revenue. I specialize in full-funnel marketing — from targeted ads to optimized landing pages and automated workflows.
                </p>
                <p>
                  My approach combines data-driven insights with creative testing, always focusing on lowering cost-per-lead while improving lead quality. When I'm not optimizing campaigns, I'm building scalable marketing systems that keep sales teams busy and happy.
                </p>
              </div>
              <div className="mt-10">
                <button className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 via-rose-500 to-fuchsia-500 text-white font-semibold hover:opacity-95 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 ring-1 ring-white/10">
                  More about me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative reveal" data-delay="120ms">
              <div className="bg-gradient-to-br from-brand-50 to-rose-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <TrendingUp className="w-8 h-8 text-brand-500 mb-4" />
                    <h3 className="font-bold text-2xl text-slate-900">150+</h3>
                    <p className="text-slate-600">Campaigns Optimized</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Users className="w-8 h-8 text-brand-500 mb-4" />
                    <h3 className="font-bold text-2xl text-slate-900">50+</h3>
                    <p className="text-slate-600">Global Clients</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Target className="w-8 h-8 text-brand-500 mb-4" />
                    <h3 className="font-bold text-2xl text-slate-900">25%</h3>
                    <p className="text-slate-600">Avg. Cost Reduction</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <BarChart3 className="w-8 h-8 text-brand-500 mb-4" />
                    <h3 className="font-bold text-2xl text-slate-900">4+</h3>
                    <p className="text-slate-600">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-brand-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold shadow-xl">
                Worked With Clients Across The Globe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 reveal">
            <div>
              <span className="text-brand-600 font-semibold text-sm tracking-wide uppercase">02. Recent Projects</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Featured Work</h2>
            </div>
            <button className="hidden md:inline-flex items-center text-slate-600 hover:text-orange-500 transition-colors duration-300 group">
              View all works
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer reveal" data-delay={`${(index%4)*80}ms`}>
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-white/80">{project.category}</p>
                  </div>
                </div>
                <div className="md:hidden">
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-slate-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-brand-600 font-semibold text-sm tracking-wide uppercase">03. My Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
              Every campaign follows a proven 5-step process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              to ensure growth and ROI
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600"></div>
            
            <div className="space-y-16">
              {processSteps.map((process, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} reveal`} data-delay={`${index*120}ms`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{process.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {process.step}
                    </div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-brand-300 font-semibold text-sm tracking-wide uppercase">04. Proudly Trusted By</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">Let's work together</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 reveal">
              <MessageCircle className="w-12 h-12 text-brand-300 mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                "Working with Neha brought clarity, structure, and measurable growth to our campaigns. Her professionalism and precision set a high benchmark."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-rose-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  R
                </div>
                <div>
                  <div className="font-semibold text-lg">Rohit Achalare</div>
                  <div className="text-slate-300">Director at Achalare Welworth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Let's Connect</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                For collaborations, portfolio inquiries, or project discussions, please use the form or reach out via email.
              </p>
              <div className="space-y-4">
                <a href="mailto:hello@worxwithneha.com" className="flex items-center text-lg text-slate-600 hover:text-orange-500 transition-colors duration-300">
                  <Mail className="w-6 h-6 mr-3" />
                  hello@worxwithneha.com
                </a>
                <a href="#" className="flex items-center text-lg text-slate-600 hover:text-orange-500 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm reveal" data-delay="120ms">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Comment or Message *</label>
                  <textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className={`w-full py-4 px-8 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gradient-to-r from-brand-500 via-rose-500 to-fuchsia-500 text-white hover:opacity-95 transform hover:scale-105 shadow-lg hover:shadow-rose-500/30'
                  }`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="bg-gradient-to-r from-brand-500 via-rose-500 to-fuchsia-500 bg-300% bg-clip-text text-transparent animate-shine">Neha</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hello@worxwithneha.com" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Neha. Performance Marketing Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;