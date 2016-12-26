import React from 'react'
import AppBar from 'material-ui/AppBar'
import { config } from 'config'

const BlogAppBar = () => (
  <AppBar
    title={config.blogTitle}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
)

BlogAppBar.propTypes = {
}

export default BlogAppBar
