import {EconomyHostingPlan} from "../abstract/economy-hosting-plan";

export class MacEconomyHostingPlan implements EconomyHostingPlan {
    public getFeatures(): string {
        return "Mac Economy Hosting";
    }
}