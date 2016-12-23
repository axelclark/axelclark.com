import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'

const SiteHeader = ({ scaleValue, marginBottomValue }) => (
  <h1
    style={{
      ...scale(scaleValue),
      marginBottom: rhythm(marginBottomValue),
      marginTop: 0,
    }}
  >
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
      to={prefixLink('/')}
    >
      {config.blogTitle}
    </Link>
  </h1>
)

Template.propTypes = {
  scaleValue: React.PropTypes.number,
  marginBottomValue: React.PropTypes.number
}

export default SiteHeader
