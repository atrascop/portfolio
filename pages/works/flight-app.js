import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Flight-app">
    <Container>
      <Title>
        Flight-app <Badge>2024</Badge>
      </Title>
      <P>
        In the world of modern web development, building fast, accessible, and
        delightful user experiences is essential—especially for something as
        critical as a flight booking application. In this article, we’ll walk
        you through how we architected and built our flight booking platform
        using Next.js and Radix UI, while leveraging a stack of libraries that
        enhanced both our developer experience and end-user experience.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://flight-app4.vercel.app/" target="_blank">
              https://flight-app4.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Framework: Next.js 15/UI Primitives: Radix UI/ Vercel / State
            Management: Zustand / Motion: framer-motion/ Styling: Tailwind CSS +
            tailwindcss-animate
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Video</Meta>
          <Link href="https://www.youtube.com/watch?v=GznmPACXBlY">
            How I built a software agency website with Next.js + Tailwind CSS
            (in nature) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/flight2.png" alt="flight-app" />
      <WorkImage src="/images/works/flight1.png" alt="flight-app" />
      <WorkImage src="/images/works/flight3.png" alt="flight-app" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
