let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
})

let data = {};
let acceptdata = () =>{
    data["text"] = input.value;
    console.log(data);
    createPost();
}

let formValidation = () =>{
    if(input.value === ""){
        msg.innerHTML = "Post cannt be set blanked."
        console.log("failure");
    }else{
        msg.innerHTML= " ";
        console.log("success");
        acceptdata();
    }
};

let createPost = () => {
    post.innerHTML += `
    <div>
        <p>${data.text} </p>
        <span class="options" id="icons">
            <i onClick="editPost(this)" id="editit" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" id="deleteit" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

let deletePost = (e) =>{
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}