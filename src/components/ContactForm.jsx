import React from 'react';
import { useForm } from 'react-hook-form';
import { VStack, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage, Text } from '@chakra-ui/react';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
<Text pt={5} fontSize="3rem" fontWeight="bold" color="#012970" textAlign={'center'}>About Us</Text>
            <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={6} w="100%" maxW="400px" mx="auto">
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" {...register("name", { required: "Name is required" })} />
                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input type="email" id="email" {...register("email", { required: "Email is required" })} />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.message}>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea id="message" {...register("message", { required: "Message is required" })} />
                    <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="teal">Submit</Button>
            </VStack>
        </>


    );
};

export default ContactForm;
