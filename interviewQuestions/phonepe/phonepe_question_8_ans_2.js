// question 8 - answer 2 - check solution

// function formatter(input) {
//     const resultMap = new Map();
    
//     input.forEach(node => {
//         resultMap.set(node.id, {
//             id: node.id,
//             children: []
//         })
//     })
    
//     input.forEach(node => {
//         if(node.parent !== -1) {
//             const parent = resultMap.get(node.parent);
//             parent.children.push(node.id);
//         }
//     })
    
//     function getAllChildren(node) {
//         let allChildren = [];
//         node.children.forEach(childId => {
//             const child = resultMap.get(childId);
//             allChildren.push(childId);
//             allChildren= allChildren.concat(getAllChildren(child));
//         })
//         return allChildren;
//     }
    
//     resultMap.forEach(node => {
//         node.children = getAllChildren(node);
//     })
//     return Array.from(resultMap.values());
// }

const formatter = input => {
    const output = []
    input.forEach(obj => {
        const result = {
            id: obj.id,
            children:[]
        }
        const queue = [...obj.children];
        while(queue.length) {
            const childId = queue.pop();
            const subChild = input.find(i => i.id === childId);
            result.children.push(childId)
            if(subChild) {
                queue.push(...subChild.children)
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