import React from "react";

import { ContainerButton } from "./styles";

interface ButtonProps {
  label: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonComponent({ label, ...rest }, ref) {
    return (
      <ContainerButton {...rest} ref={ref}>
        <p>{label}</p>
      </ContainerButton>
    );
  }
);
