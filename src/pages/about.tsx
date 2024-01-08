const About = () => {

    return (

        <div className="flex flex-col h-screen w-screen p-16 space-y-12">

            {/* Profile Pic */}
            <div className="flex flex-col items-center justify-center h-1/6">
                <div className="flex items-center space-x-6">
                    <img src="/profile_pic.png" style={{ borderRadius: "50%", height: "100px", width: "100px" }} />
                    <h2 style={{ fontFamily: "Verdana", fontSize: "28px" }}>Van Brantley</h2>
                </div>

                <div className="flex items-center">
                    <div>
                        <a href="https://www.linkedin.com/in/vanbrantley/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin-logo.webp" alt="LinkedIn Logo" style={{ borderRadius: "50%", height: "50px", width: "50px" }} className="cursor-pointer" />
                        </a>
                    </div>
                    <a href="https://github.com/vanbrantley" target="_blank" rel="noopener noreferrer">
                        <img src="/github-logo.png" alt="GitHub Logo" style={{ borderRadius: "50%", height: "30px", width: "30px" }} className="cursor-pointer" />
                    </a>
                </div>

            </div>

            {/* Education */}
            {/* <div className="flex items-center justify-center">
                <p>I studied Computer Science at Princeton University
                    <span style={{ paddingRight: "3px", paddingTop: "3px", display: "inline-block" }}>
                        <img src="princeton_seal.png" style={{ height: "20px", width: "16px" }} />
                    </span>
                </p>
            </div> */}

            {/* Technical Interests */}
            {/* <div className="flex items-center justify-center">
                <p>I am interested in web development, machine learning, artificial intelligence, and blockchain technologies.</p>
            </div> */}

            {/* Outside Interests */}
            {/* <div className="flex items-center justify-center">
                <p>Outside of developing, I enjoy producing music, designing clothing, and watching and playing sports.</p>
            </div> */}

            <div className="flex flex-col items-center justify-center sm:px-64">
                <br />
                <p>I am a curious and creative individual that harnesses the power of technology to create innovative digital experiences that enhance people's capabilities.</p>
                <br />
                <p>I studied Computer Science at Princeton University, where I engaged in a rigorous curriculum involving software engineering, machine learning, and entrepreneurship.</p>
                <br />
                <p>As a full-stack web and mobile developer, I have experience working across all areas of development, bringing ideas to life from conception to reality.</p>
                <br />
                <p>Currently, I am furthering my knowledge in the areas of blockchain technology, artificial intelligence, and cloud computing.</p>
                <br />
                <p>Outside of engineering, I engage in other creative activities such as producing music and designing clothes.</p>
                <br />
                <p>After successfully developing tools to aid me along my personal artistic pursuits, I am committed to working on software that helps people on a global scale.</p>
            </div>

        </div>

    );

}

export default About;