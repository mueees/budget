$.ajax({
    type: "post",
    url: "/api/user/signup",
    data: JSON.stringify({
        email: "mue@zeoalliance.com",
        password: "123123",
        success: function(){
            alert(1)
        },
        error: function(){
            alert(2)
        }
    })
})

$.ajax({
    type: "post",
    url: "/api/user/signin",
    data: JSON.stringify({
        email: "test@gmail.com",
        password: "test@gmail.com",
        success: function(){
            alert(1)
        },
        error: function(){
            alert(2)
        }
    })
})