p1 = Promise.resolve(50);
p2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 40))
p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'geek');
});
p4 = new Promise((resolve,reject) => resolve("hi"))
p5= 6;

const PA1 = Promise.all([p1, p2, p3, p4, p5])
.then(values => console.log(values))
.catch(values => console.log("error", values))


function MyPromiseAll(list) {
    if(list.length === 0) {
        return [];
    }
    const output = [];
    let completedPromisesCount = 0;
    return new Promise((resolve, reject) => {
        list.forEach((task, index) => {
            if(typeof task.then === "function") {
                task.then(value => {
                    output[index] = value;
                    completedPromisesCount +=1;
                    if(completedPromisesCount === list.length) {
                        resolve(output)
                    }
                }).catch(error => reject(error))
            } else {
                output[index] = task;
                completedPromisesCount +=1;
                if(completedPromisesCount === list.length) {
                    resolve(output)
                }
            }
        });
    })
}

const PA2 = MyPromiseAll([p1, p2, p3, p4, p5])
.then(values => console.log(values))
.catch(values => console.log("error", values))