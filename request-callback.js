module.exports = (i)=>{
    return (req,res)=>{
        i++;
        res.end(i.toString());
    };
};