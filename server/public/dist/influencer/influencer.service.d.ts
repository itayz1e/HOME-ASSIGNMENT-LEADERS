import { Influencer } from './influencer.model';
export declare class InfluencerService {
    private readonly apiUrl;
    getUsers(query: string, type?: string, platform?: string, limit?: number): Promise<Influencer[]>;
    getUserFeed(url: string, limit: number): Promise<Influencer>;
    proxyImage(url: string): Promise<Buffer>;
}
