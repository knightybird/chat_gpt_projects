import {Configuration, OpenAIApi} from 'openai';

export default async function handler(req, res) {
  const config = new Configuration({
    apiKey: process.env.OPEN_API_KEY
  });
  const openai = new OpenAIApi(config);


  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    temperature: 0.2,
    max_tokens: 3600,
    prompt: `Generate a detailed SVG of an owl with wings.`
  });



  console.log("response ", response);
  res.status(200).json({ post: response.data.choices[0]?.text.split("\n").join('') });

}
