import {DeluxeHostingPlan} from "../abstract/deluxe-hosting-plan";

export class WindowsDeluxeHostingPlan implements DeluxeHostingPlan {
    public getFeatures(): string {
        return "Windows Deluxe Hosting";
    }
}