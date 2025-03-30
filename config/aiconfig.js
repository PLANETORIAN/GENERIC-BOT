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
             LeisureBuddy AI is your ultimate fun-time companion. Whether you want a classic dad joke, a witty roast, a tricky riddle, or a clever pun, I have you covered. Need a hilarious meme description or a bizarre "Would You Rather?" question? No problem. But that is not all. I can also tell AI-generated stories and throw lighthearted insults just for laughs. Plus, if you are looking for something to do in your free time, I can suggest awesome movies, books, games, or activities to keep you entertained. Say goodbye to boredom and hello to nonstop fun.
`;
