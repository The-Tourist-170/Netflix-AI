export const logo = 
                "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const userAvatar = "https://occ-0-3213-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTxc7dpS6C6YkcEN01dVmTda3IGQUeuNuiRkhv-3OeivfHr8MpBRo5B6sI58Z5jzNeVtBjSAsQ8hTrNj0MQrD301ZDNeDnSPBA.png?r=85b";

export const api_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
  }
};

export const gemini_api_key = process.env.REACT_APP_AI_KEY;

export const bgUrl = "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg";
export const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const popularUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const img_cdn_url = "https://image.tmdb.org/t/p/w780";