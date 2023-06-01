import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Payment() {
    const finImg = useRef();
    const finText = useRef();
    const cupIcon = useRef();
    const visaIcon = useRef();
    const paypalIcon = useRef();
    const masterIcon = useRef();

    useLayoutEffect(() => {
        let test = gsap.context(() => {
            gsap.from(finImg.current, {
                scrollTrigger: finImg.current,
                x: "-100", duration: 2, delay: 0.5, ease: "power2"})
            gsap.from(finText.current, {
                scrollTrigger: finImg.current,
                y: "100", duration: 1, ease: "back"})
            gsap.fromTo(cupIcon.current, {
                scrollTrigger: cupIcon.current,
               x: "-100", rotation: 720, opacity: 0 }, {scrollTrigger: cupIcon.current,
            rotation: 12, x: 0, delay: 0.5, duration: 1, opacity: 1})
            gsap.fromTo(visaIcon.current, {
                scrollTrigger: visaIcon.current,
               x: "-100", rotation: 720, opacity: 0 }, {scrollTrigger: visaIcon.current,
            rotation: -45, x: 0, delay: 1, duration: 1, opacity: 1})
            gsap.fromTo(paypalIcon.current, {
                scrollTrigger: paypalIcon.current,
               y: "100", rotation: 720, opacity: 0 }, {scrollTrigger: paypalIcon.current,
            rotation: -45, y: 0, delay: 0.5, duration: 1, opacity: 1})
            gsap.fromTo(masterIcon.current, {
                scrollTrigger: masterIcon.current,
               y: "100", rotation: 720, opacity: 0 }, {scrollTrigger: masterIcon.current,
            rotation: 12, y: 0, duration: 1, opacity: 1})
        })

        return () => test.revert()
    }, [])

    return (
        <>
        <div className="payment-container">
            <h4 ref={finText}>Embrace the power of <br /> financial literacy</h4>

            <div className="payment-center">
                <div className="payment-circle">
                </div>
                <img src="./img/finance.png" alt="" ref={finImg}/>
            </div>

            <div className="payment-animate">
                <div className="cup-icon" ref={cupIcon}>
                <i class="fa-solid fa-trophy"></i>
                </div>
                <div className="visa-icon" ref={visaIcon}>
                <i class="fa-brands fa-cc-visa"></i>
                </div>
                <div className="mastercard-icon" ref={masterIcon}>
                <i class="fa-brands fa-cc-mastercard"></i>
                </div>
                <div className="paypal-icon" ref={paypalIcon}>
                <i class="fa-brands fa-paypal"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payment