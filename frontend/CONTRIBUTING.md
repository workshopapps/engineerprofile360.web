# Front End Guide

## Resources to be used

- VS code
  - Prettier extension -  Configure VS code to automatically format on paste or on save of file

## Stacks

- React.js
- Styled components

## Style guide

- Mobile first Approach (Design for moile first. This willl allow for easy scaling up)
- Break points

  - 320px - 480px (**Mobile**)
  - 481px - 767px (**Tablet**)
  - 768px - 1023px (**Small sized laptops**)
  - 1024px - 1279px (**Laptops and Desktops**)
  - 1280px - 1440px (**Larger laptops and Desktop**)

- Rems, Ems and percentages to be used where neccessary. `**_No PX units_**`
- **Only flex and grid** to be used for layouts
- Grid should be used for the main layout of the application
- Flex can be used for in layouts

## React guide

- **_.jsx_** to be used to save all files containing jsx. (This will allow VS code let you use some features and also let react perform better)


- Use of function expression and arror functions for React components

- Semi-colons after every statement (Prettier should handle this)

- Proper documentaion by the documentation team

- Components should be exported out of their folders using the **_index.js_** file present in them, this will allow uniform imports of mulitple components

## Project structure

```bash.
└── Engineer-360/
    ├── node_modules
    ├── public/
    │   └── ...
    └── src/
        ├── assets/
        │   ├── images
        │   ├── icons
        │   └── ...
        ├── main/
        │   ├── components/
        │   │   ├── molecules
        │   │   └── index.js
        │   └── pages/
        │       └── index.js
        ├── styles /
        │   ├── globalStyles/
        │   │   ├── GlobalStyles.js
        │   │   └── Theme.js
        │   └── reusableElements.styled.js
        └── ui/
            ├── _test_
            ├── auth
            ├── components/
            │   ├── molecules
            │   └── index.js
            ├── hooks
            ├── pages/
            │   └── index.js
            └── utils
```

- `_/src/_` folder contains every files and folders relating to the entire application

- `_/src/assets_` folder contains top level images and icons to be used across `_/src/main_` and `_/src/ui_` 

- `_/src/main_` contains every component, pages, styles and assets relating to the external pages of the application only. (ex. **Landing page, Contact, About e.t.c**)

- `_/src/styles_` contains styles, such as **globalStyles, themes and styled-componenets** that is common between the entire application

- `_/src/ui_` contains every component, pages, styles , assets and every logic (**auth_handlers, hooks, utils, tests**) relating to the protected areas of the application only. (ex. **Auth pages, Dashboard**)

## Packages

- Coming soon...