// question 8 - answer 1

function formatter(input) {
    const output = [];
    const topLevelObjects = input.filter(obj => obj.parent === -1);
    topLevelObjects.forEach(topLevelObj => {
        const result = {
            id: topLevelObj.id,
            children: []
        }
        const queue = [...topLevelObj.children];
        while(queue.length) {
            const childId = queue.pop();
            result.children.push(childId);
            const subChildren = input.find(obj => obj.id === childId);
            if(subChildren) {
                queue.push(...subChildren.children)
            }
        }
        output.push(result)
    })
    return output;
}

const input = [
    {
        title: "Engineering",
        id: 1,
        children: [2, 3],
        parent: -1,
    },
    {
        title: "Dev",
        id: 2,
        children: [4, 5],
        parent: 1,
    },
    {
        title: "QA",
        id: 3,
        children: [],
        parent: 1,
    },
    {
        title: "FE",
        id: 4,
        children: [],
        parent: 2,
    },
    {
        title: "BE",
        id: 5,
        children: [6],
        parent: 2,
    },
    {
        title: "Sales",
        id: 7,
        children: [8,9],
        parent: -1,
    },
    {
        title: "Product sales",
        id: 8,
        children: [10],
        parent: 7,
    },
    {
        title: "Service sales",
        id: 9,
        children: [],
        parent: 7,
    },
    {
        title: "Sub Product sales",
        id: 10,
        children: [],
        parent: 8,
    },
]

console.log(formatter(input));