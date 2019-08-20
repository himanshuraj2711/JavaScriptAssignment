class Factorial{
	public static void main(String[] args) {
		int a = Integer.parseInt(args[0]);
		// int b = Integer.parseInt(args[1]);
		int result=1;

		while(a!=1)
		{
			result=result*a;
			a=a-1;

		}
		System.out.println("Factorial :" +result);
	}
	
}