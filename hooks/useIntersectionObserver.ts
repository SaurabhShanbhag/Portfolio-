'use client';

import {
  useEffect,
  useRef,
  useState,
  type RefObject,
} from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] {
  const { threshold = 0.15 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold });

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, isVisible];
}
