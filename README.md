# Hacker Terminal Portfolio

A developer portfolio built with Next.js and Styled Components, redesigned with a dark matrix terminal / hacker aesthetic.

![Node Version](https://img.shields.io/badge/node-24.x-brightgreen)
![Next.js](https://img.shields.io/badge/next.js-13.1.6-black)

## Features

- **Hacker Terminal Aesthetic**: Dark background (`#0d1117`), matrix green glowing accents (`#00ff66`), and monospace fonts (`Fira Code`, `Courier New`).
- **Terminal Cards**: Project cards styled as executable scripts (`project_X.sh`) with terminal window bar controls and glowing borders.
- **CLI Design Tokens**: Custom prompt headers (`root@angelito:~$`), hero text (`$ whoami`), tech stack system blocks (`> Tech_Stack.sys`), timeline history (`> Execution_Log.history`), and exit footer.
- **Custom Scrollbars & Text Selection**: Styled green glowing scrollbars and selection highlights.
- **Responsive Layout**: Mobile-friendly layout powered by Styled Components.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI & Styling**: [Styled Components](https://styled-components.com/), Styled Normalize
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- **Node.js**: Version `24.x` (see `.nvmrc`)
- **Yarn**: Version `1.22+`

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio_nextjs
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

### Running Locally

To start the development server:
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To create an optimized production build and export static files:
```bash
yarn build
```

The output will be exported to the `out/` directory.

To run the production server:
```bash
yarn start
```
