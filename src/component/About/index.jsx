import React, { useState } from 'react'
import HoverText from '../../common/HoverText'
import { FaPlay } from 'react-icons/fa'

import ModalVideo from 'react-modal-video';

export default function About() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <HoverText Text={'KNOW ABOUT US'} />
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Before they sold out
                            <br className="hidden lg:inline-block" />
                            readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-[#F2C94C] border-0 py-2 px-6 focus:outline-none hover:bg-transparent hover:border hover:border-[#F2C94C] hover:text-[#F2C94C] rounded text-lg">
                                Learn More
                            </button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                        <div onClick={() => setOpen(true)} className='video-icon flex justify-center items-center absolute w-[50px] h-[50px] bg-white left-[50%] cursor-pointer top-[40%] rounded-full' >
                            <FaPlay />
                        </div>
                        <img
                            className="object-cover object-center rounded h-[500px] w-full"
                            alt="hero"
                            src="https://plus.unsplash.com/premium_photo-1663126299834-b8f22641f3c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHN8ZW58MHx8MHx8fDA%3D"
                        />
                    </div>
                </div>
            </section>


            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
            />
        </>


    )
}
