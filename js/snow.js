var intro = prompt('Whats your name?')
document.getElementById("introduction").innerHTML =
"Happy Birthday " + intro + " !🎉 ";

//for the snow
particlesJS(
    "particles-js", {
        "particles":{
            "number":{
                "value":8,
                "density":{
                    "enable":true,
                    "value_area":600
                    }
                 },
                "shape":{
                    "type":"image",
                   
                    "image":{
                        "src":"https://i.pinimg.com/originals/9d/79/f1/9d79f11547a0edd240cf6178e9a5a871.gif",
                        "width":100,
                        "height":80
                    }
                },
                "opacity":{
                    "value":0.1,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":2,
                        "opacity_min":0.1,
                        "sync":false
                    }
                }, 
                "size":{
                    "value":100,
                    "random":false,
                    "anim":{
                        "enable":true,
                        "speed":10,
                        "size_min":40,
                        "sync":false
                    }
                },
                "move":{
                    "enable":true,
                    "speed":10,
                    "direction":"none",
                    "random":false,
                    "straight":false,
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                        "enable":false,
                        "rotateX":600,
                        "rotateY":1200
                    }
                 }
             },
         }
                    
    );
    var count_particles, update; 
    count_particles = document.querySelector('.js-count-particles'); 
        update = function() { 
            stats.begin(); stats.end(); 
            if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
                count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
            } 
        requestAnimationFrame(update); 
    }; 
requestAnimationFrame(update);;

