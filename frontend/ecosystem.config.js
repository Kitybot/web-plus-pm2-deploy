const dotenvConfig = require('dotenv').config;

dotenvConfig({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_REF, DEPLOY_PATH, DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [{
    name: 'mesto-frontend',
    script: './src/app.ts',
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy': 'cd /home/deploy/mesto-frontend && npm i && export NODE_OPTIONS=--openssl-legacy-provider && npm run build',
    },
  },
};