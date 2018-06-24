export class Agent {
    private rounds: number;
    private total: number;

    constructor(
        private readonly me: boolean,
        private readonly counts: number[],
        private readonly values: number[],
        maxRounds: number,
        private readonly log: (msg: string) => void) {
        this.rounds = maxRounds;
        this.total = 0;
        for (let i = 0; i < counts.length; i++) {
            this.total += counts[i] * values[i];
        }
    }

    public offer(offer: number[] | undefined): number[] | undefined {
        this.log(`${this.rounds} rounds left`);
        this.rounds--;
        if (offer) {
            let sum = 0;
            for (let i = 0; i < offer.length; i++) {
                sum += this.values[i] * offer[i];
            }

            if (sum >= this.total / 2) {
                return;
            }
        }

        offer = this.counts.slice();
        for (let i = 0; i < offer.length; i++) {
            if (!this.values[i]) {
                offer[i] = 0;
            }
        }

        return offer;
    }
}
