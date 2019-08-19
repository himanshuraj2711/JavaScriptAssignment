//to merge two arrays and removes all duplicates elements.

function mergeArray(arr1,arr2)
{

	var arr3= arr1.concat(arr2);
	
	var arr4=new Set(arr3);
	 
// 	for(var i=0;i<arr3.length;i++){
// 		for(var j = 1; j<arr3.length;j++)
// 		{
// 			if(arr3[i]==arr3[j])
// 			{
// 				arr3.splice(j,1)
// 			}
// 		}
// 	}
	console.log(arr4);

}
Arr1=[1,2,3,4]
Arr2=[3,4,5,6,7]
mergeArray(Arr1,Arr2)