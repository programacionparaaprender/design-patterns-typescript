import {UltimateHostingPlan} from "../abstract/ultimate-hosting-plan";

export class LinuxUltimateHostingPlan implements UltimateHostingPlan {
    public getFeatures(): string {
        return "Linux Ultimate Hosting";
    }
}