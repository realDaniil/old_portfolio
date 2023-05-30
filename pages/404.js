import Link from "next/link"
import cl from '../styles/404.module.css'

export default function ErrorPage() {
	return (
		<div className={cl.content_holder}>
			<h1 className={cl.h1}>404</h1>
			<p><Link href={'/'}>Вернуться на главную страницу</Link></p>
		</div>
	)
}