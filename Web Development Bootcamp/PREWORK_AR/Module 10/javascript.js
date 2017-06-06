/**
 * Alfredo Rodriguez
 * Date: 5/21/2017
 */


function grow()
{
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
}

function color()
{
    document.getElementById("box").style.backgroundColor = "blue"
}

function fade()
{
    document.getElementById("box").style.opacity = "0.2";
}

function reset()
{
    document.getElementById("box").style.opacity = "1.0";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange"
}