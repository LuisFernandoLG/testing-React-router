import { useState } from "react"

export const useDraggable = (box1Initial, box2Initial) => {
    const [box1, setBox1] = useState(box1Initial)
    const [box2, setBox2] = useState(box2Initial)
    const [valueDragging, setvalueDragging] = useState({})

    const onDragHandler = (e)=>{
        console.log("moviendo")
        setvalueDragging(
            {
                value : e.target.innerText,
                index : e.target.getAttribute("index")
            }
        )
    }

    const onDragEndHandler = (e)=>{
        console.log("termine de moverme")
        console.log(e.target)
        // console.log(e.target.parentElement)
    }

    const onDropHandler = (e, event)=>{
        console.log(e)
        console.log(event)
        
        // console.log("Nada")

    }
    
    return {onDragHandler, box1, box2, onDragEndHandler, onDropHandler}
    
}
