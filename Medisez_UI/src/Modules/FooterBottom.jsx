import fb from '../img/Social/fb.svg';
import twitter from '../img/Social/twitter.svg';
import instagram from '../img/Social/instagram.svg';
import youtube from '../img/Social/youtube.svg';
import linkedin from '../img/Social/linkedin.svg';
import pinterest from '../img/Social/pinterest.svg';
import logo_footer from '../img/logo/logo_footer.svg';


const FooterBottom = () => {
  return (
    <section class="footer-bottom pt-4 pb-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-lg-4 border-right1">
            <div
              class="wow fadeIn bg-gray animated f-bottom"
              style={{visibility: 'visible', animationName: 'fadeIn'}}
            >
              <h4 class="fdoc mb-3 text-center">Follow Us</h4>
              <div class="row">
                <div class="col-md-12 col-lg-12 text-center ">
                  <a href="#">
                    <img src={fb} class="fb-icon" alt="fb" />
                  </a>
                  <a href="#">
                    <img
                      src={twitter}
                      class="twitter-icon"
                      alt="twitter"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={instagram}
                      class="instagram-icon"
                      alt="instagram"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={youtube}
                      class="youtube-icon"
                      alt="youtube"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={linkedin}
                      class="linkedin-icon"
                      alt="linkedin"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={pinterest}
                      class="pinterest-icon"
                      alt="pinterest"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 border-right1">
            <div class="text-center mb-3">
              <img src={logo_footer} alt="" />
            </div>
            <span class="pt-2 copy-right">
              Copyright © 2021, All rights reserved by{" "}
              <b style={{color: '#fa4949'}}>doctorgaaru.com</b>
            </span>
          </div>
          <div class="col-md-4 col-lg-4">
            <h4 class="fdoc mb-3 text-center">Subscribe Our Newsletter</h4>
            <div class="input-group newsletter">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email"
              />
              <span class="input-group-btn">
                <button class="btn" type="submit">
                  Subscribe
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
