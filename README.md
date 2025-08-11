
# Basecamp API V3

This TypeScript library provides an API wrapper for interacting with Basecamp resources, including People, Projects, Todo Sets, Todo Lists, Comments, and Authorization.


## Installation

You can install the library using npm or yarn:

```bash
  npm install basecamp-api-v3
```

or with yarn:
    
```bash
  yarn add basecamp-api-v3
```
## Import Modules

```
import {
  Authorization,
  People,
  Projects,
  Todosets,
  Todolists,
  TodolistsGroups,
  Todos,
  Comments
} from 'basecamp-api-v3'
```
## Usage/Examples

### Authorization

#### Generate Code by Basecamp Login

```typescript
const params = {
  url: 'basecamp_url',
  email: 'user@example.com',
  password: 'password123',
  sphereKey: 'sphere_key'
}

const response = await Authorization.generateCodeByBasecampLogin(params)
```

#### Generate Access Token by Code
```typescript
const params = {
  clientId: 'client_id',
  clientSecret: 'client_secret',
  code: 'auth_code',
  redirectUri: 'redirect_url'
}

const response = await Authorization.generateAccessTokenByCode(params)
```

#### Generate Access Token by Refresh Token
```typescript
const params = {
  clientId: 'client_id',
  clientSecret: 'client_secret',
  refreshToken: 'refresh_token'
}

const response = await Authorization.generateAccessTokenByRefreshToken(params)
```

### People

#### Get All People
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token'
}

const response = await People.getAllPeople(params)
```

#### Get People on a Project
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id'
}

const response = await People.getPeopleOnAProject(params)
```

#### Get Pingable People
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
}

const response = await People.getPingablePeople(params)
```

#### Get My Personal Info
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
}

const response = await People.getMyPersonalInfo(params)
```

#### Get Person
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  peopleId: 'people_id'
}

const response = await People.getPerson(params)
```

### Projects

#### Get All Projects
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  status: ''
}

const response = await Projects.getAllProjects(params)
```

#### Get A Project
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id'
}

const response = await Projects.getAProject(params)
```

### Todosets

#### Get A Todoset
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todosetId: 'todoset_id
}

const response = await Todosets.getTodoset(params)
```

### Todolists

#### Get All Todolists
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todosetId: 'todoset_id'
}

const response = await Todolists.getTodolists(params)
```

#### Get A Todolist
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todolistId: 'todolist_id'
}

const response = await Todolists.getATodolist(params)
```

#### Create A Todolist
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todosetId: 'todoset_id',
  name: 'Todolist Name',
  description: 'Todolist Description'
}

const response = await Todolists.createATodolist(params)
```

#### Update A Todolist
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todolistId: 'todolist_id',
  name: 'Todolist Name',
  description: 'Todolist Description'
}

const response = await Todolists.updateATodolist(params)
```

### TodolistsGroups

#### Get All Todolist Groups
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todolistId: 'todolist_id',
}

const response = await TodolistsGroups.listTodolistGroups(params)
```

#### Get A Todolist Group
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todolistId: 'todolist_id',
}

const response = await TodolistsGroups.getATodolistGroup(params)
```

#### Create A Todolist Group
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todolistId: 'todolist_id',
  name: 'Todolist Group Name',
  color: 'Todolist Color'
}

const response = await TodolistsGroups.createATodolistGroup(params)
```

### Todos

#### Get All Todos
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todolistId: 'todolist_id',
  status: 'status',
  completed: completed
}

const response = await Todos.getTodos(params)
```

#### Get A Todo
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todoId: 'todo_id',
}

const response = await Todos.getATodo(params)
```

#### Create A Todo
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todolistId: 'todolist_id',
  content: 'Todo Title',
  description: 'Todo Description',
  assignee_ids: ['assignee_id'],
  completion_subscriber_ids: ['completion_subscriber_ids'],
  notify: true,
  due_on: 'MM/DD/YYYY',
  starts_on: 'MM/DD/YYYY',
}

const response = await Todos.createATodo(params)
```

#### Update A Todo
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todoId: 'todo_id',
  content: 'Todo Title',
  description: 'Todo Description',
  assignee_ids: ['assignee_id'],
  completion_subscriber_ids: ['completion_subscriber_ids'],
  notify: true,
  due_on: 'MM/DD/YYYY',
  starts_on: 'MM/DD/YYYY',
}

const response = await Todos.updateATodo(params)
```

#### Complete A Todo
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todoId: 'todo_id',
}

const response = await Todos.completeATodo(params)
```

#### Uncomplete A Todo
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todoId: 'todo_id',
}

const response = await Todos.uncompleteATodo(params)
```

#### Reposition A Todo
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  todoId: 'todo_id',
  position: 1
}

const response = await Todos.repositionATodo(params)
```

### Comments

#### Get All Comments
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  recordingId: 'recording_id'
}

const response = await Comments.getComments(params)
```

#### Get a Specific Comment
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  commentId: 'comment_id'
}

const response = await Comments.getAComment(params)
```

#### Create a Comment
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  recordingId: 'recording_id',
  content: 'Comment'
}

const response = await Comments.createAComment(params)
```

#### Update a Comment
```typescript
const params = {
  accountId: 'account_id',
  authorization: 'Bearer token',
  projectId: 'project_id',
  commentId: 'comment_id',
  content: 'Updated comment'
}

const response = await Comments.updateAComment(params)
```
## Error Handling
All functions return a response object with success, status, data, and message fields for easier error handling.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@TNZtims](https://github.com/TNZtims)


## Support

If you find this project helpful, consider supporting it!

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.me/SirTim21)

Or donate directly via PayPal: https://www.paypal.me/SirTim21