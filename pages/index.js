import About from "@/components/about/About";
import Background from "@/components/background/Background";
import Contacts from "@/components/contacts/Contacts";
import Layout from "@/components/layout/Layout";
import Projects from "@/components/projects/Projects";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";

export default function Index() {
	return (
		<Layout>
			<WelcomeSection />
			<About />
			<Projects />
			<Contacts />
			<Background />
		</Layout>
	)
}