using System.Runtime.InteropServices;

namespace Sieve_Of_Eratostehgn
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num=int.Parse(Console.ReadLine()); 

            bool [] primes= new bool[num+1];

            for (int i = 2; i <=num; i++)
            {
                primes[i] = true;
            }
            
        }
    }
}