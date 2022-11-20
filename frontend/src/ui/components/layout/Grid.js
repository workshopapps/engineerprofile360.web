import styled from "styled-components"
import { breakpoints } from "../../constants"

const StyledGrid = styled.div`
  display: grid;
  height: ${({ isStreched }) => (isStreched ? "100%" : "auto")};
  grid-template-columns: repeat(${({ span }) => span}, 1fr);
  grid-gap: ${({ gap }) => gap};
  transition: all 500ms;

  ${breakpoints.xxl} {
    grid-template-columns: ${({ xxl }) => xxl && `repeat(${xxl},1fr)`};
  }

  ${breakpoints.xl} {
    grid-template-columns: ${({ xl }) => xl && `repeat(${xl},1fr)`};
  }

  ${breakpoints.lg} {
    grid-template-columns: ${({ lg }) => lg && `repeat(${lg},1fr)`};
  }

  ${breakpoints.md} {
    grid-template-columns: ${({ md }) => md && `repeat(${md},1fr)`};
  }

  ${breakpoints.sm} {
    grid-template-columns: ${({ sm }) => sm && `repeat(${sm},1fr)`};
  }
`

const Grid = ({
  gap = "20px",
  lg = 12,
  md,
  sm,
  xl,
  xxl,
  className = "",
  isStreched = false,
  span = 12,
  style,
  children,
}) => {
  return (
    <StyledGrid
      className={`grid ${className}`}
      isStreched={isStreched}
      span={span}
      gap={gap}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      style={{ ...style }}
    >
      {children}
    </StyledGrid>
  )
}

function getDisplay(size) {
  if (size == null || undefined) return
  return {
    "display": size === 0 ? "none" : "block",
    "grid-column": (size !== null || undefined) && `span ${size}`,
  }
}

const StyledGridItem = styled.div`
  ${({ span }) => getDisplay(span)};
  transition: all 500ms;

  ${breakpoints.xxl} {
    ${({ xxl }) => getDisplay(xxl)};
  }

  ${breakpoints.xl} {
    ${({ xl }) => getDisplay(xl)};
  }

  ${breakpoints.lg} {
    ${({ lg }) => getDisplay(lg)};
  }

  ${breakpoints.md} {
    ${({ md }) => getDisplay(md)};
  }

  ${breakpoints.sm} {
    ${({ sm }) => getDisplay(sm)};
  }
`

export const GridItem = ({
  children,
  span,
  xxl,
  sm,
  md,
  lg,
  xl,
  className = "",
  ...props
}) => {
  return (
    <StyledGridItem
      className={`${className} grid-item`}
      span={span}
      xxl={xxl}
      xl={xl}
      sm={sm}
      md={md}
      lg={lg}
      {...props}
    >
      {children}
    </StyledGridItem>
  )
}

export default Grid
