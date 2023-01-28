import {EconomyHostingPlan} from "../abstract/economy-hosting-plan";

export class WindowsEconomyHostingPlan implements EconomyHostingPlan {
    public getFeatures(): string {
        return "Windows Economy Hosting";
    }
}