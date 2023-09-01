const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi({
  clientId: "9665e9480d774c13ba0ab7813c4a9392",
  clientSecret: "0bd5e142473d41318e46f164afab264f",
});
function playTrack(trackUri, accessToken) {
  spotifyApi.setAccessToken(accessToken);
  spotifyApi
    .play({ uris: [trackUri] })
    .then(() => {
      console.log("Memutar :", trackUri);
    })
    .catch((error) => {
      console.error("Pesan error :", error);
    });
}
const trackUri =
  "https://open.spotify.com/track/26cvTWJq2E1QqN4jyH2OTU?si=54e8e62912b741c2";
const accessToken =
  "BQAZGo8k2VkpIaqiy7lMbXmHYNvrW_lxvM747OZF5lAyDs-PJZ9xu56kO9n5Q8AOJPCckuCRtlprpR2iIw8U6V7_wlVo7puUFitUanZyV2PauioGbwo";
playTrack(trackUri, accessToken);
