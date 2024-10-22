import langchain from "langchain";

const langchainExample = async () => {
  try {
    // Text tokenization
    const text = "LangChain makes NLP easy!";
    const tokens = langchain.tokenize(text);
    console.log(tokens);

    // Part of speech tagging
    const sentence = "LangChain is an amazing tool.";
    const posTags = langchain.posTag(sentence);

    console.log(posTags);

    // Named entity recognition
    const nerText =
      "Apple Inc. was founded by Steve Jobs in Cupertino on April 1, 1976.";
    const entities = langchain.ner(nerText);

    console.log(entities);

    // Sentiment analysis
    const review = "The movie was fantastic!";
    const sentiment = langchain.sentiment(review);

    console.log(sentiment);

    // Language translation
    const textToTranslate = "Hello, how are you?";
    const translatedText = langchain.translate(textToTranslate, "fr"); // Translate to French

    console.log(translatedText);

    // Speech-to-Text
    const audioFile = "path/to/audiofile.wav";
    const transcript = langchain.speechToText(audioFile);

    console.log(transcript);

    // Text-to-Speech
    const textToSpeak = "Welcome to LangChain.";
    langchain.textToSpeech(textToSpeak, "en"); // Convert text to English speech

  } catch (error) {
    console.error("Error initializing LangChain:", error);
  }
};

langchainExample();
