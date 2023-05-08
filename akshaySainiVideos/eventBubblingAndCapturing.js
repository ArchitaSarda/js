const eventHandler = (e, divId) => {
    //e.stopPropagation();
    console.log(`${divId} clicked!`);
}


document.querySelector("#grandparent").addEventListener('click', (e) => eventHandler(e, "grandparent"),false)

document.querySelector("#parent").addEventListener('click', (e) => eventHandler(e, "parent"),false)

document.querySelector("#child").addEventListener('click', (e) => eventHandler(e, "child"),false)


//false or no value - bubbling
//true - capturing


