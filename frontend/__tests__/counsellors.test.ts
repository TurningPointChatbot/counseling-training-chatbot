/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
//import Counsellors from '../src/routes/admin/counsellors.svelte';
import FilterableList from '../src/lib/components/FilterableList.svelte';

describe('Test counsellors page renders correctly', () => {
    /*test('Heading is spelt out correctly for counsellors', () => {
      render(Counsellors);
      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Counsellors');
    });

    test('Filterable list appears on counsellors page', () => {
      const {getByAltText} = render(Counsellors);
      expect(getByAltText('Sort A-Z')).toBeInTheDocument();
    });*/

    test('Filterable list has list of counsellors', () => {
      // This is just a test for list of counsellors to show
      let listOfCounsellors = [];
      listOfCounsellors.push({
        title: 'Jim Hopper',
        description: 'Counsellor',
        image: 'https://picsum.photos/id/426/400/600.jpg',
        href: '/admin/employee-details/jim'
      });

      const {getByAltText, getByText} = render(FilterableList, {
        listData: listOfCounsellors,
        rectangleOrCircle: false
      });

      for (let i = 0; i < listOfCounsellors.length; i++) {
        expect(getByAltText(listOfCounsellors[i].title)).toBeInTheDocument();
        expect(getByText(listOfCounsellors[i].title)).toBeInTheDocument();
        expect(getByText(listOfCounsellors[i].description)).toBeInTheDocument();
      }

    });
  });