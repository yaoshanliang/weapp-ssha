var API_BASE = 'http://www.jsssha.com?json=1';

const CONFIG = {
    API_URL: {
        GET_INDEX: API_BASE,
        GET_PAGE: API_BASE + '&page_id=',
        GET_ARTICLE: API_BASE + '&p=',
        GET_CATEGORY: API_BASE + '&cat=',
    }
}

module.exports = CONFIG;