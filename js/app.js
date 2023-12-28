//api 
const APIURL = "https://api.github.com/users/"



//selectors 
const search = document.querySelector('#search')
const main = document.querySelector("#main");

//for getting user make async fn 

const getUser = async (username) => {
    const resposnse = await fetch(APIURL + username)
    const data = await resposnse.json()
    console.log(data)
    const card = `
  <div class="box">
    <div>
        <img class="avatar" src="${data.avatar_url
        } " alt="Florin Pop">

    </div>
    <div class="user-info">
        <h2>${data.login}</h2>
        <p> ${data.bio}</p>

        <ul class="info">

        <li>${data.followers}<strong>Followers</strong></li>
        <li>${data.following}<strong>Following</strong></li>
        <li>${data.public_repos}<strong>Repos</strong></li>
        </ul>



        <div id="repos">

        </div>
    </div>
</div> 
    `
    main.innerHTML = card
    getrepoes(username)

}
//int call 
getUser("Shivam-Mishra20")



// get repoes and showing repoes

const getrepoes = async (username) => {
    const repo = document.querySelector('#repos')
    const resposnse = await fetch(APIURL + username + '/repos')
    const data = await resposnse.json()
    console.log(data)

    data.forEach(
        
        (item) => {
        const elm = document.createElement('a')
        elm.classList.add('repo');
        elm.innerText=item.name
        elm.href=item.html_url
        repo.append(elm)
        elm.target="blank"

             

        }
         
    )

}

const formSubmit = () => {
    if (search.value != "") {
        getUser(search.value);
        search.value = ""
    }
    return false;
}


search.addEventListener(
    "focusout",
    function () {
        formSubmit()
    }
)


