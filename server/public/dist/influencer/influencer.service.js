"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluencerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config();
let InfluencerService = class InfluencerService {
    constructor() {
        this.apiUrl = process.env.API_URL;
    }
    async getUsers(query, type = 'lookalike', platform = 'instagram', limit = 10) {
        try {
            const response = await axios_1.default.get(`${this.apiUrl}/dict/users/`, {
                headers: {
                    authkey: process.env.API_KEY,
                },
                params: {
                    q: query,
                    type: type,
                    platform: platform,
                    limit: limit,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error('Error during request:', error.message);
            throw new Error('Failed to fetch users');
        }
    }
    async getUserFeed(url, limit) {
        try {
            const response = await axios_1.default.get(`${this.apiUrl}/raw/ig/user/feed/`, {
                headers: { authkey: process.env.API_KEY },
                params: { url: url, limit: limit },
            });
            return response.data.items;
        }
        catch (error) {
            console.error('Error fetching user feed:', error.message);
            throw new Error('Failed to fetch user feed');
        }
    }
    async proxyImage(url) {
        try {
            const response = await axios_1.default.get(url, {
                responseType: 'arraybuffer',
                headers: {
                    Referer: 'https://www.instagram.com',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                },
            });
            return response.data;
        }
        catch (error) {
            throw new Error('Error fetching image');
        }
    }
};
exports.InfluencerService = InfluencerService;
exports.InfluencerService = InfluencerService = __decorate([
    (0, common_1.Injectable)()
], InfluencerService);
//# sourceMappingURL=influencer.service.js.map