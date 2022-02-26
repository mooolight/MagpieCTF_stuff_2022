function f(){
	//->
	function _0x47e16f(_0xff1935){
		//What is this variable for?
		//-> this is for the state of which button has been pressed down.
		var _0x2b1aa4=_0xff1935['target']['innerText'];

		if(_0x2b1aa4==='X'){
			document['querySelector']('#pass-val')['value']='';
			return;
		}

		if(_0x2b1aa4==='<'){
			document['querySelector']('#pass-val')['value']=document['querySelector']('#pass-val')['value']['slice'](0x0,-0x1);
			return;
		}
		
		document['querySelector']('#pass-val')['value']+=_0x2b1aa4;
	}
	
	//What does this function do?
	//-> This function checks whether the code is correct!
	async function _0x47e5a0(){
		var _0x3498be = document['querySelector']('#pass-val')['value'];

		//1. _0x3498be is a variable
		//2. _0x92f237 is a function but defined on the fly.
		//This variable stores the Json format of the data from _0x3498be.
		var _0x5ec011=await fetch(window['location']['origin']+'/22709856e6053bd4949c64c956bf1ba1',{'method':'POST','body':_0x3498be})['then'](_0x92f237=>{return _0x92f237['json']();});

		if(_0x5ec011['res']){
			await _0x2b86cd(); //basically, if the request above receives a response from the server, it will invoke the OpenSafe() function.
			return;	//goes here if the passcode entered is correct then it opens the safe.
		}

		document['querySelector']('#pass-val')['value']='no';

		//Im not sure whether 0x258825 is a variable or a function. Double check!
		await new Promise(_0x258825=>setTimeout(_0x258825,0x5dc)); //waits for 1500ms(1.5s) to state that the passcode entered is NOT correct.

		document['querySelector']('#pass-val')['value']='';
	}

	//What does this function do?
	//-> given a string input, it will produced another string input that takes every odd-indexed character on the string?
	function _0x1ae768(_0x1cc1a3){	//parameter _0x1cc1a3 is a string!
		//removes the space from the input _0x1cc1a3
		_0x1cc1a3=_0x1cc1a3['split']('\x20')['join']('');

		//a variable most likely only used in this function.
		let _0x5d9c20=''; //note that this is a string which starts empty.

		//0xfe9cb9 is basically like 'i' in for loops.
		//this iterator is incremented by 2 for each loop.
		for(var _0xfe9cb9=0x0; _0xfe9cb9 < _0x1cc1a3['length']; _0xfe9cb9+=0x2){
			
			// for every 2nd letter from the input, it gets concatenated to _0x5d9c20.
			// Converts Unicode values to characters.
			_0x5d9c20 += String['fromCharCode'](parseInt(_0x1cc1a3['substr'](_0xfe9cb9,0x2),0x10));
		}
		return _0x5d9c20;
	}

	//What does this function do?
	//-> extracts 16 characters from the resulting output of 'MAX_SAFE_INTEGER-_0x423ac1'?
	function _0x19f73a(_0x423ac1){
		//MAX_SAFE_INTEGER == 2^53 - 1
		//Takes the resulting integer and extracts the string AFTER the 16th character?
		//Extracts the last character because of the '-' symbol before _0x423ac1? Or just the last 16 characters?
		
		return(Number['MAX_SAFE_INTEGER']-_0x423ac1)['toString'](0x10)['slice'](-_0x423ac1['toString'](0x10)['length']);
		//Note that the output for this function is a string
	}
	
	//What does this function do?
	//-> Opens the safe
	async function _0x2b86cd(){
		var _0x2f90b9=await fetch(window['location']['origin']+'/8d724b91d276b37b5e11080821a29624',{'method':'POST'})['then'](_0x278103=>{return _0x278103['json']();});

		var _0x49a3cb='';

		_0x2f90b9['base']['forEach'](_0x1e1bbc=>{_0x49a3cb += _0x19f73a(_0x1e1bbc);});

		var _0x5d88c8=_0x1ae768(_0x49a3cb);

		document['querySelector']('#safe-door')['classList']['add']('open');

		document['querySelector']('#safe-inner')['innerText']=_0x5d88c8;
	}

	window['openSafe']=_0x2b86cd;

	window['typeNumKey']=_0x47e16f;

	window['checkCode']=_0x47e5a0;

	window['console.log']=console['log'];
}

window['addEventListener']('load',()=>{
	f();
	var _0x1dece9=['1','2','3','4','5','6','7','8','9','X','0','<'];

	for(var _0x23fb98 of _0x1dece9){
		let _0x19b250=document['createElement']('button');
		
		_0x19b250['classList']['add']('numkey');

		_0x19b250['innerText']=_0x23fb98;
		
		_0x19b250['addEventListener']('click',_0x29d8bb=>{typeNumKey(_0x29d8bb);});

		document['querySelector']('.numpad')['appendChild'](_0x19b250);

	}
	document['querySelector']('#pass-submit')['addEventListener']('click',_0x47aba3=>{_0x47aba3['preventDefault']();checkCode();});
});
