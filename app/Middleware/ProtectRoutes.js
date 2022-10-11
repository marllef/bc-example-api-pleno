"use strict"

class ProtectRoutes {
  async handle({ request, response }, next) {
    const token = request.headers()["auth-token"]
    
    if (!token || token !== process.env.AUTH_TOKEN) {
      return response.status(401).json({
        message: "Não autorizado.",
      })
    }

    await next()
  }
}

module.exports = ProtectRoutes
