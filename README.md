# UPSU Society Scraper

## Prerequisites
* Yarn: ^1.3.x
* Node: ^8.9.x
* Any browser that's not Internet Explorer (Edge welcome!)

## Usage
1. Install deps - `yarn` (or `npm install`)
2. Run! - `yarn start` (or `npm run start`)

Check out a working version over at [heroku!](https://upsu-leaderboard.herokuapp.com/)

## How it works
The students' union website doesn't ship with an API - so we've got to do it the hard way!

Firstly, a request is made to the societies page. `Cheerio` is then used to extract a link to each society page.

Once the list of links has been populated, a number of requests to those links are fired off concurrently (`request-promise` meets `Promise.all`). This returns HTML for each of the society pages. 

This HTML is also loaded in to `Cheerio`. The society name and member count is then pulled from this.

## API
Because there's no RESTFul API for the UPSU, this server provides one. Currently, it provides:

`GET https://upsu-leaderboard.herokuapp.com/leaderboard`
```json
[
  {
    "title": "Cinema Society",
    "members": "239"
  },
  {
    "title": "Islamic Society (ISOC)",
    "members": "222"
  },
  {
    "title": "Labour Society",
    "members": "217"
  },
  {
    "title": "IT Society",
    "members": "199"
  },
  {
    "title": "Gaming Society",
    "members": "193"
  }
]
```
