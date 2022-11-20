const theme = {
  palette: {
    divider: "#EDEBE9",
    border: {
      default: "#8A8886",
      hover: "#323130",
    },
    main: {
      primary: {
        primary: "#141AE9",
        lighterAlt: "#EFF6FC",
        lighter: "#DEECF9",
        light: "#C7E0F4",
        // contact: "#2667FF",
      },
      tertiary: {
        tertiary: "#3D94DF",
        darkAlt: "#1E78C6",
        dark: "#1166A6",
        darker: "#0D4E7E",
      },
    },
    status: {
      error: {
        background: "#FDE7E9",
        color: "#A80000",
      },
      success: {
        background: "#DFF6DD",
        color: "#107C10",
      },
      warning: {
        background: "#FFF4CE",
        color: "#797775",
      },
      severeWorking: {
        background: "#FED9CC",
        color: "#D83B01",
      },
    },
    overlay: {
      light: "rgba(255, 255, 255, 0.4)",
      dark: "rgba(0, 0, 0, 0.4)",
    },
    grey: {
      white: "#FFFFFF",
      shades: {
        10: "#FAF9F8",
        20: "#F3F2F1",
        30: "#EDEBE9",
        60: "#C8C6C4",
        90: "#A19F9D",
        130: "#605E5C",
        160: "#323130",
        190: "#201F1E",
      },
    },
  },

  spacing: (num) => {
    return `${8 * num}px`
  },
}

export default theme
