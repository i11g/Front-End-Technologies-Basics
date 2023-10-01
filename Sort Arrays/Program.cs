using System.Globalization;

namespace Sort_Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string line=Console.ReadLine();
            string[] items = line.Split(',');
            
            for (int i = 0; i < items.Length; i++)
            {
                for (int j = i+1; j < items.Length; j++)
                {
                    int num1 = int.Parse(items[i]);
                    int num2 = int.Parse(items[j]);
                    
                    string temp;
                    
                    if(num2>num1)
                    {   
                        temp = items[i];
                        items[i] = items[j];
                        items[j] = temp;
                    }
                   
                }
                
            }
            foreach (var item in items)
            {
                Console.Write(item);
            }

        }
    }
}