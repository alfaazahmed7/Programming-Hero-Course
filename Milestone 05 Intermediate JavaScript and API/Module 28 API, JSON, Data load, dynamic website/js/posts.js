const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())

        // data is a parameter of the arrow function
        // It receives the result from res.json()
        // Then it is passed as an argument to displayPost
        .then((data) => {
            // console.log(data);
            displayPost(data);
        });
};

// const displayPost = (posts) => {

//     // 1. get the ul container
//     const postContaier = document.getElementById("post-container");
//     postContaier.innerHTML = "";

//     posts.forEach((post) => {

//         // 2. create an html element
//         const li = document.createElement("li");
//         li.innerText = post.title;

//         // 3. put the li into the container
//         postContaier.appendChild(li);
//     });
// };

const displayPost = (posts) => {

    // get the container and empty it
    const postContaier = document.getElementById("post-container");
    postContaier.innerHTML = "";

    posts.forEach((post) => {

        // create an html element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;

        // add to the container
        postContaier.append(postCard);
    });
};
loadPost();