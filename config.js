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
  ENC: {"iter":600000,"salt":"MVkR4KdFyjUfUVhygSo7jg==","iv":"x8HJO9IZtRh2F2e/","data":"mosGoPuaxC0qd5fKsGG/iQpbrR5sAgmvRRBzSw6iCYwyE9jN9Vhp/ASC77rjRHCIoEoAzgy6w1E2CL2PfEc8Qa6eqMuinsmbhgocwxJ8ER46vA9VLyDE565VCVYsooXrdU6Fhk3oNLMxyXqv7eptS0JHjj5qje3pKHrb0YtsXV3mp+CXR8QT++y7mstMJUsegN7xX/FlgmL+8HX3HbU="},
  API_KEY: "",

  REGION: "GB",          // default Trending region (changeable in Settings)
  FEED_CHANNELS: 40      // how many of your most-active subscriptions to build the feed from
};
