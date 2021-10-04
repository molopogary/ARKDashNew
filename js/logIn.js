var objPeople=[
    {
        username:"sam",
        password:"sam123"

    },
    {
        username:"gary",
        password:"gary123"

    },
    {
        username:"babe",
        password:"babe123"

    }
]






function getInfo(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    var buttonUpload=document.getElementById("uploadconfirm")
    var buttonTarget=document.getElementById("target")
    var buttonActualOk=document.getElementById("actualOk")
    var buttonActualNoK=document.getElementById("actualNok")
    var buttonShow=document.querySelector('button')
    var buttonUploadFile=document.getElementById('uploadfile')
    
   buttonShow.addEventListener('click',()=>{
    for (i=0; i<objPeople.length;i++){
        if(username==objPeople[i].username && password == objPeople[i].password){
            console.log(username + "is logged in ")
            buttonUpload.disabled=false
            buttonTarget.disabled=false
            buttonActualOk.disabled=false
            buttonActualNoK.disabled=false
            buttonUploadFile.disabled=false
            alert('Successful Login')
            
            return
        }
    }
    alert('Incorrect login Details')
       
   })

   
}


