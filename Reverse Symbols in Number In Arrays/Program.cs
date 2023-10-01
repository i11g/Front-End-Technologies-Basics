using System.Globalization;

namespace Reverse_Symbols_in_Number_In_Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
           string line=Console.ReadLine();

            char[] items = line.ToCharArray() ;

            for (int i = items.Length-1; i >=0; i--)
            {
                Console.Write(items[i]);
            }
            Console.WriteLine();
        }
    }
}