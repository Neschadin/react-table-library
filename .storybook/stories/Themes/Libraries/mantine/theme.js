import * as React from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/themes/mantine';

import { DocumentationSee } from '../../../documentation';
import { nodes } from '../../../data';

const key = 'Theme';

const Component = () => {
  const data = { nodes };

  const mantineTheme = getTheme(DEFAULT_OPTIONS);
  const customTheme = {
    BaseCell: `
      border-right: 1px solid transparent;
    `,
    Row: `
      &:nth-of-type(odd) {
        .td:nth-of-type(even) {
          background-color: #dddddd;
        }

        .td:nth-of-type(odd) {
          background-color: #fafafa;
        }
      }

      &:nth-of-type(even) {
        .td:nth-of-type(odd) {
          background-color: #dddddd;
        }

        .td:nth-of-type(even) {
          background-color: #fafafa;
        }
      }
    `,
  };
  const theme = useTheme([mantineTheme, customTheme]);

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  return (
    <>
      <CompactTable columns={COLUMNS} data={data} theme={theme} />

      <br />
      <DocumentationSee anchor={'Features/' + key} />
    </>
  );
};

const code = `
import * as React from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {
  DEFAULT_OPTIONS,
  getTheme,
} from '@table-library/react-table-library/themes/mantine';

import { DocumentationSee } from '../../../documentation';
import { nodes } from '../../../data';

const key = 'Theme';

const Component = () => {
  const data = { nodes };

  const mantineTheme = getTheme(DEFAULT_OPTIONS);
  const customTheme = {
    BaseCell: \`
      border-right: 1px solid transparent;
    \`,
    Row: \`
      &:nth-of-type(odd) {
        .td:nth-of-type(even) {
          background-color: #dddddd;
        }

        .td:nth-of-type(odd) {
          background-color: #fafafa;
        }
      }

      &:nth-of-type(even) {
        .td:nth-of-type(odd) {
          background-color: #dddddd;
        }

        .td:nth-of-type(even) {
          background-color: #fafafa;
        }
      }
    \`,
  };
  const theme = useTheme([mantineTheme, customTheme]);

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  return (
    <>
      <CompactTable columns={COLUMNS} data={data} theme={theme} />

      <br />
      <DocumentationSee anchor={'Features/' + key} />
    </>
  );
};
`;

export { key, Component, code };
