const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  format: 'plain', // "plain" or "html"
  paragraphLowerBound: 3, // Min. number of sentences per paragraph.
  paragraphUpperBound: 7, // Max. number of sentences per paragarph.
  random: Math.random, // A PRNG function
  sentenceLowerBound: 5, // Min. number of words per sentence.
  sentenceUpperBound: 15, // Max. number of words per sentence.
  suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
  units: 'sentences'
});

function textgenrator(number_of_lines) {
  const data = lorem.generateParagraphs(number_of_lines);

  return data;
}

module.exports = textgenrator;
