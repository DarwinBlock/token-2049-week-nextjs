const Navbar = () => {
    return (  
      <header className="header navbar-expand-lg">
      <div className="t-global">
        <div className="container-lg">
          <a href="http://www.token2049.com/"><span className="arrow">← </span>TOKEN2049 GLOBAL</a>
        </div>
      </div>
      <div className="main">
        <div className="container-lg">
          <div className="menu_dv">
            <div className="header-left">
              <a href="#">
                <img src="/Token-logo.png" alt="Token2049" />
              </a>
            </div>
  
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i className="fa fa-bars" aria-hidden="true"><img src="/menu-bar.png" /></i>
                <i className="fa fa-close"><img src="/close-icon.svg" /></i>
              </span>
            </button>
  
            <div className="header-right collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="https://www.asia.token2049.com/speakers" className="nav-link">SPEAKERS</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.asia.token2049.com/agenda" className="nav-link">AGENDA</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.asia.token2049.com/partners" className="nav-link">PARTNERS</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.asia.token2049.com/travel" className="nav-link">TRAVEL</a>
                </li>
  
                <div className="nav-item exhibt heder_btn">
                  <a href="https://www.asia.token2049.com/partners" className="btn nav-link">EXHIBIT</a>
                  <a href="https://www.asia.token2049.com/tickets" className="btn bttn nav-link">TICKETS</a>
                </div>
  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
}
 
export default Navbar;