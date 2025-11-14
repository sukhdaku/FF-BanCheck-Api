const { fetchPlayerData } = require('../services/fetchPlayerData');
const { fetchBanStatus } = require('../services/fetchBanStatus');

async function getBanInfo(req, res) {
  const uid = req.query.uid;
  if (!uid) return res.status(400).json({ error: "UID parameter is required" });

  try {
    const player = await fetchPlayerData(uid);
    if (!player.nikname) return res.status(404).json({ error: "ID NOT FOUND ( Ban controller )" });

    const ban = await fetchBanStatus(uid);
    res.json({ ...player, ...ban });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getBanInfo };
