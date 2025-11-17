'use client';

import { motion } from 'framer-motion';

export default function MeshGradient() {
  return (
    <div className="mesh-gradient" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div
        animate={{
          background: [
            'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.2) 0px, transparent 50%)',
            'radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%)',
            'radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.2) 0px, transparent 50%)',
            'radial-gradient(at 0% 100%, rgba(99, 102, 241, 0.2) 0px, transparent 50%)',
            'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.2) 0px, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.5,
        }}
      />
      <motion.div
        animate={{
          background: [
            'radial-gradient(at 50% 50%, rgba(168, 85, 247, 0.15) 0px, transparent 50%)',
            'radial-gradient(at 80% 20%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)',
            'radial-gradient(at 20% 80%, rgba(99, 102, 241, 0.15) 0px, transparent 50%)',
            'radial-gradient(at 50% 50%, rgba(168, 85, 247, 0.15) 0px, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.6,
        }}
      />
    </div>
  );
}

