import { Phone, Mail, MapPin, Clock, ShieldCheck, Car } from "lucide-react";
import ContactForm from "src/components/Form/ContactForm";
import SuccessModal from "src/components/Modals/SuccessModal";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500 selection:text-slate-950">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" /> Direct Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Get in Touch With Us
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Have questions about buying, renting, or custom fleet reservations? Our concierge team is ready 24/7.
          </p>
        </div>

        {/* Main Grid Card */}
        <div className="grid lg:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
          
          {/* Left Column: Visual Fleet Showcase & Quick Contact Info */}
          <div className="lg:col-span-5 relative p-8 lg:p-12 flex flex-col justify-between overflow-hidden bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 border-r border-slate-800/60">
            
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Top Content */}
            <div className="relative z-10 space-y-8">
              
              {/* Featured Vehicle Badge Container */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-slate-800 shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Automotive Concierge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-cyan-400" /> Concierge Desk
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online Now
                  </span>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-5 pt-2">
                <a 
                  href="tel:4706011911" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Call or WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">+1 (470) 601-1911</span>
                  </div>
                </a>

                <a 
                  href="mailto:support@pagedone.com" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Email Us</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">support@pagedone.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Showroom Address</span>
                    <span className="text-sm font-semibold text-slate-200">654 Sycamore Ave, WA 76543</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Schedule Badge */}
            <div className="relative z-10 pt-8 border-t border-slate-800/60 mt-8 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" /> Mon - Sun: 08:00 - 22:00
              </span>
              <span className="text-slate-500">WA Showroom</span>
            </div>

          </div>

          {/* Right Column: Contact Form Wrapper */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center bg-slate-900/20">
            <div className="max-w-xl mx-auto w-full space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                <p className="text-xs text-slate-400">Fill out the form below and an agent will reach out within 15 minutes.</p>
              </div>

              {/* Render your custom ContactForm component */}
              <ContactForm />
            </div>
          </div>

        </div>

      </div>
      <SuccessModal/>
    </div>
  );
};

export default Contact;