import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Amazona <Badge>2022</Badge>
      </Title>
      <P>
        Build Next.js E-Commerce Website Like Amazon" simplifies the process of
        creating a powerful online store with modern technologies. Why? Because
        you don’t need to spend hours setting up complex configurations—just
        follow the guide, and you’ll have a fully functional e-commerce platform
        ready to go!
      </P>
      <P>
        It’s built with Next.js 13 for performance, Next Auth 4 for secure
        authentication, and Tailwind for a sleek UI. Payments? No
        problem—integrate PayPal or Stripe effortlessly. Your content is hosted
        on Cloudinary, and the site is deployed seamlessly with GitHub, Vercel,
        and MongoDB Atlas. So, whether you’re starting your own online store or
        upgrading an existing one, this project has everything you need. Let’s
        build and scale your e-commerce business today!
      </P>
      <UnorderedList my={4}>
        <ListItem>Secure authentication with Next Auth 4</ListItem>
        <ListItem>Real-time analytics with Chart.js</ListItem>
        <ListItem>Seamless payments via PayPal and Stripe</ListItem>
        <ListItem>Fast deployment with Vercel and MongoDB Atlas"</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Tech: Nextjs 13, Next Auth 4 UI: Tailwind, chart.js, react-chartjs
            DB: MongoDB, Mongoose Payment: PayPal, Stripe Content Hosting:
            cloudinary Deploy: Github, Vercel, MongoDB Atlas
          </span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://next-tailwind-amazona.vercel.app/">
            Amazona <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/atrascop/next-tailwind-amazona">
            github.com/atrascop/next-tailwind-amazona
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://next-tailwind-amazona.vercel.app/"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/mern.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/mern1.png" alt="Amazona" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/mern2.png" alt="Amazona" />
        <WorkImage src="/images/works/mern3.png" alt="Amazona" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
