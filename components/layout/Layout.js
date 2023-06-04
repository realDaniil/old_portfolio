import Link from 'next/link'
import cl from './Layout.module.css'
import Head from "next/head"
import { RiSettings3Fill } from 'react-icons/ri'
import Header from '../UI/header/Header'

export default function Layout({ children, title = 'Portfolio' }) {
	return (
		<div>
			<Head>
				<title>
					{title}
				</title>
			</Head>
			<Header />
			<main>{children}</main>
		</div>
	)
}