using System.Globalization;

namespace Rotate_Lists
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] num=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            int number=int.Parse(Console.ReadLine());
            int count = 0;

            while (number > count)
            {
                int temp = 0;
                for (int i = 0; i < num.Length-1; i++)
                {
                    temp = num[i];
                    num[i] = num[i+1];
                    num[i+1] = temp;
                }
                count++;
            }
            Console.WriteLine(string.Join(",", num));
        }
    }
}