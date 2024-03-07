import { Box, Button, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Home from '../assets/home.png'
import {useNavigate} from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {

    const navigate = useNavigate()
    return (
        <Box w={'100vw'} pos={'fixed'} bg={'#eff7fe'}  >
            <Stack direction={'row'} w={'100%'} maxW={'80vw'} flex={'true'} m={'auto'} justifyContent={'space-between'} alignItems={'center'} px={5} >
                <Box cursor={'pointer'} onClick={()=>{
                        navigate('/')
                    }}  >
                    <Image boxSize='80px' src={Home} alt='Dan Abramov' />
                </Box>
                <Box flex={'true'} >
                    <Link
                        to={"home"}
                        style={{ textDecoration: "none" }}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >
                        <Button color={'#012970'} variant={'ghost'} size='md'>
                            Home
                        </Button>
                    </Link>


                    <Link
                        to={"about"}
                        style={{ textDecoration: "none" }}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>

                        <Button color={'#012970'} variant={'ghost'} size='md'>
                            About
                        </Button>
                    </Link>

                    <Link
                        to={"services"}
                        style={{ textDecoration: "none" }}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >
                    <Button color={'#012970'} variant={'ghost'} size='md'>
                        Services
                    </Button>
                    </Link>
                    <Button colorScheme='teal' onClick={()=>{
                        navigate('/contact')
                    }} variant={'solid'} size='md'>
                        Contact
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default Navbar
