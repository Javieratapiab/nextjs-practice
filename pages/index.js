import Layout from '../components/MyLayout.js'
// This is Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  </div>
)

export default Index

/**
 * This is another way to use a layout component
 */
// import withLayout from '../lib/layout'

// const Page = () => (
//   <p>This is the about page</p>
// )

// export default withLayout(Page)