# Doctor Api

## Description

_Lookup Doctor by keyword or name_

### User Stories

- A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
- A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
- If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
- If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
- If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

### Setup/Installation Requirements
- _'npm install'_
#### Run Application
- _'npm run start'_
#### Test Application
- _'npm run test'_
### Technologies Used

- _JavaScript_
- _JQuery_
- _Node.js_
- _HTML_
- _Webpack_
- _CSS_

#### Created By

 _**John Murray**_

### License

{MIT License}

Copyright (c) 2017 **_{John Murray}_**
