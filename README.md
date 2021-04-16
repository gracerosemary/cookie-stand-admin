# Cookie Stand

PR Link: https://github.com/gracerosemary/cookie-stand-admin/pull/3   

**Author**: G Choi  
**Version**: 1.0.3  

## Overview
Replicate sample image in a React project that uses Tailwinds CSS. Make sure you have a head, header, main, form, and footer component that matches the spec of the sample image. 

## Getting Started
Create new React/Tailwinds project via CLI command:  
`npx create-next-app –example with-tailwindcss cookie-stand-admin`

## Architecture
- use React, NPM, Next.js, and Tailwind CSS
- work with data from a remote API
- componenent names have changed (`<Header>` --> `<CookieStandHeader>`)
- layout has changed (make sure it matches screenshot specs)
- pages/Index.js needs to export a `<Home>` componenent 

`<Home>`
- if user is logged in, `<CookieStandAdmin>` should render, if not `<LoginForm>` should render

`<LoginForm>`
- should receive a function passed in to call when form is submitted (function should be called with username and password arguments)

`<CookieStandAdmin>`
- when user fills out form to add location, the data should be posted to API
- while waiting for API response, the <CookieStandTable> should render the new row in a pending state
- when API response is complete, <CookieStandTable> should render the latest data

`<CookieStandTable>`
- should continue to display Cookie Stand info from last version
- add a delete icon in each stand's location cell and make it delete the cookie stand
- API should be informed that cookie stand was deleted

## API
Input location and cookie details to see a JSON string returned below the form. 
Create a component for Head, Header, Form, Table, and Footer. Main should have custom CreateForm and ReportTable within it. 

## Change Log
04-08-2021 10:37pm - Finished lab 1  
04-10-2021 5:53pm - Finished lab 2  
04-15-2021 10:50pm - Finished lab 3 


