 //Write a java program which take a decimal number from user at runtime and then prints it's binary equivalent.
class Binary{
	public static void main(String[] args) {
		int num=Integer.parseInt(args[0]);
		int dec=num;
		String flag="";
	
	while(dec>0){
		int a=dec%2;
		flag=a+flag;
		dec=dec/2;
}
System.out.println(flag);
}
}