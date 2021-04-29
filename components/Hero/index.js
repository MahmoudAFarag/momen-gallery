import Layout from "./Layout"
import Title from "./Title"
import Slogan from "./Slogan"
import FeaturedButton from "./FeaturedButton"

export default function index() {
  const scrollToFeatured = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    })
  }

  return (
    <Layout>
      <Title />
      <Slogan />
      <FeaturedButton scrollToFeatured={scrollToFeatured} />
    </Layout>
  )
}
