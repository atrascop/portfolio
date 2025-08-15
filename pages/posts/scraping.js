import { Container, Badge, ListItem, UnorderedList } from '@chakra-ui/react'

import { Title } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        ⚡ From Manual to Magical: Automating Tasks with Google Apps Script
        <Badge>2025</Badge>
      </Title>

      <P>
        I recently automated a repetitive task using Google Apps Script — and
        the difference is night and day.
      </P>

      <Badge>Before :</Badge>
      <UnorderedList my={4}>
        <ListItem>Manually checking data in Google Sheets every day</ListItem>
        <ListItem>Copying it into another file</ListItem>
        <ListItem>
          Connect Sheets to external APIs for real-time data sync
        </ListItem>
        <ListItem>Sending updates through email</ListItem>
      </UnorderedList>

      <Badge>After :</Badge>
      <UnorderedList my={3}>
        <ListItem>✅ A simple Apps Script now runs automatically:</ListItem>
        <ListItem>Checks and processes new data in Sheets</ListItem>
        <ListItem>Updates linked files instantly</ListItem>
        <ListItem>
          Sends a neatly formatted email summary to the right people — all
          without me lifting a finger
        </ListItem>
      </UnorderedList>

      <P>
        This automation not only saves valuable time but also reduces errors,
        allowing me and my team to focus on higher-value tasks. If you’re still
        managing data manually in Google Sheets, I highly recommend exploring
        Apps Script and workflow automation — it’s a game changer!
      </P>
    </Container>
  </Layout>
)

export default Post
export { getServerSideProps } from '../../components/chakra'
