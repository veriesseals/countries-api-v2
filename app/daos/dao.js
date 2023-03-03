const daoCommon = require('./common/daoCommon');

// countryDao
// -----------------------------------------------
const countryDao = {
    ...daoCommon,
    ...require('./api/countryDao'),
    
}


// continentDao
// -----------------------------------------------
const continentDao = {
    ...daoCommon,
    ...require('./api/continentDao'),

}

// countryLanguage
// -----------------------------------------------
const countryLanguageDao = {
    ...daoCommon,
    ...require('./api/countryLanguageDao'),

}

// language
// -----------------------------------------------
const languageDao = {
    ...daoCommon,
    ...require('./api/languageDao'),

}

module.exports = {
    countryDao,
    continentDao,
    countryLanguageDao,
    languageDao

}
