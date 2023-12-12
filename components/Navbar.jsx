"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(pathname === "/admin");

	useEffect(() => {
		setCollapsed(window.innerWidth < 769 || pathname === "/admin");
		window?.addEventListener('resize', (e) => {
			if(pathname === "/admin"){
				setCollapsed(true)
				return;
			}
			const windowWidth = window?.innerWidth;
			if(windowWidth < 769)
				setCollapsed(true);
			else
				setCollapsed(false);
		})
	}, [pathname])

	const handleLogout = async () => {
		const response = await fetch("/api/auth/logout", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});

		if (!response.ok) {
			throw await response.json();
		}

		const data = await response.json();
		if (data.success) {
			router.push("/auth");
		}
	};

	// window?.addEventListener('resize', (e) => {
	// 	if(pathname === "/admin"){
	// 		setCollapsed(true)
	// 		return;
	// 	}
	// 	const windowWidth = window?.innerWidth;
	// 	if(windowWidth < 769)
	// 		setCollapsed(true);
	// 	else
	// 		setCollapsed(false);
	// })

	return (
		<header className="header navbar-expand-lg" tw="exclude">
  <div className="t-global">
      <div className="container-lg">
        <a href="http://www.token2049.com/"><span className="arrow">← </span>TOKEN2049 GLOBAL</a>
      </div>
    </div>
    <div className="main">
      <div className="container-lg">
        <div className="menu_dv">
          <div className="header-left">
            <a  href="https://www.dubai.token2049.com">
              <img src='/Token-logo.png' alt="Token2049" />
            </a>
          </div>

          <button onClick={() => setCollapsed(prev => !prev)} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              {collapsed ? <i className="fa fa-bars" aria-hidden="true"><img className="burger-button" src='/menu-bar.png'/></i>:
              <img className="close-burger-btn w-[20px] h-[20px]" width={20} src='/close-icon.svg' />}
            </span>
          </button>

          <div className={"header-right navbar-collapse " + (collapsed? 'collapse':'')} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item onlymb"><a href="https://www.dubai.token2049.com/tickets" className="nav-link">TICKETS</a></li>
              <li className="nav-item"><a href="https://www.dubai.token2049.com/speakers" className="nav-link">SPEAKERS</a></li>
              {/* <li className="nav-item"><a href="https://www.dubai.token2049.com/agenda" className="nav-link">SIDE EVENTS</a></li> */}
              {/* <!-- <li className="nav-item age-nda dropdown">
                   <div className="agenda_new"> <span className="formbh" onclick="myfunction()" id="formbh"></span>
                <a href="https://www.asia.token2049.com/agenda" className="nav-link">AGENDA</a></div>
                  <div className="dropdown-content hide" id="dropdown-content">
                    <a href="https://www.asia.token2049.com/agenda">OKX MAINSTAGE</a>
                    <a href="https://www.asia.token2049.com/stage-2">STAGE 2</a>
                    <a href="https://www.asia.token2049.com/kucoin-stage">KUCOIN STAGE</a>
                  </div>
              </li> --> */}
              <li className="nav-item">
                <a href="https://www.dubai.token2049.com/partners" className="nav-link md:-ml-2">PARTNERS</a>
              </li>
              <li className="nav-item">
                <a href="https://www.dubai.token2049.com/travel" className="nav-link">TRAVEL</a>
              </li>
              <li className="nav-item md:-ml-[26px]">
                <a href="/" className="nav-link side-event-active-link">SIDE EVENTS</a>
              </li>
               <li className="nav-item">
                {/* <a href="https://www.dubai.token2049.com/travel" className="nav-link">SIDE EVENTS</a> */}
              </li>
              <div className="nav-item exhibt heder_btn">
                <a href="https://www.dubai.token2049.com/partners" className="btn nav-link">EXHIBIT</a>
                <a href="https://www.dubai.token2049.com/tickets" className="btn bttn nav-link">TICKETS</a>
              </div>
            </ul>
          </div>
		  {pathname === "/admin" && (
				<div
					onClick={() => handleLogout()}
					className="flex items-center justify-center px-10 py-2 text-base font-semibold rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer"
				>
					Logout
				</div>
			)}
        </div>
      </div>
    </div>
  </header>
	);
};

export default Navbar;
