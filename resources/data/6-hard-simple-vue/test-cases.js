"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
SimpleVue({
    data() {
        // @ts-expect-error
        this.firstname;
        // @ts-expect-error
        this.getRandom();
        // @ts-expect-error
        this.data();
        return {
            firstname: 'Type',
            lastname: 'Challenges',
            amount: 10,
        };
    },
    computed: {
        fullname() {
            return `${this.firstname} ${this.lastname}`;
        },
    },
    methods: {
        getRandom() {
            return Math.random();
        },
        hi() {
            alert(this.amount);
            alert(this.fullname.toLowerCase());
            alert(this.getRandom());
        },
        test() {
            const fullname = this.fullname;
            const cases = [];
        },
    },
});
//# sourceMappingURL=test-cases.js.map