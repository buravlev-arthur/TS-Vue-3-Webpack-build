<template>
  <div class="col">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <img
          src="./assets/images/typescript.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Typescript icon"
        />

        <img
          src="./assets/images/vue.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Vue icon"
        />

        <img
          src="./assets/images/webpack.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Webpack icon"
        />

        <img
          src="./assets/images/bootstrap.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Bootstrap icon"
        />

        <img
          src="./assets/images/sass.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Sass icon"
        />

        <img
          src="./assets/images/eslint.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Eslint icon"
        />

        <img
          src="./assets/images/stylelint.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Stylelint icon"
        />

        <img
          src="./assets/images/babel.svg"
          class="rounded d-block stack-icons align-self-center m-3"
          alt="Babel icon"
        />
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <p class="text-center">
          <small>{{about}}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      about: 'The "TypeScript + Vue 3 + Webpack" build prepared for production purposes. The build also contains configured libraries: Vuex, Vue-router, Bootstrap 5, Bootstrap-icons. ESLint and Stylelint linting is provided as well. Implemented Babel compilation and CSS compression by building the project.',
    };
  },
};
</script>
