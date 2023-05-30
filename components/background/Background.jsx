import React, { useState } from 'react'
import cl from './Background.module.css'

function Background() {
	const [circleParallaxTranslate, setCircleParallaxTranslate] = useState({ transform: '' })
	const [minusCircleParallaxTranslate, setMinusCircleParallaxTranslate] = useState({ transform: '' })
	// if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// 	document.addEventListener('mousemove', (e) => {
	// 		setCircleParallaxTranslate(`translate(${(e.clientX - window.outerWidth / 2) / 100}px, ${(e.clientY - window.outerHeight / 2) / 100}px)`)
	// 		setMinusCircleParallaxTranslate(`translate(${-(e.clientX - window.outerWidth / 2) / 100}px, ${-(e.clientY - window.outerHeight / 2) / 100}px)`)
	// 	})
	// }
	return (
		<div>
			<div style={{ transform: circleParallaxTranslate }} className={cl.backgroundCircle + ' ' + cl.backgroundCircle1}></div>
			<div style={{ transform: circleParallaxTranslate }} className={cl.backgroundCircle + ' ' + cl.backgroundCircle2}></div>
			<div style={{ transform: minusCircleParallaxTranslate }} className={cl.backgroundCircle + ' ' + cl.backgroundCircle3}></div>
		</div>
	)
}

export default Background