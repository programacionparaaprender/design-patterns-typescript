import {OSType} from "../enums/os-type";
import {WindowsHostingPlanFactory} from "./concrete/windows-hosting-plan-factory";
import {LinuxHostingPlanFactory} from "./concrete/linux-hosting-plan-factory";
import {HostingPlanAbstractFactory} from "./abstract/hosting-plan-abstract-factory";
import {MacHostingPlanFactory} from "./concrete/mac-hosting-plan-factory";

export class HostingPlanFactoryMethod {
    public static getType(osType: OSType): HostingPlanAbstractFactory {
        if (osType == OSType.WINDOWS) {
            return new WindowsHostingPlanFactory();
        }
        if (osType == OSType.LINUX) {
            return new LinuxHostingPlanFactory();
        }
        if (osType == OSType.MAC) {
            return new MacHostingPlanFactory();
        }
        return new LinuxHostingPlanFactory();
    }
}