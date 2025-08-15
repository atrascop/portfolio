import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        portfolio <Badge>2022-2021</Badge>
      </Title>
      <P>
        Your portfolio is more than just a website—it's your digital handshake,
        your creative canvas, and your personal brand rolled into one. When I
        set out to build mine, I wanted a tech stack that combined performance,
        scalability, and a smooth user experience. Here’s a peek under the hood
        at the tools and decisions that shaped my portfolio.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://my-portfolio-tau-dusky-69.vercel.app/">
            https://my-portfolio-tau-dusky-69.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js 13, React 18, React DOM, Framer Motion, Prettier , ESLint
          </span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/portfolio3.png" alt="walknote" />
        <WorkImage src="/images/works/portfolio2.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/works/portfolio1.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
