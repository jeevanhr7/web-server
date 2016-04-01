var middleware = {
    requireautentication: function (req, res, next) {
        console.log('private Route Hit');
        next();

    },
    logger:function(req,res,next){
        console.log(req.method+''+req.originalUrl+''+new Date().toString());
        next();
    }
};
module.exports=middleware;