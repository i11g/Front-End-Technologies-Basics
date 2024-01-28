namespace Day_Of_Week
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] daysOfWeek = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

            int num = int.Parse(Console.ReadLine());

            if (num >= 1 && num <= 7)
            {
                Console.WriteLine(daysOfWeek[num - 1]);
            }
            else 
            {
                Console.WriteLine("Invalid Day!");
            }

            int[] numbers=new int[10];

            for (int i = 0; i <numbers.Length; i++)
            {
                numbers[i] = 1;
            }
                 
        }
    }
}