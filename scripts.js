//still have to finish 5a, moving rocket image around

let verticalMove = 0;
let horizontalMove = 0;

window.addEventListener('load', function(){
    console.log("loaded");
    let takeoffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    let height = document.getElementById('spaceShuttleHeight');
    let shuttleHeight = 0;

    takeoffButton.addEventListener('click', function(){
        let popup = window.confirm('Confirm the shuttle is ready for takeoff.');

        if (popup){
            console.log("you took off");
  
            let status = document.getElementById('flightStatus');
            status.innerHTML = "Shuttle in flight.";
       
            let background = document.getElementById('shuttleBackground');
            background.style.backgroundColor = 'blue';
        
            shuttleHeight += 10000
            height.innerHTML = shuttleHeight;
        }
    })

    landButton.addEventListener('click', function(){   
        let popup = window.confirm('The shuttle is landing. Landing gear engaged.');
        
        if (popup){
            console.log("you landed");

            let status = document.getElementById('flightStatus');
            status.innerHTML = "The shuttle has landed.";

            let background = document.getElementById('shuttleBackground');
            background.style.backgroundColor = '';
    
            shuttleHeight = 0;
            height.innerHTML = shuttleHeight;

            rocket.style.top = '';
            rocket.style.left = '';
        }
    })

    abortButton.addEventListener('click', function(){   
        let popup = window.confirm('Confirm that you want to abort the mission.');
        
        if (popup){
            console.log("you aborted the mission");

            let status = document.getElementById('flightStatus');
            status.innerHTML = "Mission aborted.";

            let background = document.getElementById('shuttleBackground');
            background.style.backgroundColor = '';

            shuttleHeight = 0;
            height.innerHTML = shuttleHeight;

            rocket.style.top = '';
            rocket.style.left = '';
        }
    })

    let allButtons = document.querySelectorAll("button");
    let upButton = allButtons[0];
    let downButton = allButtons[1];
    let rightButton = allButtons[2];
    let leftButton = allButtons[3]; 
    let rocket = document.getElementById("rocket");
    
    // verticalMove = document.getElementById("rocket").style.top;
    // horizontalMove = document.getElementById("rocket").style.left;

    //^ Can I do that even though top and left are not defined in index.html?

    //part a: The rocket image should move 10 px in the direction of the button that was clicked.
    upButton.addEventListener('click', function(){
        console.log("clicked up");
        shuttleHeight += 10000;
        height.innerHTML = shuttleHeight;
        
        verticalMove -= 10;
        rocket.style.top = verticalMove + 'px';
    })

    downButton.addEventListener('click', function(){
        console.log("clicked down");
        shuttleHeight -= 10000;
        height.innerHTML = shuttleHeight;
        
        verticalMove += 10;
        rocket.style.top = verticalMove + 'px';
    })

    rightButton.addEventListener('click', function(){
        console.log("clicked right");

        horizontalMove += 10;
        rocket.style.left = horizontalMove + 'px';
    })

    leftButton.addEventListener('click', function(){
        console.log("clicked left");

        horizontalMove -= 10;
        rocket.style.left = horizontalMove + 'px';
    })

})