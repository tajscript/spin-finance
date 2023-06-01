import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Work() {
    const workImg = useRef();
    const workIcons = useRef();

    useLayoutEffect(() => {
        let test = gsap.context(() => {
            gsap.from(workImg.current, {
                scrollTrigger: workImg.current,
                y: 100, ease: "back", duration: 1})
            gsap.from(workIcons.current, {
                scrollTrigger: workIcons.current,
                y: 100, ease: "back", duration: 1})
        })

        return () => test.revert()
    }, [])

    return (
        <>
        <div className="work-container">

            <div className="work-img" ref={workImg}>
                <div className="work-img-container">
                <h6>HOW IT <br /> WORKS </h6>
                <p>Discover the secrets to skillfully <br /> navigate your financial situations</p>
            </div>
            </div>

            <div className="work-icons" ref={workIcons}>

            <div className="work-item">
                <div className="work-icon-container">
                    <div className="work-icon">
                    <i class="fa-solid fa-database text-iconBlue"></i>
                    </div>
                    <div className="work-icon-text">
                        <h5>Data Secure</h5>
                        <p>We keep your data safe</p>
                    </div>
                </div>

                <div className="work-icon-container">
                    <div className="work-icon">
                    <i class="fa-solid fa-comments text-iconGreen"></i>
                    </div>
                    <div className="work-icon-text">
                        <h5>24/7 Support</h5>
                        <p>We keep your data safe</p>
                    </div>
                </div>
                </div>

                <div className="work-item">
                <div className="work-icon-container">
                    <div className="work-icon">
                    <i class="fa-solid fa-server text-iconYellow"></i>
                    </div>
                    <div className="work-icon-text">
                        <h5>Account Data</h5>
                        <p>We keep your data safe</p>
                    </div>
                </div>

                <div className="work-icon-container">
                    <div className="work-icon">
                    <i class="fa-solid fa-gear text-iconOrange"></i>
                    </div>
                    <div className="work-icon-text">
                        <h5>Multiple Actions</h5>
                        <p>We keep your data safe</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Work