
let positions = [
    "4 2 -12",
    "0 2 -7",
    "-4 2 -12"
]

const invisibleMaterial = new THREE.MeshBasicMaterial({side: THREE.FrontSide, colorWrite: false});
const invisibleBackSideMaterial = new THREE.MeshBasicMaterial({side: THREE.BackSide, colorWrite: false});
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


AFRAME.registerComponent('shaderhide', {
    init: function(){
        let el = this.el;
        for(let i = 0; i< 4; i++){
            // console.log(el.object3D.children[i]);
            if(i%2 == 0){
                el.object3D.children[i].children[0].material = invisibleBackSideMaterial;
            }
            else{
                el.object3D.children[i].children[0].material = invisibleMaterial;
            }
        }
    }
});