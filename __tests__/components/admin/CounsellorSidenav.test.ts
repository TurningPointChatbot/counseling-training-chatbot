/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { CounsellorRoutes } from '../../../src/lib/constants';
import CounsellorSidenav from '../../../src/lib/components/sidenav/CounsellorSidenav.svelte';

describe('Test counsellor side navigation renders correctly', () => {
  test('Counsellor side navigation options render correctly', () => {
    const { getByText } = render(CounsellorSidenav);

    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Training Modules')).toBeInTheDocument();
  });

  test('Counsellor side navigation options are linked to the correct paths', () => {
    const { getByText } = render(CounsellorSidenav);

    expect(getByText('Dashboard').getAttribute('href')).toBe(
      CounsellorRoutes.Dashboard
    );
    expect(getByText('Training Modules').getAttribute('href')).toBe(
      CounsellorRoutes.TrainingModules
    );
  });
});
