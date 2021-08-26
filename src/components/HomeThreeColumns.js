import React from 'react'
import HomeThreeColumnsElement from "./HomeThreeColumnsElement";


export default function HomeThreeColumns() {
    return (
        <div className="home__three-columns" id="three-columns">
            <HomeThreeColumnsElement 
                number="10" 
                title="Oddanych worków" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque 
                vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <HomeThreeColumnsElement 
                number="5" 
                title="Wspartych organizacji" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque 
                vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
            <HomeThreeColumnsElement 
                number="7" 
                title="Zorganizowanych zbiórek" 
                text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque 
                vel enim a elit viverra elementuma. Aliquam erat volutpat."
            />
        </div>
    )
}
