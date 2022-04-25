module.exports = app => {
    const controller = app.controllers.heroes;

    app.route('/api/v1/heroes')
        .get(controller.listHeroes);
}