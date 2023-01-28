import {DeluxeHostingPlan} from "../abstract/deluxe-hosting-plan";

export class LinuxDeluxeHostingPlan implements DeluxeHostingPlan {
    public getFeatures(): string {
        return "Linux Deluxe Hosting";
    }
}