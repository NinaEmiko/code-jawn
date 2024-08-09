export const INITIALIZING_VARIABLES_QUESTIONS = {
    INITIALIZATION_QUESTION_1: `Select the option that displays the use of variables.`,
    INITIALIZATION_QUESTION_2: `Select the correct option.`,
    INITIALIZATION_QUESTION_3: `Select the option that is incorrect.`,
    INITIALIZATION_QUESTION_4: `Select the best variable name.`,
    INITIALIZATION_QUESTION_5: `Select the option that is correct.`,
}

export const INITIALIZING_VARIABLES_QUESTION_1_ANSWERS = {
    ANSWER_1: `String name = \"Lola\";`,
    ANSWER_2: `for(int i = 0; i < 10; i++) {
    doSomething();
}`,
    ANSWER_3: `if (1 < 2) {
    doSomething();
};`,
    ANSWER_4: `import java.util.List;`
}

export const INITIALIZING_VARIABLES_QUESTION_1_EXPLANATIONS = {
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

export const INITIALIZING_VARIABLES_QUESTION_1_BOOLEANS = {
    ANSWER_1: true,
    ANSWER_2: false,
    ANSWER_3: false,
    ANSWER_4: false
}

export const INITIALIZING_VARIABLES_QUESTION_2_ANSWERS = {
    ANSWER_1: `String count = 5;`,
    ANSWER_2: `boolean count = "five";`,
    ANSWER_3: `int count = "5";`,
    ANSWER_4: `int count = 5;`
}

export const INITIALIZING_VARIABLES_QUESTION_2_EXPLANATIONS = {
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

export const INITIALIZING_VARIABLES_QUESTION_2_BOOLEANS = {
    ANSWER_1: false,
    ANSWER_2: false,
    ANSWER_3: false,
    ANSWER_4: true
}

export const INITIALIZING_VARIABLES_QUESTION_3_ANSWERS = {
    ANSWER_1: `String number = "5";`,
    ANSWER_2: `int 5 = number;`,
    ANSWER_3: `int number = 5;`,
    ANSWER_4: `number = 5;`
}

export const INITIALIZING_VARIABLES_QUESTION_3_EXPLANATIONS = {
    ANSWER_1: `This statment is declaring a String variable named number and assigning it a value of "5".
Values wrapped in double quotes are of type String.
false is a boolean value, but "false" is a String value.
5 is an int value, but "5" is a String value.`,
    ANSWER_2: `This statement is declaring an int variable named 5.
It is attempting to assign it a value of number.
Variable names cannot begin with a number.
int variables cannot be assigned the value of number.`,
    ANSWER_3: `This statment is declaring an int variable named number and assigning it a value of 5.`,
    ANSWER_4: `This statement is updating the value of a variable to the value of 5.
Once a variable is declared, it's value can be changed using the above syntax.`
}

export const INITIALIZING_VARIABLES_QUESTION_3_BOOLEANS = {
    ANSWER_1: false,
    ANSWER_2: true,
    ANSWER_3: false,
    ANSWER_4: false
}

export const INITIALIZING_VARIABLES_QUESTION_4_ANSWERS = {
    ANSWER_1: `int spv = 50;`,
    ANSWER_2: `int SpeedPerVehicle = 50;`,
    ANSWER_3: `int speedPerVehicle = 50;`,
    ANSWER_4: `int speed per vehicle = 50;`
}

export const INITIALIZING_VARIABLES_QUESTION_4_EXPLANATIONS = {
    ANSWER_1: `spv is not clear enough of a name for a variable.
What spv stands for is not immediately apparent.`,
    ANSWER_2: `Variable names should be in camel case.
For example: milesPerHour, timesWeWentToTheStore, daysWorked.`,
    ANSWER_3: `This variable is in camel case.
It is clear what the variable represents.`,
    ANSWER_4: `Variable names should be one word.
milesPerHour is correct.
miles per hour is incorrect.`
}

export const INITIALIZING_VARIABLES_QUESTION_4_BOOLEANS = {
    ANSWER_1: false,
    ANSWER_2: false,
    ANSWER_3: true,
    ANSWER_4: false
}

export const INITIALIZING_VARIABLES_QUESTION_5_ANSWERS = {
    ANSWER_1: `String isHappy = false;`,
    ANSWER_2: `boolean isHappy = "false";`,
    ANSWER_3: `boolean isHappy = true;`,
    ANSWER_4: `boolean isHappy = yes;`
}

export const INITIALIZING_VARIABLES_QUESTION_5_EXPLANATIONS = {
    ANSWER_1: `This statement is declaring a String variable named isHappy.
It is attempting to assign it a value of false.
false is a boolean data type and cannot be assigned to a String variable.`,
    ANSWER_2: `This statement is declaring a variable named isHappy.
It is attempting to assign it a value of "false".
"false" is a String data type and cannot be assigned to a boolean variable.`,
    ANSWER_3: `This statement is declaring a boolean variable named isHappy.
It is assigning it a value of true.`,
    ANSWER_4: `This statement is declaring a boolean variable named isHappy.
It is attempting to assign it a value of yes.
yes is not a keyword or a value assignable to a boolean variable.`
}

export const INITIALIZING_VARIABLES_QUESTION_5_BOOLEANS = {
    ANSWER_1: false,
    ANSWER_2: false,
    ANSWER_3: true,
    ANSWER_4: false
}