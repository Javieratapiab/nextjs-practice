import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Page = (props) => (
  <Layout>
    <Content />
  </Layout>
)
export default Page

/** Here's what's happening in the above code.
We import and use the "withRouter" function from "next/router" this will inject the Next.js router as a property. In this case, we are using the router's “query” object, which has the query string params. Therefore, we get the title with props.router.query.title. */