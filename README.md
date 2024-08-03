React Todo Application

Overview:

The react application is a simple,interactive task management tool,it allows users to create,update,search,delete tasks.The application utilizes React for the frontend and manages data using a local JSON file and localStorage in web browser.

System Design:

The system design consists of following Core components:

TodoInput:A component for Adding new Tasks.
TodoList: A component for displaying the lists of tasks.
TodoItem:A component for each task item,allowing users to update,mark as done,delete and expand to view additional details like dedscription and timestamp.
App:The main component that manages state and orchestrates the behaviour of other components.

Application Features:
->Create Task:Users can add new tasks with a title and description.
update task:Users can edit the title and descriptioin of existing tasks.
Mark as Done:Users can search for tasks based on title.
Expandable List:Tasks can be expanded to show additional details like description and timestamp.
Delete Task:usrs can delete tasks.
Local Storage: Tasks are presisted in local storage,so they are not lost when the page is refreshed.
Responsive Design:The application is designed to be responsive and work well on both desktop and mobile devices.

State Management:
state managemd at level anf passed down to child components via porps.Local storage is used to presist data between sessions.
###set up instructions
-Download dpendices by running `npm install`
-start up the app using `npm start`

-All components implementing in the `src/components` directory.


