const server = require('./api/server.js');

const port = process.env.PORT || 5014;
server.listen(port, () => console.log(`\n** running on port ${port}**\n`))