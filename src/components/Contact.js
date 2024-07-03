import React,{ Component } from "react";
import Fade from 'react-reveal/Fade';
import Form from "./Form";

class Contact extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.contact;

    }
    

    return (
      <section id="contact">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1> 
          
          <div className="row contact-container">
            <Fade left duration={2000} delay={500}>
            <div className="col-12 col-lg-5 forms">
                <Form 
                resumeForm={this.props.resumeForm}
                resumePlace={this.props.resumePlace}
                />
              </div>
              </Fade>
              <div className="col-12 col-lg-3 infos">
              <div className="list">
              <Fade duration={2000} delay={1000}>
              <ul>
              <Fade right duration={2000} delay={500}>
                <li><i className="fa fa-user"></i><span className="name">  Rodrigo Gesser</span></li></Fade>
                <Fade right duration={2000} delay={1000}>
                <li><i className="fa fa-envelope"></i><span className="email">  rodrigo@rgesser.tech</span></li></Fade>
                <Fade right duration={2000} delay={1300}>
                <li><i className="fas fa-map-marker-alt"></i><span className="loc">  Florianópolis, SC</span></li></Fade>
              </ul>
              </Fade>
              </div>
              </div>
            </div>

        </div>

       </section>
    );
  }
}

export default Contact;
