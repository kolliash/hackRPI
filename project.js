  
        $(document).ready(function () {
            $("#toggleInfo1").click(function () {
                $(".med-info1").toggle();
            });

            let hiddenp = true;
        // Hide the element initially
        $(".med-info1").hide();
        $("#toggleInfo1").click(function () {
            // Check the state using an if statement
            if (hiddenp) {
                // If it's hidden, show the element
                $(".med-info1").show();
                hiddenp = false; // Update the state
            } else {
                // If it's visible, hide the element
                $(".med-info1").hide();
                hiddenp = true; // Update the state
            }
        });       
        let isHidden = true;
        // Hide the element initially
        $(".when1text").hide();
        $("#when1").click(function () {
            // Check the state using an if statement
            if (isHidden) {
                // If it's hidden, show the element
                $(".when1text").show();
                isHidden = false; // Update the state
            } else {
                // If it's visible, hide the element
                $(".when1text").hide();
                isHidden = true; // Update the state
            }
        });
        let isHidden1 = true;
        // Hide the element initially
        $(".importance1text").hide();
        $("#importance1").click(function () {
            // Check the state using an if statement
            if (isHidden1) {
                // If it's hidden, show the element
                $(".importance1text").show();
                isHidden1 = false; // Update the state
            } else {
                // If it's visible, hide the element
                $(".importance1text").hide();
                isHidden1 = true; // Update the state
            }
        });
        let isHidden2 = true;
        // Hide the element initially
        $(".warning1text").hide();
        $("#warning1").click(function () {
            // Check the state using an if statement
            if (isHidden2) {
                // If it's hidden, show the element
                $(".warning1text").show();
                isHidden2 = false; // Update the state
            } else {
                // If it's visible, hide the element
                $(".warning1text").hide();
                isHidden2 = true; // Update the state
            }
        });



        //med2
        $("#toggleInfo2").click(function () {
            $(".med-info2").toggle();
        });

        let hiddenc = true;
    // Hide the element initially
    $(".med-info2").hide();
    $("#toggleInfo2").click(function () {
        // Check the state using an if statement
        if (hiddenc) {
            // If it's hidden, show the element
            $(".med-info2").show();
            hiddenc = false; // Update the state
        } else {
            // If it's visible, hide the element
            $(".med-info2").hide();
            hiddenc = true; // Update the state
        }
    });       
    let isHiddenc = true;
    // Hide the element initially
    $(".when2text").hide();
    $("#when2").click(function () {
        // Check the state using an if statement
        if (isHiddenc) {
            // If it's hidden, show the element
            $(".when2text").show();
            isHiddenc = false; // Update the state
        } else {
            // If it's visible, hide the element
            $(".when2text").hide();
            isHiddenc = true; // Update the state
        }
    });
    let isHidden1c = true;
    // Hide the element initially
    $(".importance2text").hide();
    $("#importance2").click(function () {
        // Check the state using an if statement
        if (isHidden1c) {
            // If it's hidden, show the element
            $(".importance2text").show();
            isHidden1c = false; // Update the state
        } else {
            // If it's visible, hide the element
            $(".importance2text").hide();
            isHidden1c = true; // Update the state
        }
    });
    let isHidden2c = true;
    // Hide the element initially
    $(".warning2text").hide();
    $("#warning2").click(function () {
        // Check the state using an if statement
        if (isHidden2c) {
            // If it's hidden, show the element
            $(".warning2text").show();
            isHidden2c = false; // Update the state
        } else {
            // If it's visible, hide the element
            $(".warning2text").hide();
            isHidden2c = true; // Update the state
        }
    });



    //med3
    $("#toggleInfo3").click(function () {
        $(".med-info3").toggle();
    });

    let hiddeni = true;
// Hide the element initially
$(".med-info3").hide();
$("#toggleInfo3").click(function () {
    // Check the state using an if statement
    if (hiddeni) {
        // If it's hidden, show the element
        $(".med-info3").show();
        hiddeni = false; // Update the state
    } else {
        // If it's visible, hide the element
        $(".med-info3").hide();
        hiddeni = true; // Update the state
    }
});       
let isHiddeni = true;
// Hide the element initially
$(".when3text").hide();
$("#when3").click(function () {
    // Check the state using an if statement
    if (isHiddeni) {
        // If it's hidden, show the element
        $(".when3text").show();
        isHiddeni = false; // Update the state
    } else {
        // If it's visible, hide the element
        $(".when3text").hide();
        isHiddeni = true; // Update the state
    }
});
let isHidden1i = true;
// Hide the element initially
$(".importance3text").hide();
$("#importance3").click(function () {
    // Check the state using an if statement
    if (isHidden1i) {
        // If it's hidden, show the element
        $(".importance3text").show();
        isHidden1i = false; // Update the state
    } else {
        // If it's visible, hide the element
        $(".importance3text").hide();
        isHidden1i = true; // Update the state
    }
});
let isHidden2i = true;
// Hide the element initially
$(".warning3text").hide();
$("#warning3").click(function () {
    // Check the state using an if statement
    if (isHidden2i) {
        // If it's hidden, show the element
        $(".warning3text").show();
        isHidden2i = false; // Update the state
    } else {
        // If it's visible, hide the element
        $(".warning3text").hide();
        isHidden2i= true; // Update the state
    }
});

        });