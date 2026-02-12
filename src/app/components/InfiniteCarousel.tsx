import { motion } from 'motion/react';
import emrLogosImage from "../assets/454be2162f8ee7af347e3b240f2726f6b8b1e014.png";

export function InfiniteCarousel() {
  return (
    <div className="relative overflow-hidden py-12 bg-slate-50 rounded-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl text-slate-900 mb-4">
          Bringing Expertise Across a Wide Range of EMRs to Streamline Your Healthcare Experience
        </h3>
      </div>
      
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <img 
            src={emrLogosImage} 
            alt="EMR Partners - WellSky, MatrixCare, Homecare Homebase, Epic, AXXESS, DataSoftLogic, Healthcare Synergy" 
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
