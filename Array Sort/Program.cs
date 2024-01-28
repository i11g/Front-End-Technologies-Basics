namespace Array_Sort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] num=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            int index = 0;
            for (int i = 0; i <num.Length-index; i++)
            {
                int temp = 0;
                
                if (num[i] == 0)
                {
                    temp = num[(num.Length - 1)-index];
                    num[(num.Length - 1)-index] = num[i];
                    num[i]=temp;
                    index++;
                }
                
            }
            Console.WriteLine(string.Join(',', num));
        }
    }
}