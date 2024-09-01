////////////////////////////////////////////
// Variables
////////////////////////////////////////////

// - Array to store quote reference numbers that are in use
let inUseReferenceNumbers = [];
// - Array to store quote reference numbers that have been assigned
let assignedQuoteReferenceNumbers = [];
// -- Array to store quote reference numbers that have been called
let calledQuoteReferenceNumbers = [];
// - Array to store quotes
let inspirationalQuotesList = [];

////////////////////////////////////////////
// Functions
////////////////////////////////////////////

// - Generate new reference numbers
const generateQuoteReference = () => {
  //console.log("Generating quote reference number...");
  // Generate a random number between 1 and 1000 (inclusive)
  let referenceNumber = Math.floor(Math.random() * 1000) + 1;
  // Ensure number is not already used, keep generating until unique number is made
  while (inUseReferenceNumbers.includes(referenceNumber)) {
    referenceNumber = Math.floor(Math.random() * 1000) + 1;
  }
  // Add reference number to reference number array
  inUseReferenceNumbers.push(referenceNumber);
  // Return reference number
  //console.log("Quote reference number generated successfully!");
  return referenceNumber;
};

// - Generate a random index number
const randomIndexGenerator = (arr) => {
  //console.log("Generating a random index...");
  let randomIndex = Math.floor(Math.random() * arr.length);
  //console.log("Random index generated");
  return randomIndex;
};

// - Pick an unused reference number
const unusedQuoteReferenceNumber = () => {
  //console.log("Finding a quote reference number that hasn't been used");
  let randomIndex = randomIndexGenerator(inUseReferenceNumbers);
  let newReferenceNumber = inUseReferenceNumbers[randomIndex];
  while (assignedQuoteReferenceNumbers.includes(newReferenceNumber)) {
    randomIndex = randomIndexGenerator(inUseReferenceNumbers);
    //console.log("I had to check more than one reference");
    newReferenceNumber = inUseReferenceNumbers[randomIndex];
  }
  //console.log("Unused quote reference number found");
  assignedQuoteReferenceNumbers.push(newReferenceNumber);
  return newReferenceNumber;
};

// - Generate additional quote objects
const quoteFactory = (author, quote) => {
  //console.log("Adding quote object...");
  //console.log("Quote object added");
  generateQuoteReference();
  const newReferenceNumber = unusedQuoteReferenceNumber();
  //console.log(`newReferenceNumber: ${newReferenceNumber}`);
  return {
    referenceNumber: newReferenceNumber,
    author,
    quote,
  };
};

// - Generate a new quote reference that hasn't been used
const getUnusedQuoteReference = () => {
  let randomIndex = randomIndexGenerator(assignedQuoteReferenceNumbers);
  let noMoreQuotes = false;
  while (
    calledQuoteReferenceNumbers.includes(
      assignedQuoteReferenceNumbers[randomIndex]
    )
  ) {
    randomIndex = randomIndexGenerator(assignedQuoteReferenceNumbers);
    if (
      assignedQuoteReferenceNumbers.length ===
      calledQuoteReferenceNumbers.length
    ) {
      noMoreQuotes = true;
      break;
    }
  }
  if (noMoreQuotes) {
    console.log("All quotes have been called.");
  } else {
    calledQuoteReferenceNumbers.push(
      assignedQuoteReferenceNumbers[randomIndex]
    );
    return assignedQuoteReferenceNumbers[randomIndex];
  }
};

// - Retrieve unused quote
const getQuote = () => {
  const referenceNumber = getUnusedQuoteReference();
  const quote = inspirationalQuotesList.find(
    (quote) => quote.referenceNumber === referenceNumber
  );
  return quote;
};

////////////////////////////////////////////
// Objects
////////////////////////////////////////////

//- Create an object to store the username
const username = {
  _firstName: "Ryan",
  _lastName: "",
  get username() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else if (this._firstName && !this._lastName) {
      return this._firstName;
    } else {
      return "No username set";
    }
  },
  set firstName(firstName) {
    if (typeof firstName === "string" && firstName.trim() !== "") {
      this._firstName = firstName;
    } else {
      console.log("Invalid firstName. Please enter a non-empty string.");
    }
  },
  set lastName(lastName) {
    if (typeof lastName === "string" && lastName.trim() !== "") {
      this._lastName = lastName;
    } else {
      console.log("Invalid lastName. Please enter a non-empty string.");
    }
  },
  setUsername(firstName, lastName) {
    if (typeof firstName === "string" && firstName.trim() !== "") {
      this._firstName = firstName;
    } else {
      console.log("Invalid firstName. Please enter a non-empty string.");
    }
    if (typeof lastName === "string" && lastName.trim() !== "") {
      this._lastName = lastName;
    } else {
      this._lastName = "";
      console.log(
        "Invalid lastName. lastName set to empty string, please use .lastName() to set last name if required"
      );
    }
  },
};

// - Create an object with inspirational quotes
const inspirationalQuotes = {
  referenceNumber: 0,
  author: "",
  quote: "",
};

////////////////////////////////////////////
// Run Program
////////////////////////////////////////////
inspirationalQuotesList.push(
  quoteFactory(
    "Confucius",
    "It does not matter how slowly you go as long as you do not stop"
  ),
  quoteFactory(
    "Nelson Mandela",
    "The greatest glory in living lies not in never falling, but in rising every time we fall."
  ),
  quoteFactory("Winston Churchill", "Never, never, never give up."),
  quoteFactory(
    "Walt Disney",
    "The way to get started is to quit talking and begin doing."
  ),
  quoteFactory(
    "Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
  ),
  quoteFactory(
    "Eleanor Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams."
  ),
  quoteFactory(
    "Oprah Winfrey",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
  ),
  quoteFactory(
    "James Cameron",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
  ),
  quoteFactory(
    "John Lennon",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
  )
);


const quoteOfTheDay = getQuote();
const quoteOfTheWeek = getQuote();
const quoteOfTheMonth = getQuote();
const quoteOfTheYear = getQuote();
const quoteOfTheDecade = getQuote();
const quoteOfTheCentury = getQuote();
const quoteOfTheMillenium = getQuote();

const quotes = [
  `Your quote of the day: \"${quoteOfTheDay.quote}\" - ${quoteOfTheDay.author}`,
  `Your quote of the week: \"${quoteOfTheWeek.quote}\" - ${quoteOfTheWeek.author}`,
  `Your quote of the month: \"${quoteOfTheMonth.quote}\" - ${quoteOfTheMonth.author}`,
  `Your quote of the year: \"${quoteOfTheYear.quote}\" - ${quoteOfTheYear.author}`,
  `Your quote of the decade: \"${quoteOfTheDecade.quote}\" - ${quoteOfTheDecade.author}`,
  `Your quote of the century: \"${quoteOfTheCentury.quote}\" - ${quoteOfTheCentury.author}`,
  `Your quote of the millenium: \"${quoteOfTheMillenium.quote}\" - ${quoteOfTheMillenium.author}`
]

if (username._firstName) {
  console.log(`Hello, ${username.username}!`)
  for (const quote of quotes) {
    console.log(quote);
  }
} else {
  for (const quote of quotes) {
    console.log(quote);
  }
};
