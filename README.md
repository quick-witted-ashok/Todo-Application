React Todo List Application
Overview
The React Todo List Application is a simple, interactive task management tool. It allows users to create, update, mark as completed, search, and delete tasks. The application utilizes React for the frontend and manages data using a local JSON file.

System Design
The system design consists of the following core components:

TodoInput: A component for adding new tasks.
TodoList: A component for displaying the list of tasks.
TodoItem: A component for each task item, allowing users to update, mark as done, delete, and expand to view additional details like description and timestamp.
App: The main component that manages state and orchestrates the behavior of other components.


Application Features
Create Task: Users can add new tasks with a title and description.
Update Task: Users can edit the title and description of existing tasks.
Mark as Done: Users can mark tasks as completed.
Search Tasks: Users can search for tasks based on their title.
Expandable List: Tasks can be expanded to show additional details like description and timestamp.
Delete Task: Users can delete tasks.
Local Storage: Tasks are persisted in local storage, so they are not lost when the page is refreshed.
Responsive Design: The application is designed to be responsive and work well on both desktop and mobile devices.

Implementation
State Management
State is managed at the App level and passed down to child components via props. Local storage is used to persist data between sessions.

### Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>



> ### _Things to Keep in Mind_
> - All components  implementing in the `src/components` directory.
>
