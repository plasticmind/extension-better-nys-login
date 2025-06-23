// List of available images with metadata
const images = [
  { src: chrome.runtime.getURL('images/photo-01.jpg'), photo_caption: 'Empire State Building', photo_by: 'Todd Quackenbush', photo_date: '11-23-2015' },
  { src: chrome.runtime.getURL('images/photo-02.jpg'), photo_caption: 'Statue of Liberty', photo_by: 'Luke Stackpoole', photo_date: '5-18-2018' },
  { src: chrome.runtime.getURL('images/photo-03.jpg'), photo_caption: 'Niagara Falls', photo_by: 'Lorenzo Fabris', photo_date: '8-8-2021' },
  { src: chrome.runtime.getURL('images/photo-04.jpg'), photo_caption: 'Adirondack State Park', photo_by: 'Jesse Gardner', photo_date: '10-1-2022' },
  { src: chrome.runtime.getURL('images/photo-05.jpg'), photo_caption: 'Melrose, NY', photo_by: 'Jesse Gardner', photo_date: '10-21-2023' },
  { src: chrome.runtime.getURL('images/photo-06.jpg'), photo_caption: 'Rain in Times Square', photo_by: 'Jesse Gardner', photo_date: '1-17-2018' },
  { src: chrome.runtime.getURL('images/photo-07.jpg'), photo_caption: 'Empire State Plaza', photo_by: 'Jesse Gardner', photo_date: '1-17-2024' },
  { src: chrome.runtime.getURL('images/photo-08.jpg'), photo_caption: 'Eastern Bluebird', photo_by: 'Ryan Downey', photo_date: ',3-8-2025' },
  { src: chrome.runtime.getURL('images/photo-09.jpg'), photo_caption: 'Ruby-throated Hummingbird', photo_by: '', photo_date: '' },
  { src: chrome.runtime.getURL('images/photo-10.jpg'), photo_caption: 'Bee on Milkweed', photo_by: 'Carol Wierzbowski', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-11.jpg'), photo_caption: 'Easton, NY', photo_by: 'Jesse Gardner', photo_date: '10-20-2024' },
  { src: chrome.runtime.getURL('images/photo-12.jpg'), photo_caption: 'Schaghticoke, NY', photo_by: 'Jesse Gardner', photo_date: '10-1-2024' },
  { src: chrome.runtime.getURL('images/photo-13.jpg'), photo_caption: 'Adirondack Balloon Festival', photo_by: 'Jesse Gardner', photo_date: '9-20-2024' },
  { src: chrome.runtime.getURL('images/photo-14.jpg'), photo_caption: 'Aurora over Melrose, NY', photo_by: 'Jesse Gardner', photo_date: '5-10-2024' },
  { src: chrome.runtime.getURL('images/photo-15.jpg'), photo_caption: 'Cascade Lake', photo_by: 'Jesse Gardner', photo_date: '10-8-2023' },
  { src: chrome.runtime.getURL('images/photo-16.jpg'), photo_caption: 'North Elba, NY', photo_by: 'Jesse Gardner', photo_date: '10-6-2023' },
  { src: chrome.runtime.getURL('images/photo-17.jpg'), photo_caption: 'Keene, NY', photo_by: 'Jesse Gardner', photo_date: '10-8-2023' },
  { src: chrome.runtime.getURL('images/photo-18.jpg'), photo_caption: 'Heart Lake', photo_by: 'Jesse Gardner', photo_date: '10-7-2023' },
  { src: chrome.runtime.getURL('images/photo-19.jpg'), photo_caption: 'Agency Building 4', photo_by: 'Jesse Gardner', photo_date: '9-13-2023' },
  { src: chrome.runtime.getURL('images/photo-20.jpg'), photo_caption: 'New York State Capitol', photo_by: 'Jesse Gardner', photo_date: '9-12-2023' },
  { src: chrome.runtime.getURL('images/photo-21.jpg'), photo_caption: 'Lake George', photo_by: 'Jesse Gardner', photo_date: '1-31-2022' },
  { src: chrome.runtime.getURL('images/photo-22.jpg'), photo_caption: 'The Oculus', photo_by: 'Jesse Gardner', photo_date: '3-5-2025' },
  { src: chrome.runtime.getURL('images/photo-23.jpg'), photo_caption: 'Fulton Station', photo_by: 'Jesse Gardner', photo_date: '3-5-2025' },
  { src: chrome.runtime.getURL('images/photo-24.jpg'), photo_caption: 'Midtown Manhattan Skyline', photo_by: 'Jesse Gardner', photo_date: '3-4-2025' },
  { src: chrome.runtime.getURL('images/photo-25.jpg'), photo_caption: 'Lower Manhattan Skyline', photo_by: 'Jesse Gardner', photo_date: '3-4-2025' },
  { src: chrome.runtime.getURL('images/photo-26.jpg'), photo_caption: 'Nor\'easter', photo_by: 'Michael Bower', photo_date: '3-28-2023' },
  { src: chrome.runtime.getURL('images/photo-27.jpg'), photo_caption: 'Lake Ontario', photo_by: 'Glenn Parower', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-28.jpg'), photo_caption: 'Lake Ontario', photo_by: 'Rachel Hernon', photo_date: '3-17-2023' },
  { src: chrome.runtime.getURL('images/photo-29.jpg'), photo_caption: 'Great Sacandaga Lake', photo_by: '', photo_date: '' },
  { src: chrome.runtime.getURL('images/photo-30.jpg'), photo_caption: 'such a good boi', photo_by: '', photo_date: '' },
  { src: chrome.runtime.getURL('images/photo-31.jpg'), photo_caption: 'Lower Manhattan', photo_by: 'Joy Mastropietro', photo_date: '3-7-2023' },
  { src: chrome.runtime.getURL('images/photo-32.jpg'), photo_caption: 'Empire State Plaza', photo_by: '', photo_date: '' },
  { src: chrome.runtime.getURL('images/photo-33.jpg'), photo_caption: 'Chittenango Falls', photo_by: 'Samuel Chiappione', photo_date: '3-7-2023' },
  { src: chrome.runtime.getURL('images/photo-34.jpg'), photo_caption: 'Lewey Lake', photo_by: 'Carol Wierzbowski', photo_date: '3-9-2023' },
  { src: chrome.runtime.getURL('images/photo-35.jpg'), photo_caption: 'Snowy Owl in Malta, NY', photo_by: 'Charles Slyer', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-36.jpg'), photo_caption: 'Indian Lake', photo_by: 'Carol Wierzbowski', photo_date: '3-9-2023' },
  { src: chrome.runtime.getURL('images/photo-37.jpg'), photo_caption: 'Freedom Tower', photo_by: 'Charlene Huggard', photo_date: '3-3-2023' },
  { src: chrome.runtime.getURL('images/photo-38.jpg'), photo_caption: 'Goldfinch on Blue Spruce', photo_by: 'Cathy Jones', photo_date: '3-17-2023' },
  { src: chrome.runtime.getURL('images/photo-39.jpg'), photo_caption: 'Great Sacandaga Lake', photo_by: '', photo_date: '' },
  { src: chrome.runtime.getURL('images/photo-40.jpg'), photo_caption: 'Hadley Mountain Fire Tower', photo_by: 'Ryan Downey', photo_date: '3-16-2023' },
  { src: chrome.runtime.getURL('images/photo-41.jpg'), photo_caption: 'Upstate Sunset', photo_by: 'Michael Bower', photo_date: '3-17-2023' },
  { src: chrome.runtime.getURL('images/photo-42.jpg'), photo_caption: 'Brooklyn', photo_by: 'Charlene Huggard', photo_date: '3-3-2023' },
  { src: chrome.runtime.getURL('images/photo-43.jpg'), photo_caption: 'Lake Lila', photo_by: 'Ryan Downey', photo_date: '3-17-2023' },
  { src: chrome.runtime.getURL('images/photo-44.jpg'), photo_caption: 'Chrysler Building', photo_by: 'Fangxin Liu', photo_date: '3-17-2023' },
  { src: chrome.runtime.getURL('images/photo-45.jpg'), photo_caption: 'Mowhawk River', photo_by: 'Lawrence Bordeaux', photo_date: '3-16-2023' },
  { src: chrome.runtime.getURL('images/photo-46.jpg'), photo_caption: 'Short-eared Owl in New Palz, NY', photo_by: 'Carol Wierzbowski', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-47.jpg'), photo_caption: 'Sleeping Beauty Mountain', photo_by: '', photo_date: '' },
  { src: chrome.runtime.getURL('images/photo-48.jpg'), photo_caption: 'Spring Beauty', photo_by: 'Carol Wierzbowski', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-49.jpg'), photo_caption: 'Piseco Lake', photo_by: 'Carol Wierzbowski', photo_date: '3-9-2023' },
  { src: chrome.runtime.getURL('images/photo-50.jpg'), photo_caption: 'Taughannock Falls', photo_by: 'Cathy Jones', photo_date: '3-17-2023' },
  { src: chrome.runtime.getURL('images/photo-51.jpg'), photo_caption: 'Tulip Festival', photo_by: 'Kathleen Martone', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-52.jpg'), photo_caption: 'Vroman\'s Nose', photo_by: 'Carol Wierzbowski', photo_date: '3-9-2023' },
  { src: chrome.runtime.getURL('images/photo-53.jpg'), photo_caption: 'Whiteface Mountain', photo_by: 'Karen Gifford', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-54.jpg'), photo_caption: 'Eagle at Cohoes Falls', photo_by: 'Charles Slyer', photo_date: '3-22-2023' },
  { src: chrome.runtime.getURL('images/photo-55.jpg'), photo_caption: 'Empire State Plaza at Sunrise', photo_by: 'Jesse Gardner', photo_date: '1-17-2024' },
  { src: chrome.runtime.getURL('images/photo-56.jpg'), photo_caption: 'Autumn at Willard Mountain', photo_by: 'Jesse Gardner', photo_date: '10-4-2024' },
  { src: chrome.runtime.getURL('images/photo-57.jpg'), photo_caption: 'Corning Tower', photo_by: 'Jesse Gardner', photo_date: '7-14-2024' }

];

const STORAGE_KEY = 'betterNYSLoginImage';
const SESSION_HOURS = 8;
const SESSION_MS = SESSION_HOURS * 60 * 60 * 1000;

function setBrandingImage(imageObj) {
  const el = document.querySelector('#branding.illustrationClass');
  if (el) {
    el.style.setProperty('background-image', `url('${imageObj.src}')`, 'important');
    el.style.setProperty('background-size', 'cover', 'important');
    el.style.setProperty('background-position', 'center', 'important');
    el.style.setProperty('background-color', 'transparent', 'important');

    // Remove any existing controls
    const prevControls = document.getElementById('better-nys-login-controls');
    if (prevControls) prevControls.remove();

    // Create container for caption and button
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'better-nys-login-controls';
    controlsContainer.style.position = 'absolute';
    controlsContainer.style.bottom = '12px';
    controlsContainer.style.left = '12px';
    controlsContainer.style.display = 'flex';
    controlsContainer.style.alignItems = 'center';
    controlsContainer.style.gap = '8px';
    controlsContainer.style.background = 'rgba(0,0,0,0.5)';
    controlsContainer.style.color = '#fff';
    controlsContainer.style.padding = '4px 10px';
    controlsContainer.style.borderRadius = '6px';
    controlsContainer.style.fontSize = '13px';
    controlsContainer.style.zIndex = '10';

    // Create and add the refresh button
    const refreshButton = document.createElement('button');
    refreshButton.textContent = '🔄';
    refreshButton.title = 'Get new image';
    refreshButton.style.background = 'none';
    refreshButton.style.border = 'none';
    refreshButton.style.color = '#fff';
    refreshButton.style.cursor = 'pointer';
    refreshButton.style.fontSize = '16px';
    refreshButton.style.padding = '0';
    refreshButton.style.lineHeight = '1';

    refreshButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleImageRefresh();
    });

    controlsContainer.appendChild(refreshButton);

    // Add caption span (conditionally)
    if (imageObj.photo_caption || imageObj.photo_by) {
      const captionSpan = document.createElement('span');
      captionSpan.textContent = `${imageObj.photo_caption ? imageObj.photo_caption : ''}${imageObj.photo_caption && imageObj.photo_by ? ' • ' : ''}${imageObj.photo_by ? 'Photo by ' + imageObj.photo_by : ''}`;
      controlsContainer.appendChild(captionSpan);
    }

    // Append the container
    el.style.position = 'relative';
    el.appendChild(controlsContainer);
  }
}

function handleImageRefresh() {
  const imageObj = pickRandomImage();
  const now = Date.now();
  chrome.storage.local.set({
    [STORAGE_KEY]: {
      imageObj,
      expires: now + SESSION_MS
    }
  });
  setBrandingImage(imageObj);
}

function pickRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

chrome.storage.local.get([STORAGE_KEY], (result) => {
  const now = Date.now();
  let imageObj;
  if (result[STORAGE_KEY] && result[STORAGE_KEY].expires > now) {
    imageObj = result[STORAGE_KEY].imageObj;
  } else {
    imageObj = pickRandomImage();
    chrome.storage.local.set({
      [STORAGE_KEY]: {
        imageObj,
        expires: now + SESSION_MS
      }
    });
  }
  setBrandingImage(imageObj);
}); 