# README #

This repo holds sourcecode and documentation for NordicRecipientAdminApp
A mobile app where mailmen (and others working in the field) can;

	- suggest changes to recipient database (initially ISU); initially recipient preferences and  who lives where

This is a Proof Of Concept (PoC)
Goal is to construct UX, app and showcase rapid development, Progressive Web App possibilities and innovation in general.

![Logical Target Architecture](https://bitbucket.org/davidhultsberg/nordicrecipientadminapp/raw/master/Docs/NordicRecipientAdminTA.jpg)

Chosen frameworks/tools are:

- Progressive Web App 
- Reactjs
- Auth0
- Reakit?
- React studio?

### Links ###

* API-Contract on SwaggerHub: https://app.swaggerhub.com/apis/NordicRecipientAdmin/NordicRecipientAdminAPI/1.0.0
* Todo-list on Trello: https://trello.com/b/pbG3xppU/nordicrecipientadministrationapp
* Communication on Slack: https://postnordapp.slack.com/messages/C924XAN3A/team/U934QSG48/
* Relevant backend-api/tool (for those who have postnord-account, and are intranet); http://pgm.posten.se/pgm/routeadmin/

### Definition Of 'Ready for Test' ###

* Tested/Reviewed by collegue

### Definition Of 'Done' ###

* Tested/Reviewed by Product Owner (David Hultsberg)/Postnord Business 


### Who do I talk to? ###

* Product Owner: david.hultsberg@postnord.com

### React Git project setup ###

First you need to setup git/bitbucket and pull the master branch.

Then, In Console:

npm install -g rekit

CD masterBranch\TestStructure\TestRekit

** TestStructre is located in the git/bitbucket master branch folder. **

npm install

npm start

### Swagger setup ###

Due to the integration limitations that comes with using the free version of SwaggerHub, 
we will instead use swagger-node.

https://github.com/swagger-api/swagger-node

Installation:

nmp install -g swagger

Start Swagger Editor (run the following command in \API\Swagger-node\NordicRecipientAdminAppAPI\):

swagger project edit

Start swagger project for testing the API (run the following command in \API\Swagger-node\):

swagger project start NordicRecipientAdminAppAPI

