namespace Sort_Numbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] num=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            int temp = 0;
            for (int i = 0; i <num.Length-1; i++)
            {
                int currentNumber = num[i];
                temp = currentNumber;
                if (currentNumber < num[i+1])
                {
                    num[i] = num[i+1];
                    num[i+1] = currentNumber;
                } 
            }
            Console.WriteLine(string.Join(" ", num));
        }
    }
}