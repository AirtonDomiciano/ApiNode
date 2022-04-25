module.exports = app => {
    // Pega do banco (Json)
    const heroesDb = app.data.heroes;
    const controller = {};

    controller.listHeroes = (req, res) => {
        if (res) {
            return res.status(200)
                .json(heroesDb)
        }
    }
    return controller;
}