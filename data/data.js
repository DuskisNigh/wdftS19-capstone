const QuizQuestions = [
	{
		name: "Question 1",
		question: "Where in the world will you need to use your satellite device?",
		answerKey: [
			{
				phones: ['iridiumGo','iridium9555','iridium9575'], 
				text: "Literally everywhere",
				choice: false
			},
			{
				phones: ['isatphone','iridiumGo','iridium9555','iridium9575'],
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
				phones: ['isatphone','iridiumGo','iridium9555','iridium9575'],
				text: "I will need the device to be dust/water proof",
				choice: false
			},
			{
				phones: ['isatphone','iridiumGo','iridium9555','iridium9575'],
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
				phones: ['iridiumGo','iridium9555','iridium9575'],
				text: "Mountainous and/or forested",
				choice: false
			},
			{
				phones: ['isatphone','iridiumGo','iridium9555','iridium9575'],
				text: "Open water, desert and/or tundra" ,
				choice: false
			}
		]
	},
{
		name: "Question 4",
		question: "How will you be using your satellite device?",
		answerKey: [
			{
				phones: ['isatphone','iridiumGo','iridium9555','iridium9575'],
				text: "General communication with the outside world and emergencies",
				choice: false
			},
			{
				phones: ['isatphone','iridiumGo','iridium9575'],
				text: "For emergencies only",
				choice: false
			}
		]
	},
	{
		name: "Question 5",
		question: "What will you be mainly using your device for?",
		answerKey: [
			{
				phones: ['iridiumGo'],
				text: "Business use",
				choice: false
			},
			{
				phones: ['isatphone','iridium9555','iridium9575'],
				text: "Personal use",
				choice: false
			}
		]
	},
	{
		name: "Question 6",
		question: "Will you need to send/receive emails?",
		answerKey: [
			{
				phones: ['isatphone','iridium9555','iridium9575'],
				text: "No need for email",
				choice: false
			},
			{
				phones: ['iridiumGo'],
				text: "I will need to send/receive emails",
				choice: false
			}
		]
	},
	{
		name: "Question 7",
		question: "Are your other owned electronic devices of the latest technology?",
		answerKey: [
			{
				phones: ['iridiumGo'],
				text: "Yea, I'm like Tony Stark over here!",
				choice: false
			},
			{
				phones: ['isatphone','iridium9555','iridium9575'],
				text: "No, my current cell phone is a 1992 Nokia 101, so easier to use is better.",
				choice: false
			}
		]
	},
	{
		name: "Question 8",
		question: "Do you require your device to have embedded GPS?",
		answerKey: [
			{
				phones: ['isatphone','iridiumGo','iridium9575'],
				text: "Absolutely",
				choice: false
			},
			{
				phones: ['iridium9555'],
				text: "No thank you, I'll be fine to navigate via my trusty Sunstone here",
				choice: false
			}
		]
	},
	{
		name: "Question 9",
		question: "How many people will be using the device?",
		answerKey: [
			{
				phones: ['isatphone','iridium9555','iridium9575'],
				text: "I will be using it with my by myself.",
				choice: false
			},
			{
				phones: ['iridiumGo'],
				text: "Me and my gang of hooligans!",
				choice: false
			}
		]
	},
	{
		name: "Question 10",
		question: "What is your budget?",
		answerKey: [
			{
				phones: ['isatphone','iridiumGo'],
				text: "Under $1000",
				choice: false
			},
			{
				phones: ['iridium9555','iridium9575'],
				text: "Over $1000",
				choice: false
			}
		]
	},
];

module.exports = QuizQuestions;
