import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const MenuPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section wrapper">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-between is-align-items-center">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light mb-0">
                {title}
              </h2>
            </div>
            <div className="mt-4">
              <a href="/carte_le-grattalu_boissons_vins.pdf" target="_blank" alt="Nos boissons et vins" className="btn mr-4">
                Nos boissons et vins
              </a>
              <a href="/carte_le-grattalu.pdf" target="_blank" alt="Notre carte" className="btn">
                Notre carte
              </a>
            </div>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

MenuPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MenuPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MenuPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

MenuPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MenuPage

export const menuPageQuery = graphql`
  query MenuPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
