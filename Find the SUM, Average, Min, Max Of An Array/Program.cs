namespace Find_the_SUM__Average__Min__Max_Of_An_Array
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num=int.Parse(Console.ReadLine());

            int[] numbers=new int[num];

            int sum = 0;
            int max=int.MinValue; int min=int.MaxValue;
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = int.Parse(Console.ReadLine());
                sum += numbers[i];
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
                if (numbers[i] < min)
                {
                    min = numbers[i];
                }
            }
            Console.WriteLine(sum);
            Console.WriteLine(max);
                Console.WriteLine(min);
            Console.WriteLine($"{sum/num:f2}");
            Console.WriteLine(numbers[0]);
            Console.WriteLine(numbers[numbers.Length-1]);
        }
    }
}