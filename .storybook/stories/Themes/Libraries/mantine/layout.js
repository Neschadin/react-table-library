import * as React from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {
  DEFAULT_OPTIONS,
  getMantineTheme,
} from '@table-library/react-table-library/themes/mantine';

import { DocumentationSee } from '../../../documentation';
import { nodes } from '../../../data';

const key = 'Layout';

const Component = () => {
  const data = { nodes };

  const mantineTheme = getMantineTheme(DEFAULT_OPTIONS);
  const customTheme = useTheme({
    BaseCell: `
      &:nth-child(1) {
        min-width: 35%;
        width: 35%;
      }

      &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        min-width: 15%;
        width: 15%;
      }

      &:nth-child(5) {
        min-width: 20%;
        width: 20%;
      }
    `,
  });
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
      <CompactTable columns={COLUMNS} data={data} theme={theme} layout={{ custom: true }} />

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
  getMantineTheme,
} from '@table-library/react-table-library/themes/mantine';

import { DocumentationSee } from '../../../documentation';
import { nodes } from '../../../data';

const key = 'Layout';

const Component = () => {
  const data = { nodes };

  const mantineTheme = getMantineTheme(DEFAULT_OPTIONS);
  const customTheme = useTheme({
    BaseCell: \`
      &:nth-child(1) {
        min-width: 35%;
        width: 35%;
      }

      &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        min-width: 15%;
        width: 15%;
      }

      &:nth-child(5) {
        min-width: 20%;
        width: 20%;
      }
    \`,
  });
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
      <CompactTable columns={COLUMNS} data={data} theme={theme} layout={{ custom: true }} />

      <br />
      <DocumentationSee anchor={'Features/' + key} />
    </>
  );
};
`;

export { key, Component, code };
