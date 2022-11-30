import React, { FC, PropsWithChildren } from "react";

type Props = {
  color: 'purple' | 'green';
}

const Button: FC<PropsWithChildren<Props>> = ({ color, children }) => {
  return <button style={{color}}>{children}</button>
}

export { Button };
