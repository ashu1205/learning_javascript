import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

class combStr{
    static int c=0;
    private static void swap(int i , int j , char [] arr){
        char temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    private static void permut(int [] arr, int ind ,ArrayList<Integer> ds){
        if(ind==arr.length){
            // c++;
            // String ans=new String(arr);
            System.out.println(ds);
        }

        for (int i = ind; i < arr.length; i++) {
            // System.out.println(i+" i");
            // if(i>ind && arr[i]==arr[i-1]) continue;
            // swap(i,ind,arr);
            ds.add(arr[i]);
            permut(arr,i+1,ds);
            // swap(i,ind,arr);
            ds.remove(ds.size()-1);
            // permut(arr,i+1,ds);
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        // String in=sc.next();
        // char [] ip=in.toCharArray();
        // Arrays.sort(ip);
        // in=new String(ip);

        int [] arr= {1,3,2};
        permut(arr,0,new ArrayList<>());



    }
}