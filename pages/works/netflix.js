import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Netflix,build a Sleek, Responsive Web App with TailNextUI{' '}
        <Badge>2021</Badge>
      </Title>
      <P>
        {' '}
        Kickstart your next web project with a minimal yet powerful setup
        designed for speed, aesthetics, and simplicity. TailNextUI provides a
        clean foundation with essential tools for modern UI development—no
        complex configuration required.
      </P>
      <P>
        Harness the full potential of{' '}
        <Link href="https://nextjs.org/blog/next-14" target="_blank">
          Next.js 14 <ExternalLinkIcon mx="2px" />
        </Link>
        for performance and scalability, styled with Tailwind CSS, enhanced with
        Tailwind Scrollbar and Text Shadow plugins for smooth and visually
        appealing interfaces. Icons from Heroicons and React Icons help you
        build professional, production-ready components in no time.
      </P>
      Key Features:
      <UnorderedList my={5}>
        <ListItem>
          ✅ Modern Framework – Next.js for fast rendering and production-grade
          structure
        </ListItem>
        <ListItem>
          ✅ Beautiful Styling – Tailwind CSS + Text Shadow plugin for elegant,
          accessible design
        </ListItem>
        <ListItem>
          ✅ Minimal Scrollbar – Tailwind Scrollbar/Hide for clean scroll
          experiences
        </ListItem>
        <ListItem>
          {' '}
          ✅ Ready-to-Use Icons – Heroicons & React Icons for sleek and
          consistent UI elements
        </ListItem>
        <ListItem>
          ✅ Developer Friendly – TypeScript, Prettier, and PostCSS for a smooth
          DX out of the box
        </ListItem>
      </UnorderedList>
      Start building without the boilerplate clutter—TailNextUI is your gateway
      to rapid, modern web development.
      <List ml={4} my={4}>
        <Meta>Platform</Meta>
        <span>Web</span>

        <ListItem>
          <Meta>Stack</Meta>
          Framework: Next.js 13+
          <UnorderedList mt={2} pl={4}>
            <ListItem>UI: Tailwind CSS</ListItem>
            <ListItem>Language: TypeScript</ListItem>
            <ListItem>Tools: Prettier, PostCSS, Autoprefixer</ListItem>
            <ListItem>Dev UX: Tailwind Scrollbar Hide, @types support</ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://nextflix-app-fox.vercel.app/">
            Nextflix-app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/atrascop/Nextflix-App">
            github.com/atrascop/Nextflix-App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <SimpleGrid>
        <WorkImage src="/images/works/net1.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/net2.png" alt="CarePluse" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
