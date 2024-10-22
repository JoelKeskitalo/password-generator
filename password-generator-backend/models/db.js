const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb')
const dotenv = require('dotenv')

dotenv.config();

// Konfigurera DynamoDB-klienten
const dynamoClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
})

// Initiera DynamoDB-dokumentklienten (högre abstraktionsnivå)
const dynamoDb = DynamoDBDocumentClient.from(dynamoClient)

module.exports = dynamoDb
