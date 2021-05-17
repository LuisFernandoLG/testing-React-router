import { useHistory, useLocation } from "react-router"

export const Productos = () => {

    let {search} = useLocation()
    let query = new URLSearchParams(search)
    
    const LIMIT = 20;
    let start =  parseInt(query.get("inicio")) || 1;
    let end =  parseInt(query.get("fin")) || LIMIT;

    let history = useHistory()


    const handlePrev = ()=> {
        history.push({search : `?inicio=${start - LIMIT}&fin=${end - LIMIT}`})
 
    }
    const handleNext = ()=> {
        history.push({search : `?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
    }
        
        
    return (
        <div>
            <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
            { start > LIMIT && <button onClick={handlePrev}>Anterior</button> }
            
            <button onClick={handleNext}>Siguiente</button>
        </div>
    )
}
