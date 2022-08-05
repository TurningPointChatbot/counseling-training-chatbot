/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Counsellors from '../src/routes/admin/counsellors.svelte';

describe('Test counsellors page renders correctly', () => {
    test('Heading is spelt out correctly for counsellors', () => {
      render(Counsellors);
      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Counsellors');
    });
  });