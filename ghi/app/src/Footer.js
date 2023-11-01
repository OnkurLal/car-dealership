const Footer = () => {
  return (
    <>
      <div className="text-white p-3">
        <div className="row">
          <div className="col text-center d-flex align-items-center justify-content-center">
            <p>
              Created by Micheal & Onkur<br></br>&copy;2023
            </p>
          </div>
          <div className="col d-flex justify-content-evenly align-items-center">
            <i className="fa-brands fa-square-instagram fa-2xl"></i>
            <i className="fa-brands fa-facebook fa-2xl"></i>
            <i className="fa-brands fa-square-x-twitter fa-2xl"></i>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <p> Contact Us</p>
            <p>
              <i className="fa-solid fa-square-phone"></i>888-222-3232
            </p>
            <p>
              <i className="fa-solid fa-inbox"></i>michaelandonkur@carcar.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
