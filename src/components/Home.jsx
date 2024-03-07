import { Box, Container, HStack, Heading, Image, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import hero from '../assets/gero.png';
import About from './About';
import Services from './Services';
import design from '../assets/img.png'
import project from '../assets/project.png'
import services from '../assets/services.png'
import val from '../assets/val.png'

import contract from '../assets/contract1.png'
const Home = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });


    const servicesList = [
        {
            heading: 'Architectural Engineering Interior Design',
            desc: 'We provide Architectural Engineering Interior Design solutions to our clients. We have a large database of candidates who are looking for permanent jobs.',
            img: services
        },
        {
            heading: 'Project Management',
            desc: 'We provide Project Management solutions to our clients. We have a large database of candidates who are looking for permanent jobs.',
            img: project
        },
        {
            heading: 'Building & Land Valuation',
            desc: 'We provide Building & Land Valuation solutions to our clients. We have a large database of candidates who are looking for permanent jobs.',
            img: val
        },
        {
            heading: 'Turnkey Contracting',
            desc: 'We provide Turnkey Contracting solutions to our clients. We have a large database of candidates who are looking for permanent jobs.',
            img: contract
        },
    ]

    return (
        <Container id='home' maxW={'100vw'} pt={'100px'} px={4}>
            <Stack direction={isMobile ? 'column' : 'row'} justifyContent={'center'} spacing={8} align={isMobile ? 'center' : 'center'}>
                <VStack align={isMobile ? 'center' : 'flex-start'} spacing={4} maxW={isMobile ? '100%' : '50%'}>
                    <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" color="blue.500" textAlign={isMobile ? 'center' : 'start'}>BN Technocrats Pvt Ltd</Text>
                    <Text textAlign={'justify'} fontSize={{ base: 'md', md: 'lg' }} maxW={{ base: '100%', md: '80%' }}>
                        Turning visions into reality, BN Technocrats Pvt Ltd (Formerly BN Consultants) offers comprehensive construction and technical consultancy services. From design to execution, we deliver tailored solutions for your projects' success.
                    </Text>
                </VStack>
                <Image src={hero} boxSize={isMobile ? '300px' : '600px'} alt='Hero img' />
            </Stack>
            <About />


            <Box p={6} >


            <VStack spacing={'-10px'} mb={10} >
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

                <Stack direction={['column', 'row']}  >



                    {
                        servicesList.map((item, index) => {
                            return (
                                <Services cardImage={item.img} cardHeading={item.heading} cardDesc={item.desc} />
                            )
                        })
                    }
                </Stack>
            </Box>
        </Container>
    );
};

export default Home;
