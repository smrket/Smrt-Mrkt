
let text = "السوق الذكية تطبيق مفتوح المصدر، يسمح لأي شخص بتعديل التقنية ومشاركتها لأن تصميمها متاح للجميع.";
let i = 0;

function writeText() {
  if (i < text.length) {
   document.getElementById("chatgpt-text").innerHTML += text.charAt(i);
   i++;
   setTimeout(writeText, 100);
  }
}

writeText();

