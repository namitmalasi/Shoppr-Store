import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dgqnvrab1/image/upload/v1638517424/40159852_cocnlr.jpg"
              alt="Founder"
            />
            <Typography>Namit Malasi</Typography>
            <Button color="primary">
              <a
                href="https://github.com/namitmalasi"
                target="_blank"
                rel="noreferrer"
                id="github"
              >
                {" "}
                Visit Github
              </a>
            </Button>
            <span>
              This is an ecommerce wesbite made by <strong>Namit Malasi</strong>
              . Only with the purpose to learn MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Links</Typography>
            <a
              href="https://www.linkedin.com/in/namit-malasi-a4b56310a/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://twitter.com/namitmalasi" target="blank">
              <TwitterIcon className="twitterSvgIcon" />
            </a>

            <a href="https://dev.to/namitmalasi" target="blank">
              <img
                id="devImage"
                src="https://res.cloudinary.com/dgqnvrab1/image/upload/v1638518558/download_1_volist.jpg"
                alt="DevImage"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
