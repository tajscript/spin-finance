function Bank() {
    return (
        <>
        <div className="bank-container">

            <h4>BANK</h4>
            <div className="bank-compound">
            <div className="bank-left">
                <h1>Take control of your <br /> financial affairs</h1>
                <p>Gain insights and practical strategies on how to make the most of your hard-earned money, budget wisely, save smartly, and make informed financial decisions that align with your goals.</p>
                <div className="bank-request">
                    <button><a href="#">Request Demo</a></button>
                    <div className="mouse-container">
                    <div className="mouse-icon">
                    <a href="#footer"><i class="fa-solid fa-computer-mouse"></i></a>
                    </div>
                    <p>Scroll Down</p>
                    </div>
                </div>
            </div>
            <div className="bank-right">

                <div className="bank-img">

                    <div className="credit">
                    <img src="./img/credit.png" alt="Credit Card" />
                    </div>
                <div className="master">
                <img src="./img/master.png" alt="Mastercard" />
                </div>
                
                </div>
            </div>
            </div>

            <div className="bank-icons">

            <div className="flex-container hidden">
                <div className="bank-icons-container">
                    <div className="bank-icons-circle">
                    <i class="fa-sharp fa-solid fa-crown text-iconOrange"></i>
                    </div>
                    <div className="bank-icons-text">
                    <i class="fa-sharp fa-solid fa-certificate text-iconOrange opacity-25"></i>
                    <h5>Daily Transaction</h5>
                    <p>30+ Actions</p>
                    </div>
                </div>

                <div className="bank-icons-container">
                    <div className="bank-icons-circle ">
                    <i class="fa-solid fa-wifi text-iconBlue"></i>
                    </div>
                    <div className="bank-icons-text">
                    <i class="fa-sharp fa-solid fa-certificate text-iconBlue opacity-25"></i>
                    <h5>Easy Access</h5>
                    <p>10 Devices</p>
                    </div>
                </div>
                </div>

                <div className="flex-container mobile-icon">
                <div className="bank-icons-container">
                    <div className="bank-icons-circle">
                    <i class="fa-solid fa-shield text-iconGreen"></i>
                    </div>
                    <div className="bank-icons-text">
                    <i class="fa-sharp fa-solid fa-certificate text-iconGreen opacity-25"></i>
                    <h5>100% Secure</h5>
                    <p>Security</p>
                    </div>
                </div>

                <div className="bank-icons-container">
                    <div className="bank-icons-circle">
                    <i class="fa-solid fa-globe text-iconYellow"></i>
                    </div>
                    <div className="bank-icons-text">
                    <i class="fa-sharp fa-solid fa-certificate text-iconYellow opacity-25"></i>
                    <h5>31.3k Users</h5>
                    <p>Top Service</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bank