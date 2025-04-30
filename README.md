# Soma Toolbox

A curated collection of useful tools and resources, inspired by Jason Murray's website [TheToolbox.art](https://thetoolbox.art/) powered by [Kit](https://app.kit.com/). It is deployed to my [personal website's toolbox page](https://www.hargitaisoma.hu/toolbox), focusing on AI, Typography, Creative Coding and Software Engineering. Feel free to make your own fork and publish your favourite tools.

## Features

- Browse a collection of useful tools
- Filter tools by category and by a custom search
- Creating snapshots for thumbnails
- Responsive design for all devices

## Tech Stack

- Vite
- React
- TypeScript
- TailwindCSS
- Puppeteer

## Project Structure

```bash
soma_toolbox/
├── public/           # Static assets
│   └── images/       # Tool thumbnail images
├── src/              # Source code
│   ├── assets/       # Vite assets
│   ├── components/   # UI components
│   ├── data/         # Data files
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── thumbnail-gen/    # Thumbnail generation subproject
└── index.html        # HTML template
```

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to <http://localhost:5173>

## Adding New Tools

To add new tools, edit the 🧰 `src/data/tools.ts` file and add new entries to the `tools` array.

To generate thumbnails for these new items follow the instructions in the [thumbnail generator documentation](thumbnail-gen/README.md).

## License

MIT

## Credits

Inspired by [TheToolbox.art](https://thetoolbox.art/)
