import { Container, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/about.png'

const About = () => {
    return (
        <Container bg={'#eff7fe'} id='about' maxW={'100vw'} w={'100%'} p={5} >
            <VStack spacing={'-10px'} >
                <Text pt={5} fontSize="3rem" fontWeight="bold" color="#012970" textAlign={'center'}>About Us</Text>
                <div
                    style={{
                        width: "100px",
                        height: "3px",
                        backgroundColor: "#569050",
                        alignSelf: "center",
                    }}
                    sx={{
                        "@media (max-width: 900px)": {
                            height: "4px"
                        }
                    }}
                />
            </VStack>

            <Stack direction={['column-reverse', 'row']} p={5} maxW={'100%'} gap={5} justifyContent={'center'} alignItems={'center'}  >
                <Stack w={['100%', '70%']} gap={6} >
                    <Text textAlign={'justify'} fontWeight="500" color={'#2d2d2d'} fontSize="1.1rem" >
                        At BN Technocrats Pvt Ltd, we believe in building more than just structures; we build dreams. With a legacy of excellence, formerly known as BN Consultants, we bring together a wealth of expertise and innovation to deliver unparalleled construction and technical consultancy services. From the inception of your project to its final completion, our dedicated team is committed to providing tailored solutions that meet the highest standards of quality and precision.
                    </Text>
                    <Text textAlign={'justify'} fontWeight="500" color={'#2d2d2d'} fontSize="1.1rem" >
                        Specializing in a wide range of sectors including residential, commercial, healthcare, and IT parks, we offer comprehensive services that cater to the unique needs of each project. Whether it's designing architectural marvels or managing complex engineering structures, we ensure every aspect of your project is handled with utmost care and professionalism.
                    </Text>
                </Stack>
                <Image src={img} css={{ width: '600px' }} alt='About img' />
            </Stack>
        </Container>
    )
}

export default About
