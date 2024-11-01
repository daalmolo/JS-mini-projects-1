const quotes = [
  "Without music, life would be a mistake.",
  "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
  "That which does not kill us makes us stronger.",
  "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
  "And those who were seen dancing were thought to be insane by those who could not hear the music.",
  "It is hard enough to remember my opinions, without also remembering my reasons for them!",
  "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
  "There is always some madness in love. But there is also always some reason in madness.",
  "You must have chaos within you to give birth to a dancing star.",
  "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.",
  "Sometimes people don't want to hear the truth because they don't want their illusions destroyed.",
  "He who has a why to live for can bear almost any how.",
  "In heaven, all the interesting people are missing.",
  "There are no facts, only interpretations.",
  "The man of knowledge must be able not only to love his enemies but also to hate his friends.",
  "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
  "hen we are tired, we are attacked by ideas we conquered long ago.",
  "We should consider every day lost on which we have not danced at least once.",
  "I cannot believe in a God who wants to be praised all the time.",
  "The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.",
  "In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.",
];

const usedIndexes = new Set();
const quoteTag = document.getElementsByClassName("quotes__paragraph")[0];

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const quoteIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(quoteIdx)) continue;

    const quote = quotes[quoteIdx];
    quoteTag.innerHTML = quote;
    usedIndexes.add(quoteIdx);

    break;
  }
}
