import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp"

export const useApplicationForm = (initialForm, validations) => {
   const [form, setForm] = useState(initialForm);
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);
   const [response, setResponse] = useState(null);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
         ...form,
         [name]: {
            [name]: value,
            visited: true,
         },
      });
   };

   const hanldeBlur = (e) => {
      handleChange(e);
      setErrors(validations(form));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setForm(markAsVisited());
      setErrors(validations(form));

      if(Object.keys(errors).length === 0){
         setLoading(true)

         const endpoint = "https://formsubmit.co/ajax/10f16b5027ecd81ecc6bfe03704539d5"
         const options = {
            body : form,
            headers : {
               "Content-Type" : "application/json",
               Accept : "application/json"
            }
         }
         helpHttp().post(endpoint, options)
            .then((res)=>{
               console.log(res)
            })

      }
   };

   const markAsVisited = () => {
      const oldForm = JSON.parse(JSON.stringify(form));
      for (const [key, value] of Object.entries(form)) {
         oldForm[key] = value;
         oldForm[key].visited = true;
      }

      return oldForm;
   };

   return {
      form,
      errors,
      loading,
      response,
      handleChange,
      hanldeBlur,
      handleSubmit,
   };
};
