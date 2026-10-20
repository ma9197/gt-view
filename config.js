/*
  GlassTube configuration
  -----------------------
  ENC
    The Google OAuth client ("TVs and Limited Input devices") CLIENT_ID and CLIENT_SECRET,
    encrypted with the app password (see gate.js). Made by lock.mjs, kept outside this repo.

  API_KEY (optional)
    A YouTube Data API v3 key. Only needed for "Browse without signing in".
*/
window.GT_CONFIG = {
  ENC: {"iter":600000,"salt":"/POxtKaNGUoCT/pxw6s8kw==","iv":"9IzYFB28PV4jO6nR","data":"zVr99LKGkFbUWeQacR/rSl3sbTiKZYc7aP0TtDEWs2Ln4iXB+A/MFb2yThNSxZpF8ACPpwcz4G5QXi6/Z92vXVfZOaXo7OSb3NygqquCY8pqRTY+yiVmNiDJ/b/m2xXoBoYYSsZsTXjg+K2HSvnCjYrU6xkTLBh9DXYGmS6RP2fOIl52YjZyNG9frWGJ6skBfJn0IOER7ikkVc7llCk="},
  API_KEY: "",

  REGION: "GB",          // default Trending region (changeable in Settings)
  FEED_CHANNELS: 40      // how many of your most-active subscriptions to build the feed from
};
