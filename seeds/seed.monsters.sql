BEGIN;

TRUNCATE "monsters" RESTART IDENTITY CASCADE;
INSERT INTO monsters (base_setting, monster_name, climate, frequency, organization, activity, diet, 
intelligence, treasure, alignment, appearing, ac, movement, hd, thac0, attacks, damage, special_attacks, 
special_defence, magic_resistance, size, morale, xp, summary, habitat, ecology)
VALUES
  ('greyhawk', 
  'test monster 1', 
  'arid mountain caves',  
  'common', 
  'solitary', 
  'night', 
  'carnivore', 
  'low (2-4)', 
  'Type A', 
  'neutral leaning evil', 
  '1', 
  '16', 
  '12', 
  '2', 
  '+1', 
  '3(claw/claw/bite)', 
  'claw(d3)/bite(d4)', 
  '', 
  '', 
  '', 
  'small', 
  '8(skittish)', 
  '35', 
  'some badger dog thing that is sneaky at night or something', 
  'lives in desert mountains and comes out at night looking for sleeping prey',
  'ecology filler text yadda yadda');
COMMIT;