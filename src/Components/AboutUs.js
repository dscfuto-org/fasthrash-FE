import { Box, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { useColors } from "../App";
import AboutImage from "../assets/images/img5.jpg"
import { useActiveNav } from '../util/useActiveNav'

const AboutUs = () => {
    const aboutUsRef = useActiveNav('About Us')
    return (
    <Box ref={aboutUsRef} id='aboutContainer' w='100%' height={{base: '100%',md: '100%', lg:'700px'}} pb={{base: '50px'}} pt='56px' display="flex" alignItems="center" justifyContent="space-between" 
     pl={{md: '15px',lg: "30px"}} px={{base:'7px'}} flexDirection={{base: 'column', md: 'row', lg: 'row'}} bgColor="#111210" color="#ffffff">
      <Box width={{ base: '100%', sm: '100%', md: '60%', lg: '40%' }}>
        <Heading  fontSize={{ base: '40px', md: '50px', lg: '60px' }} textAlign={{base: 'center' , md: 'initial', lg: 'initial'}}>
        Make <span style={{ color: useColors.appYellow }}>Meaning Impact</span> In The Community You Care About. 
        </Heading>
          <Text pt="20px" textAlign={{base: 'center' , md: 'initial', lg: 'initial'}}>
            Welcome to our trash recycling website! We believe that recycling is the key to preserving our planet for future generations. Our mission is to make recycling easier and more accessible for everyone. By working together, we can reduce waste and create a cleaner, greener world.
          </Text>
      </Box>
      <Box width={{base:'100%', md: '90%',lg: '40%'}} pt={{base: '20px'}}>
        <Image src={AboutImage} alt="AboutImage"  width={{base: '100%', md: '100%', lg: '80%'}} height={{base: '100%', md: '100%', lg: '500px'}} objectFit='cover' borderRadius='10px'/>
      </Box>
    </Box>
    )
}

export default AboutUs
