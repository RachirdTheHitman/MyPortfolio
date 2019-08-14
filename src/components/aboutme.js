import React, { Component } from "react";
import CardExampleColored from "./card";
import Footer from "./footer";
import Video from "./video";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  changeClickState = () => {
    this.setState({ isClicked: true });
  };

  render() {
    let page = this.state.isClicked;

    return (
      <div>
        <div className="aboutme-grid1">
          {/* <div>
          <Video id="-7fuHEEmEjs" />
        </div> */}
          <CardExampleColored />
        </div>

        {/* <div className="aboutme-grid2">
          <div class="box">
            <a href="https://www.youtube.com/" target="_blank" class="btn btn-white btn-animation-1">
              Know Me More
            </a>
          </div>
        </div> */}

        <Video
          id="-7fuHEEmEjs"
          page={page}
          key={page}
          changeClickState={this.changeClickState}
        />

        <Footer />
      </div>
    );
  }
}

export default About;
