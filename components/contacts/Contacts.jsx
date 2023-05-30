import React from 'react'
import cl from './Contacts.module.css'
import { IoLocationSharp, IoMail } from 'react-icons/io5'
import { BsTelegram } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
function Contacts() {
	return (
		<section id='contacts' className={cl.section}>
			<h2>Contacts</h2>
			<h3>Don't be shy! Hit me up!👇</h3>
			<div className={cl.cards_holder}>
				<div className={cl.card}>
					<div className={cl.icon_holder}>
						<IoLocationSharp />
					</div>
					<div className={cl.text_holder}>
						<p className={cl.title}>Location</p>
						<p className={cl.body}>Odessa, Ukraine</p>
					</div>
				</div>
				<div className={cl.card}>
					<div className={cl.icon_holder}>
						<IoMail />
					</div>
					<div className={cl.text_holder}>
						<p className={cl.title}>Mail</p>
						<a href='mailto:daniilga2@icloud.com' className={cl.body}>daniilga2@icloud.com</a>
					</div>
				</div>
				{/* <div className={cl.card}>
					<div className={cl.icon_holder}>
						<BsTelegram />
					</div>
					<div className={cl.text_holder}>
						<p className={cl.title}>Telegram</p>
						<p className={cl.body}>@</p>
					</div>
				</div> */}
				<div className={cl.card}>
					<div className={cl.icon_holder}>
						<AiFillInstagram />
					</div>
					<div className={cl.text_holder}>
						<p className={cl.title}>Instagram</p>
						<a target='_blank' href='https://www.instagram.com/real_the_neel/' className={cl.body}>@real_the_neel</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts