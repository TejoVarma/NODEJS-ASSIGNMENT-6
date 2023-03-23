# NODEJS-ASSIGNMENT-6
NodeJS Assignment on creating a blog app(backend api)


reate a basic blog app with the following field (id, topic, description, posted_at, posted_by). In this
application user should create the blog, edit the blog, delete the blog, search the particular blog
Backend- Nodejs
Database- Mongodb

Api- endpoints
1. "/blog?page=&search=" - (GET)
description- :This api will used be for fetching the blog from database according to query parameters
query parameters- :
(i) search- In the search parameter word of topic will be provided and related topic will be shown
(ii). page- In the page parameter page number should be provided and each page will contain 5 blogs
Example- :
url- : /blog?page=1&search=react
response- :{
status:success,
result:[
{
id:. ,
topic:. . react. .,
description:. ,
posted_at:. ,
posted_by:. .
},
. .
]
}

2. "/blog" - (POST)
description- :This api is used for storing blog in database
body- :
Note- : id is auto- generated
1. topic:""
2. description:""
3. posted_at:""
4. posted_by:""
example- :
url- : "/blog"
body- :{
topic:""
description:""
posted_at:""
posted_by:""
}
response- :{
status:success,
result:
{
id:,
topic: "",
description: "",
posted_at: "",
posted_by: ""
}
}

3. "/blog/:id" - (PUT)
description- :This api is used for updating blog
query- :
1. id- provide id of particular blog which user wants to update
body- :
1. topic:""
2. description:""
3. posted_at:""
4. posted_by:""
example- :
url- : "blog/1234"
body- :{
topic:""
description:""
posted_at:""
posted_by:""
}
response- :{
status:success,
result:
{
id: 1234,
topic: "",
description: "",
posted_at: "",
posted_by: ""
}
}

4. "blog/:id" - (DELETE)
description- :This api is used for deleting blog
query- :
1. id- provide id of particular blog which user wants to delete
example- :
url- : "/blog/1234"
response- :{
status:success,
result:
{
id: 1234,
topic: "",
description: "",
posted_at: "",
posted_by: ""
}
}

Mongo Schema- :
Database Name- :Blog
There will be only one collection inside database Blog
Collection Name- :blog
Fields in collection blog- :
1. ObjectID
2. topic
3. description
4. posted_at
5. posted_by
