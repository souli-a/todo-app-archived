# Table of contents

- [What is Listify](#what-is-listify)
- [Technologies used](#technologies-used)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
- [Environment variables](#environment-variables)
- [Testing](#testing)
- [How to fork and run the project](#how-to-fork-and-run-the-project)
- [How to host the project](#how-to-host-the-project)
- [Bug reports](#bug-reports)
- [Contributing](#contributing)
- [License](#license)

# What is Listify

Listify is a minimalist todo application that offers the following features:

- Responsive design.
- Light and dark mode.
- Task completion tracking.
- Task deletion.
- User registration and login system.

**Note**: HTTP requests may be slower than usual due to the free plan of [Render](https://render.com), where my Express server is hosted. The performance of the React project is not involved.

# Technologies used

## Front-end

- [React](https://www.npmjs.com/package/react) with [Vite](https://www.npmjs.com/package/vite)
- [phosphor-icons](https://www.npmjs.com/package/phosphor-icons) for icons
- [Radix](https://www.radix-ui.com) for accessibility purpose
- [styled-component](https://www.npmjs.com/package/styled-components) for styling
- [zod](https://www.npmjs.com/package/zod) for client-side schema validation
- [react-hook-form](https://www.npmjs.com/package/react-hook-form) for forms
- [axios](https://www.npmjs.com/package/axios) for HTTP requests
- [js-cookie](https://www.npmjs.com/package/js-cookie) for checking cookie existence
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) for client-side routing
- [cypress](https://www.npmjs.com/package/cypress) for testing
- [eslint](https://www.npmjs.com/package/eslint) for linting
- [prettier](https://www.npmjs.com/package/prettier) for formatting
- [pnpm](https://pnpm.io) for the package manager

**Note**: The package `prettier` is not present in `package.json` because I'm using it as a VSCode extension, feel free to install it as a `devDependencies`.

## Back-end

- Since this project uses [express](https://www.npmjs.com/package/express), (it is a [framework](https://www.codecademy.com/resources/blog/what-is-a-framework) of [Node.js](https://nodejs.org/en)), [Node.js](https://nodejs.org/en) must be [installed](https://nodejs.org/en/download)
- [express](https://www.npmjs.com/package/express) for configuring the server
- [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) for cookie parsing
- [cors](https://www.npmjs.com/package/cors) for CORS configuration
- [helmet](https://www.npmjs.com/package/helmet) for HTTP headers security
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for cookie authentication
- [mongoose](https://www.npmjs.com/package/mongoose) for working with MongoDB
- [dotenv](https://www.npmjs.com/package/dotenv) for loading environment variables
- [nodemon](https://www.npmjs.com/package/nodemon) for local server development
- [MongoDB](https://www.mongodb.com) for the database, it is installed globally on my desktop PC from the AUR [repository](https://aur.archlinux.org/packages/mongodb-bin) (for [Arch Linux](https://archlinux.org)), feel free to install it from the npm [repository](https://www.npmjs.com/package/mongodb) or on Windows [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows)

**Note**: Please refer to the `package.json` file for a complete list of `dependencies` and `devDependencies` used in this project.

# Environment variables

To use the app locally, create a `.env` file in both the front-end and back-end folders. If you're pushing the app to a repository and want to protect sensitive data, remember to add `.env` to the `.gitignore` file.

**Note**: The `dotenv` package is already installed in Vite by default, so there's no need to install it separately in the front-end folder.

`.env` file for the `front-end` folder:

```js
// Front-end environment variables in the .env file:

VITE_SERVER_BACK_END_URL = // Put the URL of the back-end server (e.g., https://<my-sub-domain>.onrender.com or any other hosting platform).
VITE_SERVER_LOCAL_URL = // Put the URL of the local back-end server (e.g., http://localhost:<port>). In our project context, it will be http://localhost:4000.
VITE_NODE_ENV = // Specify the environment. For local development, use "dev"; for production, use "prod".
```

You [need](https://vitejs.dev/guide/env-and-mode.html) to prefix your variables with `VITE_` to clearly communicate their values to the client. Otherwise, the value will be `undefined`.

`.env` file for the `back-end` folder:

```js
// Back-end environment variables in the .env file:

PORT=// The port number for the server to listen on. (e.g., 4000)
MONGO_URL=// The MongoDB connection string. Retrieve it from https://cloud.mongodb.com/v2 by clicking on "Connect", selecting "Drivers", and scrolling down.
SECRET_KEY=// Your secret key for JWT token creation and authentication. Use a strong, unique value (e.g., y*i@dnJ!xEL3BJ2kSR4U#cs5Vm).
NODE_ENV=// The environment value. For local development, use "dev"; for production, use "prod".
LOCAL_URL=// The URL for the front-end local server. By default, Vite sets it to http://localhost:5173.
```

# Testing

The application includes tests for the following areas:

- Authentication
- Input
- Routes
- Security
- Themes
- UI elements

You can find them in the `cypress` folder.

To run the tests, follow these steps:

1. Navigate to the `front-end` folder.
2. Execute either `./node_modules/.bin/cypress open` or `pnpm run cypress`. The latter [script](https://docs.npmjs.com/cli/v9/using-npm/scripts) command is available in the `package.json` file.

If you're new to Cypress, I recommend checking out this crash course [here](https://www.youtube.com/watch?v=avb-VDa3ZG4).

**Note**: When using styled-components, dynamic class names are utilized. Therefore, if you modify a CSS property or value, make sure to update the associated class name accordingly.

If you write a lot a tests, it will be not perennial to re-point them everytime.

Possible solutions can be explored [here](https://github.com/cypress-io/cypress/issues/1212).

# How to fork and run the project

You can start using it immediately as it is already hosted [here](https://app-listify.vercel.app).

In this project, the text are in French. But the code is in english, by convention. Feel free to tranlate it in your language. You can use [DeepL](https://www.deepl.com/en/translator) for translation.

Or, you can follow these steps to host it locally:

1. Click on the "Fork" button located at the top right (or top left on mobile devices), just to the right of the eye icon. Choose a title for your repository or leave it as the default, and then click on the "Create Fork" button.
2. In your file explorer, navigate to the desired folder where you want to store your GitHub repository. Run the following command in your CLI: `git@github.com:<your-username>/todo-app.git`. Replace `<your-username>` with your GitHub username. For example, if your username is "abc123", the command would be `git@github.com:abc123/todo-app.git`. Note that this assumes you are using [SSH](https://www.howtogeek.com/devops/should-you-use-https-or-ssh-for-git) for git commands.
3. Go to the front-end folder and run `pnpm i` to install the necessary dependencies. If you don't have pnpm installed yet, please [install](https://pnpm.io/installation) it.
4. Go to the back-end folder and run `pnpm i` to install the required dependencies.
5. Finally, go to each respective folder (front-end or back-end) and in your CLI, run `pnpm run dev`. This command will launch, for each folder, the development server.

**Note**: Don't forget to specify your environment variables in the `.env` file, as explained in the [Environment variables](#environment-variables) section above.

Now that your project is up and running and linked to your GitHub repository, feel free to make any modifications to the project and [push](https://www.w3schools.com/git/git_push_to_remote.asp?remote=github) them to your repository. Enjoy!

# How to host the project

To host the project, you'll need to host both the back-end and the front-end.

For this project, the back-end is hosted on [Render](https://render.com). You can also explore alternatives such as [Heroku](https://www.heroku.com), [Railway](https://railway.app) and several other options. If you'd like to understand how host it on Render, you can check out this [tutorial](https://www.youtube.com/watch?v=bnCOyGaSe84).

The front-end is hosted on [Vercel](https://vercel.com). Similarly, you can consider alternatives like [Netlify](https://www.netlify.com) and other similar platforms. If you're new to Vercel, you can refer to this [tutorial](https://www.youtube.com/watch?v=FvsvHzcwOmQ) to deploy your front-end.

For both the back-end and front-end hosting, you can link your GitHub repository. Vercel and Render will automatically rebuild and deploy on every repository commits you made.

Ensure that you specify the necessary environment variables for [Render](https://render.com/docs/configure-environment-variables#1-per-service-environment-variables) and [Vercel](https://vercel.com/docs/concepts/projects/environment-variables). Look for environment variables instructions on the platform documentation you use if there are not these ones.

# Bug reports

Bugs should be reported to the Listify bug tracking system [here](https://github.com/souli-a/todo-app/issues).

# Contributing

Contributions are welcome, you can make pull requests [here](https://github.com/souli-a/todo-app/pulls).

# License

Listify is licensed under the [MIT](LICENSE).
