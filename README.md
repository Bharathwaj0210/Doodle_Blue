# Doodle Blue

Doodle Blue is a frontend learning repository containing progressively more
practical exercises in HTML, CSS, JavaScript, and React. The repository is
organized as independent practice areas rather than one single application.
The early folders are browser-ready files that can be opened directly, while
the React folders are separate Vite projects with their own dependencies and
scripts.

## What this repository demonstrates

- Semantic HTML document structure, page navigation, forms, tables, media, and
  built-in browser validation.
- CSS styling, external stylesheets, responsive layouts, reusable visual
  patterns, and responsive media queries.
- JavaScript fundamentals: variables, scope, functions, callbacks, arrays,
  objects, CRUD operations, destructuring, spread syntax, optional chaining,
  nullish coalescing, and array methods.
- Browser programming: DOM selection and updates, event listeners, form
  handling, `preventDefault`, timers, promises, `async`/`await`, the event
  loop, Fetch API, and `localStorage`.
- React component composition, props, state, controlled inputs, refs,
  lifecycle effects, reusable components, form validation, debouncing, API
  integration, filtering, sorting, and CRUD-style state updates.

## Repository structure

```text
Doodle blue/
├── Day-1 (HTML,CSS)/       # Introductory HTML/CSS exercises
├── JS/                      # Vanilla JavaScript concepts and browser demos
│   └── events/              # Mouse and click event examples
├── React/
│   ├── component/           # React Hook Form and reusable form components
│   ├── task/                # Debounced API-based student explorer
│   ├── web/                 # Small course and student-search exercises
│   └── REACT JS.docx        # Additional React learning notes
├── password/                # React password visibility toggle
├── student/                 # React student management portal
└── task/                    # Static multi-page campus events website
```

Generated `node_modules` and Vite `dist` folders are local installation/build
outputs. They are not separate learning modules and should not be edited
manually.

## 1. `Day-1 (HTML,CSS)` — HTML and CSS foundations

This folder introduces document structure and styling without a framework or
build tool.

### Pages and exercises

- `index.html` presents a college identity/profile page with headings, an
  image, student details, a link to the profile page, and a footer.
- `about.html` demonstrates profile content, inline styling, lists, a
  technology-stack section, an experience table, and a contact form.
- `form.html` is a form-controls exercise using text, email, password, phone,
  date, select, textarea, file, checkbox, radio, fieldset, and reset/submit
  controls.
- `styles.css` provides external styling for the form page.

### Techniques used

- HTML5 metadata and responsive viewport configuration.
- Semantic elements such as `header`, `main`, `section`, `form`, and `footer`.
- Native browser validation through `required`, `minlength`, `maxlength`,
  `pattern`, `type`, and `accept`.
- Relative links between pages and an external stylesheet.
- Both inline CSS (profile exercises) and external CSS (form exercise), making
  the difference between the two approaches visible.

## 2. `JS` — Vanilla JavaScript and browser APIs

The `JS` folder is a collection of small, focused HTML demonstrations. Most
examples place JavaScript in a page-level `<script>` block so the output and
execution order can be inspected directly in the browser console.

### Core language exercises

- `JS_Concepts.html` practices arrays, `push`, `pop`, `slice`, `splice`,
  `includes`, `filter`, `map`, `reduce`, `sort`, and `some`.
- `script.js` demonstrates variables, conditional expressions, loops,
  `continue`, `break`, arrow functions, default parameters, lexical scope,
  callbacks, and common array methods.
- `object.html` covers object read/update/create/delete operations, nested
  objects, destructuring, renamed/default properties, object spread, optional
  chaining, and nullish coalescing.
- `Closure.html` demonstrates a private `balance` value retained by a returned
  `deposit` function.
- `Hoisting.html` compares function hoisting with `let`/`const` initialization
  behavior and the temporal dead zone.

### Asynchronous JavaScript

- `EventLoop.html` compares synchronous logging, promise microtasks, and
  `setTimeout` timer tasks.
- `sync_Async.html` demonstrates a promise with `.then()` and `.catch()`.
- `promise_Async_time.html` contains examples for promise resolution/rejection,
  `async`/`await`, `setTimeout`, `setInterval`, and task ordering.

### DOM events

- `click.html` attaches multiple handlers to one button with
  `addEventListener`.
- `events/dbclick.html` handles a double-click and updates text and color.
- `events/mouseover_out.html` handles pointer enter/leave behavior and updates
  the result message.

### Fetch and browser storage

- `apifetch.html` fetches products from `https://dummyjson.com/products`,
  renders product data into a table, and reports loading/error states.
- `APIFETCH_TASK.HTML` is a related Fetch API exercise that stores the response
  in `localStorage` and explores loading saved data.

These are client-side demonstrations only. They do not include a backend,
authentication, database, or persistent server-side storage.

## 3. `task` — Static campus events website

The root `task` folder is a multi-page HTML/CSS website called **Know A Fest**.
It models a college event portal using static content and client-side form
behavior.

### Pages

- `index.html`: landing page with navigation, hero content, featured events,
  event categories, and footer links.
- `about.html`: festival introduction, mission cards, and event-type cards.
- `events.html`: event directory with category, date, location, and detail
  links, plus a search input presentation.
- `event-details.html`: event detail view.
- `schedule.html`: event schedule view.
- `register.html`: event registration form.
- `styles.css`: shared layout and visual styling.
- `2302.q702.010.S.m005.c12.student campus.jpg`: local campus artwork used by
  the static site.

