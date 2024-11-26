import { useRef, useState } from "react";

interface bentoTilt {
    children?: React.ReactNode,
    className?: string
}


const BentoTilt = ({ children, className='' } : bentoTilt) => {
    const [transformStyle, settransformStyle] = useState('')
const itemRef = useRef<HTMLDivElement>(null)

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if(!itemRef.current) return;

  const {top, left, width, height} = itemRef.current.getBoundingClientRect();

  const relativeX = (e.clientX - left) / width;
  const relativeY = (e.clientY - top) / width

  const tiltX = (relativeY - 0.5) * 5
  const tiltY = (relativeX - 0.5) * -5

  const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`


  settransformStyle(newTransform)
}
const handleMouseLeave = () => {
  
  settransformStyle('')
}
return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
        {children}
    </div>
)
}

export default BentoTilt