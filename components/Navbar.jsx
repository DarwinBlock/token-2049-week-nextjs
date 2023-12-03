"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(window.innerWidth < 769 || pathname === "/admin");

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

	window.addEventListener('resize', (e) => {
		if(pathname === "/admin"){
			setCollapsed(true)
			return;
		}
		const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if(windowWidth < 769)
			setCollapsed(true);
		else
			setCollapsed(false);
	})

	return (
		<header class="header navbar-expand-lg" tw="exclude">
  <div class="t-global">
      <div class="container-lg">
        <a href="http://www.token2049.com/"><span class="arrow">← </span>TOKEN2049 GLOBAL</a>
      </div>
    </div>
    <div class="main">
      <div class="container-lg">
        <div class="menu_dv">
          <div class="header-left">
            <a href="https://www.asia.token2049.com/">
              <img src='/Token-logo.png' alt="Token2049" />
            </a>
          </div>

          <button onClick={() => setCollapsed(prev => !prev)} class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
              {collapsed ? <i class="fa fa-bars" aria-hidden="true"><img src='/menu-bar.png'/></i>:
              <img width={24} src='/close-new.png' />}
            </span>
          </button>

          <div className={"header-right navbar-collapse " + (collapsed? 'collapse':'')} id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item onlymb"><a href="https://www.asia.token2049.com/tickets" class="nav-link">TICKETS</a></li>
              <li class="nav-item"><a href="https://www.asia.token2049.com/speakers" class="nav-link">SPEAKERS</a></li>
              <li class="nav-item"><a href="https://www.asia.token2049.com/agenda" class="nav-link">AGENDA</a></li>
              {/* <!-- <li class="nav-item age-nda dropdown">
                   <div class="agenda_new"> <span class="formbh" onclick="myfunction()" id="formbh"></span>
                <a href="https://www.asia.token2049.com/agenda" class="nav-link">AGENDA</a></div>
                  <div class="dropdown-content hide" id="dropdown-content">
                    <a href="https://www.asia.token2049.com/agenda">OKX MAINSTAGE</a>
                    <a href="https://www.asia.token2049.com/stage-2">STAGE 2</a>
                    <a href="https://www.asia.token2049.com/kucoin-stage">KUCOIN STAGE</a>
                  </div>
              </li> --> */}
              <li class="nav-item">
                <a href="https://www.asia.token2049.com/partners" class="nav-link">PARTNERS</a>
              </li>
              <li class="nav-item">
                <a href="https://www.asia.token2049.com/travel" class="nav-link">TRAVEL</a>
              </li>
               <li class="nav-item">
                <a href="https://www.asia.token2049.com/travel" class="nav-link">SIDE EVENTS</a>
              </li>
              <div class="nav-item exhibt heder_btn">
                <a href="https://www.asia.token2049.com/partners" class="btn nav-link">EXHIBIT</a>
                <a href="https://www.asia.token2049.com/tickets" class="btn bttn nav-link">TICKETS</a>
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
