var exercise2 = new Vue ({
    el: "#e2",
    data: {
        tasks: [
            {
                order: "Clean the dishes",
                priority: Math.floor(Math.random() * (4 - 1)) + 1,
                date: new Date().toLocaleString(),
                status: false
            },
            {
                order: "Take the dog out",
                priority: Math.floor(Math.random() * (4 - 1)) + 1,
                date: new Date().toLocaleString(),
                status: true
            }
        ],
        textNewTask: "",
        countTasks: ""
    },
    methods: {
        newTask: function(event){
            var order = this.textNewTask;
            var date = new Date().toLocaleString();
            var priority = Math.floor(Math.random() * (4 - 1)) + 1;
            var status = false;
            this.tasks.push({order, date, priority, status});
        },
        function(){
            var count;
            for(let i=0; i<=this.tasks.length; i++){
                if(this.tasks.status == true){
                    count++;
                }
            }
            this.countTasks = count;
            return countTasks;
        }
    }
});