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

// Prevent Chrome from offering to save the RSA passcode as a password.
// Changing type to "text" alone isn't enough — Chrome also detects forms with
// username + submittable fields. We neutralize form-level autocomplete and
// inject a honeypot field to absorb Chrome's credential detection.
const passcodeInput = document.querySelector('#passcodeInput');
if (passcodeInput) {
  passcodeInput.type = 'text';
  passcodeInput.autocomplete = 'one-time-code';
  if (!passcodeInput.getAttribute('aria-label')) {
    passcodeInput.setAttribute('aria-label', 'RSA SecurID Passcode');
  }
  const passcodeForm = passcodeInput.closest('form');
  if (passcodeForm) {
    passcodeForm.autocomplete = 'off';
    // Honeypot: an invisible password field that absorbs Chrome's save-password detection
    const honeypot = document.createElement('input');
    honeypot.type = 'password';
    honeypot.name = 'fake-password-trap';
    honeypot.autocomplete = 'new-password';
    honeypot.tabIndex = -1;
    honeypot.setAttribute('aria-hidden', 'true');
    honeypot.style.cssText = 'position:absolute;left:-9999px;width:0;height:0;opacity:0;pointer-events:none;';
    passcodeForm.insertBefore(honeypot, passcodeForm.firstChild);
  }
}

