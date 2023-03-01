import { Box } from '@chakra-ui/react'
import React from 'react'
import { useActiveNav } from '../util/useActiveNav'

const Education = () => {
    const educationRef = useActiveNav('Education')

    return (
        <Box ref={educationRef} id='educationContainer' w='100' h='400px'>
        Education
        </Box>
    )
}

export default Education
