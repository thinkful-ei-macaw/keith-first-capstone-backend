const express = require('express');
const xss = require('xss');

/**
 * Router to handle all requests to /monsterlist
 */
const monstersRouter = express.Router();
monstersRouter.use(express.json());

const Service = require('../services/service');
const MonstersService = new Service('monsters');

/**
 * Removes any possible XSS attack content
 * @param {{}} employee the object to remove XSS data from
 */
const sanitize = monster => {
  return {
    id: monster.id,
    base_setting: xss(monster.base_setting),
    monster_name: xss(monster.monster_name),
    climate: xss(monster.climate),
    frequency: xss(monster.frequency),
    organization: xss(monster.organization),
    activity: xss(monster.activity),
    diet: xss(monster.diet),
    intelligence: xss(monster.intelligence),
    treasure: xss(monster.treasure),
    alignment: xss(monster.alignment),
    appearing: xss(monster.appearing),
    ac: xss(monster.ac),
    movement: xss(monster.movement),
    hd: xss(monster.hd),
    thac0: xss(monster.thac0),
    attacks: xss(monster.attacks),
    damage: xss(monster.damage),
    special_attacks: xss(monster.special_attacks),
    special_defense: xss(monster.special_defense),
    magic_resistance: xss(monster.magic_resistance),
    size: xss(monster.size),
    morale: xss(monster.morale),
    xp: xss(monster.xp),
    summary: xss(monster.summary),
    combat: xss(monster.combat),
    habitat: xss(monster.habitat),
    ecology: xss(monster.ecology),

    
  };
};

// respond with all records on the base route
monstersRouter.get('/', (req, res, next) => {
  const db = req.app.get('db');

  MonstersService.getAllItems(db)
    .then(monsters => {
      return res
        .status(200)
        .json(monsters.map(sanitize));
    })
    .catch(next);

});

// respond with matching record when ID is provided
// otherwise, respond with 404
monstersRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const db = req.app.get('db');

  MonstersService.getItemById(db, id)
    .then(monster => {
      if (monster) {
        return res
          .status(200)
          .json(sanitize(monster));
          
      } else {
        return res
          .status(404)
          .json({
            error: { message: 'Monster not found' }
          });
      }
      
    })
    .catch(next);
});

module.exports = monstersRouter;