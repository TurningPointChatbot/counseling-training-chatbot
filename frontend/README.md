# Frontend Application

This is the frontend part of the Turning Point learning program.
It is built using [SvelteKit](https://kit.svelte.dev/).

## Installing the Application Locally

To install the application locally, run the following commands:

1. Clone the repo: `git clone https://github.com/TurningPointChatbot/counseling-training-chatbot.git`
2. Move into the counseling-training-chatbot directory: `cd counseling-training-chatbot`
3. Move into the frontend directory: `cd frontend`
4. Install all dependencies: `npm install`

## Running the Application Locally

You can run the application locally by navigating to the frontend directory and using the command `npm run dev`.
This will serve the application on your computer at [http://localhost:3000/](http://localhost:3000/).

Any changes you make to files while the dev server is running will be automatically applied, so no need to restart the server each time.

## Other Useful Scripts

There are several other scripts configured:

### Testing

- `npm run test` will run the test suite on the application.np
- `npm run test:watch` will run the test suite in watch mode. Whenever you make changes to the code, the test suite will be rerun automatically.
- `npm run test:coverage` will run the test suite, and will also perform coverage testing. A coverage report will be displayed in the terminal, and will also be available in the coverage directory.

### Building

- `npm run build` will create a production build located in the .svelte-kit/output/ directory.
- `npm run preview` will then serve the above created build locally, again at [http://localhost:3000/](http://localhost:3000/).

### Formatting/Linting

- `npm run check` checks that the application has no errors related to typescript, and will provide errors, warnings, and hints.
- `npm run check:watch` checks for typescript errors in watch mode. Whenever you make changes to the code, the command will be run again.
- `npm run lint` uses eslint to check for any potential static errors in the code (i.e. typos, missing import statements, etc).
- `npm run format` uses Prettier to format all code in the code base to the configured standard.

### Updating Typescript Types from Database

- `npm run update-types` automatically generates typescript types from the database schema on supabase. Use this to ensure you are up to date with the latest version of the database schema locally.
