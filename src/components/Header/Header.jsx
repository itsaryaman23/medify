import React from "react";
import Hstyles from "./Header.module.css";
import logo from "../../assets/logo.svg";


const Header = () => {
  return (
    <>
      <div className={Hstyles.topBanner}>
        <p className={Hstyles.bannerText}>
          {" "}
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>


      <div className={Hstyles.hero}>
        {/* <Container> */}
          <nav className={Hstyles.nav}>
            <div className={Hstyles.navAlign}>
              <img src={logo} alt="logo" width="92px" heigth="27px" />
              <div className={Hstyles.navBtnBox}>
                <p>Find Doctors</p>
                <p>Hospitals</p>
                <p>Medicines</p>
                <p>Surgeries</p>
                <p>Software for Providers</p>
                <p>Facilities</p>
                <button className={Hstyles.bookingBtn}>My Bookings</button>
              </div>
            </div>
          </nav>
        {/* </Container> */}
      </div>
    </>
  );
};

export default Header;
