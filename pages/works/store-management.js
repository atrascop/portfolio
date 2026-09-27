import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Store Management System">
    <Container>
      <Title>
        Store Management System <Badge>2026</Badge>
      </Title>

      <P>
        A custom store management dashboard designed to centralize e-commerce
        operations in one place. The application brings together order
        management, product data, delivery tracking, advertising spend, and
        performance metrics through a modern React dashboard connected to a
        Node.js backend and Supabase database.
      </P>

      <P>
        The system also includes API integrations and Shopify webhook handling
        to keep store data synchronized and make it easier to monitor orders,
        products, delivery status, and advertising performance from a single
        interface.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link
              href="https://famous-smakager-22d301.netlify.app/dashboard"
              target="_blank"
            >
              Store Management Dashboard <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Frontend: React + TypeScript + Vite / UI: Tailwind CSS + Shadcn UI /
            State Management: Zustand / Backend: Node.js + Express / Database:
            Supabase / Integrations: Shopify Webhooks + Meta Ads / Deployment:
            Railway + Vercel
          </span>
        </ListItem>

        <ListItem>
          <Meta>Features</Meta>
          <span>
            Order Management / Product Management / Delivery Tracking /
            Advertising Spend / ROAS Monitoring / Shopify Webhooks / REST APIs
          </span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/store1.png"
        alt="Store Management Dashboard"
      />
      <WorkImage src="/images/works/store2.png" alt="Store Management Orders" />
      <WorkImage
        src="/images/works/store3.png"
        alt="Store Management Products"
      />
      <WorkImage
        src="/images/works/store4.png"
        alt="Store Management Advertising Dashboard"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
