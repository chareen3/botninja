'use client'

import {
  Heading,
  Button,
  Text,
  Flex,
  VStack,
  StackProps,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BackgroundPolygons } from './Hero/BackgroundPolygons'

type Props = {
  heading?: string
  polygonsBaseTop?: string
} & StackProps

export const EndCta = ({ heading, polygonsBaseTop, ...props }: Props) => {
  return (
    <VStack
      as="section"
      py={32}
      pos="relative"
      bgGradient="linear(to-b, gray.900, gray.800)"
      height="100vh"
      justifyContent="center"
      {...props}
    >
      <BackgroundPolygons baseTop={polygonsBaseTop} />
      <VStack
        spacing="6"
        maxW="3xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        {heading ? (
          <Heading
            fontWeight="extrabold"
            letterSpacing="tight"
            data-aos="fade-up"
          >
            {heading}
          </Heading>
        ) : null}
        <Flex>
          <Button
            as={Link}
            href="https://app.botninja.xyz/register"
            size="lg"
            backgroundColor={'#8143E5'}
            height="4rem"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Create a BotNinja 🎉
          </Button>
        </Flex>

        <Text color="gray.400" data-aos="fade-up" data-aos-delay="400">
          ✅ No Credit Card required, <strong>Free Forever</strong> Plan.
        </Text>
      </VStack>
    </VStack>
  )
}
