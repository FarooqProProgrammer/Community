import React, { useState } from 'react'
import HoverText from '../../common/HoverText'
import { FaPlay } from 'react-icons/fa'

import ModalVideo from 'react-modal-video';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { BuildingIcon } from '../../Icon';
import { ServiceData } from '../../Data';

export default function Service() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Box className="text-gray-600 body-font bg-[#FFEBB9]">
                <Box className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <Box className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <HoverText Text={'WHAT WE DO'} />
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Some Services We Provide
                            <br className="hidden lg:inline-block" />
                            for our children
                        </h1>
                        <Text className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit duis augue, taciti posuere interdum suscipit cras sociosqu tortor risus.
                        </Text>
                        {
                            ServiceData?.map((item) => {
                                return (
                                    <Flex
                                        justifyContent={'start'}
                                        alignItems={'start'}
                                        gap={5}
                                        mb={4}
                                    >
                                        <IconButton bgColor={'#000'}>
                                            <item.icon />
                                        </IconButton>
                                        <Flex
                                            flexDirection={'column'}
                                            justifyContent={'start'}
                                            alignItems={'start'}
                                            gap={1}
                                        >
                                            <Text className='font-black text-black'>
                                                {item.Text}
                                            </Text>
                                            <Text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit primis, facilisi iaculis inceptos.
                                            </Text>
                                        </Flex>
                                    </Flex>
                                )
                            })
                        }



                    </Box>
                    <Box className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                        <Box onClick={() => setOpen(true)} className='video-icon flex justify-center items-center absolute w-[50px] h-[50px] bg-white left-[50%] cursor-pointer top-[40%] rounded-full' >
                            <FaPlay />
                        </Box>
                        <Image
                            className="object-cover object-center rounded h-[500px] w-full"
                            alt="hero"
                            src="https://plus.unsplash.com/premium_photo-1663126299834-b8f22641f3c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHN8ZW58MHx8MHx8fDA%3D"
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
