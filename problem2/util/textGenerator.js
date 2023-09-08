const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function textgenrator(number_of_lines) {
  const data = lorem.generateSentences(number_of_lines);

  return data;
}

module.exports = textgenrator;
