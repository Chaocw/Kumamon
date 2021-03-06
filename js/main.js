!function(){
	function slideCode(code) {
		let container = document.querySelector('#code')
		let style = document.querySelector('#styleTag')
		let n = 0
		setTimeout(function run() {
			n++
            container.innerHTML = code.substring(0, n)
			
			style.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
			if(n <= code.length) {
				setTimeout(run,10)
			}
		},10)
	}
    let code = `/*
*来看看笨熊是怎么画的
*/
.head {
  width: 160px;
  height: 160px;
  background: #000;
  border-radius: 50%;
}
/*
 * 笨熊的耳朵
 */
.ear {
  width: 29px;
  height: 29px;
  border-radius: 50%;
  border: 5px solid;
  position: absolute;
  top: 8px;
  left: 0px;
}
.ear.right {
  width: 29px;
  height: 29px;
  border-radius: 50%;
  border: 5px solid;
  position: absolute;
  top: 10px;
  left: 132px;
}
/*
 * 笨熊的眼睛
 */
.eye {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 45px;
}
.eye.left {
  left: 35px;
}
.eye.left::before {
  content: '';
  width: 15px;
  height: 15px;
  position: absolute;
  top: -20px;
  border-top: 3px solid white;
  border-radius: 40px 40px 0 0 ;
  left: 6px;
}
.eye.right::before {
  content: '';
  width: 15px;
  height: 15px;
  position: absolute;
  top: -20px;
  border-top: 3px solid white;
  border-radius: 40px 40px 0 0 ;
  left: 6px;
}
.eye.right {
  right: 19px;
}
.eyeball-left {
  border: 3px solid;
  border-right: none;
  border-bottom: none;
  width: 12px;
  position: absolute;
  top: 60px;
  left: 42px;
}
.eyeball-left::after {
  content: '';
  display: block;
  border: 3px solid;
  width: 13px;
  height: 13px;
  border-top-right-radius: 11px;
  position: absolute;
  border-left: none;
  border-bottom: none;
  top: -9px;
  left: -1px
}
.eyeball-right {
  border: 2px solid ;
  position: absolute;
  height: 8px;
  border-radius: 4px;
  top: 48px;
  right: 30px;
}
/*
 * 笨熊的脸
 */
.mouth {
  position: absolute;
  top: 75px;
  left: 59px;
  width: 75px;
  height: 55px;
  background: white;
  border-radius: 50%; 
  transform: rotate(3deg)
}
.mouth .nose {
  width: 18px;
  height: 18px;
  background: #000;
  position: relative;
  top: 7px;
  left: 38px;
  border-radius: 40% 100% 40% 70%;
  transform: rotate(-45deg);
}
.mouth .lip {
  width: 55px;
  height: 20px;
  border: 3px solid ;
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 50px 20px;
  transform: rotate(-3deg);
  position: relative;
  top: 5px;
  left: 5px;
}
.mouth .tongue {
  width: 18px;
  height: 19px;
  border: 3px solid;
  border-top: none;
  background: #C34F3F;
  border-radius: 8px;
  transform: rotate(40deg);
  position: relative;
  top: -8px;
  left: -5px;
}
.mouth .tongue::after {
  content: '';
  display: block;
  width: 12px;
  height: 5px;
  border-top: 3px solid;
  border-radius: 50%;
  position: relative;
  top: 2px;
  transform: rotate(90deg)
}
.head .face-left {
  width: 35px;
  height: 35px;
  background: #D44327;
  position: relative;
  top: 73px;
  left: 14px;
  border-radius: 50%;
}
.head .face-right {
  width: 28px;
  height: 33px;
  border-radius: 50%;
  background: #D44327;
  position: relative;
  left: 140px;
  top: 40px;
  transform: rotate(-18deg);
}
.head::after {
  content: '';
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  background: #000;
  left: 63px;
  top: 52px;
  z-index: -1;
}
.wrapper .down {
  position: relative;
}
/*
 * 笨熊的身体
 */
.body {
  width: 160px;
  height: 200px;
  background: #000;
  position: relative;
  transform: rotate(18deg);
  top: -35px;
  right: 40px;
  border-top-right-radius: 20px;
  z-index: -2;
}
.body .right-arg {
  width: 20px;
  height: 200px;
  background: #000;
  position: relative;
  left: 160px;
  transform: rotate(-18deg);
  top: -20px;
}
.body .left-arg {
  width: 55px;
  height: 170px;
  background: #000;
  position: absolute;
  border-right: 2px solid #fff;
  border-top: 2px solid #fff;
  border-top-left-radius: 40px 70px;
  border-top-right-radius: 17px 20px;
  border-bottom-left-radius: 30px 60px;
  top: -85px;
  right: 138px;
  transform: rotate(-18deg)
}
.body .left-arg::after {
  content: '';
  width: 80px;
  height: 80px;
  background: #000;
  position: absolute;
  top: 100px;
  left: 10px;
}
/*
 * 好了，这只笨熊送给你
 */`
	slideCode(code)
}.call()
