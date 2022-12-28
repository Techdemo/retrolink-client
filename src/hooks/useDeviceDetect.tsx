import { useState, useEffect } from 'react';
import { isBrowser } from 'services/isBrowser';

const getWidth = () => isBrowser && window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

export const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState<Boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const width = getWidth();

    if (width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    let timeoutId = undefined as undefined | number | NodeJS.Timeout;

    const resizeListener = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setWindowWidth(width);

      }, 150)
    };

    if (isBrowser){
      window.addEventListener('resize', resizeListener);

      return () => window.removeEventListener('resize', resizeListener);
    }
  }, [windowWidth]);

  return { isMobile };
};