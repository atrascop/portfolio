import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer from Morocco!!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Med baghough
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/takuya.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Baghough is a freelance and a full-stack developer based in casablanca
          with a passion for building digital services/stuff he wants. He has a
          knack for all things launching products, from planning and designing
          all the way to solving real-life problems with code. When not online,
          he loves doing sports{' '}
          {/* <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link> */}
          {/* . He publishes content for webs his products and his YouTube channel
          called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Casablanca, Morocco.
        </BioSection>
        <BioSection>
          <BioYear>2019-2021</BioYear>
          Completed Diploma Specialized Technician in Machine and Tool
          Maintenance in Plastics Processing
        </BioSection>
        <BioSection>
          <BioYear>2018-2019</BioYear>o Training: Specialized Technician in
          Electromechanics of Automated Systems
        </BioSection>
        <BioSection>
          <BioYear>2016-2017</BioYear>
          Baccalaureate in Experimental Sciences
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link
            href="https://www.amazon.com/Crime-Punishment-Fyodor-Dostoyevsky/dp/9386538059/ref=sr_1_1_sspa?adgrpid=132492027824&dib=eyJ2IjoiMSJ9.Nx3jC6yWJ2xhP0qz57PedNj2_n1ndSL38ZPuVQcDKH1bjjM6W6ioVKk-piVbHAcxTx-JJGnuLsCfRKPdqa9mtEC1RmILMuRp50n4edvUJBo1m5Q1aFLBBuDPYkSdv2omOVsbE4SCRydWPo6CUc45-IAhKhAncvCcegtlcRI1jZVV_Wk7cKUFpGCOfti7NkqGdLK21U_bqMH9q4XF5PoKSTaik3IM0nBoYi4ajjYnGb4.jgIiQ15TqkzJg7H3Aj3V7A_exebaFiAduJGPRE1Sk_w&dib_tag=se&hvadid=585479290541&hvdev=c&hvlocphy=9210960&hvnetw=g&hvqmt=b&hvrand=14847991198364758583&hvtargid=kwd-298275204713&hydadcr=28018_14525557&keywords=crime+and+punishment+book&mcid=7d6c294ab6063427834b37650fc76e62&qid=1741879231&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
            target="_blank"
          >
            Reading
          </Link>
          , Playing Drums,{' '}
          <Link
            href="https://fr.wikipedia.org/wiki/Wydad_Athletic_Club_(football)"
            target="_blank"
          >
            Wydad
          </Link>
          , Photography, web scraping
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/atrascop" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @atrascop
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://www.instagram.com/mooatlas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @mooatlas
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;200k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p> */}

        {/* <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
