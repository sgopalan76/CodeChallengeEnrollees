# Some salient features
  - Angular URL for Front end application - http://localhost:4200/enrollees (Assuming Angular is running in a localhost)
  - The Server Endpoint - http://localhost:8080/enrollees (Assuming Server is running in a localhost)
  - Added pagination for the enrollee list (the pagination records are configurable per page)
  - Added a Delete button for future enhancement ,if a delete service does get implemented
  - A Search filter that allows to query on a record. The query will allow for Activation status search,
    any name search that one wants to pull up.
  - Details of a particular enrollee
  - Updating a particular enrollee (given that the Date of Birth and ID fields are readonly and cannot be edited)
    A Reset button that will clear the fields
    Field validation for Name,if empty
    Submit button is disabled if fields are blank on Form
  - At any point, user can navigate to the Enrollee list from the top menu bar (Enrollee list)
  - **💰BONUS CHALLENGE**💰: Also the Bonus challenge question has been fixed -
    It is a data issue with particular ID (Rand Miller).Essentially id field needs to be in format -
    89a0cd05-25fb-4b6e-a8f8-fc2187f690d0
    The problem was the id was present without the "-" that caused the server to error.

# Screenshots
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/Screen%20Shot%202021-02-18%20at%2010.38.29%20PM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%2012.53.54%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%2012.54.58%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%2012.55.16%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.04.58%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.06.15%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.12.54%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.13.53%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.14.51%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.16.00%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.16.19%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.17.14%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.17.40%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.18.05%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.20.00%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-18%20at%202.20.38%20AM.png
  
  https://github.com/sgopalan76/spring-reddit-clone/blob/CodeChallengeEnrollees/CodeChallengeEnrollees/src/screenshots/Screen%20Shot%202021-02-19%20at%208.34.27%20PM.png

# Unit testing - 
  Screenshots attached in separate pdf 
  Added Jasmine and karma tests

# CodeChallengeEnrollees

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

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
