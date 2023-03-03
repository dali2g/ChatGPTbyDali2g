import { ChatGPTAPI } from 'chatgpt';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const prompt = 'Hello, how are you?';
const max_tokens = 3000;
const app = express();
const port = 3000;
const api_key = 'Put Your API key Here';

app.get('/', (req, res) => {
  res.sendFile('C:/Users/dalim/OneDrive/Desktop/ChatGPTbyDali2g/index.html');
});

app.use(express.json());

app.post('/data', async (req, res) => {
  const { input } = req.body;

  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const response = await api.sendMessage(input);
  console.log(response.text);

  res.json({ output: response.text });
});

app.listen(port, () => {
  console.log(`ChatGPT app listening on port ${port} and is present at http://localhost:${port}`);
});
