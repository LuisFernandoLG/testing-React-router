import styled from "styled-components";
import { useApplicationForm } from "../hooks/useApplicationForm";
import { ApplicationView } from "./ApplicationView";
import { ErrorMessageForm } from "./ErrorMessageForm";
import { FaExclamationCircle } from "react-icons/fa";

const initialForm = {
   name: {
      name: "",
      visited: false,
   },
   email: {
      email: "",
      visited: false,
   },
   phone: {
      phone: "",
      visited: false,
   },
   gender: {
      gender: "",
      visited: false,
   },
};

const validations = (form) => {
   let errors = {};

   let nameRegex = /^([a-z ñáéíóú]{2,60})$/i;
   let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   let phoneRegex = /^(\()?\d{3}(\))?(|\s)?\d{3}(|\s)\d{4}$/;

   if (form.name.visited) {
      if (form.name.name === "") errors.name = "Campo vacío";
      else if (!nameRegex.test(form.name.name)) errors.name = "Nombre invalido";
   }

   if (form.email.visited) {
      if (form.email.email === "") errors.email = "Campo vacío";
      else if (!emailRegex.test(form.email.email)) errors.email = "Correo invalido";
   }

   if (form.phone.visited) {
      if (form.phone.phone === "") errors.phone = "Campo vacío";
      else if (!phoneRegex.test(form.phone.phone)) errors.phone = "Teléfono invalido";
   }
   if (form.gender.visited) {
      if (form.gender.gender === "") errors.gender = "Selecciona tu género";
   }

   return errors;
};

export const ApplicationForm = () => {
   const { form, errors, handleChange, hanldeBlur, handleSubmit } = useApplicationForm(
      initialForm,
      validations
   );

   return (
      <>
         <StyledForm onSubmit={handleSubmit}>
            <WrapperInput>
               <StyledInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  value={form.name.name}
                  onChange={handleChange}
                  onBlur={hanldeBlur}
               />
               <label htmlFor="name">Name</label>

               {errors.name && (
                  <ErrorMessageForm
                     icon={<FaExclamationCircle />}
                     message={errors.name}
                  />
               )}
            </WrapperInput>

            <WrapperInput>
               <StyledInput
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder=" "
                  value={form.phone.phone}
                  onChange={handleChange}
                  onBlur={hanldeBlur}
               />
               <label htmlFor="phone">Phone</label>

               {errors.phone && (
                  <ErrorMessageForm
                     icon={<FaExclamationCircle />}
                     message={errors.phone}
                  />
               )}
            </WrapperInput>

            <WrapperInput>
               <StyledInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  onChange={handleChange}
                  value={form.email.email}
                  onBlur={hanldeBlur}
               />
               <label htmlFor="email">email</label>

               {errors.email && (
                  <ErrorMessageForm
                     icon={<FaExclamationCircle />}
                     message={errors.email}
                  />
               )}
            </WrapperInput>

            <label htmlFor="male">Male</label>
            <StyledInput
               type="radio"
               name="gender"
               value="male"
               checked={form.gender.gender === "male"}
               onChange={handleChange}
            />

            <label htmlFor="famale">Famale</label>
            <StyledInput
               type="radio"
               name="gender"
               value="famale"
               onChange={handleChange}
               checked={form.gender.gender === "famale"}
            />

            <input type="submit"></input>
         </StyledForm>

         <ApplicationView form={form} />
      </>
   );
};

const WrapperInput = styled.div`
   /* background:gray; */
   display: flex;
   align-items: flex-end;
   font-size: "helvetica";
   margin: 30px 0;
   width: 70%;
   position: relative;
   border-bottom: 2px solid #272727;

   &:hover {
      border-bottom: 2px solid #3d84b8;
   }

   label {
      position: absolute;
      left: 0;
      pointer-events: none;
      bottom: 0;

      transition: transform 0.3s ease-in-out;
      /* transition: color 0.3s ease-in-out;
      transition: font-weight 0.3s ease-in-out; */
   }

   input {
      flex-grow: 1;
      height: 100%;
      border: none;
      outline: none;
      padding: 10px;
   }

   input:not(:placeholder-shown) + label {
      transform: translateY(-200%);
      font-weight: 800;
      color: #3d84b8;
   }

   input:focus + label {
      transform: translateY(-200%);
      font-weight: 800;
      color: #3d84b8;
   }
`;

const StyledInput = styled.input``;

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
`;
