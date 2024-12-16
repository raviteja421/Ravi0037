import logo_main from '../img/logo_main.svg';
import search from '../img/search.png';

const NavBar = () => {
  return (
    <div class="fixed-top">
      <header class="header">
        <nav class="navbar navbar-expand-lg header-nav fixed">
          <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span class="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <a href="index.html" class="navbar-brand logo">
              <img
                src={logo_main}
                class="img-fluid logo-p"
                alt="Logo"
              />
            </a>
          </div>
          <div class="main-menu-wrapper">
            <div class="menu-header">
              <a href="index.html" class="menu-logo">
                <img src={logo_main} class="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" class="menu-close" href="javascript:void(0);">
                <i class="fas fa-times"></i>
              </a>
            </div>
            <ul class="main-nav">
              <li class="active">
                <a href="index.html">Home</a>
              </li>
              <li class="has-submenu">
                <a href="index.html">About Us</a>
              </li>
              <li class="has-submenu">
                <a href="index.html">Contact Us</a>
              </li>
              <li class="has-submenu">
                <a href="index.html">Q&amp;A</a>
              </li>
              <li class="has-submenu">
                <a href="index.html">Health Articles</a>
              </li>

              <li class="login-link">
                <a href="login.html">Login / Signup</a>
              </li>
            </ul>
          </div>
          <ul class="nav header-navbar-rht">
            <li class="nav-item contact-item">
              <div class="header-contact-img">
                <i class="far fa-phone-alt"></i>
              </div>
              <div class="header-contact-detail">
                <p class="contact-info-header"> +91 800 800 6789</p>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link header-login" href="#">
                login / Signup{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="search-sec">
        <div class="search-box">
          <form action="#" style={{justifyContent: 'center'}}>
            <div class="form-group search-location">
              <input
                type="text"
                class="form-control s-loc"
                placeholder="Visakhapatnam"
              />
            </div>
            <div class="custom-select cs1">
              <select>
                <option value="0">Doctors</option>
                <option value="1">Doctors</option>
                <option value="2">Hospitals</option>
                <option value="3">Specialities</option>
              </select>
              <div class="select-selected">Doctors</div>
              <div class="select-items select-hide">
                <div>Doctors</div>
                <div>Hospitals</div>
                <div>Specialities</div>
              </div>
            </div>
            <div class="form-group search-info">
              <input
                type="text"
                class="form-control mm-border"
                placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
              />
            </div>
            <button type="submit" class="btn btn-primary search-btn sh-btn">
            <img src={search} class="img-fluid" alt="search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
