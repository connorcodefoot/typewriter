const sentence = "hello there from lighthouse labs";

let timer;
let i = 0;

function type() {

  process.stdout.write(sentence[i]);
  i++;
  
  if(i >= sentence.length) {
    clearInterval(timer);
    console.log('')
  }
}

timer = setInterval(type, 10);
