import { Box, Button, Flex, IconButton, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FaBars } from "react-icons/fa";

export default function Header() {


    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
    const [Menu, setMenu] = useState(false);


    return (
        <>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                px={10}
                py={3}
                sx={{
                    borderBottom: '1px solid #000'
                }}
            >
                <Text className='DmSans text-3xl font-black'>
                    Non Profit
                </Text>
                {
                    !isTabletOrMobile && <>
                        <UnorderedList display={'flex'} gap={5} listStyleType={'none'}>
                            <ListItem>
                                <Link className='DmSans font-black'>HOME</Link>
                            </ListItem>
                            <ListItem>
                                <Link className='DmSans font-black'>ABOUT US</Link>
                            </ListItem>
                            <ListItem>
                                <Link className='DmSans font-black'>WHAT WE DO</Link>
                            </ListItem>
                            <ListItem>
                                <Link className='DmSans font-black'>MEDIA</Link>
                            </ListItem>
                            <ListItem>
                                <Link className='DmSans font-black'>CONTACT</Link>
                            </ListItem>
                        </UnorderedList>

                        <Button
                            bgColor={'black'}
                            sx={{ color: 'white' }}
                            _hover={{
                                backgroundColor: 'transparent',
                                color: '#000',
                                border: '1px solid #000'
                            }}
                        >
                            Donate
                        </Button>
                    </>
                }

                {
                    isTabletOrMobile
                    &&
                    <IconButton onClick={() => setMenu(!Menu)}>
                        <FaBars />
                    </IconButton>
                }

            </Flex>


            {
                isTabletOrMobile && Menu && <Flex
                    sx={{
                        width: '100%',
                        paddingTop: '60px',
                        paddingBottom: '60px',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '30px',
                        // borderBottom: '1px solid #000',
                        bgColor: '#e7e7e7'
                    }}

                >
                    <Link className='DmSans font-black'>HOME</Link>
                    <Link className='DmSans font-black'>ABOUT US</Link>
                    <Link className='DmSans font-black'>WHAT WE DO</Link>
                    <Link className='DmSans font-black'>MEDIA</Link>
                    <Link className='DmSans font-black'>CONTACT</Link>
                </Flex>
            }

        </>

    )
}
