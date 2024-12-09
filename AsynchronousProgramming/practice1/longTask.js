function longRunningTask(){
    let count = 0;
    for (let i = 0; i < 100; i++){
        count++
    }
    console.log("Long running task completed!")
}

function importantTask(){
    console.log("Important")
}

longRunningTask();
importantTask();