import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Shield, 
  FileCheck, 
  Users, 
  BarChart, 
  Lock, 
  CheckCircle, 
  TrendingUp, 
  Award,
  ChevronDown,
  Menu,
  X,
  Stethoscope,
  HeartPulse,
  Activity,
  Building2,
  Target,
  ClipboardCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Zap,
  Brain,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import heroImage from "figma:asset/c4c6e231a9ed53a95071f2f69979b3dec58bad34.png";
import hipaaImage from "figma:asset/499de72b0437491d6e8f5d58e8b00412ec8e94c5.png";
import operatingRoomImage from "figma:asset/ca307cdb40545c44aa6bab91cc5a2a5884556903.png";
import * as Accordion from '@radix-ui/react-accordion';
import { AnimatedCard } from './components/AnimatedCard';
import { HoverCard3D } from './components/HoverCard3D';
import { CounterUp } from './components/CounterUp';
import { InfiniteCarousel } from './components/InfiniteCarousel';
import { ParallaxSection } from './components/ParallaxSection';
import logoImage from 'figma:asset/fa4d3d0a72af23e2a0a697e45d57af1eed1d5a75.png';
import footerLogoImage from 'figma:asset/4bcbd15a36727ad356e2b5b620469456bae083d7.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  return (
    <div ref={containerRef} style={{ position: 'relative' }} className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-slate-200/80 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img src={logoImage} alt="Gravita Oasis Review Solutions" className="h-14" />
          </motion.div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">HOME</a>
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">ABOUT US</a>
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">SERVICES</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">CAREER</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">CONTACT US</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">BLOG</a>
            <button className="text-slate-600 hover:text-blue-600 transition-colors text-sm">More</button>
          </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">HOME</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">ABOUT US</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">SERVICES</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">CAREER</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">CONTACT US</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">BLOG</a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-50/30 to-white/30" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="w-full h-full opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-cyan-500 text-sm tracking-wide">Expert Compliance Services</span>
            </motion.div>

            {/* Fade-in Up Animation for Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            >
              <span className="text-slate-900">Gravitaoasis</span>
              <br />
              <span className="text-cyan-500">Review</span>
              <br />
              <span className="text-indigo-600">Excellence.</span>
            </motion.h1>
            
            {/* Staggered Slide-in for Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg"
            >
              Expert Healthcare Compliance Services are important pillars for assurance for healthcare organizations, encouraging operation within regulatory and legal structures.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-indigo-600 text-white rounded-full font-medium shadow-lg overflow-hidden"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="absolute inset-0 bg-white/20"
                />
                <span className="relative z-10">Free Consultation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-700 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                Our Services
              </motion.button>
            </motion.div>
          </div>

          {/* Hero Image with Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-800 bg-slate-800"
            >
              <img
                src={heroImage}
                alt="Healthcare Team"
                className="w-full h-auto"
              />
              
              {/* Compliance Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Compliance Ready</div>
                  <div className="text-sm text-slate-900">OASIS & HIPAA</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Gravitaoasis Review Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <AnimatedCard direction="left" delay={0}>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={operatingRoomImage}
                    alt="Operating Room - Healthcare Excellence"
                    className="w-full h-auto"
                  />
                  
                  {/* 2021 EST. MISSION Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute bottom-8 left-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl px-8 py-6 shadow-2xl text-white"
                  >
                    <div className="text-5xl mb-1">2021</div>
                    <div className="text-xs tracking-widest opacity-90">EST. MISSION</div>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedCard>

            {/* Right Side - Content */}
            <AnimatedCard direction="right" delay={0.2}>
              <div>
                {/* Small Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <span className="text-cyan-500 text-sm uppercase tracking-widest">About Gravitaoasis Review</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl text-slate-900 mb-6 leading-tight"
                >
                  Expert Healthcare Compliance Services
                </motion.h2>

                {/* Paragraph 1 */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-600 text-lg leading-relaxed mb-6"
                >
                  Expert Healthcare Compliance Services are important pillars for assurance for healthcare organizations, further encouraging them to operate within regulatory and legal structures.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-slate-600 text-lg leading-relaxed mb-8"
                >
                  Gravitaoasis Review helps with <span className="text-cyan-600 font-medium">skilled services</span> that are aimed at the protection of patient data, optimization of clinical documentation, and improvement of operational efficiency.
                </motion.p>

                {/* Quote Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="border-l-4 border-cyan-400 bg-cyan-50/50 p-6 rounded-r-xl"
                >
                  <p className="text-slate-700 italic leading-relaxed">
                    At Gravitaoasis Healthcare Compliance Services, we are committed to HIPAA regulations and deliver compliance solutions tailor-made to the specific demands of healthcare providers.
                  </p>
                </motion.div>
              </div>
            </AnimatedCard>
          </div>


        </div>
      </section>

      {/* Why Healthcare Compliance Solutions Matter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <AnimatedCard direction="left" delay={0}>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <div className="px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm">Compliance Matters</div>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
                  Why Healthcare Compliance Solutions Matter?
                </h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-700 mb-8 leading-relaxed"
                >
                  Healthcare Compliance Consultants ensure that healthcare organizations can successfully and efficiently meet the regulatory demands of healthcare services.
                </motion.p>

                {/* Bullet Points */}
                <div className="space-y-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">They ensure complete protection of patient information.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Expert guidance on HIPAA regulations and compliance with clinical documentation is possible with the best consultant at your service.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Legal risks can be mitigated, and operational efficiency can be boosted with the help of effective solutions imposed by expert consultants from trusted Healthcare Compliance Services.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Complex protocols of compliance, audit, and workflow streamlining are made easy with an expert healthcare consultant.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Healthcare compliance consultants take the responsibility of identifying and bridging the gaps in the process. They are the ones who advise safe measures for the prevention of penalties.</p>
                  </motion.div>
                </div>

                {/* Closing Paragraph Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200"
                >
                  <p className="text-slate-700 leading-relaxed">
                    The healthcare regulations are consistently witnessing changes and Healthcare Compliance Services or Medical Regulatory Compliance are constantly adapting to the change. The expertise of the healthcare compliance consultants certifies that the organizations stay pertinent, compliant, and updated. These solutions are tailor-made for the augmentation of safety and faith of the patients, simultaneously enhancing the overall performance of the organization.
                  </p>
                </motion.div>
              </div>
            </AnimatedCard>

            {/* Right Side - Image */}
            <AnimatedCard direction="right" delay={0.2}>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -15, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                >
                  <img
                    src="https://images.unsplash.com/photo-1638875729378-e2221f0ec7bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tcGxpYW5jZSUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA5MDI2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Healthcare Compliance Technology"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/10 to-blue-600/10" />
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl -z-10" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Certified</div>
                      <div className="text-sm text-slate-900 font-medium">Compliance Ready</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Gravita's Healthcare Compliance Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">Our Services</div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl mb-6 text-slate-900"
            >
              Gravita's Healthcare Compliance Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-700 max-w-4xl mx-auto"
            >
              Gravita Oasis provides broad Healthcare Compliance Services with a sharp and close focus on Healthcare HIPAA Compliance and Medical Regulatory Compliance
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Service 1 - Coding and OASIS Review */}
            <AnimatedCard direction="left" delay={0}>
              <motion.div
                className="relative p-8 rounded-3xl bg-white border-2 border-blue-200 shadow-xl group overflow-hidden h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FileCheck className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-slate-900">Coding and OASIS Review</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Proper PDGM compliance and ICD-10-CM coding for home health organizations.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>

            {/* Service 2 - Prior Authorizations */}
            <AnimatedCard direction="right" delay={0.1}>
              <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-xl group overflow-hidden h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl mb-4">Prior Authorizations</h3>
                  <p className="text-white/90 leading-relaxed">
                    Approvals are efficiently managed so that unnecessary delays in patient care can be controlled, or for, best, completely prevented.
                  </p>
                  <div className="mt-6 flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>

            {/* Service 3 - Clinical Review */}
            <AnimatedCard direction="left" delay={0.2}>
              <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl group overflow-hidden h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ClipboardCheck className="w-8 h-8 text-slate-900" />
                  </motion.div>
                  <h3 className="text-2xl mb-4">Clinical Review</h3>
                  <p className="text-slate-300 leading-relaxed">
                    In-depth chart reviews can be accessed for the verification of accuracy in clinical documentation and compliance.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>

            {/* Service 4 - Data Entry */}
            <AnimatedCard direction="right" delay={0.3}>
              <motion.div
                className="relative p-8 rounded-3xl bg-white border-2 border-indigo-200 shadow-xl group overflow-hidden h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Lock className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-slate-900">Data Entry</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Safe and precise data handling of the EMR systems is another promising benefit of Gravita Healthcare Compliance Services along with its deeper industry knowledge.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-indigo-600 font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>
          </div>

          {/* Bottom Statement with Image Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1652787542567-f86c0b4c0269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29kaW5nJTIwaGVhbHRoY2FyZSUyMGRvY3VtZW50YXRpb258ZW58MXx8fHwxNzcwOTAyNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare Documentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
                  Gravita ensures accuracy, readiness of the audit, and competent operations through multi-level QA, promising HIPAA-compliant systems and staff training.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Gravita Section with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <AnimatedCard direction="left" delay={0}>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -15, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                >
                  <img
                    src="https://images.unsplash.com/photo-1669236391570-225e7a9f5c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHJlZ3VsYXRvcnklMjBjb21wbGlhbmNlJTIwYXVkaXR8ZW58MXx8fHwxNzcwOTAzMDY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Hospital Regulatory Compliance"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10" />
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl -z-10" />
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl -z-10" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Trusted By</div>
                      <div className="text-sm text-slate-900 font-medium">Healthcare Orgs</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedCard>

            {/* Right Side - Content */}
            <AnimatedCard direction="right" delay={0.2}>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <div className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">Regulatory Excellence</div>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
                  Regulatory Compliance Across Healthcare Organisations
                </h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-700 mb-6 leading-relaxed"
                >
                  Health Regulatory Compliance is an extremely crucial factor for safe, legal, and effective healthcare operations. The aim of Gravita Healthcare Compliance Consultants is to ensure that healthcare compliance and its strict regulations are met by the clinics, hospitals, and home health agencies.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-slate-700 mb-6 leading-relaxed"
                >
                  At Gravita Oasis Review Solutions Pvt Ltd., we conduct staff training and make sure they adhere to the state as well as federal regulations. They conduct audits and ensure that organizations implement polices carefully and achieve the best in Health Care Compliance and Regulations.
                </motion.p>

                {/* Highlight Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">
                      Partnering with Gravita Oasis Review rewards healthcare providers with best accreditation maintenance, patient trust, and improved levels of accountability.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose Gravita Section with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <AnimatedCard direction="left" delay={0}>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <div className="px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm">Our Approach</div>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
                  Our Approach to Healthcare Compliance Solutions
                </h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-700 mb-6 leading-relaxed"
                >
                  Gravita Oasis Healthcare Compliance Services believe in a proactive, tailored, and organized approach in Health Regulatory Compliance. Accurate measures are implemented in assessments and the identification of gaps in Healthcare Compliance Solutions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-slate-700 mb-8 leading-relaxed"
                >
                  The belief in integration of technology, enforcement of policies, and competent staff training takes compliance to its advanced levels.
                </motion.p>

                {/* Feature Points */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md border border-slate-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-medium mb-1">Monitoring & Risk Management</h4>
                      <p className="text-slate-600 text-sm">Focus on continuous monitoring and risk management for quality maintenance</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md border border-slate-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-medium mb-1">Better Patient Care</h4>
                      <p className="text-slate-600 text-sm">Reduced legal exposure leads to better patient care and proper workflow</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedCard>

            {/* Right Side - Image */}
            <AnimatedCard direction="right" delay={0.2}>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -15, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
                >
                  <img
                    src="https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMHN5c3RlbSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc3MDkwMzA2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Healthcare Technology Integration"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/10 to-blue-600/10" />
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl -z-10" />
                
                {/* Floating Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-5 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Advanced</div>
                      <div className="text-sm text-slate-900 font-medium">Technology</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">Our Methodology</div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-6">Our Approach to Healthcare Compliance Solutions</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              A proactive, tailored, and organized approach in Health Regulatory Compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard direction="up" delay={0}>
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 shadow-lg text-center h-full"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl mb-3 text-slate-900">Assessment</h3>
                <p className="text-slate-700">
                  Accurate measures implemented in assessments and gap identification
                </p>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard direction="up" delay={0.1}>
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200 shadow-lg text-center h-full"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)' }}
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl mb-3 text-slate-900">Technology Integration</h3>
                <p className="text-slate-700">
                  Belief in integration of technology and enforcement of policies
                </p>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard direction="up" delay={0.2}>
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200 shadow-lg text-center h-full"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)' }}
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl mb-3 text-slate-900">Staff Training</h3>
                <p className="text-slate-700">
                  Competent staff training takes compliance to advanced levels
                </p>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard direction="up" delay={0.3}>
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-200 shadow-lg text-center h-full"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(234, 179, 8, 0.2)' }}
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-xl mb-3 text-slate-900">Monitoring</h3>
                <p className="text-slate-700">
                  Focus on monitoring, risk management, and audits for quality
                </p>
              </motion.div>
            </AnimatedCard>
          </div>

          {/* Compact Quote Card 3 - Bottom Border Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border-l-8 border-blue-600 shadow-xl">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
                At Gravitaoasis Healthcare Compliance Services, we are committed to HIPAA regulations and deliver compliance solutions tailor-made to the specific demands of healthcare providers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section id="benefits" className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold shadow-lg">
                ✓ Key Benefits
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent font-bold">
              Benefits of Regulatory Compliance
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Partner with Gravita Oasis Review for comprehensive compliance benefits that transform your healthcare operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCard direction="up" delay={0}>
              <motion.div 
                className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-xl h-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="w-10 h-10 text-white group-hover:text-blue-600 transition-all duration-500" />
                </motion.div>
                <h3 className="text-2xl mb-4 text-slate-900 group-hover:text-white font-semibold transition-all duration-500">Reduced Risks</h3>
                <p className="text-slate-700 group-hover:text-white/90 leading-relaxed transition-all duration-500">
                  Financial and legal risks reduced with better patient safety through regulatory compliance.
                </p>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard direction="up" delay={0.1}>
              <motion.div 
                className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-purple-200 shadow-xl h-full hover:bg-gradient-to-br hover:from-purple-500 hover:to-purple-600 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <TrendingUp className="w-10 h-10 text-white group-hover:text-purple-600 transition-all duration-500" />
                </motion.div>
                <h3 className="text-2xl mb-4 text-slate-900 group-hover:text-white font-semibold transition-all duration-500">Better Reimbursement</h3>
                <p className="text-slate-700 group-hover:text-white/90 leading-relaxed transition-all duration-500">
                  Enhanced reimbursement processes and streamlined workflow for healthcare agencies.
                </p>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard direction="up" delay={0.2}>
              <motion.div 
                className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-green-200 shadow-xl h-full hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-10 h-10 text-white group-hover:text-green-600 transition-all duration-500" />
                </motion.div>
                <h3 className="text-2xl mb-4 text-slate-900 group-hover:text-white font-semibold transition-all duration-500">Patient Safety</h3>
                <p className="text-slate-700 group-hover:text-white/90 leading-relaxed transition-all duration-500">
                  Patient safety, trust, and confidence in healthcare delivery systems enhanced.
                </p>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard direction="up" delay={0.3}>
              <motion.div 
                className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-yellow-200 shadow-xl h-full hover:bg-gradient-to-br hover:from-yellow-500 hover:to-yellow-600 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-10 h-10 text-white group-hover:text-yellow-600 transition-all duration-500" />
                </motion.div>
                <h3 className="text-2xl mb-4 text-slate-900 group-hover:text-white font-semibold transition-all duration-500">Operational Excellence</h3>
                <p className="text-slate-700 group-hover:text-white/90 leading-relaxed transition-all duration-500">
                  Create a safe environment for patients with reduced financial and legal risks.
                </p>
              </motion.div>
            </AnimatedCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 text-center"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Thanks to the expertise and dedication of Gravita, healthcare providers can now easily focus on the delivery of quality patient care and also ensure that their company meets the demands of all regulatory standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Gravita Leads - 3D Hover Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Why Gravita Oasis Review Leads Among Healthcare Compliance Companies</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Proven success, expertise, and client-focused services that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <HoverCard3D
              icon={<Award className="w-12 h-12" />}
              title="Proven Success"
              description="OASIS reviews, correct coding, and stronger support for clinical documentation are provided by the team. Scalable solutions make compliance look like a cakewalk."
            />
            
            <HoverCard3D
              icon={<Stethoscope className="w-12 h-12" />}
              title="Expert Team"
              description="Certified healthcare compliance consultants combining personalized support with unparalleled industry experience and operational efficiency."
            />
            
            <HoverCard3D
              icon={<Shield className="w-12 h-12" />}
              title="HIPAA Excellence"
              description="Positioned among the top Healthcare Compliance Services because of dedication to HIPAA compliance and exceptional staff training facilities."
            />
          </div>
        </div>
      </section>

      {/* EMR Integration Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm">EMR Integration</div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl mb-6 text-slate-900"
            >
              Bringing Expertise Across a Wide Range of EMRs
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-700 max-w-4xl mx-auto mb-4"
            >
              A wide range of EMR systems is supported by the team at Gravita Healthcare Compliance Consultants. Seamless integration, data entry accuracy, and patient information handling in the safest way possible are the basic things promised by the Health Regulatory Compliance team, which means – you can certainly expect more in Medical Regulatory Compliance!
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-600 max-w-4xl mx-auto"
            >
              Reduction of administrative burden, streamlined workflow, and better compliance through billing and clinical documentation make Gravita the best team of consultants and Healthcare Compliance Services to follow.
            </motion.p>
          </div>

          {/* Infinite Horizontal Logo Carousel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-center"
            >
              <p className="text-sm uppercase tracking-wider text-slate-500 mb-8">Trusted EMR Partners</p>
            </motion.div>

            {/* Logo Container with Infinite Scroll */}
            <div className="relative overflow-hidden py-8">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

              {/* Scrolling Logos */}
              <motion.div
                className="flex gap-16 items-center"
                animate={{
                  x: [0, -1200]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear"
                  }
                }}
              >
                {/* First Set of Logos */}
                <div className="flex gap-16 items-center flex-shrink-0">
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/f3f2517b0f88368cc8a902cb78b40e224f46a046.png" alt="WellSky" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/e34ae61972c0b4b490950320056782785550317d.png" alt="MatrixCare" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/256eac9949fac8faa51410e2a8ad4dc3491e9d5b.png" alt="Axxess" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/f9f4f5789987d5a685340d5b6a873390406c5165.png" alt="Healthcare Synergy" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/a6f5ba687011e31a6ee1a4388bf7a6052ea3b544.png" alt="DataSoftLogic" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/a5e6e365e8c94455255c20c1d4afe736426f27fd.png" alt="Epic" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>

                {/* Second Set (Duplicate for Infinite Effect) */}
                <div className="flex gap-16 items-center flex-shrink-0">
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/f3f2517b0f88368cc8a902cb78b40e224f46a046.png" alt="WellSky" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/e34ae61972c0b4b490950320056782785550317d.png" alt="MatrixCare" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/256eac9949fac8faa51410e2a8ad4dc3491e9d5b.png" alt="Axxess" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/f9f4f5789987d5a685340d5b6a873390406c5165.png" alt="Healthcare Synergy" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/a6f5ba687011e31a6ee1a4388bf7a6052ea3b544.png" alt="DataSoftLogic" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src="figma:asset/a5e6e365e8c94455255c20c1d4afe736426f27fd.png" alt="Epic" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm">FAQs</div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-700">Everything you need to know about healthcare compliance</p>
          </motion.div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: "What are healthcare compliance solutions?",
                a: "Healthcare compliance solutions are frameworks, processes, and tools encouraging healthcare companies to understand and follow the most complex regulations, laws, and ethical standards. The idea is to ensure better data privacy and patient safety, further avoiding waste, fraud, and abuse through the stages of monitoring, training, and risk assessment in Health Regulatory Compliance."
              },
              {
                q: "Why is regulatory compliance important in healthcare?",
                a: "Medical Regulatory compliance managed by Healthcare Compliance Services is crucial for all healthcare services so that they can adhere to legal and federal laws, preserve patient information with utmost safety, minimize the possibilities of penalties, and maintain the accreditation of the company in Health Regulatory Compliance."
              },
              {
                q: "Who needs healthcare compliance solutions?",
                a: "Organizations that are involved with the handling of patient data and delivering clinical services should adhere to compliance solutions that demand proper Medical Regulatory Compliance in the form of professional Healthcare Compliance Consultants. This includes hospitals, clinics, home health agencies, and any healthcare provider handling sensitive patient information."
              },
              {
                q: "How do healthcare compliance solutions support healthcare organizations?",
                a: "Medical Regulatory Compliance is completed through policy implementation, audits, staff training, risk assessments, and related support to make sure that compliance is relevant and adheres to even stringent laws in healthcare. Our comprehensive approach ensures continuous monitoring and improvement of compliance standards."
              },
              {
                q: "What challenges do healthcare organizations face with regulatory compliance?",
                a: "Common challenges may include complex regulations, documentation issues, penalties, and data privacy risks. Professional and trusted Healthcare Compliance Services or Healthcare Compliance Consultants help find the most feasible solution tailored to your organization's specific needs and challenges."
              }
            ].map((faq, index) => (
              <Accordion.Item 
                key={`item-${index + 1}`} 
                value={`item-${index + 1}`} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors group">
                    <span className="text-xl text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown className="w-6 h-6 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-8 pb-6 text-slate-700 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Enhance Your Compliance?</h2>
            <p className="text-xl text-slate-700 mb-12">
              Partner with Gravita Oasis Review for expert healthcare compliance services that protect your organization and patients.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-xl overflow-hidden group shadow-lg flex items-center gap-2"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="absolute inset-0 bg-white/20"
                />
                <span className="relative z-10">Contact Us Today</span>
                <ArrowRight className="relative z-10 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white border-2 border-blue-600 text-blue-600 rounded-xl text-xl shadow-lg hover:bg-blue-50 transition-colors"
              >
                Schedule a Demo
              </motion.button>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 grid md:grid-cols-3 gap-6"
            >
              <div className="flex items-center justify-center gap-3 text-slate-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>info@gravitaoasis.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Healthcare District</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+918019198037" className="hover:text-white transition-colors">
                    +91 8019198037
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+18137081643" className="hover:text-white transition-colors">
                    +1 (813) 708-1643
                  </a>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                  <div>
                    <a href="mailto:info@gravitaoasisreview.com" className="hover:text-white transition-colors block">
                      info@gravitaoasisreview.com
                    </a>
                    <a href="mailto:vinod@gravitaoasisreview.com" className="hover:text-white transition-colors block">
                      vinod@gravitaoasisreview.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-white">Address</h4>
              <div className="text-slate-300 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <a 
                    href="https://maps.google.com/?q=#181, Amarjyothi Layout, Domlur, Bangalore, Karnataka India 560071" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    #181, Amarjyothi Layout, Domlur,<br />
                    Bangalore, Karnataka India 560071
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">OASIS Review</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Clinical Review</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Prior Authorizations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-white">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
                >
                  <Youtube className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
                >
                  <Facebook className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>© Gravita Oasis Review Solutions Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
