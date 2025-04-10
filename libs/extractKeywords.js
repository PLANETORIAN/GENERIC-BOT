import nlp from "compromise";
const stopWords = new Set([
    "dad jokes",
    "puns",
    "wordplay",
    "one-liners",
    "cheesy jokes",
    "corny jokes",
    "bad jokes",
    "lame jokes",
    "dad humor",
    "clean jokes",
    "silly jokes",
    "funny puns",
    "groan-worthy",
    "cringe jokes",
    "classic jokes",
    "family humor",
    "wholesome jokes",
    "eye-roll jokes",
    "funny quotes",
    "short jokes",
    "animal jokes",
    "food jokes",
    "work jokes",
    "school jokes",
    "sports jokes",
    "tech jokes",
    "history jokes",
    "music jokes",
    "science jokes",
    "math jokes",
    "movie jokes",
    "book jokes",
    "weather jokes",
    "holiday jokes",
    "travel jokes",
    "coffee jokes",
    "relationship jokes",
    "marriage jokes",
    "kids jokes",
    "grandpa jokes",
    "random jokes",
    "dad wisdom",
    "everyday humor",
    "classic puns",
    "silly puns",
    "bad puns",
    "riddles",
    "brain teasers",
    "puzzle games",
    "tricky riddles",
    "fun riddles",
    "logic puzzles",
    "word riddles",
    "math riddles",
    "mystery riddles",
    "who am I",
    "what am I",
    "lateral thinking",
    "clever questions",
    "mind games",
    "riddle master",
    "escape room",
    "brainteasers",
    "hard riddles",
    "easy riddles",
    "funny riddles",
    "short riddles",
    "long riddles",
    "trick questions",
    "logic riddles",
    "detective riddles",
    "hidden clues",
    "thinking games",
    "problem solving",
    "riddle challenge",
    "impossible riddles",
    "wordplay riddles",
    "mystery puzzles",
    "history riddles",
    "science riddles",
    "kids riddles",
    "classic riddles",
    "number puzzles",
    "math puzzles",
    "cunning riddles",
    "roasts",
    "witty comebacks",
    "sarcastic humor",
    "dark humor",
    "savage replies",
    "insult jokes",
    "funny insults",
    "lighthearted burns",
    "comedy roast",
    "playful teasing",
    "brutal roasts",
    "friendly banter",
    "clever insults",
    "savage jokes",
    "roast battles",
    "mockery humor",
    "quick comebacks",
    "sarcasm jokes",
    "edgy humor",
    "snarky remarks",
    "humorous taunts",
    "satirical jokes",
    "sassy roasts",
    "roasting session",
    "roast me",
    "brutal burns",
    "epic insults",
    "mean jokes",
    "savage one-liners",
    "dark comedy",
    "roast-worthy lines",
    "cutting wit",
    "comedic insults",
      "would you rather",
        "this or that",
        "fun dilemmas",
        "tough choices",
        "weird questions",
        "hypothetical choices",
        "decision game",
        "hard choices",
        "funny choices",
        "impossible decisions",
        "quirky dilemmas",
        "strange scenarios",
        "challenging questions",
        "either or game",
        "ultimate choices",
        "odd questions",
        "awkward decisions",
        "crazy options",
        "wild scenarios",
        "fun party game",
        "mind-bending choices",
        "hilarious dilemmas",
        "ridiculous questions",
        "deep thought questions",
        "playful debates",
        "entertaining choices",
        "tricky questions",
        "storytelling",
        "fiction",
        "narratives",
        "folktales",
        "fairy tales",
        "myths",
        "legends",
        "bedtime stories",
        "epic tales",
        "classic literature",
        "fantasy stories",
        "mystery stories",
        "horror stories",
        "sci-fi stories",
        "historical fiction",
        "drama stories",
        "romantic tales",
        "adventure stories",
        "moral stories",
        "fables",
        "parables",
        "urban legends",
        "short stories",
        "novels",
        "novellas",
        "comic stories",
        "mythological tales",
        "ghost stories",
        "supernatural stories",
        "thriller stories",
        "dystopian fiction",
        "literary fiction",
        "crime stories",
        "whimsical tales",
        "psychological stories",
        "imaginative storytelling",
        "movies",
    "film industry",
    "cinema",
    "movie night",
    "blockbusters",
    "indie films",
    "film reviews",
    "movie genres",
    "streaming services",
    "classic films",
    "cult classics",
    "binge-watching",
    "animated films",
    "Oscar winners",
    "thriller movies",
    "comedy movies",
    "horror films",
    "sci-fi movies",
    "action films",
    "romantic movies",
    "musicals",
    "documentaries",
    "short films",
    "directors",
    "screenwriting",
    "cinematography",
    "special effects",
    "soundtracks",
    "film festivals",
    "bestselling books",
    "book reading",
    "libraries",
    "novels",
    "fiction books",
    "non-fiction",
    "bookstores",
    "fantasy books",
    "mystery novels",
    "sci-fi books",
    "graphic novels",
    "audiobooks",
    "poetry books",
    "self-help books",
    "literary classics",
    "historical fiction",
    "thriller novels",
    "young adult books",
    "biographies",
    "memoirs",
    "manga",
    "light novels",
    "gaming",
    "PC games",
    "console gaming",
    "mobile games",
    "arcade games",
    "VR gaming",
    "indie games",
    "multiplayer games",
    "strategy games",
    "board games",
    "card games",
    "role-playing games",
    "puzzle games",
    "adventure games",
    "open-world games",
    "simulation games",
    "shooter games",
    "horror games",
    "racing games",
    "sports games",
    "sandbox games",
    "MMORPG",
    "battle royale",
    "retro games",
    "eSports",
    "game streaming",
    "speedrunning",
    "dad joke",
    "corny humor",
    "pun jokes",
    "sarcasm",
    "burn jokes",
    "playful jabs",
    "dark comedy",
    "what am I riddle",
    "math puzzle",
    "lateral puzzle",
    "impossible puzzle",
    "logic brainteaser",
    "critical thinking",
    "mind challenge",
    "burn lines",
    "comedic roasting",
    "funny burns",
    "verbal jabs",
    "sassy remarks",
    "mock battles",
    "epic clapbacks",
    "either-or",
    "dilemma game",
    "hypothetical question",
    "forced choice",
    "thought experiments",
    "daring choices",
    "weird scenarios",
    "flash fiction",
    "microfiction",
    "fantasy epic",
    "detective fiction",
    "horror anthology",
    "suspense stories",
    "mythical tales",
    "folklore",
    "box office",
    "game adaptation",
    "literary adaptation",
    "cinematic universe",
    "interactive fiction",
    "retro gaming",
    "game mechanics",
    "gamer community",
    "immersive experience",
    "narrative-driven games",
    "visual storytelling"
    
]

);

export default function extractKeywords(sentence) {
    const doc = nlp(sentence);
    const terms = doc.terms().out("array");
    const keywords = terms.filter((word) => !stopWords.has(word.toLowerCase()));
    return keywords;
}