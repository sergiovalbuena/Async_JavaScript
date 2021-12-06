const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!, we didi it');
        }else{
            reject('Whoops, we didNT!');
        }
    });
};

//ejecturar la funcion 
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve('True 🦊');
            },2000)
        }else{
            const error = new Error('Whoops');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('hola, soy la segunda peticion'))
    .catch(err => console.error(err));


//retornar un arreglo con los reusltados 
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })