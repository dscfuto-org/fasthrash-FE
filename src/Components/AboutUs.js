import { Box } from '@chakra-ui/react'
import React from 'react'
import { useActiveNav } from '../util/useActiveNav'

const AboutUs = () => {
    const aboutUsRef = useActiveNav('About Us')
    return (
        <Box ref={aboutUsRef} id='aboutContainer' w='100%' h='400px' pt='56px'>
        AboutUs
        </Box>
    )
}

export default AboutUs
