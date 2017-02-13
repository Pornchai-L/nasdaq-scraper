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

###Basic API

| Endpoint         | Description  |
| -----------------|:-------------|
| /stocklist       | The process will get and keep the data from website then send it back to client. When user needs the data again within 5 minutes, it will retrieve the data in database to present on screen. Otherwise, after 5 minutes the process will get new data and replace the ex-data in the first place.<br /><br /> **Output:** <br /><br />`Status` the stage of output is divided into 3 types;<br />- *New*; the stage is showing that the process just finished getting data from website.<br />- *Renew*; the stage is showing that the process just refreshing and putting in the database.<br />- *Delay*; the stage is showing the data that keeping in snapshot in 5 minutes ago<br /><br />`Data`The data list of Stock Index which present in the table.<br />1. *stockId*; Identification is referred in the database.<br />2. *stockName*; Name of stock<br />3. *stockValue*; the present value of stock<br />4. *netChange*; 2 values are composed of arrow sign up and down, percent change.<br />5. *timestamp*; a tick time to collect the data and calculate for comparing to get new data.|
| /stockchart      |The process will get data from chart from website and send it back to client. This stage is collecting cache data. It is developing.<br /><br /> **Input:** <br /><br />`stockId`: the value is between 0 – 6, each id is instead of stock chart;<br />*0* = NASDAQ chart<br />*1* = NASDAQ-100 (NDX) chart<br />*2* = Pre-Market (NDX) chart<br />*3* = After Hours (NDX) chart<br />*4* = DJIA chart<br />*5* = S&P 500 chart<br />*6* = Russell 2000 chart<br /><br /> **Output:** <br /><br />1. 	`title` is for the full name of stock index<br />2.	`html` is raw html that contain SVG chart, retrieving the data from NASDAQ website.<br />3	`timeStamp` is a tick time to collect the data and calculate for comparing to get new data.|

###Scrape API

| Endpoint                  | Description  |
| --------------------------|:-------------|
| /scrapestocklist          | To get all Index value on NASDAQ website at that time.|
| /scrapenasdaqchart        | To get NASDAQ chart from NASDAQ website at that time.|
| /scrapenasdaq100chart     | To get NASDAQ-100(NDX) chart from NASDAQ website at that time.|
| /scrapepremarketchart     | To get Pre-Market(NDX) chart from NASDAQ website at that time.|
| /scrapeaftermarketchart   | To get After Hours (NDX) chart from NASDAQ website at that time.|
| /scrapedjiachart          | To get DJIA chart from NASDAQ website at that time.|
| /scrapesp500chart         | To get S&P 500 chart from NASDAQ website at that time.|
| /scraperussell2000chart   | To get Russell2000 chart from NASDAQ website at that time.|


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
