# Introduction

## Project Motivation

The motive of this project is to have you a taste of the environment and tools you will most likely come across in a front end role. Your focus should be to understand the role every tool and technology is playing in the overall architecture. You shouldn’t feel the need to memorize the particular commands, config setups, or structure that we create here. Every project in the industry will have its own custom setup, but if you understand the moving pieces, you will be able to get the gist of even far more complicated projects than this one.

## Project Introduction - What You Will Build

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called Aylien to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

### P.S. здесь везде они имеют в виду API Aylien, но там только на 2 недели free, в чате написали, что можно пользоваться Meaning Cloud:

https://www.meaningcloud.com/
там бесплатная версия и 20 000 вызовов в месяц.

## Following are the project prerequisites:

Webserver - Node
Web application framework for routing - Express
Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
External script - Service Worker
External API - Aylien
Introduction to Natural Language Processing
NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech.

## NLP on Human Voice

For example, everyone who has used Alexa or Google Assistant or other voice command systems knows that these devices are always improving, by collecting and interpreting voice data. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but the tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages.

## NLP on Text

An example is Grammarly editing tool, which parses the text that you write, and suggests if the tone is professional or not. Another example is the Smart Compose feature for Gmail that uses NLP to suggest words and statements based on your current context.

It requires a vast amount of knowledge from machine learning, deep learning, AI, statistics, and programming to create NLP systems and algorithms. But, thankfully we will use a new API called Aylien, that has put a public-facing API in front of their NLP system. We will use it in our project to determine various attributes of an article or blog post.

# Specifications

## API

The app should make a successful call to the API on form submission. If this is successful, the API keys and response handling were done correctly. You can check that the API keys are found in server.js or a similar node file. It is not acceptable for an API key to be set in a client-facing file (like index.js)

Information from the API response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc..

## Tip: These are some data points that should be visible:

polarity: (positive/'negative')
subjectivity: ('subjective', factual)
text: a text snippet from the article

## Offline Functionality

### The project must have set up service workers:

Workbox plugin is implemented in webpack.prod.js
The service is called from index.html
Testing

### Check the project has Jest installed and npm run test script is implemented to run Jest.

Every src/js file has at least one unit test.
All tests have passed.
Interactions

## The page built can be very simple, but should include:

A single field form that uses the correct HTML tags and structure.
Validate the form input and return an error to alert the user.
At the very minimum, the input field cannot be blank.
Bonus point: you can implement regex to check the URL validity.
