!function(){function e(e,t,n,r,i,a,o){try{var c=e[a](o),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,i)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(i,a){var o=t.apply(n,r);function c(t){e(o,i,a,c,u,"next",t)}function u(t){e(o,i,a,c,u,"throw",t)}c(void 0)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/vcS":function(e,t,n){"use strict";n.d(t,"a",function(){return h}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return g}),n.d(t,"e",function(){return L}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return _}),n.d(t,"h",function(){return m}),n.d(t,"i",function(){return T}),n.d(t,"j",function(){return w}),n.d(t,"k",function(){return o}),n.d(t,"l",function(){return d}),n.d(t,"m",function(){return f}),n.d(t,"n",function(){return C}),n.d(t,"o",function(){return p}),n.d(t,"p",function(){return A}),n.d(t,"q",function(){return s}),n.d(t,"r",function(){return O}),n.d(t,"s",function(){return E}),n.d(t,"t",function(){return a}),n.d(t,"u",function(){return c}),n.d(t,"v",function(){return r});var r="username",i="email",a="code",o="phone",c="password",u="country-dial-code-select",s="+1",E="amplify-auth-source",l="amplify-redirected-from-hosted-ui",d="amplify-authenticator-authState",L="Phone number can not be empty",g="No Auth module found, please ensure @aws-amplify/auth is imported",C="No Storage module found, please ensure @aws-amplify/storage is imported",f="No Interactions module found, please ensure @aws-amplify/interactions is imported",_="SETUP_TOTP",p="User has not set up software token mfa",A="User has not verified software token mfa",O="SUCCESS",h="auth",T="UI Auth",m="ToastAuthError",w="AuthStateChange"},"AO/9":function(e,t,n){"use strict";var r=n("v4IS");n("TESy"),t.a=r.a},FYlq:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("bRKV"),i={amazon:function(){return Object(r.i)("svg",{viewBox:"0 0 248 268",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"Artboard-Copy-2",fill:"none","fill-rule":"evenodd"},Object(r.i)("path",{d:"M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z",id:"Fill-6",fill:"#FFF"})))},auth0:function(){return Object(r.i)("svg",{id:"artwork",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 193.7 216.6"},Object(r.i)("path",{d:"M189,66.9L167.2,0H96.8l21.8,66.9H189z M96.8,0H26.5L4.8,66.9h70.4L96.8,0z M4.8,66.9L4.8,66.9\tc-13,39.9,1.2,83.6,35.2,108.3l21.7-66.9L4.8,66.9z M189,66.9L189,66.9l-57,41.4l21.7,66.9l0,0C187.7,150.6,201.9,106.8,189,66.9\tL189,66.9z M39.9,175.2L39.9,175.2l56.9,41.4l56.9-41.4l-56.9-41.4L39.9,175.2z",fill:"#FFF"}))},facebook:function(){return Object(r.i)("svg",{viewBox:"0 0 279 538",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"Page-1",fill:"none","fill-rule":"evenodd"},Object(r.i)("g",{id:"Artboard",fill:"#FFF"},Object(r.i)("path",{d:"M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z",id:"Fill-1"}))))},google:function(){return Object(r.i)("svg",{viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Object(r.i)("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),Object(r.i)("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),Object(r.i)("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),Object(r.i)("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"}))},"sound-mute":function(){return Object(r.i)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"icons/minis/volumeOff","fill-rule":"evenodd"},Object(r.i)("path",{d:"M3.48026899,12.9630494 C3.63825091,12.9630494 3.79237961,13.0108921 3.92264322,13.1003479 L8.77467683,16.8113609 C9.29423971,17.1679383 10,16.7950396 10,16.1637406 L10,3.78619489 C10,3.15489596 9.29423971,2.78199725 8.77467683,3.13857463 L3.92264322,6.84545211 C3.79237961,6.93490793 3.63825091,6.9827506 3.48026899,6.9827506 L1.78294894,6.9827506 C1.3505185,6.9827506 1,7.33409518 1,7.76754476 L1,12.1781306 C1,12.6117048 1.3505185,12.9630494 1.78294894,12.9630494 L3.48026899,12.9630494 Z M17.2118156,7 L15.0918385,9.11997713 L12.9718614,7 L12,7.97174685 L14.1200917,10.091724 L12,12.2118156 L12.9718614,13.1835625 L15.0918385,11.0635854 L17.2118156,13.1835625 L18.1835625,12.2118156 L16.0635854,10.091724 L18.1835625,7.97174685 L17.2118156,7 Z",id:"Fill-2"})))},sound:function(){return Object(r.i)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"icons/minis/volumeOn","fill-rule":"evenodd"},Object(r.i)("path",{d:"M3.48026899,12.9630494 L1.78294894,12.9630494 C1.3505185,12.9630494 1,12.6117048 1,12.1781306 L1,7.76754476 C1,7.33409518 1.3505185,6.9827506 1.78294894,6.9827506 L3.48026899,6.9827506 C3.63825091,6.9827506 3.79237961,6.93490793 3.92264322,6.84545211 L8.77467683,3.13857463 C9.29423971,2.78199725 10,3.15489596 10,3.78619489 L10,16.1637406 C10,16.7950396 9.29423971,17.1679383 8.77467683,16.8113609 L3.92264322,13.1003479 C3.79237961,13.0108921 3.63825091,12.9630494 3.48026899,12.9630494 Z M14.9270376,3.03232286 C15.1729267,3.03232286 15.4040399,3.12815658 15.5777627,3.3022351 C17.3699891,5.09889099 18.3570052,7.48235058 18.3570052,10.0135053 C18.3570052,12.54466 17.3699891,14.9281196 15.5777627,16.7247755 C15.4041045,16.898854 15.1729914,16.9947524 14.9270052,16.9947524 C14.6820861,16.9947524 14.4515549,16.899436 14.2777674,16.7263598 C13.9192316,16.3684383 13.9185203,15.7852882 14.2762477,15.4264291 C15.7222893,13.9769926 16.5186727,12.0545954 16.5186727,10.0135053 C16.5186727,7.97241524 15.7222893,6.05001801 14.2762154,4.60058152 C13.9184879,4.24175473 13.9191992,3.65857229 14.277832,3.30065081 C14.4514256,3.1275746 14.6819567,3.03232286 14.9270376,3.03232286 Z M13.5730665,6.11570485 C14.6133991,7.15574642 15.1862998,8.54003279 15.1862998,10.0134924 C15.1862998,11.4892799 14.6113945,12.8741159 13.5675376,13.9128965 C13.3942351,14.0855848 13.1639626,14.1806425 12.9191727,14.1806425 C12.6727016,14.1806425 12.4412975,14.0844531 12.2677039,13.9097926 C12.0944984,13.7358111 11.9994406,13.5047303 11.9999903,13.2592291 C12.0005723,13.0136956 12.096794,12.7831644 12.2708079,12.6100882 C12.9654406,11.9185917 13.3479995,10.996467 13.3479995,10.0134924 C13.3479995,9.03119677 12.966346,8.1086194 12.2733298,7.4157649 C11.9150203,7.05745543 11.9149233,6.47436998 12.2731358,6.11589885 C12.4467617,5.94224065 12.6775838,5.84666559 12.923085,5.84666559 C13.1685538,5.84666559 13.3993436,5.94220831 13.5730665,6.11570485 Z",id:"Fill-2"})))},maximize:function(){return Object(r.i)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"icons/minis/screenfull","fill-rule":"evenodd"},Object(r.i)("path",{d:"M2.04162598,3 L2.04162598,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z M3,4 L16,4 L16,15 L3,15 L3,4 Z",id:"Rectangle-Copy","fill-rule":"nonzero"})))},minimize:function(){return Object(r.i)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"icons/minis/screensmall","fill-rule":"evenodd"},Object(r.i)("path",{d:"M11,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 L2.04162598,10 L11,10 L11,16 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z",id:"Rectangle","fill-rule":"nonzero"})))},"enter-vr":function(){return Object(r.i)("svg",{width:"19",height:"19",viewBox:"0 0 17 10",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"Page-1","fill-rule":"evenodd"},Object(r.i)("g",{id:"VRon","fill-rule":"nonzero"},Object(r.i)("path",{d:"M15.7856977,0.02395184 L15.8915734,0.02395184 C16.5037405,0.02395184 17,0.520211324 17,1.13237842 L17,1.54663675 L17,8.8915038 C17,9.5034193 16.4560011,10 15.7856977,10 L12.0095825,10 C9.98324439,7.1593807 8.80676009,5.741338 8.48012959,5.74587199 C8.16206045,5.75028714 7.01003321,7.1683298 5.02404785,10 L1.21426911,10 C0.543965735,10 3.32031236e-05,9.5034193 3.32031236e-05,8.8915038 L3.32031236e-05,1.54663675 L3.32031236e-05,1.13237842 L3.32031236e-05,1.13237842 C3.32031236e-05,0.520211324 0.496292687,0.02395184 1.10845978,0.02395184 L1.21426911,0.02395184 L15.7856977,0.02395184 Z M4.5,6 C5.32842712,6 6,5.32842712 6,4.5 C6,3.67157288 5.32842712,3 4.5,3 C3.67157288,3 3,3.67157288 3,4.5 C3,5.32842712 3.67157288,6 4.5,6 Z M12.5,6 C13.3284271,6 14,5.32842712 14,4.5 C14,3.67157288 13.3284271,3 12.5,3 C11.6715729,3 11,3.67157288 11,4.5 C11,5.32842712 11.6715729,6 12.5,6 Z",id:"Fill-1"}))))},"exit-vr":function(){return Object(r.i)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"icons/minis/VRon-Copy","fill-rule":"evenodd"},Object(r.i)("g",{id:"Group-7-Copy",transform:"translate(1 3)"},Object(r.i)("path",{d:"M15.7856977,3.02395184 L17,3.02395184 L17,4.13237842 L17,4.54663675 L17,11.8915038 C17,12.5034193 16.4560011,13 15.7856977,13 L12.0095825,13 C9.98324439,10.1593807 8.80676009,8.741338 8.48012959,8.74587199 C8.16206045,8.75028714 7.01003321,10.1683298 5.02404785,13 L1.21426911,13 C0.543965735,13 3.32031236e-05,12.5034193 3.32031236e-05,11.8915038 L3.32031236e-05,4.54663675 L3.32031236e-05,4.13237842 L3.32031236e-05,3.02395184 L1.21426911,3.02395184 L15.7856977,3.02395184 Z M4.5,9 C5.32842712,9 6,8.32842712 6,7.5 C6,6.67157288 5.32842712,6 4.5,6 C3.67157288,6 3,6.67157288 3,7.5 C3,8.32842712 3.67157288,9 4.5,9 Z M12.5,9 C13.3284271,9 14,8.32842712 14,7.5 C14,6.67157288 13.3284271,6 12.5,6 C11.6715729,6 11,6.67157288 11,7.5 C11,8.32842712 11.6715729,9 12.5,9 Z M2.5486669,0 L14.420089,0 C14.7977406,0 15.1613805,0.149260956 15.4374308,0.417695511 L16.9999668,2.00634766 L0,2.00634766 L1.58537972,0.395493117 C1.84682061,0.141306827 2.19106994,0 2.5486669,0 Z",id:"Fill-1"}))))},warning:function(){return Object(r.i)("svg",{width:"21",height:"18",viewBox:"0 0 21 18",xmlns:"http://www.w3.org/2000/svg"},Object(r.i)("g",{id:"02-Basic-Inputs",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Object(r.i)("g",{id:"Bits-&-Loaders-1312px-/-16-Copy-2",transform:"translate(-287.000000, -2242.000000)",fill:"#FFFFFF"},Object(r.i)("path",{d:"M307.648967,2256.27828 L299.66725,2243.21184 C299.202561,2242.45466 298.384621,2242 297.500172,2242 C296.615722,2242 295.797783,2242.45466 295.333093,2243.18986 L287.351377,2256.27836 C286.886687,2257.03555 286.886687,2257.96598 287.32892,2258.74506 C287.771145,2259.52423 288.589084,2260 289.517579,2260 L305.481676,2260 C306.388591,2260 307.20653,2259.52423 307.670336,2258.74506 C308.113423,2257.96589 308.113423,2257.03549 307.648742,2256.27836 L307.648967,2256.27828 Z M296.482789,2248.23069 C296.482789,2247.68984 296.947479,2247.23518 297.50026,2247.23518 C298.053041,2247.23518 298.517731,2247.68984 298.517731,2248.23069 L298.517731,2252.36319 C298.517731,2252.90404 298.053041,2253.3587 297.50026,2253.3587 C296.947479,2253.3587 296.482789,2252.90404 296.482789,2252.36319 L296.482789,2248.23069 Z M297.50026,2256.81913 C296.814458,2256.81913 296.261677,2256.27828 296.261677,2255.60728 C296.261677,2254.93629 296.814458,2254.39544 297.50026,2254.39544 C298.186062,2254.39544 298.738844,2254.93629 298.738844,2255.60728 C298.738844,2256.27828 298.186062,2256.81913 297.50026,2256.81913 Z",id:"Fill-1"}))))},loading:function(){return Object(r.i)("svg",{width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1"},Object(r.i)("g",{id:"02-Basic-Inputs",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Object(r.i)("g",{id:"Bits-&-Loaders-1312px-/-16-Copy-2",transform:"translate(-392.000000, -448.000000)"},Object(r.i)("g",{id:"AmpBasicSmall",transform:"translate(392.000000, 448.000000)"},Object(r.i)("path",{d:"M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 Z",id:"spinner-circle",fill:"#E1E1E1"}),Object(r.i)("path",{d:"M10,0 L10,4 C6.6862915,4 4,6.6862915 4,10 C4,12.0133587 4.99166921,13.7951006 6.51321137,14.8834295 L4.18685298,18.1377379 C1.65198576,16.3237368 0,13.3547894 0,10 C0,4.4771525 4.4771525,0 10,0 Z",id:"spinner-bar",fill:"#FF9900"})))))},photoPlaceholder:function(){return Object(r.i)("svg",{style:{padding:"64px 0px 64px",fill:"black"},xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24"},Object(r.i)("circle",{cx:"12",cy:"12",r:"3.2"}),Object(r.i)("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}),Object(r.i)("path",{d:"M0 0h24v24H0z",fill:"none"}))},microphone:function(){return Object(r.i)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",height:"20px"},Object(r.i)("path",{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}))},send:function(){return Object(r.i)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:"20px"},Object(r.i)("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}))},ban:function(){return Object(r.i)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Object(r.i)("path",{d:"M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"}))}}},H8iN:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.Public="public",e.Private="private",e.Protected="protected"}(r||(r={}))},JIIv:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var r=n("Nt7R"),i=new r.a("I18n"),a=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),i.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return void 0!==t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||(void 0!==t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map(function(n){t.putVocabulariesForLanguage(n,e[n])})},e}(),o=n("fQM2"),c=new r.a("I18n"),u=null,s=null,E=function(){function e(){}return e.configure=function(t){return c.debug("configure I18n"),t?(u=Object.assign({},u,t.I18n||t),e.createInstance(),u):u},e.getModuleName=function(){return"I18n"},e.createInstance=function(){c.debug("create I18n instance"),s||(s=new a(u))},e.setLanguage=function(t){return e.checkConfig(),s.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?s.get(t,n):void 0===n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),s.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),s.putVocabularies(t)},e.checkConfig=function(){return s||(s=new a(u)),!0},e}();o.a.register(E)},TAxe:function(e,n,r){"use strict";r.d(n,"a",function(){return d}),r.d(n,"b",function(){return g});var i=r("Nt7R"),a=r("HzrR"),o=r("s1tr"),c=r("v4IS"),u=r("vbTL"),s=r("/vcS"),E=r("xtuj"),l=new i.a("auth-helpers");function d(e,t){return L.apply(this,arguments)}function L(){return(L=t(regeneratorRuntime.mark(function e(t,n){var r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c.a&&"function"==typeof c.a.verifiedContact){e.next=2;break}throw new Error(s.d);case 2:return e.prev=2,e.next=5,c.a.verifiedContact(t);case 5:r=e.sent,!Object(a.d)(r.verified)||Object(a.d)(r.unverified)?n(o.a.SignedIn,t):(i=Object.assign(t,r),n(o.a.VerifyContact,i)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),Object(E.a)(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}))).apply(this,arguments)}var g=function(){var e=t(regeneratorRuntime.mark(function e(t,n,r){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c.a&&"function"==typeof c.a.signIn){e.next=2;break}throw new Error(s.d);case 2:return e.prev=2,e.next=5,c.a.signIn(t,n);case 5:if(i=e.sent,l.debug(i),i.challengeName!==o.b.SMSMFA&&i.challengeName!==o.b.SoftwareTokenMFA){e.next=11;break}l.debug("confirm user with "+i.challengeName),r(o.a.ConfirmSignIn,i),e.next=25;break;case 11:if(i.challengeName!==o.b.NewPasswordRequired){e.next=15;break}l.debug("require new password",i.challengeParam),r(o.a.ResetPassword,i),e.next=25;break;case 15:if(i.challengeName!==o.b.MFASetup){e.next=19;break}l.debug("TOTP setup",i.challengeParam),r(o.a.TOTPSetup,i),e.next=25;break;case 19:if(i.challengeName!==o.b.CustomChallenge||!i.challengeParam||"true"!==i.challengeParam.trigger){e.next=23;break}l.debug("custom challenge",i.challengeParam),r(o.a.CustomConfirmSignIn,i),e.next=25;break;case 23:return e.next=25,d(i,r);case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(2),"UserNotConfirmedException"===e.t0.code?(l.debug("the user is not confirmed"),r(o.a.ConfirmSignUp,{username:t})):"PasswordResetRequiredException"===e.t0.code?(l.debug("the user requires a new password"),r(o.a.ForgotPassword,{username:t})):"InvalidParameterException"===e.t0.code&&""===n&&(l.debug("Password cannot be empty"),e.t0.message=u.a.EMPTY_PASSWORD),Object(E.a)(e.t0);case 30:case"end":return e.stop()}},e,null,[[2,27]])}));return function(t,n,r){return e.apply(this,arguments)}}()},Y0ez:function(e,n,r){"use strict";r.d(n,"a",function(){return s}),r.d(n,"b",function(){return c}),r.d(n,"c",function(){return u}),r.d(n,"d",function(){return o}),r.d(n,"e",function(){return E});var i=r("/vcS"),a=r("l1VB"),o=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),c=function(e,t){var n=e.name,r=e.size,i=e.type,a=encodeURI(n);return t&&((a="string"==typeof t?t:"function"==typeof t?t({name:n,size:r,type:i}):encodeURI(JSON.stringify(t)))||(a="empty_key")),a.replace(/\s/g,"_")},u=function(){var e=t(regeneratorRuntime.mark(function e(t,n,r,o,c){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.a&&"function"==typeof a.a.get){e.next=2;break}throw new Error(i.n);case 2:return e.prev=2,e.next=5,a.a.get(t,{level:n,track:r,identityId:o});case 5:return u=e.sent,e.abrupt("return",(c.debug("Storage image get",u),u));case 9:throw e.prev=9,e.t0=e.catch(2),new Error(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t,n,r,i,a){return e.apply(this,arguments)}}(),s=function(){var e=t(regeneratorRuntime.mark(function e(t,n,r,o,c){var u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.a&&"function"==typeof a.a.get){e.next=2;break}throw new Error(i.n);case 2:return e.prev=2,e.next=5,a.a.get(t,{download:!0,level:n,track:r,identityId:o});case 5:return u=e.sent,c.debug(u),e.next=9,s=u.Body,new Promise(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(s)});case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(2),new Error(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t,n,r,i,a){return e.apply(this,arguments)}}(),E=function(){var e=t(regeneratorRuntime.mark(function e(t,n,r,o,c,u){var s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.a&&"function"==typeof a.a.put){e.next=2;break}throw new Error(i.n);case 2:return e.prev=2,e.next=5,a.a.put(t,n,{contentType:c,level:r,track:o});case 5:s=e.sent,u.debug("Upload data",s),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),new Error(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t,n,r,i,a,o){return e.apply(this,arguments)}}()},s1tr:function(e,t,n){"use strict";var r,i,a,o,c;n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return o}),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(i||(i={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(a||(a={})),function(e){e.Password="password"}(o||(o={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(c||(c={}))},vbTL:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r,i,a=n("YKz8");!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.USERNAME_REMOVE_WHITESPACE="Username cannot contains whitespace",e.PASSWORD_REMOVE_WHITESPACE="Password cannot start or end with whitespace",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancillary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(i||(i={}));var o=Object.assign(Object.assign(Object.assign({},r),a.a),i)},xtuj:function(e,n,r){"use strict";r.d(n,"a",function(){return L}),r.d(n,"b",function(){return C}),r.d(n,"c",function(){return f}),r.d(n,"d",function(){return g}),r.d(n,"e",function(){return d}),r.d(n,"f",function(){return O}),r.d(n,"g",function(){return p}),r.d(n,"h",function(){return _}),r.d(n,"i",function(){return A});var i=r("Nt7R"),a=r("Qycn"),o=r("JIIv"),c=r("s1tr"),u=r("AO/9"),s=r("vbTL"),E=r("/vcS"),l=new i.a("helpers"),d=function(e){return!!e.shadowRoot&&!!e.attachShadow},L=function(e){a.a.dispatch(E.i,{event:E.h,message:o.a.get(e.message)})},g=function(e,t){a.a.dispatch(E.i,{event:E.j,message:e,data:t})},C=function(e){if(!e.phoneNumberValue)throw new Error(E.e);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return"".concat(e.countryDialCodeValue).concat(t)},f=function(e){if(!(e in c.d))throw new Error("Invalid username Alias - ".concat(e,". Instead use ").concat(Object.values(c.d)))},_=function(e){var n=function(){var n=t(regeneratorRuntime.mark(function t(n){var r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=n.payload,t.t0=r.event,t.next=t.t0===E.j?4:19;break;case 4:if(!r.message){t.next=19;break}if(r.message!==c.a.SignedIn){t.next=18;break}return t.prev=6,t.next=9,u.a.currentAuthenticatedUser();case 9:i=t.sent,e(r.message,i),t.next=16;break;case 13:t.prev=13,t.t1=t.catch(6),l.error("User is not authenticated");case 16:t.next=19;break;case 18:e(r.message,r.data);case 19:case"end":return t.stop()}},t,null,[[6,13]])}));return function(e){return n.apply(this,arguments)}}();return a.a.listen(E.i,n),function(){return a.a.remove(E.i,n)}},p=function(e){return!(null===e.hint||"string"==typeof e.hint)},A={address:{label:o.a.get(s.a.ADDRESS_LABEL),placeholder:o.a.get(s.a.ADDRESS_PLACEHOLDER)},nickname:{label:o.a.get(s.a.NICKNAME_LABEL),placeholder:o.a.get(s.a.NICKNAME_PLACEHOLDER)},birthdate:{label:o.a.get(s.a.BIRTHDATE_LABEL),placeholder:o.a.get(s.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:o.a.get(s.a.PHONE_LABEL),placeholder:o.a.get(s.a.PHONE_PLACEHOLDER)},email:{lable:o.a.get(s.a.EMAIL_LABEL),placeholder:o.a.get(s.a.EMAIL_PLACEHOLDER)},picture:{label:o.a.get(s.a.PICTURE_LABEL),placeholder:o.a.get(s.a.PICTURE_PLACEHOLDER)},family_name:{label:o.a.get(s.a.FAMILY_NAME_LABEL),placeholder:o.a.get(s.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:o.a.get(s.a.PREFERRED_USERNAME_LABEL),placeholder:o.a.get(s.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:o.a.get(s.a.GENDER_LABEL),placeholder:o.a.get(s.a.GENDER_PLACEHOLDER)},profile:{label:o.a.get(s.a.PROFILE_LABEL),placeholder:o.a.get(s.a.PROFILE_PLACEHOLDER)},given_name:{label:o.a.get(s.a.GIVEN_NAME_LABEL),placeholder:o.a.get(s.a.GIVEN_NAME_LABEL)},zoneinfo:{label:o.a.get(s.a.ZONEINFO_LABEL),placeholder:o.a.get(s.a.ZONEINFO_PLACEHOLDER)},locale:{label:o.a.get(s.a.LOCALE_LABEL),placeholder:o.a.get(s.a.LOCALE_PLACEHOLDER)},updated_at:{label:o.a.get(s.a.UPDATED_AT_LABEL),placeholder:o.a.get(s.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:o.a.get(s.a.MIDDLE_NAME_LABEL),placeholder:o.a.get(s.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:o.a.get(s.a.WEBSITE_LABEL),placeholder:o.a.get(s.a.WEBSITE_PLACEHOLDER)},name:{label:o.a.get(s.a.NAME_LABEL),placeholder:o.a.get(s.a.NAME_PLACEHOLDER)}};function O(e,t){var n=e.target.name,r=e.target.value;n===E.b&&(t.countryDialCodeValue=r),n===E.k&&(t.phoneNumberValue=r)}}}])}();