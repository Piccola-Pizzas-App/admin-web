import{h as M,i as _,j as b}from"./chunk-ODOCJJXK.js";import"./chunk-P63FB7CU.js";import"./chunk-55JEHFV6.js";import"./chunk-KTAJZL4L.js";import{h as F}from"./chunk-I46D7BUH.js";import"./chunk-2L4G3X5X.js";import"./chunk-4C57YJA5.js";import{$a as p,Hb as m,Ib as n,Jb as c,Oc as x,Pc as I,T as h,Tc as E,_b as l,da as d,gc as S,ha as y,l as g,p as v,sb as O,v as C,xb as a}from"./chunk-H3XUDRPM.js";import{a as f,b as u}from"./chunk-RGL3W33T.js";function A(r,e){if(r&1&&(m(0,"div"),c(1,"app-orders",3),n()),r&2){let T=e.$implicit;p(),a("type","completed")("order",T)}}function D(r,e){r&1&&(m(0,"p",4),l(1,"No hay pedidos"),n())}var $=(()=>{let e=class e{constructor(){this.ordersService=d(M),this.addressesService=d(b),this.router=d(F),this.orders=[]}ngOnInit(){this.ordersService.getOrdersByStatus("COMPLETED").pipe(h(t=>{let i=t.data.map(s=>s.addressId==="no-id"?g(s):this.addressesService.getAddressById(s.addressId).pipe(v(w=>u(f({},s),{addressId:w.streetNumber}))));return C(i)})).subscribe({next:t=>{this.orders=t},error:t=>{console.error("Error fetching orders:",t)}})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=y({type:e,selectors:[["ng-component"]],standalone:!0,features:[S],decls:6,vars:2,consts:[[1,"orders-wrapper"],[4,"ngFor","ngForOf"],["style","text-align: center;",4,"ngIf"],[3,"type","order"],[2,"text-align","center"]],template:function(o,i){o&1&&(m(0,"div",0)(1,"h1"),l(2,"Pedidos Completados"),n(),c(3,"hr"),O(4,A,2,2,"div",1)(5,D,2,0,"p",2),n()),o&2&&(p(4),a("ngForOf",i.orders),p(),a("ngIf",i.orders.length===0))},dependencies:[_,E,x,I],styles:[".orders-wrapper[_ngcontent-%COMP%]{background-color:#fff;padding:20px 10px;border-radius:10px}"]});let r=e;return r})();export{$ as AllOrdersComponents};
