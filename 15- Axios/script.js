const axios = require('axios');

// Get avec axios
axios.get('https://jsonplaceholder.typicode.com/posts')
// Axios convertit automatiquement les données en JSON ou en objet JS
.then(res => {
let posts = res.data;
posts.forEach(post => {
    console.log(`${post.id} - ${post.title}`);
    console.log(post.body);
    console.log('---------------------');
    });
})
.catch(err => console.log(err));

// // Même chose avec async et await 
async function fetchPosts() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        let posts = res.data;
        posts.forEach(post => {
            console.log(`${post.id} - ${post.title}`);
            console.log(post.body);
            console.log('---------------------');
        });
    } catch(err) {
        console.log(err);
    }
}

fetchPosts();

// POST avec axios
let configObj = {
    title: 'New Post',
    body: 'This is the body of the new post',
    userId: 1
};
axios.post('https://jsonplaceholder.typicode.com/posts', configObj)
.then(res => console.log(res.data))
.catch(err => console.log(err));


// PUT avec axios
let configObj = {
    title: 'Updated Post',
    body: 'This is the body after modification',
    userId: 4
};
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
    console.log('post before updating ')
    console.log(res.data)
})
axios.put('https://jsonplaceholder.typicode.com/posts/1', configObj)
.then(res => {
    console.log('post after updating ')
    console.log(res.data)
})
.catch(err => console.log(err));



// PATCH avec axios
let configObj = {
    title: 'Updated Post',
};
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
    console.log('post before updating ')
    console.log(res.data)
})
axios.patch('https://jsonplaceholder.typicode.com/posts/1', configObj)
.then(res => {
    console.log('post after updating ')
    console.log(res.data)
})
.catch(err => console.log(err));


// DELETE avec axios
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
    console.log('post deleted')
})

.catch(err => console.log(err));



// Exemple de requêtes avec l'instance d'axios

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{
        'Content-type': 'application/json'
    }
});

// GET
axiosInstance.get('/posts?userId=1')
.then(res => {
    console.log(res.data);
})
.catch(err => console.log(err));

// POST
const configObj = {
    title: 'New Post',
    body: 'This is the body of the new post',
    userId: 1
};

axiosInstance.post('/posts', configObj)
.then(res => {
    console.log(res.data);
})
.catch(err => console.log(err));

// PUT
const configObj = {
    title: 'Updated Post',
    body: 'This is the body after updating',
    userId: 6
};

const postId = [1, 40, 53];
axiosInstance.put(`/posts/${postId[0]}`, configObj)
.then(res => {
    console.log(res.data);
})
.catch(err => console.log(err));

// PATCH 
const configObj2 = {
    title: 'Updated Post',
};
axiosInstance.put(`/posts/${postId[1]}`, configObj2)
.then(res => {
    console.log(res.data);
})
.catch(err => console.log(err));


// DELETE
axiosInstance.delete(`/posts/${postId[2]}`)
.then(res => {
    console.log('post deleted');
})
.catch(err => console.log(err));
