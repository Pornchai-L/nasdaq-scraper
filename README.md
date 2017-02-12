# nasdaq-scraper
Scrape index value and svg chart in nasdaq webstie

## Introduction
This application is built for getting the data from http://www.nasdaq.com as the below image. The method of getting data which is presenting on website, there are 2 parts;
1.	Index Value is on left of the table.
2.	Stock Price chart is on right of the table and it shows 7 sub-charts like NASDAQ, NASDAQ-100, Pre-Market
To get data all 7 Index value, the process is defined the schedule to do it every 10 minutes. After running the application, if the user runs the process within 
5 minutes to get new data instead and collect the data in the database. This method is more efficient because it does not have to repeat the process frequently.

