
let id=document.querySelectorAll('.btn')
let des=document.getElementById('data')
let out=""
id.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        if(ele.innerHTML=="=")
        {
            out=String(eval(out))
        }
        else if(ele.innerHTML=="C")
        {
            out=""
        }
        else if(ele.innerHTML=="Del")
        {
            out=out.substring(0,out.length-1)
        } 
        else
        {
            out+=ele.innerHTML
        }
        des.innerHTML=out
    })
})



