
(function(){
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  function current(){return location.pathname.split('/').pop()||'index.html'}
  const header=`<header class="site-header"><div class="container nav" id="mainNav"><a class="brand" href="index.html"><img src="assets/images/logo-mark.svg" alt="LearnFlow logo"><span>LearnFlow</span></a><nav class="nav-links"><a href="courses.html">Explore</a><a href="paths.html">Learning paths</a><a href="instructors.html">Instructors</a><a href="pricing.html">Pricing</a><a href="blog.html">Resources</a></nav><div class="nav-actions"><button class="icon-btn" id="themeBtn" aria-label="Toggle color theme">◐</button><a class="btn btn-secondary" href="login.html">Log in</a><a class="btn btn-primary" href="signup.html">Start learning</a><button class="icon-btn menu-btn" id="menuBtn" aria-label="Open menu">☰</button></div></div></header>`;
  const footer=`<footer class="footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html"><img src="assets/images/logo-mark.svg" alt=""><span>LearnFlow</span></a><p class="muted">Practical courses for curious people who want to learn, build, and move forward.</p></div><div><h4>Learn</h4><a href="courses.html">All courses</a><a href="paths.html">Learning paths</a><a href="my-learning.html">My learning</a><a href="certificates.html">Certificates</a></div><div><h4>Teach</h4><a href="instructors.html">Instructors</a><a href="instructor.html">Become an instructor</a><a href="instructor-dashboard.html">Instructor dashboard</a><a href="create-course.html">Create a course</a></div><div><h4>Company</h4><a href="about.html">About</a><a href="careers.html">Careers</a><a href="contact.html">Contact</a><a href="help.html">Help center</a></div><div><h4>Legal</h4><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="accessibility.html">Accessibility</a><a href="404.html">404 demo</a></div></div><div class="footer-bottom between"><span>© 2026 LearnFlow. Portfolio demonstration project.</span><span>Built for GitHub Pages • No real payments are processed.</span></div></div></footer>`;
  const headerSlot=$('[data-header]'); if(headerSlot) headerSlot.innerHTML=header;
  const footerSlot=$('[data-footer]'); if(footerSlot) footerSlot.innerHTML=footer;
  const nav=$('#mainNav'); $('#menuBtn')?.addEventListener('click',()=>nav.classList.toggle('open'));
  const saved=localStorage.getItem('lf-theme'); if(saved==='dark') document.body.classList.add('dark');
  $('#themeBtn')?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('lf-theme',document.body.classList.contains('dark')?'dark':'light')});
  $$('.reveal').forEach(el=>new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('visible')),{threshold:.08}).observe(el));
  window.LF={
    toast(msg){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._tm);t._tm=setTimeout(()=>t.classList.remove('show'),2200)},
    addWishlist(id){let w=JSON.parse(localStorage.getItem('lf-wishlist')||'[]');if(!w.includes(id))w.push(id);localStorage.setItem('lf-wishlist',JSON.stringify(w));this.toast('Saved to your wishlist')},
    enroll(id){let e=JSON.parse(localStorage.getItem('lf-enrolled')||'[]');if(!e.includes(id))e.push(id);localStorage.setItem('lf-enrolled',JSON.stringify(e));this.toast('Course added to My Learning')},
    progress(id,v){localStorage.setItem('lf-progress-'+id,String(v));this.toast('Progress updated')}
  };
  $$('[data-toast]').forEach(b=>b.addEventListener('click',()=>LF.toast(b.dataset.toast)));
  $$('[data-wishlist]').forEach(b=>b.addEventListener('click',()=>LF.addWishlist(b.dataset.wishlist)));
  $$('[data-enroll]').forEach(b=>b.addEventListener('click',()=>LF.enroll(b.dataset.enroll)));
  $$('form[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();LF.toast(f.dataset.message||'Thanks — your demo submission was received.');f.reset()}));
})();
