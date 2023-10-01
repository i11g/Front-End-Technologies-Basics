namespace Reverse_Numbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] num1 = Console.ReadLine().Split(',').Select(int.Parse).ToArray();
            int[] num2 = Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            int[] combine = new int[num1.Length + num2.Length];
            int i; int j; int k;

            for (i = 0, j = 0, k = 0;k <combine.Length; k++)
            {
                if(i<num1.Length)
                {
                    combine[k] = num1[i];
                    i++;
                }
                else if (j<num2.Length) 
                { 
                    combine[k] = num2[j];
                    j++;
                }
            }
            Console.WriteLine(string.Join(",",combine));
        }
    }
}