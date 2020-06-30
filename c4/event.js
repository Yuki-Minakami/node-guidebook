function Event(){
    this.eventList = [];
    this.emit = (channel,...args)=>{
        for(var item of this.eventList){
            if(item.channel == channel){
                item.callback(...args);
            }
        }
    }

    this.on = (channel,callback)=>{
        var obj = {'channel':channel,'callback':callback}
        this.eventList.push(obj);
    }
}

var event = new Event();

event.on('login',(data)=>{
    console.log(data);
});

event.emit('login','Lear');
