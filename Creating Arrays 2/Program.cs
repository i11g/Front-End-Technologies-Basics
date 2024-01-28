namespace Creating_Arrays_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] array = new string[5];
            array[0] = "Monday";
             
            array[2] = "Wednesday";
            array[3] = "Thursday";
            array[4] = "Friday";

            array[array.Length - 1] = "posleden";

            for (int i = 0; i < array.Length; i++)
            {
                Console.WriteLine(array[i]);
            }
        }
    }
}