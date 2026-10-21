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
  ENC: {"iter":600000,"salt":"USJbsCrcQKrfsFPpnxb4wA==","iv":"qYlqegcr/2ZpeUYV","data":"gQDxubefBq/QPLt1xbIvyFXUzt+ER/0xh6GpNfG3XXukrocN32Wr2WigFiLGcj5copKg6FOsrIX1/kcAv6CR5DR59hi6PxrWL9aSCgwEm/SPNoGV1Ie3ubyRXO23YLn7D8iyDXgAb/BAL0/bPaT3kDZlfRsHpW0L3oUKlV0mBKWOqDYV3y7mYF7KafMdJzMGcR8F5ojdtihSR2MDU/o="},
  API_KEY: "",

  REGION: "GB",          // default Trending region (changeable in Settings)
  FEED_CHANNELS: 40      // how many of your most-active subscriptions to build the feed from
};
