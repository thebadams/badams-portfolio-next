import Link from 'next/link';

export const NavBar = () => {
	return (
		<>
			<ul>
				<li><Link href='/'>Home</Link></li>
				<li><Link href='/aboutme'>About Me</Link></li>
			</ul>
		</>
	)
}

