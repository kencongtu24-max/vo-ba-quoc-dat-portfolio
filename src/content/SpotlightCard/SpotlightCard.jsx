import { useRef } from 'react';
import './SpotlightCard.css';

const MAX_TILT_DEG = 6;

const canTilt = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)', tilt = false }) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);

    if (tilt && canTilt()) {
      divRef.current.style.setProperty('--ry', `${(x / rect.width - 0.5) * 2 * MAX_TILT_DEG}deg`);
      divRef.current.style.setProperty('--rx', `${-(y / rect.height - 0.5) * 2 * MAX_TILT_DEG}deg`);
    }
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    divRef.current.style.setProperty('--rx', '0deg');
    divRef.current.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
