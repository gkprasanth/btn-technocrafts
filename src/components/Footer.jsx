import { Box, Container, Stack, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box ml={'75px'} bg="gray.800" color="white" bottom={0} justifyContent={'center'}  w={'90vw'} overflow={'none'} >
            
            
            <Container maxW="container.xl" py={8}>
                <Stack direction={['column', 'row']} spacing={4} justifyContent="center" alignItems="center">
                    <Text>&copy; BTN TECHNOCRAFTS</Text>
                    <Stack direction="row" spacing={4}>
                        <Link href="#">About Us</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Projects</Link>
                        <Link href="#">Contact</Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
