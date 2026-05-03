# Better NYS Login Chrome Extension

This extension replaces the standard image on the NY State Employee login portal with a random image from a local library, changing once per session (8 hours).

## Installation

1. Clone this repository or [download and uncompress it](https://github.com/plasticmind/extension-better-nys-login/archive/refs/heads/main.zip).
2. Open Chrome and visit `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select this folder.

## Usage

- Visit [https://fs.svc.ny.gov/](https://fs.svc.ny.gov/) (or any page under that domain).
- The image in the `#branding.illustrationClass` element will be replaced with a random image from the extension's library.
- The image will remain the same for 8 hours, then change on the next visit.

## Image Library

The extension contains nearly 60 photos from around New York State. Many of the photos featured were submitted by NYS Office of Information Technology Services ITS employees back in 2023.

Photos are stored in the `images/` folder, and photo captions, author, and dates are defined in `content.js`. 
