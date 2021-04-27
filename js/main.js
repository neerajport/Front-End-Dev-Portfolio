function validateForm(){
  let nameErr = document.getElementById('errorName');
  let emailErr = document.getElementById('errorEmail');
  let flag=0;
  if(document.getElementById('fname').value.length == 0){
    nameErr.style.display = 'block'
    flag = 1
  }
  else{
    nameErr.style.display = 'none'
  }

  let email = document.getElementById('lname').value;
  if(!validateEmail(email)){
    emailErr.style.display="block";
    flag =1;
  }
  else{
    emailErr.style.display="none";
  }
  console.log(flag);
  if(flag == 1 ){
    return false;
  }
  else{
    return true;
  }

}



function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(email));
  return re.test(email);
}


$('.skill-per').each(function(){
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width",per+'%');
  $({animatedValue: 0}).animate({animatedValue: per},{
    duration: 1000,
    step: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});


