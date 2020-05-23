import db from 'pg';
import {
    DatabaseExt
} from '../utils';
import combineTwoTables from './combine_two_tables';

describe("#combineTwoTables", () => {
    let testDb;

    beforeEach(function (done) {
        const dbPool = new db.Pool({
            user: process.env.TEST_DB_USER,
            host: process.env.TEST_DB_HOST,
            database: process.env.TEST_DB_NAME,
            password: process.env.TEST_DB_PASSWORD,
            port: process.env.TEST_DB_PORT
        });

        testDb = new DatabaseExt(dbPool);

        setupDb(testDb).then(_ => done());
    });

    afterEach(function (done) {
        resetDb(testDb).then(_ => done());
    });

    it("should be able to combine two tables", function (done) {
        combineTwoTables(testDb)
            .then(results => {
                expect(results.length).to.equal(2);
                expect(results).to.deep.equal([
                    { firstname: 'Neil', lastname: 'Breen', city: "New York", state: "NY" },
                    { firstname: 'Steven', lastname: 'Spielberg', city: "Tampa", state: "FL" }
                ]);
                done();
            })
            .catch(done);
    });

    function setupDb(tDb) {
        return tDb.execQuery({
            query: `CREATE TABLE person (
                    PersonId  SERIAL PRIMARY KEY,
                    FirstName varchar NOT NULL,
                    LastName  varchar NOT NULL
                   )`,
            values: []
        }).then(_ => tDb.execQuery({
            query: `CREATE TABLE address (
                        AddressId SERIAL PRIMARY KEY,
                        PersonId  SERIAL REFERENCES person(PersonId), 
                        City      varchar NOT NULL,
                        State     varchar NOT NULL
                       )`,
            values: []
        })).then(_ => {
            const persons = [{
                firstName: "Neil",
                lastName: "Breen"
            }, {
                firstName: "Steven",
                lastName: "Spielberg"
            }];
            const insertPersonOperations = persons.map(person => tDb.execQuery({
                query: "INSERT into person(FirstName, LastName) VALUES ($1, $2) RETURNING *",
                values: [person.firstName, person.lastName]
            }));

            return Promise.all(insertPersonOperations);
        }).then(results => {
            const person1 = results[0][0];
            const person2 = results[1][0];
            
            const addresses = [{
                personid: person1["personid"],
                city: "New York",
                state: "NY"
            }, {
                personid: person2["personid"],
                city: "Tampa",
                state: "FL"
            }];
            const insertAddressOperations = addresses.map(address => tDb.execQuery({
                query: "INSERT into address(City, State, PersonId) VALUES ($1, $2, $3)",
                values: [address.city, address.state, address.personid]
            }));

            return Promise.all(insertAddressOperations);
        });
    }

    function resetDb(aDb) {
        return aDb.execQuery({
            query: "DROP TABLE address, person",
            values: []
        });
    }
});
