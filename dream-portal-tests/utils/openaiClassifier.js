import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY  // Set this in your environment
});

export async function classifyDream(dreamName) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'Classify dream descriptions as either "Good" or "Bad". Respond with only "Good" or "Bad".'
      },
      {
        role: 'user',
        content: dreamName
      }
    ],
    temperature: 0.2,
    max_tokens: 5
  });

  return response.choices[0].message.content.trim();
}