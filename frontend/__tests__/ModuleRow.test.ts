/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import ModuleRow from '../src/lib/components/ModuleRow.svelte';

describe('Test ModuleRow renders correctly', () => {
  test('Module name renders correctly', () => {
    const { getByText } = render(ModuleRow, {
      props: {
        moduleName: 'Module 1',
        dueDate: '12/05/22',
        progress: 70,
        description: 'An example module'
      }
    });

    expect(getByText('Module 1')).toBeInTheDocument();
  });
});
