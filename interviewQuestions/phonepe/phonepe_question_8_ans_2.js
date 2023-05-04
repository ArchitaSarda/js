question 8 - answer 2 - check solution

function formatter(input) {
    const resultMap = new Map();
    
    input.forEach(node => {
        resultMap.set(node.id, {
            id: node.id,
            children: []
        })
    })
    
    input.forEach(node => {
        if(node.parent !== -1) {
            const parent = resultMap.get(node.parent);
            parent.children.push(node.id);
        }
    })
    
    function getAllChildren(node) {
        let allChildren = [];
        node.children.forEach(childId => {
            const child = resultMap.get(childId);
            allChildren.push(childId);
            allChildren= allChildren.concat(getAllChildren(child));
        })
        return allChildren;
    }
    
    resultMap.forEach(node => {
        node.children = getAllChildren(node);
    })
    return Array.from(resultMap.values());
}

module.exports = formatter;