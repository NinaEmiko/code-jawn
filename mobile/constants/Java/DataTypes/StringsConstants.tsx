export const STRINGS_LESSONS = {
    EXPLANATION_1: 'A String is a sequence of characters. They must be wrapped in double quotes(" "), single quotes(\' \'), or backticks(` `).',
    EXPLANATION_2: 'Strings are useful for storing data such as a user\'s name, email address and occupation.',
}

export const STRINGS_QUIZ = {
    STRING_QUESTION_1: `Select value that is of type String.`,
    STRING_QUESTION_2: `Select value that is not of type String.`,
    STRING_QUESTION_3: `Select value that is not of type String.`,
    STRING_QUESTION_4: `What is missing from this to make it a String value: Lola works at 5.`,
    STRING_QUESTION_5: `Update this value to make it into a string:`
}

export const STRINGS_EXPLANATIONS = {
    1: [
        `This is a boolean value. If it were surrounded by quotation marks, it would become a String value: "false".`,
        `String values must be surrounded by quotation marks or backticks. 5 written in this way would be an int value.`,
        `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`,
        `String values must be surrounded by quotation marks or backticks.`,
    ],
    2: [
        `String values must be surrounded by quotation marks or backticks, which means this value is not a String.`,
        `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`,
        `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`,
        `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`
    ],
    3: [
        `While this is a valid String value, it is not the only valid String value.`,
        `All three are valid String values.`,
        `While this is a valid String value, it is not the only valid String value.`,
        `While this is a valid String value, it is not the only valid String value.`
    ],
    4: [
        `This value alone is not a String value, but by surrounding it in quotation marks, it will become a String.`,
        `There is something missing from making this into a String value.`,
        `While an = sign can be used to assign a String value to a variable, it is not a requirement in order to have a String value.`,
        `If a number is within quotation marks, it is a part of a String value and not an int value.`
    ],
    5: [
        `You are correct! By surrounding 17 with "", '', or \`\`, you have turned it into a String value.`,
        `You are incorrect. To turn 17 into a String value you must surround it with "", '', or \`\`.`
    ]
} as const;