import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Budget() {
    const budgetImg = useRef();
    const budgetText =useRef();

    useLayoutEffect(() => {
        let test = gsap.context(() => {
            gsap.from(budgetImg.current, {
                scrollTrigger: budgetImg.current,
            y: "100", duration: 1, ease: "back"})
            gsap.from(budgetText.current, {
                scrollTrigger: budgetText.current,
                y: "100", duration: 1, ease: "back"})
        })

        return () => test.revert()
    }, [])

    return (
        <>
        <div className="budget-container">
            <div className="budget-img" ref={budgetImg}>
                <img src="./img/budget.png" alt="" />
            </div>

            <div className="budget-text" ref={budgetText}>
                <h4>Creating Financial Plan That Fits Your Lifestyle</h4>
                <p>Gain insights and practical strategies on how to make the most of your hard-earned money, budget wisely, save smartly, and make informed financial decisions that align with your goals. Embrace the power of financial literacy and empower yourself to conquer financial challenges with ease, setting yourself on the path to a more secure and prosperous future.</p>
                <button>Request Demo</button>
            </div>
        </div>
        </>
    )
}

export default Budget