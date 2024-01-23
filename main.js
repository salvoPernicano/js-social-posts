const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const containerHtml = document.getElementById("container");
const profilePicHtml = document.getElementById("profilePic");
const authorHtml = document.getElementById("author");



for (let i=0; i < posts.length; i++){

    containerHtml.innerHTML += `
    <div class="post">
    <div class="postHeader">
        <figure>
            <img src="${posts[i].author.image}" alt="" id="profilePic">
        </figure>
        <div class="postData">
            <h3 id="author">${posts[i].author.name}</h3>
            <span id="date">${posts[i].created}</span>

        </div>
    </div>
    <div class="postBody">
        <p id="postMex">${posts[i].content}</p>
        <figure>
            <img src="${posts[i].media}" alt="" id="postImg">
        </figure>
    </div>
    <div class="postFooter">
        <a href="#"><i class="fa-solid fa-thumbs-up"></i>Mi piace</a>
        <span class="contatore" id="likesCounter">Piace a ${posts[i].likes} persone</span>
    </div>
</div>
    `
}



const likedPost = [];

const likeButton = document.querySelectorAll("a");
likeButton.forEach((element, index) =>{
    element.addEventListener("click", function(){
        event.preventDefault()
        likePost(element, index);

       
    })
})

const likesCounterHtml = document.querySelectorAll(".contatore");
function likePost(elemento, index){
    let likes = posts[index].likes;
   
  if (elemento.classList.toggle("liked")){
    console.log(elemento, index);
    console.log(likes + 1);
    likesCounterHtml[index].innerHTML = `Piace a ${likes + 1} persone`;
    likedPost.push(posts[index].id)
    console.log(likedPost)
  } else {
    likesCounterHtml[index].innerHTML = `Piace a ${likes} persone`;;
  }
  
}

