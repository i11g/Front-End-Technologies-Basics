namespace Replace_More_tehn_One_Intervals_or_Other_Symbols_with_Interval_In_Strings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string line=Console.ReadLine();

            string[] tokens=line.Split(new char[] { ' ', ',',';'}, StringSplitOptions.RemoveEmptyEntries); 

            foreach(string token in tokens)
            {
                Console.WriteLine(token);
            }
        }
    }
}