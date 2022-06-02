import database from '../database.config';
import * as msg from '../plugins/chalk'
import '../models/Models'; /* Models with constraints */

console.log(`${msg.infoMsg('Creating Database...')}`)
database
    .sync({ force: true })
    .then(created => {
        console.log(`${msg.successMsg('Database Successfully Created !')}`)
        process.exit();
    })
    .catch(err => {
        console.log(`${msg.errorMsg(err)}`)
        console.log(`${msg.errorMsg('Try to launch your Laragon, Xamp or Wamp server (Apache2).')}`)
        process.exit();
    });