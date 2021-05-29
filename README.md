# Contents

* [Installation](#installation)
* [Components](#components)
* [Json-Server](#json-server)
* [Tests](#tests)

# Disclaimer

This project is for my university class. This is just to revisit React JS and to create a usable portfolio while I'm at it. 
Also, this project demonstrates how `selenium` and `json-server` works with `create-react-app`.

# Installation

Firstly we need to create our project with `create-react-app`, and install all necessary libraries that we will be using in this project.
For this project we will be using `yarn` to install our dependencies.

We are going to be using `bootstrap`, `material-ui`, `json-server`, `selenium-webdriver`, `axios`, `aos`, `chromedriver`, `geckodriver`, `mocha`, `node-sass`, `react-router`, `uuid` to name a few.

Each one of these can be installed with the CLI `yarn add (name)`. 

# Components

This project contains pages and components, which essentially are the same, but the only difference is in showcasing what purpose they serve.
Pages are pages, components are components that are reusable throughout the project.

For styling, I will be using `sass`.

# Json-Server

For this projects' contact page I have installed json-server to save all the data that the user submits.
Given the uuid as the id which generates random `128-bit label` that is unique.

# Tests

For testing I have installed `selenium-webdriver` and `mocha` and I'm testing simple cases like If the Contact Page is loading correctly, and if the title of the project matches correctly.
