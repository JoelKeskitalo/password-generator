const dynamoDb = require('../models/db')
const { ScanCommand, PutCommand } = require('@aws-sdk/lib-dynamodb')

// Hämta alla lösenord
exports.getPasswords = async (req, res) => {
  const params = {
    TableName: 'PasswordsTable'
  }

  try {
    const data = await dynamoDb.send(new ScanCommand(params))
    res.status(200).json(data.Items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Skapa ett nytt lösenord
exports.createPassword = async (req, res) => {
  const { password, username, website } = req.body

  const params = {
    TableName: 'PasswordsTable',
    Item: {
      id: Date.now().toString(),
      password,
      username,
      website
    }
  }

  try {
    await dynamoDb.send(new PutCommand(params))
    res.status(201).json({ message: 'Password created successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
