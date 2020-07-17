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
    // Explore Area
    let exploreRepos = document.getElementsByClassName("py-2 my-2");
    for(let i = 0; i < exploreRepos.length; i++)
    {
        let starSpan = exploreRepos[i].getElementsByTagName("span")[4];
        starSpan.innerHTML = starSpan.innerHTML.split("</svg>")[0]+"</svg> 0";
    }

    // Activity Area
    if(document.getElementsByClassName("loading-message").length === 0)
    {
        let feedLinks = document.getElementsByClassName("muted-link");
        for(let i = 2; i < feedLinks.length; i++)
        {
            let link = feedLinks[i];
            if(link.getElementsByTagName("svg").length === 1)
            {
                link.innerHTML = link.innerHTML.split("</svg>")[0]+"</svg>0"
            }
        }

        return;
    }

    setTimeout(UnstarFeed, 100);
}

function UnstarSearch()
{
    let searchStars = document.getElementsByClassName("muted-link");
    for(let i = 0; i < searchStars.length; i++)
    {
        let stars = searchStars[i];
        stars.innerHTML = stars.innerHTML.split("</svg>")[0]+"</svg> 0";
    }
}

function UnstarProfile()
{
    let stars = document.getElementsByClassName("muted-link");
    for(let i = 0; i < stars.length; i++)
    {
        let star = stars[i];
        if(star.getElementsByTagName("svg").length === 1)
        {
            star.innerHTML = star.innerHTML.split("</svg>")[0] + "</svg> 0"
        }
    }
}

function UnstarRepo()
{
    document.getElementsByClassName("social-count")[2].innerHTML = "0";
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