/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { AdminRoutes } from '../../../src/lib/constants';
import AdminSidenav from '../../../src/lib/components/sidenav/AdminSidenav.svelte';

describe('Test administrator side navigation renders correctly', () => {
  test('Administrator side navigation options render correctly', () => {
    const { getByText } = render(AdminSidenav);

    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Counsellors')).toBeInTheDocument();
    expect(getByText('Training Modules')).toBeInTheDocument();
  });

  test('Administrator side navigation options are linked to the correct paths', () => {
    const { getByText } = render(AdminSidenav);

    expect(getByText('Dashboard').getAttribute('href')).toBe(
      AdminRoutes.Dashboard
    );
    expect(getByText('Counsellors').getAttribute('href')).toBe(
      AdminRoutes.Counsellors
    );
    expect(getByText('Training Modules').getAttribute('href')).toBe(
      AdminRoutes.Modules
    );
  });
});
