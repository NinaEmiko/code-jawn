export const STRINGS_QUESTIONS = {
    STRING_QUESTION_1: `Select value that is of type String.`,
    STRING_QUESTION_2: `Select value that is not of type String.`,
    STRING_QUESTION_3: `Select value that is not of type String.`,
    STRING_QUESTION_4: `What is missing from this to make it a String value: Lola works at 5.`,
    STRING_QUESTION_5: `Update this value to make it into a string:`
}

export const STRINGS_QUESTION_1_ANSWERS = {
    ANSWER_1: `false`,
    ANSWER_2: `5`,
    ANSWER_3: `"This is a String."`,
    ANSWER_4: `This is a String.`
}

export const STRINGS_QUESTION_1_EXPLANATIONS = {
    ANSWER_1: `This is a boolean value. If it were surrounded by quotation marks, it would become a String value: "false".`,
    ANSWER_2: `String values must be surrounded by quotation marks or backticks. 5 written in this way would be an int value.`,
    ANSWER_3: `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`,
    ANSWER_4: `String values must be surrounded by quotation marks or backticks.`
}

export const STRINGS_QUESTION_2_ANSWERS = {
    ANSWER_1: `five`,
    ANSWER_2: `"5"`,
    ANSWER_3: `"5.5"`,
    ANSWER_4: `"five"`
}

export const STRINGS_QUESTION_2_EXPLANATIONS = {
    ANSWER_1: `String values must be surrounded by quotation marks or backticks, which means this value is not a String.`,
    ANSWER_2: `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`,
    ANSWER_3: `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`,
    ANSWER_4: `This is a sequence of characters surrounded by quotation marks which makes it a valid String value.`
}

export const STRINGS_QUESTION_3_ANSWERS = {
    ANSWER_1: `"This is my house."`,
    ANSWER_2: `They are all of type String.`,
    ANSWER_3: `'This is my house.'`,
    ANSWER_4: `\`This is my house.\``
}

export const STRINGS_QUESTION_3_EXPLANATIONS = {
    ANSWER_1: `While this is a valid String value, it is not the only valid String value.`,
    ANSWER_2: `All three are valid String values.`,
    ANSWER_3: `While this is a valid String value, it is not the only valid String value.`,
    ANSWER_4: `While this is a valid String value, it is not the only valid String value.`
}

export const STRINGS_QUESTION_4_ANSWERS = {
    ANSWER_1: `It is missing quotation marks.`,
    ANSWER_2: `There is nothing missing.`,
    ANSWER_3: `It is missing an = sign.`,
    ANSWER_4: `It contains a 5 and that is an int value.`
}

export const STRINGS_QUESTION_4_EXPLANATIONS = {
    ANSWER_1: `This value alone is not a String value, but by surrounding it in quotation marks, it will become a String.`,
    ANSWER_2: `There is something missing from making this into a String value.`,
    ANSWER_3: `While an = sign can be used to assign a String value to a variable, it is not a requirement in order to have a String value.`,
    ANSWER_4: `If a number is within quotation marks, it is a part of a String value and not an int value.`
}

export const STRINGS_QUESTION_5_ANSWERS = {
    CORRECT_ANSWER_1: `"17"`,
    CORRECT_ANSWER_2: `'17'`,
    CORRECT_ANSWER_3: `\`17\``,
    CORRECT_ANSWER_4: `‘17’`,
    CORRECT_ANSWER_5: `“17”`
}

export const STRINGS_QUESTION_5_EXPLANATIONS = {
    CORRECT_ANSWER: `You are correct! By surrounding 17 with "", '', or \`\`, you have turned it into a String value.`,
    INCORRECT_ANSWER: `You are incorrect. To turn 17 into a String value you must surround it with "", '', or \`\`.`
}
