import type { NextPage } from 'next'
import Head from 'next/head'
import { NavBar } from '../components/navBar'
const Home: NextPage = () => {
  return (
		<>
			<Head>
				<title>The Badams Portfolio Page</title>
				<meta name="portfolio" content="The Main Portfolio Page of Brian Adams" />
			</Head>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>Portfolio Page</h1>
				<h2>The Personal Portfolio Website of Brian P. Adams</h2>
				<text>This Website Has Been Built Using Next.js</text>
			</main>
		</>
	)
}

export default Home
