import { useState } from "react";
import styled from "styled-components";

export const ApplicationView = ({ form }) => {
    const [isOpen, setIsOpen] = useState(false)

    const FloatForm = styled.div`
    width: 15em;
    position:absolute;
    font-size:10px;

    h1{
       text-align:center;
    }

    background: #343433;
    color:#fff;
    right:1em;
    top:1em;
    padding: 2em;
    border-radius: 1em;

`

   return (
      <FloatForm onClick={ ()=> setIsOpen(true) }>
        {/* { !isOpen && <button onClick={ ()=> setIsOpen(false) }>Close</button> } */}
         <h1>FORM</h1>

         {
            Object.entries(form).map( el => el[1][el[0]] && (<Field>
               <h3> { el[0] } </h3>
               <p> {el[1][el[0]]} </p>
            </Field>) )
         }

         

      </FloatForm>
   );
};


const Field = styled.div`
   h3{
      font-size: 1.3em;
   }

   p{
      font-size:0.95em;
      overflow:hidden;
   }

`