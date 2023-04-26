const corpo=document.querySelector('[data-body]') 
console.log(corpo)
const F=document.getElementsByTagName('footer')[0]
console.log(F)
function site(){
  corpo.innerHTML=`
  <p>DevStore</p>
  <div class="nav_menu">
  <div class="nav" id="nav_list">
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
site();
footer();