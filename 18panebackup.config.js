// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "RadioGeek Dashboard";

// Grid layout desired
var layout_cols = 6;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "#000000",
    "satellite.js",
    "undefined",
    null,
    "undefined"
  ],
  [
    "#2196f3",
    "SWPC",
    "https://www.swpc.noaa.gov/",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "Contest Calendar",
    "https://www.contestcalendar.com/weeklycont.php",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    1,
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
    "WX Models",
    "https://weather.cod.edu/forecast/",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "RADAR",
    "https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJsb2NhbCIsImNlbnRlciI6Wy05Ni4yMzIsMzguOTk3XSwibG9jYXRpb24iOm51bGwsInpvb20iOjguMTI2ODc1NzIxODAzODIsImZpbHRlciI6IldTUi04OEQiLCJsYXllciI6InNyX2JyZWYiLCJzdGF0aW9uIjoiS1RXWCJ9LCJhbmltYXRpbmciOmZhbHNlLCJiYXNlIjoic3RhbmRhcmQiLCJhcnRjYyI6ZmFsc2UsImNvdW50eSI6ZmFsc2UsImN3YSI6ZmFsc2UsInJmYyI6ZmFsc2UsInN0YXRlIjpmYWxzZSwibWVudSI6dHJ1ZSwic2hvcnRGdXNlZE9ubHkiOnRydWUsIm9wYWNpdHkiOnsiYWxlcnRzIjowLjgsImxvY2FsIjowLjYsImxvY2FsU3RhdGlvbnMiOjAuOCwibmF0aW9uYWwiOjAuNn19#/",
    1,
    "R"
  ],
  [
    "#2196f3",
    "TIME.IS",
    "https://time.is/",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=39.0217946&lon=-95.6997879&zoom=9",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-95.69,39.02,3000",
    1,
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://www.arrl.org/news/rss",
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
    "RADAR",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "Regional RADAR",
    "https://radar.weather.gov/ridge/standard/KTWX_loop.gif"
  ],
  [
    "Visible Disk",
    "https://umbra.nascom.nasa.gov/images/latest_hmi_igram.gif"
  ],
  [
    "Space Weather",
    "https://services.swpc.noaa.gov/images/swx-overview-small.gif"
  ],
  [
    "",
    "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg"
  ],
  [
    "SATELLITE CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif"
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"
  ],
  [
    "I-470 Fairlawn",
    "https://kscam.carsprogram.org/Image-I470andFairlawn.jpg"
  ],
  [
    "7 Day QPF",
    "https://www.wpc.ncep.noaa.gov/qpf/p168i.gif"
  ],
  [
    "Tornado Outlook",
    "https://www.spc.noaa.gov/products/outlook/day1probotlk_torn.gif"
  ],
  [
    "",
    "https://www.cpc.ncep.noaa.gov/products/predictions/long_range/lead01/off01_temp.gif"
  ],
  [
    "",
    "https://www.cpc.ncep.noaa.gov/products/predictions/long_range/lead01/off01_prcp.gif"
  ],
  [
    "",
    "https://www.weather.gov/images/top/wxstory/Tab2FileL.png"
  ],
  [
    "",
    "https://www.weather.gov/images/top/wxstory/Tab3FileL.png"
  ],
  [
    "",
    "https://www.weather.gov/images/eax/wxstory/Tab4FileL.png"
  ],
  [
    "",
    "https://www.weather.gov/images/eax/wxstory/Tab1FileL.png"
  ],
  [
    "",
    "https://droughtmonitor.unl.edu/data/png/current/current_usdm.png"
  ],
  [
    "",
    "https://www.cpc.ncep.noaa.gov/products/expert_assessment/season_drought.png"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  11200,
  10000,
  11000,
  10100,
  10200,
  10500,
  10300,
  10600,
  30400,
  60700,
  60900,
  60900,
  500000,
  500000,
  500000,
  500000,
  500000,
  500000
];

// CUT END