'use client'

import React, { ReactNode } from 'react'

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from 'assets/icons/Logo'
import { TextLink } from './TextLink'

const discordServerUrl = 'https://botninja.xyz/discord'
const typebotLinkedInUrl = 'https://www.linkedin.com/company/botninjas'
const typebotTwitterUrl = 'https://twitter.com/botninjas'
const baptisteTwitterUrl = 'https://twitter.com/botninjas'
const statusPageUrl = 'https://status.botninja.xyz'
export const contactUrl = 'https://bot.botninja.xyz/landing-page-bubble-en'
export const roadmapLink = 'https://app.botninja.xyz/feedback'
export const documentationLink = 'https://docs.botninja.xyz'
export const githubRepoLink = 'https://github.com/baptisteArno/botninja.xyz'

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={'1000px'} py={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={8} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Logo boxSize="30px" />
              <Heading as="p" fontSize="lg">
                BotNinja
              </Heading>
            </HStack>
            <Text>
              Made with ❤️ by{' '}
              <TextLink href={baptisteTwitterUrl}>@baptisteArno</TextLink>
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <TextLink href={statusPageUrl} isExternal>
              Status
            </TextLink>
            <TextLink href={documentationLink} isExternal>
              Documentation
            </TextLink>
            <TextLink href={roadmapLink} isExternal>
              Roadmap
            </TextLink>
            <TextLink href={'/pricing'}>Pricing</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Community</ListHeader>
            <TextLink href={discordServerUrl} isExternal>
              Discord
            </TextLink>
            <TextLink href={githubRepoLink} isExternal>
              GitHub repository
            </TextLink>
            <TextLink href={typebotTwitterUrl} isExternal>
              Twitter
            </TextLink>
            <TextLink href={typebotLinkedInUrl} isExternal>
              LinkedIn
            </TextLink>
            <TextLink href="/oss-friends">OSS Friends</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <TextLink href="/about">About</TextLink>
            <TextLink href="mailto:support@botninja.xyz">Contact</TextLink>
            <TextLink href={'/terms-of-service'}>Terms of Service</TextLink>
            <TextLink href={'/privacy-policies'}>Privacy Policy</TextLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Heading fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Heading>
  )
}
