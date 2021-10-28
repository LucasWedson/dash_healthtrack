let iconMenu = document.getElementById('iconMenu');
let sidebar = document.getElementById('sidebar');
let mainContent = document.getElementById('mainContent');

//Função para pegar a medida da tela
let w = window.innerWidth

window.addEventListener('resize', () => {
  w = window.innerWidth;
 
})

//Função para fazer sidebar aparecer e desaperecer
function responsiveSidebar() {
  if(w <= 768){
    
  }else{
    if(sidebar.style.display == 'none'){ //Se o sidebar estiver fechado 
      sidebar.style.display = 'block';
      mainContent.style.width = 'calc( 100% - 300px)';
    }else{
      sidebar.style.display = 'none'; // Se o sidebar estiver aberto 
      mainContent.style.width = '100%';
    }
  }
}
