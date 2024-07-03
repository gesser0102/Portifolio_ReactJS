import React,{ Component } from "react";


class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span  className="m-4 links">
            <a href={network.url} target="_blank" rel="noopner noreferrer">
              <i className={network.class} ></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">

                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;