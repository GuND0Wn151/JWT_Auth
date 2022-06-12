const router=require("express").Router();
const verify=require("./verifyToken");
router.get('/',verify,(req,res)=>{
      res.json({
            posts:[{'title':"Main Title",'body':"Main Body"}]
      })


})
module.exports=router;