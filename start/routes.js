"use strict"

const Route = use("Route")

Route.get("products/", "ProductsController.index")
Route.get("products/:id", "ProductsController.show").middleware("protect")
