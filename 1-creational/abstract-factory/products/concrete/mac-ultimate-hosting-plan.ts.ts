import {UltimateHostingPlan} from "../abstract/ultimate-hosting-plan";

export class MacUltimateHostingPlan implements UltimateHostingPlan {
    public getFeatures(): string {
        return "Mac Ultimate Hosting";
    }
}