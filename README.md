# Ultimate ES6+webpack+react+scss skeleton

# SETUP

Get [Nvm](https://github.com/creationix/nvm) and [Yarn](https://github.com/yarnpkg/yarn)

    $ nvm use # use node version specified in .nvmrc
    $ yarn install # install dependencies
    $ yarn build # regular build, at ./build, can be configured at ./webpack.config.js#output section
    $ yarn build:prod # production optimized build
    $ yarn stat # reports stats of the build

# WHAT'S IN HERE

- Full ES6 and JSX support with scss imports, multiple entry points (webpack.config.js#entry) and multiple output bundles
- Common js and css and extracted out separated for smarter application bundles (webpack.config.js#plugins)

# DEMO

Run `yarn build` and open `build/index.html`

Go back and forth between index and about page, analyze the css and js files.
