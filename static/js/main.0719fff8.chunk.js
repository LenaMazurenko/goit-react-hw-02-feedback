(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={BoxBtn:"FeedbackOptions_BoxBtn__2XMnq",FeedBackBtn:"FeedbackOptions_FeedBackBtn__1qCFu"}},,,,,,function(e,t,n){e.exports={Section:"Section_Section__1ozEJ"}},function(e,t,n){e.exports={FeedbackList:"Statistics_FeedbackList__14q_d"}},function(e,t,n){e.exports={Message:"Notification_Message__3h3Gc"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(4),s=n.n(o),i=(n(17),n(5)),r=n(6),d=n(7),u=n(12),l=n(11),b=n(8),j=n.n(b),h=n(0),k=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:j.a.Section,children:[Object(h.jsx)("h1",{children:t}),n]})},O=n(2),f=n.n(O),x=function(e){var t=e.onLeaveFeedback;return Object(h.jsxs)("div",{className:f.a.BoxBtn,children:[Object(h.jsx)("button",{type:"button",className:f.a.FeedBackBtn,onClick:function(){return t("good")},children:"Good"},"good"),Object(h.jsx)("button",{type:"button",className:f.a.FeedBackBtn,onClick:function(){return t("neutral")},children:"Neutral"},"neutral"),Object(h.jsx)("button",{type:"button",className:f.a.FeedBackBtn,onClick:function(){return t("bad")},children:"Bad"},"bad")]})},g=n(9),p=n.n(g),v=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(h.jsxs)("ul",{className:p.a.FeedbackList,children:[Object(h.jsxs)("li",{children:["\ud83d\ude0a Goog: ",t]}),Object(h.jsxs)("li",{children:["\ud83d\ude10 Neutral: ",n]}),Object(h.jsxs)("li",{children:["\ud83d\ude12 Bad: ",c]}),Object(h.jsxs)("li",{children:["\u27aa Total: ",a]}),Object(h.jsxs)("li",{children:["\u27aa Positive feedback: ",o,"%"]})]})},F=n(10),B=n.n(F),_=function(e){var t=e.message;return Object(h.jsxs)("p",{className:B.a.Message,children:["\u261d ",t," "]})},m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{title:"Please leave feedback",children:Object(h.jsx)(x,{onLeaveFeedback:this.handleIncrement})}),Object(h.jsx)(k,{title:"Statistic",children:0===this.countTotalFeedback()?Object(h.jsx)(_,{message:"There is no feedback"}):Object(h.jsx)(v,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component),N=m;s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.0719fff8.chunk.js.map