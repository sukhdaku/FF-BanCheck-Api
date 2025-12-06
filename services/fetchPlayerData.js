const axios = require('axios');
const { fetchBanStatus } = require('./fetchBanStatus');

function convertTimestampToDate(timestamp) {
  if (!timestamp || timestamp === "0") return "N/A";

  const ts = parseInt(timestamp, 10);
  if (isNaN(ts)) return "N/A";

  // detect ms vs s
  const date = ts > 1e12 ? new Date(ts) : new Date(ts * 1000);

  const pad = n => String(n).padStart(2, '0');

  return `${pad(date.getDate())}/${pad(date.getMonth()+1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function extractPlayerObject(respData) {
  if (!respData) return null;

  const candidates = [
    respData.data?.player_info,
    respData.data?.playerData,
    respData.data?.player,
    respData.playerData,
    respData.player_info,
    respData.player,
    respData.data,
    respData
  ];

  for (const obj of candidates) {
    if (obj && typeof obj === 'object' && Object.keys(obj).length > 0) {
      return obj;
    }
  }

  return null;
}

async function fetchPlayerData(uid) {
  if (!uid) throw new Error("UID required!");

  try {
    const response = await axios.get(`https://info-wotaxxdev-api.vercel.app/info?uid=${uid}`, {
      timeout: 7000
    });

    const respData = response.data;
    const playerData = extractPlayerObject(respData);

    if (!playerData) {
      throw new Error("ID NOT FOUND (F player data)");
    }

    const banInfo = await fetchBanStatus(uid);

    // ban date logic
    let banDate = "N/A";
    if (banInfo?.ban_status === "true") {
      const rawBanDate = playerData.last_login || playerData.lastLoginAt || null;
      banDate = convertTimestampToDate(rawBanDate);
    }

    // FINAL CLEAN OUTPUT (no extra fields)
    return {
      nikname: playerData.nickname || playerData.nikname || 'N/A',
      level: playerData.level || 'N/A',
      region: playerData.region || 'N/A',
      ban_status: banInfo?.ban_status || 'false',
      ban_date: banDate
    };

  } catch (err) {
    throw new Error(err.message || "Failed to fetch player data");
  }
}

module.exports = { fetchPlayerData };



