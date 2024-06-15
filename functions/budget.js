const data = require('../db.json'); // JSON 데이터를 로드

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(data.budget),
    };
};
