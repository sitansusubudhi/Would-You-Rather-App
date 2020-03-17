# Would You Rather Project

The "Would You Rather?" web app lets a user to play the "Would You Rather?" game. The game goes like this: A user is asked a question in the form: "Would you rather [option A] or [option B] ?". Answering "neither" or "both" is against the rules.

Users will be able to create new questions, see which questions they haven't answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

For this application, most of the application’s state is managed by Redux. 

Funcionality to allow a user to register will be developed later.

The project is also hosted using GitHub pages at [Would-You-Rather-App](https://sitansusubudhi.github.io/Would-You-Rather-App/)

## View project locally

To view the project in your local machine:

* clone this repository using `git clone `
* install all project dependencies with `npm install`
* start the development server with `npm start`


## Component Hierarchy

```
|- App # This component fetches all the initial data. All the routes to different components are defined here.
|-- Login # This component gets rendered when the user is not logged in or when the user tries to navigate to other links by changing the URL.
|-- NavMenu # This component contains all the menu items for ease of navigation. It allows the user to switch between Home, New Poll, Leaderboard. Logout functionality is also provided in the same component. 
|-- NewPoll # This component is rendered at the '/add' page of the web app. It allows the user to create new polls by allowing them to set two options. 
|-- Leaderboard # This component is rendered at the '/leaderboard' page of the web app. It displays the results of top 3 ranked users. Ranking is calculated on the basis of total score (Polls created + Polls answered)
|-- NoMatchPage # This component is rendered when the logged in user tries to access a poll which does not exist or when the URL entered does not match with any of the routes already present.
|-- Dashboard # This component gets rendered at the '/' page of the web app, when the user is logged in. 
|--- UnansweredQs # This component is displayed by default as a Tab option in the Dashboard View. It displays a list of questions which are not answered yet by the logged in user. These are sorted by timestamp. 
|--- AnsweredQs # This component is also part of the Dashboard View as a Tab. It displays a list of questions which have been answered by the logged in user. These are also sorted by timestamp. 
|---- Question # This component is used to display few details of the questions in the AnsweredQs and UnansweredQs list view. Clicking on the button in this component displays the ResultPage or QuestionPage respectively. 
|----- QuestionPage # This component gets rendered at the '/question/:question_id' page of the web app. The user would be able to select between two options and submit the choice.
|----- ResultPage # This component gets rendered at the '/question/:question_id' page of the web app, only if the logged in user has already answered the question. User will be able to view their choice and see the poll results of how others have voted.
```

## Backend Server

For this application, the `_DATA.js` file represents a fake database and methods that let us access the data. 

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

