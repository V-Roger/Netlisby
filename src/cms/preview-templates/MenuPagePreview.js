import React from 'react'
import PropTypes from 'prop-types'
import { MenuPageTemplate } from '../../templates/menu-page'

const MenuPagePreview = ({ entry, widgetFor }) => (
  <MenuPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MenuPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MenuPagePreview
