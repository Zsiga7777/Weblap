async function GetAllPosts() {
    try {
     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data =await res.json()

        if(!res.ok)
        {
            console.log(data.description);
            return;
        }

        return data
    }
    catch(error)
    {
        console.log(error)
    }
  }

  async function GetPostById(id) {
    try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data =await res.json()

        if(!res.ok)
        {
            console.log(data.description);
            return;
        }

        return data
    }
    catch(error)
    {
        console.log(error)
    }
  }

  async function CreatePost() {
    try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        header:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        })});
        const data = await res.json()

        if(!res.ok)
        {
            console.log(data.description);
            return;
        }

        return data
    }
    catch(error)
    {
        console.log(error)
    }
  }

  async function UpdatePost(id) {
    try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        header:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })});
        const data = await res.json()

        if(!res.ok)
        {
            console.log(data.description);
            return;
        }

        return data
    }
    catch(error)
    {
        console.log(error)
    }
  }

  async function PatchPost(id) {
    try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        header:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
          
        })});
        const data = await res.json()

        if(!res.ok)
        {
            console.log(data.description);
            return;
        }

        return data
    }
    catch(error)
    {
        console.log(error)
    }
  }
    
  async function DeletePost(id) {
    try {
     const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`, {
       method: 'DELETE'
     })
        const data =await res.json()

        if(!res.ok)
        {
            console.log(data.description);
            return;
        }

        return data
    }
    catch(error)
    {
        console.log(error)
    }
  }
console.log(await GetAllPosts())
console.log(await GetPostById(1))
console.log(await CreatePost())
console.log(await UpdatePost(2))
console.log(await PatchPost(3))
console.log(await DeletePost(4))