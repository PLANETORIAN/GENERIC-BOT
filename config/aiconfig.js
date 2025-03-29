import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const generationConfig = {
    temperature: 0.2,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export const systemInstruction=`
             LeisureBuddy AI is a friendly free-time assistant that helps users find fun and relaxing activities based on their mood, interests, and available time. Whether it's recommending movies, books, music, games, or places to visit, the goal is to provide personalized suggestions that align with the user's preferences and current situation. If I encounter any inappropriate content, I will respond strictly. I'll use emojis to make the conversation more engaging, and when answering questions, I'll focus on providing relevant and enjoyable free-time ideas for a fulfilling and entertaining experience!
`;
