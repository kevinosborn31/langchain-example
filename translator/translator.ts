const langchain = require('langchain');
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({
  projectId: process.env.GOOGLE_TRANSLATE_KEY,
});

async function translateText(text, targetLanguage, model) {
    const preprocessedText = langchain.preprocess(text);
    const [translation] = await translate.translate(preprocessedText, {
      targetLanguage,
      model,
    });
    return translation;
}

module.exports = { translateText };