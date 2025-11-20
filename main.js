// Ask Spotify for an access token
function getAccessToken() {
  const CLIENT_ID = "945fae205b2a4fea8ef00c0a39807731";
  const CLIENT_SECRET = "1fc32b4709c54f50905fe591dcbfa455";

  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    },
    body: "grant_type=client_credentials",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.access_token;
    });
}

async function getData() {
  const query = document.getElementById("search").value.trim();
  console.log("Searching for:", query);

  const URL = "https://api.spotify.com/v1/search?q=";
  const token = await getAccessToken();

  data = await fetch(URL + encodeURIComponent(query) + "&type=track&limit=6", {
    headers: { Authorization: "Bearer " + token },
  })
    .then((response) => response.json())
    .then((response) => displayData(response));
}

function displayData(response) {
  const placeholder = document.getElementById("placeholder");
  placeholder.style.display = "none"; // hide placeholder

  // Fill in 6 song cards with data from Spotify
  // Remember to start from an index of 0!
  const song_name_0 = response.tracks.items[0].name;
  const artist_name_0 = response.tracks.items[0].artists[0].name;
  const album_img_0 = response.tracks.items[0].album.images[0].url;
  document.getElementById("song_name_0").textContent = song_name_0;
  document.getElementById("artist_name_0").textContent = artist_name_0;
  document.getElementById("album_img_0").src = album_img_0;
  const link_0 = document.getElementById("link_0");
  link_0.href = response.tracks.items[0].external_urls.spotify;

  // Repeated for each of the 6 tracks (track_1 → track_5)
  const song_name_1 = response.tracks.items[1].name;
  const artist_name_1 = response.tracks.items[1].artists[0].name;
  const album_img_1 = response.tracks.items[1].album.images[0].url;
  document.getElementById("song_name_1").textContent = song_name_1;
  document.getElementById("artist_name_1").textContent = artist_name_1;
  document.getElementById("album_img_1").src = album_img_1;
  const link_1 = document.getElementById("link_1");
  link_1.href = response.tracks.items[1].external_urls.spotify;

  const song_name_2 = response.tracks.items[2].name;
  const artist_name_2 = response.tracks.items[2].artists[0].name;
  const album_img_2 = response.tracks.items[2].album.images[0].url;
  document.getElementById("song_name_2").textContent = song_name_2;
  document.getElementById("artist_name_2").textContent = artist_name_2;
  document.getElementById("album_img_2").src = album_img_2;
  const link_2 = document.getElementById("link_2");
  link_2.href = response.tracks.items[2].external_urls.spotify;

  const song_name_3 = response.tracks.items[3].name;
  const artist_name_3 = response.tracks.items[3].artists[0].name;
  const album_img_3 = response.tracks.items[3].album.images[0].url;
  document.getElementById("song_name_3").textContent = song_name_3;
  document.getElementById("artist_name_3").textContent = artist_name_3;
  document.getElementById("album_img_3").src = album_img_3;
  const link_3 = document.getElementById("link_3");
  link_3.href = response.tracks.items[3].external_urls.spotify;

  const song_name_4 = response.tracks.items[4].name;
  const artist_name_4 = response.tracks.items[4].artists[0].name;
  const album_img_4 = response.tracks.items[4].album.images[0].url;
  document.getElementById("song_name_4").textContent = song_name_4;
  document.getElementById("artist_name_4").textContent = artist_name_4;
  document.getElementById("album_img_4").src = album_img_4;
  const link_4 = document.getElementById("link_4");
  link_4.href = response.tracks.items[4].external_urls.spotify;

  const song_name_5 = response.tracks.items[5].name;
  const artist_name_5 = response.tracks.items[5].artists[0].name;
  const album_img_5 = response.tracks.items[5].album.images[0].url;
  document.getElementById("song_name_5").textContent = song_name_5;
  document.getElementById("artist_name_5").textContent = artist_name_5;
  document.getElementById("album_img_5").src = album_img_5;
  const link_5 = document.getElementById("link_5");
  link_5.href = response.tracks.items[5].external_urls.spotify;

  // Finally, show the results section
  document.getElementById("parent").style.display = "";
}
