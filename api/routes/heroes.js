module.exports = (app) => {
  const { listHeroes } = app.controllers.heroes;

  app.route("/api/v1/heroes").get(listHeroes);
};
