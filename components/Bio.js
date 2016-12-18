import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>{config.authorName}</strong> who lives and works in Washington DC. He's currently learning Elixir/Phoenix and JavaScript/React/Redux.  You can contact or follow him on <a href="https://twitter.com/axelclark2">Twitter</a> or <a href="https://github.com/axelclark">GitHub</a>.
      </p>
    )
  }
}

export default Bio
