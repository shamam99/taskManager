```markdown
# Task Manager API

This Task Manager API is a RESTful service that allows users to manage their tasks.
Also, this project is a task that was requested to be delivered during the training provided by InnoFrontIT to the back-end department.

## Features

- CRUD operations for task management.
- JSON file for data persistence.
- Unique ID generation for tasks using UUID.
- Error handling for common edge cases.
- Support for task statuses (Completed, Pending, In Progress).
- Endpoint to retrieve tasks by status.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) - The runtime server environment
- [npm](https://www.npmjs.com/) - Node Package Manager

### Installing

To get the project running, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/shamam99/taskManager.git
```

2. Navigate to the project directory:

```bash
cd "your project path ere"
```

3. Install the required dependencies:

```bash
npm install  express nodemon uuid body-parser
```

4. Start the development server:

```bash
npm start
```

The server will start running on `http://localhost:3000`.

## API Endpoints

The API supports the following endpoints:

- `GET /tasks` - Retrieve all tasks
- `GET /tasks/:id` - Retrieve a task by ID
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID
- `GET /tasks/status/:status` - Retrieve tasks by their status

## Usage

Here are some example usages of the API:

### Creating a Task

Send a `POST` request to `/tasks` with a JSON body:

```json
{
  "title": "New Task",
  "description": "Description of the new task",
  "status": "Pending",
  "dueDate": "2024-03-28"
}
```

### Retrieving All Tasks

Send a `GET` request to `/tasks`.

![Screenshot of getAll](https://raw.githubusercontent.com/shamam99/taskManager/6e79b259817cd3f895f6dcca150882f5174be3d9/images/getAll.png)


### Updating a Task

Send a `PUT` request to `/tasks/:id` with the updated fields in the JSON body.

![Screenshot of getAll](https://github.com/shamam99/taskManager/blob/324b75c769dcecd8eee9bff094e8246358e35a19/images/Update.png)


### Deleting a Task

Send a `DELETE` request to `/tasks/:id`.

![Screenshot of getAll](https://github.com/shamam99/taskManager/blob/324b75c769dcecd8eee9bff094e8246358e35a19/images/delete.png)


### Other operation screenshots:

### for creating:
![Screenshot of getAll](https://github.com/shamam99/taskManager/blob/324b75c769dcecd8eee9bff094e8246358e35a19/images/Create.png)

### for get by ID

![Screenshot of getAll](https://github.com/shamam99/taskManager/blob/324b75c769dcecd8eee9bff094e8246358e35a19/images/getById.png)

### for get by status:

![Screenshot of getAll](https://github.com/shamam99/taskManager/blob/324b75c769dcecd8eee9bff094e8246358e35a19/images/getByStatus.png)



## Testing

For testing the API, you can use [Postman](https://www.postman.com/) or any other API testing tool you want like THUNDER client in VScode.

## Built With

- [Node.js](https://nodejs.org/) - The runtime server environment
- [Express](https://expressjs.com/) - Web application framework

## Authors

- **shamam** 
