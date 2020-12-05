import { css } from 'styled-components';
import cs from 'classnames';

import { isRowClick } from '@util/isRowClick';
import * as COLORS from '@colors';

import { SELECT_TYPES } from './config';

const useSelectRow = ({
  isSelected,
  onSelectById,
  selectType = SELECT_TYPES.RowClick
}) => {
  const theme = css`
    &.selected-row {
      color: ${COLORS.FONT_PRIMARY};
      font-weight: bold;

      background-color: ${COLORS.ROW_SELECTED};
    }

    &.selectable-row {
      cursor: pointer;
    }
  `;

  const className = cs('row-select', {
    'selectable-row': selectType === SELECT_TYPES.RowClick,
    'selected-row': isSelected
  });

  const onClick = (tableItem, event) => {
    if (!isRowClick(event)) return;

    if (selectType === SELECT_TYPES.RowClick) {
      onSelectById(tableItem.id);
    }
  };

  return {
    theme,
    className,
    onClick
  };
};

export { useSelectRow };
