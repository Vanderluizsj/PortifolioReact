import './Footer.css'

const Footer = ({ }) => {
    return (
        <div class="card ">
  {/*Footer*/} 
  <footer class="text-center rounded shadow-sm">
    {/*Grid container*/}  
    <div class="container">
      {/*Section: Links*/}  
      <section class="mt-3">
        {/*Grid row*/} 
        <div class="row text-center d-flex justify-content-center pt-2">
          {/*Grid column*/}  
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Sobre</a>
            </h6>
          </div>
          {/*Grid column*/}  

          {/*Grid column*/}  
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Curriculo</a>
            </h6>
          </div>
          
          
          {/*Grid column*/}  

          {/*Grid column*/}  
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Portifolio</a>
            </h6>
          </div>
          {/*Grid column*/}  
        </div>
        {/*Grid row*/} 
      </section>
      {/*Section: Links*/}  

      <hr class="my-3" />

      {/*Section: Text*/}  
      <section class="mb-1">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p id="textoRodape">
              Se você está pronto para abraçar uma vida mais saudável e livre de glúten, seremos seu parceiro. Não deixe o glúten controlar sua dieta, controle você mesmo. Siga nossas redes sociais e nos ajude nessa luta por uma vida mais saudável!
            </p>
          </div>
        </div>
      </section>
      {/*Section: Text*/}  

      {/*Section: Social*/}  
      <section class="text-center mb-3">
        <a href="https://www.facebook.com/vanderluiz.rosadeoliveira/" 
        target="_blank" 
        class="text-white me-3">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/vanderluiz_rosa_de_oliveira/" 
        target="_blank"  
        class="text-white me-3">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/vanderluiz/" 
        target="_blank" 
        class="text-white me-3">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/Vanderluizsj" 
        target="_blank" 
        class="text-white me-3">
          <i class="fa fa-github"></i>
        </a>
      </section>
      {/*Section: Social*/} 
    </div>
    {/*Grid container*/} 

    {/*Copyright*/} 
    <div class="text-center p-3" id="copy">
      © 2024 Vanderluiz R. Oliveira

      <div class="row">
        <div class="col-md-12 text-center">
          Imagens do carrossel de <a href="https://br.freepik.com/fotos-gratis/alimentos-sem-gluten-varias-massas-paes-e-salgadinhos-no-fundo-de-madeira-da-vista-superior_9667167.htm#query=comida%20sem%20gluten&position=1&from_view=keyword&track=ais">master1305 no Freepik</a>, <a href="https://br.freepik.com/fotos-gratis/close-up-mulher-segurando-pao_17806257.htm#query=prateleira%20sem%20gluten&position=32&from_view=search&track=ais"> Freepik</a> e <a href="https://www.pexels.com/pt-br/foto/mulher-de-hijab-branco-e-casaco-marrom-em-frente-a-uma-vitrine-de-comida-6097885/">Laura James</a>         
        </div>        
      </div>
      
      
    </div>
    
    {/*Copyright*/}
  </footer>
  {/*Footer*/}
</div>

    )
}
export default Footer