//whether a string starts with a specified string

function startsWith(input, string) {
  if(input.indexOf(string) === 0)
  	return true;
  else
  	return false
}
console.log(startsWith('Himanshu', 'hi'));