import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.overrideThemeStyles = ({ }, options) => ({
  'a': {
    color: '#01448C'
  }
})

const typography = new Typography(sutroTheme)


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
