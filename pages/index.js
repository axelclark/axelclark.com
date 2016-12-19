import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import PageLink from 'components/PageLink'

class BlogIndex extends React.Component {
  render () {
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()

    const isMarkdownPost = (page) =>
        access(page, 'file.ext') === 'md' 
          && !include(page.path, '/404') 
          || access(page, 'data.date')

    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": config.description},
            {"name": "keywords", "content": config.keywords},
            {"name": "author", "content": config.authorName},
          ]}
        />
        <Bio />
        <ul>
          { sortedPages.filter(isMarkdownPost).map((page) =>
            <PageLink key={page.path} page={page} />) }
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
