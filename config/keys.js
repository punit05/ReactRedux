if(process.env.NODE_ENV==='production')
{
    module.exports=require('./prod');
    // we are in production return thr prod set of keys
}
else 
{
   // we are in developmen return the dev sets of keys
    module.exports=require('./dev')
}