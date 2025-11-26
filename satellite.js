// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "WX Story Dashboard";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 2;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "#000000",
    "config.js",
    "undefined",
    null,
    "undefined"
  ],
  [
    "#2196f3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    1,
    "R"
  ],
  [
    "#2196f3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDY",
    "https://embed.windy.com/embed2.html?lat=44.01&lon=-79.45&width=900&detailLat=44.01&detailLon=-79.45&height=600&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1",
    1,
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://weather.gc.ca/rss/battleboard/onrm28_e.xml",
    60
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "TOP Tab 1",
    "https://www.weather.gov/images/top/wxstory/Tab1FileL.png"
  ],
  [
    "TOP Tab 2",
    "https://www.weather.gov/images/top/wxstory/Tab2FileL.png"
  ],
  [
    "TOP Tab 3",
    "https://www.weather.gov/images/top/wxstory/Tab3FileL.png"
  ],
  [
    "TOP Tab 4",
    "https://www.weather.gov/images/top/wxstory/Tab4FileL.png"
  ],
  [
    "EAX Tab 1",
    "https://www.weather.gov/images/eax/wxstory/Tab1FileL.png"
  ],
  [
    "EAX Tab 2",
    "https://www.weather.gov/images/eax/wxstory/Tab2FileL.png"
  ],
  [
    "EAX Tab 3",
    "https://www.weather.gov/images/eax/wxstory/Tab3FileL.png"
  ],
  [
    "EAX Tab 4",
    "https://www.weather.gov/images/eax/wxstory/Tab4FileL.png"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  60100,
  60200,
  300300,
  60400,
  5000,
  5000,
  5000,
  5000
];

// CUT END