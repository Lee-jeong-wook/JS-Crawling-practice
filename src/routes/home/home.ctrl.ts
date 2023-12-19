import { Request, Response} from "express"; 
import Crawling from "../../model/Crawling";

const post = {
    //쇼핑 상품에 대한 처리
    music: async (req: Request, res: Response) => {
        const crawl = new Crawling();
        crawl.getMusics();
    },
}

module.exports= {
    post
};