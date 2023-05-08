module.exports = (app) => {
  const controller = {};

  controller.genereateTeam = (req, res) => {
      console.log(req);
      console.log(res);
      
    return res.status(200).json(`${req.query.array}`);
  };
  return controller;
};
