import React, {
  createContext,
  useRef,
  useState,
  useContext,
  useEffect,
} from "react";

interface FooterObserverContextType {
  isFooterVisible: boolean;
  footerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const FooterObserverContext = createContext<
  FooterObserverContextType | undefined
>(undefined);

export const useFooterObserver = () => {
  const context = useContext(FooterObserverContext);
  if (!context) {
    throw new Error(
      "useFooterObserver must be used within FooterObserverProvider"
    );
  }
  return context;
};

export const FooterObserverProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <FooterObserverContext.Provider value={{ isFooterVisible, footerRef }}>
      {children}
    </FooterObserverContext.Provider>
  );
};
