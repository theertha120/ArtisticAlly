import React from 'react';
import { Box, Divider, AbsoluteCenter } from '@chakra-ui/react';
import { Card, Image, Stack, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';

const AboutUs = () => {
    return (
        <div style={{ marginTop: '300px' }}> {/* Adjusted margin to move the component lower */}
            <Box position='relative' padding='10'>
                <Divider borderColor="gray.300" />
                <AbsoluteCenter px='4'>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: 50, color: 'white' }}> About Us</span>
                </AbsoluteCenter>
            </Box>

            <br /><br /> {/* Add line breaks to create space between the Divider and the Card */}

            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg="rgba(255, 255, 255, 0.8)" maxW="97%" padding="20px" borderRadius={"50px"}>
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '100%' }} // Set to 50% of the Card's width for sm breakpoints and 100% for base
                    src='/p5.png' // Changed the image source to '1p5.png' in the public folder
                    alt='Logo of Brand'
                />

                <Stack>
                    <CardBody padding="10px">

                        <Text py='4' fontSize="18px" fontFamily={'Montserrat, sans-serif'} fontWeight={"500"}>
                            Our primary goal is to create an app to empower individuals within the arts and performance community to find meaningful opportunities such as jobs, connect with like-minded individuals, initiate collaborative projects, and participate in events, competitions, and stage performances. This app is for the dancer who wants to participate in a competition but is facing challenges in finding a sufficient number of participants for a group performance, for the artist who is dedicated to selling his artworks at exhibitions for charitable purposes, and even for the writer who wants to find a steady job opportunity.
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
            <br /><br /><br />
        </div>
    );
};

export default AboutUs;
