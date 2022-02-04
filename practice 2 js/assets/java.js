//Exercise 1
window.onload = function() {
  check = (word) => {
    if (word.length > 7) {
      word = '<span style="background:yellow;">' + word + '</span>';
    } else {
      word;
    }
    return word;
  }

  var str = document.querySelector("#Second").innerText;
  var newt = str.trim().split(' ').map(check).join(' ');
  document.querySelector("#Second").innerHTML = newt;

}
//Exercise 2
const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Link';
document.body.appendChild(link);

//Exercise 3
//paragraph.innerHTML = paragraph.innerHTML
// .split(/\.[^\.|<]/)
 //.join('.</p><p>') + '</p>';

//Exercise 4
function countWords(){
    var paragraphs = document.getElementsByTagName("p");
    var count = 0;

    for(var i = 0; i < paragraphs.length; i++)
    {
        count += paragraphs[i].innerHTML.split(' ').length;
    }
    document.write("Number of words: "+count);
}

countWords();
//Exercise 5
Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
  .replace(/\!/g, '😮')
  .replace(/\?/g, '🤔')
})
