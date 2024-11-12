# Project: Library Management

**Project Name:** Library Management System

**Project Task:** Building the backend for a Library Management System.

**Project Motive:** Creating a backend system for a library management system, including book data management, library member management and book borrow management.

## Server Live Link

Server Side Live Link: [https://library-management-system-fawn-five.vercel.app](https://library-management-system-fawn-five.vercel.app)

## Project Features

1. **Book Management:** Full CRUD operations for managing library books, including creating, reading, updating, and deleting book records. The system tracks essential details like title, genre, published year, and copy availability.
2. **Member Management:** Complete member management with CRUD operations to add, view, update, or delete library members, including details like name, email, phone, and membership date.
3. **Borrow and Return Books** Functionality to handle book borrowing and returning. It ensures that a member can borrow a book if copies are available and tracks each borrowing record with details like borrow date.
4. **Overdue Tracking:** Automated tracking of overdue books. Calculates and lists borrowed books overdue for return, including details of the borrower and the number of overdue days, based on a 14-day return policy.

## Technologies

- TypeScript
- Express
- Prisma
- Zod
- Dotenv
- Http-status-codes
- Render
- Vercel

## How to run the application locally

### Step 1: Clone the Repository

Firstly, we have to clone the repository to our local machine using Git.

```node
git clone <repository-url>
```

### Step 2: Navigate to the Project Directory

We need to navigate to the cloned repository directory.

```node
cd <repository-name>
```

### Step 3: Install Dependencies

Then we have to install the project's dependencies using yarn.

```node
yarn install
```

This command reads the package.json file and installs all necessary packages. This will create a node_modules folder with all dependencies.

### Step 4: Set up the `.env` File

Next, we will create a .env file in the root directory of our project. This file will hold the environment variables. `.env` file will look like this:

```node
PORT = 5000;
DATABASE_URL =
  "postgresql://username:password@localhost:5432/mydatabase?schema=public";
```

We need to ensure that these variables are correctly referenced in our application, typically in a configuration file which is under `./src/config` folder named as `index.ts`.

### Step 5: Generate Prisma Client

After setting up the `.env` file, generate the Prisma client based on our Prisma schema by running:

```node
npx prisma generate
```

This command creates a Prisma client that our application can use to interact with the database.

### Step 6: Run Database Migrations

To ensure the database structure is aligned with our Prisma schema, run the following migration command:

```node
npx prisma migrate dev
```

This will create the tables and relationships defined in our Prisma schema.

### Step 7: Start the Server

To run our Express.js application, we will use the following command:

```node
npm run start:dev
```

In our package.json file, we have a script defined as `npm run start:dev` to run the server.

```node
"scripts": {
    "start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
    "start:prod": "node ./dist/server.js",
    //...more scripts
  }
```

### Step 6: Access the Application

Once the server is running, we can access the application by navigating to `http://localhost:<port>` in web browser. We have to replace the `<port>` with the port number specified in the .env file.

---

So, these are the steps to run an expressJs application locally.
