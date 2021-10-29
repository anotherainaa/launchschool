let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

/*

Input: text to parse
Output: Logging two piece of info -- 1) longest sentence 2) word count for longest sentence

Rules:
- Given a long text, split them into sentences and find the longest sentence. 
- A sentence may end with '.', '?' or '!' 
- A sentence always begins with a word character
- Any sequence of characters that are not spaces or sentence-ending characters should be treated like a word
  - For example
    - double dashes '--'

Questions
How do we separate the sentences? 
- The non regex way?
- What is the best regex to do this? 
  - Starting with capital letter in the beginning,
    . match everything until I reach the end of the sentence . or ? or !. 

Algortihm
- from the given text, separate the sentences 
- get the word count for each sentence
- get the index of the longest sentece
- log the longest sentence using the index above
- log the word count. 


getlongest
*/

function longestSentence(text) {
  let sentences = text.match(/([A-Z][^\.!?]*[\.!?])/g);

  let wordCounts = sentences.map(sentence => sentence.split(" ").length);
  let longestWordCount = Math.max(...wordCounts);
  let longestSentenceIdx = wordCounts.indexOf(longestWordCount);

  console.log(sentences[longestSentenceIdx]);
  console.log('');
  console.log(`The longest sentence has ${longestWordCount} words.`);
}

longestSentence(longText);


longestSentence("I!");

longestSentence("To be or not to be? The brown fox is superlative!");
