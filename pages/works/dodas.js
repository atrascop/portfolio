import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Test <Badge>2024-</Badge>
      </Title>
      <P>TSET for test </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
