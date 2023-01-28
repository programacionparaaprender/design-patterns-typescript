import {EconomyHostingPlan} from "../abstract/economy-hosting-plan";

export class LinuxEconomyHostingPlan implements EconomyHostingPlan {
    public getFeatures(): string {
        return "Linux Economy Hosting";
    }
}