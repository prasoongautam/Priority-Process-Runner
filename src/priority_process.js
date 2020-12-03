// Function: priorityProcess
// Description: priorityProcess function is used for calculation of function priority
// Parameter: Task array and Dependency array
// return: string of task on priority basis 
exports.priorityProcess = function(taskArr, depenArr) {
    var mainArr = [],
        printArr = [];
    if (depenArr.length == 0) {
        if (taskArr.length > 0) {
            for (let __t = (taskArr.length); __t > 0; __t--) {
                mainArr.push(taskArr[(__t - 1)]);
            }
        } else { return ''; } } else {
        for (var __y = 0; __y < (depenArr.length); __y++) {
            let tempVal = depenArr[__y].split("=>");
            let lastEle = (mainArr.length) - 1;
            if (mainArr.length == 0) {
                mainArr.push(tempVal[0]);
                mainArr.push(tempVal[1]);
            } else {
                let temp2 = mainArr[lastEle];
                if (tempVal[0] == temp2) { mainArr.push(tempVal[1]) } else { mainArr = tempVal.concat(mainArr); } } } }
    //check cycle dependency between tasks
    for (let __c = ((mainArr.length) - 1); __c >= 0; __c--) {
        let lastIndex = mainArr.lastIndexOf(mainArr[__c]),startIndex = mainArr.indexOf(mainArr[__c]);
        if (lastIndex === startIndex) { printArr.push(mainArr[__c]); } else { return "Error cyclic dependency found"; } }
    //printArr holds all function in their priorities   
    if (printArr.length > 0) { return printArr.join(","); } }