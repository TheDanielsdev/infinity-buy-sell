$().ready(function () {
    $("#register").validate({
      rules: {
      fname: {
      required: true,
      noSpace: true
      },
       lname: {
           required: true,
           noSpace: true
       },
       email: {
           required: true,
           email: true
       },
       pwd: {
          required: true
      },
        pwd2: {
        required: true,
        equalTo: '#pwd'
    }
      },
        message: {
            fname: {
                required: 'please enter first name!'
            }
        }
      });
    
    $("#register").validate({
        
    // set some properties
    // messages and 
    // rules
    submitHandler: function(form) {
        alert('valid');
        // you can access form by `form` tag, for example $(form).serialize()
    }
});
    
    
    
});


$.validator.addMethod("noSpace", function(value, element){
    return value == '' || value.trim().length !=0
}, "no spaces allowed");