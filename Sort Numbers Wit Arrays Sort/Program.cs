namespace Sort_Numbers_Wit_Arrays_Sort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] num=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            Array.Sort(num);
            int[] num1=new int[num.Length];

            for (int i = 0; i <num.Length; i++)
            {
                num1[i] = num[num.Length-1-i];
            }
            Console.WriteLine(string.Join(",",num1));
        }
    }
}