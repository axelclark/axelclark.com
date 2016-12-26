import React from 'react'
import { Link } from 'react-router'
import {Card, CardTitle} from 'material-ui/Card';
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access' 
  
const PageLink = ({ page }) => {
  const title = access(page, 'data.title') || page.path
  return(
    <Link to={prefixLink(page.path)} style={{textDecoration: 'none'}}>
      <Card
        style={{
          marginBottom: rhythm(1/4),
        }} >
        <CardTitle title={title} />
      </Card>
    </Link>
  )
}

PageLink.propTypes = {
  page: React.PropTypes.object,
}

export default PageLink
