const Pool = require('pg').Pool
const pool = new Pool({
	user: 'admin',
	host: 'localhost',
	database: 'bike_app',
	password: '9yBeHarE',
	port: 5432,

});

const getStations = () => {
	return new Promise (function(resolve, reject) {
		pool.query('SELECT id, nimi, osoite FROM stations', (error, results) => {
			if (error) {
				reject(error)
			}
			resolve(results.rows);
			
		})
	})
}

module.exports = { getStations }