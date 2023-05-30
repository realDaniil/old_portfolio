import React from 'react'
import cl from './Projects.module.css'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'

function Projects() {
	return (
		<section id='projects' className={cl.section}>
			<h2>My projects</h2>
			<div className={cl.project_holder}>
				<div className={[cl.imageSide, cl.reverseSideImage].join(' ')}>
					<a href='https://bigbelash228.github.io/solid/' target='_blank' className={cl.img_holder}>
						<img src="./img/previewSolid.jpg" alt="" />
					</a>
				</div>
				<div className={cl.descriptionSide}>
					<h3>Solid</h3>
					<p className={cl.description}>The largest fitness club in Odessa (Ukraine).
						SOLID is a gym with the best equipment, crossfit, escape hall, group classes with live music, pool of 25 meters, the area is 5500 m2.
						<br />
						Today is your opportunity to build the tomorrow you want
					</p>
					<p className={cl.technologyName}>React</p>
					<div className={cl.links_holder}>
						<a target='_blank' href="https://github.com/BigBelash228/solid">Code <AiFillGithub /></a>
						<a target='_blank' href="https://bigbelash228.github.io/solid/">Live Demo <MdOutlineOpenInNew /></a>
					</div>
				</div>
			</div>
			<div className={[cl.project_holder, cl.defaultProject_holder].join(' ')}>
				<div className={cl.descriptionSide}>
					<h3>Wallpaper</h3>
					<p className={cl.description}>Tired of boring wallpaper? No problem!  Wallpaper is a site with wallpapers for all devices and for all tastes and colors. </p>
					<p className={cl.technologyName}>Next JS</p>
					<div className={cl.links_holder}>
						<a target='_blank' href="https://github.com/BigBelash228/wallpaper">Code <AiFillGithub /></a>
						<a target='_blank' href="https://bigbelash228.github.io/wallpaper/">Live Demo <MdOutlineOpenInNew /></a>
					</div>
				</div>
				<div className={cl.imageSide}>
					<a href='https://bigbelash228.github.io/wallpaper/' target='_blank' className={cl.img_holder}>
						<img src="./img/previewWallpaper.jpg" alt="" />
					</a>
				</div>
			</div>
		</section>
	)
}

export default Projects