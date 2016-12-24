import React from 'react'
import { Link } from 'react-router'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access' 
  
const PageLink = ({ page }) => {
  const title = access(page, 'data.title') || page.path
  return(
    <li
      key={page.path}
      style={{
        marginBottom: rhythm(1/4),
      }}
    >
      <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
        {title}
      </Link>
    </li>
  )
}

PageLink.propTypes = {
  page: React.PropTypes.object,
}

export default PageLink
