import React, { useState } from 'react'
import cl from './WelcomeSection.module.css'
import { AiFillGithub } from 'react-icons/ai'
function WelcomeSection() {
	// const [circleParallaxTranslate, setCircleParallaxTranslate] = useState({ transform: '' })
	// const [minusCircleParallaxTranslate, setMinusCircleParallaxTranslate] = useState({ transform: '' })
	// if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// 	document.addEventListener('mousemove', (e) => {
	// 		setCircleParallaxTranslate(`translate(${(e.clientX - window.outerWidth / 2) / 100}px, ${(e.clientY - window.outerHeight / 2) / 100}px)`)
	// 		setMinusCircleParallaxTranslate(`translate(${-(e.clientX - window.outerWidth / 2) / 100}px, ${-(e.clientY - window.outerHeight / 2) / 100}px)`)
	// 	})
	// }
	return (
		<section className={cl.section}>
			<div className={cl.content_holder}>
				<div className={cl.left_and_right_holder}>
					<div className={cl.leftSide}>
						<h1>Front-End React Developer 👋</h1>
						<p>Hi, I'm Danya. A passionate Front-End React Developer based in Odessa, <span style={{ display: 'inline-flex' }}>Ukraine 📍</span></p>
						<a href='https://github.com/BigBelash228' target='_blank'><AiFillGithub className={cl.link} /></a>
					</div>
					<div className={cl.rightSide}>
						<div className={cl.img_holder}>
							<img src='./img/me2.jpg' alt="me" />
						</div>
						<div className={cl.shadow + ' ' + cl.shadow1}></div>
						<div className={cl.shadow + ' ' + cl.shadow2}></div>
						<div className={cl.shadow + ' ' + cl.shadow3}></div>
					</div>
				</div>
				<div className={cl.bottomSide}>
					<p>Tech Stack <span>|</span></p>
					<img className={cl.logo} src="./img/htmlLogo.svg" alt="" />
					<img className={cl.logo} src="./img/cssLogo.svg" alt="" />
					<img className={cl.logo} src="./img/jsLogo.svg" alt="" />
					<img className={cl.logo} src="./img/reactLogo.svg" alt="" />
					<img className={cl.logo} src="./img/nextLogo.svg" alt="" />
				</div>
			</div>
			<div className={cl.backgroundCircle}></div>
		</section>
	)
}

export default WelcomeSection