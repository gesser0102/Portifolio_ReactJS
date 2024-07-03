import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


  
const Form = () => {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();




  const sendEmail = (e) => {
    e.preventDefault();

    if (nameInput.current.value === "" || emailInput.current.value === "" || messageInput.current.value === "") {
      // If any of the required fields are empty, show an error message and don't send the email
      alert("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_wmud3fn",
        "template_hxez9rg",
        form.current,
        "xwSMZRG07uSSn9vZg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );


  };


  return (

    <StyledContactForm>
      <h3>Get in touch</h3>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder="name" required ref={nameInput} />
      <label>E-mail</label>
      <input type="email" name="user_email" placeholder="E-mail" required ref={emailInput} />
      <label>Message</label>
      <textarea name="message" placeholder="Message" required ref={messageInput} />
      <input type="submit" value="Send" />
    </form>
    </StyledContactForm>
  );

};

export default Form;

const StyledContactForm = styled.div`
  width: 500px;
  justify-content: center;
  
  h3{
    text-align: center;
    padding-bottom: 20px;
  }
  
  form {
    border: 1px solid #111;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    padding: 20px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {     
      text-align: center;
      font-weight: bold;
      margin-top: 2rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }

    input[type="submit"]:hover {
      background: rgb(0, 206, 158);
    }
  }
`;
