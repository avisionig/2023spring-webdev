let calculator = {
    a : 0,
    b : 0,

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?');
        this.b = +prompt('b?');
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());