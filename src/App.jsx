import React from "react";
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Reservations } from "./pages/reservations/Reservations";
import ReservationConfirmation from './components/reservationConfirmation/ReservationConfirmation';
import { Toolbar } from "./components/toolbar/Toolbar";
import { Footer } from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import SpecialsSection from "./components/specialSection/SpecialsSection";
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import AboutSection from './components/about/AboutSection';

const toolbarItems = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "About",
		href: "/#aboutSection"
	},
	{
		name: "Menu",
		href: "/#menuSection"
	},
	{
		name: "Reservations",
		href: "/reservations"
	},
	{
		name: "Order Online",
		href: "/#menuSection"
	},
	{
		name: "Login",
		href: "/"
	},
];

export const Home = () => {
	return (
		<>
			<HeroSection />
			<SpecialsSection />
			<TestimonialsSection />
			<AboutSection />
		</>

	);
};


const App = () =>
{
	return (
		<BrowserRouter>
			<Toolbar>
				{toolbarItems.map(item => <HashLink to={item.href} key={item.name}>{item.name}</HashLink>)}
			</Toolbar>
			<main className="mainContent">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/reservations" element={<Reservations />} />
					<Route path="/reservationConfirmation" element={<ReservationConfirmation />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;