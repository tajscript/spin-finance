import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Learn() {
    const learnImg = useRef();
    const learnText =useRef();

    useLayoutEffect(() => {
        let test = gsap.context(() => {
            gsap.from(learnImg.current, {
                scrollTrigger: learnImg.current,
            y: "100", duration: 1, ease: "back"})
            gsap.from(learnText.current, {
                scrollTrigger: learnText.current,
                y: "100", duration: 1, ease: "back"})
        })

        return () => test.revert()
    }, [])


    return (
        <>
        <div className="learn-container">
            <div className="budget-text" ref={learnText}>
                <h4>Growing your money is knowledge</h4>
                <p>Gain insights and practical strategies on how to make the most of your hard-earned money, budget wisely, save smartly, and make informed financial decisions that align with your goals. Embrace the power of financial literacy and empower yourself to conquer financial challenges with ease, setting yourself on the path to a more secure and prosperous future.</p>
                <button><a href="#">Request Demo</a></button>
            </div>

            <div className="budget-img" ref={learnImg}>
                <img src="./img/learn.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default Learn