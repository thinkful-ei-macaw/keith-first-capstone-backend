const express = require('express');
const xss = require('xss');
const bodyParser = express.json();


const monstersRouter = express.Router();
monstersRouter.use(express.json());

const Service = require('../services/service');
const MonstersService = new Service('monsters');


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
    special_defence: xss(monster.special_defence),
    magic_resistance: xss(monster.magic_resistance),
    size: xss(monster.size),
    morale: xss(monster.morale),
    xp: xss(monster.xp),
    summary: xss(monster.summary),
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

monstersRouter.post('/', bodyParser, (req, res, next) => {
  const db = req.app.get('db');
  if(!req.body.monster_name) {
    return res.status(400).send({
      success: 'false',
      message: 'monster name is required'
    });
  } else if(!req.body.org) {
    return res.status(400).send({
      success: 'false',
      message: 'org is required'
    });
  }
  else if(!req.body.diet) {
    return res.status(400).send({
      success: 'false',
      message: 'diet is required'
    });
  }
  else if(!req.body.int) {
    return res.status(400).send({
      success: 'false',
      message: 'int is required'
    });
  }
  else if(!req.body.ac) {
    return res.status(400).send({
      success: 'false',
      message: 'ac is required'
    });
  }
  else if(!req.body.movement) {
    return res.status(400).send({
      success: 'false',
      message: 'movement is required'
    });
  }
  else if(!req.body.hd) {
    return res.status(400).send({
      success: 'false',
      message: 'hd is required'
    });
  }
  else if(!req.body.thac0) {
    return res.status(400).send({
      success: 'false',
      message: 'thac0 is required'
    });
  }
  else if(!req.body.attacks) {
    return res.status(400).send({
      success: 'false',
      message: 'attacks is required'
    });
  }
  else if(!req.body.damage) {
    return res.status(400).send({
      success: 'false',
      message: 'damage is required'
    });
  }
  else if(!req.body.size) {
    return res.status(400).send({
      success: 'false',
      message: 'size is required'
    });
  }
  else if(!req.body.summary) {
    return res.status(400).send({
      success: 'false',
      message: 'summary is required'
    });
  }
  
  else if(!req.body.habitat) {
    return res.status(400).send({
      success: 'false',
      message: 'habitat is required'
    });
  }
  else if(!req.body.ecology) {
    return res.status(400).send({
      success: 'false',
      message: 'ecology is required'
    });
  }

  

  const monster = {
    
    base_setting: req.body.base_setting,
    monster_name: req.body.monster_name,
    climate: req.body.climate,
    frequency: req.body.frequency,
    organization: req.body.org,
    activity: req.body.activity,
    diet: req.body.diet,
    intelligence: req.body.int,
    treasure: req.body.treasure, 
    alignment: req.body.alignment,
    appearing: req.body.appearing,
    ac: req.body.ac,
    movement: req.body.movement,
    hd: req.body.hd, 
    thac0: req.body.thac0,
    attacks: req.body.attacks,
    damage: req.body.damage,
    special_attacks: req.body.sAttack,
    special_defence: req.body.sDefense,
    magic_resistance: req.body.mr,
    size: req.body.size,
    morale: req.body.morale,
    xp: req.body.xp,
    summary: req.body.summary,
    habitat: req.body.habitat,
    ecology: req.body.ecology,
    date_created: new Date().toISOString()
  };
  MonstersService.insertItem(db, monster)
    .then(monster => {
      return res.status(201).send({
        success: 'true',
        message: 'monster added successfully',
        monster
      })
        .catch(err => next(err));
    });
});


module.exports = monstersRouter;