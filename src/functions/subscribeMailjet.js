require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
)
const mjLists = {
  bh: 10237768,
  eg: 10237772,
  kw: 10237769,
  ng: 10237775,
  om: 10237771,
  pk: 10237773,
  qa: 10237770,
  sa: 10237767,
  za: 10237774,
  ae: 10237765,
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 200, // <-- Important!
      headers,
      body: 'This was not a POST request!',
    }
  }

  // some error checking:
  if (event.httpMethod !== 'POST' || !event.body) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: 'bad-payload',
        message: 'Incorrect or incomplete http request',
      }),
    }
  }
  // Parse the body contents into an object.
  const { country, email } = JSON.parse(event.body)

  const request = mailjet
    .post('contactslist', { version: 'v3' })
    .id(mjLists[country])
    .action('managecontact')
    .request(
      JSON.stringify({
        Properties: 'object',
        Action: 'addforce',
        Email: email,
      }),
    )
  request
    .then(result => {
      callback(null, {
        statusCode: 200,
        headers,
        msg: 'success',
        body: JSON.stringify(result.body),
      })
    })
    .catch(err => {
      console.log(err, err.message)
      callback(null, {
        statusCode: 400,
        headers,
        msg: 'fail',
        body: JSON.stringify(err.message),
      })
    })
}
