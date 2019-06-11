const QuizQuestions = [
  {
    name: "Question 1",
    question: "Where in the world will you need to use your satellite device?",
    answerKey: [
      {
        phones: ["iridiumGo", "iridium9555", "iridium9575"],
        text: "Literally everywhere",
        choice: false
      },
      {
        phones: ["isatphone", "iridiumGo", "iridium9555", "iridium9575"],
        text: "Only the region I will be travelling to",
        choice: false
      }
    ]
  },
  {
    name: "Question 2",
    question: "How extreme are the conditions in which you will be travelling?",
    answerKey: [
      {
        phones: ["isatphone", "iridiumGo", "iridium9555", "iridium9575"],
        text: "I will need the device to be dust/water proof",
        choice: false
      },
      {
        phones: ["isatphone", "iridiumGo", "iridium9555", "iridium9575"],
        text: "I can keep the device safe from water and dust",
        choice: false
      }
    ]
  },
  {
    name: "Question 3",
    question: "What best describes the environment of your destination?",
    answerKey: [
      {
        phones: ["iridiumGo", "iridium9555", "iridium9575"],
        text: "Mountainous and/or forested",
        choice: false
      },
      {
        phones: ["isatphone", "iridiumGo", "iridium9555", "iridium9575"],
        text: "Open water, desert and/or tundra",
        choice: false
      }
    ]
  },
  {
    name: "Question 4",
    question: "How will you be using your satellite device?",
    answerKey: [
      {
        phones: ["isatphone", "iridiumGo", "iridium9555", "iridium9575"],
        text: "General communication with the outside world and emergencies",
        choice: false
      },
      {
        phones: ["isatphone", "iridiumGo", "iridium9575"],
        text: "For emergencies only",
        choice: false
      }
    ]
  },
];

module.exports = QuizQuestions;
