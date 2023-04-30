const obj = {
    name: "archita",
    fn1: function() {
        console.log(this.name);
        const context = this;
        function fn3() {
            console.log(this.name);
            console.log(context.name);
        };
        fn3();
        const fn4 = () => {
            console.log(this.name);
        };
        fn4();
    },
    fn2: () => {
        console.log(this.name)
    }
}

obj.fn1();
obj.fn2();

//also about new and classes in JS
//flatten array function