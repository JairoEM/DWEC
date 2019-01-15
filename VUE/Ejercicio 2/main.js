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
        textNewTask: ""
    },
    methods: {
        newTask: function(event){
            var order = this.textNewTask;
            var date = new Date().toLocaleString();
            var priority = Math.floor(Math.random() * (4 - 1)) + 1;
            var status = false;
            this.tasks.push({order, date, priority, status});
        },
        taskToDo: function(tasks){
            var count = 0;
            for(let i=0; i<this.tasks.length; i++){
                if(this.tasks[i].status == false){
                    
                    count++;
                }
            }
            return count;
        }
    }
});