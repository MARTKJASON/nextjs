// module.exports = {
//   env:{
//     mongodb_username: 'dbmj739',
//     mongodb_password:'qKrxmARBVieea1Tg',
//     mongodb_clustername: 'cluster0',
//     mongodb_database: 'my-site-dev'
//   },

// }
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'dbmj739',
        mongodb_password: 'qKrxmARBVieea1Tg',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'dbmj739',
      mongodb_password: 'qKrxmARBVieea1Tg',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};