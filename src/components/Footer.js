function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <div className="footerc-div">
              <h3>Living, learning, & leveling up one day at a time.</h3>
              <p>
                Copyright © {new Date().getFullYear()}. All rights are reserved
              </p>
            </div>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/miguel-luis-hernandez-brocat-428b9a206/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mhernandezbrocat"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
