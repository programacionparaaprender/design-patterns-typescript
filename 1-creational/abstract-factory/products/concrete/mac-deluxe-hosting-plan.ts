import {DeluxeHostingPlan} from "../abstract/deluxe-hosting-plan";

export class MacDeluxeHostingPlan implements DeluxeHostingPlan {
    public getFeatures(): string {
        return "Mac Deluxe Hosting";
    }
}