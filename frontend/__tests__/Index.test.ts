/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Index from '../src/routes/index.svelte';

describe('Test index renders correctly', () => {
  test('Welcome text is present', () => {
    const { getByText } = render(Index);

    expect(getByText('Welcome to SvelteKit')).toBeInTheDocument();
  });
});
