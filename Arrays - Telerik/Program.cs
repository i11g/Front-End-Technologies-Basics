namespace Arrays___Telerik
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string line=Console.ReadLine();

            string[] items = line.Split(',');

            int[] numbers=new int[items.Length];

            for (int i = 0; i < items.Length; i++)
            {
                numbers[i] = int.Parse(items[i]);
            }
            for (int i = items.Length-1; i >=0; i--)
            {   
                
                Console.Write(numbers[i] );
                if(i>0)
                {
                    Console.Write(", ");
                }
            }
            Console.WriteLine();
        }
    }
}