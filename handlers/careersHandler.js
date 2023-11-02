const HtmlParser = require('../utils/HtmlParser');
const axiosHandler = require('../handlers/axiosHandler');

async function careersHandler(department) {
    // Make an API call
    const careersHtmlContent = await axiosHandler.fetchData('/company/careers');
    const htmlParser = new HtmlParser(careersHtmlContent);
    const openPositionTitles = htmlParser.getOpenPositionTitleNames(department);

    return { jobTitles: openPositionTitles };
}


module.exports = careersHandler;