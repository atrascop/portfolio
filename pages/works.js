import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/flight1.png'
import thumbWalknote from '../public/images/works/portfolio1.png'
import thumbFourPainters from '../public/images/works/care1.png'
import thumbFourPainters2 from '../public/images/works/shape1.png'
import thumbMenkiki from '../public/images/works/mern1.png'
import thumbPichu2 from '../public/images/works/net1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6} z>
        <Section delay={0.1}>
          <WorkGridItem
            id="goodshape"
            title="GoodShape"
            thumbnail={thumbFourPainters2}
          >
            AI-Powered Fitness Platform with AI-Fitness combines Next.js and
            Prisma for a fast, scalable full-stack framework. With Tailwind CSS,
            MUI, and Radix UI, your interfaces are responsive, beautiful, and
            accessible.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="flight-app"
            title="Flight-app"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="portfolio"
            title="portfolio"
            thumbnail={thumbWalknote}
          >
            portfolio website for a developer
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="healthecare"
            title="HealtheCare"
            thumbnail={thumbFourPainters}
          >
            A modern healthcare boilerplate with secure auth, form validation,
            and responsive UI – built with Next.js 14, Tailwind CSS, and
            Appwrite
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="netflix" thumbnail={thumbPichu2} title="Netflix">
            Netflix clone :A minimal UI boilerplate with clean design, custom
            scrollbars, and production-ready icons – built with Next.js,
            Tailwind CSS, and TypeScript
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="amazona" thumbnail={thumbMenkiki} title="Amazona">
            Next.js E-Commerce Website lets you build a high-performance online
            store with modern web technologies.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
