module.exports = (app) => {
  const { genereateTeam } = app.controllers.genereateTeam;

  console.log(genereateTeam);
  app.route("/api/v1/genereateTeam").get(genereateTeam);
};
