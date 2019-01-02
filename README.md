# PhotoQuery

Allows users to search for images from https://unsplash.com/.

Requirements:

- [x] The results are updated live as the user type into the search box
- [x] Each image display some information when hover:

  - [x] Link to author page
  - [x] A button to save the image to the user’s favorite page
    - [x] When click, show a pop up for the user to choose which list to add the image to. If there’s no list, allow the user to create a new list

- [x] Display all favorite lists with correct images in each list
- [x] Edit favorite list title & description
- [x] Click on each favorite image should trigger the download

TODO:

- [] Display loader while fetching results
- [] Display no results message
- [] Handle API requests errors
- [] Add validation to favorite form
- [] Fix/implement unit tests
- [] Fix/implement e2e tests
- [] Allow for easier configuration of environment variables. Follow discussion at https://github.com/angular/angular-cli/issues/4318
  - [] Try https://github.com/GaryB432/venv
  - [] Try https://github.com/kopz9999/ng-node-environment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Configuration

Create an Unsplash application https://unsplash.com/oauth/applications.

Replace `UNSPLASH_ACCESS_KEY` with your Unsplash access key in `src/environments/environment.*`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
