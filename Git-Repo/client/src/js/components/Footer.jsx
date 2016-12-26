var React = require('react');
export default class Footer extends  React.Component{

render()
{
 return(
  <div className="row site-footer-container" id="footer">
    <article className="site-footer col-lg-6" role="containerinfo">
      <ul className="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
        <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
        <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      </ul>
    </article>
    <article className="col-lg-6">
      <ul class="site-footer-links">
          <li>© 2016 <span title="0.01475s from github-fe-0b0ad8d.cp1-iad.github.net">GitHub</span>, Repo.</li>
          <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
          <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
          <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
          <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
          <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
      </ul>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://github.com" aria-label="Homepage" className="site-footer-mark" title="GitHub">
        <svg aria-hidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>

       </article>
   </div>
 );
}
}
