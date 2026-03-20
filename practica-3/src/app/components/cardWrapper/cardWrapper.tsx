"use client"

import "cardWrapper.css"


type Props = {
    children: React.ReactNode
}


const CardWrapper = ({children}: Props) =>{
    return(
        <div className="wrapper">
            <>{children}</>
        </div>
    )
}
export default CardWrapper;