import React,{ Component } from "react";
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
      var about2 = this.props.resumeBasicInfo.description2;
    }
    
    if (this.props.resumeCv){
      var cv = this.props.resumeCv.data.map(function(res){
        return(
          <div className="m-1 cv">
          <a href={res.link}>
            {res.title}
          </a>
        </div>

        );
        
      })
    }

    

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <Fade left duration={2000}>
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    src={profilepic}
                    alt="Avatar placeholder"
                    style={{ marginBottom: "20px" }}
                  />
                <div className="col-md-12">
                  {cv} 
                </div>
                </span>
              </div>
            </div>
            </Fade>
            <Fade right duration={2000} delay={1000}>
            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    <span className="wave-2">
                      {about}
                    <br />
                      {about2}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            </Fade>
          </div>  
                
        </div>
        
      </section>
    );
  }
}

export default About;
