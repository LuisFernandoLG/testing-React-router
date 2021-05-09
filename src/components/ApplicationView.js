import { useState } from "react";
import styled from "styled-components";

export const ApplicationView = ({ form }) => {
    const [isOpen, setIsOpen] = useState(false)

    const FloatForm = styled.div`
    position:absolute;
    font-size:10px; 

    background: #343433;
    color:#fff;
    right:1em;
    top:1em;
    padding: .7em;
    border-radius: 1em;

    p{
        font-size: 1.2em;
    }
`

   return (
      <FloatForm onClick={ ()=> setIsOpen(true) }>
        { !isOpen && <button onClick={ ()=> setIsOpen(false) }>Close</button> }
         <h1>View</h1>

         <p>{form.name.name} </p>
         <p>{form.phone.phone} </p>
         <p>{form.email.email} </p>
      </FloatForm>
   );
};


