import { InfluencerService } from './influencer.service';
import { Response } from 'express';
export declare class InfluencerController {
    private readonly influencerService;
    constructor(influencerService: InfluencerService);
    getUsers(query: string): Promise<import("./influencer.model").Influencer[]>;
    getUserFeed(url: string, limit: number): Promise<import("./influencer.model").Influencer>;
    proxyImage(url: string, res: Response): Promise<void>;
}
