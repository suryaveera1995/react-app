
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var GithubSchema=new schema({
 id:{type:String,unique:true},
 name:String,
 full_name:String,
 html_url:String,
avatar_url:String,
private:String,
ssh_url:String,
clone_url:String,
svn_url:String,
description:String,
language:String,
comments:String
});
module.exports=mongoose.model('Gitrepo',GithubSchema);
