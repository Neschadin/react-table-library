import * as React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { ThemeContext } from '@table-library/react-table-library/common/context/Theme';
import { BodyProps } from '@table-library/react-table-library/types/table';

export const Body: React.FC<BodyProps> = ({ children, ...rest }: BodyProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      css={css`
        ${theme?.Body}
      `}
      data-table-library_body=""
      className="tbody"
      {...rest}
    >
      {children}
    </div>
  );
};
