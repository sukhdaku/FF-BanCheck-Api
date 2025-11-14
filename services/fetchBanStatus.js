const axios = require('axios');

async function fetchBanStatus(uid) {
  const url = `https://ff.garena.com/api/antihack/check_banned?lang=en&uid=${uid}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'authority': 'ff.garena.com',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'referer': 'https://ff.garena.com/en/support/',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'B6FksShzIgjfrYImLpTsadjS86sddhFH'
      }
    });

    const data = response.data.data;
    return {
      ban_status: data.is_banned ? 'true' : 'false'
    };

  } catch (error) {
    return {
      err: 'Somthing went wrong please try again latter.'
    };
  }
}

module.exports = { fetchBanStatus };