### Implementation approach

- Plain HTML5 and a shared CSS file; no bundler or JavaScript framework.
- Repeated navigation and footer markup create a consistent multi-page flow.
- Bootstrap Icons are loaded from a jsDelivr CDN.
- `register.html` uses native form constraints, a ten-digit phone pattern,
  a minimum date set with JavaScript, `checkValidity()`, `reportValidity()`,
  `preventDefault()`, and an inline success message.
- Event and social content is currently static; registration is simulated in
  the browser and is not sent to a server.

## 4. React projects

Every React exercise is an independent Vite project. Each project has its own
`package.json`, `vite.config.js`, ESLint configuration, `index.html`, `src/`,
and `public/` directory. The projects use React 19, React DOM, Vite, and
ESLint. They are written in JSX and JavaScript rather than TypeScript.

### Common commands

Run commands from the selected project directory:

```powershell
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run dev` starts the Vite development server with hot module replacement.
`npm run lint` checks the source with ESLint. `npm run build` creates the
production bundle, and `npm run preview` serves that bundle locally.

### `React/component` — reusable validated form

This project builds a billing-style form from small React components.

- `src/App.jsx` composes the page and renders `Form`.
- `src/component/Form.jsx` uses `react-hook-form` for registration,
  submission, reset behavior, and error state.
- `src/component/commoncomponent/` contains reusable input, dropdown, and
  button components.
- `src/const/validation.js` centralizes validation rules for name, email,
  phone, security code, country, city, and policy agreement.

The main method is component composition: the page owns the form workflow,
the shared controls receive registration/error props, and the validation
configuration stays separate from presentation. Submission currently logs the
data, displays an alert, and resets the form; it does not call a backend.

### `React/task` — debounced student explorer

This project renders `src/pages/Debounce.jsx` from `src/main.jsx`.
It fetches user records from `https://dummyjson.com/users` and provides:

- loading and error states;
- retry behavior;
- search by full name or email;
- a 500 ms debounce implemented with `useEffect` and `setTimeout`;
- city filtering from the loaded data;
- name/email ascending and descending sorting;
- a clear-filters action;
- accessible labels and live result/status regions.

`Debounce2.jsx` contains an earlier commented implementation/reference while
`Debounce.jsx` is the active page.

### `React/web` — small React composition exercises

The active app in `src/App.jsx` is a student-name search form. It uses:

- `useRef` to access and focus the input after mount;
- `useEffect` for the initial focus;
- `preventDefault()` to keep submission in the page;
- a result message in React state;
- a clear action that resets and refocuses the input.

`src/courses.jsx` is a separate component exercise that maps a static course
array to reusable `CourseCard` components. `react-router-dom` is present in
the package manifest, but the current entry point does not configure routes.

### `password` — password visibility state

This small React exercise uses `useState` to hold the password value and a
boolean visibility flag. The input switches between `password` and `text`
types, and the button label changes between **Show Password** and **Hide
Password**. It is a UI/state exercise, not an authentication feature; the
sample password is held only in component memory.

### `student` — student management portal

This project demonstrates a complete client-side CRUD-style flow using local
React state:

- `StudentManagementPage.jsx` owns the student list and edit selection.
- `StudentForm.jsx` uses controlled inputs for add/edit operations.
- `StudentCard.jsx` presents a record, derives initials, and exposes edit and
  delete callbacks.
- `data/students.js` provides three initial in-memory records.
- `header/Header.jsx` displays the live record count.
- `footer/Footer.jsx` explains that records are stored in the browser session.

The implementation uses parent-to-child props and child-to-parent callback
props. New records receive a generated client-side ID, edits replace the
matching record, deletes filter it out, and cancel clears edit mode. There is
no database or API persistence, so refreshing the page restores the initial
sample data.

## Technology and methods summary

| Area               | Stack                        | Main methods practiced                                           |
| ------------------ | ---------------------------- | ---------------------------------------------------------------- |
| HTML/CSS basics    | HTML5, CSS3                  | Semantic markup, links, forms, tables, external/inline CSS       |
| Browser JavaScript | JavaScript, DOM APIs         | Events, DOM updates, validation, timers, Fetch, `localStorage` |
| Static website     | HTML5, CSS3, Bootstrap Icons | Multi-page navigation, shared styles, responsive layout          |
| React projects     | React 19, JSX, Vite          | Components, props, state, effects, refs, controlled forms        |
| Form validation    | React Hook Form              | Field registration, validation rules, errors, reset              |
| API practice       | Fetch API, DummyJSON         | Loading/error states, retry, filtering, sorting, debouncing      |
| Code quality       | ESLint                       | Lint scripts for each independent Vite project                   |

## Running the repository

### Static HTML/JavaScript exercises

Open an HTML file directly in a browser for simple examples. For more
consistent Fetch API, module, and asset behavior, serve the repository with a
local web server such as the VS Code Live Server extension:

```text
Day-1 (HTML,CSS)/index.html
JS/JS_Concepts.html
task/index.html
```

### React exercises

Open a terminal in one project at a time:

```powershell
cd "D:\Doodle blue\student"
npm install
npm run dev
```

Use the same commands with `React\component`, `React\task`, `React\web`, or
`password` to run the other React projects. There is no root-level
`package.json`, so dependency installation and scripts must be run inside the
chosen project directory.

## Repository

[Doodle Blue on GitHub](https://github.com/Bharathwaj0210/Doodle_Blue)
