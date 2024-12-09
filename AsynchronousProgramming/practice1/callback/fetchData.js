function fetchData(callback){
    //simulate an async operation
    setTimeout(()=> {
        let data = "Fetched Data";
        if (!data){
            callback(new Error("Error fetching data"), null)
        } else {
            callback(null, data); //calling callback with data on success
        }
    }, 1000);
}


fetchData((error, data) => {
if (error){
    console.error("Error fetching data:", error.message);
} else {
    console.log(data);
}
});