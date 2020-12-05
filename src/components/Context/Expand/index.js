import * as React from 'react';
import PropTypes from 'prop-types';

import { TableContext } from '../Table';

const EXPAND_BY_ID = 'EXPAND_BY_ID';
const EXPAND_ALL = 'EXPAND_ALL';

const expandReducer = (state, action) => {
  switch (action.type) {
    case EXPAND_BY_ID: {
      const needsUnexpand = state.ids.includes(action.payload.id);

      return needsUnexpand
        ? {
            ...state,
            ids: state.ids.filter(idx => idx !== action.payload.id)
          }
        : {
            ...state,
            ids: state.ids.concat(action.payload.id)
          };
    }
    case EXPAND_ALL: {
      const needsUnexpand =
        action.payload.ids.length === state.ids.length;

      return needsUnexpand
        ? {
            ...state,
            ids: []
          }
        : {
            ...state,
            ids: action.payload.ids
          };
    }
    default:
      throw new Error();
  }
};

const ExpandContext = React.createContext({});

const DEFAULT_EXPAND = {
  ids: []
};

const ExpandProvider = ({
  defaultExpand = DEFAULT_EXPAND,
  children
}) => {
  const { list } = React.useContext(TableContext);

  const [expandState, expandStateDispatcher] = React.useReducer(
    expandReducer,
    defaultExpand
  );

  const onExpandById = React.useCallback(
    id =>
      expandStateDispatcher({ type: EXPAND_BY_ID, payload: { id } }),
    []
  );

  const onExpandAll = React.useCallback(
    () =>
      expandStateDispatcher({
        type: EXPAND_ALL,
        payload: { ids: list.map(item => item.id) }
      }),
    [list]
  );

  const allExpanded =
    expandState.ids.sort().join(',') ===
    list
      .map(item => item.id)
      .sort()
      .join(',');

  const noneExpanded = !expandState.ids.length;

  return (
    <ExpandContext.Provider
      value={{
        expandState: {
          ...expandState,
          allExpanded,
          noneExpanded
        },
        onExpandById,
        onExpandAll
      }}
    >
      {children}
    </ExpandContext.Provider>
  );
};

ExpandProvider.propTypes = {
  defaultExpand: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.string)
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ])
};

export { ExpandContext, ExpandProvider };
