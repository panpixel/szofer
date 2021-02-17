import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  greenLeaf: {
    primary: colors.grey.darken4, // primary main
    primarylight: colors.grey.base, // primary light
    primarydark: colors.shades.black, // primary dark
    secondary: colors.grey.darken1, // secondary main
    secondarylight: colors.grey.lighten2, // secondary light
    secondarydark: colors.grey.darken3, // secondary dark
    anchor: colors.grey.base // link
  }
}

export const theme = {
  ...palette.greenLeaf
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
