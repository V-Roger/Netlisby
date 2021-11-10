import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import qrCode from '../../static/img/grattalu-pdf-code.svg'

export const MenuPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-2">
            <a href="https://hopeful-yonath-0869ae.netlify.app/img/neo40-le-grattalu-2017.pdf" alt="le menu du Grattalu"><img src={qrCode} alt="menu" /></a>
          </div>
          <div className="column is-10">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
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
