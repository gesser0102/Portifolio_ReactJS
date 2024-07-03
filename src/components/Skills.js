import React, { Component } from "react";
import Fade from 'react-reveal/Fade';


class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills) {
        return (
          <li className="list-inline-item mx-5 skill-card">
            <span>

              <div className="text-center skills-tile" style={{ borderRadius: "10%"}} >
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>              
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
            <div className="col-md-12 text-center">
              <Fade left duration={2000}>
                <ul className="list-inline mx-auto skill-icon">{skills}</ul>
              </Fade>
            </div>
        </div>
      </section>
    );
  }
}

export default Skills;
