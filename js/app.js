const stadler=document.querySelector('[data-body]') 
console.log(stadler)
const F=document.getElementsByTagName('footer')[0]
console.log(F)
function ferstdlr(){
  stadler.innerHTML=`
  <p>DevStore</p>
  <div class="nazi_fer">
  <div class="nazi" id="fer_nazi">
    <ul>
      <li><a href="index.html">Produtos</a></li>
      <li><a href="pag2.html">Cadastro</a></li>
    </ul>
  </div>
</div>
  `
}
function footer(){
  F.innerHTML=`
  <p> ® Roberta Pires</p>
  `
}
ferstdlr();
footer();