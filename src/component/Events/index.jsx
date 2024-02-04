import { Box, Flex, Grid, GridItem, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Events() {
    return (
        <Box
            width={'100%'}
            height={'400px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Flex
                sx={{
                    width: '80%',
                    height: '80%',
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                }}
            >
                <Text className='DmSans text-3xl font-bold'>
                    Our Events
                </Text>
                <Grid
                    width={'100%'}
                    mt={'30px'}
                    templateColumns={{ lg: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', sm: "repeat(1, 1fr)" }} gap={6}

                >
                    <GridItem
                        sx={{
                            width: '100%',
                            backgroundColor: '#F2C94C',
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: "start",
                            paddingLeft: '30px',
                            borderRadius: '10px',
                            paddingTop: "20px",
                            paddingBottom: "20px"
                        }}
                    >
                        <Text
                            className='uppercase  font-black text-black  relative'
                            _after={{
                                content: '""',
                                position: "absolute",
                                width: '50px',
                                height: "2px",
                                bgColor: '#000',
                                right: '-60px',
                                bottom: '10px'
                            }}
                        >
                            Next Events
                        </Text>
                        <Text>
                            A day with our wonderful children
                        </Text>
                        <Link
                            sx={{
                                color: "#000",
                                fontWeight: 900,
                                textDecoration: 'underline',
                                paddingBottom: '2px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            Learn More
                            <FaArrowRightLong />
                        </Link>
                    </GridItem>
                    <GridItem
                        sx={{
                            width: '100%',
                            backgroundColor: '#F2C94C',
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: "start",
                            paddingLeft: '30px',
                            borderRadius: '10px',
                            paddingTop: "20px",
                            paddingBottom: "20px"
                        }}
                    >
                        <Text
                            className='uppercase  font-black text-black  relative'
                            _after={{
                                content: '""',
                                position: "absolute",
                                width: '50px',
                                height: "2px",
                                bgColor: '#000',
                                right: '-60px',
                                bottom: '10px'
                            }}
                        >
                            Next Events
                        </Text>
                        <Text>
                            Seminar: Caring for children with austim
                        </Text>
                        <Link
                            sx={{
                                color: "#000",
                                fontWeight: 900,
                                textDecoration: 'underline',
                                paddingBottom: '2px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            Learn More
                            <FaArrowRightLong />
                        </Link>
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    )
}
