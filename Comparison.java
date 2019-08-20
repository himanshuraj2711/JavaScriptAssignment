// // Write a java program which takes 3 numbers from user at runtime,
//  adds them. The program should print PASSING only once if the numbers
//  are individually greater than or equal to 40 and their sum is greater than or 
//  equal to 125. Otherwise the output should be FAILING.
// // You don't have to use nested if's or logical operators in this program,
//  not if else. You can use multiple ifs

class Comparison{
	public static void main(String[] args) {
			
		int a = Integer.parseInt(args[0]);
		int b = Integer.parseInt(args[1]);
		int c = Integer.parseInt(args[2]);
		int flag=0;
		int sum=a+b+c;
		
		
		if(a>=40){
			flag+=1;
		}
		if(b>=40){
			flag+=1;
		}
		if(c>=40){
			flag+=1;
		}
		if(sum>=125){
			flag+=1;
		}
		switch(flag){
			case 4: {System.out.println("PASSING");
			break;}
			default : {System.out.println("FAILING");
			break;}


		}

		
		

	
}
}