import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'

const SiteHeader = () => (
  <AppBar
    title={config.blogTitle}
    iconElementLeft={
      <IconButton>
        <Link to={prefixLink('/')}>
          <ActionHome color={'white'} />
        </Link>
      </IconButton>
    }
    style={{marginBottom: rhythm(1)}}
  />
)

SiteHeader.propTypes = {
  scaleValue: React.PropTypes.number,
  marginBottomValue: React.PropTypes.number
}

export default SiteHeader
