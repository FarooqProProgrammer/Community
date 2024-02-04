import { Box, IconButton, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import ModalVideo from 'react-modal-video';

export default function Hero() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Box className="text-gray-600 body-font">
                <Box className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <Box className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font DmSans sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Inclusive care for
                            <br className="hidden lg:inline-block" />
                            children with special needs
                        </h1>
                        <Text className="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                        </Text>
                        <Box className="flex justify-center items-center gap-5">
                            <button className="inline-flex text-white hover:text-black hover:border hover:border-black bg-black border-0 py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg">
                                What We Do
                            </button>
                            <IconButton
                                sx={{
                                    border: '1px solid #000',
                                    bgColor: '#fff',
                                    transition: 'all 0.5s ease-in-out',
                                    borderRadius: '100%'
                                }}
                                onClick={() => setOpen(true)}
                                _hover={{
                                    bgColor: '#000',
                                    color: '#fff',
                                }}
                            >
                                <FaPlay size={10} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center rounded h-[500px] w-full"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfHwwfHx8MA%3D%3D"
                        />
                    </Box>
                </Box>
            </Box>

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
