<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/header/index.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: BRLNSDB;
  font-weight: 400;
  font-style: normal;
  src: url('./compon/BRLNSR.TTF') format('truetype');
}
#app {
  // font-family: BRLNSDB;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.v-modal {
  position: inherit !important;
}

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;

  padding: 0;

  border: 0;

  outline: 0;

  font-size: 100%;

  vertical-align: baseline;

  background: transparent;

  list-style: none;
}

body {
  line-height: 1;
  min-height: 100vh;
  // box-sizing: border-box;
  font-size: 16px !important;
}
#app {
  height: 100%;
  // margin-top: 59px;
}
:focus {
  outline: 1;
}

article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary {
  display: block;
}

ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";

  content: none;
}

a {
  margin: 0;

  padding: 0;

  border: 0;

  font-size: 100%;

  vertical-align: baseline;

  background: transparent;

  text-decoration: none;
}

ins {
  background-color: #ff9;

  color: #000;

  text-decoration: none;
}

mark {
  background-color: #ff9;

  color: #000;

  font-style: italic;

  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted #000;

  cursor: help;
}

table {
  border-collapse: collapse;

  border-spacing: 0;
}

hr {
  display: block;

  height: 1px;

  border: 0;

  border-top: 1px solid #cccccc;

  margin: 1em 0;

  padding: 0;
}

input,
select {
  vertical-align: middle;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

html,
body {
  width: 100%;
  background: #f1f1f1;
  font-family: Legend;
}
.dialog_title {
  font-family: AlibabaSans-Heavy;
}
input,
textarea {
  border: none;
}
::-webkit-scrollbar {
  width: 5px;
  height: 12px;
  background: #fff;
}
::-webkit-scrollbar-thumb {
  display: block;
  min-height: 12px;
  min-width: 5px;
  border-radius: 3px;
  background: rgb(217,217,217);
}
::-webkit-scrollbar-thumb:hover {
  display: block;
  min-height: 12px;
  min-width: 5px;
  border-radius: 3px;
  background: rgb(159, 159, 159);
}
</style>
