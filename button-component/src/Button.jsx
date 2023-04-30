import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin-block: 0.75em;
  font-size: 0.85rem;
  font-family: "Ubuntu Mono", sans-serif;

  ${({ state }) => {
    switch (state) {
      case "hover":
      case "focus":
        return `
          color: #828282;
        `;
      default:
        return `
          color: #333333;
        `;
    }
  }};
`;

const StyledButton = styled.button`
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: #e0e0e0;
  color: #3f3f3f;
  box-shadow: 0px 2px 3px 0px #33333333;
  font-weight: 500;
  font-family: "Noto Sans Display", sans-serif;

  padding: ${({ size }) => {
      let padding = 0.5;
      if (size === "sm") padding = 0.25;
      else if (size === "md") padding = 0.5;
      else if (size === "lg") padding = 0.75;
      return `${padding}em ${2 * padding}em;`;
    }}
    ${({ state }) => {
      switch (state) {
        case "hover":
        case "focus":
          return `
          background-color: #aeaeae;
        `;
      }
    }};
`;

const StyledButtonOutline = styled(StyledButton)`
  border-color: currentColor;
  color: #3d5afe;
  box-shadow: none;
  background-color: ${({ state }) =>
    ["hover", "focus"].includes(state) ? "#2962FF1A" : "transparent"};
`;

const StyledButtonText = styled(StyledButton)`
  color: #3d5afe;
  box-shadow: none;

  ${({ state }) =>
    ["hover", "focus"].includes(state)
      ? `background-color: #2962FF1A;`
      : `
      padding-inline: 0;
      background-color: transparent;`}
`;

const StyledButtonDisableShadow = styled(StyledButton)`
  background-color: #3d5afe;
  color: #fff;
`;

const StyledButtonDisabled = styled(StyledButton)`
  color: #9e9e9e;
  box-shadow: none;

  background-color: ${({ state }) => state === "disabled" && "transparent"};
`;

const StyledButtonWithIcon = styled(StyledButton)`
  display: flex;
  align-items: center;
  gap: 0.5em;
  background-color: #3d5afe;
  color: #fff;

  &::${({ iconPosition }) => iconPosition} {
    content: url(${({ icon }) => icon});
    width: 1em;
  }
`;

const StyledButtonPrimary = styled(StyledButton)`
  color: #fff;

  background-color: ${({ state }) =>
    ["hover", "focus"].includes(state) ? "#0039CB" : "#3d5afe"};
`;

const StyledButtonSecondary = styled(StyledButton)`
  color: #fff;

  background-color: ${({ state }) =>
    ["hover", "focus"].includes(state) ? "#1C313A" : "#455a64"};
`;

const StyledButtonDanger = styled(StyledButton)`
  color: #fff;

  background-color: ${({ state }) =>
    ["hover", "focus"].includes(state) ? "#9A0007" : "#d32f2f"};
`;

export default function Button({
  labelStart,
  state,
  variant = "default",
  size,
  icon,
  children,
  ...props
}) {
  const buttons = {
    default: <StyledButton state={state}>{children}</StyledButton>,
    outline: (
      <StyledButtonOutline state={state}>{children}</StyledButtonOutline>
    ),
    text: <StyledButtonText state={state}>{children}</StyledButtonText>,
    disableShadow: (
      <StyledButtonDisableShadow state={state}>
        {children}
      </StyledButtonDisableShadow>
    ),
    disabled: (
      <StyledButtonDisabled state={state}>{children}</StyledButtonDisabled>
    ),
    startIcon: (
      <StyledButtonWithIcon state={state} iconPosition="before" icon={icon}>
        {children}
      </StyledButtonWithIcon>
    ),
    endIcon: (
      <StyledButtonWithIcon state={state} iconPosition="after" icon={icon}>
        {children}
      </StyledButtonWithIcon>
    ),
    primary: (
      <StyledButtonPrimary state={state} size={size}>
        {children}
      </StyledButtonPrimary>
    ),
    secondary: (
      <StyledButtonSecondary state={state}>{children}</StyledButtonSecondary>
    ),
    danger: <StyledButtonDanger state={state}>{children}</StyledButtonDanger>,
  };

  return (
    <div>
      {labelStart && <StyledLabel state={state}>{labelStart}</StyledLabel>}
      {buttons[variant]}
    </div>
  );
}
