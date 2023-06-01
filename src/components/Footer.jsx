import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Footer() {
    const footerForm = useRef();
    const footerText =useRef();

    useLayoutEffect(() => {
        let test = gsap.context(() => {
            gsap.from(footerText.current, {
                scrollTrigger: footerText.current,
            y: "100", duration: 1, ease: "back"})
            gsap.from(footerForm.current, {
                scrollTrigger: footerForm.current,
                y: "100", duration: 1, ease: "back"})
        })

        return () => test.revert()
    }, [])


    return (
        <>
        <div className="footer-container" id="footer">
            <div className="footer-text" ref={footerText}>
            <div className="logo">
                <p><a href="#">Spin <span>Finance</span></a></p>
            </div>
            <h4>Join The Waitlist</h4>
            <p>Gain insights and practical strategies on how to make the most of your hard-earned money, budget wisely, save smartly, and make informed financial decisions that align with your goals. Embrace the power of financial literacy and empower yourself to conquer financial challenges with ease, setting yourself on the path to a more secure and prosperous future.</p>
            <div className="footer-icons">
                <div className="footer-icon">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className="footer-icon">
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className="footer-icon">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            </div>

            <div className="footer-form" ref={footerForm}>
                <form>
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="Enter Your Email"/>
                    <input type="tel"  placeholder="Enter Your Phone Number"/>
                    <button type="reset" className="button"><a href="#">Request Demo</a></button>
                </form>
            </div>
        </div>
        </>
    )
}


export default Footer