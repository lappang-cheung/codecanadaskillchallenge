## Code for Canada skills challenge 2018 - Developers

Requirements: Look at this dataset representing building code violations. Write a brief program in the language of your choice to summarize the data. Your program should calculate:
-	The number of violations in each category
-	The earliest and latest violation date for each category

## Table of Contents
- [Installation of App](#installation-of-app)
- [Assumptions](#assumptions)
- [Language Used](#language-used)

In order to install the app do the following:

* `yarn install` to install the local packages
* `yarn start` to run the application for backend and frontend

If failed to use yarn then use the following:

* `npm run install`
* `npm run start`

Note: Please use the latest version of node v10+ & npm v6+ 

## Assumptions
As the file was given in CSV, the data in the program would be parse into JSON and was assumed there exist a function for it. As the data is stored in a
folder called data and each time the app excutes, the data would be loaded.

However to due to time limitation of one hour, assumption was the inforation of the CSV would be parse into JSON and then use ReactJS to display the
requirements of skill challenge.

## Language Used
The language was written in ReactJS, as this challenge was to display the data to the client and the client only need the read-only information but as well the time limited of 1hour. If more time was given, there would be difference components created for filtering each individual categories and with its own view components.
