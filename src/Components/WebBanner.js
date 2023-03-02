import { Box } from '@chakra-ui/react'
import React from 'react'
import bannerImage from '../assets/images/banner-1.png'
import { BsDot } from 'react-icons/bs'
import { useColors } from "../App";
import { useActiveNav } from '../util/useActiveNav';

const WebBanner = () => {
    const homeRef = useActiveNav('Home')
    return (
        <Box
            ref={homeRef}
            id='homeContainer'
            w='100%'
            h={{ base: 'calc(100vh - 60px)', md: 'calc(100vh - 60px)', lg: '600px' }}
            backgroundRepeat='no-repeat'
            style={{ backgroundPosition: 'center' }}
            backgroundSize='cover'
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage})`}
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexFlow='column'
            color='#fff'
        >
            <Box flexWrap='wrap' px='5px' fontSize={{ base: '22px', md: '55px', lg: '75px' }} fontWeight={700} textShadow='0 2px 6px rgba(255, 255, 255, 0.6)' textTransform='uppercase' display='flex' alignItems='center' justifyContent='center' mb='20px'>
                Reduce <BsDot /> <span style={{ color: useColors.appYellow }}>Reuse</span> <BsDot /> Reclaim
            </Box>
            <Box flexWrap='wrap' px='20px' maxW='600px' fontSize={{ base: '13px', md: '14px', lg: '16px' }} textAlign='center'>
                Welcome to <span style={{ color: useColors.appYellow }}>FastTrash</span>, the world's <span style={{ color: useColors.appYellow }}>#1</span> trash recycling brand!
                <br />
                We believe that recycling is the key to preserving our planet for future generations.
                Our mission is to make recycling easier and more accessible for everyone. By working together
                we can reduce waste and create a cleaner, greener world.
            </Box>
        </Box>
    )
}

export default WebBanner
