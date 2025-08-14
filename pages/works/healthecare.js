import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  ListIcon
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { IoListCircle } from 'react-icons/io5'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        "Build a Modern Healthcare Platform with CarePluse" <Badge>2024</Badge>
      </Title>
      <P>
        {' '}
        Simplifies the process of creating a secure, user-friendly healthcare
        application with cutting-edge technologies. Why spend hours on complex
        setups when you can follow a streamlined approach to build a fully
        functional platform?
      </P>
      <P>
        CarePluse leverages{' '}
        <Link href="https://nextjs.org/blog/next-14" target="_blank">
          Next.js 14 <ExternalLinkIcon mx="2px" />
        </Link>
        CarePluse leverages Next.js 14 for blazing-fast performance, Next Themes
        for seamless dark/light mode support, and Tailwind CSS with Tailwind
        Merge for a polished, responsive UI. With React Hook Form and Zod, enjoy
        robust form validation and data handling, while Appwrite ensures secure
        authentication and backend functionality.
      </P>
      Key Features:
      <UnorderedList my={5}>
        <ListItem>
          ✅ Secure & Themed UI – Next Themes for effortless dark/light mode
          switching{' '}
        </ListItem>
        <ListItem>
          ✅ Optimized Forms – React Hook Form + Zod for smooth, validated user
          inputs
        </ListItem>
        <ListItem>
          ✅ Modern Styling – Tailwind CSS + Tailwind Animate for sleek,
          animated interfaces
        </ListItem>
        <ListItem>
          {' '}
          ✅ Phone Input Support – React Phone Number Input for seamless user
          onboarding{' '}
        </ListItem>
        <ListItem>
          ✅ Fast Backend Integration – Appwrite for scalable authentication and
          data management
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Framework: Next.js 13+ UI: Tailwind CSS Language: TypeScript Tools:
            Prettier, PostCSS, Autoprefixer
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf">
            ISID Starts a Research Project to Visualize Impact of Media Contents
            on Visit of Foreign High-Intellect Class to Japan{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://innolab.jp/news/achievement/335">
            メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>
      <SimpleGrid>
        <WorkImage src="/images/works/care1.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/care2.png" alt="CarePluse" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
