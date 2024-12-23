import { h1 } from "framer-motion/client"
import React, {useEffect, useState} from "react"

const Effect = () => {


    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("workin")
    }, [])
   

    function handleResize (){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
      
    )
}

export default Effect