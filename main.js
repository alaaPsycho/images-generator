document.getElementById('button').addEventListener("click",()=>{
    ImageGenerator()
})

let input = document.getElementById('input')
let section  = document.getElementById('section')

async function ImageGenerator(){

   const Response = await fetch('https://api.openai.com/v1/images/generations',{
        method:'POST',
        headers:{
            "Content-Type": "application/json" ,
              "Authorization": "Bearer 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" 
        },
        body:JSON.stringify({
        "prompt": input.value,
        "n": 4,
        "size": "1024x1024",
    })


    })
    
    let data = await Response.json()
    console.log(data)
   data.data.map(objct => {
          let  container = document.createElement('div')
          container.classList.add('img-container')
          let img = document.createElement('img')
          img.setAttribute('src',objct.url)
          container.append(img)
          document.getElementById('section').append(container)
         
    })

    
}


