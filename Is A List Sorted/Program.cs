namespace Is_A_List_Sorted
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num=int.Parse(Console.ReadLine());

            for (int i = 0; i <num; i++)
            {
                bool isSorted = true; 
                int[] number = Console.ReadLine().Split(',').Select(int.Parse).ToArray();
                int j; int k;
                for (j = 0, k=j+1; j <number.Length-1; j++,k++)
                {
                    if (number[j] > number[k])
                    {
                        isSorted = false;
                        break;
                    }
                }
                if (!isSorted)
                {
                    Console.WriteLine("false");
                }
                else
                {
                    Console.WriteLine("true");
                }
            }
        }
    }
}