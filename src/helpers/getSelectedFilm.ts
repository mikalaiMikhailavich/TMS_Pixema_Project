export const getSelectedFilm = async (id: string) => {
  const url = `https://api.kinopoisk.dev/v1/movie/${id}`;
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

  return { data: result };
};
// ZAEXZKF-RYRM40B-QRXAV1N-F1JX56B  pixema site
// 23CT4PJ-SXF4ZFB-NPBY64Q-ENFBSVC  my key
