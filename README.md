# tinkerbox_react

This is a typical React app created using create-react-app script. To start the app: 
1. clone the repo
2. npm install all the dependencies (for some services, you need to create an account for the API key) 
3. npm start (the web app should be available on localhost)

### Demo on AWS amplify
https://master.d3fc41pzxyh539.amplifyapp.com/

## The purpose of this repo 
1. an skeleton app for prototyping (e.g. proof of concept, mockup UX/Navigation, hackathon, glue things together) 
2. a repo for learning how to mockup by integrating new SaaS (API) solutions 
3. a playground that is more complex than single-purpose codesandbox examples, easier to understand than full-fledged application (most code has not been splitted so you can tweak it before deciding how to decouple components) 


## A few main components 
1. Styling - Material UI 
2. Front-end framework - ReactJS
3. Navigation - material selection, drawer, client-side routing 
4. Authentication and user identities - Auth0 (need account for API key) 
5. Video chat - Twilio (need account for API key, works locally)
6. Rich-text editor - CKEditor 
7. Dynamic tables (export, print, sort, filter, grouping, nest records, etc.) - DevExpress Grid, Material table (you can also try TabulatorJS) 
8. Data visualization (ReChart) 
9. Deployment (AWS amplify) 

## ToDos
1. Server functions (Flask or Node) 
2. Mapbox or Google Map for map view 
3. Split the code for better re-usability 
4. In-product chat and threaded discussion (potentially Intercom, Discord) 
5. Pinterest-like or Trello-like collection with drag-and-drop 
6. Screenshots and annotations 
7. Integration with other nocode/lowcode tool for faster build up (Notion, Dropbox, Contentful, Stripe, sharing buttons, for example) 
8. Full-text search (potentially ElasticSearch) 

## I am still looking for solutions for the following 
1. Real-time editing framework for non-document (e.g. figma-like experience for SVG) 
2. Make the react app much faster

