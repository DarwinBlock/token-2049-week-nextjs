"use client";

import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();

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

	return (
		<header className="header navbar-expand-lg">
			<div className="t-global">
				<div className="container-lg">
					<a href="http://www.token2049.com/">
						<span className="arrow">← </span>TOKEN2049 GLOBAL
					</a>
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

						<button
							className="navbar-toggler collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon">
								<i className="fa fa-bars" aria-hidden="true">
									<img src="/menu-bar.png" />
								</i>
								<i className="fa fa-close">
									<img src="/close-icon.svg" />
								</i>
							</span>
						</button>

						<div className="header-right collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a href="https://www.asia.token2049.com/speakers" className="nav-link">
										SPEAKERS
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.asia.token2049.com/agenda" className="nav-link">
										AGENDA
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.asia.token2049.com/partners" className="nav-link">
										PARTNERS
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.asia.token2049.com/travel" className="nav-link">
										TRAVEL
									</a>
								</li>

								<div className="nav-item exhibt heder_btn">
									<a href="https://www.asia.token2049.com/partners" className="btn nav-link">
										EXHIBIT
									</a>
									<a href="https://www.asia.token2049.com/tickets" className="btn bttn nav-link">
										TICKETS
									</a>
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
