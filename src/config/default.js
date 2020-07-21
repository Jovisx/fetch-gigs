const config = {
  app: {
    port: parseInt(process.env.BACKEND_PORT, 10) || 3000,
  },
  db: {
    host: process.env.POSTGRE_DB_HOST,
    database: process.env.POSTGRE_DB_NAME,
    username: process.env.POSTGRE_DB_USERNAME,
    password: process.env.POSTGRE_DB_PASSWORD,
    port: process.env.POSTGRE_DB_PORT,
    dialect: 'postgres',
    pool: {
      max: 40,  
      min: 10,
      acquire: 30000,
      idle: 10000
    },
    logging: true
  },
  rss: {
    url: process.env.RSS_URL,
    query: process.env.RSS_QUERY,
    sort: process.env.RSS_SORT,
    paging: process.env.RSS_PAGING,
    api_params: process.env.RSS_API_PARAMS,
    security_token: process.env.RSS_SECURITYTOKEN,
    user_uid: process.env.RSS_USERUID,
    org_uid: process.env.RSS_ORGUID
  },
  interval_time: parseInt(process.env.INTERVAL_TIME, 10) || 10,
  sendgrid_apikey: process.env.SENDGRID_API_KEY,
  support_email: process.env.EMAIL_FROM_SUPPORT
};

module.exports = config;