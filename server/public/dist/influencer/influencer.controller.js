"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluencerController = void 0;
const common_1 = require("@nestjs/common");
const influencer_service_1 = require("./influencer.service");
let InfluencerController = class InfluencerController {
    constructor(influencerService) {
        this.influencerService = influencerService;
    }
    async getUsers(query) {
        return this.influencerService.getUsers(query);
    }
    async getUserFeed(url, limit) {
        return this.influencerService.getUserFeed(url, limit);
    }
    async proxyImage(url, res) {
        try {
            const imageData = await this.influencerService.proxyImage(url);
            res.set('Content-Type', 'image/jpeg');
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Cross-Origin-Resource-Policy', 'cross-origin');
            res.send(imageData);
        }
        catch (error) {
            res.status(500).send('Error fetching image');
        }
    }
};
exports.InfluencerController = InfluencerController;
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfluencerController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('user-feed'),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], InfluencerController.prototype, "getUserFeed", null);
__decorate([
    (0, common_1.Get)('proxy-image'),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InfluencerController.prototype, "proxyImage", null);
exports.InfluencerController = InfluencerController = __decorate([
    (0, common_1.Controller)('influencer'),
    __metadata("design:paramtypes", [influencer_service_1.InfluencerService])
], InfluencerController);
//# sourceMappingURL=influencer.controller.js.map