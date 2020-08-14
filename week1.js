//1) Reverse an Array.
function rev(arr){
	let count=0,i=0,j=0,rev_arr=[];
	while(1){
		if(arr[i]!==undefined){
			count++;
			i++;	
		} 
		else{
			count--;
			if(count===-1) break;
			rev_arr[j]=arr[count];
			j++;
		}
	}
	return rev_arr;
}

//console.log(rev([1,2,3,4,5]))

//2) Sum of all palindrome numbers present in an Array.
function rev_num(n){
	let rev=0,tmp=n;
	if(n>-10 && n<10) return n;
	else{
		while(tmp!=0){
			rev=rev*10+tmp%10;
			tmp=parseInt(tmp/10);
		}
	}
	return rev;
}

let isPal=(n)=>rev_num(n)===n && n>9;

function sum_of_pal(arr){
	let sum=0;
	for(let i=0;arr[i]!==undefined;i++){
		sum+=(isPal(arr[i]))?arr[i]:0;
	}
	return sum;
}

//console.log(sum_of_pal([121,3,323]));

//3) Largest palindromic number in an array

function largest_pal(arr){
	let max=-Infinity;
	for(let i=0;arr[i]!==undefined;i++){
		max=(isPal(arr[i]) && max<arr[i])?arr[i]:max;
	}
	return max;
}

//console.log(largest_pal([121,3,323]));

//4) Count Distinct Elements in the array.

function distinct_count(arr){

	function in_arr(arr,n){
		for(let i=0;arr[i]!==undefined;i++){
			if(arr[i]===n) return true;
		}
		return false;
	}

	function solve(arr){
		let distinct_arr=[],distinct_index=0;
		for(let i=0;arr[i]!==undefined;i++){
			if(!in_arr(distinct_arr,arr[i])){
				distinct_arr[distinct_index]=arr[i];
				distinct_index++;
			}
		}
		return distinct_index;
	}

	return solve(arr);
}

//console.log(distinct_count([1,1,2,3,4,1]))

//5) Rearrange Odd and Even values in Alternate Fashion in Ascending Order

function odd_even_sort(arr){

	let isEven=(n)=>n%2===0;

	function rearrange(arr){
		let toggle=false;
		for(let i=0;arr[i]!==undefined;i++){
			let j=i+1;
			if(toggle===false && isEven(arr[i])){
				for(;arr[j]!==undefined;j++){
					if(!isEven(arr[j])){
						arr[i]+=arr[j];
						arr[j]=arr[i]-arr[j];
						arr[i]=arr[i]-arr[j];
					}
				}
			}else if(toggle===true && !isEven(arr[i])){
				for(;arr[j]!==undefined;j++){
					if(isEven(arr[j])){
						arr[i]+=arr[j];
						arr[j]=arr[i]-arr[j];
						arr[i]=arr[i]-arr[j];
					}
				}
			}
			toggle=!toggle;
		}
		return arr;
	}

	function solve(arr){
		for(let i=0;arr[i+1]!==undefined;i++){
			for(let j=i+1;arr[j]!==undefined;j++){
				if(arr[i]>arr[j]){
					arr[i]+=arr[j];
					arr[j]=arr[i]-arr[j];
					arr[i]=arr[i]-arr[j];
				}
			}
		}
		return rearrange(arr);
	}
	return solve(arr);
}

console.log(odd_even_sort([2,4,6,1,3,5]))

//6) Write a method to replace all spaces in a string with ‘%20’.

function replace_space(str){
	let replace_srt='';
	for(let i=0;str[i]!==undefined;i++){
		replace_srt+=(str[i]===' ')?'%20':str[i]
	}
	return replace_srt;
}

//console.log(replace_space('Amruth Vamshi'));

//7) Write a method to decide if two strings are anagrams or not.

function are_anagrams(str1,str2){
	if(str1[0]===undefined || str2[0]===undefined) return false;
	let str1_len=0,str2_len=0;
	for(;str1[str1_len]!==undefined;str1_len++){
		str2_len=0;let found=false;
		for(;str2[str2_len]!==undefined;str2_len++)
			if(str1[str1_len]===str2[str2_len]) found=true;
		if(found===false) return false;
	}
	if(str1_len===str2_len) return true;
	return false;
}

//console.log(are_anagrams('listen','silent'))

//8) What is the time complexity of the below function?

//void fun(int n, int k) 
/*{ 
	for (int i=1; i<=n; i++) 
	{ 
	int p = pow(i, k); 
	for (int j=1; j<=p; j++) 
	{ 
		 Some O(1) work 
	} 
	} 
} 
ans = O(n*(n^k))
*/