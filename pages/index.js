import React from 'react'
import sortBy from 'lodash/sortBy'
import access from 'safe-access'
import include from 'underscore.string/include'
import Helmet from 'react-helmet'
import { config } from 'config'
import Bio from 'components/Bio'
import PageLink from 'components/PageLink'

const BlogIndex = ({ route }) => {
  const sortedPages = sortBy(route.pages, (page) =>
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
        {sortedPages.filter(isMarkdownPost).map((page) =>
          <PageLink key={page.path} page={page} />
        )}
      </ul>
    </div>
  )
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
