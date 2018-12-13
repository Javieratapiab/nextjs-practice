import Layout from '../components/MyLayout.js'
import Link from 'next/link'

/** Clean URLs with Route Masking
Here, we are going to use a unique feature of Next.js called route masking. Basically, it will show a different URL on the browser than the actual URL that your app sees.
*/
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
