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
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow:
            '#06C4C7 0.5rem 0.5rem 0px, #28797A -0.5rem -0.5rem 0px',
          backgroundColor: '#05A8AA',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em',
          borderRadius: '6px'
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
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {/* <Features gridItems={intro.blurbs} /> */}
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                {/* <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div> */}
                </div>
              </div>
              {/* <Testimonials testimonials={testimonials} /> */}
              {/* <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} /> */}
            {/* </div> */}
          </div>
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
