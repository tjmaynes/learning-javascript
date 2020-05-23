export default function combineTwoTables(db) {
    return db.execQuery({
        query: `SELECT FirstName, LastName, City, State
                FROM person
                LEFT JOIN address ON person.PersonId = address.PersonId
                ORDER BY person.FirstName`,
        values: []
    });
}
