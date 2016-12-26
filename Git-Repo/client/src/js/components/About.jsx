var React = require('react');
export default class About extends  React.Component{

render()
{
 return(
   <div className="container-fluid">
       <div className="row">


       <div className="container-responsive">

       <h3 className="alt-h2 mt-3 mb-2 text-center">WELCOME HOME, Developers</h3>
       <p className="alt-h3 text-center text-gray">
       GitHub fosters a fast, flexible, and collaborative development process that lets you work on your own or with others.
       </p>

       </div>
       <hr/>

<div className="container-responsive">

               <div className="col-md-6">
                       <div className="float-md-left col-md-4 my-4">
                       <a class="site-text-orange octicon-middle" height="22"><h2>communities</h2></a>

                       <p class="text-gray">
                       GitHub hosts one of the largest collections of open source software. Create, manage, and work on some of today’s most influential technologies.
                       </p>
                   </div>
                   </div>
                   <div className="col-md-6">
                           <div className="float-md-left col-md-4 my-4">
                           <a class="site-text-red octicon-middle" height="22"><h2>support</h2></a>

                           <p class="text-gray">
Millions of developers use GitHub to build personal projects, support their businesses, and work together on open source technologies.
                           </p>

                       </div>
                      </div>
</div>
<hr/>


           <div className="col-md-12">
      <hr class="triband-hr mt-5 mb-0"/>
             <div className="float-md-left col-md-4 my-4">
                   <a class="site-text-orange octicon-middle" height="22"><h2>developments</h2></a>

                   <p class="text-gray">
                   GitHub hosts one of the largest collections of open source software. Create, manage, and work on some of today’s most influential technologies.
                   </p>
               </div>
               <div className="float-md-left col-md-4 my-4">
               <a class="site-text-orange octicon-middle" height="22"><h2>works</h2></a>

               <p class="text-gray">
               GitHub hosts one of the largest collections of open source software. Create, manage, and work on some of today’s most influential technologies.
               </p>
           </div>
           <div className="float-md-left col-md-4 my-4">
           <a class="site-text-orange octicon-middle" height="22"><h2>alumini</h2></a>

           <p class="text-gray">
           GitHub hosts one of the largest collections of open source software. Create, manage, and work on some of today’s most influential technologies.
           </p>
       </div>
           </div>
       </div>
   </div>
 );
}
}
