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
        document.getElementById('home').style.display = "";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
        return false;
	    }
	    case 'topic':{
  	    document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
	    }
       case 'topicinfo':{
        document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
	    case 'myprofile':{
	      document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
	    }
      case 'shopcart':{
        document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
       case 'myorders':{
        document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
        case 'myshopcart':{
        document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "";
         return false;
      }
       case 'myfavor':{
        document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
      case 'sidemenu':{
        document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "";
        document.getElementById('profileinfo').style.display = "none";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
        document.getElementById('myshopcart').style.display = "none";
         return false;
      }
       case 'profileinfo':{
        document.getElementById('home').style.display = "none";
        document.getElementById('productinfo').style.display = "none";
        document.getElementById('topic').style.display = "none";
        document.getElementById('topicinfo').style.display = "none";
        document.getElementById('myprofile').style.display = "none";
        document.getElementById('shopcart').style.display = "none";
        document.getElementById('sidemenu').style.display = "none";
        document.getElementById('profileinfo').style.display = "";
        document.getElementById('myfavor').style.display = "none";
        document.getElementById('myorders').style.display = "none";
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
            products: [] ,product: {},articles: [] ,user: {}, orders: [] 
          },
    created: function()
     {
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
        }
      }
  })
 


    var vapp = new Vue({
    el: '#user',
    data: {
        message: 'Hello Vue.js!',
        price: '123!',
        wx_login_url: null,
        auth_token: null,
        user: {}
      },
      created: function (argument) {

        var auth_token = parseUrl(location.search).auth_token
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
           // console.log(json)
            if (json.user) {
              vapp.user = json.user
            } else {
              fetch('/api/v1/users/wx_login_url')
                .then(function(response) {
                  return response.json()
                }).then(function(json) {
                  vapp.wx_login_url = json.url
                  //console.log(vapp)
                  //console.log('parsed json', json)
                })
            }
            //console.log(vapp.user)
          })

      },
      methods: {
        onClick: function(ev){
          console.log('clicked')
          console.log($.router)

        },
        logout: function(e) {
          e.preventDefault()
          e.stopPropagation()
          fetch('/api/v1/users/logout', {
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
            }).then(function(data) {
            }).catch(function(ex) {
              //console.log('parsing failed', ex)
            })
        }
      }

    })



   
