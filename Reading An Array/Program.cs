namespace Reading_An_Array
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num=int.Parse(Console.ReadLine());

            int[] numbers=new int[num];

            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i]=int.Parse(Console.ReadLine());
            }

            for(int i = 0; i< numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }

            foreach (int num1 in numbers)
            {
                Console.Write(num1+ " ");
            }
            Console.WriteLine();
        }
    }
}