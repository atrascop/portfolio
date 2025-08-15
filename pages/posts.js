import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbAappscript from '../public/images/posts/appscript.png'
import thumbAappscript2 from '../public/images/posts/n8n.png'

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
            title="🚀 Automating Google Sheets: Boosting Productivity with Smart Workflows!"
            thumbnail={thumbAappscript}
          >
            Web automation{' '}
          </PostGridItem>
        </Section>

        <Section>
          <PostGridItem
            id="scraping"
            title="⚡ From Manual to Magical: Automating Tasks with Google Apps Script 2025"
            thumbnail={thumbAappscript}
          >
            Web automation{' '}
          </PostGridItem>
        </Section>

        <Section>
          <PostGridItem
            id="n8n"
            title="🚀 Automating Google Sheets: Boosting Productivity with Smart Workflows!"
            thumbnail={thumbAappscript2}
          >
            n8n{' '}
          </PostGridItem>
        </Section>
        <Section>
          <PostGridItem
            id="lead"
            title="🚀 Automating Lead Generation with n8n: From Clicks to Clients"
            thumbnail={thumbAappscript2}
          >
            n8n{' '}
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
