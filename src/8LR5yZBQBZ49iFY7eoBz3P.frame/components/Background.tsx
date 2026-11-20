import React from 'react'

/** The fixed artwork behind the card, with its light, glow and leaf motion layered on top. */
export function Background({ animate }: { animate: boolean }) {
  return (
    <div className="page-background" aria-hidden="true">
      <div className="bg-stage">
        {animate && (
          <>
            <div className="sun-glow" />
            <div className="window-light" />
            <svg className="curve-shimmer" viewBox="0 0 894 1760" preserveAspectRatio="none">
              <defs>
                <filter id="shimmer-blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
              </defs>
              <path
                d="M894,285 C800,430 620,520 450,545 C300,570 150,640 70,780 C40,830 15,880 0,940"
                pathLength={1000}
                fill="none"
                stroke="#fff3cf"
                strokeWidth={9}
                strokeLinecap="round"
                filter="url(#shimmer-blur)"
              />
            </svg>
            <div className="leaf leaf-left" />
            <div className="leaf leaf-right" />
          </>
        )}
      </div>
    </div>
  )
}
