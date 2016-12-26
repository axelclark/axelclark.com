import React from 'react'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import SiteHeader from '../components/SiteHeader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Template = ({ location, children }) => {
  let header
  if (location.pathname === prefixLink('/')) {
    header = (
      <SiteHeader 
        scaleValue={1.5} 
        marginBottomValue={1.5}
      />
    )
  } else {
    header = (
      <SiteHeader 
        scaleValue={1} 
        marginBottomValue={1}
      />
    )
  }
  return (
    <MuiThemeProvider>
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
        }}
      >
        {header}
        {children}
      </Container>
    </MuiThemeProvider>
  )
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object
}

export default Template
