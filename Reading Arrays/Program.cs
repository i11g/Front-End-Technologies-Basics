namespace Reading_Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] days =
            {
                "Monday",
                "Tuesday",
                "Wendesday"

            };
            Console.WriteLine(days[0]);
            days[days.Length-1] = "tuk";

            for (int i = 0; i <days.Length; i++)
            {
                Console.WriteLine(days[i]);
            }
        }
    }
}