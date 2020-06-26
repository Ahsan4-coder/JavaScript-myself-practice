var check = prompt ("check");
var student = ["wm101","wm102","wm103","wm104","wm105","wm106","wm107","wm108","wm109","wm110"];
 for (var i = 0 ; i < student.length ; i++ ){
  if (check === student[i] ){
    break
  }
  // else {
  //   continue;
  // }
}

if (check === student[i]) {
  console.log(check +  " here")
}
else {
  console.log(check +  " is in another class")
}
