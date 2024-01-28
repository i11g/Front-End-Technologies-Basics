using System.Runtime.InteropServices;

namespace Array_Search
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] num=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            int[] normalArray=new int[num.Length];

            for (int i = 0; i <num.Length; i++)
            {
                normalArray[i] = 1 + i;
            }
            bool isFound = false;
            int index = 0;

            for (int i = 1; i < normalArray.Length; i++)
            {
                isFound = false;
                for (int j = 0; j < num.Length; j++)
                {
                    if (i == num[j])
                    {
                        isFound = true;
                        break;
                    }
                    
                }
                if(!isFound)
                {
                    Console.WriteLine(i);
                }
            }
                    
                
                
                
            
                      
        }
    }
}