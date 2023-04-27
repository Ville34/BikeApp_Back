const Pool = require('pg').Pool
const pool = new Pool({
	user: 'admin',
	host: 'localhost',
	database: 'bike_app',
	password: '9yBeHarE',
	port: 5432,

});
var getData = () => {
	return new Promise (function(resolve, reject) {
		pool.query('SELECT * FROM biking_data WHERE covered_distance_m > 10 AND duration_sec > 10 LIMIT 10000', (error, results) => {
			if (error) {
				reject(error)
			}

			resolve(results.rows);





		})
	})
}


module.exports = { getData }
