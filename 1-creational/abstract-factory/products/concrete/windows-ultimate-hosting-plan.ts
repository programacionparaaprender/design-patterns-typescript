import {UltimateHostingPlan} from "../abstract/ultimate-hosting-plan";

export class WindowsUltimateHostingPlan implements UltimateHostingPlan {
    public getFeatures(): string {
        return "Windows Ultimate Hosting";
    }
}