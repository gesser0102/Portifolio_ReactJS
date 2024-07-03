import React, { Component } from "react";
import emailjs from '@emailjs/browser'
import styled from "styled-components";


class Form extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.messageInput = React.createRef();
    
  }

  sendEmail = (e) => {
    e.preventDefault();

    if (
      this.nameInput.current.value === "" ||
      this.emailInput.current.value === "" ||
      this.messageInput.current.value === ""
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_wmud3fn",
        "template_hxez9rg",
        this.form.current,
        "xwSMZRG07uSSn9vZg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          this.form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );


  };

  

  render() {
    if (this.props.resumeForm && this.props.resumePlace) {
      var names = this.props.resumeForm.name;
      var mail = this.props.resumeForm.email;
      var title = this.props.resumeForm.title;
      var msg = this.props.resumeForm.message;
      var pname = this.props.resumePlace.name;
      var pemail = this.props.resumePlace.email;
      var pmsg = this.props.resumePlace.message;
      var send = this.props.resumePlace.send;



    }

    return (
      <StyledContactForm>
          <h3>{title}</h3>
        <form ref={this.form} onSubmit={this.sendEmail}>
          <label>{names}</label>
          <input
            type="text"
            name="user_name"
            placeholder={pname}
            required
            ref={this.nameInput}
          />
          <label>{mail}</label>
          <input
            type="email"
            name="user_email"
            placeholder={pemail}
            required
            ref={this.emailInput}
          />
          <label>{msg}</label>
          <textarea
            name="message"
            placeholder={pmsg}
            required
            ref={this.messageInput}
          />
          <input type="submit" value={send} />
        </form>
      </StyledContactForm>
    );
  }
}

export default Form;

const StyledContactForm = styled.div`
  width: 500px;
  justify-content: center;

  body[data-theme="dark"] & {
    color: white;
  }

  h3 {
    text-align: center;
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 30px;
    font-family: monospace;
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
      font-family: monospace;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }

    input[type="submit"]:hover {
      background: rgb(238, 153, 101);;
    }
  }
`;

