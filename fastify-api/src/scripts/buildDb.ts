import database from '../configs/database'
import * as bcrypt from 'bcrypt'
import * as msg from '../utils/chalk'
import { User, Role } from '../models/Models'
import { encryptUser } from '../utils/crypto'
import '../models/Models' /* Models with constraints */

console.log(`${msg.infoMsg('Creating Database...')}`)
database
    .sync({ force: true })
    .then(async () => {
        console.log(`${msg.successMsg('Database Successfully Created !')}`)
        await createEntities()
        process.exit(1)
    })
    .catch((err) => {
        console.log(`${msg.errorMsg(err)}`)
        console.log(`${msg.errorMsg('Try to launch your Laragon, Xamp or Wamp server (Apache2).')}`)
        process.exit(1)
    })

const createEntities = async () => {
    await Role.bulkCreate([
        { id: '1', label: 'ROLE_ADMIN' },
        { id: '2', label: 'ROLE_USER' }
    ])
    await User.bulkCreate([
        encryptUser({ lastname: 'Admin', firstname: 'Admin', email: 'admin@admin.admin', password: bcrypt.hashSync('Password1@', bcrypt.genSaltSync(10)), roleId: '1' }),
        encryptUser({ lastname: 'User', firstname: 'User', email: 'user@user.user', password: bcrypt.hashSync('Password1@', bcrypt.genSaltSync(10)), roleId: '2' })
    ])
}