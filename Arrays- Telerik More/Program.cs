namespace Arrays__Telerik_More
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] number=Console.ReadLine().Split(',').Select(int.Parse).ToArray();

            string[] strange=new string[number.Length];

            int index = 0;
            for (int i = 0; i <number.Length; i++)
            {
                if (number[i] < 0) 
                {
                    strange[index] =number[i].ToString();
                    index++;  
                }
            }
            for (int i = 0; i <number.Length; i++)
            {
                if (number[i] == 0)
                {
                    strange[index] = number[i].ToString();
                    index++;
                }
               
            }
           
            for (int i = 0; i < number.Length; i++)
            {
                if (number[i] > 0)
                {
                    strange[index] = number[i].ToString();
                    index++;
                }
               
            }
            Console.WriteLine(string.Join(',',strange));
        }
    }
}