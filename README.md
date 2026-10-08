# Simple CCS Website

A separate, complete Vue single-page project for a student mockup of the Central Philippine University College of Computer Studies website. It uses basic components, arrays, `v-for`, Vue Router, and one stylesheet.

## Run the project

1. Install Node.js 22.18 or newer within version 22, or Node.js 24.12 or newer.
2. Extract the ZIP and open a terminal inside **GatuteoMidtermSimple**, where `package.json` is located.
3. Run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. `npm install` installs the dependencies; `npm run dev` starts the website. No files from the other project are needed.

To create a production build:

```bash
npm run build
```

The built files will be placed in `dist`. You can check that build locally with `npm run preview`.

## What is included

- Hero section with the CCS logo and a welcome message.
- BSIT, BSCS, BSDMIA, and BLIS descriptions and logos.
- Faculty and staff photos, published education, and department groupings.
- Partnerships and memberships with logos.
- Navigation links using Vue Router to smoothly scroll to each section.
- A simple layout that adapts to phones, tablets, and desktops.
- Local images, dependency versions, a package lockfile, and a Git ignore file.

## Main files

```text
GatuteoMidtermSimple/
  public/ccs-icon.png
  src/
    assets/
      images/
      data.js
      style.css
    components/
      Navbar.vue
      Footer.vue
    router/index.js
    views/HomeView.vue
    App.vue
    main.js
  index.html
  package.json
  package-lock.json
  vite.config.js
  jsconfig.json
  ASSET_SOURCES.json
  README.md
```

Edit the programs, personnel, and partners in `src/assets/data.js`. Edit the page content in `src/views/HomeView.vue`, and the appearance in `src/assets/style.css`.

## Personnel information to confirm before submission

The current organizational chart posted outside the CCS Office was not supplied. This project reuses the published information and images from the previous mockup. The public CCS directory, the CPU 2024–2025 administrative directory, and the CPU 2018–2019 directory do not establish the complete current roster or every person's current highest degree.

Confirm department assignments, complete names (some published names contain initials), and highest educational attainment against the current office chart. Four education records are explicitly marked as older directory entries. Three education records are marked for confirmation. Update those entries in `src/assets/data.js`; do not treat this mockup as a verified current college directory.

The program logos are the student organization logos associated with the four programs: ITSO, CSS, MIDAS, and LISSO. Partner listings are based on the published CCS linkages page; current agreements and memberships need college confirmation. `ASSET_SOURCES.json` records the image sources.

References:

- https://ccs.cpu.edu.ph/
- https://ccs.cpu.edu.ph/academic-programs/
- https://ccs.cpu.edu.ph/faculty-and-staff/
- https://cpu.edu.ph/about-us/faculty-and-staff-directory/
- https://cpu.edu.ph/faculty-and-staff-directory/
- https://ccs.cpu.edu.ph/linkages/

## Push to your new repository

The ZIP does not contain another project's Git history or remote settings. If you have already cloned your new repository, place this project's contents in that repository's root and commit them there.

If this extracted folder is not already a Git repository, run the following commands inside it. Replace `YOUR_REPOSITORY_URL` with the URL of your new empty repository:

```bash
git init
git add .
git commit -m "Add simple CCS website"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

`node_modules` and `dist` are excluded by `.gitignore`. Commit the source files and `package-lock.json`.

## Validation

The project was installed in its own folder and checked with a production build and a rendered-content check. Interactive browser testing was unavailable in the build environment; check the menu scrolling and layouts in your local browser before submission.
