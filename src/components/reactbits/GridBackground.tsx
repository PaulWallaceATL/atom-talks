'use client';

export default function GridBackground() {
  return (
    <div className="grid-background">
      <style jsx>{`
        .grid-background {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </div>
  );
}

