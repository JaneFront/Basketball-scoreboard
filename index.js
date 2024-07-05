let homeSumEl = document.getElementById("home-sum-el")    /*I created a variable for html element so that I could manipulate it*/
let guestSumEl = document.getElementById("guest-sum-el") 
let homecount = 0                                          /*I assigned a variable and set the initial value of homeSumEl to 0*/
let guestcount = 0


function homeadd1() {                                        /*I created the function to make the  buttons work and used the same name of onclick attribute in html*/
   homecount += 1                                           /*I reassigned the value of homecount variable so that it increments/adds 1 point*/
   homeSumEl.textContent = homecount                        /*I want the value of homeSumEl (0 on the site) to change every time the button (+1) is clicked and be equal to homecount*/
}


function homeadd2() {
    homecount += 2
    homeSumEl.textContent = homecount
}


function homeadd3() {
    homecount += 3
    homeSumEl.textContent = homecount
}


function guestadd1() {
    guestcount += 1
    guestSumEl.textContent = guestcount
}


function guestadd2() {
    guestcount += 2
    guestSumEl.textContent = guestcount
}


function guestadd3() {
    guestcount += 3
    guestSumEl.textContent = guestcount
}
