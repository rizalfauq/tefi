const SpotifyWebApi = require("spotify-web-api-node");
const clientId = "9665e9480d774c13ba0ab7813c4a9392";
const clientSecret = "0bd5e142473d41318e46f164afab264f";
const redirectUri = "http://localhost:8888/callback";

const accessToken =
  "BQAZGo8k2VkpIaqiy7lMbXmHYNvrW_lxvM747OZF5lAyDs-PJZ9xu56kO9n5Q8AOJPCckuCRtlprpR2iIw8U6V7_wlVo7puUFitUanZyV2PauioGbwo";
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri,
  accessToken: accessToken,
});
const trackId = "26cvTWJq2E1QqN4jyH2OTU";
spotifyApi
  .getAudioAnalysisForTrack(trackId)
  .then((data) => {
    console.log("Audio Analysis:");
    const segments = data.body.segments.slice(0, 5);
    segments.forEach((segment, index) => {
      console.log(`Segment ${index + 1}:`);
      console.log(`  Start: ${segment.start}`);
      console.log(`  Duration: ${segment.duration}`);
      console.log(`  Loudness Start: ${segment.loudness_start}`);
      console.log(`  Loudness Max Time: ${segment.loudness_max_time}`);
      console.log(`  Loudness Max: ${segment.loudness_max}`);
      console.log("");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
const options = {
  seed_tracks: ["26cvTWJq2E1QqN4jyH2OTU"],
  limit: 5,
};
spotifyApi
  .getRecommendations(options)
  .then((data) => {
    const recommendedTracks = data.body.tracks;
    console.log("Rekomendasi : ");
    recommendedTracks.slice(0, 5).forEach((track, index) => {
      console.log(`${index + 1}. ${track.name} - ${track.artists[0].name}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
