import { Container, HStack, Image, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import hero from '../assets/gero.png';
import About from './About';

const Home = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Container id='home' maxW={'100vw'} pt={'100px'} px={4}>
            <Stack direction={isMobile ? 'column' : 'row'} justifyContent={'center'}  spacing={8} align={isMobile ? 'center' : 'center'}>
                <VStack align={isMobile ? 'center' : 'flex-start'} spacing={4} maxW={isMobile ? '100%' : '50%'}>
                    <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" color="blue.500" textAlign={isMobile ? 'center' : 'start'}>BN Technocrats Pvt Ltd</Text>
                    <Text textAlign={'justify'} fontSize={{ base: 'md', md: 'lg' }} maxW={{ base: '100%', md: '80%' }}>
                        Turning visions into reality, BN Technocrats Pvt Ltd (Formerly BN Consultants) offers comprehensive construction and technical consultancy services. From design to execution, we deliver tailored solutions for your projects' success.
                    </Text>
                </VStack>
                <Image src={hero} boxSize={isMobile ? '300px' : '600px'} alt='Hero img' />
            </Stack>
            <About />
        </Container>
    );
};

export default Home;
