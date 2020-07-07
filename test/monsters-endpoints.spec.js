const knex = require('knex');
const app = require('../src/app');

const { TEST_DATABASE_URL } = require('../src/config');
const { makeMonstersArray, randomMonster } = require('./monsters.fixtures');

// set up variables used throughout these tests
const table_name = 'monsters';
const endpoint = '/api';

describe('Monsters endpoints', () => {
  let db;
  before('set up db instance', () => {
    db = knex({
      client: 'pg',
      connection: TEST_DATABASE_URL
    });

    app.set('db', db);
  });

  const cleanData = () => db.from(table_name).truncate();
  before('clean the table', cleanData);
  afterEach('clean the table', cleanData);
  after('disconnect from db', () => db.destroy());

  // GET requests (READ)
  context(`Given there are items in the '${table_name}' table`, () => {
    const testMonsters = makeMonstersArray();

    beforeEach(() => {
      return db
        .into(table_name)
        .insert(testMonsters);
    });

    it(`GET '${endpoint}' responds with 200 with an array of items`, () => {
      return supertest(app)
        .get(endpoint)
        .expect(200, testMonsters);
    });

    it(`GET ${endpoint}/:id responds with 200 with the requested item`, () => {
      const expected = randomMonster();
      const { id } = expected;
      return supertest(app)
        .get(endpoint + '/' + id)
        .expect(200, expected);
    });

  });

  context(`Given no items in the '${table_name}' table`, () => {
    it(`GET ${endpoint} responds with 200 with an empty array`, () => {
      return supertest(app)
        .get(endpoint)
        .expect(200, []);
    });

    it(`GET ${endpoint}/:id responds with 404`, () => {
      const id = 2;
      return supertest(app)
        .get(endpoint + '/' + id)
        .expect(404);
    });
  });
  
});