# Episode 01

# added cdn links and implemented using createElement and createRoot.

# NPM

- is not node package manager NOT
- Manages packages not node package manager
- Most important package is BUNDLER - WEBPACK, PARCEL, VITE
- BUNDLER packages the app to ship the app to production.

# Parcel

- Dev Build
- Local Server
- Refreshing (HMR) - Hot Module Replacement
- Uses a file watching algorithm and written in C++
- Faster builds beacuse of caching - /.parcel-cache folder
- Image optimization
- Minification
- Bundles
- Compress the files
- Consistent Hashing
- Code Spliting
- Differential Bundling
- Error Display - Good
- Https - we can test secure testing in local
- Tree shaking algorithm - remove unused code

# BrowsersDev.com website will give browsers support

# JSX

- creating elements const heading = React.createElement("h1", {}, "Header line from REACT"); is not developer friendly and then JSX comes up
- JSX is not included in react
- jsx is a HTML/XML likes syntax
- jsx is not HTML in javascript
- Browser cannot understand this directly but babel will transpiles it before it reaches to the JS
- Babel will do this transpiling
- JSX -> React.createElement -> JS Object -> HTML Element
- This is not replacement of React.createElement but syntactic sugar only
- JSX is not HTML for ex: put class as attribute and you will get error and className then you didnt find error.
- attributes to JSX shoud be in camelCase
- JSX will sanitize data - it won't blindly run and it will skip attackers to attack using javascript

# Babel

- Takes JSX and converts to javascript which react can understand
- Earlier JSXTransformer is there but it was limited and slower

# React

- We have markup and javascript different earlier
- React combines both and gives better way of development

# React Components

- Class Components
- Functional Components

# Functional Components

- Normal javascript function wich return JSX
- Less boilerplate
- No this binding
- Easier to read
- especially with Hooks, introduced in React 16.8

# Extentions

- Prettier
- Bracket Pair Colorizer
- ESLint
- Better Comments
