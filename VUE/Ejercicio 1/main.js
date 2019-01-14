Vue.component('mitag', {
    template: '<h1>This is a todo</h1>'
});


var mainApp = new Vue({
    el: "#mainApp",
    data: {
        rawHtml: "<h1>Hello</h1>",
        seeTag: false,
        enlaces: [
            {textUrl: "Click here to Google",
            url: "http://www.google.es"},
            {textUrl: "Click here to Github",
            url: "https://github.com/"}
        ],
        textUrl: "Click here",
        url: "http://www.google.es"
    }
});





// DÍA UNO

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        messageEsp: '¡Hola Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});