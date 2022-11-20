const theme = {
  palette: {
    divider: "#EDEBE9",
    border: {
      default: "#8A8886",
      hover: "#323130"
    },
    main: {
      primary: {
        primary: "",
        lighterAlt: "",
        lighter: "",
        light: ""
      },
      tertiary: {
        tertiary: "",
        darkAlt: "",
        darker: "",
        light: ""
      }
    },
    status: {
      error: {
        background: "",
        color: ""
      },
      success: {
        background: "",
        color: ""
      },
      warning: {
        background: "",
        color: ""
      },
      severeWorking: {
        background: "",
        color: ""
      }
    },
    overlay: {
      light: "rgba(255, 255, 255, 0.4)",
      dark: "rgba(0, 0, 0, 0.4)"
    },
    grey: {
      white: "#FFFFFF",
      shades: {
        10: "",
        20: "",
        30: "",
        60: "",
        90: "",
        130: "",
        160: "",
        190: ""
      }
    }
  },

  spacing: (num) => {
    return `${8 * num}px`
  },
  
}

export default theme
