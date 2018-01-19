function calculateCurrentGrade(arrayGrades,arrayWeights){
    var grade = 0;
    var sumWeights = 0;
    for (var i=0; i<arrayWeights.length; i++) sumWeights += arrayWeights[i];
    for (var i=0; i<arrayGrades.length; i++) grade += arrayGrades[i] * (arrayWeights[i] /sumWeights);
    return grade;
}
function convertArrayStringToNumber(array){
    var string = array.toString();
    var temp = string.split(",");
    for (var i=0; i<array.length; i++) temp[i] = parseInt(temp[i]);
    return temp;
}
//ended up not needed
function averageArray(array){
    var sum = 0;
    for (var i=0; i<array.length; i++) sum += array[i];
    return sum/array.length;
}
function calculateGradeNeeded(arrayGrades,arrayWeights,finalWeight,gradeWanted){
    var gradeCurrent = calculateCurrentGrade(arrayGrades,arrayWeights);
    return 100*(gradeWanted + finalWeight - gradeCurrent)/finalWeight;
}
function current(){
    var grades = [document.getElementById("grade1").value,document.getElementById("grade2").value,document.getElementById("grade3").value,document.getElementById("grade4").value];
    var weights = [document.getElementById("weight1").value,document.getElementById("weight2").value,document.getElementById("weight3").value,document.getElementById("weight4").value];
    var intGrades = convertArrayStringToNumber(grades);
    var intWeights = convertArrayStringToNumber(weights);
    document.getElementById("gradeNoFinal").innerHTML = "Your Current Grade Is: " +  calculateCurrentGrade(intGrades,intWeights) + "%";
}
function final(){
    var grades = [document.getElementById("grade1").value,document.getElementById("grade2").value,document.getElementById("grade3").value,document.getElementById("grade4").value];
    var weights = [document.getElementById("weight1").value,document.getElementById("weight2").value,document.getElementById("weight3").value,document.getElementById("weight4").value];
    var intGrades = convertArrayStringToNumber(grades);
    var intWeights = convertArrayStringToNumber(weights);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var gradeWanted = parseInt(document.getElementById("gradeWanted").value);
    var gradeNeeded = calculateGradeNeeded(intGrades,intWeights,finalWeight,gradeWanted);
    document.getElementById("gradeNeeded").innerHTML = "Grade Needed to Achieve Desired Grade: " + gradeNeeded + "%";
}