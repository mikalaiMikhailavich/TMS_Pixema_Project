export const getFilmNew = async () => {
  const url = `https://api.kinopoisk.dev/v1/movie?page=1&limit=10`;
  const key = "ZAEXZKF-RYRM40B-QRXAV1N-F1JX56B";
  const params = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "X-API-KEY": key,
    },
  };
  const request = new Request(url, params);
  const response = await fetch(request);
  const result = await response.json();
  console.log(result.docs);

  return { data: result.docs };
};

// ZAEXZKF-RYRM40B-QRXAV1N-F1JX56B  pixema site
// 23CT4PJ-SXF4ZFB-NPBY64Q-ENFBSVC  my key
