import React from 'react'
import { Box, Heading, VStack, Stack } from '@chakra-ui/react'
import Underline from 'components/_common/underline'
import { Card } from './Card'
import cardsContent from './_cardsContent.json'

export default function NewMemberJoinMethodComponent() {
  return (
    <>
      <VStack as={Box} mt={'4rem'} mb={'8rem'}>
        <Heading
          fontFamily='Clear Sans'
          fontWeight={{ base: 600, md: 800 }}
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textTransform={'uppercase'}
          pb={{ base: '2rem', md: 0 }}>
          How to join
          <Underline />
        </Heading>
        <Box w='100%' pos='relative'>
          <Stack
            w='100%'
            spacing='1rem'
            direction='row'
            justifyContent='center'
            alignItems='center'>
            {cardsContent.map((card, index) => (
              <Card card={card} index={index} />
            ))}
          </Stack>
          <Box
            pos='absolute'
            w='200vw'
            h='400px'
            zIndex={0}
            top='-94%'
            left='-50%'
            transform='rotate(16deg)'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 400 201'>
              <g clipPath='url(#a)'>
                <path
                  stroke='url(#linear)'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit='10'
                  strokeWidth='1'
                  d='m0 100.5 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.3 1-.4 1-.3 1-.3 1-.4 1-.3 1-.3 1-.2 1-.3 1-.2 1-.2 1-.3 1-.1 1-.2 1-.2 1-.1 1-.1 1-.1h1l1-.1h1l1-.1h3l1 .1 1 .1 1 .1 1 .1 1 .2 1 .1 1 .2 1 .2 1 .2 1 .3 1 .2 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .3 1 .4 1 .4 1 .3 1 .4 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .3 1 .4 1 .3 1 .4 1 .3 1 .3 1 .2 1 .3 1 .3 1 .2 1 .2 1 .2 1 .2 1 .2 1 .1 1 .1 1 .2h1l1 .1h2l1 .1h3l1-.2h1l1-.2h1l1-.2 1-.2 1-.2 1-.2 1-.2 1-.2 1-.3 1-.3 1-.2 1-.3 1-.3 1-.4 1-.3 1-.4 1-.3 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.4 1-.3 1-.4 1-.4 1-.3 1-.3 1-.4 1-.3 1-.3 1-.2 1-.3 1-.2 1-.3 1-.2 1-.2 1-.2 1-.1 1-.2h1l1-.2h1l1-.1h1l1-.1h3l1 .1h1l1 .2 1 .1 1 .1 1 .2 1 .2 1 .1 1 .3 1 .2 1 .2 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .3 1 .4 1 .3 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .3 1 .4 1 .3 1 .3 1 .4 1 .3 1 .3 1 .2 1 .3 1 .2 1 .2 1 .3 1 .1 1 .2 1 .2 1 .1 1 .1 1 .1h1l1 .1h1l1 .1h3l1-.1 1-.1 1-.1 1-.1 1-.2 1-.1 1-.2 1-.2 1-.2 1-.3 1-.2 1-.3 1-.2 1-.3 1-.3 1-.4 1-.3 1-.3 1-.4 1-.4 1-.3 1-.4 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.3 1-.4 1-.3 1-.4 1-.3 1-.3 1-.2 1-.3 1-.3 1-.2 1-.2 1-.2 1-.2 1-.2 1-.1 1-.1 1-.2h1l1-.1h2l1-.1h3l1 .2h1l1 .2h1l1 .2 1 .2 1 .2 1 .2 1 .2 1 .2 1 .3 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .4 1 .3 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .4 1 .3 1 .4 1 .4 1 .3 1 .3 1 .4 1 .3 1 .3 1 .2 1 .3 1 .2 1 .3 1 .2 1 .2 1 .2 1 .1 1 .2h1l1 .2h1l1 .1h1l1 .1h3l1-.1h1l1-.2 1-.1 1-.1 1-.2 1-.2 1-.1 1-.3 1-.2 1-.2 1-.3 1-.2 1-.3 1-.3 1-.4 1-.3 1-.3 1-.4 1-.3 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4'
                />
              </g>
              <defs>
                <clipPath id='a'>
                  <path
                    fill='#fff'
                    d='M0 0h400v200H0z'
                    transform='translate(0 .5)'
                  />
                </clipPath>
                <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='25.24%' stopColor='#FF0000' />
                  <stop offset='69.55%' stopColor='#0500FF' />
                </linearGradient>
              </defs>
            </svg>
          </Box>
          <Box
            pos='absolute'
            w='200vw'
            h='400px'
            zIndex={0}
            top='-104%'
            left='-60%'
            transform='rotate(-4deg)'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 400 201'>
              <g clipPath='url(#a)'>
                <path
                  stroke='url(#linear)'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit='10'
                  strokeWidth='1'
                  d='m0 100.5 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.3 1-.4 1-.3 1-.3 1-.4 1-.3 1-.3 1-.2 1-.3 1-.2 1-.2 1-.3 1-.1 1-.2 1-.2 1-.1 1-.1 1-.1h1l1-.1h1l1-.1h3l1 .1 1 .1 1 .1 1 .1 1 .2 1 .1 1 .2 1 .2 1 .2 1 .3 1 .2 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .3 1 .4 1 .4 1 .3 1 .4 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .3 1 .4 1 .3 1 .4 1 .3 1 .3 1 .2 1 .3 1 .3 1 .2 1 .2 1 .2 1 .2 1 .2 1 .1 1 .1 1 .2h1l1 .1h2l1 .1h3l1-.2h1l1-.2h1l1-.2 1-.2 1-.2 1-.2 1-.2 1-.2 1-.3 1-.3 1-.2 1-.3 1-.3 1-.4 1-.3 1-.4 1-.3 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.4 1-.3 1-.4 1-.4 1-.3 1-.3 1-.4 1-.3 1-.3 1-.2 1-.3 1-.2 1-.3 1-.2 1-.2 1-.2 1-.1 1-.2h1l1-.2h1l1-.1h1l1-.1h3l1 .1h1l1 .2 1 .1 1 .1 1 .2 1 .2 1 .1 1 .3 1 .2 1 .2 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .3 1 .4 1 .3 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .3 1 .4 1 .3 1 .3 1 .4 1 .3 1 .3 1 .2 1 .3 1 .2 1 .2 1 .3 1 .1 1 .2 1 .2 1 .1 1 .1 1 .1h1l1 .1h1l1 .1h3l1-.1 1-.1 1-.1 1-.1 1-.2 1-.1 1-.2 1-.2 1-.2 1-.3 1-.2 1-.3 1-.2 1-.3 1-.3 1-.4 1-.3 1-.3 1-.4 1-.4 1-.3 1-.4 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.3 1-.4 1-.3 1-.4 1-.3 1-.3 1-.2 1-.3 1-.3 1-.2 1-.2 1-.2 1-.2 1-.2 1-.1 1-.1 1-.2h1l1-.1h2l1-.1h3l1 .2h1l1 .2h1l1 .2 1 .2 1 .2 1 .2 1 .2 1 .2 1 .3 1 .3 1 .2 1 .3 1 .3 1 .4 1 .3 1 .4 1 .3 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .5 1 .4 1 .4 1 .4 1 .4 1 .4 1 .3 1 .4 1 .4 1 .3 1 .3 1 .4 1 .3 1 .3 1 .2 1 .3 1 .2 1 .3 1 .2 1 .2 1 .2 1 .1 1 .2h1l1 .2h1l1 .1h1l1 .1h3l1-.1h1l1-.2 1-.1 1-.1 1-.2 1-.2 1-.1 1-.3 1-.2 1-.2 1-.3 1-.2 1-.3 1-.3 1-.4 1-.3 1-.3 1-.4 1-.3 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.4 1-.5 1-.4'
                />
              </g>
              <defs>
                <clipPath id='a'>
                  <path
                    fill='#fff'
                    d='M0 0h400v200H0z'
                    transform='translate(0 .5)'
                  />
                </clipPath>
                <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='25.24%' stopColor='#FF0000' />
                  <stop offset='69.55%' stopColor='#0500FF' />
                </linearGradient>
              </defs>
            </svg>
          </Box>
          <Box
            h={'40rem'}
            w={'40rem'}
            pos='absolute'
            zIndex='0'
            left={{ base: '-60%', lg: '-60%' }}
            bottom={{ base: '0%', lg: '0%' }}
            opacity='0.2'
            bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.6) 58%, rgba(140,29,207,0.6) 0%)'
            filter='blur(6rem)'
          />
          <Box
            h={'50rem'}
            w={'40rem'}
            pos='absolute'
            zIndex='0'
            left={{ base: '80%', lg: '80%' }}
            top={{ base: '-80%', lg: '-80%' }}
            opacity='0.2'
            bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.6) 58%, rgba(140,29,207,0.6) 0%)'
            filter='blur(6rem)'
          />
        </Box>
      </VStack>
    </>
  )
}
