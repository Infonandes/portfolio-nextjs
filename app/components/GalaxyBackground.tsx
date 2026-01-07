'use client'

export default function GalaxyBackground() {
  return (
    <div
      id="galaxy-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
      }}
    >
      {/* Simple CSS stars for better performance */}
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <div className="stars-layer-3"></div>

      <style jsx>{`
        .stars-layer-1,
        .stars-layer-2,
        .stars-layer-3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .stars-layer-1 {
          background-image:
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 75% 25%, white, transparent);
          background-size: 200% 200%;
          animation: stars-float 100s linear infinite;
          opacity: 0.7;
        }

        .stars-layer-2 {
          background-image:
            radial-gradient(1px 1px at 40% 20%, rgba(176, 38, 255, 0.8), transparent),
            radial-gradient(1px 1px at 70% 80%, rgba(0, 243, 255, 0.8), transparent),
            radial-gradient(1px 1px at 15% 60%, rgba(176, 38, 255, 0.6), transparent),
            radial-gradient(1px 1px at 85% 40%, rgba(0, 243, 255, 0.6), transparent);
          background-size: 250% 250%;
          animation: stars-float 150s linear infinite reverse;
          opacity: 0.5;
        }

        .stars-layer-3 {
          background-image:
            radial-gradient(1px 1px at 10% 10%, white, transparent),
            radial-gradient(1px 1px at 30% 90%, white, transparent),
            radial-gradient(1px 1px at 55% 35%, white, transparent),
            radial-gradient(1px 1px at 95% 85%, white, transparent);
          background-size: 300% 300%;
          animation: stars-float 200s linear infinite;
          opacity: 0.3;
        }

        @keyframes stars-float {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  )
}
