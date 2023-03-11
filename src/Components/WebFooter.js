import { Box, Flex, UnorderedList, ListItem, Input, Button, Text } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom";
import { useColors } from "../App";
import React from 'react'

const WebFooter = () => {
    return (
        <Box w='100%' bg='#111210' flexDirection={{ base: 'column', md: 'row', lg: 'row' }} color='#fff' mt='50px' p={{ base: '10px', md: '20px', lg: '50px' }} display='flex' alignItems='center' justifyContent='center'>
            <Box width={{ base: '100%', md: '50%', lg: '25%' }} fontSize='2xl' fontWeight='bold' pt={{ base: '20px', md: '0px', lg: '0px' }}>
                <Box fontSize={{ base: "1xl", md: '18px', lg: '20px' }} fontWeight={700} bgGradient='linear(to-l, #FAB20F, #2A8D00)' bgClip='text'>
                    <ReachLink to="/">FAST TRASH</ReachLink>
                </Box>
            </Box>
            <Box width={{ base: '100%', md: '50%', lg: '25%' }} style={{ color: useColors.appWhite }}>
                <UnorderedList listStyleType='none' fontSize='18px' display='flex' flexDirection='column' lineHeight='2'>
                    <ListItem fontWeight="bold">Menu</ListItem>
                    <ListItem as={ReachLink} to="/#home" >Home</ListItem>
                    <ListItem as={ReachLink} to="/#about">About</ListItem>
                    <ListItem as={ReachLink} to="/#education">Education</ListItem>
                </UnorderedList>

            </Box>
            <Box width={{ base: '100%', md: '50%', lg: '25%' }}>
                <UnorderedList listStyleType='none' fontSize='18px' display='flex' flexDirection='column' mt='40px' lineHeight='2'>
                    <ListItem fontWeight="bold">Connect</ListItem>
                    <ListItem as={ReachLink} to="#">Instagram</ListItem>
                    <ListItem as={ReachLink} to="#">Twitter</ListItem>
                    <ListItem as={ReachLink} to="#">LinkedIn</ListItem>
                    <ListItem as={ReachLink} to="#">Facebook</ListItem>
                </UnorderedList>

            </Box>
            <Box width={{ base: '100%', md: '50%', lg: '25%' }}>
                <Text fontSize={{ base: '18px', md: '20px' }} mb="10px" pt={{ base: "20px", lg: '0px' }} textAlign={{ base: 'center', md: 'initial', lg: 'initial' }}>Subscribe to our Edu-Letter!</Text>
                <Flex width={{ base: '100%' }} flexDirection={{ base: 'column', md: 'column', lg: 'row' }} rowGap='2px' >
                    <Input placeholder='Email Here' width={{ base: '100%', md: '200px', lg: '300px' }} borderRadius='10px' outline='none' border='none' style={{ background: useColors.appWhite }} />
                    <Button width={{ base: '40%', md: '40%', lg: '100px' }} fontSize={{ base: '15px', lg: '16px' }} alignSelf={{ base: 'center', lg: 'initial' }} ml='10px' mt={{ base: '10px', lg: '0px' }} borderRadius='7px' style={{ background: useColors.appYellow }}>Subscribe</Button>
                </Flex>

            </Box>
        </Box>
    )
}

export default WebFooter
