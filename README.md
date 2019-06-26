# react-google-map
Coding Challenge

Installation: 

This project utilizes node,react and express.
If you're running from scratch please install node from https://nodejs.org/en/
and then react with the following:
npm install create-react-app g
create-react-app client 

The follwoing packages need to be installed for this project

1. npm install concurrently nodemon 

2. npm install express cookie-parser 

3. npm install body-parser 

4. npm install request request-promise 

5. npm install dotenv

6. npm install geolib

on the client directory install 

7. npm install bootstrap reactstrap 

Ports:
This was designed for dev so the proxy is set for port 5000 on the client-> package.json 

The client is set to port 3000

Test the 2 endpoints :

http://localhost:5000/api/revcode/40.714224,-73.961452

http://localhost:5000/api/geocode/1600+Amphitheatre+Parkway,+Mountain+View,+CA

Examples for the client side:

1. Adding a city: type any address such as 424 N highland ave los angeles CA

2. Reverse geocode: please input the info as latitude,longitude

3. Distance: please input the data as  latitude1,longitude1,latitude2,longitude2


API KEY

Update the API key in the .env file amd place it in the root directory of your project. 
The following is an example of how to refer to the key "process.env.REACT_APP_API_KEY".

Running the app:
The scripts are all set.
Type from the command line 
npm run dev