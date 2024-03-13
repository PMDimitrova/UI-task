#  Objectives:

## The scenario

Assume you are working on the admin controls of a product that allows builders to set up their own input forms (e.g., how Google Forms or SurveyMonkey allow you to build a survey with a multiple choice field). The project is to create a control to modify the properties of a multiple choice field. It’s not necessary to have the control actually build a multiple choice field; assume that functionality is handled by a service and you just need to interact with its APIs.

## Design

A User Experience (UX) designer has created the following image:
![enter image description here](https://i.ibb.co/C12LSnL/mockup.jpg)

## Core Requirements / Tasks

The builder can add and remove choices from the list of choices. In the visual spec provided, the builder adds and removes choices in a textarea element. Individual items are separated by a new line. Feel free to modify this interaction to meet the requirement of being able to add and remove choices.

***Validate*** the following rules and notify the builder if there are any validation issues.
-> The Label field is required.
-> Duplicates choices are not allowed.
-> There cannot be more than 50 choices total.
-> If the default value is not one of the choices, it should be added to the list of choices when the field is saved.

For the purpose of the demo, you may want **the form to keep its values** after the form is submitted. This helps demonstrate the prior requirement (that the default value is added).

Add a **button** that allows the builder to clear the form and start fresh.

The **submit button** should create a json object and post it to ... It should also **log the post data** to the console. 

### Stretch Requirements / Tasks

- Allow the form to be responsive and work on mobile devices in addition to desktop.

- Have you ever closed the browser accidentally when working on something? Yeah, me too. Let's help the user out by populating the form with the input they were working on if they accidentally close the browser.

- The database that stores this does not allow individual choices in the list of choices to be longer than 40 characters. Add client-side validation such that excess characters are visually distinct if the choice is longer than 40 characters. I.e., if a user enters the word that is longer than 40 characters, the characters above 40 would be highlighted in red.

- Refactor the button component such that it could be used by other developers and maintain the same style and behavior (e.g., for a custom component library). For example, let's say we want all of our submit buttons to show a loading indicator after they are clicked. How could we create a component that has that behavior that would be shared across all instances of the submit button?

### Available Scripts

In the project directory, you can run:

###  `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.