//鼠标点击则切换图片
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mother_happy.jpg') {
      myImage.setAttribute('src', 'images/love_mother.jpg');
    }
    else{
      myImage.setAttribute('src', 'images/mother_happy.jpg');
    }
}

/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//let DeleteButton = document.querySelector('button');
//函数设置名字
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName){
    setUserName();
  }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = '广州欢迎你，' + myName;
  }
}
function resetName() {
  let myName = null; 
  localStorage.setItem('name', myName);
  myHeading.textContent = '广州欢迎你再来！';
}
//判断 系统是否有存储用户名字
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '广州欢迎你，' + storedName;
}
//为按钮设置 onclick 事件处理器
myButton.onclick = function() {
  setUserName();
}

DeleteButton.onclick = function() {
  resetName();
}*/