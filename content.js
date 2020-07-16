// function Unstar()
// {
//     if(document.getElementsByClassName("loading-message").length == 0)
//     {
//         let homeStars = document.getElementsByClassName("muted-link");
//         for(let i = 2; i < homeStars.length; i++)
//         {
//             homeStars[i].innerHTML = "";
//         }

//         document.getElementsByClassName("social-count")[2].innerHTML = "0";
//         return;
//     }

//     setTimeout(Unstar, 100);
// }

// Unstar();

function UnstarFeed()
{
    console.log("feed");
}

function UnstarSearch()
{
    console.log("search");
}

function UnstarProfile()
{
    console.log("profile");
}

function UnstarRepo()
{
    console.log("repo");
}

let pageFunctions = {
    feed: UnstarFeed,
    search: UnstarSearch,
    profile: UnstarProfile,
    repo: UnstarRepo
};

function IdentifyPage()
{
    let loc = window.location;

    if(loc.pathname === "/")
    {
        return pageFunctions.feed;
    }
    else if(loc.pathname.search("search") === 1 && (loc.search.search("&type") === -1 || loc.search.search("&type=Repositories") !== -1))
    {
        return pageFunctions.search;
    }
    else if(loc.pathname.split("/").length === 2) //If there is only one slash in the pathname, ie we are at the profile
    {
        return pageFunctions.profile;
    }
    else
    {
        return pageFunctions.repo;
    }
}

IdentifyPage()();