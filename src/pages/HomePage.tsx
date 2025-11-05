
import HomeAbout from "../components/HomeAbout"
import HomeBlog from "../components/HomeBlog"
import HomeCrew from "../components/HomeCrew"
import HomeStats from "../components/HomeStats"
import HomeFeatures from "../components/HomeFeatures"
import HomeHero from "../components/HomeHero"
import HomeTestimonial from "../components/HomeTestimonial"
import HomeLeadership from "../components/HomeLeadership"
import HomeFooter from "../components/HomeFooter"


const HomePage = () => {
  return (
    <>
    <HomeHero/>
    <HomeStats/>
    <HomeFeatures/>
    <HomeAbout/>
    <HomeCrew/>
    <HomeLeadership/>
    <HomeBlog/>
    <HomeTestimonial/>
    <HomeFooter/>
    </>
  )
}

export default HomePage