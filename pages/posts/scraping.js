import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Scraping the Web with Puppeteer: Real Projects I’ve Built{' '}
        <Badge>2024</Badge>
      </Title>
      <h2>👋 Introduction </h2>
      <P>
        Web scraping is more than just pulling data from websites. For me, it
        became a gateway to freelance work, automation systems, and backend
        microservices. One tool that made all of that not only possible — but
        actually enjoyable — is Puppeteer.js. In this post, I’ll walk you
        through real projects I’ve built using Puppeteer, how I structured them,
        the challenges I faced, and lessons that helped me go from beginner
        scripts to client-ready automation tools.
      </P>
      <h2>🤖 Why I Chose Puppeteer</h2>
      <P>
        When I first got into automation, I experimented with libraries like
        axios, cheerio, and even BeautifulSoup in Python. But once I encountered
        JavaScript-heavy websites and CAPTCHA roadblocks, I needed something
        more powerful. Puppeteer, a Node.js library for controlling headless
        Chrome, gave me: Full browser rendering (perfect for SPAs and
        lazy-loaded content) Screenshot/PDF generation Built-in automation
        features like keyboard/mouse emulation DevTools-level control It was the
        perfect match for someone with a Node.js background like me.
      </P>
      {/* <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>DeepLearning, neural-style, Caffe, NodeJS</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/">
            The four painters: A Video Work Created with Deep Learning{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/">
            Deep Learningを使って映像作品を作った
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List> */}
      {/* 
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://news.ycombinator.com/item?id=10782289">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
            <Badge mr={2}>Gigazine</Badge>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
            four painters」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box>

      <WorkImage
        src="/images/works/the-four-painters_eyecatch.jpg"
        alt="walknote"
      />
      <WorkImage src="/images/works/the-four-painters_01.jpg" alt="walknote" />
      <WorkImage src="/images/works/the-four-painters_02.jpg" alt="walknote" /> */}
    </Container>
  </Layout>
)

export default Post
export { getServerSideProps } from '../../components/chakra'
