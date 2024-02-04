import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useCss } from 'react-use'

export default function Cta() {

    const CTA = useCss({
        'background-image': "url(https://images.unsplash.com/photo-1635929114944-8bab23b98e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvb3J8ZW58MHx8MHx8fDA%3D)",
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
    })

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                width: '100%',
                height: '500px',

            }}
        >
            <Box
                className={`w-[80%] h-[80%]  m-auto rounded-xl ${CTA}`}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

            >
                <Text
                    sx={{
                        color: "#fff",
                      
                    }}
                    maxWidth={{ lg: "70%" }}
                    textAlign={'center'}
                    fontSize={{lg:40,md:40,sm:20}}
                    className='DmSans'
                >
                    You can contribute to provide a place for children with special need
                </Text>
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={5}
                    flexDirection={{lg:"row",md:'column',sm:'column'}}
                >
                    <Button
                        sx={{
                            bgColor: '#F2C94C',
                            color: '#FFFFFF',
                        }}
                        className='DmSans'
                    >
                        Join As A Volunteer
                    </Button>
                    <Button
                        sx={{
                            bgColor: '#FFF',
                            color: '#000',
                        }}
                        className='DmSans'
                    >
                        Donate
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
