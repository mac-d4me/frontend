var zepto = require('zeptojs');
//var fetch = require('whatwg-fetch');
var Vue = require('vue');
//var pingpp = require('./js/pingpp.js');
//var promise = require('./js/promise.js');


    function currentview(index){

	  switch(index){
	    case 'home':{
    	   //$("#home").hide();
    		 //$("#topic").show();
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
        return false;
	    }

        case 'remix':{
         //$("#home").hide();
         //$("#topic").show();
         document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
        return false;
      }

       case 'productinfo':{
         //$("#home").hide();
         //$("#topic").show();
         document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
        return false;
      }
      

	    case 'topic':{
        document.getElementById('login').style.display = "none";
  	    document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
	    }
       case 'topicinfo':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
	    case 'myprofile':{
        document.getElementById('login').style.display = "none";
	      document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
	    }
      case 'shopcart':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
       case 'myorders':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
        case 'myshopcart':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
       document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "";
         return false;
      }
       case 'myfavor':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
      case 'sidemenu':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
        case 'searchbar':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "";
        document.getElementById('searchbar').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
       case 'profileinfo':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }

        case 'deliveredinfo':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('deliveredinfo').style.display = "";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }

          case 'deliveredinfodetail':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }

        case 'shoppingnotice':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
        case 'contactus':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }

        case 'payorder':{
        document.getElementById('login').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }

        case 'login':{
        document.getElementById('login').style.display = "";
        document.getElementById('home').style.display = "none";
        document.getElementById('remix').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
         document.getElementById('deliveredinfo').style.display = "none";
        document.getElementById('deliveredinfodetail').style.display = "none";
        document.getElementById('shoppingnotice').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('payorder').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }


	  }
   }

   var cookie_cutter = function(doc) {
        if (!doc) doc = {};
        if (typeof doc === 'string') doc = { cookie: doc };
        if (doc.cookie === undefined) doc.cookie = '';

        var self = {};
        self.get = function (key) {
            var splat = doc.cookie.split(/;\s*/);
            for (var i = 0; i < splat.length; i++) {
                var ps = splat[i].split('=');
                var k = unescape(ps[0]);
                if (k === key) return unescape(ps[1]);
            }
            return undefined;
        };

        self.set = function (key, value, opts) {
            if (!opts) opts = {};
            var s = escape(key) + '=' + escape(value);
            if (opts.expires) s += '; expires=' + opts.expires;
            if (opts.path) s += '; path=' + escape(opts.path);
            doc.cookie = s;
            return s;
        };
        return self;
    };

    var cookie = cookie_cutter(document)

    function trim(str){
      if (str.trim) return str.trim();
      return str.replace(/^\s*|\s*$/g, '');
    }

    var pattern = /(\w+)\[(\d+)\]/;

    var decode = function(str) {
      try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
      } catch (e) {
        return str;
      }
    }

    var parseUrl = parse = function(str){
      if ('string' != typeof str) return {};

      str = trim(str);
      if ('' == str) return {};
      if ('?' == str.charAt(0)) str = str.slice(1);

      var obj = {};
      var pairs = str.split('&');
      for (var i = 0; i < pairs.length; i++) {
        var parts = pairs[i].split('=');
        var key = decode(parts[0]);
        var m;

        if (m = pattern.exec(key)) {
          obj[m[1]] = obj[m[1]] || [];
          obj[m[1]][m[2]] = decode(parts[1]);
          continue;
        }

        obj[parts[0]] = null == parts[1]
          ? ''
          : decode(parts[1]);
      }

      return obj;
    };


     

  var app = new Vue({
    el: '#app',
    data: {
     auth_token: null,user: {}, products: [] , mixes: [] ,product: {},articles: [] ,user: {}, addresses:[],orders: [] ,order: {} 
          },
    created: function()
     {

      var auth_token = parseUrl(location.search).auth_token
            if (auth_token) {
              console.log(auth_token)
              //console.log(this)
              console.log('qq')
              cookie.set('auth_token', auth_token)
              this.auth_token = auth_token
              fetch('http://dev.d4me.com/api/v1/users/4', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
              console.log(json)   
              console.log(json.user)
            self.$data.user = json.user
              })

            } else if (cookie.get('auth_token')) {
              console.log('qqqq')
              this.auth_token = cookie.get('auth_token')
            }

        

     var self = this
     fetch('http://dev.d4me.com/api/v1/products', {
          credentials: 'same-origin',
          })
      .then(function(response) {
            return response.json()
          }).then(function(json) {
          //console.log(json.products)   
          self.$data.products = json.products
          currentview('home');
          })
        },
         methods: {
        home: function(ev){
          var self = this
        fetch('http://dev.d4me.com/api/v1/products', {
          credentials: 'same-origin',
          })
        .then(function(response) {
            return response.json()
          }).then(function(json) {
         // console.log(json.products)   
          self.$data.products = json.products
            currentview('home');
              })

        },
      
        productinfo: function(ev){
          var self = this
         fetch('http://dev.d4me.com/api/v1/products/1', {
              credentials: 'same-origin',
              })
          .then(function(response) {
                return response.json()
              }).then(function(json) {
               console.log(json)   
               console.log(json.articles)   
              self.$data.product = json.product
              currentview('productinfo');
              })
        },
         remix: function(ev){
          var self = this
         fetch('http://dev.d4me.com/api/v1/mixes.json?auth_token=12345', {
              credentials: 'same-origin',
              })
          .then(function(response) {
                return response.json()
              }).then(function(json) {
              console.log(json)   
              console.log(json.mixes)   
              self.$data.mixes = json.mixes
              currentview('remix');
              })
        },
        topic: function(ev){
          var self = this
         fetch('http://dev.d4me.com/api/v1/articles', {
              credentials: 'same-origin',
              })
          .then(function(response) {
                return response.json()
              }).then(function(json) {
            //console.log(json)   
              //console.log(json.articles)   
              self.$data.articles = json.articles
              currentview('topic');
              })
        },
         topicinfo: function(ev){
          var self = this
         fetch('http://dev.d4me.com/api/v1/articles', {
              credentials: 'same-origin',
              })
          .then(function(response) {
                return response.json()
              }).then(function(json) {
              self.$data.articles = json.articles
              currentview('topicinfo');
              })
        },
         myprofile: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/users/4', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             // console.log(json)   
             // console.log(json.user)
            self.$data.user = json.user
            currentview('myprofile');
              })

        },
          deliveredinfo: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/addresses.json?auth_token=12345', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             console.log(json)   
             console.log(json.addresses)
            self.$data.addresses = json.addresses
            currentview('deliveredinfo');
              })

        },
     /*   deliveredinfoadd: function(ev){

          fetch('http://dev.d4me.com/api/v1/addresses.json', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: '5',
            phone:'139169897771',
            street:'sanghai changningqu yuan1',
            city :'sanghai',
            province :'shaghai',
            country:'china',
            default:'1',
            auth_token:'12345'
          }) 
          currentview('deliveredinfo');
        })
        },
*/
        shoppingnotice: function(ev){

            currentview('shoppingnotice');
        },
        contactus: function(ev){

            currentview('contactus');
        },
        sidemenu: function(ev){

            currentview('sidemenu');
        },
        profileinfo: function(ev){

            currentview('profileinfo');
        },
        myfavor: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/orders.json?auth_token=12345', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             console.log(json)   
             console.log(json.orders)
            self.$data.orders = json.orders
            currentview('myfavor');
              })
        },

          myorders: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/orders.json?auth_token=12345', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             console.log(json)   
             console.log(json.orders)
            self.$data.orders = json.orders
            currentview('myorders');
              })
        },

         payorders: function(ev){
          
         fetch('http://dev.d4me.com/api/v1/orders/5/pay.json', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: '5',
            auth_token:'12345'
          }) 
        }).then(function(charge) {
              pingpp.createPayment(charge, function(result, error){
                alert(result);
                alert(charge);
                  if (result == "success") {
                    console.log('success')
                      window.location = "index.html"
                      // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的 wap 支付结果都是在 extra 中对应的 URL 跳转。
                  } else if (result == "fail") {
                      // charge 不正确或者微信公众账号支付失败时会在此处返回
                      app.message = JSON.stringify(error)
                  } else if (result == "cancel") {
                      // 微信公众账号支付取消支付
                      app.message = JSON.stringify(error)
                  }
              });
            })
        },
        
        createorders: function(ev){
          console.log("123");
         fetch('http://dev.d4me.com/api/v1/orders.json', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: [{product_id:5,quantity:1},{product_id:3,quantity:2}],
            address_id: '1',
            auth_token:'12345'
          })
        })
        },



          Payment: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/orders.json?auth_token=12345&status=new', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             console.log(json)   
             console.log(json.orders)
            self.$data.orders = json.orders
            currentview('myorders');
              })
        },
          receipt: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/orders.json?auth_token=12345&status=delivering', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             console.log(json)   
             console.log(json.orders)
            self.$data.orders = json.orders
            currentview('myorders');
              })
        },
          finish: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/orders.json?auth_token=12345&status=delivered', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             console.log(json)   
             console.log(json.orders)
            self.$data.orders = json.orders
            currentview('myorders');
              })
        },
          payorder: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/orders/1.json?auth_token=12345', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
             console.log(json)   
             console.log(json.order)
            self.$data.order = json.order
            currentview('payorder');
              })
        },

          shopcart: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/users/4', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
              //console.log(json)   
             // console.log(json.user)
            self.$data.user = json.user
            currentview('shopcart');
              })
        },
         myshopcart: function(ev){
          var self = this
          fetch('http://dev.d4me.com/api/v1/users/4', {
            credentials: 'same-origin',
            })
        .then(function(response) {
              return response.json()
            }).then(function(json) {
              //console.log(json)   
              console.log(json.user)
            self.$data.user = json.user
            currentview('myshopcart');
              })
        },
          wx_pay: function(e) {
          e.preventDefault()
          e.stopPropagation()
          fetch('/api/v1/orders/wx_pay', {
              credentials: 'same-origin',
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                auth_token: app.auth_token
              })
            })
            .then(function(response) {
              return response.json()
            }).then(function(charge) {
              pingpp.createPayment(charge, function(result, error){
                  if (result == "success") {
                    console.log('success')
                      window.location = "index.html"
                      // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的 wap 支付结果都是在 extra 中对应的 URL 跳转。
                  } else if (result == "fail") {
                      // charge 不正确或者微信公众账号支付失败时会在此处返回
                      vapp.message = JSON.stringify(error)
                  } else if (result == "cancel") {
                      // 微信公众账号支付取消支付
                      vapp.message = JSON.stringify(error)
                  }
              });
            }).catch(function(ex) {
              console.log('parsing failed', ex)
            })
        },
          logout: function(ev) {
          currentview('login');
         /* e.preventDefault()
          e.stopPropagation()
          fetch('http://dev.d4me.com/api/v1/users/logout', {
              credentials: 'same-origin',
              method: 'post',
              // headers: {
              //   'Accept': 'application/json',
              //   'Content-Type': 'application/json'
              // },
              // body: JSON.stringify({})
            })
            .then(function(response) {
              return response.json()
              console.log(response.json)
              currentview('login');
            }).then(function(data) {
            }).catch(function(ex) {
              console.log('parsing failed', ex)
            })*/
        } //,
         /*  login: function(ev) {
            alert("123");
            currentview('home');
        /*   var auth_token = parseUrl(location.search).auth_token
            if (auth_token) {
              //console.log(auth_token)
              //console.log(this)
              //console.log('qq')
              cookie.set('auth_token', auth_token)
              this.auth_token = auth_token
            } else if (cookie.get('auth_token')) {
             // console.log('qqqq')
              this.auth_token = cookie.get('auth_token')
            }

            fetch('http://dev.d4me.com/api/v1/users/2', {
              credentials: 'same-origin',
              })
              .then(function(response) {
                return response.json()
              }).then(function(json) {
               console.log(json)
                if (json.user) {
                  vapp.user = json.user
                } else {
                  fetch('/api/v1/users/wx_login_url')
                    .then(function(response) {
                      return response.json()
                    }).then(function(json) {
                      vapp.wx_login_url = json.url
                      //console.log(vapp)
                      currentview('home');
                      console.log('parsed json', json)
                    })
                }
                console.log(vapp.user)
              })*/

            //}
      }
  })
 





   
