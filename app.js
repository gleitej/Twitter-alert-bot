const fetchData = require('./fetch.js');
const schedule = require('node-schedule');
    
const amRule = new schedule.RecurrenceRule();
amRule.hour = 7;
amRule.minute = 0;


const amJ = schedule.scheduleJob(amRule, function(){
    const today = new Date();
    const day = String(today.getDate());
    const month = String(today.getMonth() + 1);
    
    fetchData(day, month, "today");
});



const pmRule = new schedule.RecurrenceRule();
pmRule.hour = 17;
pmRule.minute = 0;

const pmJ = schedule.scheduleJob(pmRule, function(){
    const today = new Date();
    const tommorrow = String(today.getDate() + 1);
    const month = String(today.getMonth() + 1);
    
    fetchData(tommorrow, month, "tomorrow");
});