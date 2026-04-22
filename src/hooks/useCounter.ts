"use client";
import { useEffect, useRef, useState } from "react";

// Hook que anima um número do zero até o valor alvo ao entrar na viewport
export const useCounter = (target: number, duration = 2000, startOnMount = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(startOnMount);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!hasStarted) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      const currentRef = ref.current;
      if (currentRef) observer.observe(currentRef);
      return () => { if (currentRef) observer.unobserve(currentRef); };
    }
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing ease-out para desaceleração natural
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + easedProgress * (target - startValue)));

      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, target, duration]);

  return { count, ref };
};
