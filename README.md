# CalTracker API

This API stores information on the user and a resource, resource being workouts. It allows users to register as users of the API and add, delete & edit workouts.

## API URL

```js
  production: 'https://secret-woodland-45312.herokuapp.com',
  development: 'http://localhost:4741'
```

## API End Points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out`            | `users#signout`   |
| PATCH  | `/change-password`     | `users#changepw`  |
| GET    | `/workouts`            | `workouts#index`  |
| POST   | `/workouts`            | `workouts#create` |
| PATCH  | `/workouts/:id`        | `workouts#update` |

All data returned from API actions is formatted as JSON.

## API Routes

```md
1. User routes
2. Workout routes
3. Meal routes
```

## Resources & Attributes

Workouts will be my resources. Attributes can be seen in the ERD below

## API ERD

![alt-text](https://i.imgur.com/Ds8Lkqp.png "Project 2: ERD")

[Link to ERD](https://i.imgur.com/Ds8Lkqp.png)

