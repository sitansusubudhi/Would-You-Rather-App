(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{206:function(e,t,n){e.exports=n(347)},211:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),l=n.n(o),i=(n(211),n(20)),c=n(21),u=n(23),s=n(22),d=n(24),m=n(19),h=n(193),p=n(29),v=n(17),b={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"./images/IMG_1031_LinkedIn.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"./images/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"./images/20171230_170339_account.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]},sksubudhi:{id:"sksubudhi",name:"Sitansu Subudhi",avatarURL:"./images/rhaul-v-alva-jCM48W7y6Y8-unsplash.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne",ab567vofupe1dqz9emx13r:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionOne"},questions:["ab567vofupe1dqz9emx13r"]}},E={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo","sksubudhi"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:["sksubudhi"],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}},ab567vofupe1dqz9emx13r:{id:"ab567vofupe1dqz9emx13r",author:"sksubudhi",timestamp:1498799767190,optionOne:{votes:[],text:"create a new poll"},optionTwo:{votes:["sksubudhi"],text:"answer an existing one"}}};function f(){return new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},b))}),1e3)}))}function O(){return new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},E))}),1e3)}))}function g(e){return new Promise((function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){E=Object(v.a)({},E,Object(p.a)({},r.id,r)),b=Object(v.a)({},b,Object(p.a)({},a,Object(v.a)({},b[a],{questions:b[a].questions.concat([r.id])}))),t(r)}),1e3)}))}function j(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise((function(e,r){setTimeout((function(){b=Object(v.a)({},b,Object(p.a)({},t,Object(v.a)({},b[t],{answers:Object(v.a)({},b[t].answers,Object(p.a)({},n,a))}))),E=Object(v.a)({},E,Object(p.a)({},n,Object(v.a)({},E[n],Object(p.a)({},a,Object(v.a)({},E[n][a],{votes:E[n][a].votes.concat([t])}))))),e()}),500)}))}(e)}var w=n(34),y=n.n(w);function T(e){var t=e.author,n=e.optionOneText,a=e.optionTwoText;return function(e){return e(Object(w.showLoading)()),(r={author:t,optionOneText:n,optionTwoText:a},g(r)).then((function(t){e(function(e){return{type:"ADD_QUESTION",question:e}}(t)),e(function(e){return{type:"ADD_USER_QUESTION",authedUser:e.author,id:e.id}}(t))})).then((function(){return e(Object(w.hideLoading)())}));var r}}function x(e){var t=e.authedUser,n=e.qid,a=e.answer;return function(e){var r;return e(Object(w.showLoading)()),e({type:"SET_QUESTION_ANSWER",authedUser:(r={authedUser:t,qid:n,answer:a}).authedUser,qid:r.qid,answer:r.answer}),e(function(e){return{type:"SET_USER_ANSWER",authedUser:e.authedUser,qid:e.qid,answer:e.answer}}({authedUser:t,qid:n,answer:a})),j({authedUser:t,qid:n,answer:a}).catch((function(e){console.warn("Error in handleSetQuestionAnswer: ",e),alert("There was an error saving the answer. Try again.")})).then((function(){return e(Object(w.hideLoading)())}))}}function q(){return function(e){return e(Object(w.showLoading)()),Promise.all([f(),O()]).then((function(e){var t=Object(h.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,a=t.questions;e(function(e){return{type:"RECEIVE_USERS",users:e}}(n)),e(function(e){return{type:"RECEIVE_QUESTIONS",questions:e}}(a))})).then((function(){return e(Object(w.hideLoading)())}))}}var k=n(36),S=n(49),U=n(366),A=n(130),C=n(365),R=n(359),I=n(364),z=n(68),_=n(99),L=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){e.preventDefault();var t=n.props.question.id;n.props.history.push("".concat("/Would-You-Rather-App","/questions/").concat(t))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.question;if(null===n)return r.a.createElement("p",null,"This question doesn't exist");var a=n.id,o=n.optionOne,l=t.name,i=t.avatarURL;return r.a.createElement(A.a.Group,null,r.a.createElement(A.a,null,r.a.createElement(C.a,{as:"h3"},l," asks:")),r.a.createElement(A.a,null,r.a.createElement(R.a.Group,{divided:!0},r.a.createElement(R.a,null,r.a.createElement(R.a.Image,{src:i}),r.a.createElement(R.a.Content,{verticalAlign:"middle"},r.a.createElement(R.a.Header,null,"Would you rather"),r.a.createElement(R.a.Description,null,o.text," or ..."),!0===this.props.answered?r.a.createElement(R.a.Extra,null,r.a.createElement(I.a,{name:"resultView",color:"green",floated:"right",onClick:this.handleClick},"Show Poll Results",r.a.createElement(z.a,{name:"right chevron"})),r.a.createElement(_.a,null,a)):r.a.createElement(R.a.Extra,null,r.a.createElement(I.a,{name:"questionView",color:"black",floated:"right",onClick:this.handleClick},"View Poll",r.a.createElement(z.a,{name:"right chevron"})),r.a.createElement(_.a,null,a)))))))}}]),t}(a.Component);var W=Object(S.g)(Object(m.connect)((function(e,t){var n=e.users,a=e.questions[t.id];return{user:n[a.author],question:a}}))(L)),N=function(e){var t=e.unansweredQuestions;return r.a.createElement("div",null,r.a.createElement("ul",{className:"dashboard-list"},t.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(W,{id:e,answered:!1}))}))))},D=function(e){var t=e.answeredQuestions;return r.a.createElement("div",null,r.a.createElement("ul",{className:"dashboard-list"},t.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(W,{id:e,answered:!0}))}))))},V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.users,a=e.questions;if(!t)return r.a.createElement(S.a,{to:"/Would-You-Rather-App/"});var o=Object.keys(n[t].answers),l=a.filter((function(e){return-1===o.indexOf(e)})),i=a.filter((function(e){return-1===l.indexOf(e)})),c=[{menuItem:"Unanswered Questions",render:function(){return r.a.createElement(U.a.Pane,null,r.a.createElement(N,{unansweredQuestions:l}))}},{menuItem:"Answered Questions",render:function(){return r.a.createElement(U.a.Pane,null,r.a.createElement(D,{answeredQuestions:i}))}}];return r.a.createElement("div",null,r.a.createElement(U.a,{menu:{fluid:!0,pointing:!0,vertical:!0,tabular:!0},panes:c}))}}]),t}(a.Component);var H=Object(m.connect)((function(e){var t=e.authedUser,n=e.users,a=e.questions;return{authedUser:t,users:n,questions:Object.keys(a).sort((function(e,t){return a[t].timestamp-a[e].timestamp}))}}))(V),P=n(195),Q=n(363),Y=n(357),G=n(361);n(331);function M(e){return{type:"SET_AUTHED_USER",id:e}}var F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handleChange=function(e,t){var a=t.value;n.setState((function(){return{value:a}}))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.value;(0,n.props.dispatch)(M(t))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.users,t=Object.keys(e).map((function(t){var n=e[t];return{key:n.id,text:n.name,value:n.id,image:{avatar:!0,src:n.avatarURL}}})),n=this.state.value;return r.a.createElement(P.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},r.a.createElement(P.a.Column,{style:{maxWidth:500}},r.a.createElement(C.a,{as:"h3",color:"teal",textAlign:"center"},r.a.createElement(Q.a,{size:"large"},"Welcome to the Would You Rather App")),r.a.createElement(Y.a,{size:"large",onSubmit:this.handleSubmit},r.a.createElement(A.a,null,r.a.createElement(Y.a.Field,null,r.a.createElement(G.a,{placeholder:"Select user to log in",fluid:!0,selection:!0,onChange:this.handleChange,value:n,options:t})),r.a.createElement(I.a,{color:"black",fluid:!0,size:"large",disabled:""===n},"Login")))))}}]),t}(a.Component);var B=Object(m.connect)((function(e){return{users:e.users}}))(F),J=n(194),$=n(192),K=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleAuthUserLogout=function(e){e.preventDefault(),n.props.dispatch(M(null)),n.props.history.push("/Would-You-Rather-App/")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.users;return t?r.a.createElement(a.Fragment,null,r.a.createElement(A.a,{inverted:!0},r.a.createElement(J.a,{inverted:!0,pointing:!0,secondary:!0},r.a.createElement(J.a.Item,{name:"home",as:k.b,to:"/Would-You-Rather-App/",exact:!0}),r.a.createElement(J.a.Item,{name:"new poll",as:k.b,to:"/Would-You-Rather-App/add"}),r.a.createElement(J.a.Item,{name:"leaderboard",as:k.b,to:"/Would-You-Rather-App/leaderboard"}),r.a.createElement(J.a.Menu,{position:"right"},r.a.createElement(J.a.Item,null,"Hello, ",n[t].name),r.a.createElement($.a,{src:n[t].avatarURL,avatar:!0}),r.a.createElement(J.a.Item,{name:"logout",onClick:this.handleAuthUserLogout}))))):r.a.createElement(S.a,{to:"/Would-You-Rather-App/"})}}]),t}(a.Component);var X=Object(S.g)(Object(m.connect)((function(e){return{authedUser:e.authedUser,users:e.users}}))(K)),Z=n(356),ee=n(362),te=n(355),ne=function(){return r.a.createElement(_.a,{as:"a",color:"blue",attached:"bottom right"},"Your choice")},ae=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.avatar,a=e.optionOne,o=e.optionOneVotes,l=e.optionOnePercent,i=e.optionTwo,c=e.optionTwoVotes,u=e.optionTwoPercent,s=e.totalVotes,d=e.userAnswer;return r.a.createElement(A.a.Group,null,r.a.createElement(A.a,null,r.a.createElement(C.a,{as:"h3"},t," asks:")),r.a.createElement(A.a,null,r.a.createElement(R.a.Group,{divided:!0},r.a.createElement(R.a,null,r.a.createElement(R.a.Image,{src:n}),r.a.createElement(R.a.Content,{verticalAlign:"middle"},r.a.createElement(R.a.Header,null,"Results:"),r.a.createElement(R.a.Description,null,r.a.createElement(ee.a.Group,{centered:!0,stackable:!0},r.a.createElement(ee.a,{fluid:!0},r.a.createElement(ee.a.Content,null,r.a.createElement(ee.a.Header,{textAlign:"center"},"Would you rather ",a," ?"),r.a.createElement(A.a,null,"optionOne"===d&&r.a.createElement(ne,null),r.a.createElement(te.a,{percent:l,color:"green",progress:!0},o," out of ",s," votes")))),r.a.createElement(ee.a,{fluid:!0},r.a.createElement(ee.a.Content,null,r.a.createElement(ee.a.Header,{textAlign:"center"},"Would you rather ",i," ?"),r.a.createElement(A.a,null,"optionTwo"===d&&r.a.createElement(ne,null),r.a.createElement(te.a,{percent:u,color:"green",progress:!0},c," out of ",s," votes")))))))))))}}]),t}(a.Component);var re=Object(m.connect)((function(e,t){var n=e.authedUser,a=e.users,r=e.questions,o=t.id,l=a[n],i=r[o],c=i.optionOne.votes.length,u=i.optionTwo.votes.length,s=c+u,d=(100*c/s).toFixed(1),m=a[i.author];return{name:m.name,avatar:m.avatarURL,optionOne:i.optionOne.text,optionOneVotes:c,optionOnePercent:d,optionTwo:i.optionTwo.text,optionTwoVotes:u,optionTwoPercent:100-d,totalVotes:s,userAnswer:l.answers[o]}}))(ae),oe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handlePageNoMatch=function(e){e.preventDefault(),n.props.history.push("/Would-You-Rather-App/")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{placeholder:!0},r.a.createElement(C.a,{as:"h2",icon:!0},r.a.createElement(z.a,{name:"settings"}),"404 - Not Found",r.a.createElement(C.a.Subheader,null,"The page link seems to be broken. Click below to go to Home.")),r.a.createElement(I.a,{color:"black",onClick:this.handlePageNoMatch},"Go Home"))}}]),t}(a.Component),le=Object(S.g)(oe),ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={optionOneActive:!1,optionTwoActive:!1},n.handleClickOptionOne=function(){n.setState((function(e){return{optionOneActive:!e.optionOneActive,optionTwoActive:(e.optionTwoActive,!1)}}))},n.handleClickOptionTwo=function(){n.setState((function(e){return{optionOneActive:(e.optionOneActive,!1),optionTwoActive:!e.optionTwoActive}}))},n.handleResult=function(e){e.preventDefault();var t,a=n.state,r=a.optionOneActive,o=a.optionTwoActive,l=n.props,i=l.question,c=l.loggedInUser,u=l.dispatch;(t=r?"optionOne":o?"optionTwo":"")&&u(x({authedUser:c.id,qid:i.id,answer:t}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionOneActive,n=e.optionTwoActive,a=this.props,o=a.user,l=a.question,i=a.loggedInUser;if(null===l)return r.a.createElement(le,null);var c=l.id,u=l.optionOne,s=l.optionTwo,d=o.name,m=o.avatarURL;return c in i.answers?r.a.createElement(re,{id:c}):r.a.createElement(A.a.Group,null,r.a.createElement(A.a,null,r.a.createElement(C.a,{as:"h3"},d," asks:")),r.a.createElement(A.a,null,r.a.createElement(R.a.Group,{divided:!0},r.a.createElement(R.a,null,r.a.createElement(R.a.Image,{src:m}),r.a.createElement(R.a.Content,{verticalAlign:"middle"},r.a.createElement(A.a,{textAlign:"center"},r.a.createElement(C.a,{as:"h3"},"Would you rather .."),r.a.createElement(Z.a,{section:!0}),r.a.createElement(I.a.Group,{size:"large"},r.a.createElement(I.a,{toggle:!0,active:t,onClick:this.handleClickOptionOne},u.text),r.a.createElement(I.a.Or,null),r.a.createElement(I.a,{toggle:!0,active:n,onClick:this.handleClickOptionTwo},s.text))),r.a.createElement(R.a.Extra,null,r.a.createElement(I.a,{disabled:!t&&!n,color:"black",floated:"right",onClick:this.handleResult},"Submit",r.a.createElement(z.a,{name:"right chevron"}))))))))}}]),t}(a.Component);var ce=Object(m.connect)((function(e,t){var n=e.authedUser,a=e.users,r=e.questions,o=t.match.params.question_id,l=a[n];if(!(o in r))return{user:null,question:null,loggedInUser:l};var i=r[o];return{user:a[i.author],question:i,loggedInUser:l}}))(ie),ue=n(360),se=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.leaders,t=[["1st","yellow"],["2nd","grey"],["3rd","orange"]];return r.a.createElement(A.a,null,r.a.createElement(R.a.Group,{divided:!0},e.map((function(e,n){return r.a.createElement(R.a,{key:e.id},r.a.createElement(R.a.Image,{src:e.avatar}),r.a.createElement(R.a.Content,{verticalAlign:"middle"},r.a.createElement(R.a.Header,null,e.name),r.a.createElement(ue.a,{celled:!0},r.a.createElement(ue.a.Header,null,r.a.createElement(ue.a.Row,null,r.a.createElement(ue.a.HeaderCell,null,"Rank"),r.a.createElement(ue.a.HeaderCell,null,"Questions answered"),r.a.createElement(ue.a.HeaderCell,null,"Polls created"),r.a.createElement(ue.a.HeaderCell,null,"Score"))),r.a.createElement(ue.a.Body,null,r.a.createElement(ue.a.Row,null,r.a.createElement(ue.a.Cell,null,r.a.createElement(_.a,{color:t[n][1],tag:!0},t[n][0])),r.a.createElement(ue.a.Cell,null,e.answersLength),r.a.createElement(ue.a.Cell,null,e.questionsLength),r.a.createElement(ue.a.Cell,null,e.totalScore))))))}))))}}]),t}(a.Component);var de=Object(m.connect)((function(e){var t=e.users;return{leaders:Object.keys(t).map((function(e){var n=t[e],a=n.questions.length,r=Object.keys(n.answers).length;return{id:n.id,name:n.name,avatar:n.avatarURL,questionsLength:a,answersLength:r,totalScore:a+r}})).sort((function(e,t){return t.totalScore-e.totalScore})).slice(0,3)}}))(se),me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={optionOneValue:"",optionTwoValue:"",toHome:!1},n.handleChange=function(e,t){var a=t.value,r=e.target.name;n.setState((function(){return Object(p.a)({},r,a)}))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.authedUser,r=t.dispatch,o=n.state;r(T({author:a,optionOneText:o.optionOneValue,optionTwoText:o.optionTwoValue})),n.setState((function(e){return Object(v.a)({},e,{toHome:!0})}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionOneValue,n=e.optionTwoValue;return!0===e.toHome?r.a.createElement(S.a,{to:"/Would-You-Rather-App/"}):r.a.createElement(A.a,{attached:!0},r.a.createElement(Q.a,{header:"Create a new poll",size:"large"}),r.a.createElement(Q.a,{info:!0},r.a.createElement("p",null,"Fill out the form below to create a new poll")),r.a.createElement(Y.a,{className:"fluid segment",onSubmit:this.handleSubmit},r.a.createElement(C.a,{as:"h2",icon:!0,textAlign:"center"},r.a.createElement(z.a,{name:"question",circular:!0}),r.a.createElement(C.a.Content,null,"Would you rather")),r.a.createElement(Y.a.Group,{widths:"equal"},r.a.createElement(Y.a.Input,{name:"optionOneValue",fluid:!0,inline:!0,label:"Set option one",className:"center",placeholder:"Enter option one text here",onChange:this.handleChange,value:t}),r.a.createElement(Y.a.Input,{name:"optionTwoValue",fluid:!0,inline:!0,label:"Set option two",className:"center",placeholder:"Enter option two text here",onChange:this.handleChange,value:n})),r.a.createElement(Y.a.Button,{fluid:!0,color:"black",disabled:""===t.trim()||""===n.trim()},"Submit")))}}]),t}(a.Component);var he=Object(m.connect)((function(e){return{authedUser:e.authedUser}}))(me),pe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(q())}},{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(y.a,null),r.a.createElement("div",{className:"container"},!0===this.props.userNotLogged?r.a.createElement(B,null):!0===this.props.loading?null:r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/Would-You-Rather-App/",exact:!0},r.a.createElement(H,null)),r.a.createElement(S.b,{path:"/Would-You-Rather-App/questions/:question_id",component:ce}),r.a.createElement(S.b,{path:"/Would-You-Rather-App/add"},r.a.createElement(he,null)),r.a.createElement(S.b,{path:"/Would-You-Rather-App/leaderboard"},r.a.createElement(de,null)),r.a.createElement(S.b,null,r.a.createElement(le,null)))))))}}]),t}(a.Component);var ve=Object(m.connect)((function(e){return{userNotLogged:null===e.authedUser}}))(pe),be=n(47);var Ee=Object(be.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":return t.id;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USERS":return Object(v.a)({},e,{},t.users);case"ADD_USER_QUESTION":var n=t.authedUser,a=t.id;return Object(v.a)({},e,Object(p.a)({},n,Object(v.a)({},e[n],{questions:e[n].questions.concat([a])})));case"SET_USER_ANSWER":var r=t.authedUser,o=t.qid,l=t.answer;return Object(v.a)({},e,Object(p.a)({},r,Object(v.a)({},e[r],{answers:Object(v.a)({},e[r].answers,Object(p.a)({},o,l))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_QUESTIONS":return Object(v.a)({},e,{},t.questions);case"ADD_QUESTION":var n=t.question,a=n.id;return Object(v.a)({},e,Object(p.a)({},a,n));case"SET_QUESTION_ANSWER":var r=t.authedUser,o=t.qid,l=t.answer;return Object(v.a)({},e,Object(p.a)({},o,Object(v.a)({},e[o],Object(p.a)({},l,Object(v.a)({},e[o][l],{votes:e[o][l].votes.concat([r])})))));default:return e}},loadingBar:w.loadingBarReducer}),fe=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var a=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),a}}},Oe=n(191),ge=Object(be.a)(Oe.a,fe),je=Object(be.d)(Ee,ge);l.a.render(r.a.createElement(m.Provider,{store:je},r.a.createElement(ve,null)),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.f7860abe.chunk.js.map