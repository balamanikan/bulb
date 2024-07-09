var bulb = 0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "bulb2off.png";
        bulb=1;
    }
    else{
        document.getElementById("image").src = "bulb2on.png";
        bulb=0;
    }
}