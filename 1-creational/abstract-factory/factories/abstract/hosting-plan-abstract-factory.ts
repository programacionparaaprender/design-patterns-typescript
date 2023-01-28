import {EconomyHostingPlan} from "../../products/abstract/economy-hosting-plan";
import {DeluxeHostingPlan} from "../../products/abstract/deluxe-hosting-plan";
import {UltimateHostingPlan} from "../../products/abstract/ultimate-hosting-plan";

export abstract class HostingPlanAbstractFactory {
    public abstract createEconomyHosting(): EconomyHostingPlan;
    public abstract createDeluxeHosting(): DeluxeHostingPlan;
    public abstract createUltimateHosting(): UltimateHostingPlan;
}