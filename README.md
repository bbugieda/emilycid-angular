# EmilyCidAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Deploying to Github Pages (posting this information because it wasn't super clear how to do this)

On the `master` branch, run `ng add angular-cli-ghpages`, which will create a branch called `gh-pages` that contains the code that has been compiled into javascript so it can run in the browser.

Edit `angular.json` in the section at the bottom of the file that has `deploy` information and add options so that it matches this style:

```
"deploy": {
          "builder": "angular-cli-ghpages:deploy",
          "options": {
            "baseHref": "https://bbugieda.github.io/{PROJECT_NAME}/",
            "repo": "https://github.com/bbugieda/{PROJECT_NAME}.git",
            "name": "Brian Bugieda",
            "email": "brian.bugieda@gmail.com"
          }
```

where `{PROJECT_NAME}` is the name of the github repository you are using for the project.

After this is done, save and commit your changes and `push` to master. 

Run `ng deploy` to deploy changes to `gh-pages` branch and your site should be active at the `baseHref` you specified above.
