<h1 align="center">🚫 Free Fire Ban Check API</h1>
<p align="center">
  🔍 A simple yet powerful Node.js API to check if a Free Fire UID is banned or not.<br/>
  🌐 Optimized for Vercel deployment with clean modular structure.
</p>

---

## 📂 Project Structure

```
ban-check-main/
├── controllers/
│   └── banController.js       # Core controller handling ban check logic
├── routes/
│   └── banInfo.js             # Express route for GET /ban-info
├── services/
│   ├── fetchBanStatus.js      # Calls external source for ban status
│   └── fetchPlayerData.js     # Fetches player nickname and details
├── server.js                  # Entry point, sets up Express app
├── vercel.json                # Configuration for Vercel deployment
├── package.json               # Project metadata and dependencies
└── .gitignore                 # Git ignored files
```

---

## 🚀 Features

- ✅ Check Free Fire ban status using UID
- ⚙️ Modular structure: routes, controllers, services
- ⚡ Built with Express.js for speed and simplicity
- ☁️ Deploy-ready for [Vercel](https://vercel.com)
- 🔄 Clean response format with error handling

---

## 📦 Installation

Clone and install dependencies:

```bash
git clone https://github.com/yourusername/ban-check-main.git
cd ban-check-main
npm install
```

---

## ▶️ Usage

Start the server locally:

```bash
node server.js
```

Then visit in your browser or via API client:

```
GET http://localhost:3000/ban-info?uid=123456789
```

---

## 📤 API Endpoint

### `GET /ban-info`

#### Parameters:
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `uid` | string | ✅ Yes | Free Fire Player UID |

#### Example Request:
```bash
curl http://localhost:3000/ban-info?uid=123456789
```

#### Example Response:
```json
{
  "uid": "123456789",
  "nickname": "GamerPro",
  "banStatus": "Not Banned"
}
```

---

## ☁️ Vercel Deployment

Deploy in seconds using Vercel.

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/import)
3. Import your GitHub repository
4. Set build command (if needed): `npm install`
5. Set output: `server.js`
6. Deploy!

📝 Already includes `vercel.json`.

---

## 👨‍💻 Developer Info

- **Language:** Node.js (Express)
- **API Focused:** Clean JSON response
- **Author:** [Sukh Daku]

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙌 Support

For bugs, suggestions, or contributions, feel free to open an issue or submit a pull request.  
**Give a ⭐ on GitHub if you found this helpful!**

