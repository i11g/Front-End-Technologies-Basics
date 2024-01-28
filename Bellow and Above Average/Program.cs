namespace Bellow_and_Above_Average
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            double average = 0;
            double sum = 0;
            int aboveaverage = 0;
            int bellowaverage = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i] * 1.00;
                average = sum / numbers.Length * 1.00;
            }
            for (int i = 0; i < numbers.Length; i++) 
            { 
                if (numbers[i] > average)
                {
                    aboveaverage++;
                }
                else if (numbers[i] < average)
                {
                    bellowaverage++;
                }
            }
            string[] bellowaverageString = new string[bellowaverage];
            string[] aboveaverageString = new string[aboveaverage];
            int index = 0;
            int index2 = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > average)
                {
                    aboveaverageString[index] = numbers[i].ToString();
                    index++;
                }
                else if (numbers[i] < average)
                {
                    bellowaverageString[index2] = numbers[i].ToString();
                    index2++;
                }
            }
            Console.WriteLine($"avg:{average:F2}");
            Console.Write($"bellow:");
            Console.WriteLine(string.Join(',',bellowaverageString));
            Console.WriteLine($"above:{string.Join(',',aboveaverageString)}");

        }
    }
}