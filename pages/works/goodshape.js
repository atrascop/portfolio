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

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        GoodShape <Badge>2024</Badge>
      </Title>
      <P>
        {' '}
        Build a Smart AI-Powered Fitness Platform with AI-Fitness · 2024
        Streamline the development of a sleek, intelligent fitness web app using
        powerful modern tools. Whether you're building a wellness tracker,
        workout planner, or AI assistant, AI-Fitness gives you the perfect
        foundation—so you can focus on features, not boilerplate.
      </P>
      <P>
        AI-Fitness combines{' '}
        <Link href="https://nextjs.org/blog/next-14" target="_blank">
          Next.js 14 <ExternalLinkIcon mx="2px" />
        </Link>
        and Prisma for a fast, scalable full-stack framework. With Tailwind CSS,
        MUI, and Radix UI, your interfaces are responsive, beautiful, and
        accessible. Integrate rich user experiences using Lottie animations,
        React Time Picker, and MUI X Date Pickers, while OpenAI enables smart AI
        features to personalize user journeys.
      </P>
      Key Features:
      <UnorderedList my={5}>
        <ListItem>
          ✅ Elegant & Responsive UI – MUI + Tailwind CSS + Animate.css for
          polished design
        </ListItem>
        <ListItem>
          ✅ AI Integration Ready – Powered by OpenAI for personalized and
          intelligent UX
        </ListItem>
        <ListItem>
          ✅ Robust Backend – Prisma ORM + MongoDB for scalable, type-safe data
          handling
        </ListItem>
        <ListItem>
          {' '}
          ✅ Modern Date & Time Tools – MUI X Date Pickers + React Time Picker +
          Day.js
        </ListItem>
        <ListItem>
          ✅ Beautiful Animations – Lottie React for stunning, lightweight
          animations
        </ListItem>
        <ListItem>
          ✅ Advanced UI Components – Radix UI for accessible, low-level UI
          primitives
        </ListItem>
        <ListItem>
          ✅ Developer-First Stack – TypeScript, ESLint (Airbnb), Prettier,
          clsx, uuid
        </ListItem>
        Build faster, smarter, and more beautifully with AI-Fitness.
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          Framework: Next.js (latest), Prisma
          <ListItem>
            UI:Tailwind CSS, MUI (Material UI), Radix UI, Tailwind Animate,
            Animate.css
          </ListItem>
          <ListItem>DB: MongoDB, Prisma ORM</ListItem>
          <ListItem>AI: OpenAI API</ListItem>
          <ListItem>
            Date/Time: Day.js, MUI X Date Pickers, React Time Picker
          </ListItem>
          <ListItem>Icons: Lucide, React Icons</ListItem>
          <ListItem>HTTP: Axios</ListItem>
          <ListItem>Animation: Lottie React</ListItem>
          <ListItem>
            Utilities: clsx, tailwind-merge, class-variance-authority, uuid
          </ListItem>
          <ListItem>
            Dev Tools: TypeScript, ESLint (Airbnb config), Prettier
          </ListItem>
          <ListItem>Deploy: Vercel, GitHub</ListItem>
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
      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://bestshape-one.vercel.app/">
            Live demo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/">
            Deep Learningを使って映像作品を作った
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>
      <WorkImage src="/images/works/shape1.png" alt="mode.tokyo" />
      <WorkImage src="/images/works/shape2.png" alt="mode.tokyo" />
      <WorkImage src="/images/works/shape3.png" alt="mode.tokyo" />
      <WorkImage src="/images/works/shape4.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
