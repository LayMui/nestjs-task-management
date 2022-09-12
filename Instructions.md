Day 1:
1. yarn global add @nestjs/cli

2. Create a new project via nest CLI
```
nest new nestjs-task-management
```
3. src folder - where actual code goes here

4. main.ts
```
It uses the nestJS factory create method to create new nestJS app
using root module AppModule (app.module.ts)

```

Listen to port 3000, the standard port in nodeJS app
It makes our server up and running

5. app.module.ts
```
A class that is decorated with a decorator coming from the @nestjs/common
We provide this decorator with some properties
```

6. Delete files that nestjs created for us and not needed
```
app.controller.spect.ts
app.controller.ts
app.service.ts
```

7. Make some changes to app.module.ts
and run to make sure
```
yarn start:dev
```

8. Each app has at least 1 module - the root module
This is the starting point of the application

Day 2:
1. Create a Task Module using nestjs cli
```
nest g module tasks
```
It will generate a subfolder tasks where we have a new file tasks.module.ts and modification in the app.module.ts.
Now tasks module is in our app.
2. 
