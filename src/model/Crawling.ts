import axios from "axios";
import * as cheerio from "cheerio";

class Crawling {
    async #getMusics() {
        try {
            // 1. Fetch HTML
            const response = await axios.get("https://www.genie.co.kr/chart/top200");
            const html: string = response.data; // Assuming the response is a string

            // 2. Use Cheerio to load the HTML
            const $ = cheerio.load(html);

            // 3. Extract data
            let ulList: object[] = [];
            const bodyList = $("tr.list");

            bodyList.each((i, element) => {
                ulList[i] = {
                    rank: i + 1,
                    title: $(element).find("td.info a.title").text().replace(/\s/g, ""),
                    artist: $(element).find("td.info a.artist").text().replace(/\s/g, ""),
                };
            });

            console.log("bodyList : ", ulList);
            return ulList;
        } catch (error) {
            console.error(error);
        }
    }

    async getMusics() {
        await this.#getMusics();
    }
}

export default Crawling;