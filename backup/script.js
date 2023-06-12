function switchNavModal() {
    // get checkbox
    var checkBox = document.getElementById("navMenuCheckbox");
    // get modal of the nav menu
    var navModal = document.getElementById("navModal");
    
    // If the checkbox is checked, display the output text

    if (checkBox.checked == true){
    navModal.style.left = 0;
    scrolDisable();
    
    
    
  } else {
    
    navModal.style.left = "-900px";
    scrolEnable();
    
  }

}

// TO STOP SCROLLING

function scrolDisable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
    
function scrolEnable() {
    window.onscroll = function() {};
}