(()=>{var n,A={935:(n,A,i)=>{"use strict";i.d(A,{Z:()=>p});var e=i(537),t=i.n(e),r=i(645),a=i.n(r),o=i(667),s=i.n(o),l=new URL(i(884),i.b),d=new URL(i(567),i.b),m=new URL(i(490),i.b),f=new URL(i(947),i.b),h=a()(t()),c=s()(l),E=s()(d),g=s()(m),b=s()(f);h.push([n.id,"body,\nhtml {\n  margin: 0;\n}\nbody {\n  display: flex;\n  flex-wrap: wrap;\n  color: #fffd;\n  background-color: hsl(291, 60%, 2%);\n  background-image: url("+c+"), url("+E+"), url("+g+");\n  background-repeat: repeat-x;\n  font-family: Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;\n  text-shadow: 0 0 2px hsl(291, 60%, 2%);\n}\na:link,\na:visited,\na:hover,\na:active {\n  color: #dbb1e2;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\nsvg {\n  max-width: 30px;\n  max-height: 30px;\n}\nnav {\n  box-shadow: 3vmin 3vmin 4vmin 0 #68b2f877;\n  text-transform: uppercase;\n  background: rgba(23, 0, 27, 0.2);\n  width: 100%;\n}\nnav .icon {\n  display: none;\n}\n.sunk {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  box-shadow: inset 0vmin 0 3vmin 0 rgba(23, 0, 27, 0.6);\n  border-right: 3vmin solid rgba(23, 0, 27, 0.4);\n  border-top: 0.8vmin solid #68b2f866;\n  width: 100%;\n  box-sizing: border-box;\n}\n.top-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 1vmin 2vmin;\n}\n.footer {\n  border-top: 0.8vmin solid #6200ff88;\n  box-shadow: 3vmin -3vmin 4vmin 0 #6200ff77;\n  border-right: 2vmin solid hsla(291, 45%, 9%, 0.2);\n  background: rgba(23, 0, 27, 0.4);\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1vmin 2vmin;\n}\n.nav-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 0px;\n  grid-template-areas: 'logo about' 'logo skills';\n}\n.logo-link {\n  grid-area: logo;\n}\n.about-link {\n  grid-area: about;\n}\n.skills-link {\n  grid-area: skills;\n}\n.page-link {\n  padding: 0 1vmin;\n  font-size: calc(0.6vmin + 12px);\n  transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);\n  text-shadow: 0 0 0.05vmin #111, -0.2vmin 0.1vmin 0.4vmin #dbb1e2;\n  font-family: 'Segoe UI', Candara, 'Bitstream Vera Sans', 'DejaVu Sans', 'Bitstream Vera Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif;\n}\n.page-link svg {\n  margin-top: 2px;\n}\n.page-link:hover {\n  cursor: pointer;\n  background-position: 0;\n  text-decoration: none;\n  text-shadow: 0 0 0.1vmin #111, -0.4vmin 0.2vmin 0.2vmin #dbb1e2;\n}\n.page-link::before {\n  margin-bottom: 0.3vmin;\n}\n.page-link::after,\n.page-link::before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0.5vmin;\n  background: #6200ff88;\n  transition: width 0.3s;\n}\n.page-link:hover::after,\n.page-link:hover::before {\n  width: 100%;\n}\n.page-link-home {\n  font-size: calc(2.8vmin + 12px);\n  flex: 1;\n  text-align: left;\n  align-self: center;\n}\n.page-link-home:hover {\n  cursor: pointer;\n}\n.logo-icon {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n}\n.fill {\n  fill: #fffd;\n}\n.stroke {\n  stroke: #fffd;\n}\nsection {\n  color: #cbc;\n  z-index: 1;\n  min-height: 100vh;\n  box-sizing: border-box;\n  flex: 85%;\n  min-width: 200px;\n  padding: 3vmin 0vmin 0vmin 3vmin;\n}\nh1,\nh2 {\n  line-height: 2.5vmax;\n  letter-spacing: 1px;\n  margin: 0;\n}\nh1 {\n  font-weight: 700;\n  font-size: calc(1.4vmin + 12px);\n  font-family: 'Palatino Linotype', Palatino, Palladio, 'URW Palladio L', 'Book Antiqua', Baskerville, 'Bookman Old Style', 'Bitstream Charter', 'Nimbus Roman No9 L', Garamond, 'Apple Garamond', 'ITC Garamond Narrow', 'New Century Schoolbook', 'Century Schoolbook', 'Century Schoolbook L', Georgia, serif;\n  text-shadow: 1vmin 1vmin 1vmin rgba(23, 0, 27, 0.5);\n}\nh2 {\n  font-size: calc(0.8vmin + 12px);\n  font-weight: 400;\n  margin-left: 3vmin;\n  color: rgba(255, 255, 255, 0.8);\n}\nh5 {\n  font-family: 'Segoe UI', Candara, 'Bitstream Vera Sans', 'DejaVu Sans', 'Bitstream Vera Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif;\n  font-size: calc(0.1vmin + 10px);\n  color: #a273ab;\n  margin: 0;\n  font-weight: normal;\n  clear: both;\n  padding: 5px 1vmin 0 1vmin;\n}\nh6 {\n  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;\n  font-size: 1.1vmin;\n  color: #5a396088;\n  margin: 0;\n}\n.flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n.info {\n  padding: 2vmin 2vmin 0 calc(140px + 11vw);\n  width: 70vw;\n  max-width: 1200px;\n  background: #000a;\n  color: #fffd;\n  font-family: 'Segoe UI', Candara, 'Bitstream Vera Sans', 'DejaVu Sans', 'Bitstream Vera Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif;\n  z-index: 1;\n  font-size: calc(0.9vmin + 12px);\n  backdrop-filter: blur(5px) brightness(90%);\n}\n.home {\n  border-bottom: 0.5vh solid #e033ff;\n  border-top: 0.5vh solid #e033ff;\n  box-shadow: inset 1vmin 0vmin 4vmin 0 #e033ff44;\n  max-height: 100vh;\n  overflow: hidden;\n}\n.canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  height: 100vh;\n  width: 100vw;\n}\n@keyframes sats {\n  0% {\n    filter: saturate(100%);\n  }\n  25% {\n    filter: saturate(200%);\n  }\n  50% {\n    filter: saturate(100%);\n  }\n  75% {\n    filter: saturate(0%);\n  }\n  100% {\n    filter: saturate(100%);\n  }\n}\n.canvas1 {\n  animation: 20s linear 0s infinite alternate sats;\n}\n.lede {\n  background: rgba(40, 17, 44, 0.3);\n  text-shadow: 0 0 6px hsla(291, 45%, 18%, 0.5);\n  text-align: center;\n  animation: 25s linear 0s infinite alternate backSats;\n  box-shadow: 1vmin 0 4vmin 0 #dbb1e244, inset -6vmin 0 3vmin 0 #943da422;\n  z-index: 2;\n  backdrop-filter: blur(1px) saturate(90%);\n  font-size: calc(0.5vmin + 12px);\n}\n@keyframes backSats {\n  0% {\n    backdrop-filter: blur(3px) saturate(100%);\n  }\n  25% {\n    backdrop-filter: blur(6px) saturate(190%);\n  }\n  50% {\n    backdrop-filter: blur(3px) saturate(100%);\n  }\n  75% {\n    backdrop-filter: blur(1px) saturate(10%);\n  }\n  100% {\n    backdrop-filter: blur(3px) saturate(100%);\n  }\n}\n.left-rail {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  align-items: center;\n  flex: 15vw;\n  font-family: 'Palatino Linotype', Palatino, Palladio, 'URW Palladio L', 'Book Antiqua', Baskerville, 'Bookman Old Style', 'Bitstream Charter', 'Nimbus Roman No9 L', Garamond, 'Apple Garamond', 'ITC Garamond Narrow', 'New Century Schoolbook', 'Century Schoolbook', 'Century Schoolbook L', Georgia, serif;\n}\n.brace {\n  font-size: 10vmin;\n  margin-left: -1.5vmin;\n  line-height: 3vmin;\n  color: #dbb1e2;\n  text-shadow: 0 0 4vmin #dbb1e2;\n  color: #dbb1e2aa;\n  transform: rotate(-90deg);\n}\n.lede .brace {\n  height: 4vw;\n  color: #dbb1e2;\n  margin: 0;\n  font-size: 16vmin;\n}\n.brace.spacer {\n  height: 16vh;\n}\n.js {\n  font-size: 4vmin;\n  color: #68b2f888;\n  font-weight: bold;\n  text-shadow: 0 0 4vmin #68b2f8;\n  margin: 0.3vmin 0 0.3vmin -1.5vw;\n}\n.js.spacer {\n  height: 22vmin;\n}\n.about {\n  box-shadow: inset 1vmin 0vmin 3vmin 0 #6200ff88;\n}\n.joke {\n  padding: 1vmin;\n  flex: 1;\n}\n.text-left {\n  text-align: left;\n}\n.business {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.large-j {\n  letter-spacing: 8vmin;\n  font-size: 73vmin;\n  cursor: default;\n  align-self: center;\n  color: #9623af24;\n  transform: rotate(30deg) scale(1);\n  filter: saturate(550%);\n  text-shadow: 1vmin 1vmin 1vmin #17001b88;\n  animation: pulse-animation 8s infinite;\n  will-change: transform, opacity;\n  opacity: 1;\n}\n@keyframes pulse-animation {\n  0% {\n    transform: rotate(30deg) scale(0.9);\n    opacity: 0.2;\n  }\n  50% {\n    transform: rotate(30deg) scale(1);\n    opacity: 0.9;\n  }\n  70% {\n    transform: rotate(30deg) scale(0.7);\n    opacity: 0.7;\n  }\n  80% {\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(30deg) scale(0.9);\n    opacity: 0.2;\n  }\n}\n.about h1 {\n  margin: -4vmin 0vmin 4vmin -6vmin;\n}\n.skills__h1 {\n  margin: 2vmin 0vmin 6vmin -2vmin;\n}\n.content {\n  font-family: 'Segoe UI', Candara, 'Bitstream Vera Sans', 'DejaVu Sans', 'Bitstream Vera Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif;\n  border-bottom: 1vh solid #6200ff;\n}\n.content h1 {\n  font-size: calc(7vmin + 12px);\n}\n.content h5 {\n  margin: 5px 0;\n  text-align: center;\n  color: #cbc;\n  font-size: calc(0.5vmin + 12px);\n  margin: 0.5vmin 0px 2vmin;\n}\n.book {\n  background: rgba(23, 0, 27, 0.7);\n  backdrop-filter: blur(5px) brightness(90%);\n  border-radius: 2vmin;\n  margin: 3vmin;\n  padding: 4vmin;\n  width: 55vw;\n  max-width: 900px;\n  align-self: flex-end;\n  box-shadow: 1vmin 1vmin 1vmin 0 rgba(23, 0, 27, 0.5);\n}\n.book::before {\n  content: '\\27A4';\n  position: absolute;\n  bottom: -7vmin;\n  transform: rotate(115deg);\n  right: 8vmin;\n  color: rgba(23, 0, 27, 0.4);\n  font-size: 9vmin;\n}\n.emphasis {\n  font-weight: bold;\n  color: #fef;\n}\n.pic {\n  background-image: url("+b+");\n  background-size: cover;\n  width: 40vmin;\n  height: 40vmin;\n  border-radius: 50%;\n  align-self: end;\n  margin: 4vmin;\n  max-width: 500px;\n  filter: hue-rotate(280deg) saturate(60%);\n}\n.row-container {\n  margin: 1vmin;\n  flex: 3;\n  min-width: 228px;\n}\n.skills {\n  background: rgba(16, 8, 18, 0.4);\n  box-shadow: inset 1vmin 0vmin 10vmin 0 #fff4;\n}\n.skills h1 {\n  width: 100%;\n}\n.skills .row {\n  margin: 8px 0;\n}\n.skills svg {\n  width: 24px;\n  padding: 14%;\n}\n.skill {\n  overflow: hidden;\n  box-shadow: 1vmin 1vmin 1vmin 0 rgba(23, 0, 27, 0.5);\n}\n.skill div {\n  background: rgba(140, 140, 140, 0.2);\n  padding-top: 1vmin;\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 2vmin 0 0 0;\n  min-height: 5vw;\n}\n.skill p {\n  margin: 0;\n  padding: 0 1vmin 1.4vmin;\n  font-size: calc(0.3vmin + 12px);\n  line-height: 8pt;\n}\n.skill .label {\n  word-break: break-all;\n}\n.skill .score {\n  text-align: center;\n}\n.skill1 {\n  border-left: 0.5vmin solid #a273ab;\n  border-top: 0.5vmin solid #a273ab;\n  backdrop-filter: blur(5px) brightness(90%);\n}\n.skill1 svg {\n  fill: #a9a;\n}\n.skill2 {\n  border-left: 0.5vmin solid #9623af;\n  border-top: 0.5vmin solid #9623af;\n  color: #dbb1e2;\n}\n.skill2 svg {\n  fill: #b990c0;\n}\n.skill3 {\n  border-left: 0.5vmin solid #dbb1e2;\n  border-top: 0.5vmin solid #dbb1e2;\n  height: 50px;\n  color: #fffd;\n}\n.skill3 svg {\n  fill: #fffd;\n}\n.other-skills {\n  flex: 1;\n  flex-wrap: wrap;\n  display: flex;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 1vmin 1vmin 1vmin 0 rgba(23, 0, 27, 0.5);\n  border-radius: 2vmin;\n  align-self: flex-start;\n  justify-content: center;\n  margin: 1vmin;\n  padding: 1vmin;\n  backdrop-filter: blur(5px) brightness(90%);\n  min-width: 220px;\n}\n.other-skills h1 {\n  margin: 1vmin 0vmin 4vmin -5vmin;\n}\n.other-skill {\n  border-radius: 2vmin;\n  border: 0.5vmin solid #fffd;\n  padding: 1vmin;\n  margin: 0.5vmin;\n  position: relative;\n  width: 23%;\n  min-height: 70px;\n  min-width: 70px;\n  color: #fffd;\n  background: rgba(0, 0, 0, 0.2);\n}\n.other-skill .score {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 2vmin;\n}\n.other-skill svg {\n  padding: 5%;\n  fill: #fffd;\n}\n.score3 {\n  background: rgba(0, 0, 0, 0.6);\n  color: #cbc;\n  border: 0.5vmin solid #dbb1e2;\n}\n.score3 svg {\n  fill: #b990c0;\n}\n.score4 {\n  background: rgba(0, 0, 0, 0.4);\n  color: #dbb1e2;\n  border: 0.5vmin solid #9623af;\n}\n.score4 svg {\n  fill: #b990c0;\n}\n.flourish {\n  font-size: 7vmin;\n  display: block;\n  float: left;\n  margin: 0vmin 1.5vmin -3vmin;\n  font-family: Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;\n}\n@media screen and (max-width: 26em) {\n  .lede {\n    width: 100%;\n    position: absolute;\n  }\n  .book {\n    width: auto;\n  }\n  .left-rail:not(.lede) {\n    display: none;\n  }\n  .info {\n    padding: 4vmin;\n  }\n}\n@media screen and (min-width: 26em) and (max-width: 39.4em) {\n  .left-rail,\n  .lede {\n    flex: 32.9vw;\n  }\n  section {\n    flex: 67.1vw;\n  }\n}\n@media screen and (min-width: 39.4em) and (max-width: 59.4em) {\n  .left-rail,\n  .lede {\n    flex: 25vw;\n  }\n  section {\n    flex: 75vw;\n  }\n}\n@media screen and (min-width: 59.4em) and (max-width: 83.8em) {\n  .left-rail,\n  .lede {\n    flex: 20vw;\n  }\n  section {\n    flex: 80vw;\n  }\n}\n@media screen and (min-width: 83.8em) {\n  .left-rail,\n  .lede {\n    flex: 15vw;\n  }\n  section {\n    flex: 85vw;\n  }\n}\n","",{version:3,sources:["webpack://./src/style.less"],names:[],mappings:"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",sourcesContent:["@light-blue: #68b2f8;\n@dark-blue: #6200ff;\n@dark-blueA: #6200ff88;\n@darker-purple: #28112c;\n@lighter-purple: #dbb1e2;\n@neon-purple: #9623af;\n@dark-purple: #5a3960;\n@dark-purpleA: #5a396088;\n@light-purple: #a273ab;\n@light-gray: #cbc;\n@dark-grey: #616161;\n@white: #fffd;\n@dark-shadow: 0 0 6px hsla(291, 45%, 9%, 0.5);\n@gradient-start: rgba(40, 17, 44, 0.7) 30%;\n@gradient-end: rgba(40, 17, 44, 0.1) 100%;\n@font-serif: Cambria, 'Hoefler Text', Utopia, 'Liberation Serif',\n  'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;\n@font-sans: 'Segoe UI', Candara, 'Bitstream Vera Sans', 'DejaVu Sans',\n  'Bitstream Vera Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif;\n@font-mono: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',\n  'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',\n  'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;\n@border-skill: 0.5vmin solid;\n\nbody,\nhtml {\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-wrap: wrap;\n  color: #fffd;\n  background-color: hsla(291, 60%, 2%, 1);\n  background-image: url(img/58.png), url(img/74.png), url(img/106.png);\n  background-repeat: repeat-x;\n  font-family: @font-serif;\n  text-shadow: 0 0 2px hsla(291, 60%, 2%, 1);\n}\n\na:link,\na:visited,\na:hover,\na:active {\n  color: @lighter-purple;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nsvg {\n  max-width: 30px;\n  max-height: 30px;\n}\n\nnav {\n  box-shadow: 3vmin 3vmin 4vmin 0 #68b2f877;\n  text-transform: uppercase;\n  background: rgba(23, 0, 27, 0.2);\n  width: 100%;\n  .icon {\n    display: none;\n  }\n}\n\n.sunk {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  box-shadow: inset 0vmin 0 3vmin 0 rgba(23, 0, 27, 0.6);\n  border-right: 3vmin solid rgba(23, 0, 27, 0.4);\n  border-top: 0.8vmin solid #68b2f866;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.top-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 1vmin 2vmin;\n}\n\n.footer {\n  border-top: 0.8vmin solid #6200ff88;\n  box-shadow: 3vmin -3vmin 4vmin 0 #6200ff77;\n  border-right: 2vmin solid hsla(291, 45%, 9%, 0.2);\n  background: rgba(23, 0, 27, 0.4);\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1vmin 2vmin;\n}\n\n.nav-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 0px;\n  grid-template-areas:\n    'logo about'\n    'logo skills';\n}\n\n.logo-link {\n  grid-area: logo;\n}\n\n.about-link {\n  grid-area: about;\n}\n\n.skills-link {\n  grid-area: skills;\n}\n\n.page-link {\n  padding: 0 1vmin;\n  font-size: calc(0.6vmin + 12px);\n  transition: all 0.3s cubic-bezier(0, 0, 0.23, 1);\n  text-shadow: 0 0 0.05vmin #111, -0.2vmin 0.1vmin 0.4vmin #dbb1e2;\n  font-family: @font-sans;\n\n  svg {\n    margin-top: 2px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-position: 0;\n    text-decoration: none;\n    text-shadow: 0 0 0.1vmin #111, -0.4vmin 0.2vmin 0.2vmin #dbb1e2;\n  }\n  &::before {\n    margin-bottom: 0.3vmin;\n  }\n  &::after,\n  &::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0.5vmin;\n    background: @dark-blueA;\n    transition: width 0.3s;\n  }\n  &:hover::after,\n  &:hover::before {\n    width: 100%;\n  }\n}\n\n.page-link-home {\n  font-size: calc(2.8vmin + 12px);\n  flex: 1;\n  text-align: left;\n  align-self: center;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.logo-icon {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n}\n\n.fill {\n  fill: #fffd;\n}\n\n.stroke {\n  stroke: #fffd;\n}\n\nsection {\n  color: #cbc;\n  z-index: 1;\n  min-height: 100vh;\n  box-sizing: border-box;\n  flex: 85%;\n  min-width: 200px;\n  padding: 3vmin 0vmin 0vmin 3vmin;\n}\n\nh1,\nh2 {\n  line-height: 2.5vmax;\n  letter-spacing: 1px;\n  margin: 0;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: calc(1.4vmin + 12px);\n  font-family: 'Palatino Linotype', Palatino, Palladio, 'URW Palladio L',\n    'Book Antiqua', Baskerville, 'Bookman Old Style', 'Bitstream Charter',\n    'Nimbus Roman No9 L', Garamond, 'Apple Garamond', 'ITC Garamond Narrow',\n    'New Century Schoolbook', 'Century Schoolbook', 'Century Schoolbook L',\n    Georgia, serif;\n  text-shadow: 1vmin 1vmin 1vmin rgba(23, 0, 27, 0.5);\n}\n\nh2 {\n  font-size: calc(0.8vmin + 12px);\n  font-weight: 400;\n  margin-left: 3vmin;\n  color: rgba(255, 255, 255, 0.8);\n}\n\nh5 {\n  font-family: @font-sans;\n  font-size: calc(0.1vmin + 10px);\n  color: @light-purple;\n  margin: 0;\n  font-weight: normal;\n  clear: both;\n  padding: 5px 1vmin 0 1vmin;\n}\n\nh6 {\n  font-family: @font-mono;\n  font-size: 1.1vmin;\n  color: @dark-purpleA;\n  margin: 0;\n}\n\n.flex {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.info {\n  padding: 2vmin 2vmin 0 calc(140px + 11vw);\n  width: 70vw;\n  max-width: 1200px;\n  background: #000a;\n  color: #fffd;\n  font-family: @font-sans;\n  z-index: 1;\n  font-size: calc(0.9vmin + 12px);\n  backdrop-filter: blur(5px) brightness(90%);\n}\n\n.home {\n  border-bottom: 0.5vh solid #e033ff;\n  border-top: 0.5vh solid #e033ff;\n  box-shadow: inset 1vmin 0vmin 4vmin 0 #e033ff44;\n  max-height: 100vh;\n  overflow: hidden;\n}\n\n.canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  height: 100vh;\n  width: 100vw;\n}\n\n@keyframes sats {\n  0% {\n    filter: saturate(100%);\n  }\n  25% {\n    filter: saturate(200%);\n  }\n  50% {\n    filter: saturate(100%);\n  }\n  75% {\n    filter: saturate(0%);\n  }\n  100% {\n    filter: saturate(100%);\n  }\n}\n\n.canvas1 {\n  animation: 20s linear 0s infinite alternate sats;\n}\n\n.lede {\n  background: rgba(40, 17, 44, 0.3);\n  text-shadow: 0 0 6px hsla(291, 45%, 18%, 0.5);\n  text-align: center;\n  animation: 25s linear 0s infinite alternate backSats;\n  box-shadow: 1vmin 0 4vmin 0 #dbb1e244, inset -6vmin 0 3vmin 0 #943da422;\n  z-index: 2;\n  backdrop-filter: blur(1px) saturate(90%);\n  font-size: calc(0.5vmin + 12px);\n}\n\n@keyframes backSats {\n  0% {\n    backdrop-filter: blur(3px) saturate(100%);\n  }\n  25% {\n    backdrop-filter: blur(6px) saturate(190%);\n  }\n  50% {\n    backdrop-filter: blur(3px) saturate(100%);\n  }\n  75% {\n    backdrop-filter: blur(1px) saturate(10%);\n  }\n  100% {\n    backdrop-filter: blur(3px) saturate(100%);\n  }\n}\n\n.left-rail {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  align-items: center;\n  flex: 15vw;\n  font-family: 'Palatino Linotype', Palatino, Palladio, 'URW Palladio L',\n    'Book Antiqua', Baskerville, 'Bookman Old Style', 'Bitstream Charter',\n    'Nimbus Roman No9 L', Garamond, 'Apple Garamond', 'ITC Garamond Narrow',\n    'New Century Schoolbook', 'Century Schoolbook', 'Century Schoolbook L',\n    Georgia, serif;\n}\n\n.brace {\n  font-size: 10vmin;\n  margin-left: -1.5vmin;\n  line-height: 3vmin;\n  color: @lighter-purple;\n  text-shadow: 0 0 4vmin #dbb1e2;\n  color: #dbb1e2aa;\n  transform: rotate(-90deg);\n}\n\n.lede .brace {\n  height: 4vw;\n  color: @lighter-purple;\n  margin: 0;\n  font-size: 16vmin;\n}\n\n.brace.spacer {\n  height: 16vh;\n}\n\n.js {\n  font-size: 4vmin;\n  color: #68b2f888;\n  font-weight: bold;\n  text-shadow: 0 0 4vmin #68b2f8;\n  margin: 0.3vmin 0 0.3vmin -1.5vw;\n}\n\n.js.spacer {\n  height: 22vmin;\n}\n\n.about {\n  box-shadow: inset 1vmin 0vmin 3vmin 0 #6200ff88;\n}\n\n.joke {\n  padding: 1vmin;\n  flex: 1;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.business {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.large-j {\n  letter-spacing: 8vmin;\n  font-size: 73vmin;\n  cursor: default;\n  align-self: center;\n  color: #9623af24;\n  transform: rotate(30deg) scale(1);\n  filter: saturate(550%);\n  text-shadow: 1vmin 1vmin 1vmin #17001b88;\n  animation: pulse-animation 8s infinite;\n  will-change: transform, opacity;\n  opacity: 1;\n}\n\n@keyframes pulse-animation {\n  0% {\n    transform: rotate(30deg) scale(0.9);\n    opacity: 0.2;\n  }\n  50% {\n    transform: rotate(30deg) scale(1);\n    opacity: 0.9;\n  }\n  70% {\n    transform: rotate(30deg) scale(0.7);\n    opacity: 0.7;\n  }\n  80% {\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(30deg) scale(0.9);\n    opacity: 0.2;\n  }\n}\n\n.about {\n  h1 {\n    margin: -4vmin 0vmin 4vmin -6vmin;\n  }\n}\n\n.skills__h1 {\n  margin: 2vmin 0vmin 6vmin -2vmin;\n}\n\n.content {\n  font-family: @font-sans;\n  border-bottom: 1vh solid @dark-blue;\n  h1 {\n    font-size: calc(7vmin + 12px);\n  }\n  h5 {\n    margin: 5px 0;\n    text-align: center;\n    color: #cbc;\n    font-size: calc(0.5vmin + 12px);\n    margin: 0.5vmin 0px 2vmin;\n  }\n}\n\n.book {\n  background: rgba(23, 0, 27, 0.7);\n  backdrop-filter: blur(5px) brightness(90%);\n  border-radius: 2vmin;\n  margin: 3vmin;\n  padding: 4vmin;\n  width: 55vw;\n  max-width: 900px;\n  align-self: flex-end;\n  box-shadow: 1vmin 1vmin 1vmin 0 rgba(23, 0, 27, 0.5);\n}\n\n.book::before {\n  content: '\\27A4';\n  position: absolute;\n  bottom: -7vmin;\n  transform: rotate(115deg);\n  right: 8vmin;\n  color: rgba(23, 0, 27, 0.4);\n  font-size: 9vmin;\n}\n\n.emphasis {\n  font-weight: bold;\n  color: #fef;\n}\n\n.pic {\n  background-image: url('./img/joe.jpg');\n  background-size: cover;\n  width: 40vmin;\n  height: 40vmin;\n  border-radius: 50%;\n  align-self: end;\n  margin: 4vmin;\n  max-width: 500px;\n  filter: hue-rotate(280deg) saturate(60%);\n}\n\n.row-container {\n  margin: 1vmin;\n  flex: 3;\n  min-width: 228px;\n}\n\n.skills {\n  background: rgba(16, 8, 18, 0.4);\n  box-shadow: inset 1vmin 0vmin 10vmin 0 #fff4;\n  h1 {\n    width: 100%;\n  }\n  .row {\n    margin: 8px 0;\n  }\n  svg {\n    width: 24px;\n    padding: 14%;\n  }\n}\n\n.skill {\n  overflow: hidden;\n  box-shadow: 1vmin 1vmin 1vmin 0 rgba(23, 0, 27, 0.5);\n  div {\n    background: rgba(140, 140, 140, 0.2);\n    padding-top: 1vmin;\n    display: flex;\n    justify-content: flex-end;\n    border-radius: 2vmin 0 0 0;\n    min-height: 5vw;\n  }\n  p {\n    margin: 0;\n    padding: 0 1vmin 1.4vmin;\n    font-size: calc(0.3vmin + 12px);\n    line-height: 8pt;\n  }\n  .label {\n    word-break: break-all;\n  }\n  .score {\n    text-align: center;\n  }\n}\n\n.skill1 {\n  border-left: @border-skill @light-purple;\n  border-top: @border-skill @light-purple;\n  backdrop-filter: blur(5px) brightness(90%);\n  svg {\n    fill: #a9a;\n  }\n}\n\n.skill2 {\n  border-left: @border-skill @neon-purple;\n  border-top: @border-skill @neon-purple;\n  color: @lighter-purple;\n  svg {\n    fill: #b990c0;\n  }\n}\n\n.skill3 {\n  border-left: @border-skill @lighter-purple;\n  border-top: @border-skill @lighter-purple;\n  height: 50px;\n  color: #fffd;\n  svg {\n    fill: #fffd;\n  }\n}\n\n.other-skills {\n  flex: 1;\n  flex-wrap: wrap;\n  display: flex;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 1vmin 1vmin 1vmin 0 rgba(23, 0, 27, 0.5);\n  border-radius: 2vmin;\n  align-self: flex-start;\n  justify-content: center;\n  margin: 1vmin;\n  padding: 1vmin;\n  backdrop-filter: blur(5px) brightness(90%);\n  min-width: 220px;\n  h1 {\n    margin: 1vmin 0vmin 4vmin -5vmin;\n  }\n}\n\n.other-skill {\n  border-radius: 2vmin;\n  border: @border-skill #fffd;\n  padding: 1vmin;\n  margin: 0.5vmin;\n  position: relative;\n  width: 23%;\n  min-height: 70px;\n  min-width: 70px;\n  color: #fffd;\n  background: rgba(0, 0, 0, 0.2);\n\n  .score {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 2vmin;\n  }\n  svg {\n    padding: 5%;\n    fill: #fffd;\n  }\n}\n\n.score3 {\n  background: rgba(0, 0, 0, 0.6);\n  color: @light-gray;\n  border: @border-skill @lighter-purple;\n  svg {\n    fill: #b990c0;\n  }\n}\n\n.score4 {\n  background: rgba(0, 0, 0, 0.4);\n  color: @lighter-purple;\n  border: @border-skill @neon-purple;\n  svg {\n    fill: #b990c0;\n  }\n}\n\n.flourish {\n  font-size: 7vmin;\n  display: block;\n  float: left;\n  margin: 0vmin 1.5vmin -3vmin;\n  font-family: @font-serif;\n}\n\n@media screen and (max-width: 26em) {\n  .lede {\n    width: 100%;\n    position: absolute;\n  }\n  .book {\n    width: auto;\n  }\n  .left-rail:not(.lede) {\n    display: none;\n  }\n  .info {\n    padding: 4vmin;\n  }\n}\n\n@media screen and (min-width: 26em) and (max-width: 39.4em) {\n  .left-rail,\n  .lede {\n    flex: 32.9vw;\n  }\n  section {\n    flex: 67.1vw;\n  }\n}\n\n@media screen and (min-width: 39.4em) and (max-width: 59.4em) {\n  .left-rail,\n  .lede {\n    flex: 25vw;\n  }\n  section {\n    flex: 75vw;\n  }\n}\n\n@media screen and (min-width: 59.4em) and (max-width: 83.8em) {\n  .left-rail,\n  .lede {\n    flex: 20vw;\n  }\n  section {\n    flex: 80vw;\n  }\n}\n\n@media screen and (min-width: 83.8em) {\n  .left-rail,\n  .lede {\n    flex: 15vw;\n  }\n  section {\n    flex: 85vw;\n  }\n}\n"],sourceRoot:""}]);const p=h},453:(n,A,i)=>{"use strict";var e=i(311),t=(i(205),i(379)),r=i.n(t),a=i(795),o=i.n(a),s=i(569),l=i.n(s),d=i(565),m=i.n(d),f=i(216),h=i.n(f),c=i(589),E=i.n(c),g=i(935),b={};b.styleTagTransform=E(),b.setAttributes=m(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=h(),r()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const p=n=>n[Math.floor(Math.random()*n.length)],C=(n,A)=>Math.random()*(n-A)+A,v=[209,291,263],u=["506EE5","68B2F8","7037CD"],x=new Array,w=function(n){this.bounds=n,this.cx=Math.round(C(this.bounds.right-15,this.bounds.left+15)),this.cy=Math.round(C(this.bounds.bottom-15,this.bounds.top+15)),this.start=Math.random()*Math.PI*2,this.speedX=Math.cos(this.start)/C(5,1),this.speedY=Math.sin(this.start)/C(5,1),this.radius=0,this.curr=0,this.innerCrcmf=C(130,25),this.grooves=C(35,10),this.color=p(v),this.light=C(60,10),this.strokeColor=p(u),this.graphics=new e.Graphics,this.graphics.blendMode=e.BLEND_MODES.XOR};w.prototype.update=function(){if(this.radius<this.innerCrcmf&&void 0!==this.radius)return this.radius+=Math.round(this.innerCrcmf/this.grooves),this.graphics.beginFill(function(n,A,i){i/=100;const e=A*Math.min(i,1-i)/100,t=A=>{const t=(A+n/30)%12,r=i-e*Math.max(Math.min(t-3,9-t,1),-1);return Math.round(255*r).toString(16).padStart(2,"0")};return`0x${t(0)}${t(8)}${t(4)}`}(Math.round(this.color+=.3),Math.round(100-C(50,0)),Math.round(this.light+=.1))),this.graphics.drawCircle(this.cx,this.cy,this.radius),this.graphics;this.curr<101?(this.graphics.arc(this.cx,this.cy,Math.round(this.innerCrcmf+C(45,10)),this.start,2*Math.PI*this.curr/100+this.start,!1).lineStyle(Math.round(C(25,5)),`0x${this.strokeColor}`),this.curr+=C(8.8,3.4),100==this.curr&&(this.graphics.cacheAsBitmap=!0)):(this.graphics.x+this.cx+this.innerCrcmf>this.bounds.right||this.graphics.x+this.cx<this.bounds.left?this.speedX*=-1:(this.graphics.y+this.cy<this.bounds.top||this.graphics.y+this.cy+this.innerCrcmf>this.bounds.bottom)&&(this.speedY*=-1),this.graphics.x-=this.speedX,this.graphics.y-=this.speedY)};const k=function(n){this.circles=[],this.domElement=document.getElementById(n),this.bounds={left:0,top:0,right:0,bottom:0},this.renderer=null,this.stage=null};k.prototype.addCircles=function(){for(let n=Math.round(this.bounds.right*this.bounds.bottom/47e3);n--;)x.push(setTimeout((()=>{const n=new w(this.bounds);this.circles.push(n)}),n*C(2e3,900)))},k.prototype.ready=function(){if(void 0===e)throw this.domElement.addClass("error"),"PIXI is required to run";const n=document.getElementById("cvs0");this.bounds.right=n.offsetWidth,this.bounds.bottom=n.offsetHeight;const A={backgroundAlpha:0,view:n,clearBeforeRender:!0};Object.assign(A,{width:this.bounds.right,height:this.bounds.bottom});try{this.renderer=e.autoDetectRenderer(A)}catch(n){return void alert(n.message)}this.stage=new e.Container,this.stage.interactiveChildren=!1,window.addEventListener("resize",function(n,A=300){let i;return(...e)=>{clearTimeout(i),i=setTimeout((()=>{n.apply(this,e)}),A)}}(this.resize.bind(this),400)),this.startUpdate(),this.addCircles()},document.addEventListener("DOMContentLoaded",(n=>{new k("cvs0-container").ready()})),k.prototype.startUpdate=function(){const n=this;requestAnimationFrame((function(){n.update()}))},k.prototype.resize=function(){const n=this.bounds.right,A=this.bounds.bottom,i=this.domElement.offsetWidth,e=this.domElement.offsetHeight;this.bounds.right=i,this.bounds.bottom=e,(Math.abs(n-i)>50||Math.abs(A-e)>50)&&(this.renderer.resize(i,e),this.reset())},k.prototype.reset=function(){for(const n in x)window.clearTimeout(n);this.stage.removeChildren(),this.circles.length=0,this.addCircles()},k.prototype.update=function(){if(this.circles.length>0)for(let n=this.circles.length;n--;){let A=this.circles[n].update();A&&this.stage.addChild(A)}this.renderer.render(this.stage),this.startUpdate()}},205:()=>{function n(n){n.preventDefault();let A=document.getElementById(this.getAttribute("data-href")).offsetTop-.005*window.innerHeight;window.scrollTo({top:A,behavior:"smooth"})}document.querySelectorAll("[data-href]").forEach((A=>A.addEventListener("click",n)))},490:(n,A,i)=>{"use strict";n.exports=i.p+"267bc985a130b15ad19b.png"},884:(n,A,i)=>{"use strict";n.exports=i.p+"75afc9c2d044e580f9a2.png"},567:(n,A,i)=>{"use strict";n.exports=i.p+"0ea9c7a162bd5899a0ee.png"},947:(n,A,i)=>{"use strict";n.exports=i.p+"77f76ae051692e37916f.jpg"}},i={};function e(n){var t=i[n];if(void 0!==t)return t.exports;var r=i[n]={id:n,loaded:!1,exports:{}};return A[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}e.m=A,n=[],e.O=(A,i,t,r)=>{if(!i){var a=1/0;for(d=0;d<n.length;d++){for(var[i,t,r]=n[d],o=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(e.O).every((n=>e.O[n](i[s])))?i.splice(s--,1):(o=!1,r<a&&(a=r));if(o){n.splice(d--,1);var l=t();void 0!==l&&(A=l)}}return A}r=r||0;for(var d=n.length;d>0&&n[d-1][2]>r;d--)n[d]=n[d-1];n[d]=[i,t,r]},e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var i in A)e.o(A,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:A[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var A=e.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var i=A.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={179:0};e.O.j=A=>0===n[A];var A=(A,i)=>{var t,r,[a,o,s]=i,l=0;if(a.some((A=>0!==n[A]))){for(t in o)e.o(o,t)&&(e.m[t]=o[t]);if(s)var d=s(e)}for(A&&A(i);l<a.length;l++)r=a[l],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(d)},i=self.webpackChunkjoe_cv=self.webpackChunkjoe_cv||[];i.forEach(A.bind(null,0)),i.push=A.bind(null,i.push.bind(i))})(),e.nc=void 0;var t=e.O(void 0,[123],(()=>e(453)));t=e.O(t)})();
//# sourceMappingURL=main.05640af335203bbb7c9d.js.map