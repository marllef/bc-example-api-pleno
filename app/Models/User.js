'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden () {
    return ['password']
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  tokens () {
    return this.hasMany('App/Models/SessionToken')
  }

  address () {
    return this.hasMany('App/Models/Address')
  }

  kuppidoInfo () {
    return this.hasOne('App/Models/KuppidoInfo')
  }

  kuppidoMasterInfo () {
    return this.hasOne('App/Models/KuppidoMasterInfo')
  }

  advertiserInfo () {
    return this.hasOne('App/Models/AdvertiserInfo')
  }

  client () {
    return this.hasOne('App/Models/ClientInfo')
  }

  kuppidoBankAccount () {
    return this.hasOne('App/Models/KuppidoBankAccount')
  }

  avatar () {
    return this.belongsTo('App/Models/File')
  }

  boostBalance () {
    return this.hasOne('App/Models/BoostBalance')
  }

  logBoostBalance () {
    return this.hasMany('App/Models/LogBoostBalance')
  }

  boostCampaign () {
    return this.hasMany('App/Models/BoostCampaign')
  }
}

module.exports = User
