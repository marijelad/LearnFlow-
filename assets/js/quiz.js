
(function(){
 const form=document.querySelector('#quizForm'); if(!form)return;
 form.addEventListener('submit',e=>{e.preventDefault();let s=0;[['q1','b'],['q2','c'],['q3','a'],['q4','b'],['q5','c']].forEach(([q,a])=>{if(new FormData(form).get(q)===a)s++});localStorage.setItem('lf-quiz-score',String(s));location.href='quiz-results.html'});
})();
