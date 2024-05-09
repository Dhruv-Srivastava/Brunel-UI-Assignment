## React Internship Project Assignment

### How to install

1. Download the zip file of code or open the terminal and run `git clone https://github.com/Dhruv-Srivastava/Brunel-UI-Assignment`
2. Move into the directory where the project has been cloned/downloaded.
3. Run `npm install` to install all dependencies.
4. Run `npm run dev` to start the local server.

### Project Directory Structure

```
project/
├─ node_modules/
├─ src/
│  ├─ assets/
│  │  ├─ svg/
│  ├─ components/
│  │  ├─ Accordian/
│  │  ├─ Button/
│  │  ├─ FAQ/
│  │  ├─ Footer/
│  │  ├─ Header/
│  │  ├─ Navbar/
│  │  ├─ Register/
│  ├─ data/
│  │  ├─ faq.js
│  │  ├─ carousel.js
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Registration.jsx
│  │  ├─ NotFound.jsx
│  ├─ utils/
│  │  ├─ valid-email.js
│  ├─ main.jsx
│  ├─ index.css
│  ├─ App.jsx 
├─ .gitignore
├─ package.json
├─ README.md
```

1. The main code is under the `src` directory of the project.

2. `pages` folder contains components for two routes i.e `/`(home), `/register` (register) & `/*` /(not-found) for any route which is not `/` or `/register`.

3. If a component needs subcomponents then subcomponents are extracted in the directory of component itself.

    Eg: `Header` component is split into three subcomponents: `HeaderTitle`, `HeaderStats` & `HeaderSlider`. These three components are present inside the `Header directory only.`

    ```
    ├─ Header/
    │  ├─ HeaderTitle/
    │  ├─ HeaderStats/
    │  ├─ HeaderSlider/
    ```

