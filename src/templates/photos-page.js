import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Masonry from 'react-masonry-css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PhotosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { image, title, galleryImages: gallery } = frontmatter;

  const [state, setState] = useState({
    selectedImage: undefined,
  });

  return (
    <Layout>
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
                  '#630611 0.5rem 0.5rem 0px, #8C0303 -0.5rem -0.5rem 0px',
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
                <Masonry
                  breakpointCols={{
                    default: 4,
                    1100: 3,
                    700: 2,
                  }}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {gallery.map(image => 
                      <img
                        key={image.publicURL} 
                        src={image.publicURL} onClick={() => setState({ selectedImage: image })}
                        style={{
                          borderRadius: '4px'
                        }}
                      />
                  )}        
                </Masonry>
                {state.selectedImage && (
                  <Lightbox 
                    mainSrc={state.selectedImage.publicURL}
                    onCloseRequest={() => setState({ selectedImage: null })}
                  />
                )}
              </div>
            </div>
          </section>
        </div>
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
        galleryImages {
          publicURL
        }
      }
    }
  }
`
