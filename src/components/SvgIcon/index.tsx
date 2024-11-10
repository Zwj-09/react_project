import React, {useEffect, useRef} from "react";
import {gsap} from "gsap"

const SvgIcon = () => {
    const animatRef = useRef<HTMLDivElement>(null)
    const svgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.item', {rotation: '+=360'})
        }, svgRef)

        return () => ctx.revert()
    }, [])

    return <div ref={svgRef} className="svg">
        <div className="item" ref={animatRef}>aaaa</div>
    </div>
}

export default SvgIcon;
