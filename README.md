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

The extension contains 57 photos from around New York State. Many of the photos featured were submitted by NYS Office of Information Technology Services ITS employees back in 2023.

Photos are stored in the `images/` folder, and photo captions, author, and dates are defined in `content.js`.

- Empire State Building — Todd Quackenbush
- Statue of Liberty — Luke Stackpoole
- Niagara Falls — Lorenzo Fabris
- Adirondack State Park — Jesse Gardner
- Melrose, NY — Jesse Gardner
- Rain in Times Square — Jesse Gardner
- Empire State Plaza — Jesse Gardner
- Eastern Bluebird — Ryan Downey
- Ruby-throated Hummingbird
- Bee on Milkweed — Carol Wierzbowski
- Easton, NY — Jesse Gardner
- Schaghticoke, NY — Jesse Gardner
- Adirondack Balloon Festival — Jesse Gardner
- Aurora over Melrose, NY — Jesse Gardner
- Cascade Lake — Jesse Gardner
- North Elba, NY — Jesse Gardner
- Keene, NY — Jesse Gardner
- Heart Lake — Jesse Gardner
- Agency Building 4 — Jesse Gardner
- New York State Capitol — Jesse Gardner
- Lake George — Jesse Gardner
- The Oculus — Jesse Gardner
- Fulton Station — Jesse Gardner
- Midtown Manhattan Skyline — Jesse Gardner
- Lower Manhattan Skyline — Jesse Gardner
- Nor'easter — Michael Bower
- Lake Ontario — Glenn Parower
- Lake Ontario — Rachel Hernon
- Great Sacandaga Lake
- such a good boi
- Lower Manhattan — Joy Mastropietro
- Empire State Plaza
- Chittenango Falls — Samuel Chiappione
- Lewey Lake — Carol Wierzbowski
- Snowy Owl in Malta, NY — Charles Slyer
- Indian Lake — Carol Wierzbowski
- Freedom Tower — Charlene Huggard
- Goldfinch on Blue Spruce — Cathy Jones
- Great Sacandaga Lake
- Hadley Mountain Fire Tower — Ryan Downey
- Upstate Sunset — Michael Bower
- Brooklyn — Charlene Huggard
- Lake Lila — Ryan Downey
- Chrysler Building — Fangxin Liu
- Mowhawk River — Lawrence Bordeaux
- Short-eared Owl in New Palz, NY — Carol Wierzbowski
- Sleeping Beauty Mountain
- Spring Beauty — Carol Wierzbowski
- Piseco Lake — Carol Wierzbowski
- Taughannock Falls — Cathy Jones
- Tulip Festival — Kathleen Martone
- Vroman's Nose — Carol Wierzbowski
- Whiteface Mountain — Karen Gifford
- Eagle at Cohoes Falls — Charles Slyer
- Empire State Plaza at Sunrise — Jesse Gardner
- Autumn at Willard Mountain — Jesse Gardner
- Corning Tower — Jesse Gardner
