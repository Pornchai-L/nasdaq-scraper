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