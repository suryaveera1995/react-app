var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
//app = require("../app");
app = require("../bin/www");
var url = supertest("http://localhost:8080");
var request=require('supertest');
var server=request.agent("http://localhost:8080");


/*this is for the registration of user*/
describe("this test is for the route to save users", function(err){
  it("should handle the request", function(done){
    url
        .post("/login/save")
        .expect(200)
          .send({username:"bhargava",password:"bhargava"})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("inserted",res.text, "res.text is not matching with inserted");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the registration Testing*/


/*function for the authenticate*/
function loginUser() {
  return function(done) {
      server
          .post('/login/login')
          .send({ username: 'bhargava', password: 'bhargava' })
          .expect(200)
          .end(onResponse);
      function onResponse(err, res) {
         if (err) return done(err);
         return done();
      }
  };
};
/*closed the function*/

/*this is tho check thet user is logged in(authenticate)*/
describe("This test is for the  route of authenticate of user", function(err){
  it("should handle the request", function(done){
    url
        .post("/login/login")
        .expect(200)
        .send({username:"bhargava",password:"bhargava"})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the login authenticate testing*/


/*this test is for the save news route*/
describe("This test is for save repos route", function(err){
it("It should test login", loginUser())
  it("should handle the request", function(done){
  server
        .post("/repos/save")
        .expect(200)
        .send({


             "id": 34530844446,
             "name": "blogposts",
             "full_name": "ximanta/blogposts",
             "owner": {
               "login": "ximanta",
               "id": 11771696,
               "avatar_url": "https://avatars.githubusercontent.com/u/11771696?v=3",
               "gravatar_id": "",
               "url": "https://api.github.com/users/ximanta",
               "html_url": "https://github.com/ximanta",
               "followers_url": "https://api.github.com/users/ximanta/followers",
               "following_url": "https://api.github.com/users/ximanta/following{/other_user}",
               "gists_url": "https://api.github.com/users/ximanta/gists{/gist_id}",
               "starred_url": "https://api.github.com/users/ximanta/starred{/owner}{/repo}",
               "subscriptions_url": "https://api.github.com/users/ximanta/subscriptions",
               "organizations_url": "https://api.github.com/users/ximanta/orgs",
               "repos_url": "https://api.github.com/users/ximanta/repos",
               "events_url": "https://api.github.com/users/ximanta/events{/privacy}",
               "received_events_url": "https://api.github.com/users/ximanta/received_events",
               "type": "User",
               "site_admin": false
             },
             "private": false,
             "html_url": "https://github.com/ximanta/blogposts",
             "description": null,
             "fork": true,
             "url": "https://api.github.com/repos/ximanta/blogposts",
             "forks_url": "https://api.github.com/repos/ximanta/blogposts/forks",
             "keys_url": "https://api.github.com/repos/ximanta/blogposts/keys{/key_id}",
             "collaborators_url": "https://api.github.com/repos/ximanta/blogposts/collaborators{/collaborator}",
             "teams_url": "https://api.github.com/repos/ximanta/blogposts/teams",
             "hooks_url": "https://api.github.com/repos/ximanta/blogposts/hooks",
             "issue_events_url": "https://api.github.com/repos/ximanta/blogposts/issues/events{/number}",
             "events_url": "https://api.github.com/repos/ximanta/blogposts/events",
             "assignees_url": "https://api.github.com/repos/ximanta/blogposts/assignees{/user}",
             "branches_url": "https://api.github.com/repos/ximanta/blogposts/branches{/branch}",
             "tags_url": "https://api.github.com/repos/ximanta/blogposts/tags",
             "blobs_url": "https://api.github.com/repos/ximanta/blogposts/git/blobs{/sha}",
             "git_tags_url": "https://api.github.com/repos/ximanta/blogposts/git/tags{/sha}",
             "git_refs_url": "https://api.github.com/repos/ximanta/blogposts/git/refs{/sha}",
             "trees_url": "https://api.github.com/repos/ximanta/blogposts/git/trees{/sha}",
             "statuses_url": "https://api.github.com/repos/ximanta/blogposts/statuses/{sha}",
             "languages_url": "https://api.github.com/repos/ximanta/blogposts/languages",
             "stargazers_url": "https://api.github.com/repos/ximanta/blogposts/stargazers",
             "contributors_url": "https://api.github.com/repos/ximanta/blogposts/contributors",
             "subscribers_url": "https://api.github.com/repos/ximanta/blogposts/subscribers",
             "subscription_url": "https://api.github.com/repos/ximanta/blogposts/subscription",
             "commits_url": "https://api.github.com/repos/ximanta/blogposts/commits{/sha}",
             "git_commits_url": "https://api.github.com/repos/ximanta/blogposts/git/commits{/sha}",
             "comments_url": "https://api.github.com/repos/ximanta/blogposts/comments{/number}",
             "issue_comment_url": "https://api.github.com/repos/ximanta/blogposts/issues/comments{/number}",
             "contents_url": "https://api.github.com/repos/ximanta/blogposts/contents/{+path}",
             "compare_url": "https://api.github.com/repos/ximanta/blogposts/compare/{base}...{head}",
             "merges_url": "https://api.github.com/repos/ximanta/blogposts/merges",
             "archive_url": "https://api.github.com/repos/ximanta/blogposts/{archive_format}{/ref}",
             "downloads_url": "https://api.github.com/repos/ximanta/blogposts/downloads",
             "issues_url": "https://api.github.com/repos/ximanta/blogposts/issues{/number}",
             "pulls_url": "https://api.github.com/repos/ximanta/blogposts/pulls{/number}",
             "milestones_url": "https://api.github.com/repos/ximanta/blogposts/milestones{/number}",
             "notifications_url": "https://api.github.com/repos/ximanta/blogposts/notifications{?since,all,participating}",
             "labels_url": "https://api.github.com/repos/ximanta/blogposts/labels{/name}",
             "releases_url": "https://api.github.com/repos/ximanta/blogposts/releases{/id}",
             "deployments_url": "https://api.github.com/repos/ximanta/blogposts/deployments",
             "created_at": "2015-04-24T16:58:15Z",
             "updated_at": "2016-02-05T19:46:26Z",
             "pushed_at": "2016-06-15T12:41:34Z",
             "git_url": "git://github.com/ximanta/blogposts.git",
             "ssh_url": "git@github.com:ximanta/blogposts.git",
             "clone_url": "https://github.com/ximanta/blogposts.git",
             "svn_url": "https://github.com/ximanta/blogposts",
             "homepage": null,
             "size": 880,
             "stargazers_count": 0,
             "watchers_count": 0,
             "language": "Java",
             "has_issues": false,
             "has_downloads": true,
             "has_wiki": true,
             "has_pages": false,
             "forks_count": 0,
             "mirror_url": null,
             "open_issues_count": 0,
             "forks": 0,
             "open_issues": 0,
             "watchers": 0,
             "default_branch": "master"

})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("saved in database",res.text, "res.text is not matching with saved in database");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the save test route*/


/*this test is for update route(updates comments)*/
describe("This test is for the update  route to update comments", function(err){
it("It should test login", loginUser())
  it("should handle the request", function(done){
  server
        .put("/repos/update")
        .expect(200)
        .send({

"id": "34530844446",
"Comments":"nice"

})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("comments updated",res.text, "not matching");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the update test route*/

/*this is test the delete route of news*/
describe("This is the test for delete route for repos deletion", function(err){
it("It should test login", loginUser())
  it("should handle the request", function(done){
  server
        .delete("/repos/delete")
        .expect(200)
        .send({
"id":"3453084446",
})
    .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("Data is deleted successfully",res.text, "res.text is not matching with Data is deleted successfully");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the deleted test route*/
