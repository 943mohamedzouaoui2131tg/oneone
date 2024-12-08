import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Span( props ) {
    const spanMouse = useRef(null);


    useEffect(() => {
        
        function mouse(e) {
            const { clientX, clientY } = e;
            const animationlistspan = gsap.to(spanMouse.current, {
                x: clientX,
                y: clientY - 87,
                duration: 1,
                width: 10,
                height: 10,
                borderRadius: "50%",
                
            });
        }

        window.addEventListener("mousemove", (e)=>{
            
                mouse(e)
        });
        
        
        return () => {
            window.removeEventListener("mousemove", mouse);
        };
    }, []);
    
    return <span ref={spanMouse} className="curflow"></span>;
}
