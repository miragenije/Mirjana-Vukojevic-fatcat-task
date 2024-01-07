### Navigation

- [Users](#home)
- [Page Generator](#page-generator)
  - [Tab 1](#tab-1)
  - [Tab 2](#tab-2)
- [Form page](#form-generator)

### Overview

The project follows Atomic Design methodology.

TLDR: Atomic Design states groups all components into:

Atoms - if you can’t divide a component without it becoming useless, then it’s an atom. (Buttons, Links, Input fields (without labels), Badges)
Molecules - groups of atoms that work as a single component with a single function. (Pagination, Input fields (with labels), Dropdown menus)
Organisms - combinations of multiple molecules and have more than one function. (Tables, Forms, Navigation bars)
Templates - layouts
Pages

### Project structure


|-- src/

 |-- api/

 |-- assets/

|-- components/

|-- config/

 |-- lib/

|-- public/

### Technologies Used

- [React](https://reactjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/)
- [Material Tailwind](https://www.material-tailwind.com/docs/react/list)


###Icons
- [FontAwesome Icons](https://fontawesome.com/)


###Install dependencies
npm install

### Run the project
npm run dev
