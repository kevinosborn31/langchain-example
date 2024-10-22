const { translateWithModel } = require('./translator');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter text to translate: ', async (text) => {
  rl.question('Enter target language code (e.g., fr for French): ', async (targetLanguage) => {
    rl.question('Enter model (e.g., nmt for Neural Machine Translation): ', async (model) => {
      try {
        const translatedText = await translateWithModel(text, targetLanguage, model);
        console.log('Translated Text:', translatedText);
      } catch (error) {
        console.error('Translation Error:', error.message);
      } finally {
        rl.close();
      }
    });
  });
});