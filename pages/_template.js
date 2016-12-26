import React from 'react'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import SiteHeader from '../components/SiteHeader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blueGrey500 } from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// import {
//   cyan500, cyan700,
//   pinkA200,
//   grey100, grey300, grey400, grey500,
//   white, darkBlack, fullBlack,
// } from '../colors';
// import {fade} from '../../utils/colorManipulator';
// import spacing from '../spacing';

// export default {
//   spacing: spacing,
//   fontFamily: 'Roboto, sans-serif',
//   palette: {
//     primary1Color: cyan500,
//     primary2Color: cyan700,
//     primary3Color: grey400,
//     accent1Color: pinkA200,
//     accent2Color: grey100,
//     accent3Color: grey500,
//     textColor: darkBlack,
//     alternateTextColor: white,
//     canvasColor: white,
//     borderColor: grey300,
//     disabledColor: fade(darkBlack, 0.3),
//     pickerHeaderColor: cyan500,
//     clockCircleColor: fade(darkBlack, 0.07),
//     shadowColor: fullBlack,
//   },
// };

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500
  }
});

const Template = ({ children }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
        }}
      >
        <SiteHeader/>
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
