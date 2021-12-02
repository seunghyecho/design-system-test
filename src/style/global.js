import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    box-sizing:border-box;
    -webkit-tap-highlight-color: rgba(255,255,255,0); 
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "NotoSansKR", "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
cite,
code,
del,
dfn,
em,
img,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dd,
dl,
dt,
li,
ol,
ul,
fieldset,
form,
label,
legend,
button,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  font-style: normal;
  font-size: 100%;
  line-height: 1;
  font-family: inherit;
  list-style: none;
  text-decoration:none;
}

button,
input,
textarea,
select {
  border: none;
  outline: none;
  appearance: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: transparent;
  background-color: transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 0 white inset;
  box-sizing: border-box;
  border-radius: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

label {
  padding: 0.38em 0;
  display: block;
  width: 100%;
  appearance: none;
  outline: none;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  background-color: transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 0 white inset;
  cursor: pointer;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

q:before,
q:after,
blockquote:before,
blockquote:after {
content: "";
}
a{
  color:#999;
}
a:focus {
outline: thin dotted;
}
a:hover,
a:active {
outline: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
display: block;
}
audio,
canvas,
video {
display: inline-block;
}
audio:not([controls]) {
display: none;
}

img {
border: 0;
-ms-interpolation-mode: bicubic;
}

button,
input,
select,
textarea {
font-size: 100%;
margin: 0;
vertical-align: baseline;
line-height: normal;
box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px;

}

button::-moz-focus-inner,
input::-moz-focus-inner {
border: 0;
padding: 0;
}
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
cursor: pointer;
-webkit-appearance: button;
}
input[type="search"] {
-webkit-appearance: textfield;
-webkit-box-sizing: content-box;
-moz-box-sizing: content-box;
box-sizing: content-box;
}
input[type="search"]::-webkit-search-decoration {
-webkit-appearance: none;
}
input{
  &[type="text"]::placeholder,
  &[type="email"]::placeholder,
  &[type="password"]::placeholder {
    color: rgb(0 0 0 / 10%);
  }
  &[type="text"]:disabled,
  &[type="email"]:disabled,
  &[type="password"]:disabled {
    opacity: 0.5;
  }
  &:autofill,
  &:-webkit-autofill {
    display:none;
  }
}
textarea {
overflow: auto;
vertical-align: top;
}

sub,
sup {
  font-size: 0.8em;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.2em;
}
sup {
  top: -0.2em;
}
b {
  font-weight: bold;
}
em {
  font-style: italic;
}

`;
