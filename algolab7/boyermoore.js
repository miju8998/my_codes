   let NO_OF_CHARS = 256;

   // Hoyr toonii hamgiin ih utga avah function
   function max(a, b) {
	   return (a > b) ? a : b;
   }
   
   // Boyer Moore algorithm-n muu temdegtiin euristic
   // uridchilan bolovsruulaltiin function
   function badCharHeuristic(str, size, badchar) {
	   // buh tohioldliig -1 gej tohiruulna
	   for (let i = 0; i < NO_OF_CHARS; i++)
		   badchar[i] = -1;
   
	   // Temdegtuudiin hamgiin suulchiin bairlaliig tohioldliin
	   // index bolgon husnegted nemne (husnegtiin index ni ASCII code, utga ni bairlaliin index)
	   for (i = 0; i < size; i++)
		   badchar[str[i].charCodeAt(0)] = i;
   }
   
//Boyer Moore algorithmiin muu temdegtiin euristic ashiglan
// (pattern) jhaih function
   function search(txt, pat) {
	   let m = pat.length; // pattern-ii urt 
	   let n = txt.length; // textiin urt
   
	   let badchar = new Array(NO_OF_CHARS);
   
//badCharHeuristic() function duudaj, ugugdsun pattern-d
//zoriulan muu temdegtiin husnegtiig buglunu 
	   badCharHeuristic(pat, m, badchar);
   
	   let s = 0; // s ni texttei haritsuulahad pattern shiljuulelt
	   // n-m+1 bolomjit tohirgoo baigaa
	   while (s <= (n - m)) {
		   let j = m - 1;
   
//patternii indexiig buuruulsaar baih ba
// temdegtuud tohirj baigaa bol urgeljluulne
		   while (j >= 0 && pat[j] == txt[s + j])
			   j--;
   
//Herev pattern odoogiin shiljuulelt deer baigaa bol
//index j ni deerh davtaltaas hoish -1 bolno
		   if (j < 0) {
			   console.log("Patterns occur at shift = " + s); // UUrchlult oruulsan heseg
   
//Pattern shiljuulj, text dahi daraagiin
//temdegt ni hev mayg dotorh suulchiin tohioldoltoi
//niitseh baidlaar taaruulna.
//s+m < n nuhtsul ni textiin tugsguld pattern baigaa
//tohioldold shaardlagatai
			   s += (s + m < n) ? m - badchar[txt[s + m].charCodeAt(0)] : 1;
   
		   } else
//Text dahi muu temdegt ni pattern dotorh
//suulchiin tohioldoltoi taarhaar patterniig
//shiljuulne. max function ni eyreg shiljuuleltiig
//batalgaajuulna. herev muu temdegtiin suulchiin
//tohioldol patternii baruun tald baival
//surug shiljuulelt garch bolzoshgui
			   s += max(1, j - badchar[txt[s + j].charCodeAt(0)]);
	   }
   }
   
   let txt = "ABAAABCD".split(""); // Haih text
   let pat = "ABC".split("");      // pattern
   search(txt, pat);
   