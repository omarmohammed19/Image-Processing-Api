# Image-Processing-Api

# Description
This is an imaging processing api that resizes the image and caches it so that when the same image with the same pixels is resubmitted it does not get reprocessed.

# Package Manager Used
npm

# Dependencies
node

typescript

prettier

eslint

jasmine

supertest

express

nodemon

sharp

# Scripts

* "build": "npx tsc",
* "prettier": "prettier .prettierrc --write build/**/*.js",
* "lint": "eslint .eslintrc build/**/*.js",
* "jasmine": "jasmine",
* "test": "npm run build && npm run jasmine",
* "start": "nodemon src/index.ts"


# Executing the Program
* Open the terminal
* Enter 'npm run start'
* Copy the URL to ypur browser
* Change the Pixels

# Available Endpoints
http://localhost:3000/api/imageprocessing?width=500&height=500

This endpoint displays an image with 500x500 pixels and by changing the numbers and reloading the page the image will be resized

# Version History

* 1.0
  Initial Release
  
# UI Screenshot
![project_cpature](https://user-images.githubusercontent.com/75382998/159602389-e9e94b68-a14e-4477-a31e-3cbea460d5be.PNG)


# Author 
Omar Mohammed Hassan
