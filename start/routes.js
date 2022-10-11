"use strict"

const Route = use("Route")

Route.group(() => {
  Route.get("products/", "ProductsController.index")
  Route.get("products/:id", "ProductsController.show")
})
  .prefix("/api")
  .middleware("protect")
