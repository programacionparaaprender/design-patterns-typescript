export class Flyweight {
    private readonly intrinsicState: any;

    constructor(intrinsicState: any) {
        this.intrinsicState = intrinsicState;
    }

    public operation(extrinsicState): void {
        const sharedState = JSON.stringify(this.intrinsicState);
        const uniqueState = JSON.stringify(extrinsicState);
        console.log(`Flyweight: Displaying shared (${sharedState}) and unique (${uniqueState}) state.`);
    }
}