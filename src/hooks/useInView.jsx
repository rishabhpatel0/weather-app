import { useEffect, useRef, useState } from 'react';

export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observerTarget = ref.current;

    if (!observerTarget) {
      console.warn('⚠️ useInView: Ref not attached to any element');
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(observerTarget);

    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
    };
  }, [ref.current, options]);

  return [ref, inView];
}
