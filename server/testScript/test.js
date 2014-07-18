//transaction
$.ajax({
    type: "post",
    url: "/api/transaction/create",
    data: JSON.stringify({
        count: 50,
        tags: '53c7f168fb7458ad0a2c1c97'
    })
})


//tag

$.ajax({
    type: "post",
    url: "/api/tag/create",
    data: JSON.stringify({
        tagName: "my tag name"
    })
})

$.ajax({
    type: "post",
    url: "/api/tag/edit",
    data: JSON.stringify({
        tagName: "RENAME",
        _id: '53c8d10c7cb57be107b27e11'
    })
})

$.ajax({
    type: "get",
    url: "/api/tag/get"
})

$.ajax({
    type: "post",
    url: "/api/tag/remove",
    data: JSON.stringify({
        _id: '53c8d10c7cb57be107b27e11'
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