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
				<p>The Aim of this Website is to showcase the programming skills of Brian Adams</p>
				<p>There are several aspects of this webpage that one might like to know:</p>
				<ol>
					<li>It is being developed using Next.js, which is a React Framework that uses both static generation and server side generation to render different pages.</li>
					<li>It is being written in TypeScript for the type checking that occurs at development time, instead of JavaScript&apos;s standard runtime type chekcing</li>
				</ol>
			</main>
		</>
	)
}

export default Home
