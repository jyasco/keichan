const quiz =[
  {
    question:`けいちゃんが好きな牛の部位は？`,
    answers:[
      "ミスジ",
      "トモサンカク",
      "ハラミ",
      "イチボ"],
    correct:"ミスジ"
  },
  {
    question:`けいちゃんが好きな女体の部位は？`,
    answers:[
      "胸",
      "尻",
      "脚",
      "脇"],
    correct:"尻"
  },
  {
    question:`けいちゃんがよくする行動は？`,
    answers:[
      "おならを嗅がせてくる",
      "よだれを垂らす",
      "ハグするときと思いきや尻触る",
      "全部"],
    correct:"全部"
  },
  {
    question:`お気に入りのキャンプ場は？`,
    answers:[
      "ふとももっぱらキャンプ場",
      "ふとっぱらキャンプ場",
      "ふもとっぱらキャンプ場",
      "おしりっぷりキャンプ場"],
    correct:"ふもとっぱらキャンプ場"
  },
  {
    question:`わたしが欲しい車は？`,
    answers:[
      "GLA",
      "ビートルカブリオレ",
      "カイエン",
      "カリナン"],
    correct:"ビートルカブリオレ"
  }
];

const quizLength=quiz.length;
let quizIndex=0;
let score = 0;

const $button=document.getElementsByTagName("button")
const buttonLength=$button.length;


//クイズの問題文、選択肢を定義
const setupQuiz=()=>{
  document.getElementById("js-question").textContent=quiz[quizIndex].question;
  let buttonIndex=0;
  while(buttonIndex<buttonLength){
    $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler=(e)=>{
  if(quiz[quizIndex].correct===e.target.textContent){
    window.alert("正解！");
    score=score+20;
    }else{
    window.alert("不正解！");
    }
  
  quizIndex++;

  if(quizIndex<quizLength){
    setupQuiz();
  }else{
    window.alert("おわりー！"+score+"点！！");
  }
};

let handleIndex=0
while(handleIndex<buttonLength){
  $button[handleIndex].addEventListener("click",(e)=>{
    clickHandler(e);
    });
  handleIndex++;
};


