function Unstar()
{
    if(document.getElementsByClassName("loading-message").length == 0)
    {
        let homeStars = document.getElementsByClassName("muted-link");
        for(let i = 2; i < homeStars.length; i++)
        {
            homeStars[i].innerHTML = "";
        }

        document.getElementsByClassName("social-count")[2].innerHTML = "0";
        return;
    }

    setTimeout(Unstar, 200);
}


Unstar();