/**
 * returns a list of employees for testing
 */
function makeMonstersArray() {
  return [
    {
      id: 1,
      base_setting: 'whatever1',
      monster_name:'test monster 2',
      climate: 'plains',
      frequency: 'very rare', 
      organization: 'colony',
      activity: 'any', 
      diet: 'nectar',
      intelligence: 'none(vermin)',
      treasure: 'A,X', 
      alignment: 'neutral', 
      appearing: '400-2000',
      ac: '10',
      movement: '4',
      hd: '1hp',
      thac0:'+0',
      attacks:'pinch',
      damage:'1',
      special_attacks: 'blood drain',
      special_defence: '', 
      magic_resistance: '', 
      size: 'diminutive',
      morale: '20', 
      xp: 'special', 
      summary: 'swarm of blood drinking ants that normally drink nectar.  Swarm of locust plague sort of thing',
      habitat: 'they settle in an area for a bit, then move when nothing is left.',
      ecology: 'seen as nightmare pests, but they do clean out all the other pests and pollinate or whatever'
    },
    {
      id: 2,
      base_setting: 'whatever2',
      monster_name:'test monster 3',
      climate: 'temperate hills',
      frequency: 'rare', 
      organization: 'pair',
      activity: 'evenings', 
      diet: 'idk',
      intelligence: 'animal(1)',
      treasure: 'none', 
      alignment: 'neutral', 
      appearing: '2-4',
      ac: '14',
      movement: '16',
      hd: '4',
      thac0:'+1',
      attacks:'headbutt',
      damage:'d6',
      special_attacks: '',
      special_defence: 'something defensive', 
      magic_resistance: '15', 
      size: 'Large',
      morale: 'low', 
      xp: '15', 
      summary: 'they are like cows or something',
      habitat: 'they eat the grass and raise children',
      ecology: 'moooo'
  
      
    },
    
  ];
}

/**
 * returns a random item from the employees array
 */
function randomMonster() {
  const index = Math.floor(Math.random() * makeMonstersArray().length);
  return makeMonstersArray()[index];
}

module.exports = {
  makeMonstersArray,
  randomMonster
};