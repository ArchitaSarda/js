question 8 - answer 1

function formatter(input) {
    const topLevelObjects = input.filter(obj => obj.parent === -1);
    const result = [];
    
    for(const topLevelObj of topLevelObjects) {
        const obj = {
            id: topLevelObj.id,
            children: []
        };
        const stack = [...topLevelObj.children];
        
        while(stack.length) {
            const id = stack.pop();
            const child = input.find(obj => obj.id === id);
            if(child) {
                obj.children.push(child.id);
                stack.push(...child.children);
            }
        }
        result.push(obj)
    }
    return result;
}

module.exports = formatter;