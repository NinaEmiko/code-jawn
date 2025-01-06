export const INTS_LESSONS = {
    EXPLANATION_1: 'An int represents whole numbers, both positive and negative, without any decimal places.',
    EXPLANATION_2: 'Ints are useful for storing data such as a user\'s age or the amount of items in their shopping cart.',
}

export const INTS_QUIZ = {
    INT_QUESTION_1: `Select value that is of type int.`,
    INT_QUESTION_2: `Select value that is not of type int.`,
    INT_QUESTION_3: `This value is an int: 105`,
    INT_QUESTION_4: `Which of these would you use an int for?`,
    INT_QUESTION_5: `Update this value to make it into a int:`,
    GOOD_JOB: 'Good job!'
}

export const INTS_EXAMPLES = {
    INT_EXAMPLE_1: "0",
    INT_EXAMPLE_2: "500000",
    INT_EXAMPLE_3: "-1500",
    NOT_INT_EXAMPLE_1: "\"175\"",
    NOT_INT_EXAMPLE_2: "100.54",
    INT_EXAMPLE_4: '33',
    INT_EXAMPLE_5: "5",
}

export const INTS_EXPLANATIONS = {
    1: [
        `This is a String value. If it were not surrounded by quotation marks, it would become a int value: 57.`,
        `This is a boolean value.`,
        `This is a negative whole number which makes it a valid int value.`,
        `Incorrect. One of the above answers is a valid int value.`,
    ],
    2: [
        `-5 is a negative whole number which makes it a valid int value.`,
        `0 is a whole number which makes it a valid int value.`,
        `5.5 has a decimal point, therefore it is not a whole number and not a valid int value.`,
        `1000000 is a large whole number, which makes it a valid int value.`
    ],
    3: [
        `Correct. 105 is a whole number, therefore it is an int.`,
        `Incorrect.`
    ],
    4: [
        `A String would be the appropriate data type for a users email would .`,
        `A boolean would be the appropriate data type for representing whether or not a user is 30 years old.`,
        `A double would be the appropriate data type for representing the value of PI, and it contains a decimal point.`,
        `Correct! An int would be an appropriate data type for representing the amount of wins a user has in a game.`
    ],
    5: [
        `You are correct! By removing the quotation marks from "17", you have turned it into an int value.`,
        `You are incorrect.`
    ]
} as const;