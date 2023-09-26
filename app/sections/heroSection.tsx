import Link from "next/link";

const HeroSection = () => {
    return (
        <div id="hero" className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Law help Africa</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div data-aos="zoom-in" >
                        <Link href='#contactUs' className="btn btn-primary">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;