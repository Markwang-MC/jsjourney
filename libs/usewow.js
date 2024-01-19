import {useEffect,useState,useRef} from "react"
const useWow = () => {
  const ref = useRef(null);
  useEffect(() => {
    if(!ref.current.classList.contains("wow"))
    ref.current.classList.add("wow"); // 初始化时添加 .wow 类
    const handleScroll = () => {
      if (ref.current.classList.contains("wow-visible")) return
      const offset = ref.current.getAttribute("data-wow-offset") || "0";
      const threshold = parseFloat(offset);
      const scrollY = window.scrollY || window.pageYOffset;
      const elementTop = ref.current.getBoundingClientRect().top + scrollY;
      const windowHeight = window.innerHeight;
    
      if ((windowHeight-ref.current.getBoundingClientRect().top)>threshold) {
        ref.current.classList.add("wow-visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ref;
};

export default useWow;
