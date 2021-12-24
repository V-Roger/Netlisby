import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import Layout from '../components/Layout'
import CarouselSlide from '../components/Slide'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  title,
  carousel,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
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
            <CarouselSlide key={slide.heading} title={slide.heading} imageSrc={!!slide.image.childImageSharp ? slide.image.childImageSharp.fluid.src : slide.image} />
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
                  <h1 className="title calligraphed is-size-2 mb-4">{title}</h1>
                  <PageContent className="content" content={content} />
                  <div className="columns">
                    <div className="column has-text-centered">
                      <AniLink cover bg="white" duration={0.5} className="btn mx-4 mt-4" to="/menu">
                        MENU
                      </AniLink>
                      <a href="tel:0479063078" alt="Réservations" className="btn mt-4">
                        Réservations au 04 79 06 30 78
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  carousel: PropTypes.arrayOf(PropTypes.shape({
    slide: PropTypes.shape({
      heading: PropTypes.string,
      subhedaing: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  }))
}

const IndexPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <IndexPageTemplate
        title={page.frontmatter.title}
        carousel={page.frontmatter.carousel}
        content={page.html}
        contentComponent={HTMLContent}
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
      html
      frontmatter {
        title
        carousel {
          slide {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
