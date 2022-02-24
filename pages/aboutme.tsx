import type { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import { NavBar } from "../components/navBar";

const AboutMe: NextPage = () => {
	return (
		<><Head>
			<title>About Me</title>
			<meta name="about me" content="About the great and powerful badams" />
		</Head>
		<header>
			<NavBar />
		</header>
		<h1>About Brian Adams</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita consectetur! Hic adipisci dolor maiores pariatur nisi illum a inventore autem. Qui, perspiciatis! Quod cum iure quaerat rem, ratione temporibus.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in modi esse saepe ipsam aperiam voluptatum ad dolores tempora! Non dolor deserunt obcaecati est consequuntur accusantium architecto ad sed numquam?</p>
		</>
	)
}

export default AboutMe;