// === NYSDS Design System Styling ===
(function applyNYSDSStyles() {
  // Build font-face URLs from extension resources
  const fontUrl = (name) => ({
    woff2: chrome.runtime.getURL(`fonts/proximanova-${name}.woff2`),
    woff: chrome.runtime.getURL(`fonts/proximanova-${name}.woff`),
  });
  const fonts = {
    regular: fontUrl('regular'),
    semibold: fontUrl('semibold'),
    bold: fontUrl('bold'),
    extrabold: fontUrl('extrabold'),
  };

  const style = document.createElement('style');
  style.textContent = `
    /* === @font-face: Proxima Nova === */
    @font-face {
      font-family: 'Proxima Nova';
      src: url('${fonts.regular.woff2}') format('woff2'),
           url('${fonts.regular.woff}') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Proxima Nova';
      src: url('${fonts.semibold.woff2}') format('woff2'),
           url('${fonts.semibold.woff}') format('woff');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Proxima Nova';
      src: url('${fonts.bold.woff2}') format('woff2'),
           url('${fonts.bold.woff}') format('woff');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Proxima Nova';
      src: url('${fonts.extrabold.woff2}') format('woff2'),
           url('${fonts.extrabold.woff}') format('woff');
      font-weight: 800;
      font-style: normal;
      font-display: swap;
    }

    /* === NYSDS Design Tokens (hard-coded from @nysds/styles) === */
    :root {
      /* Font Families */
      --nys-font-family-sans: 'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      --nys-font-family-serif: 'Noto Serif', Georgia, Cambria, 'Times New Roman', Times, serif;
      --nys-font-family-monospace: 'Roboto Mono Web', 'Bitstream Vera Sans Mono', Consolas, Courier, monospace;
      --nys-font-family-body: var(--nys-font-family-sans);
      --nys-font-family-heading: var(--nys-font-family-sans);
      --nys-font-family-ui: var(--nys-font-family-sans);
      --nys-font-family-display: var(--nys-font-family-sans);

      /* Font Sizes */
      --nys-font-size-2xs: 0.625rem;
      --nys-font-size-xs: 0.75rem;
      --nys-font-size-sm: 0.875rem;
      --nys-font-size-md: 1rem;
      --nys-font-size-lg: 1.125rem;
      --nys-font-size-xl: 1.25rem;
      --nys-font-size-2xl: 1.375rem;
      --nys-font-size-3xl: 1.5rem;
      --nys-font-size-4xl: 1.75rem;
      --nys-font-size-5xl: 2rem;
      --nys-font-size-6xl: 2.25rem;
      --nys-font-size-7xl: 2.5rem;
      --nys-font-size-h1: var(--nys-font-size-7xl);
      --nys-font-size-h2: var(--nys-font-size-5xl);
      --nys-font-size-h3: var(--nys-font-size-4xl);
      --nys-font-size-h4: var(--nys-font-size-2xl);
      --nys-font-size-h5: var(--nys-font-size-2xl);
      --nys-font-size-h6: var(--nys-font-size-lg);
      --nys-font-size-body-xs: var(--nys-font-size-xs);
      --nys-font-size-body-sm: var(--nys-font-size-sm);
      --nys-font-size-body-md: var(--nys-font-size-md);
      --nys-font-size-body-lg: var(--nys-font-size-lg);

      /* Font Weights */
      --nys-font-weight-regular: 400;
      --nys-font-weight-medium: 500;
      --nys-font-weight-semibold: 600;
      --nys-font-weight-bold: 700;
      --nys-font-weight-extrabold: 800;

      /* Line Heights */
      --nys-font-lineheight-sm: 1.375rem;
      --nys-font-lineheight-md: 1.5625rem;
      --nys-font-lineheight-lg: 1.75rem;
      --nys-font-lineheight-body-sm: 1.5rem;
      --nys-font-lineheight-body-md: 1.5rem;
      --nys-font-lineheight-body-lg: 1.75rem;
      --nys-font-lineheight-h1: 2.5rem;
      --nys-font-lineheight-h2: 2.25rem;
      --nys-font-lineheight-h3: 2rem;
      --nys-font-lineheight-h4: 2rem;

      /* Colors — Neutrals */
      --nys-color-neutral-10: #f6f6f6;
      --nys-color-neutral-50: #ededed;
      --nys-color-neutral-100: #d0d0ce;
      --nys-color-neutral-200: #bec0c1;
      --nys-color-neutral-300: #a7a9ab;
      --nys-color-neutral-400: #909395;
      --nys-color-neutral-500: #797c7f;
      --nys-color-neutral-600: #62666a;
      --nys-color-neutral-700: #4a4d4f;
      --nys-color-neutral-800: #323435;
      --nys-color-neutral-900: #1b1b1b;
      --nys-color-black: #000000;
      --nys-color-white: #ffffff;

      /* Colors — Theme */
      --nys-color-theme-faint: #f7fafd;
      --nys-color-theme-weaker: #eff6fb;
      --nys-color-theme-weak: #cddde9;
      --nys-color-theme-mid: #457aa5;
      --nys-color-theme: #154973;
      --nys-color-theme-strong: #0e324f;
      --nys-color-theme-stronger: #081b2b;

      /* Colors — Semantic */
      --nys-color-text: #1b1b1b;
      --nys-color-text-weak: #4a4d4f;
      --nys-color-text-weaker: #797c7f;
      --nys-color-text-reverse: #ffffff;
      --nys-color-link: #004dd1;
      --nys-color-link-strong: #003ba1;
      --nys-color-link-strongest: #002971;
      --nys-color-surface: #ffffff;
      --nys-color-surface-raised: #f6f6f6;
      --nys-color-base: #62666a;
      --nys-color-base-weak: #f6f6f6;
      --nys-color-focus: #004dd1;
      --nys-color-accent: #face00;
      --nys-color-success: #1e752e;
      --nys-color-success-weak: #e8f1ea;
      --nys-color-info: #004dd1;
      --nys-color-info-weak: #e5effa;
      --nys-color-warning: #face00;
      --nys-color-warning-weak: #fefae5;
      --nys-color-danger: #b52c2c;
      --nys-color-danger-weak: #f7eaea;

      /* Spacing */
      --nys-space-50: 0.25rem;
      --nys-space-100: 0.5rem;
      --nys-space-150: 0.75rem;
      --nys-space-200: 1rem;
      --nys-space-250: 1.25rem;
      --nys-space-300: 1.5rem;
      --nys-space-400: 2rem;
      --nys-space-500: 2.5rem;
      --nys-space-600: 3rem;
      --nys-space-700: 3.5rem;
      --nys-space-800: 4rem;

      /* Border */
      --nys-border-width-sm: 1px;
      --nys-border-width-md: 2px;
      --nys-border-width-lg: 4px;

      /* Radius */
      --nys-radius-xs: 1px;
      --nys-radius-sm: 2px;
      --nys-radius-md: 0.25rem;
      --nys-radius-lg: 0.5rem;
      --nys-radius-xl: 0.75rem;
      --nys-radius-xxl: 1rem;

      /* Form widths */
      --nys-form-width-sm: 5.5rem;
      --nys-form-width-md: 12.5rem;
      --nys-form-width-lg: 24rem;
    }

    /* === Global Typography === */
    body.body,
    #contentWrapper,
    #contentWrapper * {
      font-family: var(--nys-font-family-sans) !important;
    }

    #contentWrapper {
      color: var(--nys-color-text);
    }

    /* Vertically center the right-side content */
    #contentWrapper {
      display: flex !important;
      align-items: center !important;
    }

    #content {
      width: 100% !important;
    }

    /* === Annotation 5: Title === */
    #header h4 {
      font-weight: var(--nys-font-weight-bold) !important;
      font-size: var(--nys-font-size-4xl) !important;
      line-height: var(--nys-font-lineheight-h3) !important;
      color: var(--nys-color-text) !important;
    }

    #header h4 .nys-title-large {
      font-size: var(--nys-font-size-7xl) !important;
      line-height: var(--nys-font-lineheight-h1) !important;
      display: block !important;
    }

    #header h4 .nys-title-sub {
      color: var(--nys-color-text-weaker) !important;
      display: block !important;
    }

    /* Sign-in heading */
    #loginMessage {
      font-weight: var(--nys-font-weight-semibold) !important;
      font-size: var(--nys-font-size-xl) !important;
      margin-bottom: var(--nys-space-200) !important;
    }

    /* === Annotation 1: Inputs (nys-textinput style) === */
    input.text,
    input.text.fullWidth,
    #userNameInput,
    #passwordInput,
    #passcodeInput {
      font-family: var(--nys-font-family-sans) !important;
      font-size: var(--nys-font-size-md) !important;
      font-weight: var(--nys-font-weight-regular) !important;
      line-height: 1.5rem !important;
      letter-spacing: 0.044px !important;
      height: 40px !important;
      padding: var(--nys-space-100) !important;
      border: var(--nys-border-width-sm) solid var(--nys-color-neutral-400) !important;
      border-radius: var(--nys-radius-md) !important;
      color: var(--nys-color-text) !important;
      background-color: var(--nys-color-white) !important;
      outline: transparent solid var(--nys-border-width-sm) !important;
      transition: border-color 0.15s ease, outline-color 0.15s ease !important;
      box-sizing: border-box !important;
      width: 100% !important;
    }

    input.text:hover:not(:disabled):not(:focus):not([readonly]),
    #userNameInput:hover:not(:disabled):not(:focus),
    #passwordInput:hover:not(:disabled):not(:focus),
    #passcodeInput:hover:not(:disabled):not(:focus) {
      outline-color: var(--nys-color-neutral-900) !important;
      border-color: var(--nys-color-neutral-900) !important;
    }

    input.text:focus:not([readonly]),
    #userNameInput:focus,
    #passwordInput:focus,
    #passcodeInput:focus {
      outline-color: var(--nys-color-focus) !important;
      border-color: var(--nys-color-focus) !important;
      caret-color: var(--nys-color-focus) !important;
    }

    input.text::placeholder {
      color: var(--nys-color-text-weaker) !important;
    }

    /* Mask passcode entry like a password field without triggering Chrome's save prompt */
    #passcodeInput {
      -webkit-text-security: disc !important;
    }

    /* === Annotation 2: Buttons (nys-button filled style) === */
    #submitButton,
    span.submit,
    input[type="submit"],
    button[type="submit"] {
      font-family: var(--nys-font-family-sans) !important;
      font-weight: var(--nys-font-weight-semibold) !important;
      font-size: var(--nys-font-size-md) !important;
      line-height: 1.5rem !important;
      height: 48px !important;
      padding: 10px 18px !important;
      background-color: var(--nys-color-theme) !important;
      color: var(--nys-color-text-reverse) !important;
      border: var(--nys-border-width-md) solid transparent !important;
      border-radius: var(--nys-radius-xl) !important;
      cursor: pointer !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      text-decoration: none !important;
      user-select: none !important;
      transition: background-color 0.15s ease !important;
      outline: none !important;
      box-sizing: border-box !important;
    }

    #submitButton:hover,
    span.submit:hover,
    input[type="submit"]:hover,
    button[type="submit"]:hover {
      background-color: var(--nys-color-theme-strong) !important;
      color: var(--nys-color-text-reverse) !important;
    }

    #submitButton:active,
    span.submit:active,
    input[type="submit"]:active,
    button[type="submit"]:active {
      background-color: var(--nys-color-theme-stronger) !important;
      color: var(--nys-color-text-reverse) !important;
    }

    #submitButton:focus-visible,
    span.submit:focus-visible,
    input[type="submit"]:focus-visible,
    button[type="submit"]:focus-visible {
      outline: solid var(--nys-border-width-md) var(--nys-color-focus) !important;
      outline-offset: 2px !important;
    }

    /* === Error display === */
    #errorText {
      color: var(--nys-color-danger) !important;
      font-size: var(--nys-font-size-sm) !important;
    }

    /* === Annotation 3: "More information" toggle === */
    .nys-more-info {
      margin-top: var(--nys-space-300);
    }

    .nys-more-info summary {
      font-size: var(--nys-font-size-sm) !important;
      font-weight: var(--nys-font-weight-semibold) !important;
      color: var(--nys-color-link) !important;
      cursor: pointer !important;
      list-style: none !important;
      padding: var(--nys-space-50) 0 !important;
    }

    .nys-more-info summary::-webkit-details-marker {
      display: none !important;
    }

    .nys-more-info summary::before {
      content: '\\25B6' !important;
      display: inline-block !important;
      margin-right: var(--nys-space-100) !important;
      font-size: 0.65em !important;
      transition: transform 0.15s ease !important;
      vertical-align: 1px !important;
    }

    .nys-more-info[open] summary::before {
      transform: rotate(90deg) !important;
    }

    .nys-more-info .nys-more-info__content {
      font-size: var(--nys-font-size-sm) !important;
      color: var(--nys-color-text-weak) !important;
      line-height: var(--nys-font-lineheight-body-sm) !important;
      padding: var(--nys-space-100) 0 !important;
    }

    .nys-more-info .nys-more-info__content b,
    .nys-more-info .nys-more-info__content strong {
      color: var(--nys-color-text) !important;
    }

    /* === Annotation 4: Image caption === */
    #better-nys-login-controls {
      font-family: var(--nys-font-family-sans) !important;
    }

    /* === Links === */
    #contentWrapper a {
      color: var(--nys-color-link) !important;
    }
    #contentWrapper a:hover {
      color: var(--nys-color-link-strong) !important;
    }
    #contentWrapper a:active {
      color: var(--nys-color-link-strongest) !important;
    }

    /* === Footer === */
    #footer, #footerLinks, #copyright {
      font-family: var(--nys-font-family-sans) !important;
    }
  `;
  document.head.appendChild(style);

  // --- DOM Modifications ---

  // Annotation 5: Change title to "New York State / Single Sign On" (two lines)
  const headerTitle = document.querySelector('#header h4');
  if (headerTitle) {
    headerTitle.innerHTML = '<span class="nys-title-large">New York State</span><span class="nys-title-sub">Single Sign On</span>';
  }

  // Annotation 3: Wrap #introduction (legal text on sign-in page) in a toggle
  const intro = document.getElementById('introduction');
  if (intro && intro.textContent.trim().length > 0) {
    const details = document.createElement('details');
    details.className = 'nys-more-info';
    const summary = document.createElement('summary');
    summary.textContent = 'More information';
    const content = document.createElement('div');
    content.className = 'nys-more-info__content';
    while (intro.firstChild) {
      content.appendChild(intro.firstChild);
    }
    details.appendChild(summary);
    details.appendChild(content);
    intro.appendChild(details);
  }

  // Annotation 3: Wrap RSA token instructions (passcode page) in a toggle
  const submitMargin = document.querySelector('.submitMargin');
  if (submitMargin) {
    const children = Array.from(submitMargin.querySelectorAll(':scope > div'));
    const rsaDiv = children.find(
      (div) => div.textContent.includes('RSA') && div.textContent.includes('token')
    );
    if (rsaDiv) {
      const details = document.createElement('details');
      details.className = 'nys-more-info';
      const summary = document.createElement('summary');
      summary.textContent = 'More information';
      const content = document.createElement('div');
      content.className = 'nys-more-info__content';
      while (rsaDiv.firstChild) {
        content.appendChild(rsaDiv.firstChild);
      }
      details.appendChild(summary);
      details.appendChild(content);
      rsaDiv.replaceChildren(details);
      rsaDiv.style.marginTop = '16px';
    }
  }
})();

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