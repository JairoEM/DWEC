Vue.component("comp",{
    template: "#otro-template",
    props: ["accion"]
});

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
        checkedStatus: [],
        auxTasks: [],
        show: true
    },
    methods: {
        newTask: function(event){
            var order = this.textNewTask;
            var date = new Date().toLocaleString();
            var priority = Math.floor(Math.random() * (4 - 1)) + 1;
            var status = false;
            this.tasks.push({order, date, priority, status});
        },
        taskToDo: function(){
            var count = 0;
            for(let i=0; i<this.tasks.length; i++){
                if(this.tasks[i].status == false){  
                    count++;
                }
            }
            return count;
        }
    },
    computed: {
        checkedTask: function(){
            this.auxTasks = [];
            for(let j=0; j<this.checkedStatus.length; j++){
                if(this.checkedStatus[j] == "Completed"){
                    for(let i=0; i<this.tasks.length; i++){
                        if(this.tasks[i].status == true){
                            this.auxTasks.push(this.tasks[i]);
                        }
                    }
                }
                if(this.checkedStatus[j] == "Incompleted"){
                    for(let i=0; i<this.tasks.length; i++){
                        if(this.tasks[i].status == false){
                            this.auxTasks.push(this.tasks[i]);
                        }
                    }
                }
            }
            return this.auxTasks;
        }
    }
}); 