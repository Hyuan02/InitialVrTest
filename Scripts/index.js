
let positions = [
    "4 4 -12",
    "0 4 -7",
    "-4 4 -12"
]
AFRAME.registerComponent('changepositiononnext', {
    init: function(){
        let el = this.el;
        let boxes = document.querySelector("#boxes").object3D.children;
        el.addEventListener('click', function(){
            positions.unshift(positions.pop());
            for(let i=0; i<boxes.length; i++){
                    boxes[i].el.setAttribute('animation', {property:'position', to: positions[i], easing:'linear'})
            }
        });
        
    }
})

AFRAME.registerComponent('changepositiononprevious', {
    init: function(){
        let el = this.el;
        let boxes = document.querySelector("#boxes").object3D.children;
        el.addEventListener('click', function(){
            positions.push(positions.shift());
            for(let i=0; i<boxes.length; i++){
                    boxes[i].el.setAttribute('animation', {property:'position', to: positions[i], easing:'linear'})
            }
        });
        
    }
})