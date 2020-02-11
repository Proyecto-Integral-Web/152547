<template>
  <section>

    <div class="sidenav">
      <div class="login-main-text">
        <h2>Application<br> Login Page</h2>
        <p>Login or register from here to access.</p>
      </div>
    </div>
    <div class="main">

      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form>
            <div class="form-group">
              <label>User Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="User Name"
              >
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              >
            </div>
            <button
              type="submit"
              class="btn btn-black"
            >Login</button>
            <button
              type="submit"
              class="btn btn-secondary"
            >Register</button>
          </form>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="js">

export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: ' ',
        password: ' '
      },
      userEmail: ' ',
      userPassword: ' '
    }
  },
  created () {
    console.log('estoy en created ')
  },
  mounted () {
    console.log('estoy en mounted')
  },
  methods: {
    login () {
      console.log('soy log in')
      console.log(this.user.email)
      console.log(this.user.password)
      setTimeout(() => {
        this.$router.push({ name: 'about' })
      }, 1000)
    }
  }
}
</script>

<style type="text/css">
.main-head {
  height: 150px;
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
