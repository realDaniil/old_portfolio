import React from 'react'
import cl from './About.module.css'

function About() {
	return (
		<section id='about' className={cl.section}>
			<div className={cl.content_holder}>
				<div className={cl.leftSide}>
					<div className={cl.img_holder}>
						<img src="img/aboutImg2.jpg" alt="" />
					</div>
					<div className={cl.roundText_holder}>
						<img src="./img/roundText.svg" alt="" />
						<p>💻</p>
					</div>
				</div>
				<div className={cl.rightSide}>
					<h1>ABOUT ME</h1>
					<br />
					<h2>A dedicated Front-end Developer based in Odessa, <span style={{display: 'inline-flex' }}>Ukraine 📍</span></h2>
					<br />
					<p>
						As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript,
						React and Next JS. I excel in designing and maintaining responsive websites that offer
						a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing
						clean and optimized code and utilizing cutting-edge development tools and techniques.
					</p>
				</div>
			</div>
			<div className={cl.backgroundCircle}></div>
		</section>
	)
}

export default About