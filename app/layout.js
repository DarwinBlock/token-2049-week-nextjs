import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
	title: "TOKEN2049 | 15-21 April 2024 | Dubai",
	description:
		"TOKEN2049 is the premier crypto event in Asia. Join us to explore cryptoassets and blockchain-based tokens as they reshape the global economy.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="./favicon.ico" />
				<meta content="yes" name="apple-mobile-web-app-capable" />
				<meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
				<meta name="author" content="TOKEN2049 Team" />
				<meta property="og:title" content="TOKEN2049 Week" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/DarwinBlock/token2049-badges/main/public/token2049_banner.png?token=GHSAT0AAAAAACGWG6KQER67VZIJTWO22XYYZHQNV2A"
				/>
				<meta property="og:url" content="https://token2049.com" />
				<meta property="og:site_name" content="TOKEN2049 Week" />
				<meta property="og:description" content="TOKEN2049 Week" />
				<meta property="keywords" content="token2049" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://token2049.com" />
				<meta name="twitter:title" content="TOKEN2049 Week" />
				<meta name="twitter:description" content="TOKEN2049 Week" />
				<meta
					name="twitter:image"
					content="https://raw.githubusercontent.com/DarwinBlock/token2049-badges/main/public/token2049_banner.png?token=GHSAT0AAAAAACGWG6KQER67VZIJTWO22XYYZHQNV2A"
				/>
				<meta name="twitter:tags" content="token2049" />

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			</head>
			<body>{children}</body>
		</html>
	);
}
