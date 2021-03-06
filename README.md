# Costumes API

## Costume Shop
Build an API that represents products in a costume shop! You will have three resources:

### Costumes
* ID: (You Choose) A unique id that represents the costume. Created automatically.
* Name: (String) Name of the costume. Required.
* Price: (Number) Price of the costume. Cannot be less than 1 cent. Required.
* Description: (String) A description of the costume. Optional.
* Tags: (Array) An array of tags.
### Tags
* ID: (You Choose) A unique id that represents the tag. Created automatically.
* Name: (String) Name of the tag. Cannot be longer than 10 characters. Required.
* Color: (String) A color to be associated with the tag. Must be a valid hex color code (e.g. #123456). Optional.
* Tags will have different IDs even if they have the same name and color.

#### Build RESTful routes so that you can:

* Create, Read, Update, and Delete costumes
* Create, Read, Update, and Delete tags through costumes

## Setup

1. Fork and clone this repository
1. Run `npm install`
1. Run the tests with `npm test`
1. Run the server in development mode with `npm run dev` or run it in production mode with `npm start`
