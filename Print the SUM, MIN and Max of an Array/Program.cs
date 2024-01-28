namespace Print_the_SUM__MIN_and_Max_of_an_Array
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int length=int.Parse(Console.ReadLine());

            int[] numbers=new int[length];

            for (int i = 0; i<numbers.Length; i++)
            {
                numbers[i]=int.Parse(Console.ReadLine()) ;
                
            }
            Console.WriteLine(numbers.Min());
            Console.WriteLine(numbers.Max());
            Console.WriteLine(numbers.Sum());
            Console.WriteLine(numbers.First());
            Console.WriteLine(numbers.Last());
            Console.WriteLine($"{numbers.Average():f2}");
        }
    }
}