import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbAappscript from '../public/images/posts/appscript.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6} z>
        <Section>
          <PostGridItem
            id="appscript"
            title="🛠️ How I Automated Google Workspace Using Apps Script"
            thumbnail={thumbAappscript}
          >
            Web scraping{' '}
          </PostGridItem>
        </Section>

        <Section>
          <PostGridItem
            id="scraping"
            title="🕷️ Scraping the Web with Puppeteer: Real Projects I’ve Built"
            thumbnail={thumbAappscript}
          >
            Web scraping{' '}
          </PostGridItem>
        </Section>
        <Section>
          <PostGridItem
            id="margelo"
            title="🚀 Learning React + Tailwind by Cloning My Own Portfolio"
            thumbnail={thumbAappscript}
          >
            Frontend{' '}
          </PostGridItem>
        </Section>
        <Section>
          <PostGridItem
            id="margelo"
            title="⚙️ Building My DevOps CI/CD Pipeline from Scratch"
            thumbnail={thumbAappscript}
          >
            DevOps{' '}
          </PostGridItem>
        </Section>
        <Section>
          <PostGridItem
            id="margelo"
            title="⚙️ How I Built Real-World APIs with Node.js & MongoDB"
            thumbnail={thumbAappscript}
          >
            Backend{' '}
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
