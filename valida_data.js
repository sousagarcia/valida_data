function validaData (strDate) {
  arrayData = strDate.split ("/");
  arrayData[0] = parseInt (arrayData[0]);
  arrayData[1] = parseInt (arrayData[1]) -1;
  arrayData[2] = parseInt (arrayData[2]);
  objData = new Date (arrayData[0], arrayData[1], arrayData[2]);
  return arrayData[0] == objData.getDate () && arrayData[1] == objData.getMonth () && arrayData[2] == objData.getFullYear ();
}