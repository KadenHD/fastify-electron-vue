import User from './User'
import Role from './Role'

/* User <-> Role */
User.belongsTo(Role, {
    foreignKey: {
        allowNull: false
    }
})
Role.hasMany(User)

export { User, Role }