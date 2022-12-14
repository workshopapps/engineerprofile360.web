const Flex = ({
  tabIndex,
  children,
  ai = "",
  jc = "",
  stack = false,
  className,
  onClick,
  style,
  onBlur,
  id,
  isStretched,
  spacing,
  ...rest
}) => {
  return (
    <div
      id={id}
      {...rest}
      tabIndex={tabIndex}
      onClick={onClick}
      onBlur={onBlur}
      className={className}
      style={{
        display: "flex",
        flexDirection: stack ? "column" : "row",
        alignItems: ai,
        justifyContent: jc,
        // cursor: "pointer",
        height: isStretched ? "100%" : "auto",
        gap: spacing || "initial",

        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Flex
