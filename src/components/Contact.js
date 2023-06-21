function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div className="contact__info">
                  <h3>Phone</h3>
                  <a
                    href="https://api.whatsapp.com/send?phone=53448517"
                    target="_blank"
                  >
                    +53 53448517
                  </a>
                </div>
              </div>
              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:stefan.topallovic@gmail.com">
                    mhernandezbrocat@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-map-location-dot"></i>
                </span>
                <div className="contact__info" target="_blank">
                  <h3>Location</h3>
                  <a
                    href="https://www.google.com/maps/place/La+Habana,+Cuba/@23.0509168,-82.4981599,11z/data=!3m1!4b1!4m12!1m5!8m4!1e2!2s116591846781663778257!3m1!1e1!3m5!1s0x88cd774cbdf600e1:0x4e294d7e1a770d60!8m2!3d23.1135925!4d-82.3665956!16zL20vMGQ2aG4?entry=ttu"
                    target="_blank"
                  >
                    Havana, Cuba
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
