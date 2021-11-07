import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-css'

export const PhotosPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
  gallery,
}) => (
  <div className="content">
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom`,
        backgroundAttachment: `fixed`,
      }}
    >
      <h2
        className="calligraphed has-text-weight-bold is-size-1"
        style={{
          boxShadow:
          '#8C0303 0.5rem 0.5rem 0px, #F23322 -0.5rem -0.5rem 0px',
          backgroundColor: '#400101',
          color: 'white',
          lineHeight: '1',
          padding: '0.8em',
          borderRadius: '2px'
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient" style={{ zIndex: 5 }}>
      <div className="container">
        <div className="section">
          {/* <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div> */}
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {gallery.map(image => 
                <img src={image.publicURL} />
            )}        
          </Masonry>
        </div>
      </div>
    </section>
  </div>
)

PhotosPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
  gallery: PropTypes.array,
}

const PhotosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PhotosPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        fullImage={frontmatter.full_image}
        gallery={frontmatter.galleryImages}
      />
    </Layout>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PhotosPage

export const pageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          heading
          description
        }
        main {
          heading
          description
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        galleryImages {
          publicURL
        }
      }
    }
  }
`
