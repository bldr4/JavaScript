
// Exemple appel API avec fetch
// Exemple avec then & catch
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    return res.json(); // convertir la réponse en objet js pour pouvoir l'utiliser sur l'interface web 
})
.then((data) => {
    data.forEach(post =>{
        console.log(`Post : ${post.id} - ${post.title}`);
        console.log(post.body);
        console.log('----------------');
        
    })
})
.catch((err) => {
    console.error(err);
});


// Exemple avec async & await

async function fetchData(){
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await res.json();

        data.forEach(post =>{
            console.log(`Post : ${post.id} - ${post.title}`);
            console.log(post.body);
            console.log('----------------');
        });


    }catch(e){
        console.error(e);
    }
}

fetchData();

// Exemple avec affichage sur l'interface web

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    return res.json();  
})
.then((posts) => {
    const list = document.querySelector('.list');
let count = 1;
    posts.slice(0,11).forEach(post =>{
        let li = document.createElement('li');
        let title = document.createElement('h2');
        let body = document.createElement('p');
        title.textContent = `${count}. ${post.title}`;
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);

        list.appendChild(li);
        count++;
    });
})
.catch((err) => {
    console.error(err);
});

// Autre exemple
fetch('https://jsonplaceholder.typicode.com/posts?_limit=11')
.then((res)=>{
    return res.json();  
})
.then((posts) => {
    const list = document.querySelector('.list');
let count = 1;
    posts.forEach(post =>{
        let li = document.createElement('li');
        let title = document.createElement('h2');
        let body = document.createElement('p');
        title.textContent = `${count}. ${post.title}`;
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);

        list.appendChild(li);
        count++;
    });
})
.catch((err) => {
    console.error(err);
});

// Exemple avec PUT -> modifier un post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({  // convertir l'objet js en format json
        id: 1,
        title: 'Post modifié',
        body: 'Contenu du post modifié',
        userId: 2
    })
})
.then((res)=>{
   return res.json();
})
.then((data) => {
    console.log('updated post ' , data);
})

.catch((err) => {
    console.error(err);
});


// Exemple avec PATCH -> modifier une partie d'un post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({  // convertir l'objet js en format json
        title: 'Post modifié',
    })
})
.then((res)=>{
   return res.json();
})
.then((data) => {
    console.log('Partially updated post ' , data);
})
.catch((err) => {
    console.error(err);
});

//  Exemple avec Delete 

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
.then(()=>{
    console.log('Post Deleted');
})
.catch((err) => {
    console.error(err);
});

// Exemple avec POST -> ajouter un post

//  Objet de configuration qui va être passé en param de la méthode fetch
const configObj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({  
        title: 'New post',
        body: 'Contenu du nouveau post',
        userId: 1
    })
}

fetch('https://jsonplaceholder.typicode.com/posts', configObj)
.then(res => res.json()
.then(data => console.log(data))
.catch(err => console.error(err))
);


