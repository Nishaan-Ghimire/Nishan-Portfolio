import { profile } from "../../../assets"
import { aboutnishan } from "../../../assets"
import { MainHeading, Button } from "../../components"
import { motion } from "framer-motion"

const About = () => {

    /////////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// STATES //////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// USE EFFECTS /////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////////////////////////////////

    return (
        <motion.section
            name="about"
            className="h-auto w-full flex  "
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
        >

            {/* left side */}
            <div className="mx-4 px-4 lg:w-[50%] lg:block hidden justify-center " >
                <img src={aboutnishan} alt="profileImage" className="w-[40rem] h-[40rem] " />
            </div>

            {/* right side */}
            <div className="flex lg:w-[50%] flex-col md:px-8 " >

                {/* main heading */}
                <div className="w-full flex justify-center " >
                    <MainHeading
                        forwardHeading='About Me'
                        backHeading='About'
                        detail={`
                        Greetings,Visitor
                        <br/>
                        I'm Nishan Ghimire, a freelance web developer and security researcher based in Nepal. At 21, I'm diving headfirst into the world of tech, armed with a passion for building awesome websites and keeping them safe from cyber troublemakers.
                        <br/>
                        When it comes to crafting digital wonders, I'm all about using fancy tools like the MERN Stack and PHP to weave magic on the web. From sleek designs to snappy functionalities, I've got you covered.
                        <br/>
                        When I'm not geeking out over code, you'll find me exploring the hidden gems of Nepal or soaking in its vibrant culture. Because let's face it, life's too short to be stuck behind a screen all day!

                        <br/>

                        So, whether you're in need of a stunning website or a digital fortress to keep your data safe, consider me your go-to guy. Let's team up, tackle tech challenges, and make some digital dreams come true!

                        <br/>
Best regards,
Nishan

                        `}
                        alignStart
                    />
                </div>

            </div>

        </motion.section>
    )
}

export default About
 