import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function BanklessAfricaComponent() {
  return (
    <Stack
      justify='space-between'
      align={'center'}
      width={{ md: '750px', lg: '800px', xl: '1000px' }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        flex={1}
        justify={'flex-start'}
        alignItems={'center'}
        position={'relative'}
        w={'full'}
      >
        <Box
          position={'relative'}
          height={{ base: '300px', sm: '350px' }}
          width={{ base: '300px', sm: '350px' }}
          boxShadow={'2xl'}
          overflow={'hidden'}
        >
          <Image
            alt={'Bankless Africa logo'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src='/images/banklessAfrica.png'
          />
        </Box>
      </Flex>

      <Stack
        width={{ base: '300px', sm: '350px', xl: '500px' }}
        spacing={{ base: 5, md: 4 }}
      >
        <Heading
          color={'gray.100'}
          width={{ base: '300px', sm: '350px', xl: '500px' }}
          fontWeight={700}
          mt={{ base: '32px', md: '0' }}
          fontSize={{ base: '20px' }}
        >
          BANKLESS AFRICA
        </Heading>
        <Text
          color={'gray.100'}
          width={{ base: '300px', sm: '350px', xl: '500px' }}
          lineHeight={{
            base: '20px',
            sm: '27px',
            md: '30px',
            lg: '30px',
            xl: '45px',
          }}
          fontSize={{ base: '16px', sm: '20px' }}
        >
          Bankless Africa promotes, educates and propagate truely bankless
          media, culture and education to drive the adoption of trustless,
          decentralized money and blockchain technology with the aim of
          achieving capacity building, economic empowerment and financial
          sovereignty in Africa.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <Link href={'https://www.banklessafrica.com/'} isExternal>
            <Flex
              align={'center'}
              color={'white.100'}
              fontSize='20px'
              lineHeight={'24px'}
              fontWeight='700'
            >
              Learn More <FiArrowUpRight />
            </Flex>
            <Box height={'1px'} width='100%' bgColor={'#999999'} mt='6px' />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
