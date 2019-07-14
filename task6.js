var array= [
    [
        ["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]
    ], 
    [
        ["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]
    ]
];
function transformEmployeeData(arr) {
   var transformEmployeeList=[];
 
 for(i=0;i<arr.length;i++)
 {
    var temp=arr[i];
    var obj ={}
 for(j=0;j<temp.length;j++)
 {
    
    var func = temp[j];
    obj[func[0]]=func[1];
 } 
 transformEmployeeList[i]=obj;
}
return transformEmployeeList;
}
console.log(transformEmployeeData(array));
