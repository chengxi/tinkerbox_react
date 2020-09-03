# tinkerbox_react

This is a typical React app created using create-react-app script. To start the app: 
1. clone the repo
2. npm install all the dependencies (for some services, you need to create an account for the API key) 
3. npm start 

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
1. local DB (sqlite), cloud DB (RDS, GraphQL)
2. server functions (Flask or Node) 
3. Auth using Firebase 
4. Mapbox or Google Map for map view 
5. Split the code for better re-usability 
6. Real-time editing framework for document and non-document (I haven't found a framework for non-document yet) 
7. Chatbot, discussion (potentially Intercom, Discord) 
8. Pinterest-like or Trello-like collection with drag-and-drop 
9. Screenshots and annotations 
10. Integration with other nocode/lowcode tool for faster build up (Notion, Dropbox, Contentful, Stripe, sharing buttons, for example) 
11. Full-text search (potentially ElasticSearch) 

