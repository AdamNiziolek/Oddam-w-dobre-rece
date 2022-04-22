import React from 'react'
import ThreeColumnsElement from "./ThreeColumnsElement";

export default function ThreeColumns() {
    return (
        <div className="three-columns">
            <ThreeColumnsElement 
                number="10" 
                title="Oddanych worków" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque 
                vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <ThreeColumnsElement 
                number="5" 
                title="Wspartych organizacji" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque 
                vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <ThreeColumnsElement 
                number="7" 
                title="Zorganizowanych zbiórek" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque 
                vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
        </div>
    )
}
