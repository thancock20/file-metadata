# file-metadata
My implementation of the File Metadata Microservice API project from freeCodeCamp.

[See the app on Heroku](https://whispering-oasis-55605.herokuapp.com/)

Implements the following User stories:
* I can submit a FormData object that includes a file upload.
* When I submit something, I will receive the file size in bytes within the JSON response

## Getting Started
```
npm install
node server.js
```

## Example Usage:
`http://localhost:8080`

Then choose file and press upload button.

## Example Output:
`{ "fileSize": 303 }`
