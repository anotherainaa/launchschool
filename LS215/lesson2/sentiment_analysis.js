let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

/*

Input: a long text that needs to be parsed
Output: 
- Log to the terminal 
  . total positive words
  . total negative words
  . the (status) positivity or negativity of the sentiment

Rules
- Parse the text, find the positive words and negative words from within the text
  - then output the analysis of the text. 
- get every single word from the text, compare the word against the words in positive and negative
  - count the positives and negatives 


Questions
- How to handle the lowercase and uppercase character
- commas and seperators 

Data Structure
String => Array => Output to the console some analysis (count of words and status of text)

Algorithm 

- split the text by spaces to get a list of words
- iterate through the words
  - if the word is a positive word, save it in the positive count object
  - if the word is negative, save it in the negative count object
- count the number of positive words and negative words 
- determine whether text is negative or positive
- log the analysis to the console. 


*/


let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let wordList = text.toLowerCase().match(/[a-z']+/g);

  let positives = wordList.filter(word => positiveWords.includes(word));
  let negatives = wordList.filter(word => negativeWords.includes(word));

  let textSentiment;
  let sentimentScore = positives.length - negatives.length
  if (sentimentScore > 0) {
    textSentiment = 'Positive';
  } else if (sentimentScore < 0) {
    textSentiment = 'Negative';
  } else if (sentimentScore === 0) {
    textSentiment = 'Neutral';
  }

  console.log(`There are ${positives.length} words in the text.`);
  console.log(`Positive sentiments: ${positives.join(', ')}` + '\n');
  console.log(`There are ${negatives.length} words in the text.`)
  console.log(`Negative sentiments: ${negatives.join(', ')}` + '\n');
  console.log(`The sentiment of the text is ${textSentiment}.`);
}

sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.