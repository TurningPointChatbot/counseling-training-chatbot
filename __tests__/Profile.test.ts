/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom';
 import { render } from '@testing-library/svelte';
 import Profile from '../src/lib/components/profile/profile.svelte';
 
 describe('Test Profile renders correctly', () => {
   test('full name renders correctly', () => {
     const { getByText } = render(Profile, {
       props: {
         fullname: 'John Smith',
         mobile: '0404 333 222',
         email: 'johnsmith@turningpoint.org.au',
         position: 'Junior Counsellor'
       }
     });
 
     expect(getByText('John Smith')).toBeInTheDocument();
   });
 
   test('mobile renders correctly', () => {
     const { getByText } = render(Profile, {
        props: {
            fullname: 'John Smith',
            mobile: '0404 333 222',
            email: 'johnsmith@turningpoint.org.au',
            position: 'Junior Counsellor'
        }
     });
 
     expect(getByText('0404 333 222')).toBeInTheDocument();
   });
   test('email renders correctly', () => {
     const { getByText } = render(Profile, {
        props: {
            fullname: 'John Smith',
            mobile: '0404 333 222',
            email: 'johnsmith@turningpoint.org.au',
            position: 'Junior Counsellor'
        }
     });
 
     expect(getByText('johnsmith@turningpoint.org.au')).toBeInTheDocument();
   });
   test('position renders correctly', () => {
     const { getByText } = render(Profile, {
        props: {
            fullname: 'John Smith',
            mobile: '0404 333 222',
            email: 'johnsmith@turningpoint.org.au',
            position: 'Junior Counsellor'
        }
     });
 
     expect(getByText('Junior Counsellor')).toBeInTheDocument();
   });
 });
 