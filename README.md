# BlogPostReader

This frontend angular project retrieves blogposts from a web api and shows them in a list. Blogposts can be marked as favorite (only UI state) and the text and title of a blogpost can be shown in a larger textfield.

## Usage:

1) Install Angular. Follow e.g. https://angular.io/guide/quickstart Step 1.
2) Cd into the project folder. Start a dev server by following e.g. https://angular.io/guide/quickstart Step 3. 
3) Open localhost:4200 in a browser of your choice. Tested with Chrome and Safari.

4) Click on blogposts in the list to see their body and title in the textfield on the right.
5) Click on the hearts beside the blogpost titles to mark a blogpost as favorite.


## Code:

1) This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.
2) Angular 5.2.4 was used as a web framework.
3) The code as a main component (app component). The app component contains another component (postlist component) which     contains the posts.
4) The posts are fetched from a web api, and saved into an array of objects. A field (checked) is added for each post object, which indicates if the title is marked as favorite.
5) The hearts are labels. A click on a heart changes the 'checked' value of the corresponding blog object to 1. On the other hand, the heart label listens for a the 'checked' value being 1. If it equals one, it adds a class to this label, which turns the hearts background color red.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.