import AboutUs from "./sections/aboutus";
import ContactUs from "./sections/contactUs";
import Footer from "./sections/footer";
import HeroSection from "./sections/heroSection";


export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <AboutUs />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </main>
  )
}
