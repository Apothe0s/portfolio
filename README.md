# Angelito Apanto Jr. — Portfolio

A personal portfolio presented as an interactive Windows 11 inspired desktop. Explore my projects, technical skills, and development journey through familiar desktop apps.

Built with **Next.js 13** and **React 18**.

## Features

- Desktop shortcuts and a centered taskbar.
- Searchable Start menu with pinned apps.
- Movable and resizable windows with minimize, maximize, restore, and close controls.
- Responsive layouts for desktop and mobile.
- Keyboard focus indicators and labeled window controls.
- Interactive terminal with portfolio commands.
- Project previews, technology tags, and contact links.

## Portfolio apps

| App | What you will find |
| --- | --- |
| About me | Introduction and background |
| Projects | DevDesk, HeaderWatch, WebRTC App, and Unichat |
| Skills | Front-end, back-end, developer tools, and protocols |
| Journey | Development milestones |
| Contact | Email, phone, and social profiles |
| Terminal | A command-line way to explore the portfolio |

## Getting started

Use **Node.js 24.x** and npm, matching the repository’s engine configuration.

```sh
git clone https://github.com/Apothe0s/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables or external API credentials are required for the portfolio interface.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build and export the static site to `out/` |
| `npm start` | Run the Next.js production server after building |

For static hosting, publish the generated `out/` directory. Next.js API routes are excluded from the static export.

## Using the desktop

Click an app on the desktop, taskbar, or Start menu to open it. Drag the title bar to move a window and use its lower-right corner to resize it on desktop. Use the title-bar buttons to minimize, maximize, restore, or close it.

Click an open app’s taskbar icon to minimize or restore it. The narrow button at the far right of the taskbar minimizes all windows. Press **Escape** to close the Start menu.

On smaller screens, windows use a compact layout; maximize a window for more room.

### Terminal commands

| Command | Action |
| --- | --- |
| `help` | List available commands |
| `whoami` | Display my name and developer role |
| `projects` | Open the Projects app |
| `skills` | Open the Skills app |
| `contact` | Open the Contact app |
| `clear` | Clear terminal output |

The terminal is a portfolio interface and does not execute system commands.

## Customization

| File or folder | Edit here |
| --- | --- |
| `src/pages/index.js` | App definitions, introduction, skills, contact details, and desktop interactions |
| `src/constants/constants.js` | Project descriptions, tags, URLs, and timeline entries |
| `src/styles/desktop.css` | Desktop, taskbar, Start menu, window styles, and responsive layouts |
| `public/images/` | Project preview images |
| `public/desktop/dog.jpg` | Desktop wallpaper |
| `public/desktop/icons/` | App icons |
| `src/pages/_app.js` | Global stylesheet import |
| `src/pages/_document.js` | Document markup |

Some project URLs are inherited Google placeholders. These are hidden in the interface and labeled **“Project links coming soon.”** Replace the `source` and `visit` values in `src/constants/constants.js` with the actual repository and demo URLs to enable them.

## Featured project: DevDesk

[Open DevDesk](https://angelito-devdesk.apothe0s.chatgpt.site) — a developer workspace with project folders, a Kanban board, notes, searchable code snippets, and JSON export. Built with React, TypeScript, Vinext, Cloudflare Workers, and D1 SQLite.

The current hosted deployment is owner-private. Public portfolio visitors cannot access it until its sharing settings are changed. Signed-in workspace records are isolated by user and saved in D1; an anonymous sample-data mode is implemented for future public demos.

## Featured project: HeaderWatch

[Open HeaderWatch](https://angelito-headerwatch.apothe0s.chatgpt.site) — a security-header inspector covering CSP, HSTS, MIME sniffing protection, framing, referrer policy, and permissions policy. Includes explanations, filtered response headers, private report history, and JSON export. Built with React, TypeScript, Vinext, Cloudflare Workers, and D1 SQLite.

The current hosted deployment is owner-private. Report coverage reflects six configuration checks and does not certify a site's security.

## Contact

- **Email:** [angelitoapantojr@gmail.com](mailto:angelitoapantojr@gmail.com)
- **GitHub:** [Apothe0s](https://github.com/Apothe0s)
- **LinkedIn:** [Angelito Apanto Jr.](https://www.linkedin.com/in/angelitoapantojr/)
- **Instagram:** [@apth0s](https://www.instagram.com/apth0s/)

## Credits

The desktop design is inspired by [KasperiP/windows11-portfolio](https://github.com/KasperiP/windows11-portfolio).

Wallpaper and app icons are reused from that MIT licensed project. Its copyright notice and license are retained in [public/desktop/LICENSE.txt](public/desktop/LICENSE.txt). That license applies to the reused reference assets; it does not establish a license for the entire portfolio.
