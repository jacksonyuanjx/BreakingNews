# Breaking News (nwHacks 2021)

## Inspiration
We arrived at this idea wanting to improve education for the general public in a way that has lasting positive social impacts. With the current political climates around the globe, we wanted to help people learn or relearn how to make educated opinions and empathize with people with other views. 

After completing a user study to find out about our app’s viability, we were able to solidify the necessity of this application.

## What it does
* Breaking News seeks to help individuals break out of their echo chambers by presenting users with news stories as told through various perspectives and educating users to think critically
* The app allows users to practice their critical thinking through a gamified sequence of questions, each of which challenging the user to view media from different perspectives

## How we built it
* We used React as a front-end framework and Material-UI to build UI components and views for this single page application.
* For styling, we used scss combined with styled-components.
* We also used Google Cloud Firestore as our database which stores the articles we retrieved.

## Challenges we ran into
* Some of the major challenges we faced includes our first attempt to create a mobile app using flutter, where we ran into problems getting virtual machines to work for testing purposes and as most of our group was new to mobile development, the learning curve was determined to be too large for the time limit and project scope
* Our second biggest challenge was ensuring we didn’t show our own bias in the question bank

## Accomplishments that we're proud of
* We were able to work cohesively as a team and complete this project in the time provided
* The project completed actually solves a real social problem
* We finished the project even though we had to restart several hours into the project due to a change in direction

## What we learned
* Even the exercise of creating this application forced us to reconsider our own biases and confront the echo chambers in which we often find ourselves. By reading articles on the same issue but from vastly different perspectives, we came to realize other perspectives and the value of acknowledging them, even if we don’t necessarily agree with them.
* Technically, we were all met with some part of the tech stack that we had never used before. This project was a great opportunity for us to become more familiar with front-end and UI development.


## What's next for Breaking News
* Implement database to store past news articles and corresponding quizzes → would allow user to go back and learn about past events rather than just the current day
* Implement natural language processing agent to summarize daily articles and generate relevant quiz questions
* Embellish gamification by including a user leaderboard, which ranks users based on number of “events” (summaries and quizzes) completed. This would also require persistent storage of multiple user data using a database. Also, allow the user to personalize their account through avatar creation and user authentication credentials. 
