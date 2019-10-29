import 'dotenv/config';

import App from './app';

App.listen(process.env.APP_PORT, () => {
  console.log('Server running on:');
  console.log(`>> ${process.env.APP_HOST}:${process.env.APP_PORT}\n`);
  console.log('Press CTRL-C to stop\n');
});
