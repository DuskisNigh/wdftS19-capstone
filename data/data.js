const QuizQuestions = [
	{
		type: "radiogroup",
		name: "question1",
		question: "Where in the world will you need to use your satellite device?",
		choices: [
			{
				value1: [2,3,4], 
				text1: "Literally everywhere"
			},
			{
				value2: [1,2,3,4],
				text2: "Only the region I will be travelling to"
			}
		]
	},
	{
		type: "radiogroup",
		name: "question2",
		question: "How extreme are the conditions in which you will be travelling?",
		choices: [
			{
				value1: [1,2,3,4],
				text1: "I will need the device to be dust/water proof"
			},
			{
				value2: [1,2,3,4],
				text2: "I can keep the device safe from water and dust"
			}
		]
	},
	{
		type: "radiogroup",
		name: "question3",
		question: "What best describes the environment of your destination?",
		choices: [
			{
				value1: [2,3,4],
				text1: "Mountainous and/or forested"
			},
			{
				value2: [1,2,3,4],
				text2: "Open water, desert and/or tundra" 
			}
		]
	},
{
		type: "radiogroup",
		name: "question4",
		question: "How will you be using your satellite device?",
		choices: [
			{
				value1: [1,2,3,4],
				text1: "General communication with the outside world and emergencies"
			},
			{
				value2: [1,2,4],
				text2: "For emergencies only"
			}
		]
	},
	{
		type: "radiogroup",
		name: "question5",
		question: "What will you be mainly using your device for?",
		choices: [
			{
				value1: [2],
				text1: "Business use"
			},
			{
				value2: [1,3,4],
				text2: "Personal use"
			}
		]
	},
	{
		type: "radiogroup",
		name: "question6",
		question: "Will you need to send/receive emails?",
		choices: [
			{
				value1: [1,3,4],
				text1: "No need for email"
			},
			{
				value2: [2],
				text2: "I will need to send/receive emails"
			}
		]
	},
	{
		type: "radiogroup",
		name: "question7",
		question: "Are your other owned electronic devices of the latest technology?",
		choices: [
			{
				value1: [2],
				text1: "Yea, I'm like Tony Stark over here!"
			},
			{
				value2: [1,3,4],
				text2: "No, my current cell phone is a 1992 Nokia 101, so easier to use is better."
			}
		]
	},
	{
		type: "radiogroup",
		name: "question8",
		question: "Do you require your device to have embedded GPS?",
		choices: [
			{
				value1: [1,2,4],
				text1: "Absolutely"
			},
			{
				value2: [3],
				text2: "No thank you, I'll be fine to navigate via my trusty Sunstone here"
			}
		]
	},
	{
		type: "radiogroup",
		name: "question9",
		question: "How many people will be using the device?",
		choices: [
			{
				value1: [1,3,4],
				text1: "I will be using it with my by myself."
			},
			{
				value2: [2],
				text2: "Me and my gang of hooligans!"
			}
		]
	},
	{
		type: "radiogroup",
		name: "question10",
		question: "What is your budget?",
		choices: [
			{
				value1: [1,2],
				text1: "Under $1000"
			},
			{
				value2: [3,4],
				text2: "Over $1000"
			}
		]
	},
	{
		sendResultOnPageNext: true,
		showProgressBar: "bottom",
		goNextPageAutomatic: true
	}
];

module.exports = QuizQuestions;
