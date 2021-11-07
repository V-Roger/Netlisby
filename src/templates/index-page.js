import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import Layout from '../components/Layout'
import Features from '../components/Features'
import CarouselSlide from '../components/Slide'

export const IndexPageTemplate = ({
  title,
  description,
  carousel
}) => (
  <main>
    <div
    className="wrapper"
  >
    <Carousel
      className="full-width-image-container" 
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      interval={4000}
    >
      {
        carousel && carousel.map(({ slide }) => 
          <CarouselSlide title={slide.heading} subheading={slide.subheading} imageSrc={!!slide.image.childImageSharp ? slide.image.childImageSharp.fluid.src : slide.image} />
        )
      }
    </Carousel>
    </div>
    <section className="has-background-white section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{description}</h3>
                  </div>
                </div>
                {/* <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {title}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div> */}
                {/* <Features gridItems={intro.blurbs} /> */}
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                {/* <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        carousel={frontmatter.carousel}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        carousel {
          slide {
            heading
            subheading
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        description
      }
    }
  }
`
