using System.Threading.Tasks.Dataflow;

namespace Combine_Lists
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] num1=Console.ReadLine().Split(',').Select(int.Parse).ToArray();
            int[] num2=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            int[] combine=new int[num1.Length+num2.Length];

            int index = 0;
            int index1 = 0;
            for (int i = 0; i <combine.Length; i++)
            {                            
                
                    if (i % 2 == 0)
                    {
                        combine[i] = num1[index];
                    index++; 
                    }
                    else if (i %2!=0) 
                    {
                        combine[i] = num2[index1];
                    index1++;
                    }
                    
                
            }
            Console.WriteLine(string.Join(",",combine));
        }
    }
}