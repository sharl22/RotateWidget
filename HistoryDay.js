// ************************************************************************************
// ** This file has been created with the Rotating Content Tool by Amesbury Web.     **
// ** For more information, visit us on the web:                                     **
// **                                                                                **
// **     Rotating Content Tool   -- http://rotatecontent.com/                       **
// **     Company: Amesbury Web   -- http://amesburyweb.com/                         **
// **     Author:  Randy Hoyt     -- http://randyhoyt.com/                           **
// **                                                                                **
// ************************************************************************************

today = new Date()
month = today.getMonth() + 1
year = today.getFullYear()

selectedDate = new Date("01/01/1900")
selectedContent = ""

varLength = 31
var entryDate = new Array(varLength)
var entryContent = new Array(varLength)

entryDate[0] = month + "/01/" + year
entryContent[0] = ""

entryDate[1] = "  </table>  <a href="http://www.history.com/this-day-in-history">On this day in history</a>" + month + "/02/" + year
entryContent[1] = ""

entryDate[2] = "   " + month + "/03/" + year
entryContent[2] = ""

entryDate[3] = "   " + month + "/04/" + year
entryContent[3] = ""

entryDate[4] = "   " + month + "/05/" + year
entryContent[4] = ""

entryDate[5] = "   " + month + "/06/" + year
entryContent[5] = ""

entryDate[6] = "   " + month + "/07/" + year
entryContent[6] = ""

entryDate[7] = "   " + month + "/08/" + year
entryContent[7] = ""

entryDate[8] = "   " + month + "/09/" + year
entryContent[8] = ""

entryDate[9] = "   " + month + "/10/" + year
entryContent[9] = ""

entryDate[10] = "   " + month + "/11/" + year
entryContent[10] = ""

entryDate[11] = "   " + month + "/12/" + year
entryContent[11] = ""

entryDate[12] = "   " + month + "/13/" + year
entryContent[12] = ""

entryDate[13] = "   " + month + "/14/" + year
entryContent[13] = ""

entryDate[14] = "   " + month + "/15/" + year
entryContent[14] = ""

entryDate[15] = "   " + month + "/16/" + year
entryContent[15] = ""

entryDate[16] = "   " + month + "/17/" + year
entryContent[16] = ""

entryDate[17] = "   " + month + "/18/" + year
entryContent[17] = ""

entryDate[18] = "   " + month + "/19/" + year
entryContent[18] = ""

entryDate[19] = "   " + month + "/20/" + year
entryContent[19] = ""

entryDate[20] = "   " + month + "/21/" + year
entryContent[20] = ""

entryDate[21] = "   " + month + "/22/" + year
entryContent[21] = ""

entryDate[22] = "   " + month + "/23/" + year
entryContent[22] = ""

entryDate[23] = "   " + month + "/24/" + year
entryContent[23] = ""

entryDate[24] = "   " + month + "/25/" + year
entryContent[24] = ""

entryDate[25] = "   " + month + "/26/" + year
entryContent[25] = ""

entryDate[26] = "   " + month + "/27/" + year
entryContent[26] = ""

entryDate[27] = "   " + month + "/28/" + year
entryContent[27] = ""

entryDate[28] = "   " + month + "/29/" + year
entryContent[28] = ""

entryDate[29] = "   " + month + "/30/" + year
entryContent[29] = ""

entryDate[30] = "   " + month + "/31/" + year
entryContent[30] = ""

if (typeof display == "undefined") { var display = "date" }

if (display == "random")
{
  var randomNumber = Math.random()
  randomNumber *= varLength
  randomNumber = parseInt(randomNumber)
  if(isNaN(randomNumber)) randomNumber = 0
  else randomNumber %= varLength
  selectedContent = entryContent[randomNumber]
}
else
{
  for (x=0; x<(entryContent.length); x++)
  {
    tempDate = new Date(entryDate[x])
    tempContent = entryContent[x]
    if ((tempDate <= today) && (tempDate > selectedDate))
    {
      selectedContent = tempContent
      selectDate = tempDate
    }
  }
}

document.write (selectedContent)