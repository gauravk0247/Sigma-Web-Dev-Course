/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
        {
          "Name": "Java",
          "Price": 20000,
          "Instructor": "Gaurav"
        },
        {
          "Name": "Python",
          "Price": 15000,
          "Instructor": "Alex"
        },
        {
          "Name": "JavaScript",
          "Price": 18000,
          "Instructor": "Sarah"
        },
        {
          "Name": "C++",
          "Price": 22000,
          "Instructor": "Michael"
        },
        {
          "Name": "Ruby",
          "Price": 17000,
          "Instructor": "Emma"
        },
        {
          "Name": "C#",
          "Price": 21000,
          "Instructor": "David"
        },
        {
          "Name": "HTML",
          "Price": 16000,
          "Instructor": "Sophia"
        },
        {
          "Name": "CSS",
          "Price": 16000,
          "Instructor": "James"
        },
        {
          "Name": "SQL",
          "Price": 19000,
          "Instructor": "Olivia"
        },
        {
          "Name": "PHP",
          "Price": 14000,
          "Instructor": "Daniel"
        }
]);

// print a message to the output window.
console.log(`Done inserting data`)