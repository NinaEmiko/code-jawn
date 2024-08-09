export const DATA_TYPES_QUESTIONS = {
    INT_QUESTION_1: `Select the value that is of type int.`,
    INT_QUESTION_2: `UPDATE`,
    INT_QUESTION_3: `UPDATE`,
    INT_QUESTION_4: `"Fix this value to make it into a valid int."`,
    INT_QUESTION_5: `UPDATE`
}

export const INT_QUESTION_1_ANSWERS = {
    ANSWER_1: `"five"`,
    ANSWER_2: `"5"`,
    ANSWER_3: `5`,
    ANSWER_4: `"five"`
}

export const INT_QUESTION_1_EXPLANATIONS = {
    ANSWER_1: `UPDATE`,
    ANSWER_2: `UPDATE`,
    ANSWER_3: `UPDATE`,
    ANSWER_4: `UPDATE`
}

export const INT_QUESTION_1_BOOLEANS = {
    ANSWER_1: false,
    ANSWER_2: false,
    ANSWER_3: true,
    ANSWER_4: false
}

export const INT_QUESTION_4_ANSWERS = {
    CORRECT_ANSWER: "17"
}

export const INT_QUESTION_4_EXPLANATIONS = {
    CORRECT_ANSWER: `You are correct! By removing the quotation marks from "17", you changed it from a String value to an int value.`,
    INCORRECT_ANSWER: `Correct answer: 17. "17" is a String value. By removing the quotation marks, it becomes an int value.`
}

export const VARIABLES_QUESTIONS = {
    INITIALIZATION_QUESTION_1: `Select the option that displays the use of variables.`,
    INITIALIZATION_QUESTION_2: `Select the correct option.`,
    INITIALIZATION_QUESTION_3: `UPDATE`,
    INITIALIZATION_QUESTION_4: `UPDATE`,
    INITIALIZATION_QUESTION_5: `UPDATE`,
}

export const VARIABLES_QUESTION_1_ANSWERS = {
    ANSWER_1: `String name = \"Lola\";`,
    ANSWER_2: `for(int i = 0; i < 10; i++) {
    doSomething();
}`,
    ANSWER_3: `if (1 < 2) {
    doSomething();
};`,
    ANSWER_4: `import java.util.List;`
}

export const VARIABLES_QUESTION_1_EXPLANATIONS = {
    ANSWER_1: `This is a variable.
It declares the data type as String.
It declares the name of the variable as name.
It assigns the value of the variable as "Lola".`,
    ANSWER_2: `This is a loop.
It will trigger the doSomething method 10 times.
A variable assigns a value.`,
    ANSWER_3: `This is a conditional statement.
If the number 1 is less than 2 it will trigger the doSomething method.
If the number 1 is not less than 2 it will not trigger it.`,
    ANSWER_4: `This is an import statement.
It is typically found at the top of a java class file. 
By importing java.util.List, the user has the ablilty to create List objects.`
}

export const VARIABLES_QUESTION_1_BOOLEANS = {
    ANSWER_1: true,
    ANSWER_2: false,
    ANSWER_3: false,
    ANSWER_4: false
}

export const VARIABLES_QUESTION_2_ANSWERS = {
    ANSWER_1: `String count = 5;`,
    ANSWER_2: `boolean count = "five";`,
    ANSWER_3: `int count = "5";`,
    ANSWER_4: `int count = 5;`
}

export const VARIABLES_QUESTION_2_EXPLANATIONS = {
    ANSWER_1: `This statement is declaring a String variable named count.
It is attempting to assign an int value of 5 to count.
int values cannot be assigned to String variables.`,
    ANSWER_2: `This is declaring a boolean variable named count.
It is attempting to assign a String value of "five" to count.
String values cannot be assigned to boolean variables.`,
    ANSWER_3: `This is declaring an int variable named count.
It is attempting to assign a String value of "5" to count.
String values cannot be assigned to int variables.`,
    ANSWER_4: `This is declaring an int variable named count.
It is assigning an int value of 5 to count.`
}

export const VARIABLES_QUESTION_2_BOOLEANS = {
    ANSWER_1: false,
    ANSWER_2: false,
    ANSWER_3: false,
    ANSWER_4: true
}