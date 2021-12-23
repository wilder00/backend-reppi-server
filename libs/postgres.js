const {Pool} = require('pg')



const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

/* const pool = new Pool({
  connectionString: 'postgres://admin:admin123@localhost/reppi',
  // Number of retries to attempt when there's an error matching `retryConnectionErrorCodes`. A value of 0 will disable connection retry.
  retryConnectionMaxRetries: 5,
  // Milliseconds to wait between retry connection attempts after receiving a connection error with code that matches `retryConnectionErrorCodes`. A value of 0 will try reconnecting immediately.
  retryConnectionWaitMillis: 100,
  // Error codes to trigger a connection retry.
  retryConnectionErrorCodes: ['ENOTFOUND', 'EAI_AGAIN'],
}) */

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports =  pool ;
