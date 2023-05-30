import React, { useEffect, useState } from 'react'
import cl from './Header.module.css'
import { IoMenu } from 'react-icons/io5'
import { GrClose } from 'react-icons/gr'
function Header() {
	const burgerClasses = [cl.burger_section]
	const [visibleBurger, setVisibleBurger] = useState(false)
	if (visibleBurger) burgerClasses.push(cl.active)
	const anchorFunction = (e, id) => {
		e.preventDefault()
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}
	useEffect(() => {
		if (visibleBurger) {
			document.body.style.overflow = 'hidden'
		} else document.body.style.overflow = ''
	})

	return (
		<header className={cl.header}>
			<div className={cl.logo_holder}>
				<p className={cl.logo} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Danya.com</p>
			</div>
			<div className={cl.links_holder}>
				<a className={cl.link} onClick={e => anchorFunction(e, 'about')} href="">About</a>
				<a className={cl.link} onClick={e => anchorFunction(e, 'projects')} href="">Projects</a>
				<a className={cl.link} onClick={e => anchorFunction(e, 'contacts')} href="">Contacts</a>
				<IoMenu onClick={() => setVisibleBurger(true)} className={cl.burger_btn} />
			</div>
			<div className={burgerClasses.join(' ')} onClick={() => setVisibleBurger(false)}>
				<div className={cl.burger_menu} onClick={(e) => e.stopPropagation()}>
					<div className={cl.burgerContent}>
						<GrClose className={cl.closeBurger} onClick={() => setVisibleBurger(false)} />
						<div className={cl.burger_links_holder}>
							<a className={cl.burgerLink} href=""
								onClick={e => {
									anchorFunction(e, 'about')
									setVisibleBurger(false)
								}}
							>About</a>
							<a className={cl.burgerLink} href="" onClick={e => {
								anchorFunction(e, 'projects')
								setVisibleBurger(false)
							}}
							>Projects</a>
							<a className={cl.burgerLink} href="" onClick={e => {
								anchorFunction(e, 'contacts')
								setVisibleBurger(false)
							}}
							>Contacts</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header