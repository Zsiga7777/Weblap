async function getCars()
{
    try {
        const res = await fetch(`https://surveys-5jvt.onrender.com/api/cars/`);
           const data =await res.json();
   
           if(!res.ok)
           {
               console.log(data.description);
               return;
           }
   
           return data;
       }
       catch(error)
       {
           console.log(error);
       }


}
async function getCarById(id)
{
    try{
        const res = await fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`);
        const data = await res.json();

        if(!res.ok)
            {
                console.log(data.description);
                return;
            }
    
            return data;
        }
        catch(error)
        {
            console.log(error);
        }
    }

async function createCar(body)
{
    try {
        const res = await fetch(`https://surveys-5jvt.onrender.com/api/cars/`, {
           method: 'POST',
           headers:
           {
                "Content-type": "application/json; charset=UTF-8"
           },
           body: body,
        });
           const data = await res.json();
   
           if(!res.ok)
           {
               console.log(data.description);
               return;
           }
   
           return data;
       }
       catch(error)
       {
           console.log(error);
       }
}
async function updateCar (body, id)
{
    try {
        const res = await fetch(`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
           method: 'PUT',
           headers:
           {
                "Content-type": "application/json; charset=UTF-8"
           },
           body:body,
        });
           const data = await res.json();
   
           if(!res.ok)
           {
               console.log(data.description);
               return;
           }
   
           return data;
       }
       catch(error)
       {
           console.log(error);
       }
}
async function deleteCar (id)
{
    try {
        const res = await fetch (`https://surveys-5jvt.onrender.com/api/cars/${id}`, {
          method: 'DELETE'
        });
           const data =await res.json();
   
           if(!res.ok)
           {
               console.log(data.description);
               return;
           }
   
           return data;
       }
       catch(error)
       {
           console.log(error);
       }
}

async function test(){
let getResult = await getCars()
let getByIdResult = await getCarById(2)
let createResult = await createCar(JSON.stringify({model:"astra",brand:"opel",year:2005}))
let updateResult = await updateCar(JSON.stringify({model:"insignia",brand:"opel",year:2016}), 11)
let deleteResult = await deleteCar(11)

console.log( getResult)
console.log(getByIdResult)
console.log(createResult)
console.log(updateResult)
console.log(deleteResult)
}

test()