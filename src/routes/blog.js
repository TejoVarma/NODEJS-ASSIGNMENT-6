const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here
router.post("/blog", async (req,res)=>{
    try{
        let  newBlog = await new Blog(req.body);
        let blog = await newBlog.save();
        res.status(200).json({status:"success", result: blog});
    }
    catch(err){
        res.status(401).json({status : "failed", message : err.message});
    }
});
router.put("/blog/:id", async (req,res)=>{
    try{
        let id = await Blog.findById(req.params.id);
        if(id)
        {
            let updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new : true});
            let blog = await updatedBlog.save();
            res.status(200).json({status:"success", result: blog});
        }
        else
        {
            res.json({status : "failed to update", message : "Not a valid Id"});
        }
    }
    catch(err)
    {
        res.status(401).json({status : "failed", message : err.message})
    }
});


router.get("/blog", async (req,res)=>{
    try{
        let blog = await Blog.find({topic: new RegExp(req.query.search, "i")});
        let page = req.query.page;
        if(blog.length)
        {
            let pageRes = blog.slice((page-1)*5, page*5);
            if(pageRes.length)
            {
                res.status(200).json({status:"success", result:pageRes});
            }
            else
            {
                res.json({status:"failed",message: "No result found"});
            }
        }
        else
        {
            res.json({message : "No result found"});
        }
    }
    catch(err)
    {
        res.status(500).json({status : "failed to get", message : err.message});
    }
});

router.get("/blog/all", async (req,res)=>{
    try{
        let blog = await Blog.find();
        res.status(200).json({status:"success", result:blog});
    }
    catch(err)
    {
        res.status(500).json({status:"failed", message:err.message});
    }
});

router.delete("/blog/:id", async (req,res)=>{
    try{
        let id = await Blog.findById(req.params.id);
        if(id)
        {
            await Blog.findByIdAndDelete(req.params.id);
            res.status(200).json({status: "successfully deleted", message:id});
        }
        else
        {
            res.status(401).json({status:"failed", message : "Invalid Id"});
        }
    }
    catch(err)
    {
        res.status(401).json({status:"failed", message:err.message});
    }
})

module.exports = router;