# Tinkerbox React - a prototyping tool for non-developers 

This is a typical React app created using create-react-app script. To start the app: 
1. clone the repo
2. npm install all the dependencies (for some services, you need to create an account for the API key) 
3. npm start (the web app should be available on localhost)

### Demo on AWS amplify
(Yes, all data and UI texts are garbed text) 
https://master.d3fc41pzxyh539.amplifyapp.com/


## The purpose of this repo 
1. an skeleton app for adding and launching prototypes (e.g. proof of concept, mockup UX/Navigation, hackathon, glue things together) 
2. a repo for learning how to mockup by integrating new SaaS (API) solutions 
3. a playground that is more complex than stackoverflow/codesandbox examples, but easier to understand than a production application. 

## Requirements for this repo 
* users can interact with the result 
* a non-developer can set it up in 1 hour
* a non-developer can add new function easily

## A few main components 
* Styling - Material UI 
* Front-end - ReactJS
* Navigation - (Material)selection, drawer, stepper, client-side routing 
* Authentication and user identities - Auth0 (this requires an API key) 
* Video chat - Twilio (this requires an API key)
* Rich-text editor - CKEditor 
* Dynamic tables (export, print, sort, filter, grouping, nest records, etc.) - DevExpress Grid, Material table (you can also try TabulatorJS) 
* Data visualization (ReChart) 
* Deployment (AWS amplify) 

## To Dos
### Integration features 
* Server functions (Flask or Node) - this is for more complex backend (DB, API integrations) 
* Mapbox or Google Map for map view 
* In-product chat and threaded discussion (potentially Intercom, Discord, Twilio) 
* Integration with other nocode/lowcode tool for faster build up (Contentful, Stripe, sharing buttons, for example) 
* Full-text search (potentially ElasticSearch) 

### New features 
* Trello-like collection/boards with drag-and-drop cards
* Screenshot of entire or partial page and make threaded comment in-context  
* Audio/video synchronized with page structure

### Improvements 
* Split the code for better re-usability 
* Find a simpler deployment tool

## I am still looking for solutions for the following 
* Real-time editing for non-document (e.g. Google doc experience for polygons, workflow graph) 


