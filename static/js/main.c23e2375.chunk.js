(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),i=n.n(o),r=n(6),c=n(8),l=n(1),a=n(3),u=n.n(a),d=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.sortFieldName="name",t.sortFieldLength="length",t.sortFieldNone=""}(s||(s={}));var h=function(){var t=Object(l.useState)(s.sortFieldNone),e=Object(r.a)(t,2),n=e[0],o=e[1],i=Object(l.useState)(!1),a=Object(r.a)(i,2),h=a[0],j=a[1],g=function(t,e){var n=e.sortField,o=e.isReversed,i=Object(c.a)(t);return n&&i.sort((function(t,e){switch(n){case s.sortFieldName:return t.localeCompare(e);case s.sortFieldLength:return t.length-e.length;default:return 0}})),o&&i.reverse(),i}(b,{sortField:n,isReversed:h});return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==s.sortFieldName}),onClick:function(){return o(s.sortFieldName)},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==s.sortFieldLength}),onClick:function(){return o(s.sortFieldLength)},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!1===h}),onClick:function(){j((function(t){return!t}))},children:"Reverse"}),(""!==n||!0===h)&&Object(d.jsx)("button",{type:"button",className:u()("button is-danger is-light"),onClick:function(){o(s.sortFieldNone),j(!1)},children:"Reset"})]}),Object(d.jsx)("ul",{children:g.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c23e2375.chunk.js.map