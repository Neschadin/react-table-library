import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext, SelectContext, TreeContext } from '@context';

const BodyContainer = styled.div`
  ${({ css }) => css};
`;

const getCommonProps = child => ({
  id: child.props.item.id
});

const getSelectProps = (child, { selectState, onSelectById }) => ({
  isSelected: selectState.ids.includes(child.props.item.id),
  onSelectById
});

const getTreeProps = (child, { treeState, onTreeById }) => ({
  isTreeed: treeState.ids.includes(child.props.item.id),
  onTreeById
});

const Body = ({ children }) => {
  const theme = React.useContext(ThemeContext);
  const select = React.useContext(SelectContext);
  const tree = React.useContext(TreeContext);

  return (
    <BodyContainer css={theme?.Body}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          ...getCommonProps(child),
          ...getSelectProps(child, select),
          ...getTreeProps(child, tree)
        })
      )}
    </BodyContainer>
  );
};

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ])
};

export { Body };
