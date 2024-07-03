import React,{ Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Zoom from 'react-reveal/Zoom';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsModalShow: false,
      deps: null,
      numProjectsDisplayed: 3,
      showAllProjects: false,

    };
  }

  detailsModalShow = (data) => {
    this.setState({ detailsModalShow: true, deps: data });
  };

  detailsModalClose = () => this.setState({ detailsModalShow: false });

  handleShowMoreProjects = () => {
    this.setState({ showAllProjects: true });
  };

  handleHideProjects = () => {
    this.setState({ showAllProjects: false });
  };

  render() {
    if (this.props.resumeBasicInfo) {

    }
    let projects = null;
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      if (this.props.resumeProjects.length) {
        projects = this.props.resumeProjects
          .slice(0, this.state.showAllProjects ? undefined : this.state.numProjectsDisplayed) // slice the array to display only the first numProjectsDisplayed projects if not showing all projects
          .map(function (projects) {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={projects.title}
                style={{ cursor: "pointer" }}
              >
                <span className="portfolio-item d-block">
                  <div
                    className="foto"
                    onClick={() => this.detailsModalShow(projects)}
                  >
                    <div>
                      <img
                        src={projects.images[0]}
                        alt="projectImages"
                        height="230"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                        }}
                      />
                      <br />
                      <p className="project-title-settings mt-3">
                        {projects.title}
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            );
          }, this);
      }
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <Zoom>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
            {this.props.resumeProjects && this.props.resumeProjects.length > this.state.numProjectsDisplayed && !this.state.showAllProjects && (
            <div className="more-img" style={{ display: 'flex', justifyContent: 'center' }}>
              <img src='./images/more.png' onClick={this.handleShowMoreProjects} alt="more"/>
            </div>
            
            )}
            {this.props.resumeProjects && this.state.showAllProjects && (
            
            <div className="less-img" style={{ display: 'flex', justifyContent: 'center' }}>
              <img src='./images/more.png' onClick={this.handleHideProjects} alt="less"/>
              <div className="subtitle"></div>
            </div>
            )}

          </div>
          </Zoom>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={this.detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
