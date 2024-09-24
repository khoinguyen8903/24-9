React Redux Post App
Introduction
Table of Contents
Features
Technologies
Code Structure
API
Components
PostPage
PostPageUI
AddPostFormUI
Redux Store
Thunks
Post Slice

Introduction
This is a simple React and Redux application that demonstrates how to fetch and add posts using an external API. The app uses Redux for state management and Axios for interacting with the API. Users can view posts and add new ones through a form, which will then be displayed on the page.

Features
Fetch and display a list of posts from an API.
Add new posts via a form and display them instantly.
Pagination for displaying a large number of posts.
Error handling for fetching and adding posts.

Technologies
React: For building the user interface.
Redux Toolkit: For state management.
Axios: For making API requests.
TailwindCSS: For styling the UI components.

Code Structure
App.js: The root component of the application.
redux/store.js: Configures the Redux store with the post-related reducers.
services/postService.js: Contains API service methods for fetching and adding posts.
features/postThunk.js: Contains Redux thunks for handling asynchronous actions.
features/postSlice.js: Manages the post state logic.
components/PostPageUI.js: Displays the list of posts with pagination support.
components/AddPostFormUI.js: A form for adding new posts.

API
The app interacts with the API provided by jsonplaceholder.typicode.com/posts.
GET /posts: Fetches the list of posts.
POST /posts: Adds a new post. The API returns a mock response with a generated ID.

Components
    PostPage
This component is responsible for managing the fetching and display of posts. It also handles the submission of new posts using the AddPostFormUI component.
    PostPageUI
This component renders the list of posts. It includes pagination logic to display posts across multiple pages.
    AddPostFormUI
This is the form used for adding new posts. It validates the form inputs and submits the data to the Redux store through a thunk action.

Redux Store
Thunks
fetchPostsThunk: Fetches posts from the API.
addPostThunk: Adds a new post to the API.

Post Slice
The post slice manages the state of the posts, including fetching and adding posts. It handles various states like idle, loading, succeeded, and failed.

