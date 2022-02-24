import type { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';

const AboutMe: NextPage = () => {
	return (
		<><Head>
			<title>About Me</title>
			<meta name="about me" content="About the great and powerful badams" />
		</Head><h1>About Brian Adams</h1>
		<Link href="/">home</Link></>
	)
}

export default AboutMe;