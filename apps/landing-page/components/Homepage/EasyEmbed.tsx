import { Flex, Stack, Heading, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import nativeFeelingSrc from 'public/images/native-feeling.png'
import { ArrowRight } from 'assets/icons/ArrowRight'
import { Flare } from 'assets/illustrations/Flare'
import Link from 'next/link'

export const EasyEmbed = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="orange"
        pos="absolute"
        right="-200px"
        top="100px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: '1000px' }}
        pt={32}
        w="full"
        px="4"
        spacing={12}
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, '300px']}>
          <Heading as="h1" data-aos="fade">
            Embed it in a click
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
            Integrating your BotNinja into your apps is super easy. BotNinja
            provides clear, step-by-step instructions tailored to your platform.
            Your BotNinja will seamlessly blend in and feel like a natural part
            of your application.
          </Text>
          <Flex data-aos="fade">
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://app.botappninja.xyz/register`}
              variant="ghost"
              colorScheme="orange"
            >
              Try it now
            </Button>
          </Flex>
        </Stack>
        <Box rounded="md" data-aos="fade">
          <Image
            src={nativeFeelingSrc}
            alt="incomplete results illustration"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  )
}
