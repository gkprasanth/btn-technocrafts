import { Container, Box, Stack, Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';

const Services = ({ cardImage, cardHeading, cardDesc }) => {
    return (

        <>
            
            <Container>
                <Box borderRadius={'sm'} bgColor={'#eff7fe'} p={5} height="100%">
                    <Stack gap={7}>
                        <Image
                            _hover={{
                                transform: "scale(1.1)",
                                transition: "transform 0.3s ease",
                            }}
                            src={cardImage}
                            objectFit={'contain'}
                            margin={'auto'}
                        />
                        <Stack>
                            <Text color={'black'} fontSize={'1.3rem'} textAlign={'center'} fontWeight={'bold'}>{cardHeading}</Text>
                            <Text color={'black'} textAlign={'center'}>{cardDesc}</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </>

    );
};

export default Services;
