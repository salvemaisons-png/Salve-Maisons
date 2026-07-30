import { useEffect } from "react";

type OpeningAnimationProps = {
  onComplete: () => void;
};

const OpeningAnimation = ({ onComplete }: OpeningAnimationProps) => {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2500);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="opening-animation" aria-label="Loading Salve Maison">
      <div className="opening-animation__glow" />
      <div className="opening-animation__book" aria-hidden="true">
        <span className="opening-animation__spine" />
        <span className="opening-animation__page opening-animation__page--one">S</span>
        <span className="opening-animation__page opening-animation__page--two">A</span>
        <span className="opening-animation__page opening-animation__page--three">L</span>
        <span className="opening-animation__page opening-animation__page--four">V</span>
        <span className="opening-animation__page opening-animation__page--five">E</span>
      </div>
      <div className="opening-animation__wordmark">
        <p className="opening-animation__name">Salve Maison</p>
        <p className="opening-animation__tagline">Luxury Mobile Spa & Wellness</p>
      </div>
    </div>
  );
};

export default OpeningAnimation;
