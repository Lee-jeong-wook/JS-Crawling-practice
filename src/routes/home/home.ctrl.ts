import { Request, Response} from "express"; 
import Crawling from "../../model/Crawling";
import MusicInterface from "../../interfaces/musicInterface";

const post = {
    //쇼핑 상품에 대한 처리
    music: async (req: Request, res: Response) => {
        const crawl = new Crawling();
        const response:MusicInterface[] = await crawl.getMusics();
        response.forEach(element => {
            console.log(element.title);
        });
    },
}

module.exports= {
    post
};