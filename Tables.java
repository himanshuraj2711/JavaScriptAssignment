// Write a java program which prints the table of a number upto it's limit. 
//The numbers should be taken from runtime. Output in format:
//4 * 1 = 4

class Tables{
	public static void main(String[] args) {
		int a = Integer.parseInt(args[0]);
		int b = Integer.parseInt(args[1]);
		int result=1;

		for(int i=1;i<=b;i++){
			result=a*i;
			System.out.println(a+ "*" + i + "=" + result);

		}
	}
}