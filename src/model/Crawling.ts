import axios from "axios";
import * as cheerio from "cheerio";
import MusicInterface from "../interfaces/musicInterface";

class Crawling {
    async #getMusics(): Promise<MusicInterface[]> {
        try {
            const response = await axios.get("https://www.melon.com/chart/index.htm");
            const html: string = response.data;

            const $ = cheerio.load(html);

            let ulList: MusicInterface[] = [];
            const bodyList = $("tr.lst50");

            bodyList.each((i, element) => {
                ulList[i] = {
                    rank: i + 1,
                    //정규표현식 "/"정규표현식 시작, "\s" 공백문자, "/"패턴 끝, "g" 패턴과 일치하는 모든 부분
                    title: $(element).find("td div.wrap div.wrap_song_info div.rank01 span a").text().replace(/\s/g, ""),
                    artist: $(element).find("td div.wrap div.wrap_song_info div.rank02 span a").text().replace(/\s/g, ""),
                };
            });

            return ulList;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getMusics():Promise<MusicInterface[]> {
        return await this.#getMusics();
    }
}

export default Crawling;