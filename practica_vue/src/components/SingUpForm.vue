<template>
  <section>

    <div class="sidenav">
      <div class="login-main-text">
        <h2>Registro</h2>
        <p>Introduce tus datos para crear una nueva cuenta </p>
      </div>
    </div>
    <div class="main">

      <div class="row">
        <div class="col">
        </div>
        <div class="col-8 ">
          <div class="col-md-12 col-sm-12">
            <div class="login-form">
              <form>
                <div class="form-group">
                  <div class="row">
                    <div class="col-6">
                      <label>Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                      >
                    </div>
                    <div class="col-6">
                      <label>Apellido</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Apellido"
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Correo</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="User Name"
                  >
                </div>
                <div class="form-group">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  >
                </div>
                <span class="col-md-3"></span>
                <button
                  type="submit"
                  class="btn btn-secondary"
                  @click="singup"
                >Registrar</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col">
        </div>
      </div>

    </div>

  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: 'mail@mail.com',
        password: '123456',
        nombre: 'Test'
      }
    }
  },
  beforeCreate () {
    console.log(`Estoy en beforecreated ${this.user}`)
  },
  created () {
    console.log(`Estoy en created ${this.user}`)
  },
  mounted () {
    console.log(`Estoy en mounted ${this.user}`)
    console.log(`Estoy en ${this.$route.name}`)
    // this.login()
  },
  methods: {
    singup () {
      // Esta variable es de uso local de nuestro metodo.

      console.log('soy el login')
      console.log('User from data:' + this.user.email)
      console.log(this.user.password)
      Auth.signUp(this.user)
      setTimeout(() => {
        // Luego de iniciar sesión nos envia a la pagina about
        this.$router.push({ name: 'about' })
      }, 1000)
    }
  }
}
</script>

<style type="text/css">
.main-head {
  height: 50px;
  background: #fff;
}

.sidenav {
  height: 100%;
  width: 50%;
  background-color: #000;
  background-image: url("../assets/Jupiter.png");
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
  padding-top: 50px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 20%;
  }

  .register-form {
    margin-top: 0%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>
