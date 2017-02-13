# nasdaq-scraper
Scrape index value and svg chart in nasdaq webstie

## Introduction
This application is built for getting the data from http://www.nasdaq.com as the below image. The method of getting data which is presenting on website, there are 2 parts;

1. Index Value is on left of the table.
2. Stock Price chart is on right of the table and it shows 7 sub-charts like NASDAQ, NASDAQ-100, Pre-Market

To get data all 7 Index value, the process is defined the schedule to do it every 10 minutes. After running the application, if the user runs the process within 
5 minutes to get new data instead and collect the data in the database. This method is more efficient because it does not have to repeat the process frequently.

![alt text](https://dl.dropboxusercontent.com/u/99122912/nasdaq_screenshot.png "Nasdaq Index Value example")

This sample uses Node.js which is a very powerful JavaScript-based framework/platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. As the above, it is not enough to Scrape the data from website. So I use Express further, Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework. The main example, I will use middleware to respond to HTTP Requests and define a routing table which is used to perform different actions based on RESTful and URL. Each example do not build from dynamically render HTML Pages based on passing arguments to templates. This is the qualification of Express that focuses to Scrape the data and create RESTful API to support client even website, mobile or other services.

## Demo

After installation as prerequisite step, this example is a simple static HTML that uses Scrape method. Using the Get Data button for retrieving the table of data chart from NASDAQ website. It can change the data in the price chart by clicking menu stock at each row then Scrape will process and present the output on screen.

![alt text](https://dl.dropboxusercontent.com/u/99122912/scraper%20screen.png "Nasdaq Index and Chart example")

## Set of API

API divides into 2 parts; 
1. Basic API, a service is directly working for client.
2. Scrape, the API is for getting the data from NASDAQ website

| Endpoint         | Description  |
| -----------------|:-------------|
| /stocklist       | To run “get method”, the process will get and keep the data from website then send it back to client. When user needs the data again within 5 minutes, it will retrieve the data in database to present on screen. Otherwise, after 5 minutes the process will get new data and replace the ex-data in the first place. --Output: 
--Status the stage of output is divided into 3 types;
1. New; the stage is showing that the process just finished getting data from website.
2. Renew; the stage is showing that the process just refreshing and putting in the database.
3. Delay; the stage is showing the data that keeping in snapshot in 5 minutes ago
--Data: The data list of Stock Index which present in the table.
1. stockId; Identification is referred in the database.
2. stockName; Name of stock
3. stockValue; the present value of stock
4. netChange; 2 values are composed of arrow sign up and down, percent change.
5. timestamp; a tick time to collect the data and calculate for comparing to get new data.
|


## Prerequisite

1. Node version 6.9.1 or newer version, available at https://nodejs.org/en/download/

2. Mongo Database is for collecting the data of stock and SVG Chart. The version should be 2.2+, available at https://www.mongodb.com/download-center  
Moreover, it would be better if we send the tool for monitoring Mongo Database by Robomongo, available at https://robomongo.org/download


## Installation
1. Start cloning this project.
2. Create new mongo database as port localhost:27017/test and create C:\data directory
3. Run the command: npm install.
4. Run the command: mongo for starting database initial and connectivity.
5. Run the command: npm install –g grunt-cli
6. Run the command: npm install –save nightmare
7. Run the command: npm install node-schedule
8. Run the command: grunt start.
9. You can will be available on localhost:8080
