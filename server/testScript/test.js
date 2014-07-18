//tag

$.ajax({
    type: "post",
    url: "/api/tag/create",
    data: JSON.stringify({
        userId: "userId",
        tagName: "tagName"
    })
})


//user

$.ajax({
    type: "post",
    url: "/api/user/signup",
    data: JSON.stringify({
        email: "mue.miv@gmail.com",
        password: "123123"
    })
})

$.ajax({
    type: "post",
    url: "/api/user/signin",
    data: JSON.stringify({
        email: "mue@zeoalliance.com",
        password: "123123"
    })
})