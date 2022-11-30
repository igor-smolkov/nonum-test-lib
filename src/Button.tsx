import React, { FC, PropsWithChildren } from "react";

type Props = {
  color: 'purple' | 'red' | 'gray';
}

const Button: FC<PropsWithChildren<Props>> = ({ color, children }) => {
  return <button style={{color}}>{children}</button>
}

export { Button };
