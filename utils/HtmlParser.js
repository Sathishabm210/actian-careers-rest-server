const cheerio = require('cheerio');
const { ERROR_MESSAGES } = require('../constants/constants');
const { NotFoundError } = require('../handlers/error/errorHandler');

class HtmlParser {
    departments = [];
    jobTitles = [];
    constructor(htmlContent) {
        this.$ = cheerio.load(htmlContent);
    }

    getOpenPositionTitleNames(department) {

        this.$('div.job-posting div.job-heading').each((i, elem) => {
            const departmentName = this.$(elem).children().first().text()?.toLowerCase();
            this.departments[i] = departmentName;
            if (departmentName === department?.toLowerCase()) {
                this.getTitleElementsText(this.$(elem).siblings());
            }
        });

        if (!this.departments.includes(department?.toLowerCase())) {
            throw new NotFoundError(ERROR_MESSAGES.noDepartmentFound)
        }

        return this.jobTitles;
    }

    getTitleElementsText(selector) {
        return selector.map((i, el) => {
            return this.getJobNames(this.$(el).children());
        });
    }

    getJobNames(selector) {
        const jobNameElements = selector.find('.job-name');
        jobNameElements.map((i, element) => {
            this.jobTitles.push(this.$(element).text())
        })
        return this.jobTitles;
    }

}

module.exports = HtmlParser;