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
                  <a href="/" class="text-white">Home</a>
                </h6>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/curriculo" class="text-white">Curriculo</a>
                </h6>
              </div>


              {/*Grid column*/}

              {/*Grid column*/}
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/portifolio" class="text-white">Portifolio</a>
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
                  Minhas redes sociais:
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
              Imagem de

              <a href="https://iconscout.com/3d-illustrations/react" class="text-underline font-size-sm" target="_blank"> React, Angular, Sql, C# e Nodejs</a> by <a href="https://iconscout.com/contributors/tomsdesign" class="text-underline font-size-sm" target="_blank">Toms Design</a> 
              <br />             
              <a href="https://iconscout.com/3d-illustrations/bootstrap-framework-logo" class="text-underline font-size-sm" target="_blank"> Bootstrap Framework</a> by <a href="https://iconscout.com/contributors/fahrulsaputra7" class="text-underline font-size-sm" target="_blank">Fahrul Saputra</a>
              <br />
              <a href="https://www.freepik.com/icon/sass_5968358#fromView=search&page=1&position=19&uuid=6efb2096-6942-41b2-874e-a787ee1e2d5c">Icon Sass by Freepik</a>

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